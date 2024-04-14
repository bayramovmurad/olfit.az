import { useState } from "react";
import ExercisesInput from "../components/exercises/ExercisesInput"
import ExerciseBanner from "../components/exercises/ExerciseBanner";
import ExerciseContext from "../components/exercises/ExerciseContext";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState([]);
  return (
    <div>
      <ExerciseBanner/>
      <ExercisesInput setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <ExerciseContext exercises={exercises} setExercises={setExercises} bodyPart={bodyPart}/>
    </div>
  )
}
export default Exercises