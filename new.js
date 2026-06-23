let numero = 0



let actualizar = setInterval(()=>{
    console.log(numero)

    if (numero === 10){
        clearInterval(actualizar)
    }
},1000)





for (let i=0; i< 10; i++){
    setTimeout(()=>{
        setTimeout(()=>{numero++},(i+1)*1000)
    },500)
}

