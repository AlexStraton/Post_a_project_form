import { ProjectInterface } from "../models/Project";

interface DatesProps {
  setFormData: React.Dispatch<React.SetStateAction<ProjectInterface>>;
  formData: ProjectInterface;
  startDateError: string;
  setStartDateError: (error: string) => void;
  dueDateError: string;
  setDueDateError: (error: string) => void;
}

export default function Dates({
  startDateError,
  setStartDateError,
  dueDateError,
  setDueDateError,
  formData,
  setFormData,
}: DatesProps) {
  const currentDate = new Date();

  function handleStartDate(event: React.ChangeEvent<HTMLInputElement>) {
    const newStartDate = new Date(event.target.value);

    if (newStartDate < currentDate) {
      setStartDateError("Start date is in the past");
    } else {
      setStartDateError("");
      setFormData((prevFormData) => ({
        ...prevFormData,
        startDate: newStartDate.toISOString().slice(0, 10),
      }));
    }
  }

  function handleDueDate(event: React.ChangeEvent<HTMLInputElement>) {
    const newDueDate = new Date(event.target.value);
    const start = new Date(formData.startDate);
    if (newDueDate < start) {
      setDueDateError("Due date is earlier than start date");
    } else {
      setDueDateError("");
      setFormData((prevFormData) => ({
        ...prevFormData,
        dueDate: newDueDate.toISOString().slice(0, 10),
      }));
    }
  }

  return (
    <>
      <section className='flex items-center justify-between gap-2'>
        <div>
          <label htmlFor='' className='text-green text-sm font-bold block'>
            Start Date
          </label>
          <input
            className='w-full p-2 border border-gray-300 rounded mt-1'
            id='dateRequired'
            type='date'
            name='dateRequired'
            value={formData.startDate || ""}
            onChange={handleStartDate}
          />
          <div className='text-sm text-red-900 font-bold'>{startDateError}</div>
        </div>

        <div>
          <label htmlFor='' className='text-green text-sm font-bold block'>
            Due Date
          </label>
          <input
            className='w-full p-2 border border-gray-300 rounded mt-1'
            id='dateRequired'
            type='date'
            name='dateRequired'
            value={formData.dueDate || ""}
            onChange={handleDueDate}
          />

          <div className='text-sm text-red-900 font-bold'>{dueDateError}</div>
        </div>
      </section>
    </>
  );
}
