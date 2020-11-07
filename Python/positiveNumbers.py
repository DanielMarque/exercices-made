
num = 0
for i in range(1, 7):

    valor = float(input())
    if valor > 0:
        num += 1
print('{:.0f} valores positivos'.format(num))
