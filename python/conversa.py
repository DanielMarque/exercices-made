

print('Olá! Como você está?')
estado = input('Bem?[B]   Mal?[M]   Mais ou Menos?[O]')

estado = estado[0].lower()

if estado == 'b':
    print('Quem Bom!')
elif estado == 'm':
    print('O que houve?')
    h = input()
elif estado == 'o':
    print('Vai tudo ficar bem!')

nome = input('Qual o seu nome?')
print(f'Vai ficar tudo bem! Vc é uma pessoa boa, mesno que não ache :) {nome}')
