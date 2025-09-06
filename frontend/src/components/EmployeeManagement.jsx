import axios from "axios";
import { useState } from "react";

export const EmployeeMangement = () => {

    const [empId, setEmpId] = useState("");
    const [empName, setEmpName] = useState("");
    const [empSkills, setEmpSkills] = useState("");         
    const [isClicked, setIsClicked] = useState(false);

    const handleAddEmp = async(e) => {
        e.preventDefault();
        setIsClicked(true);

        try {
            const res = await axios.post("http://localhost:5500/api/emp/create", {empId, empName, empSkills});
            setEmpId("");
            setEmpName("");
            setEmpSkills("");
        } catch (error) {
            console.log("error while storing data in db", error);
        } finally {
            setIsClicked(false);
        }

    }


    
    return(
        <div className="emp-wrapper bg-white shadow-md rounded p-5 w-1/3">

            <h2 className="text-3xl text-center font-semibold mb-5">
                Add Employee
            </h2>

            <div className="input-group mb-4">
                <label className="block mb-2">Enter Emp ID</label>
                <input 
                type="text" 
                placeholder="Enter Emp ID"
                className="border p-2 w-full"
                value={empId}
                onChange={(e) => setEmpId(e.target.value)}
                />
            </div>

            <div className="input-group mb-4">
                <label className="block mb-2">Enter Emp Name</label>
                <input 
                type="text" 
                placeholder="Enter Emp Name"
                className="border p-2 w-full"
                value={empName}
                onChange={(e) => setEmpName(e.target.value)}
                />
            </div>

            <div className="input-group mb-4">
                <label className="block mb-2">Enter Emp Skills</label>
                <input 
                type="text" 
                placeholder="Enter Emp Skills"
                className="border p-2 w-full"
                value={empSkills}
                onChange={(e) => setEmpSkills(e.target.value)}
                />
            </div>


            <div className="button-group text-center">
                <button className={`bg-indigo-500 text-white py-4 rounded w-1/2 shadow-md ${isClicked ? 'opacity-50' : ''}`} 
                onClick={handleAddEmp}
                disabled={isClicked}
                >
                    {isClicked ? 'Adding...' : 'Add New Employee'}
                </button>
            </div>


        </div>

    )
}
