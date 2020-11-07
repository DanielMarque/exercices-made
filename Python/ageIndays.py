'''
Lê a idade da pesso em dias e imprime a quantidade de anos, meses e dias de vida da pessoa.
'''

dias = int(input())

#Anos
anos = dias // 365
anoresto = dias % 365
#Meses
meses = anoresto // 30
mesesresto = anoresto % 30
dia = mesesresto // 1
print('{} ano(s)\n{} mes(es)\n{} dia(s)'.format(anos, meses, dia))
