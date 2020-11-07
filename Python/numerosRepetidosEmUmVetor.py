
lista1 = [1,2,3,4,5,6,9,2,3,9,1]
repetidos = []

for i in range(len(lista1)):
    for j in range(i+1 ,len(lista1)):
        if lista1[i] == lista1[j]:

            repetidos.append(lista1[i])

print(repetidos)
