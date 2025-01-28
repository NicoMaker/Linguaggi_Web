[Vai al file Principale ](Readme.md)

# **Display Flex**

# **Guida a Flexbox**

Flexbox (o Flexible Box Layout) è un sistema di layout CSS progettato per allineare e distribuire gli elementi in modo semplice ed efficace. È particolarmente utile per creare layout flessibili e reattivi.

## **Concetti di base**

- **Contenitore flessibile (Flex Container):** È l'elemento che contiene gli elementi flessibili. Si ottiene impostando `display: flex;` o `display: inline-flex;`.
- **Elementi flessibili (Flex Items):** Gli elementi figli diretti del contenitore flessibile.

---

## **Proprietà principali di Flexbox**

### **1. Contenitore Flex (Flex Container)**

| **Proprietà**     | **Descrizione**                                                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `display: flex;`  | Trasforma l'elemento in un contenitore flessibile. Gli elementi figli diventano "flex items".                                                |
| `flex-direction`  | Definisce la direzione principale (asse principale). Valori: `row` (default), `row-reverse`, `column`, `column-reverse`.                     |
| `justify-content` | Allinea gli elementi lungo l'asse principale. Valori: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.   |
| `align-items`     | Allinea gli elementi lungo l'asse trasversale (perpendicolare). Valori: `stretch` (default), `flex-start`, `flex-end`, `center`, `baseline`. |
| `align-content`   | Gestisce lo spazio tra le righe su più linee. Valori: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`.        |
| `flex-wrap`       | Gestisce il "wrap" degli elementi. Valori: `nowrap` (default), `wrap`, `wrap-reverse`.                                                       |

---

### **2. Elementi Flex (Flex Items)**

| **Proprietà** | **Descrizione**                                                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `order`       | Cambia l'ordine di visualizzazione degli elementi. Valore predefinito: `0`.                                                               |
| `flex-grow`   | Determina quanto spazio extra (asse principale) l'elemento deve occupare. Valore predefinito: `0`.                                        |
| `flex-shrink` | Controlla quanto un elemento può ridursi. Valore predefinito: `1`.                                                                        |
| `flex-basis`  | Specifica la dimensione iniziale dell'elemento lungo l'asse principale. Può essere definito in px, %, ecc.                                |
| `align-self`  | Sovrascrive `align-items` per un elemento specifico. Valori: `auto` (default), `flex-start`, `flex-end`, `center`, `baseline`, `stretch`. |

---

## **Esempio Pratico con Immagini**

### **Codice CSS di base**

```css
.container {
  display: flex;
  flex-direction: row; /* Allinea gli elementi in una riga */
  justify-content: space-around; /* Spazia gli elementi uniformemente */
  align-items: center; /* Centra gli elementi verticalmente */
}

.item {
  flex-grow: 1; /* Gli elementi si espandono equamente */
  flex-basis: 100px; /* Dimensione iniziale di 100px */
  margin: 10px;
  padding: 20px;
  background-color: lightblue;
  text-align: center;
}
```

### **HTML**

```html
<div class="container">
  <div class="item">Elemento 1</div>
  <div class="item">Elemento 2</div>
  <div class="item">Elemento 3</div>
</div>
```

---

### **Output Visivo**

Una disposizione di tre elementi in una riga con spazi uguali tra loro:


---

## **Direzione degli assi**

### **Asse Principale e Asse Trasversale**

- **Asse principale (Main Axis):** Definito da `flex-direction` (es. `row` è orizzontale, `column` è verticale).
- **Asse trasversale (Cross Axis):** È perpendicolare all'asse principale.

---

### **Esempio con `flex-wrap`**

Se gli elementi non si adattano in una riga:

```css
.container {
  display: flex;
  flex-wrap: wrap; /* Gli elementi vanno su più righe */
  justify-content: center;
}
```

---

## **Conclusione**

Flexbox è uno strumento potente e versatile per creare layout moderni e responsivi. Sperimenta con le proprietà sopra per scoprire la flessibilità del sistema!
