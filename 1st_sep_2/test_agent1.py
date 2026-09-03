

# PURPOSE:
# This is the runner for AGENT 1.
# It sends the food-delivery requirement to the Requirement Analysis Agent
# and prints the AI-generated requirement analysis.

from requirements_agent import requirement_agent

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
print("REQUIREMENT ANALYSIS AGENT")
print("=" * 80)

response = requirement_agent.invoke({"requirement": requirement})

print(response.content)
