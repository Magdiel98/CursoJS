let vet = []

function finalizar()
{
    let res = document.getElementById("res")
    let soma = 0
    let maior = 0
    let menor = 0
    let media = 0 

    for(let c = 0; c < vet.length; c++)
    {
        if(c == 0)
        {
            maior = vet[c]
            menor = vet[c]
        }
        else
        {
            if(vet[c] > maior)
            {
                maior = vet[c]
            }
            if(vet[c] < menor)
            {
                menor = vet[c]
            }
        }

        soma += vet[c]

    }

    media = soma/vet.length

    res.innerHTML = `Ao todo, temos ${vet.length} números cadastrados.<br>`
    res.innerHTML+=`O maior valor informado foi ${maior}.<br>`
    res.innerHTML+= `O menor valor informado foi ${menor}.<br>`
    res.innerHTML+=`Somando todos os valores, temos ${soma}.<br>`
    res.innerHTML+=`A média dos valores digitados é ${media}.`

    

}

function adicionar()
{
    let numero = document.getElementById("numero")
    let res = document.getElementById("res")

    res.innerHTML = ""

         
    if(numero.value < 1 || numero.value > 100 || numero.value.length == 0 || vet.indexOf(Number(numero.value)) != -1)
    {
        alert("Valor inválido ou já encontrado na lista")
    }
    else
    {
        let n = Number(numero.value)

        let an = document.getElementById("analisador")
        let item = document.createElement('option')
        
        item.text = `Valor ${n} foi adicionado.`
        an.appendChild(item)

        vet.push(n)
    }
}

