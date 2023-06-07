export function buscaImagens(elemento){
   
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
    .then(function(e){return e.json()})
    .then(data => {
        for(let foto of data.photos){
            const url = foto.img_src;

            const img = document.createElement("img");
            img.style.width = "100px"
            img.src = url

            elemento.append(img)
        }
    })
}

