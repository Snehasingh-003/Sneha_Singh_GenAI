## this file is the connection between your python program and ai model i.e hugging face
#it loads the hugging face token from the .env file and create the chat_model
#all agents use this chat_model to communicate with ai.




import os

#this loads ur .env file
from dotenv import load_dotenv

from langchain_huggingface import(
    ChatHuggingFace,
    HuggingFaceEndpoint
)

#to apply the env file
load_dotenv()

#get the hugging face token
hf_token = os.getenv("HF_TOKEN")

if not hf_token:
    raise ValueError("HF_TOKEN not found. check your .env file")

#creating llm, using ugging face to call llm 
# this llm will be fed to the chat model

#use this hugging face ai model 
llm = HuggingFaceEndpoint(
   repo_id= "Qwen/Qwen3.8-27B",
   task = "text-generation",
   huggingfacehub_api_token= hf_token,
   max_new_tokens=2000,
   temperature=0.2,   #structred and consistent response
)

chat_model = ChatHuggingFace(
    llm=llm,

)
