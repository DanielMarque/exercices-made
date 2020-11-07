'''
Tendo em mente o Conceito de que Strings são Imutáveis, claramente não podemos modificar uma string, mas podemos
copia las e concatenalás.



'''

nome = 'Daniel'
novo_nome = nome[:3] + ' Marques'
print(novo_nome)

name = 'Shopia o gata'
new_name = name[0:7] + 'a' + name[8:13]
print(new_name)

novo_nome = list(novo_nome)
print(novo_nome)

novo_nome = tuple(novo_nome)
print(type(new_name))

