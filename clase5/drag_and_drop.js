//drag and drop
console.log ("drag and Drop");

function cargarimagen(url) {
    let img = document.querySelector("img");
    let progreso = document.querySelector("progress");
    let etiqueta = document.querySelector("span");

    imagen.src="";
    progreso.value =0;
    etiqueta.innerText = "0 %"

    let xhr = new XMLHttpRequest ();
    let urlSinCache = url + '?' + Date.now;
    console.log(urlSinCache);
    xhr.open("GET",urlSinCache)

    xhr.responseType = "blob";
    xhr.addEventListener("load", ()=>{
        if (xhr.status ==200){
            let imagenBlob = xhr.response;
            console.log(imagenBlob);
            let url = URL.createObjectURL(imagenBlob);
            console.log(url)

            let img = document.createElement("img");
            img.src=url;
            document.body.appendChild(img);

            imagen.src = url;
        }
    })

    xhr.addEventListener("progress",(e)=>{
        console.log(e);
        if (e.lengthComputable){
            let porc = parseInt(e.loaded*100/ e.total);
            console.log(porc + "%");
            progreso.value =porc;
            etiqueta.innerText = porc + "%";
        }
    })
    xhr.send();
}

let input = document.querySelector("#texto");
input.addEventListener("change",()=>{
    let archivo = input.files[0].name;
    console.log(archivo);

    cargarImagen(archivo);
})

let drop = document.querySelector("#drop");
drop.addEventListener("dragenter", e=>{
    e.preventDefault();
    console.log("adentro de la drop zone");
})

drop.addEventListener("dragleave", e=>{
    e.preventDefault();
    console.log("afuera de la drop zone");  
})

drop.addEventListener("dragover", e=>{
    e.preventDefault();
    console.log("encima de la drop zone"); 
})

drop.addEventListener("drop",e=>{
    e.preventDefault();  
    console.log("soltamos el documento/elemento");
    console.log(e);
    let archivo= e.dataTransfer.files[0].name;
    console.log(archivo);

    cargarimagen(archivo);
})

