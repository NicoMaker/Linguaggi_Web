[Vai al file Principale ](../../Readme.md)

# Lezione 27-01-2025

## Esercizi

- [1 Esercizio](Esercizi/1_Esercizio/)

## TAG

Elemento princale HTML -> possono essere disposti ad albero di elementi figli

```html
<a> -> tag apertura </a> -> tag chiusura

<head>
  -> intestazione della pagine nelle pagine web
</head>

<body>
  -> corpo della pagina
</body>

<title>-> titolo della pagina</title>

puoi andare fino ad un massimo di 6 livelli

<h1>-> titolo della pagina </h1> + grande
<h2>-> Sottotitolo della pagina </h2>
<h3>-> sottoparagrafo </h3>
<h4>-> sottoparagrafo </h4>
<h5>-> sottoparagrafo </h5>
<h6>-> sottoparagrafo </h6> + piccolo


<p> -> paragrafo </p>


<span> -> tag di contenitore di testo in riga serve solo per le classi e per raggiungere il testo</span>
<div> -> tag di contenitore di testo, manda a capo il testo e puoi raggiundere con delle classi dove quele testo ha le caratteristiche di quella classe</div>

lista ordinata
<ol>
    <li></li>
    <li></li>
    <li></li>
</ol>

lista non ordinata
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>

<!-- Lista ordinata che parte da 10 invece che da 1 -->
<ol start="10">
<li>Elemento 1</li>
<li>Elemento 2</li>
<li>Elemento 3</li>
</ol>

<!-- Lista ordinata che parte da 10 invece con le lettere-->
<ol start="10 type="A">
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
</ol>

<!-- Lista non ordinata con i pallini-->
<ul style="list-style-type: circle;">
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
</ul>

<!-- Lista non ordinata con i quadrati-->
<ul style="list-style-type: square;">
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
</ul>


<!-- Tabblella -->
<table>
    <tr>
    <th>Colonna 1</th>
    <th>Colonna 2</th>
    <th>Colonna 3</th>
    </tr>
    <tr>
    <td>Elemento 1</td>
    <td>Elemento 2</td>
    <td>Elemento 3</td>
    </tr>
    <tr>
    <td>Elemento 1</td>
    <td>Elemento 2</td>
    <td>Elemento 3</td>
    </tr>
</table>

```

al suo interno si possono conrenire diverse tag come padri e figli

## Elementi Inline o Block

- Inline -> occupa spazio che serve -> span -> no dimensioni
- Block -> occupa intera riga -> div -> si dimensioni

## Tabella ASCII

prima forma di comunicazione storica per avere i dati con tutti i caratteri disponibili (128 caratteri 2^7 caratteri)

![Tabella Ascci](https://th.bing.com/th/id/R.bcf26098d65dc039b385210134f05a20?rik=qchBuc5OMxZJsQ&riu=http%3a%2f%2fwww.pierolucarelli.it%2fcodiciascii%2fasciistd.gif&ehk=VJvBQBStaQ6mRj%2fqup1C1TRbWLW0Fv2NhC1xKOy3zd4%3d&risl=&pid=ImgRaw&r=0)

## Tabella ASCII Estesa

diventa con 256 caratteri -> in base al posto dove sono (2^8 caratteri)

![Tabella Ascii Estesa](https://ilmondoinformatico.com/wp-content/uploads/2019/02/tabella-caratteri-Ascii.jpg)

## Unicode

Unicode è uno standard di codifica dei caratteri che consente di rappresentare e scambiare testo in modo coerente e universale, indipendentemente dalla lingua o dalla piattaforma utilizzata.

In particolare, Unicode:

- Assegna un codice univoco a ogni carattere, simbolo ed emoji
- Consente di rappresentare più di 140.000 caratteri diversi
- È utilizzato da molti sistemi operativi, browser web e applicazioni
- Permette di scambiare testo tra diverse lingue e culture

In questo modo, Unicode consente di:

- Utilizzare caratteri speciali e simboli in modo coerente
- Rappresentare testo in diverse lingue e scritture
- Scambiare dati testuali tra diverse piattaforme e applicazioni

![Unicode](https://articles-images.sftcdn.net/wp-content/uploads/sites/4/2014/10/unicode-header.png)

Unicode ha 143.000 caratterri e 2^16 caratteri (65536) per rappresentare tutti i caratteri disponibili
