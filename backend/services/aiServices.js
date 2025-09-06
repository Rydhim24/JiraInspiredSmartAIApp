import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const getTaskSuggestion = async (inputText) => {
    console.log("[INFO] Starting getTaskSuggestion function...");
    console.log("[DEBUG] Input text received:", inputText);

    const apiKey = "AIzaSyAUtt9GO5VufpPhoZ1VtQBDiwD1f4nggvU"; // Use .env or fallback for testing
    console.log("[DEBUG] API Key (partially masked):", apiKey ? `${apiKey.slice(0, 4)}****${apiKey.slice(-4)}` : "API Key not found");

    if (!apiKey) {
        console.error("[ERROR] API key is missing. Check your .env file.");
        return "API key error";
    }

    try {
        console.log("[INFO] Preparing API request...");

        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
            {
                contents: [
                    {
                        parts: [
                            { text: `Suggest the top 5 best task names for: ${inputText}` }
                        ]
                    }
                ]
            },
            {
                headers: { "Content-Type": "application/json" }
            }
        );

        console.log("[INFO] API request successful.");
        console.log("[DEBUG] Full response data:", response.data);

        const rawSuggestions = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No task suggestion found";

        // Process suggestions: split, slice to 10, and format in bold and italic
        const formattedSuggestions = rawSuggestions
            .split("\n")
            .filter(suggestion => suggestion.trim() !== "")
            .slice(0, 5)
            .map((suggestion) => `**_${suggestion.trim()}_**`);

        console.log("[INFO] Formatted suggestions:", formattedSuggestions);

        return formattedSuggestions;

    } catch (error) {
        console.error("[ERROR] API request failed.");
        console.error("[DEBUG] Error details:", error?.response?.data || error.message);

        if (error.response) {
            console.error("[DEBUG] Status Code:", error.response.status);
            console.error("[DEBUG] Headers:", error.response.headers);
            console.error("[DEBUG] Response Data:", error.response.data);
        }

        return "Error in fetching suggestions";
    }
};

export { getTaskSuggestion };
