
class B():
    def __init__(self):
        print("Construtor de B")
        self.bx= "Uga uGa"


class C():
    def __init__(self):
        print("Construtor de C")
        self.cx = "Petchikovitvi"

    def ajuda(self): return "Ajuda Aki meu"


class D(B ,C):
    def __init__(self):
        print("Construtor de D")
        self.dx = "Jooj"
        B.__init__(self)
        C.__init__(self)



d = D()
print(d.cx)
print(d.bx)
print(d.dx)
print(d.ajuda())