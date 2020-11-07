"""
O Programa Exibe o Maior número de 3 valores inseridos
"""
A, B, C = [int(i) for i in input().split()]

MaiorAB = (A + B + abs(A - B))/2
MaiorAC = (MaiorAB + C + abs(MaiorAB - C))/2

print('{:.0f} eh o maior'.format(MaiorAC))
