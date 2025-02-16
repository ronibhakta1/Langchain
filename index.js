import { ChatGoogleGenerativeAI } from "@langchain/google-genai";


/// link to documentation: https://js.langchain.com/docs/integrations/chat/google_generativeai/
const llm = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-pro",
    temperature: 0,
    maxRetries: 2,
    apiKey: "AIzaSyAkllTeljLyvhWja2rMfdcnueajZHGg1I4",
  // other params...
});
const aiMsg = await llm.invoke([
    [
        "system",
        "You are a helpful assistant that translates English to hinglish nothing else. Translate the user sentence.",
    ],
    ["human", "I love programming."],
    ]);
    aiMsg;

    console.log(aiMsg.content);
    // console.log(aiMsg.additional_kwargs);