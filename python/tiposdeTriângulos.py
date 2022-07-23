
A, B, C = [float(i) for i in input().split()]
aux = 0

if A > B and A > C:
    A = A
    B = B
    C = C
else:
    if B > C:
        aux = A
        A = B
        B = aux
    elif C > B:
        aux = A
        A = C
        C = aux

if A >= (B+C):
    print('NAO FORMA TRIANGULO')

else:
    if (A**2) == (B**2 + C**2):
        print('TRIANGULO RETANGULO')

    if (A**2) > (B**2 + C**2):
        print('TRIANGULO OBTUSANGULO')

    if (A**2) < (B**2 + C**2):
        print('TRIANGULO ACUTANGULO')

    if A == B and B == C and A == C:
        print('TRIANGULO EQUILATERO')

    else:
        if A == B or C == A or B == C:
            print('TRIANGULO ISOSCELES')
