import { useState } from "react";
import { TInitialFormState } from "../../models";
import { isValidDate, isValidDistance } from "../../utils";

type TAddWorkoutProps = {
  addWorkout: (workout: TInitialFormState) => void;
  updateDistance: (workout: TInitialFormState) => void;
};

export const AddWorkout: React.FC<TAddWorkoutProps> = ({
  addWorkout,
  updateDistance,
}) => {
  const initialFormState = { id: null, date: "", distance: "" };
  const [workout, setWorkout] = useState<TInitialFormState>(initialFormState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setWorkout({ ...workout, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!workout.date || !workout.distance) {
      return alert("Заполните все поля!");
    } else if (isValidDate(workout.date) === false) {
      return alert("Введите дату в правильном формате! Пример: 06.11.2024");
    } else if (isValidDistance(workout.distance) === false) {
      return alert("Введите дистанцию в правильном формате! Пример: 5.5 км");
    } else {
      setWorkout(initialFormState);
      addWorkout(workout);
      updateDistance(workout);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label className="display-input input-font">
          <span>Дата (ДД.ММ.ГГ)</span>
          <input
            type="text"
            name="date"
            value={workout.date}
            onChange={handleInputChange}
          />
        </label>
        <label className="display-input input-font">
          <span>Пройдено км</span>
          <input
            type="text"
            name="distance"
            value={workout.distance}
            onChange={handleInputChange}
          />
        </label>
        <div className="display-btn">
          <button className="add-workout">OK</button>
        </div>
      </div>
    </form>
  );
};
