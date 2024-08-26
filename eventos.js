function saludar() {
    alert("Hola!");
  }

  function saludo(event) {
    if (!event.target.closest("click")) {
        alert("Hola! soy el div!");
    }
}

const container = document.getElementById("container");
container.addEventListener("click", saludo);

