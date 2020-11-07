
'''
def fibonacci(n):
    if n == 1:
        return n
    return (n)

     print(t1,end=' ')
'''

n = int(input())
t1 = 0
t2 = 1

for i in range(n):
    if i == n:
        print(t1)
    print(t1, end=" ") # O código da Presentation Error, pois depois do último digito é adicionado um espaço
    t = t1 + t2
    t1 = t2
    t2 = t
    total = t
print(total)
