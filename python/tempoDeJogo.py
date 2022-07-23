
#
# Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o
# mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de
# 24 horas.

ini, fim = [int(i) for i in input().split()]

if ini > fim:
    total = ini - fim
    print('O JOGO DUROU {:.0f} HORA(S)'.format(24 - total))

elif fim > ini:
    total = fim - ini
    print('O JOGO DUROU {:.0f} HORA(S)'.format(total))
