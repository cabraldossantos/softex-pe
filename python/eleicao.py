candidato_x = 0
candidato_y = 0
candidato_z = 0
branco = 0
nulo = 0
final = "n"

while(final=="n"):
    try:
        print("\nEscolha o seu candidato digitando o número: ")
        print("- candidato_X => 889")
        print("- candidato_Y => 847")
        print("- candidato_Z => 515")
        print("- branco => 0  \n")
        candidato = int(input())
    except:
        print("Seu voto foi nulo.")
        candidato = 666

    if (candidato == 889):
        candidato_x = candidato_x + 1
        print("Seu voto foi computado - Candidato X")
    elif (candidato == 847):
        candidato_y = candidato_y + 1
        print("Seu voto foi computado - Candidato Y")
    elif (candidato == 515):
        candidato_z = candidato_z + 1
        print("Seu voto foi computado - Candidato Z")
    elif (candidato == 0):
        branco = branco + 1
        print("Você votou em branco")
    else:
        nulo = nulo + 1

    print("Fim da votação.\n")    
    print("Digite:")
    print("n - Novo Voto")
    print("r - Resultados")
    
    final = input()

    if (final == "r"):
        if candidato_x > candidato_y and candidato_x > candidato_z:
            print(f"\nVencedor: Candidato X com {candidato_x} votos;\n"
                  f"Candidato Y: {candidato_y} votos; e\n"
                  f"Candidato Z: {candidato_z} votos.\n")
        elif candidato_y > candidato_x and candidato_y > candidato_z:
            print(f"\nVencedor: Candidato Y com {candidato_y} votos;\n"
                  f"Candidato X: {candidato_x} votos; e\n"
                  f"Candidato Z: {candidato_z} votos.\n")
        elif candidato_z > candidato_x and candidato_z > candidato_y:
            print(f"\nVencedor: Candidato Z com {candidato_z} votos;\n"
                  f"Candidato X: {candidato_x} votos; e\n"
                  f"Candidato Y: {candidato_y} votos.\n")
        else:
            print("\nNão existem vencedores")
        
        print(f"Total de votos nulos: {nulo}\nTotal de votos em branco: {branco}\n")