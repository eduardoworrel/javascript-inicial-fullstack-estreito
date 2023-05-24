function mudaCorDeFundoDaPagina(cor)
{
    document.body.style.backgroundColor = cor;
}
function carregaPagina(func)
{
    let cor = "blue";

    func(cor);
}

carregaPagina(mudaCorDeFundoDaPagina);

//////
 

const oi = function(m1,m2){
    return 1;
}
if(oi() != 1){
    
}


//-----------------------------

function oi(){
    alert("oi");
}
document.body.onclick = oi;
document.body.addEventListener("click", oi);

