import { useState, useEffect } from "react";
import formatDate from "../utils/date-utils";

export default function ProjectDetails(props) {
  const { formData, priority, startDate, dueDate } = props;

  const [priorityColor, setPriorityColor] = useState("");

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    switch (priority) {
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
        setPriorityColor("bg-green-100");
    }
  }, [priority]);

  return (
    <section className='max-w-2xl mx-auto mt-8 mb-4 bg-light-green p-8 border border-green-300 rounded-lg shadow'>
      <h1 className='text-center text-3xl font-semibold text-green-700 mb-2'>
        Project Details
      </h1>
      <h1 className='text-center text-2xl font-semibold text-green-700'>
        Project Title: {formData.projectTitle}
      </h1>
      <div className='mt-4 flex flex-wrap justify-between items-center text-center'>
        <div className='w-full text-lg font-medium text-green-700'>
          Project Owner:
          <h2 className='font-bold'>
            {formData.projectOwnerFirstName} {formData.projectOwnerLastName}
          </h2>
        </div>
        <div className='w-full text-lg font-medium text-green-700 mt-4 '>
          Project Manager: <h2 className='font-bold'>{formData.manager}</h2>
          Department: <h2 className='font-bold'>{formData.department}</h2>
        </div>
      </div>
      <div className='mt-4'>
        <h2 className='text-center text-lg font-medium text-green-700'>
          Project Description:
        </h2>
        <p className='overflow-hidden break-words w-full text-center text-green-600'>
          {formData.description}
        </p>
      </div>
      <div className='mt-4 text-center text-lg font-medium'>
        <h2 className={`${priorityColor}`}>Priority: {priority}</h2>
      </div>
      <div className='mt-4 flex justify-between items-center'>
        <h3 className='text-center text-lg font-medium text-green-700'>
          Start date: {formatDate(startDate).toLocaleString()}
        </h3>
        <h3 className='text-center text-lg font-medium text-green-700'>
          Due date: {formatDate(dueDate).toLocaleString()}
        </h3>
      </div>
      <div className='mt-4 flex justify-center items-center'>
        <label className='flex items-center gap-2 text-lg font-medium text-green-700'>
          Project Status (Tick when complete)
          <input
            className='form-checkbox h-5 w-5 text-green-600 rounded'
            type='checkbox'
            checked={checked}
            onChange={handleChange}
          />
        </label>
      </div>
    </section>
  );
}
