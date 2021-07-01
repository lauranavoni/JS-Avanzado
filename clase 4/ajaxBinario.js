console.log("Ajax Binario");

function cargarImagen(url){
    // instacio el objeto
    let xhr = new XMLHttpRequest();
    // configuro el objeto
    xhr.open("get",url);
    
    xhr.responseType = "blob";
    xhr.addEventListener("load",()=>{
        if(xhr.status==200) {
            let imagenBLOB = xhr.response;
            console.log(imagenBLOB);
            let url = URL.createObjectURL(imagenBLOB);
            console.log(url);

            let img = document.createElement("img");
            img.src=url;
            document.body.appendChild(img);

            document.querySelector("img").src=url;
        }
    })

    //envio el objeto
    xhr.send();
}

let form = document.querySelector("form");
form.addEventListener("submit",e =>{
    e.preventDefault();
    let archivo = form[0].files[0].name;
    console.dir(archivo);
    
})