

def narcissistic(value):

    number = list(str(value))
    i = 0
    total = 0
    while len(number) > i:

        total += int(number[i])**len(number)
        i += 1

    if value == total:
        return True
    else:
        return False

narcissistic(122)