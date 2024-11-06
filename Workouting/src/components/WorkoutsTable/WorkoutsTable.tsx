import { TInitialFormState } from "../../models";

type TWorkoutsTable = {
  deleteWorkout: (id: number | null) => void;
  workouts: TInitialFormState[];
};

export const WorkoutsTable: React.FC<TWorkoutsTable> = ({
  deleteWorkout,
  workouts,
}) => {
  return (
    <>
      <div className="workout-list-row-header">
        <span>Дата (ДД.ММ.ГГ)</span>
        <span>Пройдено км</span>
        <span>Действия</span>
      </div>
      <div className="workout-list">
        {Array.isArray(workouts) && workouts.length > 0 ? (
          workouts.map((item) => (
            <div className="workout-list-row" key={item.id}>
              <span>{item.date}</span>
              <span>{item.distance}</span>
              <div>
                <p
                  className="button-delete"
                  onClick={() => deleteWorkout(item.id)}
                >
                  ✘
                </p>
              </div>
            </div>
          ))
        ) : (
          <div>
            <p className="no-workout">Список тренировок пуст</p>
          </div>
        )}
      </div>
    </>
  );
};
