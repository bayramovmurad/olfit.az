import { Link } from "react-router-dom"

const ExerciseCard = ({ exercise }) => {
    return (
        <Link to={`/exercise/${exercise.id}`}>
            <div className="border-t-4 border-green-500 w-[300px] h-[400px] shadow-lg bg-white flex items-center justify-center flex-col gap-y-2 p-5">
                <img width={200} src={exercise.gifUrl} alt={exercise.name} loading="lazy" />

                <div className="flex gap-x-2">
                    <button className="w-28 h-9 rounded-full bg-green-500 hover:bg-red-500 text-white duration-300">{exercise.bodyPart}</button>
                    <button className="w-28 h-9 rounded-full bg-green-500 hover:bg-red-500 text-white duration-300">{exercise.target}</button>
                </div>
                <h4>{exercise.name}</h4>
            </div>
        </Link>
    )
}
export default ExerciseCard