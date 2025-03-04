# main.py
from input_handler import get_date_input
from age_calculator import display_age

def main():
    """
    Main function to run the age calculator application.
    """
    # Syntax Explanation:
    # 1. `if __name__ == "__main__":`:
    #    - This is a special condition in Python.
    #    - The code inside this block will ONLY run if you execute `main.py` directly.
    #    - If you import `main.py` as a module into another script, the code inside this block will *not* run.
    birth_date = get_date_input("Enter your birth date")
    display_age(birth_date)


if __name__ == "__main__":
    main()
