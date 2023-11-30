import axios from 'axios'

const openai = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer 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`,
  },
});

export async function createChatCompletion(messages, options = {}) {
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
    { role: "user", content: "what is 2 + 2" },
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
