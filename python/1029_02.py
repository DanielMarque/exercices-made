calls_elemento = [1, 1, 2, 4]
fibo = [0, 1]
for i in range(2, 41):

    calls_do_elemento = calls_elemento[i - 1] + calls_elemento[i - 2]
    if i >= 4:
        calls_elemento.append(calls_do_elemento + 2)
    fibo.append(fibo[i - 1] + fibo[i - 2])

entrada = int(input())

while (entrada > 0):
    n_f = int(input())
    print("fib(%i) = %i calls = %i" % (n_f, calls_elemento[n_f], fibo[n_f]))
    entrada -= 1
