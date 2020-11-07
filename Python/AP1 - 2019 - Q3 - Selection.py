
# Tentando Entender a Recursividade
'''
def fatorial(n):
    if n == 1:
        return n
    return fatorial(n - 1) * n

print(fatorial(5))
'''

def recursao(y):
    print(y)
    if y == 1:
        return y
    return recursao(y - 1) + y

print(recursao(5))
