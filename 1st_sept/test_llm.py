#this file is a simple test to check whether the hugging face ai model is connected and responding correctly


from llm_config import chat_model

response = chat_model.invoke(
    "Generate 5 test cases for an ecommerce login"
)

print("RESPONSE:")
print(response)
print(response.content)

