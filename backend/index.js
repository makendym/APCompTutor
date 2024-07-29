const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { OpenAI } = require("openai");
require('dotenv').config();

const openaiApiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
 apiKey: openaiApiKey,
});




const app = express();
app.use(bodyParser.json());
app.use(cors());






app.post("/chat", async (req, res) => {
 const { prompt } = req.body;
 try {
   // Updated method to use the OpenAI API for creating completions
   // const completion = await openai.chat.completions.create({
   //   model: "gpt-3.5-turbo", // Ensure you're using a valid model ID for your use case
   //   messages: [{role: "user", content: prompt}], // Assuming you want to send a prompt as part of a chat
   // });
   const completion = await openai.chat.completions.create({
     messages: [{ role: "system", content: "You are a helpful AP Computer Science assistant. You are a creator of AP Computer Science exam questions, your role is to devise a tripartite question covering selected units from the curriculum, reflecting their respective weights in the multiple-choice section." }, { role: "user", content:prompt}],
     model: "ft:gpt-3.5-turbo-1106:personal::9ADs3nln",
   });


   // Parsing the stringified JSON response into a JSON object
   const parsedResponse = JSON.parse(completion.choices[0].message.content);
  
   console.log(parsedResponse);
   // Sending the parsed JSON object in the response
   // res.json({ response: completion.choices[0].message.content });
   res.json({parsedResponse });
 } catch (error) {
   console.error(error);
   res.status(500).json({ error: error.message });
 }
});


const port = 8000;
app.listen(port, () => {
 console.log(`Server listening on port ${port}`);
});
