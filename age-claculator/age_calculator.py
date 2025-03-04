# age_calculator.py

from datetime import date
from date_utils import get_current_date

def calculate_age(birth_date: date, current_date: date = None) -> int:
    """
    Calculates the age in years based on the birth date.

    Args:
        birth_date (date): The date of birth.
        current_date (date, optional): The current date. Defaults to None (which will use today's date).

    Returns:
        int: The age in years.
    """
    # Syntax Explanation:
    # 1. `current_date: date = None`: If the caller doesn't pass in a current_date, it will be `None`.
    # 2. `if current_date is None:`: Checks if current_date is `None`
    # 3. `current_date = get_current_date()`: If current_date is None, we assign it to today's date.
    # 4. `age = current_date.year - birth_date.year`: Calculates the difference in years.
    # 5. `if (current_date.month, current_date.day) < (birth_date.month, birth_date.day)`: Check if birthday has already passed.
    #    - `(current_date.month, current_date.day)`: This is a "tuple" (an ordered collection of items).
    # 6. `age -= 1`: if birth has not happened yet, then we subtract 1.
    # 7. `return age`
    if current_date is None:
        current_date = get_current_date()

    age = current_date.year - birth_date.year
    if (current_date.month, current_date.day) < (birth_date.month, birth_date.day):
        age -= 1
    return age

def display_age(birth_date: date) -> None:
    """
    Displays the calculated age to the console.
        Args:
        birth_date (date): The date of birth.
    """
    age = calculate_age(birth_date)
    print(f"You are {age} years old.")
