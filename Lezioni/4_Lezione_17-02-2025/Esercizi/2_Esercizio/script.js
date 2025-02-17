// Funzione per caricare i dati JSON
fetch('dati.json')
  .then(response => response.json())
  .then(data => {
    const provinces = data.province;

    // Popolazione totale
    let popolazioneTotale = provinces.reduce((sum, province) => sum + province.population, 0);

    // Calcolo delle percentuali
    provinces.forEach(province => {
      province.percentuale = (province.population / popolazioneTotale) * 360;
    });

    // Funzione per creare il grafico a torta
    function createSlice(startAngle, endAngle, color) {
      const radius = 100,
        x = 150,
        y = 150;

      // Calcolare le coordinate per la curvatura dell'arco
      const x1 = x + radius * Math.cos(startAngle),
        y1 = y + radius * Math.sin(startAngle),
        x2 = x + radius * Math.cos(endAngle),
        y2 = y + radius * Math.sin(endAngle);

      // Definisci il path del segmento
      return `M ${x} ${y} L ${x1} ${y1} A ${radius} ${radius} 0 ${endAngle - startAngle > Math.PI ? 1 : 0} 1 ${x2} ${y2} Z`;
    }

    // Aggiungi i segmenti del grafico
    const svg = document.querySelector("svg");
    let startAngle = 0;

    provinces.forEach(province => {
      const endAngle = startAngle + province.percentuale * (Math.PI / 180);
      const path = createSlice(startAngle, endAngle, province.color);
      svg.innerHTML += `<path d="${path}" fill="${province.color}" />`;
      startAngle = endAngle;
    });

    // Ordinare le province in ordine decrescente di popolazione
    provinces.sort((a, b) => b.population - a.population);

    // Popolare la legenda
    const legenda = document.getElementById("legenda");
    legenda.innerHTML = ''; // Pulisci prima la lista esistente

    // Aggiungi il titolo "Legenda" sopra gli elementi
    legenda.innerHTML += `<h3>Legenda</h3>`;

    provinces.forEach(province => {
      legenda.innerHTML += `<p style="color:${province.color}">• ${province.name}: ${province.population.toLocaleString()}</p>`;
    });
  })
  .catch(error => console.error('Errore nel caricare il file JSON:', error));
