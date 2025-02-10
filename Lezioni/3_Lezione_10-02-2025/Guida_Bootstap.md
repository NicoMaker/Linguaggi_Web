[Vai al file Principale ](Readme.md)

[documentazione ufficiale di Bootstrap](https://getbootstrap.com).

# Guida a Bootstrap

Bootstrap è un framework CSS open source che consente di sviluppare applicazioni web responsive e moderne con facilità. Questo README fornisce una panoramica dei principali comandi e componenti di Bootstrap, incluse le griglie, i layout e i componenti più utilizzati.

## Installazione

Per utilizzare Bootstrap nel tuo progetto, puoi optare per una delle seguenti modalità di installazione:

### Utilizzo tramite CDN

Aggiungi il seguente codice nel tag `<head>` del tuo file HTML per includere Bootstrap:

```html
<!-- CSS di Bootstrap -->
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">

<!-- JS di Bootstrap -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>
```

### Utilizzo tramite Download

Scarica i file CSS e JS di Bootstrap e includili nel tuo progetto. Puoi ottenere i file ufficiali [qui](https://getbootstrap.com).

## Griglia (Grid System)

Il sistema di griglia di Bootstrap si basa su 12 colonne e consente di creare layout fluidi e reattivi. Ecco un esempio di utilizzo della griglia:

```html
<div class="container">
  <div class="row">
    <div class="col-4">
      Colonna 1
    </div>
    <div class="col-4">
      Colonna 2
    </div>
    <div class="col-4">
      Colonna 3
    </div>
  </div>
</div>
```

### Classi di Layout e Spaziatura

- **`.container`**: un contenitore con larghezza fissa.
- **`.container-fluid`**: un contenitore che occupa tutta la larghezza disponibile.
- **`.row`**: una riga che contiene le colonne.
- **`.col-{breakpoint}-{size}`**: definisce la larghezza delle colonne in base al breakpoint (es. `col-sm-6`).
- **`.mx-{size}`**: margini orizzontali (es. `mx-3`).
- **`.my-{size}`**: margini verticali (es. `my-3`).
- **`.p-{size}`**: padding (es. `p-3`).

## Componenti di Bootstrap

### Navbar (Barra di navigazione)

La navbar di Bootstrap è un componente predefinito per creare barre di navigazione reattive. Ecco un esempio di utilizzo:

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Logo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
  </div>
</nav>
```

### Card (Schede)

Le card di Bootstrap sono un altro componente utile per visualizzare contenuti in modo organizzato:

```html
<div class="card" style="width: 18rem;">
  <img src="image.jpg" class="card-img-top" alt="Image">
  <div class="card-body">
    <h5 class="card-title">Titolo della Card</h5>
    <p class="card-text">Descrizione breve della card.</p>
    <a href="#" class="btn btn-primary">Vai al contenuto</a>
  </div>
</div>
```

### Bottone (Button)

I bottoni in Bootstrap sono stilizzati in vari modi per adattarsi al design del tuo sito:

```html
<button type="button" class="btn btn-primary">Bottone Primario</button>
<button type="button" class="btn btn-secondary">Bottone Secondario</button>
```

## Conclusioni

Bootstrap è uno strumento potente che semplifica la progettazione di interfacce reattive e moderne. La sua facilità d'uso, combinata con una vasta gamma di componenti e utilità, lo rende una scelta popolare per sviluppatori web di ogni livello.

