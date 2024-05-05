function calcular_potencia() {
    var base = parseInt(document.getElementById("base").value);
    var expoente = parseInt(document.getElementById("expoente").value);
    var resultado = base ** expoente;

    // Esconder a seção de cálculo e mostrar a seção de resultado
    document.getElementById('calcular_potencia').classList.add('hidden');
    document.getElementById('mostrar_resultado').classList.remove('hidden');

    // Exibir o resultado
    document.getElementById('resultado').innerHTML = +resultado ;
}
