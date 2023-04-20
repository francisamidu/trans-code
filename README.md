# [DatingGPT.com](https://www.dating-gpt.netlify.app/)

This project generates roadmaps for technologies and languages using AI.

[![Dating Advice Generator](./public/screenshot.png)](https://www.devroad-gpt.netlify.app)

## How it works

This project uses the [OpenAI GPT-3 API](https://openai.com/api/) (specifically, text-davinci-003). It constructs a prompt based on the form and user input, sends it to the GPT-3 API then gets response back to the application.

## Running Locally

After cloning the repo, go to [OpenAI](https://beta.openai.com/account/api-keys) to make an account and put your API key in a file called `.env`.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
npm run dev
```
