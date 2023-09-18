# Get the number of values from the user
solving_way = int(input("Enter the mode to use to compare: "))

if solving_way == 1 :
    num_values = int(input("1) Enter the number of values to compare: "))
    # Initialize a list to store the values
    values = []

    # Prompt the user to enter each value
    for i in range(num_values):
        value = float(input(f"Enter value {i + 1}: "))
        values.append(value)

    # Open a file for writing the comparison logic
    with open("logic.py", "w") as file:
        file.write("value_list = " + str(values) + "\n")
        
        # Initialize a variable to store the greatest value
        file.write("greatest_value = value_list[0]\n")
        
        # Compare each value with every other value
        for i in range(num_values):
            for j in range(i + 1, num_values):
                a = values[i]
                b = values[j]
                file.write(f"a = value_list[{i}]\n")
                file.write(f"b = value_list[{j}]\n")
                # Update the greatest value if needed
                file.write(f"if a > greatest_value:\n")
                file.write(f"    greatest_value = a\n")
                file.write(f"if b > greatest_value:\n")
                file.write(f"    greatest_value = b\n")

        # Print the greatest value
        file.write(f"print(f'The greatest value is {{greatest_value}}')\n")

    print("Comparison logic has been written to 'logic.py'.")

elif solving_way == 2 :
    # Get the number of values from the user
    num_values = int(input("2) Enter the number of values to compare: "))

    # Initialize a list to store the values
    values = []

    # Prompt the user to enter each value
    for i in range(num_values):
        value = float(input(f"Enter value {i + 1}: "))
        values.append(value)

    # Open a file for writing the if-elif-else logic
    with open("logic.py", "w") as file:
        file.write("value_list = " + str(values) + "\n")
        file.write("greatest_value = 0\n")
        file.write("max_value = max(value_list)\n")
        file.write("if max_value == value_list[0]:\n")
         # Initialize a variable to store the greatest value
        file.write("    greatest_value = value_list[0]\n")
        file.write(f"    print(f'The greatest value is the first value that is {{greatest_value}}')\n")
        
        for i in range(1, num_values):
            file.write(f"elif max_value == value_list[{i}]:\n")
            file.write(f"    greatest_value = value_list[{i}]\n")
            file.write(f"    print(f'The greatest value is value {i + 1} that is {{greatest_value}}')\n")
        
        file.write("else:\n")
        file.write("    print('The greatest value is not in the list')\n")

    print("Logic has been written to 'logic.py'.")

