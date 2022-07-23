


beto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
entry = int(input())

while entry != 0:

    query = input()
    query = list(query)
    prox = int(input())

    for i in range(len(beto)):
        for x in range(len(query)):


            if query[x] == beto[i]:

               if query[x] == beto[-1] or query[x] == beto[-1]:

                   beto = beto[::-1]
                   query[x] = query[x].replace(query[x], beto[i - prox])

               else:
                   query[x] = query[x].replace(query[x], beto[i - prox])



    print(query)
    entry -= 1