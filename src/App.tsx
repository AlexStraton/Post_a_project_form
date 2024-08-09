import Form from "./components/Form";
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails";
import { useState } from "react";
import { ProjectInterface } from "./models/Project";

export default function App() {
  const currentDate = new Date().toISOString().slice(0, 10);
  const [formData, setFormData] = useState<ProjectInterface>({
    projectOwnerFirstName: "",
    projectOwnerLastName: "",
    department: "",
    manager: "",
    projectTitle: "",
    description: "",
  });

  //Dropdown state
  const [priority, setPriority] = useState("Low");
  const [colour, setColour] = useState("bg-green-100");

  //Date state
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
              setPriority={setPriority}
              colour={colour}
              setColour={setColour}
              startDate={startDate}
              setStartDate={setStartDate}
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
              priority={priority}
              colour={colour}
              startDate={startDate}
              dueDate={dueDate}
            />
          }
        />
      </Routes>
    </main>
  );
}
