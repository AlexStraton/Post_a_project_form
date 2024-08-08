import Form from "./components/Form";
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails";
import { useState } from "react";
//import { ProjectInterface } from "./models/Project";

export default function App() {
  const [formData, setFormData] = useState({
    projectOwnerFirstName: "",
    projectOwnerLastName: "",
    department: "",
    manager: "",
    projectTitle: "",
    description: "",
    priority: "",

    startDate: "",
    dueDate: "",
  });
  // research how to attach and attach to component);

  //Dropdown state
  const [option, setOption] = useState("Low");
  const [colour, setColour] = useState("bg-green-100");

  //Date state
  const currentDate = new Date().toISOString().slice(0, 10);
  const [startDate, setStartDate] = useState(currentDate);
  const [dueDate, setDueDate] = useState(currentDate);

  return (
    <main className='flex flex-col'>
      <header className='flex h-24 bg-light-green'>
        <img src='/logo.png' height={64} className='h-16 m-auto' />
      </header>
      <Routes>
        <Route
          path='/'
          element={
            <Form
              formData={formData}
              setFormData={setFormData}
              option={option}
              setOption={setOption}
              colour={colour}
              setColour={setColour}
              startDate={startDate}
              setStartDate={setStartDate}
              dueDate={dueDate}
              setDueDate={setDueDate}
              currentDate={currentDate}
            />
          }
        />
        <Route
          path='/project-details'
          element={
            <ProjectDetails
              formData={formData}
              option={option}
              startDate={startDate}
              dueDate={dueDate}
            />
          }
        />
      </Routes>
    </main>
  );
}
