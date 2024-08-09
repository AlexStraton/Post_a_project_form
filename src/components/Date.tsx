import { useState } from "react";

interface DatesProps {
  currentDate: Date;
  startDate: Date;
  setStartDate: (date: Date) => void;
  setDueDate: (date: Date) => void;
}

export default function Dates({
  startDate,
  setStartDate,
  setDueDate,
}: DatesProps) {
  const [startDateError, setStartDateError] = useState("");
  const [dueDateError, setDueDateError] = useState("");
  const currentDate = new Date();

  function handleStartDate(event: React.ChangeEvent<HTMLInputElement>) {
    const newStartDate = new Date(event.target.value);

    if (newStartDate < currentDate) {
      setStartDateError("Start date is in the past");
      setStartDate(currentDate);
    } else {
      setStartDateError("");
      setStartDate(newStartDate);
    }
  }

  function handleDueDate(event: React.ChangeEvent<HTMLInputElement>) {
    const newDueDate = new Date(event.target.value);
    if (newDueDate < startDate) {
      setDueDateError("Due date is earlier than start date");
      setDueDate(currentDate);
    } else {
      setDueDateError("");
      setDueDate(newDueDate);
    }
  }

  return (
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
          onChange={handleStartDate}
        />
        <div className='text-sm'>{startDateError}</div>
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
          onChange={handleDueDate}
        />
        <p>{"\t"}</p>
        <div className='text-sm'>{dueDateError}</div>
      </div>
    </section>
  );
}
