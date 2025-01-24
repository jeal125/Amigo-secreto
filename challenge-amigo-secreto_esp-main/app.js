// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (nombre === '') {
    alert('Por favor, inserte un nombre.');
    return;
  }

  amigos.push(nombre); // Añadir al array
  input.value = ''; // Limpiar el campo de entrada

  actualizarLista(); // Llamar a la función para actualizar la lista
}

function actualizarLista() {
  const lista = document.getElementById('listaAmigos'); 
  lista.innerHTML = ''; 

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
    if (amigos.length === 0) {
      alert('No hay amigos en la lista para realizar el sorteo.');
      return;
    }
  
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
  
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo seleccionado: <strong>${amigoSorteado}</strong></li>`;
  }

            