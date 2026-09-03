from langchain_core.prompts import ChatPromptTemplate
from llm_config import chat_model


test_data_prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        """
You are a test data generation specialist.

Generate realistic but synthetic test data for the given
software testing requirement.

Do NOT use real personal information.

Include:

- Valid login data
- Invalid login data
- Restaurent search data
- Food item data
- cart quantity data
- coupon data
- boundary order amounts
- delivery address data
- upi test data
- credit card test data
- debit card test data
- cash on delivery test data
- payment failure data

for coupon testing include:

-order amount 499
-order amount 450
-order amount 500
-order amount 760
-order amount 1000

Present the data in a clear table-like format.
"""
    ),
    (
        "human",
        """
Requirement:

{requirement}

Test Cases:

{test_cases}
"""
    )
])


test_data_agent = test_data_prompt | chat_model