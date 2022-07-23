import random
'''
import random

def gera_aleatorio(valor):
    valor = random.randrange(-100, 100)
    return valor

valores = [gera_aleatorio(numero) for numero in range(100)] random.randrange(-50, 50)
'''
lista = []
for k in range(102):
    valores = int(input())
    lista.append(valores)

for i in range(102):
    if lista[i] <= 10:
        print('A[{}] = {:.1f}'.format(i, lista[i]))
