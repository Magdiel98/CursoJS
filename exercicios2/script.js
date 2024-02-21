function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    

    msg.innerHTML = `Agora são ${hora} horas.` 
    if (hora >= 0 && hora < 12)
    {
        //BOM DIA 
        img.src = 'Dia.png'
        document.body.style.background = "#0082da"
    }
    else if(hora >= 12 && hora <= 18)
    {
        //BOA TARDE
        img.src = 'Tarde.png'
        document.body.style.background = "#d68536"
    }
    else
    {
        //BOA NOITE
        img.src = 'Noite.png'
        document.body.style.background = "#151e3f"
    }
}

