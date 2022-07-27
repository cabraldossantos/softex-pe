class Calculadora:
    def __init__(self):
        self.numero_1_da_operacao = 0.0
        self.numero_2_da_operacao = 0.0
        self.operacao = -1

        self.SOMAR = 1
        self.SUBTRAIR = 2
        self.MULTIPLICAR = 3
        self.DIVIDIR = 4
        self.SAIR = 0

    def inicializar_calculadora(self):
        print("Você está num ambiente de numa calculadora.")
        print("Abaixo segue a legenda das operações possíveis:")
        print("1: Somar")
        print("2: Subtrair")
        print("3: Multiplicar")
        print("4: Dividir")
        print("0: Sair")

    def mostrar_opcoes(self):
        print()
        print("Você está convidado(a) a fazer uma nova operação!")
        print("Opções de operações:")
        print("1: Somar")
        print("2: Subtrair")
        print("3: Multiplicar")
        print("4: Dividir")
        print("0: Sair")

    def calcular(self):
        resultado = 0
        operacao = ""
        if (self.operacao != self.SOMAR) or (self.operacao != self.SUBTRAIR) or (self.operacao != self.MULTIPLICAR) or (self.operacao != self.DIVIDIR):
            resultado = -1

        if self.operacao == self.SOMAR:
            resultado = self.numero_1_da_operacao + self.numero_2_da_operacao
            operacao = "SOMAR (" + str(self.numero_1_da_operacao) + "+" + str(self.numero_2_da_operacao) + ")"

        if self.operacao == self.SUBTRAIR:
            resultado = self.numero_1_da_operacao - self.numero_2_da_operacao
            operacao = "SUBTRAIR (" + str(self.numero_1_da_operacao) + "-" + str(self.numero_2_da_operacao) + ")"

        if self.operacao == self.MULTIPLICAR:
            resultado = self.numero_1_da_operacao * self.numero_2_da_operacao
            operacao = "MULTIPLICAR (" + str(self.numero_1_da_operacao) + "*" + str(self.numero_2_da_operacao) + ")"

        if self.operacao == self.DIVIDIR:
            resultado = self.numero_1_da_operacao / self.numero_2_da_operacao
            operacao = "DIVIDIR (" + str(self.numero_1_da_operacao) + "+" + str(self.numero_2_da_operacao) + ")"

        return "O resultado da operação " + str(operacao) + " é " + str(resultado) + "."

    def verificar_operacao(self, operacao):
        operacao_verificada = False
        mensagem = "Essa opção não existe."
        
        if (operacao == calculadora.SAIR):
            operacao_verificada = True
        elif (operacao == calculadora.SOMAR):
            operacao_verificada = True
        elif (operacao == calculadora.SUBTRAIR):
            operacao_verificada = True
        elif (operacao == calculadora.MULTIPLICAR):
            operacao_verificada = True
        elif (operacao == calculadora.DIVIDIR):
            operacao_verificada = True
        
        if operacao_verificada:
            mensagem = "Opção válida."

        return (operacao_verificada, mensagem)

    def sair(self):
        print("A calculadora foi abandonada.")
        exit()




calculadora = Calculadora()
calculadora.inicializar_calculadora()

while calculadora.operacao != 0:
    operacao = int(input("Informe qual é a operação, conforme a legenda: "))

    calculadora.operacao = operacao

    verificada,mensagem_da_verificacao = calculadora.verificar_operacao(calculadora.operacao)
    if not verificada:
        print(mensagem_da_verificacao)
        continue

    if calculadora.operacao == calculadora.SAIR:
        calculadora.sair()

    numero_1 = float(input("Entre com o primeiro número da operação: "))
    numero_2 = float(input("Entre com o segundo número da operação: "))
    calculadora.numero_1_da_operacao = numero_1
    calculadora.numero_2_da_operacao = numero_2

    if (calculadora.operacao == calculadora.SOMAR) or (calculadora.operacao == calculadora.SUBTRAIR) or (calculadora.operacao == calculadora.MULTIPLICAR) or (calculadora.operacao == calculadora.DIVIDIR):
        print()
        print(calculadora.calcular())
        calculadora.mostrar_opcoes()
    else:
        calculadora.sair()