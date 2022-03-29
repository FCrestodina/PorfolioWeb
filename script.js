function cambiar_parrafo(){
    document.getElementById("edit-acercade").style.display="block";
    let texto = document.getElementById("text-acercade").innerText;
    console.log(texto);
};

function myFunction2(valor){
    document.getElementById("text-acercade").innerText = valor;
};

function logMessage(message){
    console.log(message + "<br>");
}

//Controla si presiono un enter
let textarea = document.getElementById("edit-acercade")
textearea.addEventListener('keyup', (e) => {
    logMessage(`Key "${e.key}" released [event: keyup]`);
    if (e.key == "Enter"){
        document.getElementById("edit-acercade").style.display="none"
    }
});

//Carga el contenido de un archivo de texto y lo muestra en el parrafo
function showFile(input){
    let file = input.files[0];
    alert(`File name: ${file.name}`);
    alert(`Last Modified: ${file.lastModified}`);

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(){
        console.log(reader.result);
        document.getElementById("text-acercade").innerText=reader.result;
    };
    reader.onerror = function(){
        console.log(reader.error);
    };
}
