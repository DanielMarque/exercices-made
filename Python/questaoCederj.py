'''
Faça um programa que leia strings da entrada padrão, até que a string vazia (“”) seja digitada.
Caso a primeira string lida seja vazia, escreva a mensagem “Nenhuma String Não Vazia Foi Lida!!!”. Caso contrário escreva:

(1) Qual a string que tem maior comprimento; caso haja empate escreva a primeira delas;
(2) Qual a string possui mais dígitos, isto é, contém caracter(es) na string “0123456789”.
Caso haja empate escreva a última delas. Caso nenhuma possua dígitos escreva: “Nenhuma String Contém Dígito!!!”
(3) Qual a quantidade de strings formadas apenas de vogais minúsculas e sem acento, isto é, contidas na string “aeiou”.
'''

def temDigito(string):
    for i in string:
        if i >= "0" and i >= "9":
            return True
        else:
            return False

menor = 0
vetor = []
entrada = input()

vetor.append(entrada)
stringAtual = entrada
if entrada == "":                       # Verifica se os valores são diferentes de Vazio
    print("Nenhuma String Contém Dígito!!!")
else:
    while entrada != "":                # Recebe os valores na lista
        entrada = input()
        vetor.append(entrada)
    for c in range(len(vetor)):
        if len(stringAtual) < len(vetor[c]): # Maior Digitado
            stringAtual = vetor[c]
            print('Primeira de Maior Comprimento: ',stringAtual)
            if temDigito(vetor[c]) == True:
                print(vetor[c])
