import OpenAI from "openai";

const apiKey = "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"

const openAI = new OpenAI ({
 apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
 //@ts-expect-error
 model: "gpt-3.5-turbo",
 dangerouslyAllowBrowser: true
});

export {openAI}
