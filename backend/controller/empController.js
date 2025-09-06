const Emp = require("../model/emp");

exports.createEmp = async(req, res) => {
    try {
        const {empId, empName, empSkills} =req.body;
    const emp = new Emp({
        empId,
        empName,
        empSkills
    });
    await emp.save();
    
    res.json(emp);
    } catch (error) {
        console.log("error occured", error);
        res.status(500).json({"error": "Internal Server Error"});

    }
}

exports.getAllEmp = async (req, res) =>{
    try {
        const emp = await Emp.find();
    res.json(emp);
    } catch (error) {
        console.log("error occured", error);
        res.status(500).json({"error": "Internal Server Error"});
    }
    
}