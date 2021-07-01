function ajax (url, metodo){
    let metodo_http = metodo || "get";

    let xhr = new XMLHttpRequest();

    let urlSinCache= url +'?' + Date.now();
    console.log(urlSinCache);
    
    xhr.open (metodo_http,urlSinCache);

    xhr.send();

    return xhr;
}


let links = document.querySelectorAll('a');

let main = document.querySelector("main");

let nav =document.querySelector("#nav");
/*
links.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault()
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
*/

function cargarPagina(pagina, ref, cb){
    let archivo = pagina;
    let xhr = ajax (archivo);
    xhr.addEventListener('load',() => {
        if (xhr.status ==200){
            ref.innerHTML = xhr.response;
        }
            
    })
}
cargarPagina("inicio.html", main);


/*
cargarPagina("navbar.html", nav, ()=>{
    let links = document.querySelectorAll("a");
    links.forEach(link =>{
        link.addEventListener("click", e =>{
        e.preventDefault();
        let id =link.id;
        let archivo = id + ".html";
        cargarPagina(archivo, main, vista =>{
            //console.log(vista);
            history.pushState({
                template :vista
            },"", id);
        });
        })
    })
})

window.addEventListener("popstate", e =>{
    console.log(e.status.template)
    if(e.state.template){
        main.innerHTML = e.state.template
    }
    else{
        let archivo = location.pathname;
        console.log(archivo);
        cargarPagina(archivo, main, pagina =>{
            history.pushState({
                template: pagina
            }, "", id);
        })
    }
})

*/


/*
let paginainicio =ajax("inicio.html");
paginainicio.addEventListener("load",()=>{
    if(paginainicio.status == 200){
        main.innerHTML = paginainicio.response;
    }   
})

let barranavegacion = ajax ('navbar.html');
barranavegacion.addEventListener("load",()=>{
    if(barranavegacion.status == 200){
        main.innerHTML = barranavegacion.response;
    }   
})
*/

/*
let main = document.querySelector('main');
let nav = document.querySelector('#nav');
*/