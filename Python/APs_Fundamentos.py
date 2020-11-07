'''
lista = []
lista.append([int(i) for i in input().split()])

if lista == lista[0]:
    print('Nenhum número foi lido')
else:
    maior = 0
    media = []
    while lista != []:
        maior = max(lista)
        print(maior)
        break

'''
# AP1 - Questão 2

# Subprograma

def candidatos(vetor):

    if 0 in vetor:
        cand0 = vetor.count(0)
        print('O Candidato 0 obteve {} voto(s)'.format(cand0))
    if 1 in vetor:
        cand1 = vetor.count(1)
        print('O Candidato 1 obteve {} voto(s)'.format(cand1))
    if 2 in vetor:
        cand2 = vetor.count(2)
        print('O Candidato 2 obteve {} voto(s)'.format(cand2))
    if 3 in vetor:
        cand3 = vetor.count(3)
        print('O Candidato 3 obteve {} voto(s)'.format(cand3))
    if 4 in vetor:
        cand4 = vetor.count(4)
        print('O Candidato 4 obteve {} voto(s)'.format(cand4))
    if 5 in vetor:
        cand5 = vetor.count(5)
        print('O Candidato 5 obteve {} voto(s)'.format(cand5))
    if 7 in vetor:
        cand7 = vetor.count(7)
        print('O Candidato 7 obteve {} voto(s)'.format(cand7))
    if 8 in vetor:
        cand8 = vetor.count(8)
        print('O Candidato 8 obteve {} voto(s)'.format(cand8))
    if 9 in vetor:
        cand9 = vetor.count(9)
        print('O Candidato 9 obteve {} voto(s)'.format(cand9))


lista = []
entrada = int(input())

while 1:
    if entrada == '':
        print('Nenhum Voto Ocorreu')
    else:
        entrada = int(entrada)
        lista.append(entrada)
        entrada = input()
        if entrada == '':
            candidatos(lista)
