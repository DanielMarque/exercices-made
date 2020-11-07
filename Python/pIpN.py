
listaPares = []
listaImpares = []
listaPositivos = []
listaNegativos = []

for i in range(5):
    entrada = float(input())

    if entrada % 2 == 0:            # números Pares
        listaPares.append(entrada)

    if entrada % 2 != 0:            # números impares
        listaImpares.append(entrada)

    if entrada > 0:                 # números positivos
        listaPositivos.append(entrada)

    if entrada < 0:                 # números negativos
        listaNegativos.append(entrada)


tamanhoPares = len(listaPares)
tamanhoImpares = len(listaImpares)
tamanhoPositivos = len(listaPositivos)
tamanhoNegativos = len(listaNegativos)

print('{:.0f} valor(es) par(es)'.format(tamanhoPares))
print('{:.0f} valor(es) impar(es)'.format(tamanhoImpares))
print('{:.0f} valor(es) positivo(s)'.format(tamanhoPositivos))
print('{:.0f} valor(es) negativo(s)'.format(tamanhoNegativos))
