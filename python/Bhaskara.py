import math

a1, a2, a3 = input().split()

A = float(a1)
B = float(a2)
C = float(a3)

# Fórmula de Bhaskara
resultado = (B**2 )- (4*A*C)
x = math.sqrt(resultado)

if x < 0 or A == 0 or B == 0 or C == 0:
    print('Impossivel calcular')
else:
    X1 = (-B + x)/(2*A)
    X2 = (-B - x)/(2*A)

    print('R1 = {:.5f}'.format(X1))
    print('R2 = {:.5f}'.format(X2))

# Fórmula está dando erro na última parte,
