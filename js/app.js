/*
    Actualmente es muy comun que un sitio web no este 
    distribuido en varias paginas HTML sino que se utiliza
    una sola pagina con varias secciones de contenido.
    En este ejemplo mostramos como hacer una aplicacion 
    web con una sola pagina.

    En el documento js.html se instancian tres botones 
    con el atributo data-page="pageX" este atributo es
    el elemento que permite este tipo de interacciones.
    Pues al seleccionar el boton el data-page tendra el 
    valor de la seccion que se va a mostrar en pantalla.

    Tambien hay varias etiquetas div con el atributo 
    id = "pageX" y class="seccion-div" para identificar
    cada elemento e invocarlo o quitarlo de la vista del
    usuario, cada div tiene anidada funcionalidades que
    se explican mas adelante.

    Esto sucede porque cada boton cuenta con un eventListener()
    El boton que sea seleccionado invoca la funcion showPage(page)
    con el data-set como atributo. 
    El data-set al ser igual que el id de cada div permite la interaccion.
    Si se da el caso en que data-set y id son diferentes, el programa no 
    tendria una funcionalidad correcta.

    Mediante la funcion showPage(page) se realiza el cambio
    del seccion-div que se muestra de la siguiente manera:
    
    document.querySelectorAll('.seccion-div').forEach(elem => {
        elem.style.display = 'none';
    })

    esta instruccion de codigo hace que el elemento que se muestra
    se oculte, gracias a la instruccion style.display = 'none';

    document.querySelector(`#${page}`).style.display = 'block';

    esta instruccion aplica lo contrario, pues mediante el querySelector()
    invocamos el div del id correspondiente y se hace vicible 
    por el style.display = block.

    Lo mas interesante de este ejemplo es la posibilidad de observar la 
    manipulacion del DOM en tiempo real.

*/

document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('button').forEach(button =>{
        button.onclick = function(){
            showPage(this.dataset.page);
        }
    })
})

function showPage(page){
    document.querySelectorAll('.seccion-div').forEach(elem => {
        elem.style.display = 'none';
    })
    document.querySelector(`#${page}`).style.display = 'block';
}

// TO-DO list

/* 
    Acontinuacion se explica el ejemplo de como generar una 
    lista de tareas sencilla con JS y HTML

    En el HTML esta la instancia de una lista ul con el id = tasks
    y un formulario con dos inputs, un input de tipo text y el otro
    de tipo submit para el boton.

    Se agrega un eventListener al DOM, en este eventListener esta
    una funcion anidada que es la que se encarga de leer la entrada
    de texto y de agregar los elementos a la lista. 

    Se declaran dos constantes, el submit y newTask, que se seleccionan
    mediante el querySelector() y el id de cada input.

    El boton submit esta deshabilitado por defecto, este se habilita con 
    el evento onkeyup() que arroja un arrow function, el cual valida
    si hay texto en el input.
    
    Si hay un evento onsubmit en el form (se hizo click al boton 
    previamente habilitado) instanciamos la constante task cuyo 
    valor va a ser el texto del input (newTask).

    Se crea el elemento de la lista li y se agrega al HTML mediante:
        li.innerHTML = task
    Se hace un console.log(task) para ver en la consola la tarea
    y se le hace un append a la lista mediante:
        document.querySelector('#tasks').append(li);

    Se procede a limpiar el campo de texto y el boton se deshabilita 
    y se hace un return para detener la funcion, esta sera invocada 
    la proxima vez que se agregue texto en el input. 
*/

// Wait for the page to load
document.addEventListener('DOMContentLoaded',function(){
         
    // Select the submit button and input to be used later
    const submit = document.querySelector('#submit');
    const newTask = document.querySelector('#task');

    // Disable submit button by default:
    submit.disabled = true;

    // Listen for input to be typed into the input field
    newTask.onkeyup = () => {
        if (newTask.value.length > 0){
            submit.disabled = false;
        }
        else{
            submit.disabled = true;
        }
    }

    // Listen for submission of form
    document.querySelector('form').onsubmit = () =>{

        // Find the task the user just submitted
        const task = newTask.value;
        console.log(task);

        // Create a list item for the new task and add the task to it
        const li = document.createElement('LI');
        li.innerHTML = task;

        // Add new element to our unordered list:
        document.querySelector('#tasks').append(li);
        
        // Clear out input field:
        newTask.value = '';

        // Disable the submit button again:
        submit.disabled = true;

        // Stop form from submitting
        return false;
    }
});

// Change color

/*
    A continuacion se explica como cambiar el color del texto 
    En el HTML hay un parrafo p con el id="hello" y un texto descriptivo.
    Mediante un elemento select que contiene opciones con los colores
    se realiza el cambio de color.
    Se agrega un eventListener al DOM y se instancia una funcion, 
    con el querySelector seleccionamos dicho select y agregamos el evento
    onchange. Este evento invoca una funcion que va a cambiar el color del texto
    con el codigo:
        document.querySelector('#hello').style.color = this.value;
    el this.value hace referencia al valor de la opcion seleccionada en el select.
*/

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('select').onchange = function(){
        document.querySelector('#hello').style.color = this.value;
    }
});

// Validar formulario

/*
    Validar un formulario con JS
    La constante datos es un objeto de JS que contiene los atributos
    que se quieren validar.

    En el HTML esta la instancia de un formulario con los inputs:
    nombre, email y mensaje cada uno con un id con el mismo nombre. 
    A su vez un input de tipo submit (el boton)

    En JS seleccionamos estos elementos mediante el querySelector()
    y se les agrega un eventListener que invoca la funcion leerTexto.

    Esta funcion obtiene los valores de los inputs y los asgina al 
    objeto datos.

    Se procede a hacer la validacion: 
    En este caso es una validacion sencilla.
    El formulario tiene un eventListener, con una funcion anonima

    evento.preventDefault(); 

    Esta linea indica al DOM que no se debe realizar la accion por defecto
    al presionar el input submit. (que es limpiar los campos y recargar la pagina)

    Se realiza una destructuracion al objeto datos y se valida uno por uno 
    que estos no esten vacios.

    En caso de estar vacios se invoca la funcion mostrarAlerta que se encarga 
    de mostrar la alerta de error.
    Si los campos tienen texto se muestra la alerta correcto.

    El metodo mostrarAlerta() agrega un parrafo al DOM con el mensaje
    ademas cuenta con un setTimeOut() que funciona como un sleep() 
    pasado el tiempo la alerta desaparece.
*/

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input',leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);

// Evento Submit
formulario.addEventListener('submit',function(evento){
    evento.preventDefault();
    // Validar formulario
    const {nombre,email,mensaje} = datos;
    if (nombre == '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios',true);
        return;
    }
    // Enviado correctamente
    mostrarAlerta('Enviado correctamente');
})

function leerTexto(evento){
    datos[evento.target.id] = evento.target.value;
    console.log(datos); // test is ok...
}

// Mostrar alerta en pantalla
function mostrarAlerta(mensaje,error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    // Alerta desaparece despues de 3 segundos
    setTimeout(()=>{
        alerta.remove();
    },3000);
}