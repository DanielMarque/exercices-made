
def segundoMenor(lista, n): # n é o tamanho do vetor

    prim = lista[0]
    segu = lista[0]
    i = 2
    for i in range(n):
        if lista[i] < prim:
            segu = prim
            prim = lista[i]
        if ((segu > lista[i]) and (prim < lista[i])):
            segu = lista[i]

    return segu


vetor = [-8, 16, 19, 9, 0, -9]
print(segundoMenor(vetor, len(vetor))
