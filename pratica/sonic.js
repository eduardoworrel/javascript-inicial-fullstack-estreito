 // sessão de predefinições
 const imgParado = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c74c1723-aac9-4b51-bb7e-e40e5337e740/ddply9f-970edf22-5e0a-44b7-9abe-dadfcf2764ff.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3NGMxNzIzLWFhYzktNGI1MS1iYjdlLWU0MGU1MzM3ZTc0MFwvZGRwbHk5Zi05NzBlZGYyMi01ZTBhLTQ0YjctOWFiZS1kYWRmY2YyNzY0ZmYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7IWCCIqix3FTRi1OPuN9kSQb3Fl1yub-nTQ152pN_nM"
 const imgMovimento = "https://64.media.tumblr.com/09ec50605a2eeff6bbde7da1cda639df/tumblr_oxt2alh00S1w1kerio1_540.gif"
 let eixoX = 2
 let largura = 75
 const maxEixoX = 83;
 const minEixoX = 1;
 let movimento = 1  //1 = parado porém indo pra direita, 2 = indo 
                    //3 parado vindo 4 = vindo


 // armazena elementos que serão manipulado no futuro em variaveis
 const img = document.getElementById("img")
 const btnIniciar = document.getElementById("iniciar")


 img.src = imgParado
 img.style.marginLeft = eixoX + "%"
 img.style.width = largura + "px"
 
 // sessão de definição de eventos
 btnIniciar.onclick = iniciaAplicacao


 ///sessão de funções
 function iniciaAplicacao()
 {
     //modificar a imagem
     img.src = imgMovimento
     largura = 180
     img.style.width = largura + "px"
     movimento = 2
     // 1 - dar inicio ao movimento
     // 2 - reconhecer que o movimento deve ser interrompido
     iniciaMovimento()
 }
 //1 = parado porém indo pra direita, 2 = indo 
//3 parado vindo, 4 = vindo
 function iniciaMovimento(){
     setInterval(function(){

        if(movimento != 4 && movimento != 3 && eixoX >= maxEixoX){
            //atingiu o limite da direita
            movimento = 3

            img.src = imgParado
            img.width = "75px"
            img.style.transform = "scaleX(-1)"

            setTimeout(function(){
                img.src = imgMovimento
                largura = 180
                img.style.width = largura + "px"
                movimento = 4;
            },3000)
        }
        if(movimento != 2 && movimento != 1 && eixoX <= minEixoX){
            movimento = 1
            img.src = imgParado
            img.width = "75px"
            img.style.transform = "scaleX(1)"
            setTimeout(function(){
                movimento = 2;
                img.src = imgMovimento
                largura = 180
                img.style.width = largura + "px"
            },3000)
        }
        if(movimento == 2){
            eixoX += 3
            img.style.marginLeft = eixoX + "%"
        }

        if(movimento == 4){
            eixoX -= 3
            img.style.marginLeft = eixoX + "%"
        }

    },100)
        
 }
