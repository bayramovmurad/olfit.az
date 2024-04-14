import { useEffect, useState } from "react";
import { Data, exerciseOptions } from "../../utils/ExerciseData";
import HorizontalScroolBar from "./HorizontalScroolBar";

const ExercisesInput = ({ setExercises,bodyPart,setBodyPart }) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await Data('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData]);
        };

        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await Data('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                    || item.target.toLowerCase().includes(search)
                    || item.equipment.toLowerCase().includes(search)
                    || item.bodyPart.toLowerCase().includes(search),
            );

            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

            setSearch('');
            setExercises(searchedExercises);
        }
    };

  

    return (
        <div className="my-10">
            <div className="flex gap-x-5 w-full justify-center mb-10">
                <input className="pl-4 border border-green-500 outline-none min-w-[500px]" value={search} type="text" onChange={(e) => setSearch(e.target.value.toLowerCase())} />
                <button className="w-40 h-10 bg-green-500 hover:bg-red-500 duration-200 text-white" onClick={handleSearch}>Axtar</button>
            </div>
            <HorizontalScroolBar bodyParts={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </div>
    )
}
export default ExercisesInput