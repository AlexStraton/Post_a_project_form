export default function Dropdown({ option, setOption, colour, setColour }) {
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newValue = event.target.value;
    setOption(newValue);

    if (newValue === "Low") {
      setColour("bg-green-100");
    } else if (newValue === "High") {
      setColour("bg-yellow-100");
    } else if (newValue === "Critical") {
      setColour("bg-red-100");
    }
  }
  return (
    <div>
      <label htmlFor='' className='text-green text-sm font-bold block'>
        Priority
      </label>
      <select
        onChange={handleChange}
        name=''
        id=''
        className={`w-full p-2 border border-gray-300 rounded mt-1 ${colour}`}>
        <option className='bg-green-100' value='Low'>
          Low
        </option>
        <option className='bg-yellow-100' value='High'>
          High
        </option>
        <option className='bg-red-100' value='Critical'>
          Critical
        </option>
      </select>
    </div>
  );
}
