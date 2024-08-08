import { useState, useEffect } from "react";

export default function ProjectDetails(props) {
  const { formData, option, startDate, dueDate } = props;
  //console.log(startDate, dueDate);
  const [priorityColor, setPriorityColor] = useState("");

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    switch (option) {
      case "Low":
        setPriorityColor("bg-green-100");
        break;
      case "High":
        setPriorityColor("bg-yellow-100");
        break;
      case "Critical":
        setPriorityColor("bg-red-100");
        break;
      default:
        setPriorityColor("");
    }
  }, [option]);

  return (
    <section className='max-w-md w-full mx-auto mt-4 bg-light-green p-8 border rounded-md border-gray-300'>
      <h1 className='text-center font-medium text-xl text-green'>
        Project Title: {formData.projectTitle}
      </h1>
      <div className='flex flex-row gap-2 text-center font-medium text-xl text-green'>
        Project Owner:
        <h2>{formData.projectOwnerFirstName}</h2>
        <h2>{formData.projectOwnerLastName}</h2>
      </div>
      <div className='text-center font-medium text-xl text-green'>
        <h2> Project Manager: {formData.projectOwnerFirstName}</h2>
        <h2> Department: {formData.projectOwnerLastName}</h2>
      </div>
      <h2 className='text-center font-medium text-xl text-green'>
        Project Description: {formData.description}
      </h2>
      <h2 className={`text-center font-medium text-xl ${priorityColor}`}>
        Priority: {option}
      </h2>
      <div className='text-center font-medium text-xl text-green'>
        <h3>Start date: {startDate}</h3>
        <h3>Due date: {dueDate}</h3>
      </div>
      <div>
        <label className='flex items-center justify-center text-center font-medium text-xl text-green'>
          Project Status (Tick when complete)
          <input
            className='form-checkbox h-5 w-5 text-green-600'
            type='checkbox'
            checked={checked}
            onChange={handleChange}
          />
        </label>
      </div>
    </section>
  );
}
