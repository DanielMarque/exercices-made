
'''
lista = [1,4,5,6,8,7,8,9,7,8]
count = 0
num = int(input())

for i in range(len(lista)):
    if lista[i] == num:
        count +=1
print(count)
'''
# Subprogramas

def votoCandidatos(candidatos):
    for i in range(len(candidatos)-1):

        numcandidatos = candidatos.count(candidatos[i])
        print('candidato {} obteve {} voto(s)'.format(i,numcandidatos))


# Programa Principal

candidatos = []
condicao = True
entrada = 0
entrada = input()

if entrada == '':
    print('nenhum voto ocorreu')
else:
    candidatos.append(entrada)
    while condicao == True:
        entrada = input()
        candidatos.append(entrada)
        if entrada == '':
            condicao = False
            votoCandidatos(candidatos)
