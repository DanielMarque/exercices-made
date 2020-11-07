
lista = []

fb0 = 0
fb1 = 1

n = int(input())

if n <= 0 or n >= 60:
    print('Número Inválido')
else:
    for i in range(n):
        entrada = int(input())
        lista.append(entrada)
        valor_fibo = lista[i - 1] + lista[i - 2]
        print('Fib({}) = {}'.format(lista[i]),valor_fibo)
