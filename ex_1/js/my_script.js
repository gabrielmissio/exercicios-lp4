function add_number(){
    var input = document.getElementById("input_field").value;
    var teste = document.querySelectorAll("#ul_numbers li").length
    if(!checkNumber(input)){
        alert("You must enter an integer between 1 and 60")
        return false
    }
    if(input < 1 || input > 60){
        alert("You must enter an integer between 1 and 60")
        return false
    }
    if(teste > 5){
        alert("Limite de numeros atingidos (6/6)")
        return false
    }

    appendNumber(input)
}

function checkNumber(valor) {
    var regra = /^[0-9]+$/
    return valor.match(regra) 
}

function appendNumber(input_number) {
    var teste = document.querySelectorAll("#ul_numbers li")
    var is_valid = true;
    teste.forEach(function(entry) {
        if(input_number == entry.textContent){
            alert(input_number + " already been chosen");
            is_valid = false;
        }
    });
    
    if(is_valid){ 
        document.getElementById("input_control").innerHTML = "(" + (teste.length + 1) + "/6)";
        var node = document.createElement("LI");
        var textnode = document.createTextNode(input_number);
        node.appendChild(textnode);
        document.getElementById("ul_numbers").appendChild(node);
    }
     
}

function getResult() {
    var teste = document.querySelectorAll("#ul_numbers li")
    if(teste != 6){
        alert("Voce deve apostar em 6 numeros antes de conferir o resultado")
        return false
    }
    aposta = []
    teste.forEach(function(entry) {
        aposta.push(entry.textContent)
    });
    var num_acertos = 0
    var acertos = []
    numeros_sorteados = shuffle()
    alert(numeros_sorteados)
    for(i = 0; i < 6; i++){
       for(j = 0; j < 6; j++){
           if(aposta[i] == numeros_sorteados[j]){
               num_acertos = num_acertos + 1
               acertos.push(aposta[i])
           }
       }
    }
    
    var result = document.getElementById("result").innerHTML = "Numeros sorteados: " + numeros_sorteados + "| Numero de acertos: " + num_acertos +" | Acertos: " + acertos;

}

function verificarAposta(num1, num2) {
    return num1 == num2;
}

function shuffle() {
    var o = [];
    for(i = 1; i <= 60; i++){
        o.push(i)
    }
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    var result = []
    for(i = 0; i < 6; i++){
        result.push(o[i])
    }
    return result;
};