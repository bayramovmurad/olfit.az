import { useEffect, useState } from "react";
import { Data, exerciseOptions } from "../../utils/ExerciseData";
import ExerciseCard from "../../components/exercises/ExerciseCard";
import Loader from "../Loader";

const ExerciseContext = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercises = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await Data(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await Data(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercises();
  }, [bodyPart]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const totalPages = Math.ceil(exercises.length / exercisesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (!currentExercises.length) return <Loader />;

  const renderPagination = () => {
    const paginationItems = [];
    const maxPaginationItems = 5;
    const maxLeft = currentPage - Math.floor(maxPaginationItems / 2);
    const maxRight = currentPage + Math.floor(maxPaginationItems / 2);

    for (let page = 1; page <= totalPages; page++) {
      if (page === 1 || page === totalPages.length -1 || (page >= maxLeft && page <= maxRight)) {
        paginationItems.push(
          <button
            key={page}
            className={`w-10 h-10 rounded-full border border-green-500 mx-1 ${page === currentPage ? "bg-green-500 text-white" : ""
              }`}
            onClick={() => paginate(page)}
          >
           {page}
          </button>
        );
      }
    }

    return paginationItems;
  };

  return (
    <div>
      <h4 className="ml-24 mt-20 mb-10 text-4xl">Neticeler</h4>
      <div className="flex gap-x-10 gap-y-10 flex-wrap justify-center">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>

      <div className="flex justify-center items-center my-10">
        {renderPagination()}
        {totalPages > 5 && (
          <>
            <span className="mx-1">...</span>
            <button
              className="w-10 h-10 rounded-full border border-green-500 mx-1"
              onClick={() => paginate(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default ExerciseContext;
