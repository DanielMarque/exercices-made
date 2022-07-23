
numero = int(input())

valor = []

for k in range(10):
    valor.append(numero)
    numero = numero * 2

for i in range(len(valor)):
    print('N[{}] = {}'.format(i, valor[i]))
