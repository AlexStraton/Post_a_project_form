import { useState } from "react";

export default function Dates() {
  const currentDate = new Date().toLocaleString();

  const [date, setDate] = useState(currentDate);
  //const [dateError, setDateError] = useState("");
  console.log(date);
  // function handleDate(event: React.ChangeEvent<HTMLInputElement>) {
  //   setDate(event.target.value);

  //   // if (date < currentDate) {
  //   //   setDateError("Start date cannot be in the past");
  //   //   setDate(currentDate);
  //   // } else {
  //   //   setDate(event.target.value);
  //   // }
  // }

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
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setDate(event.target.value)
          }
        />
        {/* {dateError} */}
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
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setDate(event.target.value)
          }
        />
        {/* {dateError} */}
      </div>
    </section>
  );
}
