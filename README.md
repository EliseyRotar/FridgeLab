# ⚡ Frigorifero domestico e consumi elettrici

**Progetto per Matematica e TPS** - Modello interattivo sui consumi energetici

Un piccolo modello per capire quanto incide lasciare la porta aperta del frigo sui consumi elettrici e sulle emissioni di CO₂.

---

## 📋 Contenuti del Progetto

### File Principali

- **`index.html`** - Pagina web interattiva con frigorifero 3D animato
- **`script.js`** - Logica JavaScript per l'interattività e i calcoli
- **`style.css`** - Stili CSS per il design e le animazioni 3D
- **`README.md`** - Questa documentazione

### Caratteristiche

- 🧊 **Frigorifero 3D interattivo** - Cliccabile con animazioni realistiche
- 📊 **Grafico dinamico** - Visualizzazione in tempo reale del modello matematico
- 🌡️ **Indicatori visivi** - Temperatura e consumo che si aggiornano automaticamente
- ☁️ **Effetti ambientali** - Particelle di aria fredda e nuvole CO₂ animate
- 📱 **Design responsive** - Funziona su desktop, tablet e smartphone
- 🎮 **Completamente interattivo** - Nessun server richiesto, funziona offline

---

## 🚀 Come Usare

### Avvio Rapido

1. **Aprire `index.html` nel browser**
   - Fare doppio click sul file
   - Oppure trascinarlo in una finestra del browser
   - La pagina si carica automaticamente con tutte le animazioni

### Interazioni Disponibili

#### 🧊 Frigorifero 3D

- **Cliccare sul frigorifero** per aprire/chiudere la porta
- Osservare le **particelle di aria fredda** che escono quando aperto
- Il **LED verde** pulsa per indicare il funzionamento
- Il frigo si **apre automaticamente** ogni tanto per mostrare l'effetto

#### 📊 Calcoli Personalizzati

1. Inserire un valore tra **0 e 90 minuti** nel campo di input
2. Cliccare **"Calcola"** o premere **Invio**
3. Il grafico evidenzia il punto con un **pallino rosso**
4. Appaiono le **statistiche dettagliate** con icone colorate
5. Usare **"Reset"** per pulire e ricominciare

#### 📈 Indicatori in Tempo Reale

- **Termometro** - Mostra la temperatura attuale del frigorifero
- **Barra energia** - Si riempie in base al consumo con gradiente colorato
- **Display consumo** - Valore numerico aggiornato automaticamente
- **Nuvole CO₂** - Rappresentazione visiva dell'impatto ambientale

---

## 📊 Modello Matematico

```
f(x) = 0.90 + 0.006x + 0.00012x² - 0.000001x³

Dove:
  x = minuti totali di porta aperta al giorno
  f(x) = consumo energetico in kWh/giorno

Dominio: x ∈ [0, 90] minuti/giorno
```

### Interpretazione dei Coefficienti

- **0.90** → Consumo base a porta chiusa (frigorifero normale)
- **0.006x** → Aumento lineare per ogni minuto di apertura
- **0.00012x²** → Effetto cumulativo degli scambi d'aria
- **-0.000001x³** → Effetto di saturazione termica (rallentamento della crescita)

### Comportamento della Funzione

- **Crescita iniziale rapida** - I primi minuti hanno impatto significativo
- **Accelerazione** - L'effetto si amplifica con l'aumentare del tempo
- **Saturazione** - Oltre i 60-70 minuti la crescita rallenta

---

## 📈 Dati di Esempio

| Scenario         | Apertura/giorno | Consumo/giorno | Δ Consumo | CO₂/giorno | CO₂/anno |
| ---------------- | --------------- | -------------- | --------- | ---------- | -------- |
| **Ottimale**     | 5 min           | 0.903 kWh      | +0.3%     | 0.431 kg   | 157 kg   |
| **Normale**      | 30 min          | 1.086 kWh      | +20.7%    | 0.518 kg   | 189 kg   |
| **Poco attento** | 60 min          | 1.272 kWh      | +41.3%    | 0.607 kg   | 221 kg   |
| **Scorretto**    | 90 min          | 1.428 kWh      | +58.7%    | 0.681 kg   | 249 kg   |

**Nota:** Valori CO₂ calcolati con fattore 0.477 kg CO₂/kWh (media italiana 2023)

---

## 🎮 Funzionalità Tecniche

### Animazioni CSS 3D

- **Frigorifero fluttuante** con rotazione leggera
- **Porta apribile** con trasformazione 3D realistica
- **Particelle animate** che simulano l'aria fredda
- **Effetti di luce** con pulsazione del LED
- **Transizioni fluide** su tutti gli elementi interattivi

### JavaScript Interattivo

- **Calcoli matematici** in tempo reale
- **Grafico Chart.js** con coordinate continue (non discrete)
- **Gestione eventi** per click e input da tastiera
- **Aggiornamento dinamico** di tutti gli indicatori visivi
- **Animazioni automatiche** per dimostrare gli effetti

### Design Responsive

- **Layout adattivo** per tutti i dispositivi
- **Breakpoint ottimizzati** per mobile e tablet
- **Elementi scalabili** che mantengono le proporzioni
- **Touch-friendly** per dispositivi mobili

---

## 🌍 Impatto Ambientale e Sostenibilità

### Collegamento agli Obiettivi Agenda 2030

#### Obiettivo 7: Energia Pulita e Accessibile

- L'**efficienza energetica domestica** riduce la domanda complessiva
- Permette maggior accesso a **energie rinnovabili**
- Contribuisce alla **sostenibilità economica** della transizione energetica

#### Obiettivo 13: Lotta Contro il Cambiamento Climatico

- Ogni **kg di CO₂ non emesso** è importante per il clima
- I piccoli comportamenti moltiplicati per **milioni di persone** hanno impatto globale
- La **consapevolezza ambientale** promuove azioni concrete quotidiane

### Calcoli di Impatto

- **Differenza tra uso attento e scorretto**: ~92 kg CO₂/anno per famiglia
- **Su 25 milioni di famiglie italiane**: potenziale risparmio di 2.3 milioni di tonnellate CO₂/anno
- **Equivalente a**: togliere circa 500.000 auto dalla circolazione per un anno

---

## 💡 Suggerimenti Pratici

### Prima di Aprire il Frigorifero

- ✅ Decidere esattamente cosa prendere
- ✅ Preparare lo spazio dove mettere gli alimenti
- ✅ Aprire una sola volta per più persone
- ✅ Organizzare il cibo in modo logico e accessibile

### Manutenzione e Impostazioni

- 🌡️ Mantenere la temperatura a **3-5°C** (frigorifero) e **-18°C** (congelatore)
- 🔧 Controllare che la **guarnizione** della porta sia integra
- 🧹 Pulire periodicamente le **serpentine posteriori**
- 📍 Posizionare il frigorifero **lontano da fonti di calore**

### Abitudini Consapevoli

- 🚫 Non inserire **cibo ancora caldo**
- 🌬️ Non ostruire la **circolazione dell'aria** interna
- 📦 Non usare il frigorifero come **deposito** di oggetti non alimentari
- ⏰ Ridurre il **tempo di apertura** al minimo necessario

---

## 🔧 Personalizzazione

### Modificare il Modello Matematico

Per usare coefficienti diversi, modificare la funzione in `script.js`:

```javascript
function consumoGiornaliero(x) {
  return 0.9 + 0.006 * x + 0.00012 * Math.pow(x, 2) - 0.000001 * Math.pow(x, 3);
}
```

### Cambiare il Fattore CO₂

Il fattore 0.477 kg CO₂/kWh rappresenta la media italiana. Per altri paesi:

```javascript
const CO2_PER_KWH = 0.477; // Modificare questo valore
```

- **Germania/Norvegia**: 0.380 (più rinnovabili)
- **Polonia/India**: 0.600 (più carbone)
- **Francia**: 0.060 (nucleare)

### Personalizzare le Animazioni

Nel file `style.css` è possibile modificare:

- Velocità delle animazioni (proprietà `animation-duration`)
- Colori del frigorifero e degli effetti
- Dimensioni e posizionamento degli elementi

---

## 📱 Compatibilità

### Browser Supportati

- ✅ **Chrome** 60+ (consigliato)
- ✅ **Firefox** 55+
- ✅ **Safari** 12+
- ✅ **Edge** 79+
- ⚠️ **Internet Explorer** non supportato

### Dispositivi

- 💻 **Desktop** - Esperienza completa con tutte le animazioni
- 📱 **Mobile** - Layout ottimizzato, animazioni ridotte per performance
- 📟 **Tablet** - Interfaccia adattata per touch screen

### Requisiti

- **JavaScript abilitato** (necessario per l'interattività)
- **Connessione internet** (per caricare Chart.js e i font)
- **Browser moderno** con supporto CSS3 e HTML5

---

## 🐛 Risoluzione Problemi

### La pagina non si carica

- ✅ Verificare che il file sia in formato `.html`
- ✅ Provare con browser diversi
- ✅ Controllare che JavaScript sia abilitato
- ✅ Verificare la connessione internet per le librerie esterne

### Il frigorifero non si anima

- ✅ Ricaricare la pagina (F5 o Ctrl+R)
- ✅ Aspettare qualche secondo per il caricamento completo
- ✅ Il frigorifero si apre automaticamente ogni 12 secondi

### I calcoli non funzionano

- ✅ Inserire solo **numeri tra 0 e 90**
- ✅ Usare il punto (.) per i decimali, non la virgola
- ✅ Premere **Invio** o cliccare **"Calcola"**
- ✅ Usare **"Reset"** per pulire e ricominciare

### Il grafico non appare

- ✅ Controllare la connessione internet (Chart.js si carica da CDN)
- ✅ Disabilitare eventuali ad-blocker
- ✅ Provare in modalità incognito/privata

---

## 📚 Utilizzo Didattico

### Per gli Studenti

Questo progetto permette di:

- 📊 **Visualizzare** concretamente un modello matematico
- 🧮 **Sperimentare** con valori diversi e vedere l'impatto
- 🌍 **Collegare** la matematica a problemi ambientali reali
- 💡 **Sviluppare** consapevolezza sui consumi domestici

### Per i Docenti

Il progetto può essere utilizzato per:

- 📈 Insegnare **funzioni polinomiali** e il loro comportamento
- 🔬 Mostrare **applicazioni pratiche** della matematica
- 🌱 Sensibilizzare su **sostenibilità** e **Agenda 2030**
- 💻 Introdurre elementi di **programmazione** e **web design**

### Attività Suggerite

1. **Analisi matematica** - Studio della funzione, derivate, punti di flesso
2. **Raccolta dati** - Misurare i propri tempi di apertura del frigorifero
3. **Confronto scenari** - Calcolare l'impatto di diverse abitudini familiari
4. **Progetto ambientale** - Proporre azioni concrete per ridurre i consumi
5. **Presentazione** - Usare il modello per sensibilizzare altri studenti

---

## 📄 Licenza e Crediti

### Licenza

Questo progetto è rilasciato sotto licenza **MIT** - libero per uso educativo e personale.

### Tecnologie Utilizzate

- **HTML5** - Struttura della pagina
- **CSS3** - Stili e animazioni 3D
- **JavaScript ES6** - Logica e interattività
- **Chart.js** - Libreria per i grafici
- **Bootstrap 5** - Framework CSS per il layout responsive
- **Google Fonts** - Font Inter per la tipografia

### Sviluppo

- **Progetto**: Modello matematico per l'educazione ambientale
- **Ambito**: Matematica e TPS (Tecnologie e Progettazione di Sistemi)
- **Target**: Studenti delle scuole superiori
- **Obiettivo**: Sensibilizzazione sui consumi energetici domestici

---

## 🎯 Obiettivi di Apprendimento

Al termine dell'utilizzo di questo strumento, gli studenti dovrebbero essere in grado di:

### Competenze Matematiche

- ✅ Interpretare e analizzare una **funzione polinomiale di terzo grado**
- ✅ Comprendere il significato dei **coefficienti** nel modello
- ✅ Leggere e interpretare **grafici** di funzioni reali
- ✅ Calcolare **variazioni percentuali** e confrontare scenari

### Competenze Tecnologiche

- ✅ Utilizzare **strumenti digitali interattivi** per l'apprendimento
- ✅ Comprendere il ruolo di **HTML, CSS e JavaScript** nel web
- ✅ Interpretare **visualizzazioni di dati** dinamiche

### Competenze Ambientali

- ✅ Collegare **comportamenti quotidiani** a impatti ambientali
- ✅ Quantificare le **emissioni di CO₂** da consumi elettrici
- ✅ Proporre **azioni concrete** per la sostenibilità
- ✅ Comprendere il legame con gli **Obiettivi Agenda 2030**

---

**🌱 Buon lavoro e buona sperimentazione!**

_Ricorda: ogni piccolo gesto conta per un futuro più sostenibile._
