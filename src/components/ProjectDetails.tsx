import { useState, useEffect } from "react";
import formatDate from "../utils/date-utils";
import { ProjectInterface } from "../models/Project";

interface ProjectDetailsProps {
  formData: ProjectInterface;
}

export default function ProjectDetails({ formData }: ProjectDetailsProps) {
  const [priorityColor, setPriorityColor] = useState("");
  const [checked, setChecked] = useState(false);

  const startDateObject = new Date(formData.startDate);
  const dueDateObject = new Date(formData.dueDate);
  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    switch (formData.priority) {
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
  }, [formData.priority]);

  return (
    <>
      <h1 className=' mx-4 sm:mx-auto sm:max-w-xl text-center text-3xl sm:text-4xl font-semibold text-green-700 mt-8'>
        Project Details
      </h1>
      <section className='mx-4 sm:mx-auto max-w-md sm:max-w-2xl mt-8 mb-4 bg-light-green p-4 sm:p-8 border border-green-300 rounded-lg shadow'>
        <div className='mt-4'>
          <h2 className='text-left text-2xl font-semibold text-green-700'>
            Project Title:{" "}
          </h2>
          <div className='bg-gray-200 w-full mx-2 p-2 rounded text-2xl'>
            {formData.projectTitle}
          </div>
        </div>

        <div className='mt-12'>
          <h2 className='text-left text-2xl font-semibold text-green-700'>
            Project Owner:{" "}
          </h2>
          <div className='bg-gray-200 w-full mx-2 p-2 rounded text-2xl'>
            {formData.projectOwnerFirstName} {formData.projectOwnerLastName}
          </div>
        </div>

        <div className='mt-12'>
          <h2 className='text-left text-2xl font-semibold text-green-700'>
            Project Manager:{" "}
          </h2>
          <div className='bg-gray-200 w-full mx-2 p-2 rounded text-2xl'>
            {formData.manager}
          </div>
        </div>

        <div className='mt-12'>
          <h2 className='text-left text-2xl font-semibold text-green-700'>
            Department:{" "}
          </h2>
          <div className='bg-gray-200 w-full mx-2 p-2 rounded text-2xl'>
            {formData.department}
          </div>
        </div>

        <div className='mt-12'>
          <h2 className='text-left text-2xl font-semibold text-green-700'>
            Project Description:{" "}
          </h2>
          <div className='flex flex-wrap bg-gray-200 w-full mx-2 p-2 rounded text-2xl'>
            {formData.description}
          </div>
        </div>

        <div className='mt-12 text-center text-lg font-medium'>
          <h1
            className={`${priorityColor} p-4 mx-12 text-center gap-4 text-2xl font-semibold text-green-700`}>
            Priority: {formData.priority}
          </h1>
        </div>

        <div className='mt-12'>
          <h2 className='text-left font-extrabold text-2xl text-green-700'>
            Start date:{" "}
          </h2>
          <div className='bg-gray-200 w-full mx-2 p-2 rounded text-2xl'>
            {formatDate(startDateObject)}
          </div>
        </div>

        <div className='mt-12'>
          <h2 className='text-left font-extrabold text-2xl text-green-700'>
            Due date:{" "}
          </h2>
          <div className='bg-gray-200 w-full mx-2 p-2 rounded text-2xl'>
            {formatDate(dueDateObject)}
          </div>
        </div>
        <div className='mt-12 flex justify-center items-center'>
          <label className='flex items-center gap-2 text-lg font-medium text-green-700'>
            <h2 className='text-left font-extrabold text-2xl text-green-700'>
              Project Status (Tick when complete)
            </h2>
            <input
              className='form-checkbox h-5 w-5 text-green-600 rounded'
              type='checkbox'
              checked={checked}
              onChange={handleChange}
            />
          </label>
        </div>
      </section>
    </>
  );
}
