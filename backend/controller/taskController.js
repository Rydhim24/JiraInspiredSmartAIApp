const  Task = require("../model/Task");
 const {getTaskSuggestion} = require("../services/aiServices");

 exports.suggestTask = async (req, res ) => {
    const {input} = req.body;
    const suggestions = await getTaskSuggestion(input);
    res.json({suggestions});
 }
 