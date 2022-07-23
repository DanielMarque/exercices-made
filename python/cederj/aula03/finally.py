
try:
    try:

        x = eval(input("Entre com um número"))
        if type(x) == "string":
            print("Legal, acabou")

    finally:

        print("Fazendo x ao default None")
        x = None
except:
    print("Ocorreu um Erro!")


