
condicao = True
notas = []

while condicao == True: # Loop de entrada de numeros
    entrada = float(input())

    if entrada >= 0 and entrada <= 10: # adiciona as notas válidas a um vetor
        notas.append(entrada)
        if len(notas) == 2: # limita a quantidade de 2 numeros no vetor e imprime a media
            media = (notas[0] + notas[1])/2
            print('media = {}'.format(media))
            condicao = False
    else:
        print('nota invalida')
