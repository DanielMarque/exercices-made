'''
dados = open("lais.txt","r") # Define uma Variável de abertura do arquivo
conteudo = dados.readline() # Define uma variável para atribuição do conteúdo do arquivo(SÓ LÊ A PRIMEIRA LINHA)
conteudo = dados.readlines() # Trasforma cada Linha em um índice de um vetor
for i in range(len(conteudo)):
    print(conteudo[i]) # Imprime o conteúdo atribuído a variável

dados.close() # Fecha o Arquivo(a mesma variável de abertura)

# LOOP para imprimir todas as linhas de um arquivo utilizando apenas o realine()

dados = open("lais.txt","r")
linha = dados.readline()

while linha != '':

    print(linha)
    linha = dados.readline()
dados.close()

# Da escrita em Arquivos

dados = open('lais.txt','a') # Utilizando o 'w' de Write subscreve qualquer dado no arquivo
                             # Utilizando o 'a' "EX: dados = open('lais.txt','a')" somente é inserido texto apartir
                             # do ultimo caractere, sem apagar o que já existe no arquivo.
dados.write('lais eu gosto de vc \n')


dados = open('lais.txt','r')
conteudo = dados.readlines()
for i in conteudo:
    print(i)

dados.close()

'''
from math import sqrt
# Calcula a distância

distancia = sqrt((6.2 - 1.9)**2 + (8.1 - 2.5)**2) # Fórmula para calculo da distância
print(distancia)

