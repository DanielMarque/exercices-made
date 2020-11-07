vetor = []

for i in range(10):

    entrada = int(input())
    if entrada <= 0:
        entrada = 1

    vetor.append(entrada)
    print('X[{}] = {}'.format(i,vetor[i]))




