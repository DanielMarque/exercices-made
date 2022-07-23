

entrada = int(input())

for i in range(10000):
    resto = i % entrada
    if resto == 2:
        print(i)
