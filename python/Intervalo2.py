

X = int(input())

dentro = 0
fora = 0
for i in range(X):
    X = int(input())

    if X < 10 or X > 20:
        fora +=1

    elif X > 10 or X < 20:
        dentro +=1

print('{} in'.format(dentro))
print('{} out'.format(fora))
