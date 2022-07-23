

diaInicial = int(input('Dia'))
horaInicial, minutoInicial, segundoInicial = [int(i) for i in input().split(":")]

diaFinal = int(input('Dia'))
horaFinal, minutoFinal, segundoFinal = [int(i) for i in input().split(":")]

dias = diaFinal - diaInicial

horas = horaFinal - horaInicial

if horas < 0:
    horas += 24
    dias -= 1

minutos = minutoFinal - minutoInicial

if minutos < 0:
    minutos += 60
    horas -=1

segundos = segundoFinal - segundoInicial

if segundos < 0:
    segundos += 60
    minutos -= 1

print('{} dia(s)'.format(dias))
print('{} hora(s)'.format(horas))
print('{} minuto(s)'.format(minutos))
print('{} segundo(s)'.format(segundos))
