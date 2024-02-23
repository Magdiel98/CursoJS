function mensagem()
{
    var res = document.getElementById("tabuada")
    res.innerHTML = "Digite um numero acima"
}

function tabuada()
{
    var numero = document.getElementById("numero")
    var res = document.getElementById("tabuada")
    res.innerHTML = ""

    var inicio = 0
    var final = 10 
    var contador = 0

    if(numero.value.length == 0)
    {
        alert("Verifique o valor e tente novamente!")
    }
    else
    {
        for(contador = 0; contador <= 10; contador++)
        {
            res.innerHTML +=`${numero.value} X ${contador} = ${Number(numero.value * contador)}\n`
        }
    }
    

}