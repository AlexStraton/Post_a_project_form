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
    priority: "",
    colour: "bg-green-100",
    startDate: currentDate,
    dueDate: currentDate,
  });

  return (
    <main className='flex flex-col'>
      <header className='flex h-24 bg-light-green'></header>
      <Routes>
        <Route
          path='/'
          element={<Form formData={formData} setFormData={setFormData} />}
        />
        <Route
          path='/project-details'
          element={<ProjectDetails formData={formData} />}
        />
      </Routes>
    </main>
  );
}
