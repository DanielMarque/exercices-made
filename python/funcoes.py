''''
# 1
def double(n): # Retorna o Dobro de um número
    return n*2

print(double(4))

# 2
def current_date(d,m,y):
    return f'Data Atual 0{d}/0{m}/{y}'

print(current_date(2,6,2020))

# 3
def pos_or_neg(n):
    if n < 0:
        return -1
    elif n > 0:
        return  1
    elif n == 0:
        return 0

print(pos_or_neg(0))

# 4
def perfect_square(n):
    if not n < 0 and (n*0.5)*2 == n:
        print(n)
    else:
        print('Não é um quadrado perfeito.')

perfect_square(3)

# 5
def volume(raio):
    v = 4/3*3.14*raio**3
    v = v.__round__()
    return v

print(volume(5))

'''

mass = 23.2
mass = f
print(mass.floor())
