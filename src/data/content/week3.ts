import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week3Reading: ReadingExercise = {
  id: 'r-w3',
  weekId: 3,
  title: 'Minun arkipäiväni',
  level: 'A1',
  textFi: `Minä herään joka aamu kello puoli seitsemän. Ensin menen suihkuun ja syön aamiaista. Aamiaisella syön leipää ja juon kahvia. Sitten lähden töihin kello kahdeksan.

Työpäivä alkaa kello puoli yhdeksän ja loppuu kello neljä. Työn jälkeen käyn kaupassa, jos tarvitsen ruokaa. Illalla syön päivällistä perheeni kanssa kello kuusi. Me syömme yhdessä joka päivä, se on meille tärkeää.

Iltaisin katson vähän televisiota tai luen kirjaa. Joskus soitan äidilleni puhelimessa. Menen nukkumaan yleensä kello yksitoista. Viikonloppuisin herään myöhemmin, ehkä kello yhdeksän, koska silloin ei tarvitse mennä töihin.`,
  questions: [
    { id: 'q1', question: 'Mihin aikaan puhuja herää arkipäivinä?', options: ['Kello kuusi', 'Kello puoli seitsemän', 'Kello seitsemän', 'Kello kahdeksan'], correctIndex: 1 },
    { id: 'q2', question: 'Mitä puhuja syö aamiaisella?', options: ['Puuroa', 'Leipää', 'Munia', 'Ei mitään'], correctIndex: 1 },
    { id: 'q3', question: 'Mihin aikaan työpäivä loppuu?', options: ['Kello kolme', 'Kello puoli neljä', 'Kello neljä', 'Kello viisi'], correctIndex: 2 },
    { id: 'q4', question: 'Milloin perhe syö päivällistä yhdessä?', options: ['Kello viisi', 'Kello kuusi', 'Kello seitsemän', 'Ei koskaan yhdessä'], correctIndex: 1 },
    {
      id: 'q5',
      question: 'Miksi puhuja herää myöhemmin viikonloppuisin?',
      options: ['Koska hän on väsynyt', 'Koska hänen ei tarvitse mennä töihin', 'Koska hän nukkuu huonosti', 'Koska kello on rikki'],
      correctIndex: 1,
    },
  ],
}

export const week3Listening: ListeningExercise = {
  id: 'l-w3',
  weekId: 3,
  title: 'Milloin tavataan?',
  level: 'A1',
  scriptFi: `Emma: Hei Ville! Voisimmeko tavata huomenna?
Ville: Moi! Joo, se sopii. Mihin aikaan sinulle sopisi?
Emma: Minä herään aikaisin, kello kuusi, koska menen töihin. Työpäivä loppuu kello neljä.
Ville: Selvä. Minä olen vapaa illalla kello viiden jälkeen.
Emma: Sopisiko meille tavata kahvilassa kello kuusi illalla?
Ville: Kello kuusi on hyvä minulle. Mutta älä myöhästy, minulla on toinen tapaaminen kello puoli kahdeksan.
Emma: Ei hätää, tulen ajoissa. Nähdään huomenna kello kuusi!
Ville: Selvä, nähdään!`,
  questions: [
    { id: 'q1', question: 'Mihin aikaan Emma herää arkipäivisin?', options: ['Kello viisi', 'Kello kuusi', 'Kello seitsemän', 'Kello kahdeksan'], correctIndex: 1 },
    { id: 'q2', question: 'Milloin Ville on vapaa illalla?', options: ['Kello neljän jälkeen', 'Kello viiden jälkeen', 'Kello kuuden jälkeen', 'Hän ei ole koskaan vapaa'], correctIndex: 1 },
    { id: 'q3', question: 'Mihin aikaan he sopivat tapaavansa?', options: ['Kello viisi', 'Kello puoli kuusi', 'Kello kuusi', 'Kello seitsemän'], correctIndex: 2 },
    { id: 'q4', question: 'Miksi Villellä on kiire illalla?', options: ['Hän menee nukkumaan aikaisin', 'Hänellä on toinen tapaaminen kello puoli kahdeksan', 'Hän menee töihin', 'Hän on myöhässä nyt'], correctIndex: 1 },
  ],
}

export const week3Writing: WritingPrompt = {
  id: 'w-w3',
  weekId: 3,
  title: 'Kuvaile tavallista arkipäivääsi',
  level: 'A1',
  instructions:
    'Kirjoita, miltä sinun tavallinen arkipäiväsi näyttää aamusta iltaan. Mainitse ainakin viisi eri kellonaikaa (esim. "Herään kello seitsemän") ja käytä preesensissä olevia verbejä (herään, syön, menen, nukun).',
  minWords: 40,
  maxWords: 90,
  timeMinutes: 15,
  rubric: [
    'Mainitsit ainakin viisi kellonaikaa.',
    'Käytit preesensiä oikein (herään, syön, menen, nukun).',
    'Kerroit, mitä teet aamulla, päivällä ja illalla.',
    'Käytit ajan ilmauksia (esim. aamulla, illalla, sitten, sen jälkeen).',
    'Teksti etenee loogisessa järjestyksessä.',
  ],
  modelAnswer:
    'Herään joka aamu kello puoli seitsemän. Aamulla syön aamiaista ja juon teetä. Kello kahdeksan lähden töihin bussilla. Työpäivä alkaa kello yhdeksän ja loppuu kello viisi. Illalla syön päivällistä ja kello seitsemän harjoittelen suomea vähän aikaa. Nukkumaan menen yleensä kello puoli yksitoista, koska seuraava päivä alkaa taas aikaisin.',
}

export const week3Speaking: SpeakingPrompt = {
  id: 's-w3',
  weekId: 3,
  title: 'Kerro päivärytmistäsi',
  level: 'A1',
  instructions:
    'Kuvittele, että uusi ystäväsi kysyy sinulta: "Millainen on tavallinen päiväsi?" Kerro, mihin aikaan heräät, mitä teet aamulla, päivällä ja illalla, ja mihin aikaan menet nukkumaan.',
  prepSeconds: 45,
  speakSeconds: 90,
  helpfulPhrases: [
    'Herään yleensä kello...',
    'Aamulla minä...',
    'Sen jälkeen menen...',
    'Illalla minä...',
    'Menen nukkumaan kello...',
  ],
}
