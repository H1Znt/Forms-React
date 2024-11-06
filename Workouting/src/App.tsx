import { useState } from "react";
import { sortByDate } from "./utils";
import { AddWorkout } from "./components/AddWorkout/AddWorkout";
import { WorkoutsTable } from "./components/WorkoutsTable/WorkoutsTable";
import { TInitialFormState } from "./models/TInitialFormState";
import "./App.css";

function App() {
    const [workouts, setWorkouts] = useState<TInitialFormState[]>([]);

    const addWorkout = (workout : TInitialFormState) => {
        workout.id = workouts.length + 1;
        setWorkouts([...workouts, workout].sort(sortByDate));
    };

    const updateDistance = (workout : TInitialFormState) => {
        const dateIndex = workouts.findIndex(({ date }) => workout.date === date);
        const existedDate = workouts[dateIndex];
        const newWorkout = {
            ...existedDate,
            distance: String(Number(existedDate.distance) + Number(workout.distance))
        };
        const newWorkouts = [...workouts];
        newWorkouts[dateIndex] = newWorkout;
        setWorkouts(newWorkouts);
    }

    const deleteWorkout = (id: number | null) => {
        setWorkouts(workouts.filter((i) => i.id !== id));
    };

    return (
        <div className="wrapper">
            <AddWorkout addWorkout={addWorkout} updateDistance={updateDistance} />
            <WorkoutsTable workouts={workouts} deleteWorkout={deleteWorkout} />
        </div>
    )
};

export default App