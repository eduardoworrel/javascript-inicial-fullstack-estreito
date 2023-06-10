var arr = [
    {nome:"",idade:3},
    {nome:"",idade:47},
    {nome:"",idade:92}
]

const somaDasIdades = arr.reduce((acumulado, elemento)=>{
   return acumulado + elemento.idade;
},0)

alert("media: "+ (somaDasIdades / arr.length))
