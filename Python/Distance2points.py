'''
Calcular a distância entre dois pontos
'''
import math

lista = input('').split(' ')
x1 = float(lista[0])
y1 = float(lista[1])

lista = input().split(' ')
x2 = float(lista[0])
y2 = float(lista[1])


distancia = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

print('{:.4f}'.format(distancia))
