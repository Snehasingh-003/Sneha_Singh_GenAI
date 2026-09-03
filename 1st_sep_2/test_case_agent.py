# from langchain_core.prompts import ChatPromptTemplate
# from llm_config import chat_model


# test_case_prompt = ChatPromptTemplate.from_messages([
#     (
#         "system",
#         """
# You are an expert software test engineer.

# Generate detailed test cases based on the requirement.

# For every test case provide:

# Test Case ID
# Test Scenario
# Preconditions
# Test Steps
# Test Data
# Expected Result
# Priority

# generate test cases covering:

# -Login
# -Restaurent search
# -adding food items to cart
# -removing food items from cart
# -coupon SAV20
# -min order amount of 500
# -20% discount calculation
# -max discount of 150
# -delivery address selection
# -upi payment
# -credit/debit card payment
# -cash on delivery
# -payment failure
# -order creation
# -order confirmation
# -order id

# Generate both:
# - Positive test cases
# - Negative test cases
# - Boundary test cases
# - Validation test cases

# Do not invent functionality that is not supported by the requirement.
# """
#     ),
#     (
#         "human",
#         """
# Requirement:

# {requirement}

# Requirement Analysis:

# {analysis}
# """
#     )
# ])


# # Create the LangChain runnable
# test_case_chain = test_case_prompt | chat_model














# PURPOSE:
# TEST CASE GENERATION AGENT
# This agent takes the original requirement plus the requirement analysis
# and generates detailed positive and negative QA test cases.

from langchain_core.prompts import ChatPromptTemplate
from llm_config import chat_model

test_case_generation_prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        """
You are a senior QA test engineer.

Generate comprehensive test cases for the given food-delivery requirement.

Cover:
1. Login
2. Restaurant search
3. Adding items to cart
4. Removing items from cart
5. Cart total calculation
6. SAVE20 coupon
7. Minimum ₹500 coupon condition
8. Maximum ₹150 discount condition
9. Delivery address selection
10. UPI payment
11. Credit/debit card payment
12. Cash on Delivery
13. Payment failure
14. Successful order placement
15. Order confirmation and order ID
16. Edge and negative scenarios

For every test case provide:
- Test Case ID
- Module
- Test Scenario
- Preconditions
- Test Steps
- Test Data
- Expected Result
- Priority

Important coupon boundary cases:
- Order below ₹500
- Order exactly ₹500
- Order just above ₹500
- Order where 20% discount is less than ₹150
- Order where 20% discount is exactly ₹150
- Order where 20% discount exceeds ₹150

Do not invent a specific UI message unless the requirement gives one.
Use clear, tester-friendly language.
"""
    ),
    (
        "human",
        """
Original Requirement:
{requirement}

Requirement Analysis:
{analysis}
"""
    ),
])

test_case_agent = test_case_generation_prompt | chat_model
