'''
O programa recebe uma valor e informa as cédulas e moedas disponíveis para aquele valor.
# Depois vou refazer esse programa com uma estrutura de repetição
'''
valor = float(input())

print('NOTAS:')
#Notas de 100
nota100 = valor // 100
resto100 = valor % 100
print('{:.0f} nota(s) de R$ 100.00'.format(nota100))

#Notas de 50
nota50 = resto100 // 50
resto50 = resto100 % 50
print('{:.0f} nota(s) de R$ 50.00'.format(nota50))

#Notas de 20
nota20 = resto50 // 20
resto20 = resto50 % 20
print('{:.0f} nota(s) de R$ 20.00'.format(nota20))

#Notas de 10
nota10 = resto20 // 10
resto10 = resto20 % 10
print('{:.0f} nota(s) de R$ 10.00'.format(nota10))

#Notas de 5
nota5 = resto10 // 5
resto5 = resto10 % 5
print('{:.0f} nota(s) de R$ 5.00'.format(nota5))

#Notas de 2
nota2 = resto5 // 2
resto2 = resto5 % 2
print('{:.0f} nota(s) de R$ 2.00'.format(nota2))

#MOEDAS
print('MOEDAS:')

#Moedas de 1 real
moeda1 = resto2 // 1.00
resto1 = resto2 % 1.00
print('{:.0f} moeda(s) de R$ 1.00'.format(moeda1))

#Moedas de 0.50Centavos
moeda50 = resto1 / 0.50
restomoeda50 = resto1 % 0.50
print('{:.0f} moeda(s) de R$ 0.50'.format(moeda50))

#Moedas de 0.25Centavos
moeda25 = restomoeda50 // 0.25
resto25 = restomoeda50 % 0.25
print('{:.0f} moeda(s) de R$ 0.25'.format(moeda25))

#Moedas de 0.10Centavos
moeda10 = resto25 / 0.10
restomoeda10 = resto25 % 0.10
print('{:.0f} moeda(s) de R$ 0.10'.format(moeda10))

#Moedas de 0.5Centavos
moeda5 = (restomoeda10 / 0.05)
valor5 = restomoeda10 - (moeda5 * 0.05)
restomoeda5 = restomoeda10 % 0.05
print('{:.0f} moeda(s) de R$ 0.05'.format(valor5))

#Moedas de 01Centavos
moeda01 = (moeda5 / 0.1)/2
print('{:.0f} moeda(s) de R$ 0.01'.format(moeda01))




