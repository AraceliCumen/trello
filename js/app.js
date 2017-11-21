// Nos aseguramos que la página cargue correctamente
window.addEventListener('load',function(){
    // Capturamos el elemento input, que es el que va escuchar el evento click
    var input = document.getElementById('input');
    // Capturamos el elemento que va a contener todos los elementos que se van a crear
    var container = document.getElementById('container');
    // Agregamos el evento click al input, y cuando este escuche el click tiene que cambiar
    input.addEventListener('click',function(){
        // Limpiamos el valor del imput, asignandole el valor de vacio
        input.value = '';
        // obtenemos el elemento  form
        var form = document.getElementById('form');
        // obtenemos el boton
        var button = document.getElementById('button');
        // obtenemos el icono de la x 
        var cross = document.getElementById('cross');
        form.setAttribute('class', 'form-post-click');
        input.setAttribute('class', 'input-pre-click input-post-click');
        button.setAttribute('class', 'button-post-click');
        cross.setAttribute('class', 'fa fa-times');
    });

    // añadimos el evento click al boton
    button.addEventListener('click', function(event) {
        // validamos que el campo no esté vacío
        if (input.value === '') {
          // si el campo está vacío no se agrega nada
        } else {
          // definimos el contenedor de la nueva tabla
          var newBoard = document.createElement('div');
          newBoard.setAttribute('id', 'div');
          newBoard.setAttribute('class', 'form-post-click');
          // definimos el titulo de la tabla
          var nameList = document.createElement('p');
          nameList.innerHTML = input.value;
          nameList.setAttribute('class', 'paragraph name-list');
          // anexamos la tabla al contenedor principal
          allContainer.insertBefore(newBoard, container.lastElementChild);
          // anexando nombre de lista a la tabla
          newBoard.appendChild(nameList);
          // agregamos la opcion de agregar nuevas tareas
          var newTask = document.createElement('div');
          newTask.setAttribute('class', 'paragraph underline');
          newTask.innerHTML = 'Añadir una tarjeta...';
          newBoard.appendChild(newTask);
          // limpiamos el input que ya usamos
          input.value = '';
          // añadimos el evento click 
          newTask.addEventListener('click', function(event) {
            // desaparece la opcion agregar nueva tarea
            newTask.setAttribute('class', 'pre-click');
            // se crea un formulario (form-textarea-button)
            var form = document.createElement('form');
            // form.setAttribute('id', 'form');
            var textArea = document.createElement('textarea');
            textArea.setAttribute('id', 'card');
            textArea.setAttribute('class', 'textarea-card');
            form.appendChild(textArea);
            var saveButton = document.createElement('input');
            saveButton.setAttribute('type', 'submit');
            saveButton.setAttribute('class', 'button-post-click');
            saveButton.setAttribute('value', 'Añadir');
            var contForm = document.createElement('div');
            contForm.appendChild(form);
            contForm.appendChild(saveButton);
            // se anexa el contenedor del formulario al documento
            newBoard.appendChild(contForm);
            // se aplica al text area del formulario que se acaba de crear
            textArea.focus();
            saveButton.addEventListener('click', function(event) {
              // se crea un contenedor con el texto escrito en el formulario anterior
              var task = document.createElement('div');
              task.setAttribute('class', 'paragraph');
              task.setAttribute('id', 'task');
              // validamos que no sea un texto vacío
              if (textArea.value !== '') {
                saveButton.disabled = false;
                task.innerHTML = textArea.value;
                // se anexa la nueva tarea a la tabla
                newBoard.insertBefore(task, newBoard.lastElementChild);
                // se limpia el textarea que usamos
                textArea.value = '';
                // se aplica focus al mismo textarea por si el usuario desea agregar un anueva tarea
                textArea.focus();
              } else {
                // si hay texto vacio no se agrega nada
              }
            });
          });
        }
      });




});