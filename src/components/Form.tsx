import { useState } from "react";
import Date from "./Date";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
import { ProjectInterface } from "../models/Project";

interface FormProps {
  formData: ProjectInterface;
  setFormData: React.Dispatch<React.SetStateAction<ProjectInterface>>;
}

export default function Form({ formData, setFormData }: FormProps) {
  const [nameError, setNameError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [startDateError, setStartDateError] = useState("");
  const [dueDateError, setDueDateError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(
    event: React.SyntheticEvent<HTMLFormElement | HTMLButtonElement>
  ) {
    event.preventDefault();

    if (!formData.projectOwnerFirstName || !formData.projectOwnerLastName) {
      setNameError("Please enter a full name");
    } else if (!formData.projectTitle) {
      setTitleError("Please give your project a title");
    } else if (formData.description.length < 50) {
      setDescriptionError("Description must be longer than 50 characters");
    } else if (startDateError) {
      event.preventDefault();
    } else if (dueDateError) {
      event.preventDefault();
    } else {
      navigate("/project-details", { state: { formData } });
    }
  }

  function handleFormChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    console.log(event.target.value, event.target.name);
    setFormData((previousFormData) => ({
      ...previousFormData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <main className='min-h-screen bg-gray-50 flex flex-col justify-center '>
      <section className='max-w-ad w-full mx-auto'>
        <div className='text-center font-medium text-5xl text-green'>
          Projects
        </div>
        <div className='text-center text-green text-3xl font-bold my-4'>
          Create your project here
        </div>
      </section>
      <section className='max-w-md w-full mx-auto mt-4 mb-4 bg-light-green p-8 border rounded-lg border-green-300 shadow'>
        <form onSubmit={handleSubmit} action='submit' className='space-y-6'>
          <div>
            <label htmlFor='' className='text-green text-md font-bold block'>
              Project Owner <span className='text-red-700'>*</span>
            </label>
            <div className='flex items-center justify-between gap-2'>
              <input
                name='projectOwnerFirstName'
                type='text'
                className={`w-full p-2 border ${
                  nameError && !formData.projectOwnerFirstName
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded mt-1`}
                placeholder='First Name'
                value={formData.projectOwnerFirstName}
                onChange={handleFormChange}
              />

              <input
                name='projectOwnerLastName'
                type='text'
                className={`w-full p-2 border ${
                  nameError && !formData.projectOwnerLastName
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded mt-1`}
                placeholder='Last Name'
                value={formData.projectOwnerLastName}
                onChange={handleFormChange}
              />
            </div>
            <div className='text-red-900 font-bold text-sm'>{nameError}</div>
          </div>

          <div>
            <div className='flex items-center justify-between gap-2'>
              <div>
                <label
                  htmlFor=''
                  className='text-green text-sm font-bold  block'>
                  Department
                </label>
                <input
                  name='department'
                  type='text'
                  className='w-full p-2 border border-gray-300 rounded mt-1'
                  placeholder='Optional'
                  value={formData.department}
                  onChange={handleFormChange}
                />
              </div>
              <div>
                <label
                  htmlFor=''
                  className='text-green text-sm font-bold  block'>
                  Manager
                </label>
                <input
                  name='manager'
                  type='text'
                  className='w-full p-2 border border-gray-300 rounded mt-1'
                  placeholder='Optional'
                  value={formData.manager}
                  onChange={handleFormChange}
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor='' className='text-green text-sm font-bold  block'>
              Project Title <span className='text-red-700'>*</span>
            </label>
            <input
              name='projectTitle'
              type='text'
              className={`text-green w-full p-2 border ${
                titleError && !formData.projectTitle
                  ? "border-red-600"
                  : "border-gray-300"
              } rounded mt-1`}
              value={formData.projectTitle}
              onChange={handleFormChange}
              placeholder='Title'
            />
            <div className='text-red-900 font-bold text-sm'>{titleError}</div>
          </div>
          <div>
            <label htmlFor='' className='text-green text-sm font-bold  block'>
              Description <span className='text-red-700'>*</span>
            </label>
            <textarea
              name='description'
              id='descriptionTextArea'
              className={`text-green w-full p-2 border ${
                descriptionError && !formData.description
                  ? "border-red-600"
                  : "border-gray-300"
              } rounded mt-1`}
              value={formData.description}
              onChange={handleFormChange}
              placeholder='Write your project description here'
            />
            <div className='text-red-900 font-bold text-sm'>
              {descriptionError}
            </div>
          </div>
          <Dropdown setFormData={setFormData} formData={formData} />

          <Date
            // startDate={startDate}
            // setStartDate={setStartDate}
            // setDueDate={setDueDate}
            formData={formData}
            setFormData={setFormData}
            startDateError={startDateError}
            setStartDateError={setStartDateError}
            dueDateError={dueDateError}
            setDueDateError={setDueDateError}
          />

          <button
            type='submit'
            className='w-full py-3 px-4 bg-green-600 hover:bg-blue-900 rounded-md text-white text-sm'>
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}
