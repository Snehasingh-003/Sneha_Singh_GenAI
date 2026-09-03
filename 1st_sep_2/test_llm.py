# PURPOSE:
# SIMPLE LLM CONNECTION TEST
# Use this file first if you want to check whether your Hugging Face
# token and LangChain setup are working correctly.

from llm_config import chat_model

response = chat_model.invoke(
    "Give me three simple positive test cases for a food delivery login."
)

print("AI RESPONSE:")
print(response.content)