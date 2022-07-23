'''
Um programa que leia dois valores de entrada "X" e "Y", que são respectivamente duas cooredenadas no plano cartesiano
e informe a quais quadrantes eles pertencem

# código funciona mas da runtime erro no Site
'''

X, Y = [float(i) for i in input().split()]

if X == 0 and Y == 0:
    print('Origem')
elif X > 0 and Y > 0:
    print('Q1')
elif X < 0 and Y > 0:
    print('Q2')
elif X < 0 and Y < 0:
    print('Q3')
elif X > 0 and Y < 0:
    print('Q4')

