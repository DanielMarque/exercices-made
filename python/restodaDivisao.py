
vetor = []
X = int(input())
Y = int(input())

for i in range(X, Y):
    if i % 5 == 2 or i % 5 == 3:
        vetor.append(i)
