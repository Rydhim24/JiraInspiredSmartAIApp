import { EmployeeMangement } from "./components/EmployeeManagement";
import { TaskMangement } from "./components/TaskManagement";
import Header from "./components/Header";
import { useEffect, useState } from "react";


function App() {


  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");


  useEffect(() => {
    fetch("http://localhost:5500/api/emp/empList")
    .then((response) =>{
      if(!response.ok) throw new Error("Error while fetching employees...")
        return response.json();

    })
    .then((data) => {
      setEmployees(data);
      console.log(data);

    })
    .catch((error) => {
      setError(error.message);
    })

  },[]);



  return(
    <div id="container" className="bg-gray-200 h-screen" >

      <Header/>
      <div className="w-10/12 m-auto flex justify-between">
        <EmployeeMangement/>
        <TaskMangement employees={employees}/>
      </div>

    </div>
  )
}

export default App;