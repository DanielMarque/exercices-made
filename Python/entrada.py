'''

# 2 - Entrada e saídade um número
numero = input('Digite um número: ')
print(f'O número digitado foi: {numero}')

# 3 Posição de uma palavra

frase = input('Digite uma frase: ').split()
print(f'A palavra é "{frase[1]}", e está na posição 2 da frase')

# 4 - Notas Bimestrais e a média
media = 0
notas = []
for i in range(1,5):
    notas.append(int(input(f'Digite a Nota {i}: ')))

for i in range(len(notas)):
    media += notas[i]

media = media//len(notas)
print(f'A média é: {media}')

# 5 - Converte metros para centímetros

metro = int(input('Quantos metros? '))

centimetros = metro * 100

print(f'{metro} metros é igual a {centimetros} centímetros.')
'''

# 6 - Lê o raio e mostra a área

raio = input(int('Digite o raio do Círulo: '))

area = 3.14 * raio ** 2

print(f'A área do Círculo é {area}')
