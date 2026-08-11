function converter() { // Chama a função a partir do html

    const num = document.getElementById("binaryInput").value;

    let decimal = 0;
    let cont = 0;

    while (cont < num.length) {

        if (num[cont] !== "0" && num[cont] !== "1") {
            document.getElementById("resultado").textContent = // textContent -> altera o texto
                "Número inválido!";
            return;
        }

        decimal += Number(num[cont]) * (2 ** (num.length - cont - 1));

        cont++; // cont += 1 
    }

    document.getElementById("resultado").textContent =
        "Resultado: " + decimal;
}
