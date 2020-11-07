

N = int(input())

for i in range(N):
    N = int(input())
    if (N % 2) != 0 and N < 0:
        print('ODD NEGATIVE')

    elif N == 0:
        print('NULL')

    elif (N % 2) != 0:
        print('ODD POSITIVE')

    elif (N % 2) == 0 and N < 0:
        print('EVEN NEGATIVE')

    elif (N % 2) == 0:
        print('EVEN POSITIVE')
