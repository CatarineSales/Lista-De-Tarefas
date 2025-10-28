let BotaoAdd = document.getElementById('botao');
let Input = document.getElementById('input');
let Tarefas = document.getElementById('tarefas');
let marcado = false;

    BotaoAdd.addEventListener('click', function() {
        if ( Input.value != ''){
            var  tarefa = document.createElement('p');
            Tarefas.appendChild(tarefa);
            tarefa.innerText = '- ' + Input.value;
            Input.value = '';
            tarefa.addEventListener('click', function() {
                if (marcado == false) {
                    tarefa.style.textDecoration = 'Line-through'
                    marcado = true;
                }

                else {
                    tarefa.style.textDecoration = '';
                    marcado = false;
                }
            })
            tarefa.addEventListener( 'dblclick', function() {
                Tarefas.removeChild(tarefa)
            })
        }
    })