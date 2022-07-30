import pandas as pd

df = pd.read_csv("notas_alunos.csv")
print("\nArquivo 'notas_alunos.csv' ORIGINAL.\n")
print(f"{df}\n\n")

df.insert(len(df.columns), "MÉDIA", "")
df.insert(len(df.columns), "SITUAÇÃO", "")
print("Arquivo 'notas_alunos.csv' após inclusão das colunas 'MÉDIA' e 'SITUAÇÃO'.\n")
print(f"{df}\n\n")

contador = 0
while contador < len(df):
    df.loc[contador, "MÉDIA"] = (df["NOTA_1"][contador] + df["NOTA_2"][contador]) / 2
    contador = contador + 1

df.loc[df["MÉDIA"] >= 7, "SITUAÇÃO"] = "Aprovado"
df.loc[df["MÉDIA"] < 7, "SITUAÇÃO"] = "Reprovado"
df.loc[df["FALTAS"] > 5, "SITUAÇÃO"] = "Reprovado"

df.to_csv("alunos_situacao.csv", index=False)

maior_numero_faltas = max(df["FALTAS"])
media_geral = df["MÉDIA"].mean()
maior_media = max(df["MÉDIA"])

df = pd.read_csv("alunos_situacao.csv")
print("Arquivo NOVO criado com o nome 'alunos_situacao.csv'.\n")
print(f"{df}\n\n")
print("O maior número de faltas: " + str(maior_numero_faltas) + ".")
print("A média geral das notas dos alunos: " + str(media_geral) + ".")
print("A maior média: " + str(maior_media) + ".\n")
