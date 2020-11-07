'''
Realizar o Cálculo fatorial

# Função Recursiva

def fatorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * fatorial(n - 1)

entrada = int(input())
print(fatorial(entrada))

# Questão AP1 - FP

mediaX, mediaY = 0, 0
vetorX = []
vetorY = []

X, Y = input().split()

X = float(X)
Y = float(Y)

if X == 0 and Y == 0:
    print("Não Existem Pontos")
else:
    vetorX.append(X)
    vetorY.append(Y)

    while X != 0 and Y != 0:
        X, Y = input().split()

        X = float(X)
        Y = float(Y)
        vetorX.append(X)
        vetorY.append(Y)

    tamanhoX = len(vetorX)
    tamanhoY = len(vetorY)

    totalX = sum(vetorX)
    totalY = sum(vetorY)

    mediaX = totalX / (tamanhoX - 1)
    mediaY = totalY / (tamanhoY - 1)

    print('{:.2f} {:.2f}'.format(mediaX,mediaY))

'''

def percorreLista(lista1, lista2):
    novaLista = []
    for i in range(len(lista1)):
        novaLista.append(lista1[i])

    for i in range(len(lista2)):
        novaLista.append(lista2[i])
    print(novaLista)

l1 = [1, 2, 3, 4, 5]
l2 = [6, 7, 8, 9, 10]

percorreLista(l1, l2)

