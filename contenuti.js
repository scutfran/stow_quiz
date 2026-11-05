/* =========================================================================
   CONTENUTI DEL QUIZ 1:5 STOW
   -------------------------------------------------------------------------
   Si possono modificare anche dall'editor dentro il quiz ("Modifica domande").
   - ok:   indice (0-based) della risposta corretta in "opts". L'ordine delle
           risposte viene mescolato a ogni sessione.
   - foto: slide senza punteggio, si discute a voce. In "img" metti il link di
           condivisione di Google Drive ("Chiunque abbia il link") o l'ID file.
   ========================================================================= */
window.CONTENUTI = {
  "categorie": {
    "bin": {
      "nome": "Bin etiquette",
      "icona": "📦"
    },
    "opf": {
      "nome": "One piece flow",
      "icona": "🔁"
    },
    "mps": {
      "nome": "Masterpack e Set",
      "icona": "🧩"
    },
    "sns": {
      "nome": "Stowed not scanned",
      "icona": "📡"
    },
    "uio": {
      "nome": "UIO (Unexpected Item Overage)",
      "icona": "🔎"
    }
  },
  "puntiDomanda": 10,
  "domande": [
    {
      "cat": "bin",
      "q": "Hai appena stoccato un item. Cosa controlli velocemente prima di passare al prossimo?",
      "opts": [
        "Che sia dentro il bin e non sporga oltre il bordo",
        "Che il bin sia il più pieno possibile",
        "Che l'item sia in cima alla pila così si vede",
        "Niente, non perdo tempo e vado al prossimo articolo"
      ],
      "ok": 0,
      "why": "L'item deve stare interamente nel bin, senza sporgere né coprire il bordo o l'elastico: altrimenti cade, si danneggia o blocca il bin sotto/sopra."
    },
    {
      "cat": "bin",
      "q": "Hai stoccato un item, ma è entrato a fatica, non entra del tutto o sporge dal bin. Cosa fai?",
      "opts": [
        "Lo spingo con la mano finché sta dentro",
        "Lo rimuovo, lo rimetto nel TSX da cui l'avevo stoccato e da lì lo ristocco in un bin dove entra, di un altro pod",
        "Lo lascio dov'è e passo al prossimo, tanto è già scansionato",
        "Lo posiziono nell'amnesty tote"
      ],
      "ok": 1,
      "why": "Se l'hai stoccato tu e non entra o sporge, lo estrai, lo riponi nel TSX di origine e da lì lo ristocchi in un bin dove entra, di un altro pod. Forzarlo o lasciarlo sporgere lo rovina e ostacola il prelievo."
    },
    {
      "cat": "bin",
      "q": "In che verso devi stoccare l'item nel bin?",
      "opts": [
        "A lama di coltello",
        "Appoggiato piatto, sopra agli altri",
        "Sdraiato in diagonale, per farlo entrare",
        "Non c'è una metodologia esatta, l'importante è stoccarlo in modo che rimanga stabile"
      ],
      "ok": 0,
      "why": "A lama di coltello: l'item sta di taglio, occupa meno spazio e il bin resta ordinato. Piatto o in diagonale spreca spazio e finisce per accavallarsi sugli altri."
    },
    {
      "cat": "bin",
      "q": "Le bande del bin sono loose (allentate) o mancanti. Cosa fai?",
      "opts": [
        "Stocco l'item, perché non devo mandare via un pod senza aver stoccato almeno un pezzo",
        "Non stocco in quel bin e ne scelgo un altro",
        "Stocco, ma solo item leggeri",
        "Metto l'item più in fondo e vado avanti"
      ],
      "ok": 1,
      "why": "Senza bande tese l'item può scivolare fuori dal bin e cadere. In un bin con bande allentate o mancanti non si stocca, anche se un pod non va mandato via senza aver stoccato almeno un pezzo: si sceglie un altro bin."
    },
    {
      "cat": "bin",
      "q": "Quanti pezzi devi stoccare in un bin?",
      "opts": [
        "Il massimo possibile, per sfruttare lo spazio",
        "Non troppi pezzi, senza accavallarli e senza riempire il bin",
        "Quanti ne entrano finché non cadono",
        "Almeno metà del bin, con più pezzi uguali insieme"
      ],
      "ok": 1,
      "why": "Non troppi pezzi, mai uno sopra l'altro e mai bin riempiti: così si stocca e si preleva senza confusione e il sistema rileva bene ogni pezzo."
    },
    {
      "cat": "bin",
      "q": "Cosa indica la luce magenta su un bin?",
      "opts": [
        "Che il bin è quello giusto in cui stoccare",
        "Che in quel bin non puoi stoccare",
        "Che il bin è vuoto",
        "Che devi stoccare più in fretta"
      ],
      "ok": 1,
      "why": "La luce magenta segnala che in quel bin non si può stoccare. Non va ignorata né aggirata."
    },
    {
      "cat": "bin",
      "q": "Quale può essere un motivo per cui un bin si accende di luce magenta?",
      "opts": [
        "Il bin è troppo grande o troppo piccolo per l'item, c'è incompatibilità o rischio per la stabilità del pod",
        "Il bin è vuoto da troppo tempo",
        "Il barcode dell'item è difficile da leggere",
        "Stai stoccando troppo velocemente"
      ],
      "ok": 0,
      "why": "Le cause sono varie: dimensione del bin non adatta all'item (troppo grande o troppo piccolo), hazmat insieme a food, oppure item pesanti che comprometterebbero la stabilità del pod. Per questo la magenta va rispettata."
    },
    {
      "cat": "bin",
      "q": "Dove vanno stoccati gli item pesanti, ingombranti e liquidi?",
      "opts": [
        "Nei bin alti, per lasciare spazio sotto",
        "Nei bin bassi/adatti al peso e alle dimensioni",
        "Ovunque ci sia posto",
        "Sopra gli item leggeri per tenerli fermi"
      ],
      "ok": 1,
      "why": "Il peso va in basso e in bin adeguati: sicurezza (ergonomia, cadute) e stabilità del bin."
    },
    {
      "cat": "opf",
      "q": "Perché è importante tenere un solo pezzo in mano per volta?",
      "opts": [
        "Per ergonomia",
        "Per non stoccare un articolo diverso ma simile: il Cognex potrebbe rilevare l'altro pezzo al momento della stoccata",
        "Per ragioni di sicurezza"
      ],
      "ok": 1,
      "why": "Con due pezzi simili in mano il Cognex può rilevare quello sbagliato mentre stocchi l'altro. Un pezzo per volta: scansioni, stocchi, poi passi al prossimo."
    },
    {
      "cat": "mps",
      "q": "Qual è la differenza principale tra masterpack e set?",
      "opts": [
        "Non serve conoscerla, se ne occupano prima a Decant",
        "Il masterpack è un contenitore di molte unità identiche, il set è un insieme di pezzi venduto come una singola unità",
        "Il masterpack è sempre più piccolo del set",
        "Il set si apre sempre, il masterpack mai"
      ],
      "ok": 1,
      "why": "Masterpack = confezione con più unità identiche. Set = più pezzi venduti insieme come un'unica unità."
    },
    {
      "cat": "mps",
      "q": "Come riconosci se un item è un masterpack o un set?",
      "opts": [
        "Se è presente un'etichetta CSX sull'item",
        "Dalle info a schermo (titolo, peso e misure)",
        "Dal colore del cartone",
        "Se non mi prende il primo codice che scansiono allora è un masterpack"
      ],
      "ok": 1,
      "why": "Si guardano le info a schermo: titolo, peso e misure. L'etichetta CSX sull'item da sola non basta per decidere."
    },
    {
      "cat": "mps",
      "q": "Come gestisci un masterpack e come gestisci un set?",
      "opts": [
        "Masterpack: lo apro e stocco le unità una per una. Set: lo stocco tutto insieme",
        "Masterpack: lo stocco intero. Set: lo separo e stocco i pezzi uno per uno",
        "Li droppo a prescindere al Problem Solve",
        "Li apro entrambi e stocco i pezzi uno per uno"
      ],
      "ok": 0,
      "why": "Il masterpack va aperto e stoccato un'unità alla volta. Il set va stoccato tutto insieme, senza separare i pezzi."
    },
    {
      "cat": "sns",
      "q": "Cosa significa \"stowed not scanned\"?",
      "opts": [
        "Item scansionato ma non stoccato",
        "Item messo fisicamente nel bin senza completare la scansione",
        "Item stoccato nel bin sbagliato ma scansionato",
        "Bin vuoto scansionato"
      ],
      "ok": 1,
      "why": "L'item è nel bin ma per il sistema non esiste lì: il picker non può prelevarlo e l'inventario risulta sbagliato."
    },
    {
      "cat": "sns",
      "q": "Come ti assicuri che la station abbia rilevato il pezzo che stai stoccando?",
      "opts": [
        "Se tocco il POD allora il pezzo è registrato dentro il bin",
        "Mi assicuro di vedere e sentire i segnali acustici e visivi sullo schermo",
        "Se a schermo compare un'immagine di un articolo qualunque",
        "Tocco di nuovo il bin"
      ],
      "ok": 1,
      "why": "Prima di stoccare devi vedere e sentire la conferma della station (segnali acustici e visivi sullo schermo). Senza conferma il pezzo non è scansionato e diventa stowed not scanned."
    },
    {
      "cat": "sns",
      "q": "Quale conseguenza ha un item stoccato ma non scansionato?",
      "opts": [
        "Nessuna, è solo un errore di forma",
        "L'inventario non corrisponde alla realtà",
        "Lo scanner si blocca"
      ],
      "ok": 1,
      "why": "L'item sparisce di fatto dal sistema: ordini non evasi, ricerche inutili ed errori che pesano sul DPMO."
    },
    {
      "cat": "uio",
      "q": "Se ti compare questa schermata cosa fai?",
      "img": "uio_unknown_item.jpg",
      "opts": [
        "Faccio un controllo dei 6 lati e scansiono il barcode con la gerarchia più alta",
        "Premo subito \"No Remaining Barcodes\" e vado avanti",
        "Scansiono il primo barcode che trovo",
        "Stocco comunque l'articolo senza scansionarlo"
      ],
      "ok": 0,
      "why": "Con \"Unknown Item\" si controllano tutti e 6 i lati dell'articolo e si scansiona il barcode con la gerarchia più alta indicata a schermo (QR, LPN, X00, B00, ISBN, EAN, UPC). \"No Remaining Barcodes\" si usa solo se dopo il controllo non c'è davvero nessun altro codice."
    },
    {
      "cat": "uio",
      "q": "Se ti compare questa schermata cosa fai?",
      "img": "uio_confirm_container.jpg",
      "opts": [
        "Controllo bene il tote da cui ho preso l'articolo e confermo quel contenitore prima di stoccarlo",
        "Confermo un contenitore qualsiasi tra quelli della postazione",
        "Chiudo il messaggio e stocco l'articolo",
        "Stocco l'articolo e confermo il contenitore dopo"
      ],
      "ok": 0,
      "why": "Con \"Confirm Container\" devi indicare da quale contenitore arriva davvero l'articolo: controlli bene il tote da cui l'hai preso e lo confermi (scansione o luce sopra il contenitore) prima di stoccarlo. Confermare quello sbagliato sposta l'errore di inventario su un altro tote."
    }
  ],
  "foto": [
    {
      "cat": "bin",
      "titolo": "Esempio di POD stoccato male",
      "img": "pod01.jpg",
      "note": ""
    },
    {
      "cat": "bin",
      "titolo": "Esempio di POD stoccato male",
      "img": "pod02.jpg",
      "note": ""
    },
    {
      "cat": "opf",
      "titolo": "Esempio di POD stoccato male",
      "img": "pod03.jpg",
      "note": ""
    },
    {
      "cat": "bin",
      "titolo": "Cosa può causare un articolo che sporge lasciato nel bin",
      "img": "pod04.jpg",
      "note": ""
    },
    {
      "cat": "bin",
      "titolo": "Esempio di POD stoccato male",
      "img": "pod05.jpg",
      "note": ""
    },
    {
      "cat": "bin",
      "titolo": "Esempio di POD stoccato male",
      "img": "pod06.jpg, pod07.jpg",
      "note": ""
    }
  ]
};
