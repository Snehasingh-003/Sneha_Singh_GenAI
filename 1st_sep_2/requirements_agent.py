
# This agent reads the food-delivery requirement and converts it into
# useful QA information: functional requirements, business rules,
# missing/ambiguous requirements, validations, and edge cases.

from langchain_core.prompts import ChatPromptTemplate
from llm_config import chat_model

requirement_analysis_prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        """
You are a senior software testing expert.

Analyze the given software requirement.

Provide these sections:
1. Functional Requirements
2. Business Rules
3. Missing or Ambiguous Requirements
4. Validations
5. Possible Edge Cases
6. Assumptions

Important:
- Clearly distinguish requirements explicitly stated in the requirement
  from assumptions.
- Pay special attention to the SAVE20 coupon:
  20% discount applies only when the order is above ₹500.
  Maximum discount is ₹150.
- Cover all supported payment methods: UPI, credit/debit card,
  and Cash on Delivery.
- State that a failed payment must not create an order.
- State that a successful payment must create an order and return
  an order confirmation containing an order ID.
- Do not invent application behavior as a confirmed requirement.
"""
    ),
    (
        "human",
        """
Requirement:
{requirement}
"""
    ),
])

requirement_agent = requirement_analysis_prompt | chat_model

