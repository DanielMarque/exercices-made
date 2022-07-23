
# Uma função pode mudar o valor de uma variável global

def texto():
    global hits # Invoca uma variável global
    hits = 'Pagode' # Muda o Valor da variável global

hits = 'Funk'
print(hits)
texto()
print(hits)
