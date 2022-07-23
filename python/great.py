


A, B, C = [int(i) for i in input().split()]

great = ""
lower = ""

if A > B and A > C:
    great = A
if B > A and B > C:
    great = B
if C > A and C > B:
    great = C
if C == A or C == B:
    great = 'Eles são iguais'
if A < B and A < C:
    lower = A
if B < A and B < C:
    lower = B
if C < A and C < B:
    lower = C
if C == A or C == B:
    lower = 'Eles são iguais'

print('Qual o maior?', great)
print('Qual o menor?', lower)

