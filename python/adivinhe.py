
import random

numero = random.randint(1, 10)
continuar = True

print('Olá! Digite sua sugestão de número!')
print('Vc tem 5 chances!')
print(numero)

while continuar:

    for i in range(5):

        entrada = int(input())
        if entrada > numero:
            print(f'{entrada} É maior que o número procurado!')

        elif entrada < numero:
            print(f'{entrada} é menor que o numero procurado!')

        elif entrada == numero:
            print('Vc Acertou! Parabéns')
            break

    print('Que pena! Vc não acertou =(')
    resposta = input('Deseja Tentar Novamente?[S]/[N]')
    resposta = resposta[0].lower()

    if resposta == 's':
        continuar = True
        print('Vc tem 5 chances!')
    else:
        continuar = False
