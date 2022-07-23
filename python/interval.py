'''
You must make a program that read a float-point number and print a message saying in which of following
intervals the number belongs: [0,25] (25,50], (50,75], (75,100]. If the read number is less than zero or greather than 100,
 the program must print the message “Fora de intervalo” that means "Out of Interval".

The symbol '(' represents greather than. For example:
[0,25] indicates numbers between 0 and 25.0000, including both.
(25,50] indicates numbers greather than 25 (25.00001) up to 50.0000000.


intervalo1 = range(0, 25)
intervalo2 = range(26, 50)
intervalo3 = range(51, 75)
intervalo4 = range(76, 100)

if entrada in intervalo1:
    print('Intervalo [0,25]')
elif entrada in intervalo2:
    print('Intervalo (25,50]')
elif entrada in intervalo3:
    print('Internvalo (50,75]')
elif entrada in intervalo4:
    print('Intervalo (75,100]')
else:
    print('defeito')


'''

entrada = float(input())

if entrada >=0 and entrada <= 25:
    print('Intervalo [0,25]')
elif entrada >=25 and entrada <= 50:
    print('Intervalo (25,50]')
elif entrada >=50 and entrada <= 75:
    print('Intervalo (50,75]')
elif entrada >= 75 and entrada <= 100:
     print('Intervalo (75,100]')
elif entrada < 0 or entrada > 100:
    print('Fora de intervalo')




