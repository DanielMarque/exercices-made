nomeFuncionario = input()
salarioFixo = float(input())
vendasFeitas = float(input())

salario = vendasFeitas * 0.15
salario = salario + salarioFixo

print('TOTAL = R$ {:.2f}'.format(salario))
