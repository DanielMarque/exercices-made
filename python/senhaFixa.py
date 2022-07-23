
X = int(input())
aux = False

while aux != True:
    if X == 2002:
        print('Acesso Permitido')
        aux = True
    else:
        print('Senha Invalida')
        X = int(input())
