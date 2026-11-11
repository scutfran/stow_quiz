/* =========================================================================
   CONTENUTI DEL QUIZ 1:5 STOW
   -------------------------------------------------------------------------
   Si possono modificare anche dall'editor dentro il quiz ("Modifica domande").
   - ok:   indice (0-based) della risposta corretta in "opts". L'ordine delle
           risposte viene mescolato a ogni sessione.
   - tr:   traduzioni in inglese (en), spagnolo (es) e francese (fr). Le risposte
           di "tr" sono nello STESSO ordine di "opts" (la prima corrisponde alla prima).
   - foto: slide senza punteggio, si discute a voce. In "img" metti il nome del file
           (piu' immagini separate da virgola) o il link di condivisione di Google Drive.
   ========================================================================= */
window.CONTENUTI = {
  "categorie": {
    "bin": { "nome": "Bin etiquette", "icona": "📦",
      "tr": { "en": "Bin etiquette", "es": "Etiqueta de bin", "fr": "Étiquette de bin" } },
    "opf": { "nome": "One piece flow", "icona": "🔁",
      "tr": { "en": "One piece flow", "es": "One piece flow", "fr": "One piece flow" } },
    "mps": { "nome": "Masterpack e Set", "icona": "🧩",
      "tr": { "en": "Masterpack and Set", "es": "Masterpack y Set", "fr": "Masterpack et Set" } },
    "sns": { "nome": "Stowed not scanned", "icona": "📡",
      "tr": { "en": "Stowed not scanned", "es": "Stowed not scanned", "fr": "Stowed not scanned" } },
    "uio": { "nome": "UIO (Unexpected Item Overage)", "icona": "🔎",
      "tr": { "en": "UIO (Unexpected Item Overage)", "es": "UIO (Unexpected Item Overage)", "fr": "UIO (Unexpected Item Overage)" } }
  },
  "puntiDomanda": 10,
  "domande": [
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
      "why": "Se l'hai stoccato tu e non entra o sporge, lo estrai, lo riponi nel TSX di origine e da lì lo ristocchi in un bin dove entra, di un altro pod. Forzarlo o lasciarlo sporgere lo rovina e ostacola il prelievo.",
      "tr": {
        "en": {
          "q": "You stowed an item, but it went in with difficulty, doesn't fit completely or sticks out of the bin. What do you do?",
          "opts": [
            "I push it in with my hand until it fits",
            "I remove it, put it back in the TSX I stowed it from and from there I re-stow it in a bin where it fits, in another pod",
            "I leave it where it is and move on, it's already scanned",
            "I put it in the amnesty tote"
          ],
          "why": "If you stowed it and it doesn't fit or sticks out, you take it out, put it back in the original TSX and from there you re-stow it in a bin where it fits, in another pod. Forcing it or leaving it sticking out damages it and gets in the way of picking."
        },
        "es": {
          "q": "Has almacenado un item, pero ha entrado con dificultad, no entra del todo o sobresale del bin. ¿Qué haces?",
          "opts": [
            "Lo empujo con la mano hasta que entra",
            "Lo saco, lo devuelvo al TSX del que lo almacené y desde ahí lo vuelvo a almacenar en un bin donde quepa, de otro pod",
            "Lo dejo donde está y paso al siguiente, ya está escaneado",
            "Lo pongo en el amnesty tote"
          ],
          "why": "Si lo has almacenado tú y no entra o sobresale, lo sacas, lo devuelves al TSX de origen y desde ahí lo vuelves a almacenar en un bin donde quepa, de otro pod. Forzarlo o dejarlo sobresaliendo lo estropea y dificulta el picking."
        },
        "fr": {
          "q": "Vous avez stocké un item, mais il est entré difficilement, n'entre pas complètement ou dépasse du bin. Que faites-vous ?",
          "opts": [
            "Je le pousse avec la main jusqu'à ce qu'il rentre",
            "Je le retire, je le remets dans le TSX d'où je l'avais stocké et, de là, je le restocke dans un bin où il rentre, d'un autre pod",
            "Je le laisse là et je passe au suivant, il est déjà scanné",
            "Je le mets dans l'amnesty tote"
          ],
          "why": "Si c'est vous qui l'avez stocké et qu'il n'entre pas ou dépasse, vous le retirez, le remettez dans le TSX d'origine et, de là, le restockez dans un bin où il rentre, d'un autre pod. Le forcer ou le laisser dépasser l'abîme et gêne le prélèvement."
        }
      }
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
      "why": "A lama di coltello: l'item sta di taglio, occupa meno spazio e il bin resta ordinato. Piatto o in diagonale spreca spazio e finisce per accavallarsi sugli altri.",
      "tr": {
        "en": {
          "q": "In which orientation should you stow the item in the bin?",
          "opts": [
            "Knife-edge (standing on its narrow edge, on its side)",
            "Lying flat, on top of the others",
            "Lying diagonally, to make it fit",
            "There is no exact method, the important thing is to stow it so that it stays stable"
          ],
          "why": "Knife-edge: the item stands on its side, takes up less space and the bin stays tidy. Flat or diagonal wastes space and ends up overlapping the others."
        },
        "es": {
          "q": "¿En qué posición debes almacenar el item en el bin?",
          "opts": [
            "De canto, como una hoja de cuchillo",
            "Apoyado plano, encima de los demás",
            "Tumbado en diagonal, para que entre",
            "No hay un método exacto, lo importante es almacenarlo de forma que quede estable"
          ],
          "why": "De canto, como una hoja de cuchillo: el item queda de lado, ocupa menos espacio y el bin se mantiene ordenado. Plano o en diagonal desperdicia espacio y acaba solapándose con los demás."
        },
        "fr": {
          "q": "Dans quel sens devez-vous stocker l'item dans le bin ?",
          "opts": [
            "Sur la tranche, comme une lame de couteau",
            "Posé à plat, sur les autres",
            "Couché en diagonale, pour le faire rentrer",
            "Il n'y a pas de méthode précise, l'important est de le stocker de façon à ce qu'il reste stable"
          ],
          "why": "Sur la tranche, comme une lame de couteau : l'item est posé de côté, prend moins de place et le bin reste ordonné. À plat ou en diagonale, on perd de la place et il finit par chevaucher les autres."
        }
      }
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
      "why": "Senza bande tese l'item può scivolare fuori dal bin e cadere. In un bin con bande allentate o mancanti non si stocca, anche se un pod non va mandato via senza aver stoccato almeno un pezzo: si sceglie un altro bin.",
      "tr": {
        "en": {
          "q": "The bin bands are loose or missing. What do you do?",
          "opts": [
            "I stow the item, because I must not send a pod away without having stowed at least one item",
            "I don't stow in that bin and choose another one",
            "I stow, but only light items",
            "I push the item further back and move on"
          ],
          "why": "Without taut bands the item can slip out of the bin and fall. You do not stow in a bin with loose or missing bands, even if a pod must not be sent away without at least one item stowed: you choose another bin."
        },
        "es": {
          "q": "Las bandas del bin están sueltas o faltan. ¿Qué haces?",
          "opts": [
            "Almaceno el item, porque no debo enviar un pod sin haber almacenado al menos una pieza",
            "No almaceno en ese bin y elijo otro",
            "Almaceno, pero solo items ligeros",
            "Meto el item más al fondo y sigo"
          ],
          "why": "Sin bandas tensas el item puede deslizarse fuera del bin y caer. En un bin con bandas sueltas o ausentes no se almacena, aunque un pod no deba enviarse sin haber almacenado al menos una pieza: se elige otro bin."
        },
        "fr": {
          "q": "Les bandes du bin sont détendues ou manquantes. Que faites-vous ?",
          "opts": [
            "Je stocke l'item, parce que je ne dois pas renvoyer un pod sans avoir stocké au moins une pièce",
            "Je ne stocke pas dans ce bin et j'en choisis un autre",
            "Je stocke, mais seulement des items légers",
            "Je mets l'item plus au fond et je continue"
          ],
          "why": "Sans bandes tendues, l'item peut glisser hors du bin et tomber. On ne stocke pas dans un bin aux bandes détendues ou manquantes, même si un pod ne doit pas être renvoyé sans au moins une pièce stockée : on choisit un autre bin."
        }
      }
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
      "why": "Non troppi pezzi, mai uno sopra l'altro e mai bin riempiti: così si stocca e si preleva senza confusione e il sistema rileva bene ogni pezzo.",
      "tr": {
        "en": {
          "q": "How many items should you stow in a bin?",
          "opts": [
            "As many as possible, to use the space",
            "Not too many items, without overlapping them and without filling the bin",
            "As many as fit until they fall",
            "At least half of the bin, with several identical items together"
          ],
          "why": "Not too many items, never one on top of another and never full bins: this way you can stow and pick without confusion and the system detects each item properly."
        },
        "es": {
          "q": "¿Cuántas piezas debes almacenar en un bin?",
          "opts": [
            "El máximo posible, para aprovechar el espacio",
            "No demasiadas piezas, sin solaparlas y sin llenar el bin",
            "Todas las que entren hasta que se caigan",
            "Al menos la mitad del bin, con varias piezas iguales juntas"
          ],
          "why": "No demasiadas piezas, nunca una encima de otra y nunca bins llenos: así se almacena y se recoge sin confusión y el sistema detecta bien cada pieza."
        },
        "fr": {
          "q": "Combien de pièces devez-vous stocker dans un bin ?",
          "opts": [
            "Le maximum possible, pour exploiter la place",
            "Pas trop de pièces, sans les chevaucher et sans remplir le bin",
            "Autant qu'il en rentre, jusqu'à ce qu'elles tombent",
            "Au moins la moitié du bin, avec plusieurs pièces identiques ensemble"
          ],
          "why": "Pas trop de pièces, jamais l'une sur l'autre et jamais de bins remplis : ainsi on stocke et on prélève sans confusion et le système détecte bien chaque pièce."
        }
      }
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
      "why": "La luce magenta segnala che in quel bin non si può stoccare. Non va ignorata né aggirata.",
      "tr": {
        "en": {
          "q": "What does the magenta light on a bin mean?",
          "opts": [
            "That it is the right bin to stow in",
            "That you cannot stow in that bin",
            "That the bin is empty",
            "That you must stow faster"
          ],
          "why": "The magenta light signals that you cannot stow in that bin. It must not be ignored or worked around."
        },
        "es": {
          "q": "¿Qué indica la luz magenta en un bin?",
          "opts": [
            "Que es el bin correcto para almacenar",
            "Que en ese bin no puedes almacenar",
            "Que el bin está vacío",
            "Que debes almacenar más rápido"
          ],
          "why": "La luz magenta señala que en ese bin no se puede almacenar. No hay que ignorarla ni esquivarla."
        },
        "fr": {
          "q": "Que signifie la lumière magenta sur un bin ?",
          "opts": [
            "Que c'est le bon bin pour stocker",
            "Que vous ne pouvez pas stocker dans ce bin",
            "Que le bin est vide",
            "Que vous devez stocker plus vite"
          ],
          "why": "La lumière magenta signale qu'on ne peut pas stocker dans ce bin. Il ne faut ni l'ignorer ni la contourner."
        }
      }
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
      "why": "Con due pezzi simili in mano il Cognex può rilevare quello sbagliato mentre stocchi l'altro. Un pezzo per volta: scansioni, stocchi, poi passi al prossimo.",
      "tr": {
        "en": {
          "q": "Why is it important to hold only one item in your hand at a time?",
          "opts": [
            "For ergonomics",
            "To avoid stowing a different but similar item: the Cognex might detect the other item at the moment of stowing",
            "For safety reasons"
          ],
          "why": "With two similar items in your hands the Cognex can detect the wrong one while you stow the other. One item at a time: scan, stow, then move on to the next."
        },
        "es": {
          "q": "¿Por qué es importante tener una sola pieza en la mano a la vez?",
          "opts": [
            "Por ergonomía",
            "Para no almacenar un artículo distinto pero parecido: el Cognex podría detectar la otra pieza en el momento de almacenar",
            "Por razones de seguridad"
          ],
          "why": "Con dos piezas parecidas en la mano, el Cognex puede detectar la equivocada mientras almacenas la otra. Una pieza a la vez: escaneas, almacenas y pasas a la siguiente."
        },
        "fr": {
          "q": "Pourquoi est-il important de ne tenir qu'une seule pièce en main à la fois ?",
          "opts": [
            "Pour l'ergonomie",
            "Pour ne pas stocker un article différent mais semblable : le Cognex pourrait détecter l'autre pièce au moment du stockage",
            "Pour des raisons de sécurité"
          ],
          "why": "Avec deux pièces semblables en main, le Cognex peut détecter la mauvaise pendant que vous stockez l'autre. Une pièce à la fois : vous scannez, vous stockez, puis vous passez à la suivante."
        }
      }
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
      "why": "Masterpack = confezione con più unità identiche. Set = più pezzi venduti insieme come un'unica unità.",
      "tr": {
        "en": {
          "q": "What is the main difference between a masterpack and a set?",
          "opts": [
            "It doesn't matter, they deal with it earlier at Decant",
            "A masterpack is a container of many identical units, a set is a group of pieces sold as a single unit",
            "A masterpack is always smaller than a set",
            "A set is always opened, a masterpack never"
          ],
          "why": "Masterpack = package with several identical units. Set = several pieces sold together as a single unit."
        },
        "es": {
          "q": "¿Cuál es la diferencia principal entre masterpack y set?",
          "opts": [
            "No hace falta conocerla, de eso se ocupan antes en Decant",
            "El masterpack es un contenedor de muchas unidades idénticas, el set es un conjunto de piezas vendido como una sola unidad",
            "El masterpack siempre es más pequeño que el set",
            "El set siempre se abre, el masterpack nunca"
          ],
          "why": "Masterpack = envase con varias unidades idénticas. Set = varias piezas vendidas juntas como una única unidad."
        },
        "fr": {
          "q": "Quelle est la principale différence entre un masterpack et un set ?",
          "opts": [
            "Inutile de la connaître, c'est géré en amont au Decant",
            "Le masterpack est un contenant de nombreuses unités identiques, le set est un ensemble de pièces vendu comme une seule unité",
            "Le masterpack est toujours plus petit que le set",
            "Le set s'ouvre toujours, le masterpack jamais"
          ],
          "why": "Masterpack = emballage contenant plusieurs unités identiques. Set = plusieurs pièces vendues ensemble comme une seule unité."
        }
      }
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
      "why": "Si guardano le info a schermo: titolo, peso e misure. L'etichetta CSX sull'item da sola non basta per decidere.",
      "tr": {
        "en": {
          "q": "How do you tell whether an item is a masterpack or a set?",
          "opts": [
            "If there is a CSX label on the item",
            "From the information on the screen (title, weight and dimensions)",
            "From the colour of the cardboard",
            "If the first code I scan is not accepted, then it is a masterpack"
          ],
          "why": "You look at the information on the screen: title, weight and dimensions. The CSX label on the item alone is not enough to decide."
        },
        "es": {
          "q": "¿Cómo reconoces si un item es un masterpack o un set?",
          "opts": [
            "Si hay una etiqueta CSX en el item",
            "Por la información en pantalla (título, peso y medidas)",
            "Por el color del cartón",
            "Si no me acepta el primer código que escaneo, entonces es un masterpack"
          ],
          "why": "Se mira la información en pantalla: título, peso y medidas. La etiqueta CSX del item por sí sola no basta para decidir."
        },
        "fr": {
          "q": "Comment reconnaissez-vous si un item est un masterpack ou un set ?",
          "opts": [
            "S'il y a une étiquette CSX sur l'item",
            "D'après les infos à l'écran (titre, poids et dimensions)",
            "D'après la couleur du carton",
            "Si le premier code que je scanne n'est pas accepté, alors c'est un masterpack"
          ],
          "why": "On regarde les infos à l'écran : titre, poids et dimensions. L'étiquette CSX sur l'item ne suffit pas à elle seule pour décider."
        }
      }
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
      "why": "Prima di stoccare devi vedere e sentire la conferma della station (segnali acustici e visivi sullo schermo). Senza conferma il pezzo non è scansionato e diventa stowed not scanned.",
      "tr": {
        "en": {
          "q": "How do you make sure the station has detected the item you are stowing?",
          "opts": [
            "If I touch the POD then the item is registered in the bin",
            "I make sure I see and hear the audio and visual signals on the screen",
            "If an image of any item appears on the screen",
            "I touch the bin again"
          ],
          "why": "Before stowing you must see and hear the station's confirmation (audio and visual signals on the screen). Without confirmation the item is not scanned and becomes stowed not scanned."
        },
        "es": {
          "q": "¿Cómo te aseguras de que la station ha detectado la pieza que estás almacenando?",
          "opts": [
            "Si toco el POD, entonces la pieza queda registrada en el bin",
            "Me aseguro de ver y oír las señales acústicas y visuales en la pantalla",
            "Si en la pantalla aparece la imagen de un artículo cualquiera",
            "Vuelvo a tocar el bin"
          ],
          "why": "Antes de almacenar debes ver y oír la confirmación de la station (señales acústicas y visuales en la pantalla). Sin confirmación la pieza no está escaneada y se convierte en stowed not scanned."
        },
        "fr": {
          "q": "Comment vous assurez-vous que la station a bien détecté la pièce que vous stockez ?",
          "opts": [
            "Si je touche le POD, alors la pièce est enregistrée dans le bin",
            "Je m'assure de voir et d'entendre les signaux sonores et visuels à l'écran",
            "Si une image d'un article quelconque apparaît à l'écran",
            "Je touche de nouveau le bin"
          ],
          "why": "Avant de stocker, vous devez voir et entendre la confirmation de la station (signaux sonores et visuels à l'écran). Sans confirmation, la pièce n'est pas scannée et devient stowed not scanned."
        }
      }
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
      "why": "L'item sparisce di fatto dal sistema: ordini non evasi, ricerche inutili ed errori che pesano sul DPMO.",
      "tr": {
        "en": {
          "q": "What is the consequence of an item that is stowed but not scanned?",
          "opts": [
            "None, it is only a formal error",
            "The inventory does not match reality",
            "The scanner freezes"
          ],
          "why": "The item effectively disappears from the system: unfulfilled orders, pointless searches and errors that weigh on the DPMO."
        },
        "es": {
          "q": "¿Qué consecuencia tiene un item almacenado pero no escaneado?",
          "opts": [
            "Ninguna, es solo un error de forma",
            "El inventario no corresponde a la realidad",
            "El escáner se bloquea"
          ],
          "why": "El item desaparece de hecho del sistema: pedidos sin cumplir, búsquedas inútiles y errores que pesan en el DPMO."
        },
        "fr": {
          "q": "Quelle est la conséquence d'un item stocké mais non scanné ?",
          "opts": [
            "Aucune, ce n'est qu'une erreur de forme",
            "L'inventaire ne correspond pas à la réalité",
            "Le scanner se bloque"
          ],
          "why": "L'item disparaît de fait du système : commandes non expédiées, recherches inutiles et erreurs qui pèsent sur le DPMO."
        }
      }
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
      "why": "Con \"Unknown Item\" si controllano tutti e 6 i lati dell'articolo e si scansiona il barcode con la gerarchia più alta indicata a schermo (QR, LPN, X00, B00, ISBN, EAN, UPC). \"No Remaining Barcodes\" si usa solo se dopo il controllo non c'è davvero nessun altro codice.",
      "tr": {
        "en": {
          "q": "If this screen appears, what do you do?",
          "opts": [
            "I do a 6-sided check and scan the barcode with the highest priority",
            "I press \"No Remaining Barcodes\" straight away and move on",
            "I scan the first barcode I find",
            "I stow the item anyway without scanning it"
          ],
          "why": "With \"Unknown Item\" you check all 6 sides of the item and scan the barcode with the highest priority shown on the screen (QR, LPN, X00, B00, ISBN, EAN, UPC). \"No Remaining Barcodes\" is used only if, after the check, there is really no other code."
        },
        "es": {
          "q": "Si te aparece esta pantalla, ¿qué haces?",
          "opts": [
            "Reviso los 6 lados y escaneo el barcode con la prioridad más alta",
            "Pulso enseguida \"No Remaining Barcodes\" y sigo",
            "Escaneo el primer barcode que encuentro",
            "Almaceno el artículo igualmente sin escanearlo"
          ],
          "why": "Con \"Unknown Item\" se revisan los 6 lados del artículo y se escanea el barcode con la prioridad más alta indicada en pantalla (QR, LPN, X00, B00, ISBN, EAN, UPC). \"No Remaining Barcodes\" se usa solo si, tras la revisión, no hay realmente ningún otro código."
        },
        "fr": {
          "q": "Si cet écran apparaît, que faites-vous ?",
          "opts": [
            "Je contrôle les 6 faces et je scanne le code-barres de plus haute priorité",
            "J'appuie tout de suite sur « No Remaining Barcodes » et je continue",
            "Je scanne le premier code-barres que je trouve",
            "Je stocke quand même l'article sans le scanner"
          ],
          "why": "Avec « Unknown Item », on contrôle les 6 faces de l'article et on scanne le code-barres de plus haute priorité indiqué à l'écran (QR, LPN, X00, B00, ISBN, EAN, UPC). « No Remaining Barcodes » ne s'utilise que si, après le contrôle, il n'y a vraiment plus aucun autre code."
        }
      }
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
      "why": "Con \"Confirm Container\" devi indicare da quale contenitore arriva davvero l'articolo: controlli bene il tote da cui l'hai preso e lo confermi (scansione o luce sopra il contenitore) prima di stoccarlo. Confermare quello sbagliato sposta l'errore di inventario su un altro tote.",
      "tr": {
        "en": {
          "q": "If this screen appears, what do you do?",
          "opts": [
            "I carefully check the tote I took the item from and confirm that container before stowing it",
            "I confirm any container among those at the station",
            "I close the message and stow the item",
            "I stow the item and confirm the container afterwards"
          ],
          "why": "With \"Confirm Container\" you must indicate which container the item really comes from: you carefully check the tote you took it from and confirm it (scan or light above the container) before stowing it. Confirming the wrong one moves the inventory error to another tote."
        },
        "es": {
          "q": "Si te aparece esta pantalla, ¿qué haces?",
          "opts": [
            "Reviso bien el tote del que he cogido el artículo y confirmo ese contenedor antes de almacenarlo",
            "Confirmo un contenedor cualquiera de los de la estación",
            "Cierro el mensaje y almaceno el artículo",
            "Almaceno el artículo y confirmo el contenedor después"
          ],
          "why": "Con \"Confirm Container\" debes indicar de qué contenedor viene realmente el artículo: compruebas bien el tote del que lo has cogido y lo confirmas (escaneo o luz sobre el contenedor) antes de almacenarlo. Confirmar el equivocado traslada el error de inventario a otro tote."
        },
        "fr": {
          "q": "Si cet écran apparaît, que faites-vous ?",
          "opts": [
            "Je vérifie bien le tote d'où j'ai pris l'article et je confirme ce conteneur avant de le stocker",
            "Je confirme un conteneur quelconque parmi ceux du poste",
            "Je ferme le message et je stocke l'article",
            "Je stocke l'article et je confirme le conteneur ensuite"
          ],
          "why": "Avec « Confirm Container », vous devez indiquer de quel conteneur vient réellement l'article : vous vérifiez bien le tote d'où vous l'avez pris et vous le confirmez (scan ou lumière au-dessus du conteneur) avant de le stocker. Confirmer le mauvais déplace l'erreur d'inventaire vers un autre tote."
        }
      }
    }
  ],
  "foto": [
    {
      "cat": "bin",
      "titolo": "Esempio di POD stoccato male",
      "img": "pod01.jpg",
      "note": "",
      "tr": { "en": { "titolo": "Example of a badly stowed POD" }, "es": { "titolo": "Ejemplo de POD mal almacenado" }, "fr": { "titolo": "Exemple de POD mal stocké" } }
    },
    {
      "cat": "bin",
      "titolo": "Esempio di POD stoccato male",
      "img": "pod02.jpg, pod03.jpg",
      "note": "",
      "tr": { "en": { "titolo": "Example of a badly stowed POD" }, "es": { "titolo": "Ejemplo de POD mal almacenado" }, "fr": { "titolo": "Exemple de POD mal stocké" } }
    },
    {
      "cat": "bin",
      "titolo": "Cosa può causare un articolo che sporge lasciato nel bin",
      "img": "pod04.jpg",
      "note": "",
      "tr": { "en": { "titolo": "What can an item sticking out and left in the bin cause" }, "es": { "titolo": "Qué puede causar un artículo que sobresale y se deja en el bin" }, "fr": { "titolo": "Que peut causer un article qui dépasse et reste dans le bin" } }
    },
    {
      "cat": "bin",
      "titolo": "Esempio di POD stoccato male",
      "img": "pod05.jpg, pod06.jpg, pod07.jpg",
      "note": "",
      "tr": { "en": { "titolo": "Example of a badly stowed POD" }, "es": { "titolo": "Ejemplo de POD mal almacenado" }, "fr": { "titolo": "Exemple de POD mal stocké" } }
    }
  ]
};
