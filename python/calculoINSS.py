"""
Desafio realizado para uma Vaga de Estágio

Escrever um Programa que calcule o imposto devido de INSS e IRPF

"""


# Entrada de dados
salario = float(input('Digite o Salário: '))
dependentes = float(input('Número de Dependentes: '))

print('#'*32)
print('#'*32)
# Declaração de Variáveis

var = 0
descDepen = 0
descontoINSS = 0
descontoIRPF = 0

# Cálculo do desconto INSS

if salario >= 0 and salario <= 1751.81: # Salários até 1751.81
    descontoINSS = salario * 0.08
    print('ImpostoINSS: R$ {:.2f}'.format(descontoINSS))


elif salario >= 1751.82 and salario <= 2919.74: # Salários entre 1751.82 e 2919.74
    descontoINSS = salario * 0.09
    print('ImpostoINSS: R$ {:.2f}'.format(descontoINSS))


elif salario >= 2919.73 and salario <= 5839.45: # Salários entre 2919.73 e 5839.45
    descontoINSS = salario * 0.11
    print('ImpostoINSS: R$ {:.2f}'.format(descontoINSS))

elif salario >= 5839.45: # Salários acima de 5839.45
    descontoINSS = 642.34
    print('ImpostoINSS: R$ {:.2f}'.format(descontoINSS))

salarioBase = salario - descontoINSS
salarioFinal = salarioBase

# Desconto dos Dependentes
if dependentes != 0:
    descDepen = dependentes * 189.59
    salarioBase = salarioBase - descDepen

# Cálculo desconto IRPF

if salarioBase <= 1903.98:                                  # Salarios abaixo de 1903.98
    impostoIRPF = salarioBase * 0.0                         # Regra alíquota 0%
    print('ImpostoIRPF: R$ {:.2f}'.format(impostoIRPF))


elif salarioBase >= 1903.99 and salarioBase <= 2826.65:     # Salarios entre 1903.99 e 2826.65
    impostoIRPF = salarioBase * 0.075                       # Regra alíquota 7,5%
    var = impostoIRPF - 142.80
    print('ImpostoIRPF: R$ {:.2f}'.format(var))


elif salarioBase >= 2826.66 and salarioBase <= 3751.05:     # Salarios entre 2826.66 e 3751.05
    impostoIRPF = salarioBase * 0.15                        # Regra alíquota 15%
    var = impostoIRPF - 354.80
    print('ImpostoIRPF: R$ {:.2f}'.format(var))


elif salarioBase >= 3751.06 and salarioBase <= 4664.68:     # Salarios entre 3751.06 e 4664.68
    impostoIRPF = salarioBase * 0.225                       # Regra alíquota 22,5%
    var = impostoIRPF - 636.13
    print('ImpostoIRPF: R$ {:.2f}'.format(var))


elif salarioBase >= 4664.68:                                # Salarios acima de 4664.68
    impostoIRPF = salarioBase * 0.275                       # Regra alíquota 27.5%
    var = impostoIRPF - 869.36
    print('ImpostoIRPF: R$ {:.2f}'.format(var))


salarioTotal = var + descontoINSS
salarioDescontado = salario - salarioTotal

print('Total de Descontos: R$ {:.2f}'.format(salarioTotal))
print('Salario com Descontos: R$ {:.2f}'.format(salarioDescontado))
