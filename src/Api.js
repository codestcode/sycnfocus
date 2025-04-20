import { GoogleGenerativeAI } from "@google/generative-ai";

// Get API key from Vite's environment variables
const apiKey = import.meta.env.VITE_HF_API_KEY || "AIzaSyAZBFE4uA0LjXtlKw6oxQMO0IdGDgJI-JY"; // Fallback to provided API key

// Initialize the GoogleGenerativeAI instance
const genAI = new GoogleGenerativeAI(apiKey);

// Configure the generative model
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // Updated to a more recent model (adjust based on availability)
});

const generationConfig = {
  temperature: 0.9, // Slightly lower for more focused responses
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function getStudyTipsAndReminders(studyData) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const { studygoal, duration, date, time, notes ,mood} = studyData;
    const prompt = `
      You are an assistant that helps students by generating study tips and reminders based on their study goals, duration, date, time, and additional notes. The goal is to provide practical, actionable advice tailored to the subject or topic they are studying, the amount of time they plan to study, and any specific notes they provide. Include reminders for breaks, deadlines, or follow-up study sessions if relevant. Format your response in markdown to make it easier to render on a web page. Include the following:
      - A brief introduction summarizing the study goal and duration.
      - A list of 3-5 study tips specific to the subject or topic.
      - A list of 2-3 reminders for the student (e.g., breaks, deadlines, or follow-up tasks).
      - If notes are provided, incorporate them into the tips or reminders where relevant.

      **Study Data:**
      - Study Goal: ${studygoal}
      - Duration: ${duration} hours
      - Date: ${date}
      - Time: ${time}
            - Time: ${mood}

      - Notes: ${notes || "None"}
    `;

    const result = await chatSession.sendMessage(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating study tips and reminders:", error);
    throw error;
  }
}