'''
List Comprehensions

A Seguir criaremos estruturas condicionais e verificações em listComprehensions

# Exemplo 1

numeros = [1, 2, 3, 4, 5, 6]

pares = [num for num in numeros if num % 2 == 0] # [2, 4, 6]
impares = [num for num in numeros if num % 2 != 0] # [1, 3, 5]

print(pares,impares)

# Exemplo 2

# Se o resto da divisão for False(0), ele não adiciona a lista
pares = [num for num in numeros if not num % 2]

# Se o resto da divisão for True(1), ele adiciona a lista
impares1 = [num for num in numeros if num % 2]

print(pares)
print(impares1)


'''

# Exemplo 3
numeros = [1, 2, 3, 4, 5, 6]

# s eo número da lista for par, ele é multiplicado por 2, se não ele é dividido por 2
resultado = [num * 2 if num % 2 == 0 else num / 2 for num in numeros]
print(resultado)
