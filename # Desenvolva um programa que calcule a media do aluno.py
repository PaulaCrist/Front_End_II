# Desenvolva um programa que calcule a média de um aluno. O programa deve solicitar 3 notas do aluno, sendo a primeira com peso 2, a segunda nota com peso 3 e a terceira nota com peso 5. No final, exiba a média calculada.

# Solicite as três notas com os pesos correspondentes
nota1 = float(input("Digite a primeira nota (com peso 2): "))
nota2 = float(input("Digite a segunda nota (com peso 3): "))
nota3 = float(input("Digite a terceira nota (com peso 5): "))

# Calcule a média ponderada
media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / (2 + 3 + 5)

# Exiba a média calculada
print(f"A média do aluno é: {media:.2f}")