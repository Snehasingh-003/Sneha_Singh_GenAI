
import os
from dotenv import load_dotenv
from langchain_huggingface import ChatHuggingFace, HuggingFaceEndpoint

load_dotenv()

HF_TOKEN = os.getenv("HF_TOKEN")
HF_MODEL_ID = os.getenv("HF_MODEL_ID", "Qwen/Qwen3-8B")

if not HF_TOKEN:
    raise ValueError(
        "HF_TOKEN is missing. Create a .env file and add your Hugging Face token."
    )

llm = HuggingFaceEndpoint(
    repo_id=HF_MODEL_ID,
    task="text-generation",
    huggingfacehub_api_token=HF_TOKEN,
    max_new_tokens=3000,
    temperature=0.2,
)

chat_model = ChatHuggingFace(llm=llm)
