function contar()
{
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var mensagem = document.getElementById("msg")
    var resultado = document.getElementById("res")
    resultado.innerHTML = ''

    var start = Number(inicio.value)
    var end = Number(fim.value)
    var step = Number(passo.value)

    var contador = 0

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 || Number(passo.value) == 0)
    {
        alert('Verifique os dados e tente novamente!')
    }
    else if(Number(inicio.value) == Number(fim.value))
    {
        alert('Valores de inicio e fim devem ser diferentes!')
    }
    else
    {
      if(Number(inicio.value) < Number(fim.value))
      {
        if(Number(inicio.value) + Number(passo.value) > Number(fim.value))
        {
            alert('A soma entre inicio e passo ultrapassa o valor do fim!')
        }
        else
        {
            mensagem.innerHTML = "Contando: "
            for(contador = start; contador <= end; contador += step)
            {
                resultado.innerHTML += `${contador}👉`
            }
        }
      }       
      else
      {
        if(Number(inicio.value) - Number(passo.value) < Number(fim.value))
        {
            alert('A subtração entre inicio e passo fica menor do que o valor do fim!')
        }
        else
        {
            for(contador = start; contador >= end; contador -= step)
            {
                resultado.innerHTML += `${contador}👉`
            }
            mensagem.innerHTML = "Contando: "
        }
      }
    }
    resultado.innerHTML += `🏁`
    
}