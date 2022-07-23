

try:
    a = eval(input("Entre com o número: "))
    b = eval(input("Entre com outro número: "))
    print(a, "/",b, "=" , a/b)
# except (ZeroDivisionError, TypeError) as e:
#     print("Erro, o segundo número não pode ser zero!")
#     print(e)
except (ZeroDivisionError):
    print("Erro, o segundo número não pode ser zero!")

except (TypeError):
    print("Erro, o segundo número não pode ser diferente de um inteiro!")
    raise



