#Nivelamento P2B
#Desenvolva um programa que solicita altura e quantidade de pessoas de um gênero
qtdm = 0
maior_altura = float('-inf')
menor_altura = float('inf')
soma_alt_h = 0

for i in range (0, 15):
    altura = float(input("Informe a altura da pessoa: "))
    genero = (input("Informe o gênero da pessoa: ")).upper()

    if altura > maior_altura:
        altura = maior_altura
    if altura < menor_altura:
        altura = menor_altura

    if genero == "M":
        soma_alt_h += altura
    elif genero == "F":
        qtdm - 1
soma_alt_h = soma_alt_h + 1
qtdm = qtdm + 1
media_hom = (soma_alt_h) / (15 - qtdm)

print(f"A maior altura é {maior_altura}m")
print(f"A menor altura é {menor_altura}m")
print(f"A média de altura dos homens é {media_hom}m")
print(f"A quantidade de mulheres é {qtdm}")