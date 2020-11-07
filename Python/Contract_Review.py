num1 = 0
num2 = 0

while num1 != '' and num2 != '':

    num1 = 0
    num2 = 0

    num1, num2 = input().split() # Recebe dois inteiros já convertendo os para strings
    if num1 in num2:
        num2 = num2.replace(num1,'')

    if num2[0] == '0':
        print('0')
    else:
        print(num2)

    num1 = 0
    num2 = 0
