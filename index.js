let botao = document.getElementById('contador')



botao.addEventListener('click',function() {
    let texto = document.getElementById('textarea').value
    texto = texto.toLowerCase()
    texto = texto.replace(/[^a-z'\s]+/g, "")
    let ArrayPalavras = texto.split(/\s/)
    let letras = {}
    let palavras = {}
    let contador = 0

    for(let i=0; i<texto.length;i++){
        let letra = texto[i]
        contador = letras[letra]
        if(contador===undefined){
            letras [letra] = 1
        }else {
            contador++
            letras[letra]=contador
        }
    }
    for(let i=0; i<ArrayPalavras.length;i++){
        let palavra = ArrayPalavras[i]
        contador = palavras[palavra]
        if(contador===undefined){
            palavras[palavra] = 1
        }else {
            contador++
            palavras[palavra]=contador
        }
    }



    let chavesLetras = Object.keys(letras).sort()
    let chavesPalavras = Object.keys(palavras).sort()



    document.querySelector('#letras').appendChild(document.createElement('table')).classList.add('table1','table')

    document.querySelector('.table1').appendChild(document.createElement('theader'))
    document.querySelector('.table1 > theader').appendChild(document.createElement('tr'))
    let headerTableLetras = document.querySelector('.table1 > theader >tr').appendChild(document.createElement('th'))
    headerTableLetras.innerHTML = "Letras"
    let headerTableLetrasQuantidade = document.querySelector('.table1 > theader >tr').appendChild(document.createElement('th'))
    headerTableLetrasQuantidade.innerHTML = "Quantidade"
    let tbodyLetras = document.querySelector('.table1').appendChild(document.createElement('tbody'))

    for(let row = 1; row <chavesLetras.length; row++){
        tbodyLetras.appendChild(document.createElement('tr'))
        for (let col = 1; col <= 2; col ++){
            if (col%2!==0){
                document.querySelector('.table1 > tbody > :last-child').appendChild(document.createElement('td')).innerHTML= '<strong>'+chavesLetras[row]+'</strong>' 
            }else{
                document.querySelector('.table1 > tbody > :last-child').appendChild(document.createElement('td')).innerHTML=letras[chavesLetras[row]]
            }
        }
    }

    document.querySelector('#palavras').appendChild(document.createElement('table')).classList.add('table2','table')
    document.querySelector('.table2').appendChild(document.createElement('theader'))
    document.querySelector('.table2 > theader').appendChild(document.createElement('tr'))
    let headerTablePalavras = document.querySelector('.table2 > theader > tr').appendChild(document.createElement('th'))
    headerTablePalavras.innerHTML = "Palavras"
    let headerTablePalavrasQuantidade = document.querySelector('.table2 > theader > tr').appendChild(document.createElement('th'))
    headerTablePalavrasQuantidade.innerHTML = "Quantidade"
    let tbodyPalavras = document.querySelector('.table2').appendChild(document.createElement('tbody'))

    for(let row = 1; row <chavesPalavras.length; row++){
        tbodyPalavras.appendChild(document.createElement('tr'))
        for (let col = 1; col <= 2; col ++){
            if (col%2!==0){
                document.querySelector('.table2 > tbody > :last-child').appendChild(document.createElement('td')).innerHTML= '<strong>'+chavesPalavras[row]+'</strong>' 
            }else{
                document.querySelector('.table2 > tbody > :last-child').appendChild(document.createElement('td')).innerHTML=palavras[chavesPalavras[row]]
            }
        }
    }
})

