

def muda_lista(lista):
    newNspam = []
    for i in range(len(lista)):
        valor = lista[i].lower()
        valor = ' ' + valor
        newNspam.append(valor)

    valor = newNspam[-1:]

    valor = ' Cuidado' + valor[0]
    newNspam.pop()
    newNspam.append(valor)
    return newNspam


spam = ['alerta','dos','acacos','Alerta','Nova York']

print(muda_lista(spam))

