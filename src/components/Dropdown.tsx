import { ProjectInterface } from "../models/Project";

interface DropdownProps {
  setFormData: React.Dispatch<React.SetStateAction<ProjectInterface>>;
  formData: ProjectInterface;
}

export default function Dropdown({ formData, setFormData }: DropdownProps) {
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newPriority = event.target.value;
    let newColour;

    switch (newPriority) {
      case "Low":
        newColour = "bg-green-100";
        break;
      case "High":
        newColour = "bg-yellow-100";
        break;
      case "Critical":
        newColour = "bg-red-100";
        break;
      default:
        newColour = "bg-green-100";
        break;
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      priority: newPriority,
      colour: newColour,
    }));
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
        className={`w-full p-2 border border-gray-300 rounded mt-1 ${formData.colour}`}>
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
