# input_handler.py

from datetime import date
from date_utils import parse_date_string

def get_date_input(prompt: str, date_format: str = "%Y-%m-%d") -> date:
    """
    Gets a date input from the user.

    Args:
        prompt (str): The prompt to display to the user.
        date_format (str): The expected date format. Defaults to "%Y-%m-%d".

    Returns:
        date: The date entered by the user.
    """
    # Syntax Explanation:
    # 1. `while True:`:  This is an infinite loop. We'll keep asking for input until we get valid input.
    # 2. `input(prompt)`: Prompts the user to enter something (displaying the `prompt` string) and returns their input as a string.
    # 3. `try...except`: Error handling (we saw this before). If the code inside `try` causes a `ValueError` (or any other exception we specify), the code inside `except` is executed.
    # 4. `break`: Exits the `while` loop when valid input is given.
    while True:
        date_string = input(f"{prompt} (in {date_format} format): ")
        try:
            return parse_date_string(date_string, date_format)
        except ValueError as e:
            print(e)  # Prints the error message from the ValueError.
