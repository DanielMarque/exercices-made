

# Formas de se executar um Try / Catch

'''
# Forma - 1

def divide(dividendo):
    return 42 / dividendo

try:
    print(divide(5))
    print(divide(18))
    print(divide(63))
    print(divide(0))
    print(divide(8))
except ZeroDivisionError:
    print('Divisões por 0 (Zero) não são aceitas.')

# Forma - 2

def divide(dividendo):
    try:
        return 42 / dividendo
    except ZeroDivisionError:
        print('Divisões por 0 (Zero) não são aceitas.')

'''

# Forma - 1

def divide(dividendo):
    return 42 / dividendo

try:
    print(divide(5))
    print(divide(18))
    print(divide(63))
    print(divide(0))
    print(divide(8))
except ZeroDivisionError:
    print('Divisões por 0 (Zero) não são aceitas.')

