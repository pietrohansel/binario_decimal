binario = input("Digite um número binário para ser convertido: ")

# Valores a serem potências de 2             543210

# Exemplo ->  Binário                         101010

# Onde há zero não precisamos calc.        32+8+2   =  42

contador = 0
decimal = 0

while contador < len(binario):

    if binario[0] != '0' and binario[0] != '1':
        print("Número inválido")
        break

    decimal += int(binario[contador]) * (2 ** (len(binario) - contador - 1))    
    # - contador -> faz o expoente diminuir a cada posição

    contador += 1

else:
    print(decimal)

