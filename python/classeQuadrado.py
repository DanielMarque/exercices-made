
class Quadrado:

    def __init__(self, tamanho_do_lado):
        self.tamanho_do_lado = tamanho_do_lado

    def muda_valor_lado(self):
        decisao = input(f'Deseja trocar o valor do lado {self.tamanho_do_lado} [s/n]')

        decisao = decisao[0].lower()
        if decisao == 's':
            novo_valor = input('Digite o Novo Valor do Lado')
            self.tamanho_do_lado = novo_valor
            print('Valor Alterado')

    def valor_area(self):
        area = self.tamanho_do_lado
        return self.tamanho_do_lado, (area * 4)

def principal():

    cubo = Quadrado(6)

    while True:

        cubo.muda_valor_lado()
        cubo.tamanho_do_lado
        cubo.valor_area()

        continuar = input('Deseja repetir a operção? [s/n]')
        continuar = continuar[0].lower()

        if continuar == 'n':
            break

    print(cubo.valor_area())

principal()
