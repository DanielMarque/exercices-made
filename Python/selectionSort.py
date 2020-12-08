

def selecao(lista, n):
    listaOrdenada = [0*6]
    menor = lista[0]

    i = 1
    for i in range(n + 1):
        if lista[i] < menor:
            menor = lista[i]
            listaOrdenada[i] += menor
        else:
            listaOrdenada.append(lista[i])

    return listaOrdenada


vetor = [90, 13, 7, 24, 85, 32]

print(selecao(vetor, 6))
