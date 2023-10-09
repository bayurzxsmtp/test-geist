def calculate_factorial(n):
    if n < 0:
        return "Factorial is not defined for negative numbers"
    elif n == 0 or n == 1:
        return 1
    else:
        factorial = 1
        for i in range(2, n + 1):
            factorial *= i
        return factorial

# Input from the user
try:
    num = int(input("Enter a non-negative integer: "))
    result = calculate_factorial(num)
    print(f"{num}! = {result}")
except ValueError:
    print("Invalid input. Please enter a non-negative integer.")
