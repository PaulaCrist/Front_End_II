#MediaFinal
notas = []
for i in range(3):
    nota = float(input(f"Digite a nota {i + 1}: "))
    notas.append(nota)

media = sum(notas) / len(notas)

if media <= 4:
    print(f"Média: {media:.2f}")
    print("Aluno Reprovado")
elif 4 < media < 7:
    print(f"Média: {media:.2f}")
    nota_recuperacao = float(input("Digite a nota da recuperação: "))
    media_recuperacao = (media + nota_recuperacao) / 2
    if media_recuperacao >= 5:
        print(f"Média após a recuperação: {media_recuperacao:.2f}")
        print("Aluno Aprovado")
    else:
        print(f"Média após a recuperação: {media_recuperacao:.2f}")
        print("Aluno Reprovado")
else:
    print(f"Média: {media:.2f}")
    print("Aluno Aprovado")