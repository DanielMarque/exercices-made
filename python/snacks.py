
X, Y = [int(i) for i in input().split()]

code1 = 4.00
code2 = 4.50
code3 = 5.00
code4 = 2.00
code5 = 1.50

if X == 1:
    code1 = Y * code1
    print('Total: R$ {:.2f}'.format(code1))
elif X == 2:
    code2 = Y * code2
    print('Total: R$ {:.2f}'.format(code2))
elif X == 3:
    code3 = Y * code3
    print('Total: R$ {:.2f}'.format(code3))
elif X == 4:
    code4 = Y * code4
    print('Total: R$ {:.2f}'.format(code4))
elif X == 5:
    code5 = Y * code5
    print('Total: R$ {:.2f}'.format(code5))

