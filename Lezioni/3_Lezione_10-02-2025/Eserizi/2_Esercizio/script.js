document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita il refresh della pagina

  let nome = document.getElementById("nome").value.trim(),
    email = document.getElementById("email").value.trim(),
    messaggio = document.getElementById("messaggio").value.trim();

  if (nome === "" || email === "" || messaggio === "") {
    alert("Per favore, compila tutti i campi!");
    return;
  }

  // Definisci il destinatario e il contenuto dell'email
  let destinatario = "denis.mascherin.24@stud.itsaltoadriatico.it",
    oggetto = encodeURIComponent("Nuova richiesta dal modulo"),
    corpo = encodeURIComponent(
      `Nome: ${nome}\nEmail: ${email}\nMessaggio: ${messaggio}`
    );

  // Crea il link mailto e aprilo
  window.location.href = `mailto:${destinatario}?subject=${oggetto}&body=${corpo}`;
});
