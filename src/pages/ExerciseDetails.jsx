import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExerciseDetailContext from "../components/exercises/ExerciseDetailContext";
import { Data, exerciseOptions } from "../utils/ExerciseData";




const ExerciseDetails = () => {
  const [exerciseDetails, setExerciseDetails] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    ExercisesData()
  }, [id])

  const ExercisesData = async () => {
   const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
   const exerciseDetailData = await Data(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
   setExerciseDetails(exerciseDetailData)
  }



  return (
    <div>
      <ExerciseDetailContext exerciseDetails={exerciseDetails} />
    </div>
  )
}
export default ExerciseDetails