'''
n = int(input())

def fatorial(n):
    cont = 0
    for i in range(n):
        cont = cont + 1
        if n == 1:
            return n
    print(cont)
    return fatorial(n-1) * n

print(fatorial(n))
'''

msg = str(input())
msg2 = ''

print(msg)

for i in msg:
    if (i.isalpha()):
        msg2 += chr(ord(i) + 3)
        print(msg2)
    else:
        print('não é letra')
