console.log("Ajax Externo");

//let url = 'https://en.wikipedia.org/w/api.php?action=query&meta=siteinfo&siprop=namespaces&format=json';





let xhr = new XMLHttpRequest();
xhr.open('get', 'https://es.glosbe.com/es/es/api-/translate?');
xhr.addEventListener('load', ()=>{
    if (xhr.status == 200) {
        let respuesta = JSON.parse(xhr.response);
        console.log(respuesta);
    }
});
xhr.send();
