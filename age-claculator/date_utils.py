# date_utils.py

from datetime import date, datetime, timedelta


def get_current_date() -> date:
    """
    Gets the current date.

    Returns:
        date: The current date.
    """
    # Syntax Explanation:
    # 1. `from datetime import date`: Imports the `date` class from the `datetime` module.
    #    - The `datetime` module is Python's built-in module for working with dates and times.
    #    - `date` represents a date (year, month, day).
    # 2. `def get_current_date() -> date:`
    #    - `def`: Keyword to define a function.
    #    - `get_current_date`: The name of our function (we follow snake_case convention).
    #    - `()`: Indicates that the function takes no arguments.
    #    - `-> date`: This is a "type hint." It tells us (and tools like linters) that this function is expected to return a `date` object. It is just for us for better readability.
    # 3. `date.today()`:
    #    - `date`: We are using the `date` class we imported.
    #    - `today()`:  A method (function attached to a class) of the `date` class that returns the current date.
    return date.today()

def parse_date_string(date_string: str, date_format: str = "%Y-%m-%d") -> date:
    """
    Parses a date string into a date object.

    Args:
        date_string (str): The date string to parse.
        date_format (str): The format of the date string. Defaults to "%Y-%m-%d" (YYYY-MM-DD).

    Returns:
        date: The parsed date object.

    Raises:
        ValueError: If the date string cannot be parsed.
    """

    # Syntax Explanation:
    # 1. `str`:  Another type hint, indicating that `date_string` should be a string.
    # 2. `date_format: str = "%Y-%m-%d"`:
    #    - We have another string type hint.
    #    - `= "%Y-%m-%d"`: This sets a default value for `date_format`. If the caller doesn't provide it, it will be set to 'YYYY-MM-DD'.
    # 3. `datetime.strptime(date_string, date_format)`:
    #    - `datetime`: We are using the datetime class again (it has more functionality than date).
    #    - `strptime`: A method that "parses" a string into a datetime object according to a specified format.
    #    - `"%Y-%m-%d"`: This is a format string:
    #        - `%Y`: 4-digit year (e.g., 2023)
    #        - `%m`: 2-digit month (01-12)
    #        - `%d`: 2-digit day (01-31)
    # 4. `.date()`: We are converting the datetime object to date object
    try:
        return datetime.strptime(date_string, date_format).date()
    except ValueError:
        raise ValueError(f"Invalid date format. Expected format: {date_format}")
