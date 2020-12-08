

A, B, C = [float(i) for i in input().split()]


TRIANGULO = (A*C) / 2
CIRCULO = (C**2) * 3.14159
TRAPEZIO = ((B + A) / 2) * C
QUADRADO = B * B
RETANGULO = A * B


print("TRIANGULO: {:.3f}".format(TRIANGULO))
print("CIRCULO: {:.3f}".format(CIRCULO))
print("TRAPEZIO: {:.3f}".format(TRAPEZIO))
print("QUADRADO: {:.3f}".format(QUADRADO))
print("RETANGULO: {:.3f}".format(RETANGULO))
