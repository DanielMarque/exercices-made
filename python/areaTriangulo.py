
A, B, C = [float(i) for i in input().split()]

if A < B + C and B < C + A and C < A + B:
    perimetro = A + B + C
    print('Perimetro = {}'.format(perimetro))
else:
    area = (A + B)*C/2
    print('Area = {}'.format(area))

