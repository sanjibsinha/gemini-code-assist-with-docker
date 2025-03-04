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