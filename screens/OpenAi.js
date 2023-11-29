// const dotenv = require("dotenv");
// dotenv.config(); // Assuming .env is in your project root

const axios = require("axios");

const openai = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer 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`, // Use the API key from .env
  },
});

async function createChatCompletion(messages, options = {}) {
  try {
    const response = await openai.post("/chat/completions", {
      model: options.model || "gpt-4",
      messages,
      ...options,
    });

    return response.data.choices;
  } catch (error) {
    console.error("Error creating chat completion:", error.response ? error.response.data : error);
    return null;
  }
}

async function main() {
  const messages = [
    { role: "user", content: "What is one dish I can make with chicken breasts? please give a response of the title of the dish, not the ingredients" },
  ];

  const options = {
    temperature: 0.8,
    max_tokens: 100,
  };

  const choices = await createChatCompletion(messages, options);

  if (choices) {
    console.log(choices[0].message);
  } else {
    console.log("No response from OpenAI.");
  }
}

main();

export default createChatCompletion;
