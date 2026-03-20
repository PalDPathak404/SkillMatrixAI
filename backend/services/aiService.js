const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const generateRoadmap = async (resumeText) => {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `
        Analyze resume and return JSON:
        {
          skills: [],
          experience: "",
          projects: [],
          roadmap: [
            {
              title: "",
              tasks: [{ title: "" }]
            }
          ]
        }
        `
      },
      { role: "user", content: resumeText }
    ]
  });

  return JSON.parse(response.choices[0].message.content);
};

module.exports = { generateRoadmap };