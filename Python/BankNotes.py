'''
Recebe um valor de entrada(monetário) e o programa simula
quais valores estão disponiveis para saque.
'''

valor = int(input(''))
print('{:.0f}'.format(valor))

# notas de 100
nota100 = valor // 100
resto100 = valor % 100
print('{:.0f} nota(s) de R$ 100,00'.format(nota100))

#notas de 50
nota50 = resto100 // 50
resto50 = resto100 % 50
print('{:.0f} nota(s) de R$ 50,00'.format(nota50))

#notas de 20
nota20 = resto50 // 20
resto20 = resto50 % 20
print('{:.0f} nota(s) de R$ 20,00'.format(nota20))

#notas de 10
nota10 = resto20 // 10
resto10 = resto20 % 10
print('{:.0f} nota(s) de R$ 10,00'.format(nota10))

#notas de 5
nota5 = resto10 // 5
resto5 = resto10 % 5
print('{:.0f} nota(s) de R$ 5,00'.format(nota5))

#notas de 2
nota2 = resto5 // 2
resto2 = resto5 % 2
print('{:.0f} nota(s) de R$ 2,00'.format(nota2))

#notas de 1
nota1 = resto2 // 1
resto1 = resto2 % 1
print('{:.0f} nota(s) de R$ 1,00'.format(nota1))
