import { useState } from "react";
import ExercisesInput from "../components/exercises/ExercisesInput"
import ExerciseBanner from "../components/exercises/ExerciseBanner";
import ExerciseContent from "../components/exercises/ExerciseContent";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState([]);
  return (
    <div>
      <ExerciseBanner/>
      <ExercisesInput setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <ExerciseContent exercises={exercises} setExercises={setExercises} bodyPart={bodyPart}/>
    </div>
  )
}
export default Exercises