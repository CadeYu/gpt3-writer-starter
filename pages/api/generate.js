import { Configuration,OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});


const openai = new OpenAIApi(configuration);

const PromptPrefix = "";

const generateAction = async (req,res)=>{
    console.log(`API: ${PromptPrefix}${req.body.userInput}`)

    const baseCompletion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${PromptPrefix}${req.body.userInput}`,
        temperature: 0.9,
        max_tokens: 250,
      });

      const basePromptOutput = baseCompletion.data.choices.pop();

    res.status(200).json({ output: basePromptOutput });



}


export default generateAction;