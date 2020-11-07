'''
O programa lê um número inteiro, referente ao tempo(segundos) de execução de determindado evento
e em seguida retorna o tempo em horas, minutos e segundos.
'''



segundos = int(input()) horas = segundos // 3600 segundos -= horas 3600 minutos = segundos // 60 segundos -= minutos 60 print("{}:{}:{}".format(horas, minutos, segundos))
