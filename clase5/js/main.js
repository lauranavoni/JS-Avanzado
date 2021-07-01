let links = document.querySelectorAll('a');
let main = document.querySelector("main");

links.forEach((link)=>{
    link.addEventListener("click",()=>{
        let id = link.id;
        let archivo = id + ".html";
        let xhr = ajax(archivo);
        xhr.addEventListener("load",()=>{
            //main.innerHTML
        if(xhr.status ==200){
            main.innerHTML = xhr.response;
        }
        })
    })
})




function ajax (url, metodo){
    let metodo_http = metodo || "get";

    let xhr = new XMLHttpRequest();

    xhr.open (metodo_http,url);

    xhr.send();

    return xhr;
}
/*
let main = document.querySelector('main');
let nav = document.querySelector('#nav');
*/