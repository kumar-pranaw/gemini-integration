const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs"); // Import the 'fs' (filesystem) module

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyAfVA9A-npCwOYVuMcxHA6A3dCnEmQC1l8');

async function run() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  // const prompt = "Do these look store-bought or homemade?";
  // const image = {
  // inlineData: {
  //   data: Buffer.from(fs.readFileSync("Cookie.jpg")).toString("base64"),
  //   mimeType: "image/png",
  // },
  // };
  const prompt = "List out the name of books in json array should include author name. ";
  const image = {
  inlineData: {
    data: Buffer.from(fs.readFileSync("book.jpg")).toString("base64"),
    mimeType: "image/png",
  },
};

const result = await model.generateContent([prompt, image]);
console.log(result.response.text());
}

async function runWithoutImage() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const prompt = "Write a story about a magic backpack."
  //const prompt = "What is the weather today in Chandigarh ?"

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
//runWithoutImage();