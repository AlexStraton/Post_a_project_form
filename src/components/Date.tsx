import { useState } from "react";

export default function Dates({
  currentDate,
  startDate,
  setStartDate,
  dueDate,
  setDueDate,
}) {
  const [startDateError, setStartDateError] = useState("");
  const [dueDateError, setDueDateError] = useState("");

  function handleStartDate(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value < currentDate) {
      setStartDateError("Start date is in the past");
      setStartDate(currentDate);
    } else {
      setStartDateError("");
      setStartDate(event.target.value);
    }
  }

  function handleDueDate(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value < startDate) {
      setDueDateError("Due date is earlier than start date");
      setDueDate(currentDate);
    } else {
      setDueDateError("");
      setDueDate(event.target.value);
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
