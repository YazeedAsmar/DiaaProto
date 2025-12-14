import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PROJECTS, SKILLS, EXPERIENCES, ABOUT_CONTENT, HERO_CONTENT } from "../constants";

let aiClient: GoogleGenAI | null = null;

// Initialize the client safely
try {
  if (process.env.API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  } else {
    console.warn("API_KEY not found in environment variables. Chat features will be disabled.");
  }
} catch (error) {
  console.error("Failed to initialize GoogleGenAI client:", error);
}

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Diaa Aldeen Ayman Alsawalhi's personal portfolio website. 
Your goal is to answer visitor questions about Diaa professionally, concisely, and creatively.

Here is the context about Diaa:
- Role: ${HERO_CONTENT.role}
- Tagline: ${HERO_CONTENT.tagline}
- About: ${ABOUT_CONTENT.bio}
- Skills: ${SKILLS.map(s => s.name).join(', ')}
- Projects: ${PROJECTS.map(p => `${p.title} (${p.description})`).join('; ')}
- Experience: ${EXPERIENCES ? EXPERIENCES.map(e => `${e.role} at ${e.company}`).join('; ') : 'Various roles in HRMS and Sales'}

Tone: Professional, organized, helpful, and business-oriented.
If asked about something not in this context, politely say you don't have that information but can help with questions about his professional background in HRMS and Project Management.
Keep answers relatively short (under 100 words).
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!aiClient) {
    return "I'm sorry, my brain (API Key) is currently missing. Please contact Diaa directly via email!";
  }

  try {
    const response: GenerateContentResponse = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};