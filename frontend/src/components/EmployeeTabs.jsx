import { useState } from "react";

const EmployeeTabs = ({ assignedTasks }) => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    // Get unique employees from assignedTasks
    const uniqueEmployees = [...new Map(assignedTasks.map(task => [task.employeeId, task])).values()];

    return (
        <div className="mt-6 bg-gray-100 p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold text-center mb-4">Assigned Tasks</h3>
            
            {uniqueEmployees.length === 0 ? (
                <p className="text-center text-gray-500">No tasks assigned yet.</p>
            ) : (
                <div>
                    <div className="flex flex-wrap gap-2">
                        {uniqueEmployees.map(emp => (
                            <button 
                                key={emp.employeeId} 
                                className={`px-4 py-2 rounded text-white ${selectedEmployee === emp.employeeId ? 'bg-indigo-700' : 'bg-indigo-500'}`}
                                onClick={() => setSelectedEmployee(emp.employeeId)}
                            >
                                {emp.employeeName}
                            </button>
                        ))}
                    </div>

                    <div className="mt-4">
                        {selectedEmployee && (
                            <>
                                <h4 className="text-lg font-semibold">Tasks for {uniqueEmployees.find(e => e.employeeId === selectedEmployee)?.employeeName}</h4>
                                <ul className="list-disc list-inside mt-2 bg-white p-3 rounded shadow-md">
                                    {assignedTasks
                                        .filter(task => task.employeeId === selectedEmployee)
                                        .map(task => (
                                            <li key={task.id} className="mb-2">
                                                <strong>{task.title}</strong>: {task.description}
                                            </li>
                                        ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmployeeTabs;
