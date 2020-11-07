
lista = []

for i in range(6):
    entrada = float(input())

    if entrada >= 0:
        lista.append(entrada)

positivos = len(lista)
print('{} valores positivos'.format(positivos))
media = (sum(lista))/positivos
print('{:.1f}'.format(media))
