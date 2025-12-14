import os
from dotenv import load_dotenv
from groq import Groq
from . import pdf_extractor

load_dotenv()
def generate_cover_letter(file):
    resume_text = pdf_extractor(file)
    client = Groq(api_key=os.getenv('GROQ_API_KEY'))
    chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "system",
            "content": "You are a helpful assistant."
        },

        {
            "role": "user",
            "content": "Explain the importance of fast language models",
        }
    ],
    model="llama-3.3-70b-versatile",
        )
    print(chat_completion.choices[0].message.content)