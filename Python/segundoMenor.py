'''
vetor = [6, 8, 9, 1, 5, 4, 2, 3, 7]
menor = 0

for i in range(8):
    if vetor[i] < vetor[i - 1]:
        menor = vetor[i]
print(menor) # imprime o número 2
########################################################
'''

vetor := [6, 8, 9, 1, 5, 4, 2, 3, 7] %vetor de tamanho 8
menor := 0

para i := 0 até N faça: %onde N seria 8
    se vetor[i] < vetor[i - 1]:
        menor := vetor[i]
imprime(menor)   % se N fosse = 8, o valor 2 seria impresso
