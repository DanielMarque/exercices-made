
# uma instância herda atributos da função e etc ...

class Classe(object):
    a = 1
    def funcao(self, x):
        self.a += x

vaso = Classe()
vaso.funcao(10)
print(vaso.a)