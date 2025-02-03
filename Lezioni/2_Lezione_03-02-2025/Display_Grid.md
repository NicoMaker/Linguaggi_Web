[Vai al file Principale ](Readme.md)

[guida Display Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

# Guida Display Grid

Ecco una guida completa su **CSS Grid** con tutti i comandi principali, formattata in Markdown:

# Guida Completa a CSS Grid

CSS Grid è una potente tecnologia di layout che permette di costruire strutture complesse con facilità. Utilizza un sistema di righe e colonne per disporre gli elementi sulla pagina.

## 1. Creare una Griglia

Per creare una griglia, definisci un contenitore con la proprietà `display: grid`.

```css
.container {
  display: grid;
}


## 2. Definire le Colonne e le Righe

### 2.1 `grid-template-columns`

Definisce le colonne della griglia.

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px 100px;
}
```

### 2.2 `grid-template-rows`

Definisce le righe della griglia.

```css
.container {
  display: grid;
  grid-template-rows: 50px 150px;
}
```

### 2.3 `repeat()`

Consente di ripetere le colonne o le righe più volte.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colonne con larghezza uguale */
}
```

### 2.4 `fr` (Fractional Unit)

Un'unità frazionaria che distribuisce lo spazio disponibile tra le colonne o le righe.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr; /* La seconda colonna occupa il doppio dello spazio della prima */
}
```

### 2.5 `auto`

Permette alle righe o colonne di adattarsi al contenuto.

```css
.container {
  display: grid;
  grid-template-columns: auto 200px;
}
```

## 3. Impostare gli Spazi tra le Celle

### 3.1 `gap`

Definisce lo spazio tra righe e colonne.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  gap: 20px; /* Spazio di 20px tra le celle */
}
```

### 3.2 `row-gap` e `column-gap`

Definiscono separatamente lo spazio tra righe e colonne.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 10px; /* Spazio tra le righe */
  column-gap: 15px; /* Spazio tra le colonne */
}
```

## 4. Posizionare gli Elementi

### 4.1 `grid-column`

Posiziona un elemento su una colonna specifica.

```css
.item {
  grid-column: 1 / 3; /* L'elemento occuperà dalla colonna 1 alla 3 */
}
```

### 4.2 `grid-row`

Posiziona un elemento su una riga specifica.

```css
.item {
  grid-row: 1 / 2; /* L'elemento occuperà dalla riga 1 alla 2 */
}
```

### 4.3 `grid-area`

Una shorthand per `grid-row` e `grid-column`.

```css
.item {
  grid-area: 1 / 1 / 3 / 3; /* Righe da 1 a 3, colonne da 1 a 3 */
}
```

## 5. Allineamento e Giustificazione

### 5.1 `justify-items`

Allinea gli elementi all'interno delle celle (orizzontalmente).

```css
.container {
  display: grid;
  justify-items: center; /* Centra gli elementi orizzontalmente */
}
```

### 5.2 `align-items`

Allinea gli elementi all'interno delle celle (verticalmente).

```css
.container {
  display: grid;
  align-items: center; /* Centra gli elementi verticalmente */
}
```

### 5.3 `justify-content`

Allinea l'intera griglia orizzontalmente.

```css
.container {
  display: grid;
  justify-content: space-between; /* Distribuisce gli elementi con spazi uguali tra di loro */
}
```

### 5.4 `align-content`

Allinea l'intera griglia verticalmente.

```css
.container {
  display: grid;
  align-content: space-around; /* Distribuisce le righe con spazi uguali sopra e sotto */
}
```

## 6. Funzioni Avanzate

### 6.1 `minmax()`

Definisce la dimensione minima e massima di una colonna o riga.

```css
.container {
  display: grid;
  grid-template-columns: minmax(
    100px,
    1fr
  ); /* La colonna avrà una larghezza minima di 100px e massima di 1fr */
}
```

### 6.2 `auto-fill` e `auto-fit`

Utilizzati per creare un numero dinamico di colonne o righe in base al contenuto disponibile.

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}
```

## 7. Esempio Completo

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px;
  gap: 10px;
}

.item {
  background-color: lightblue;
  padding: 20px;
}

.item1 {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.item2 {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.item3 {
  grid-column: 1 / 3;
  grid-row: 2 / 3;
}
```

```html
<div class="container">
  <div class="item item1">Elemento 1</div>
  <div class="item item2">Elemento 2</div>
  <div class="item item3">Elemento 3</div>
</div>
```

## 8. Conclusione

CSS Grid è uno degli strumenti più potenti per il layout delle pagine web, permettendo di creare design complessi in modo semplice e flessibile. Sfruttando le proprietà come `grid-template-columns`, `grid-template-rows`, `gap` e altre, puoi ottenere layout altamente responsivi e ben strutturati.
