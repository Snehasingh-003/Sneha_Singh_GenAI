

# PURPOSE:
# MAIN PROJECT CONTROLLER
# This file runs the complete AI testing workflow:
#
# Requirement
#      ↓
# Requirement Analysis Agent
#      ↓
# Test Case Generation Agent
#      ↓
# Final QA test cases
#
# Run this file when you want to execute the whole project.

from requirements_agent import requirement_agent
from test_case_agent import test_case_agent

requirement = """
Online Food Ordering Application

A customer should be able to log in to a food delivery application,
search for a restaurant, add food items to the cart, apply a coupon,
select a delivery address, make payment, and place the order.

The application supports UPI, credit/debit cards, and Cash on Delivery.
A coupon SAVE20 gives 20% off on orders above ₹500, with a maximum
discount of ₹150.

If payment fails, the order should not be created.
If payment succeeds, the customer should receive an order confirmation
with an order ID.
"""

print("=" * 80)
print("AI-BASED FOOD DELIVERY TESTING PROJECT")
print("=" * 80)

print("\\n" + "=" * 80)
print("AGENT 1: REQUIREMENT ANALYSIS")
print("=" * 80)

analysis_response = requirement_agent.invoke({
    "requirement": requirement
})
analysis = analysis_response.content
print(analysis)

print("\\n" + "=" * 80)
print("AGENT 2: TEST CASE GENERATION")
print("=" * 80)

test_cases_response = test_case_agent.invoke({
    "requirement": requirement,
    "analysis": analysis
})
test_cases = test_cases_response.content
print(test_cases)

print("\\n" + "=" * 80)
print("PIPELINE COMPLETED")
print("=" * 80)
