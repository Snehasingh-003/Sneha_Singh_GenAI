# this file crete req analysis agent
# ai identify fn req, business rules,


from langchain_core.prompts import ChatPromptTemplate
from llm_config import chat_model

#AGENT?????   = just a specialised ai worker given a specific testing job
# 1ST AGENT - Requirement agent

requirement_prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        """
You are a software testing expert.

Analyze the requirement and provide:

1. Functional Requirements
2. Business Rules
3. Positive Test Scenarios
4. Negative Test Scenarios
5. Boundary Conditions
6. Validation Requirements
7. Assumptions
"""
    ),
    (
        "human",
        """
Requirement:

{requirement}
"""
    )
])

requirement_agent = requirement_prompt | chat_model