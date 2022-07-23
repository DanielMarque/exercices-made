
class C(object):
    def __init__(self):
        print("Construtor de C")
        self.x = 1
        self.xx = "Uga uGa"


class D(C):
    def __init__(self):
        print("Construtor de D")
        C.__init__(self)
        self.y = 2
        print(self.xx)


d = D()