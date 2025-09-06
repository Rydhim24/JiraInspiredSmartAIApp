// import { useState } from "react";
// import axios from "axios";

// export const TaskMangement = ({employees}) =>{

//     const [taskTitle, setTaskTitle] = useState("");
//     const [taskDesc, setTaskDesc] = useState("");
//     const [assignedEmp, setAssignedEmp] = useState("");
//     const [suggestions, setSuggestions] = useState([]);


//     const [showSuggestions, setShowSuggestions] = useState(false);



//     const [predictingTime, setPredictingTime] = useState(null);


//     //auto-completion suggestions api




//     const handleTaskSuggestion = async (e) => {
//         setTaskTitle(e.target.value);
//         if (e.target.value.length > 3) {
//             try {
//                 const response = await axios.post("http://localhost:5500/api/task/suggest", { input: e.target.value });
                
//                 // Debug response
//                 console.log("Response Data:", response.data);
    
//                 // Correct data handling
//                 let receivedSuggestions = [];
//                 if (Array.isArray(response.data.suggestions)) {
//                     receivedSuggestions = response.data.suggestions;
//                     //setSuggestions(response.data.suggestions);
//                 } else if (typeof response.data.suggestions === "string") {
//                     receivedSuggestions = response.data.suggestions.split("\n");
//                     //setSuggestions(response.data.suggestions.split("\n"));
//                 } else {
//                     setSuggestions(receivedSuggestions);
//                 setShowSuggestions(receivedSuggestions.length > 0);

//                     //setSuggestions([]);
//                 }
//             } catch (error) {
//                 console.log("Error while fetching suggestions:", error);
//             }
//         }
//     }
    
//     // const handleTaskSuggestion = async(e) => {
//     //     setTaskTitle(e.target.value);
//     //     if(e.target.value.length > 3) {
//     //         try {
//     //             const response = await axios.post("http://localhost:5500/api/task/suggest", {input : e.target.value});
//     //             setSuggestions(response.data.suggestions.split("\n"));
//     //             console.log("Suggestions:", response.data.suggestions.split("\n"));
//     //         } catch (error) {
//     //             console.log("error while fetching suggestions", error);
//     //         }
//     //     }
//     // }





//     return(
//         <div className="emp-wrapper bg-white shadow-md rounded p-5 w-7/12">

//             <h2 className="text-3xl text-center font-semibold mb-5">
//                 Assign Task
//             </h2>

//             <div className="input-group mb-4">
//                 <label className="block mb-2">Enter Task Title</label>
//                 <input 
//                 type="text" 
//                 placeholder="Enter Task Title"
//                 className="border p-2 w-full"
//                 value={taskTitle}
//                 onChange={handleTaskSuggestion}
//                 />
                
//                  {showSuggestions && suggestions.length > 0 && (
//                     <ul className="absolute bg-blue-100 border border-gray-300 w-full shadow-md rounded-md 

//                     p-3 list-disc list-inside text-sm 
                    
//                     z-10 mt-1 max-h-52 
//                         overflow-y-auto
//                         sm:max-h-40
//                         md:max-h-44
//                         lg:max-h-48">
//                         {suggestions.map((s, i) => (
//                             <li 
//                                 key={i}
//                                 className="p-2 hover:bg-indigo-100 cursor-pointer"
//                                 onClick={() => {
//                                     setTaskTitle(s.replace(/\*\*_?|_?\*\*/g, ""));
//                                     setShowSuggestions(false);
//                                 }}
                                
//                                 //onClick={() => setTaskTitle(s.replace(/\*\*_|_\*\*/g, ""))}  // Clean Markdown before setting
//                                 dangerouslySetInnerHTML={{ __html: s.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/_(.*?)_/g, '<i>$1</i>') }}
//                             />
//                         ))}
//                     </ul>
//                 )}


//             </div>

//             <div className="input-group mb-4">
//                 <label className="block mb-2">Enter Task Description</label>
//                 <textarea 
//                 placeholder="Enter Task Description"
//                 className="border p-2 w-full"
//                 />
//             </div>

//             <div className="input-group mb-4">
//                 <label className="block mb-2">Select Employee</label>
//                 <select className="border p-2 w-full">
//                     <option>Select Employee</option>
//                     {
//                         employees.map((emp) =>(
//                             <option key={emp.empId} value={emp.empId}>{emp.empName}</option>
//                         ))
//                     }
//                 </select>


                
                
                
            
//             </div>


//             <div className="button-group text-center flex gap-3">
//                 <button className="bg-indigo-500 text-white py-4 rounded w-1/2 shadow-md">
//                     Assign Task
//                 </button>
//                 <button onClick={handleTaskSuggestion} className="bg-indigo-500 text-white py-4 rounded w-1/4 shadow-md">Generate AI Suggestions</button>
            
//             </div>


//         </div>

//     )
// }



// import { useState } from "react";
// import axios from "axios";

// export const TaskMangement = ({ employees }) => {
//     const [taskTitle, setTaskTitle] = useState("");
//     const [taskDesc, setTaskDesc] = useState("");
//     const [assignedEmp, setAssignedEmp] = useState("");
//     const [suggestions, setSuggestions] = useState([]);
//     const [showSuggestions, setShowSuggestions] = useState(false);

//     const handleTaskSuggestion = async () => {
//         setTaskTitle(e.target.value);
//         if (e.target.value > 3) {
//             try {
//                 const response = await axios.post("http://localhost:5500/api/task/suggest", { input: e.target.value });
//                 console.log("Response Data:", response.data);
                
//                 let receivedSuggestions = [];
//                 if (Array.isArray(response.data.suggestions)) {
//                     receivedSuggestions = response.data.suggestions;
//                 } else if (typeof response.data.suggestions === "string") {
//                     receivedSuggestions = response.data.suggestions.split("\n");
//                 }
                
//                 setSuggestions(receivedSuggestions);
//                 setShowSuggestions(receivedSuggestions.length > 0);
//             } catch (error) {
//                 console.log("Error while fetching suggestions:", error);
//             }
//         } else {
//             console.log("Task title is too short for suggestions!");
//         }
//     };

//     return (
//         <div className="emp-wrapper bg-white shadow-md rounded p-5 w-7/12 relative">
//             <h2 className="text-3xl text-center font-semibold mb-5">Assign Task</h2>

//             <div className="input-group mb-4 relative">
//                 <label className="block mb-2">Enter Task Title</label>
//                 <input 
//                     type="text" 
//                     placeholder="Enter Task Title" 
//                     className="border p-2 w-full" 
//                     value={taskTitle} 
//                     onChange={(e) => setTaskTitle(e.target.value)} 
//                 />
//                 {showSuggestions && suggestions.length > 0 && (
//                     <ul className="absolute left-0 w-full bg-white border border-gray-300 shadow-md rounded-md p-2 mt-1 list-disc list-inside text-sm max-h-40 overflow-y-auto z-50">
//                         {suggestions.map((s, i) => (
//                             <li 
//                                 key={i} 
//                                 className="p-2 hover:bg-indigo-100 cursor-pointer rounded-md"
//                                 onClick={() => {
//                                     setTaskTitle(s.replace(/\*\*_?|_?\*\*/g, ""));
//                                     setShowSuggestions(false);
//                                 }}
//                                 dangerouslySetInnerHTML={{ __html: s.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/_(.*?)_/g, '<i>$1</i>') }}
//                             />
//                         ))}
//                     </ul>
//                 )}
//             </div>

//             <div className="input-group mb-4">
//                 <label className="block mb-2">Enter Task Description</label>
//                 <textarea placeholder="Enter Task Description" className="border p-2 w-full" />
//             </div>

//             <div className="input-group mb-4">
//                 <label className="block mb-2">Select Employee</label>
//                 <select className="border p-2 w-full">
//                     <option>Select Employee</option>
//                     {employees.map((emp) => (
//                         <option key={emp.empId} value={emp.empId}>{emp.empName}</option>
//                     ))}
//                 </select>
//             </div>

//             <div className="button-group text-center flex gap-3">
//                 <button className="bg-indigo-500 text-white py-4 rounded w-3/4 shadow-md">Assign Task</button>
//                 <button 
//                     onClick={handleTaskSuggestion} 
//                     className="bg-gray-500 text-white py-4 rounded w-1/4 shadow-md"
//                 >
//                     Generate AI Suggestions
//                 </button>
//             </div>
//         </div>
//     );
// };


import { useState } from "react";
import axios from "axios";


import EmployeeTabs from "./EmployeeTabs";



export const TaskMangement = ({ employees }) => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDesc, setTaskDesc] = useState("");
    const [assignedEmp, setAssignedEmp] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [assignedTasks, setAssignedTasks] = useState([]);

    const handleTaskSuggestion = async () => {
        if (taskTitle.length > 3) {
            try {
                const response = await axios.post("http://localhost:5500/api/task/suggest", { input: taskTitle });
                console.log("Response Data:", response.data);
                
                let receivedSuggestions = [];
                if (Array.isArray(response.data.suggestions)) {
                    receivedSuggestions = response.data.suggestions;
                } else if (typeof response.data.suggestions === "string") {
                    receivedSuggestions = response.data.suggestions.split("\n");
                }
                
                setSuggestions(receivedSuggestions);
                setShowSuggestions(receivedSuggestions.length > 0);
            } catch (error) {
                console.error("Error while fetching suggestions:", error);
            }
        } else {
            console.warn("Task title is too short for suggestions!");
        }
    };

    const handleAssignTask = () => {
        if (!taskTitle || !taskDesc || !assignedEmp) {
            alert("Please fill all fields before assigning a task!");
            return;
        }

        const selectedEmployee = employees.find(emp => emp.empId === assignedEmp);

    const newTask = {  // ✅ New object to store assigned task details
        id: Date.now(),
        title: taskTitle,
        description: taskDesc,
        employeeId: assignedEmp,
        employeeName: selectedEmployee.empName
    };

    setAssignedTasks([...assignedTasks, newTask]); // ✅ Updating assigned tasks state
};

// ✅ ADDED THIS LINE BELOW TO DISPLAY EMPLOYEE TABS
<EmployeeTabs assignedTasks={assignedTasks} /> 

    return (
        <div className="emp-wrapper bg-white shadow-md rounded p-5 w-7/12 relative">
            <h2 className="text-3xl text-center font-semibold mb-5">Assign Task</h2>

            <div className="input-group mb-4 relative">
                <label className="block mb-2">Enter Task Title</label>
                <input 
                    type="text" 
                    placeholder="Enter Task Title" 
                    className="border p-2 w-full" 
                    value={taskTitle} 
                    onChange={(e) => setTaskTitle(e.target.value)} 
                />
                {showSuggestions && suggestions.length > 0 && (
                    <ul className="absolute left-0 w-full bg-white border border-gray-300 shadow-md rounded-md p-2 mt-1 list-disc list-inside text-sm max-h-40 overflow-y-auto z-50">
                        {suggestions.map((s, i) => (
                            <li 
                                key={i} 
                                className="p-2 hover:bg-indigo-100 cursor-pointer rounded-md"
                                onClick={() => {
                                    setTaskTitle(s.replace(/\*\*_?|_?\*\*/g, ""));
                                    setShowSuggestions(false);
                                }}
                                dangerouslySetInnerHTML={{ __html: s.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/_(.*?)_/g, '<i>$1</i>') }}
                            />
                        ))}
                    </ul>
                )}
            </div>

            <div className="input-group mb-4">
                <label className="block mb-2">Enter Task Description</label>
                <textarea 
                    placeholder="Enter Task Description" 
                    className="border p-2 w-full" 
                    value={taskDesc} 
                    onChange={(e) => setTaskDesc(e.target.value)}
                />
            </div>

            <div className="input-group mb-4">
                <label className="block mb-2">Select Employee</label>
                <select 
                    className="border p-2 w-full" 
                    value={assignedEmp}
                    onChange={(e) => setAssignedEmp(e.target.value)}
                >
                    <option value="">Select Employee</option>
                    {employees.map((emp) => (
                        <option key={emp.empId} value={emp.empId}>{emp.empName}</option>
                    ))}
                </select>
            </div>

            <div className="button-group text-center flex gap-3">
                <button className="bg-indigo-500 text-white py-4 rounded w-3/4 shadow-md">Assign Task</button>
                <button 
                    onClick={handleTaskSuggestion} 
                    className="bg-gray-500 text-white py-4 rounded w-1/4 shadow-md"
                >
                    Generate AI Suggestions
                </button>
            </div>
        </div>
    );
};






