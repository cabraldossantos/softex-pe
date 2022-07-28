from datetime import datetime


class Idade:
    def __init__(self):
        self.nome = ""
        self.ano_nascimento = 0
        # self.verificar_ano()

    def verificar_ano(self):
        verificado = False
        if ((self.ano_nascimento >= 1922) and (self.ano_nascimento <= 2021)):
            verificado = True
        return verificado

    def calcular(self):
        ano_atual = datetime.now()
        ano_atual = int(ano_atual.strftime("%Y"))
        completou = int((ano_atual - 1) - self.ano_nascimento)
        completara = int(ano_atual - self.ano_nascimento)
        return "Prezado(a) " + self.nome + ", você completou " + str(completou) + " anos.\nE em " + str(ano_atual) + " completará " + str(completara) + " anos."





idade = Idade()

while not idade.verificar_ano():
    try:
        idade.nome = input("Informe seu nome: ")
        idade.ano_nascimento = int(input("Informe o seu ano de nascimento: "))
    except Exception as err:
        print("\nOcorreu um erro: " + str(err))

    if idade.verificar_ano():
        print(idade.calcular())
    else:
        print()
        print("O ano de nascimento deve estar entre 1922 e 2021.\n")
        
