# Age Calculator App in Python

### There are two approaches by which you can reach the destination to build this app. The code below is not modular in that sense, however, you will find the code in the above "age-cal" sub-directory.



```python
# Step 1: Import the datetime module
# We are importing the 'datetime' module, which provides classes for working with dates and times.
# This module is essential for date-related calculations like age calculation.
import datetime

# Step 2: Define a function to get the user's birthdate
# We are defining a function called 'get_birthdate'.
# Functions are blocks of reusable code that perform a specific task.
# This function will handle the process of getting the birthdate from the user.
def get_birthdate():
    while True: # Start an infinite loop that continues until a valid date is entered
        birthdate_str = input("Please enter your birthdate in YYYY-MM-DD format (e.g., 1990-01-01): ")
        try: # Start a try-except block to handle potential errors
            # Attempt to parse the input string into a datetime object
            # 'datetime.datetime.strptime' is a function that parses a string representing a date and time
            # according to a specified format.
            # '%Y-%m-%d' is the format string that specifies the expected format of the input string.
            # %Y: 4-digit year, %m: 2-digit month, %d: 2-digit day
            birthdate = datetime.datetime.strptime(birthdate_str, '%Y-%m-%d').date()
            return birthdate # If parsing is successful, return the birthdate and exit the function
        except ValueError: # If 'strptime' raises a ValueError, it means the input format was incorrect
            print("Invalid date format. Please use YYYY-MM-DD format.") # Print an error message

# Step 3: Define a function to calculate age
# We are defining a function called 'calculate_age'.
# This function takes 'birthdate' as an argument and calculates the age.
def calculate_age(birthdate):
    today = datetime.date.today() # Get the current date using 'datetime.date.today()'
    age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
    # Calculate age based on years, months, and days.
    # 'today.year - birthdate.year' calculates the difference in years.
    # '((today.month, today.day) < (birthdate.month, birthdate.day))' checks if the birthday for this year has already occurred.
    # If the birthday has not occurred yet, it subtracts 1 from the age.
    return age # Return the calculated age

# Step 4: Define a function to display the age
# We are defining a function called 'display_age'.
# This function takes 'age' as an argument and prints a message displaying the age.
def display_age(age):
    print("Your current age is:", age, "years") # Print the age to the console

# Step 5: Define the main function to run the app
# We are defining a function called 'main'.
# This function will orchestrate the execution of the age calculator app.
def main():
    print("Welcome to the Age Calculator App!") # Print a welcome message
    birthdate = get_birthdate() # Call the 'get_birthdate' function to get the user's birthdate
    age = calculate_age(birthdate) # Call the 'calculate_age' function to calculate age
    display_age(age) # Call the 'display_age' function to display the calculated age

# Step 6: Run the main function when the script is executed
# This condition checks if the script is being run directly (not imported as a module).
# If it's the main script, it calls the 'main' function to start the app.
if __name__ == "__main__":
    main() # Call the 'main' function to execute the age calculator app
```

**Explanation of Python Syntax Used:**

1.  **`import datetime`**:
    *   **`import` statement**: This statement is used to include modules or libraries into your Python script. Modules are collections of functions and variables that are grouped together for a specific purpose.
    *   **`datetime` module**: This module specifically provides classes for working with dates and times. It's essential for any Python program that needs to handle date or time related operations.

2.  **`def get_birthdate():`**,  **`def calculate_age(birthdate):`**, **`def display_age(age):`**, **`def main():`**:
    *   **`def` keyword**: This keyword is used to define a function in Python. Functions are blocks of organized, reusable code that perform a single, related action.
    *   **Function Naming**:  `get_birthdate`, `calculate_age`, `display_age`, `main` are function names. Function names should be descriptive and indicate what the function does.
    *   **`():` and `(birthdate):` and `(age):`**:  Parentheses after the function name are used to specify parameters that the function may accept. `get_birthdate()` has no parameters, while `calculate_age(birthdate)` accepts `birthdate` as a parameter.
    *   **Indentation**:  The code inside the function is indented. Indentation is crucial in Python; it defines the block of code that belongs to the function.

3.  **`while True:`**:
    *   **`while` loop**: This creates a loop that will continue to execute as long as the condition is true. `True` is always true, creating an infinite loop.
    *   **Purpose in the code**: Here, it's used to continuously prompt the user for a birthdate until a valid format is entered.

4.  **`input("Please enter your birthdate in YYYY-MM-DD format (e.g., 1990-01-01): ")`**:
    *   **`input()` function**: This built-in function displays a prompt to the user and allows the user to enter text from the keyboard. The entered text is returned as a string.
    *   **String as argument**: The text inside the parentheses `"..."` is a string literal, which is the prompt displayed to the user.

5.  **`try: ... except ValueError:`**:
    *   **`try-except` block**: This is used for error handling in Python.
    *   **`try:` block**: The code inside the `try` block is the code that might raise an exception (error).
    *   **`except ValueError:`**: If a `ValueError` occurs in the `try` block (specifically from `strptime` when the date format is incorrect), the code in the `except ValueError:` block is executed.
    *   **`ValueError`**: This is a specific type of exception that is raised when a function receives an argument of the correct type but an inappropriate value. In this case, `strptime` raises it when it can't parse the date string according to the given format.

6.  **`birthdate = datetime.datetime.strptime(birthdate_str, '%Y-%m-%d').date()`**:
    *   **`datetime.datetime.strptime()`**: As explained in the code comments, this function parses a string into a `datetime` object based on the format string `'%Y-%m-%d'`.
    *   **.date()**: This method is called on the `datetime` object returned by `strptime` to extract only the date part, discarding the time part, and returns a `date` object.
    *   **Assignment `=`**: The result of `strptime(...).date()` is assigned to the variable `birthdate`.

7.  **`return birthdate`**:
    *   **`return` statement**: This statement is used to exit a function and return a value. In `get_birthdate()`, it returns the valid `birthdate` object.

8.  **`print("Invalid date format. Please use YYYY-MM-DD format.")`**:
    *   **`print()` function**: This built-in function displays output to the console.
    *   **String as argument**:  The string `"Invalid date format. Please use YYYY-MM-DD format."` is the error message displayed to the user when the date format is incorrect.

9.  **`today = datetime.date.today()`**:
    *   **`datetime.date.today()`**: This function from the `datetime` module gets the current date as of the moment the code is executed and returns a `date` object.

10. **`age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))`**:
    *   **Arithmetic Operators**: `-` (subtraction) is used to calculate the difference in years.
    *   **Comparison Operators**: `<` (less than) is used to compare tuples `(today.month, today.day)` and `(birthdate.month, birthdate.day)`.
    *   **Boolean Logic**: The comparison `((today.month, today.day) < (birthdate.month, birthdate.day))` results in a boolean value (`True` or `False`). In Python, `True` is treated as `1` and `False` as `0` in numerical contexts. So, if the birthday hasn't happened yet this year, `1` is subtracted from the initial year difference.
    *   **Assignment `=`**: The calculated age is assigned to the variable `age`.

11. **`print("Your current age is:", age, "years")`**:
    *   **`print()` function**: Used to display the output.
    *   **Multiple arguments in `print()`**: You can pass multiple arguments to `print()`, separated by commas. `print()` will output them separated by spaces. Here, it prints the string `"Your current age is:"`, the value of the `age` variable, and the string `"years"`.

12. **`if __name__ == "__main__":`**:
    *   **`if __name__ == "__main__":`**: This is a common construct in Python scripts.
    *   **`__name__`**:  This is a special built-in variable that evaluates to the name of the current module.
    *   **`"__main__"`**: When a Python script is executed directly, `__name__` is set to `"__main__"`. If the script is imported as a module into another script, `__name__` is set to the module's name.
    *   **Purpose**: This condition ensures that the `main()` function is only called when the script is run directly, not when it's imported as a module. This is important for creating reusable modules while also having scripts that can be executed directly.

13. **`main()`**:
    *   **Function call**: This line calls the `main()` function, which starts the execution of the age calculator app.

This detailed explanation should help you understand each part of the Python code and the syntax used to build the Age Calculator App. You can run this code in your Ubuntu terminal by saving it as a `.py` file (e.g., `age_calculator.py`) and then running `python age_calculator.py`.
