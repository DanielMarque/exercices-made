import random
from IGenerator import IGenerator
from BasicIcon import BasicIcon

class BasicGenerator(IGenerator):

    # Construi um gerador básico que cria ícones
    # de com valores de 0 até numTypes aleatoriamente
    def __init__(self, numTypes, seed=None):
        self.numTypes = numTypes

    def generate(self):
        return BasicIcon(random.random())

    def initialize(self, grid, randIcons=True):
        state = False
        icon1 = 0
        icon2 = 1

        for i in range(len(grid)):

            state = not state

            if state == False:
                icon1 += 1
                n = self.numTypes
                icon1 = icon1 % n
                if icon1 == icon2:
                    icon1 =  (icon2 + 1) % n

                icon2 = (icon1 + 1) % n

                if icon1 == icon2:
                    icon2 = (icon1 + 1) % n

            for j in range(len(grid[0])):

                if randIcons == False:
                    if state == True:
                        grid[i][j] = BasicIcon(icon1)
                    else:
                        grid[i][j] = BasicIcon(icon2)
                else:
                    grid[i][j] = self.generate()

                state = not state


basico = BasicGenerator(12)









