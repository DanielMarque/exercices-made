
A, B, C, D = [int(i) for i in input().split()]

A = C - A
B = D - B

A = 60 / A
B = 60 / B

print('O JOGO DUROU {} HORA(S) E {} MINUTO(S)'.format(A, B))
