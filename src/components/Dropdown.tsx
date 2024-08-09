interface DropdownProps {
  setPriority: (setPriority: string) => void;
  colour: string;
  setColour: (colsetColourour: string) => void;
}

export default function Dropdown({
  setPriority,
  colour,
  setColour,
}: DropdownProps) {
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const priority = event.target.value;

    setPriority(priority);

    if (priority === "Low") {
      setColour("bg-green-100");
    } else if (priority === "High") {
      setColour("bg-yellow-100");
    } else if (priority === "Critical") {
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
