import { useState } from "react";

export default function Dropdown() {
  const [option, setOption] = useState(1);
  const [colour, setColour] = useState("bg-green-400");
  //console.log(option);

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newValue = Number(event.target.value);
    setOption(newValue);

    if (newValue === 1) {
      setColour("bg-green-400");
    } else if (newValue === 2) {
      setColour("bg-yellow-300");
    } else if (newValue === 3) {
      setColour("bg-red-400");
    }
  }
  return (
    <div>
      <label htmlFor='' className='text-green text-sm font-bold block'>
        Priority (1-3, 3 being critical)
      </label>
      <select
        onChange={handleChange}
        name=''
        id=''
        className={`w-full p-2 border border-gray-300 rounded mt-1 ${colour}`}>
        <option className='bg-green-300' value='1'>
          1
        </option>
        <option className='bg-yellow-300' value='2'>
          2
        </option>
        <option className='bg-red-400' value='3'>
          3
        </option>
      </select>
    </div>
  );
}
