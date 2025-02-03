function createElements() {
  const container = document.getElementById("container"),
    elementi = document.getElementById("elementCount").value || 80; // Usa il valore dell'input o 80 di default

  // Pulisce il contenitore prima di aggiungere nuovi elementi
  container.innerHTML = "";

  // Crea gli elementi in base al numero indicato
  for (let i = 1; i <= elementi; i++) {
    const div = document.createElement("div");
    div.classList.add("item");
    div.textContent = `Elemento ${i}`;
    container.appendChild(div);
  }
}
