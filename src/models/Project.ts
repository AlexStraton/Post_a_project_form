export interface ProjectInterface {
  projectOwnerFirstName: string;
  projectOwnerLastName: string;
  department: string;
  manager: string;
  projectTitle: string;
  description: string;
  priority: "Low" | "High" | "Critical";
  startDate: object; //check if it's date object
  dueDate: object;
}
