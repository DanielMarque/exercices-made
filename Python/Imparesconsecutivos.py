

limit = int(input())
total = 0

while limit > 0:

    A, B = [int(i) for i in input().split()]

    if A > B:
        aux = B
        B = A
        A = aux

    for i in range(A+1, B):

        if i % 2 != 0:

            total += i

    print(total)
    total = 0
    limit -= 1