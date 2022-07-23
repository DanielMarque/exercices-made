"""
Inverter uma lista

Essa é uma das coisas que não gosto no python para aprendizado,
existem muitas funções prontas.

reverso = []
for i in range(len(lista1)):

    reverso = lista1[-i]
    print(reverso)

"""

lista1 = [10,20,30,50,80]
reverso = []

for i in range(len(lista1)): # Percorre o Vetor
    reverso.append(lista1[-i-1])
print(reverso)




