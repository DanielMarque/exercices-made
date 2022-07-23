

X = int(input())
Y = int(input())
total = 0

if X > Y:

    aux = X
    X = Y
    Y = aux

for i in range(X, Y+1):

    if i % 13 != 0:
        total += i

print(total)