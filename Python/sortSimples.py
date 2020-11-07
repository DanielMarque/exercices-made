

A, B, C = [int(i) for i in input().split()]

menores = []
lista = [A, B, C]
menores = sorted(lista)

for i in range(len(menores)):
    print(menores[i])

print()

for i in range(len(lista)):
    print(lista[i])
