


class Base(object):
    n = 2
    def func1(self, n1): return Base.n * n1

class Casa(Base):

    def parede(self, n1): return Base.func1(self, n1)**2
    def teto(self, n1): return self.parede(n1) + 2

b = Base()
c = Casa()
b.func1(4)

c.func1(8)
# print(c.func1(8))
# print(c.parede(3))
print(c.teto(2))
print(b.func1(4))