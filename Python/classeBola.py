
class Bola:

    def __init__(self, cor, circunferencia, material): # Atributos de classe
        self.cor = cor
        self.circunferencia = circunferencia
        self.material = material

    def trocaCor(self): # Método para mudança de cor
        decisao = input('Deseja Trocar a cor ? [s/n]')

        decisao = decisao[0].lower()

        if decisao == 's':
            nova_cor = input('Digite a Nova Cor: ')
            self.cor = nova_cor

        else:
            print('A cor {} permanece!'.format(self.cor))


    def mostraCor(self): # Método para exibição da cor atual do objeto
        print('A cor atual da bola é: {}'.format(self.cor))





def principal(): # Funcao para repeticao da classe bola e seus métodos

    bola_quadrada = Bola('Azul',6 ,'Plástico') # instanciamento da classe

    while True: # Loop para execução contínua e opcional
        bola_quadrada.mostraCor()
        bola_quadrada.trocaCor()

        continuar = input('continuar? [s/n]')
        continuar = continuar[0].lower()
        if continuar == 'n':
            break
    bola_quadrada.mostraCor()

print("Iniciando o Programa!")
principal()
