
first_name = "Daniel da Conceição Marques".split(" ")[0]
last_name = "Daniel da Conceição Marques".split(" ")[-1]

print(first_name + " " + last_name)


# Packaging Strings
x = ("Daniel", "Marques", "cardeo@gmail.com")
fname, lname, email = x
print(email)


# Dictionary
lista_de_compras = {"banana":2, "arroz":5, "carne de porco":18}
print(lista_de_compras["banana"],lista_de_compras["arroz"])

for i,y in lista_de_compras.items():
    print(i,y,end=", ")