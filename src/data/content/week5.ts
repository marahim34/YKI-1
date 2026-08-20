import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week5Reading: ReadingExercise = {
  id: 'r-w5',
  weekId: 5,
  title: 'Uusi koti',
  level: 'A2',
  textFi: `Muutin kuukausi sitten uuteen kotiin. Asun nyt kaksiossa Helsingin Kalliossa, lähellä keskustaa. Asunnossa on olohuone, makuuhuone, keittiö ja kylpyhuone. Keittiössä on iso ikkuna, josta näkyy naapurin piha.

Vuokra on kuudensadan euron kuukaudessa, ja se sisältää veden mutta ei sähköä. Vuokrasopimus on tehty vuodeksi eteenpäin. Muutin tähän asuntoon, koska edellisessä asunnossani oli liian kallis vuokra ja se oli kaukana työpaikastani.

Naapurustossa on kauppa, apteekki ja bussipysäkki aivan lähellä. Pidän tästä naapurustosta, koska täältä pääsee helposti kävellen moneen paikkaan. Olohuoneesta pääsee parvekkeelle, jossa istun usein aamulla kahvikupin kanssa. Siivoan asuntoa joka viikonloppu, jotta koti pysyy siistinä.`,
  questions: [
    { id: 'q1', question: 'Missä kaupunginosassa puhuja asuu nyt?', options: ['Kalliossa', 'Töölössä', 'Kampissa', 'Espoossa'], correctIndex: 0 },
    { id: 'q2', question: 'Mitä huoneita asunnossa on?', options: ['Vain keittiö ja makuuhuone', 'Olohuone, makuuhuone, keittiö ja kylpyhuone', 'Kaksi makuuhuonetta', 'Vain olohuone'], correctIndex: 1 },
    { id: 'q3', question: 'Sisältyykö sähkö vuokraan?', options: ['Kyllä', 'Ei', 'Vain talvella', 'Teksti ei kerro'], correctIndex: 1 },
    { id: 'q4', question: 'Miksi puhuja muutti pois edellisestä asunnostaan?', options: ['Se oli liian pieni', 'Vuokra oli kallis ja se oli kaukana työstä', 'Naapurit olivat äänekkäitä', 'Talo purettiin'], correctIndex: 1 },
    { id: 'q5', question: 'Mitä puhuja tekee usein aamulla parvekkeella?', options: ['Lukee lehteä', 'Siivoaa', 'Istuu kahvikupin kanssa', 'Soittaa puhelimessa'], correctIndex: 2 },
  ],
}

export const week5Listening: ListeningExercise = {
  id: 'l-w5',
  weekId: 5,
  title: 'Asunnon esittely',
  level: 'A2',
  scriptFi: `Vuokranantaja: Tervetuloa! Tässä on olohuone, ja tuolla on keittiö.
Vuokralainen: Kiitos. Onko täällä myös työhuonetta? Työskentelen usein kotoa käsin.
Vuokranantaja: Ei valitettavasti ole erillistä työhuonetta, mutta makuuhuoneessa on tilaa pienelle pöydälle.
Vuokralainen: Selvä, se käy varmasti. Mistä pääsee kylpyhuoneeseen?
Vuokranantaja: Kylpyhuoneeseen mennään käytävästä, heti eteisen jälkeen.
Vuokralainen: Entä paljonko vuokra on kuukaudessa?
Vuokranantaja: Vuokra on 750 euroa kuussa, ja siihen sisältyy vesi mutta ei sähköä.
Vuokralainen: Onko lähellä kauppaa tai bussipysäkkiä?
Vuokranantaja: On, kauppa on vain viiden minuutin kävelymatkan päässä, ja bussipysäkki on aivan talon edessä.
Vuokralainen: Kuulostaa hyvältä. Voisinko muuttaa tänne jo ensi kuun alussa?
Vuokranantaja: Kyllä, se sopii minulle hyvin.`,
  questions: [
    { id: 'q1', question: 'Onko asunnossa erillistä työhuonetta?', options: ['Kyllä', 'Ei', 'On kaksi työhuonetta', 'Vuokranantaja ei tiedä'], correctIndex: 1 },
    { id: 'q2', question: 'Mistä pääsee kylpyhuoneeseen?', options: ['Keittiöstä', 'Käytävästä eteisen jälkeen', 'Makuuhuoneesta', 'Olohuoneesta'], correctIndex: 1 },
    { id: 'q3', question: 'Paljonko vuokra on kuukaudessa?', options: ['600 euroa', '650 euroa', '750 euroa', '800 euroa'], correctIndex: 2 },
    { id: 'q4', question: 'Milloin vuokralainen voisi muuttaa asuntoon?', options: ['Heti tänään', 'Ensi viikolla', 'Ensi kuun alussa', 'Vasta ensi vuonna'], correctIndex: 2 },
  ],
}

export const week5Writing: WritingPrompt = {
  id: 'w-w5',
  weekId: 5,
  title: 'Kuvaile kotiasi',
  level: 'A2',
  instructions:
    'Kirjoita teksti kodistasi. Kerro, missä asut, minkälainen asunto sinulla on (montako huonetta, mitä huoneita), ja käytä paikallissijoja (esim. "olohuoneessa on...", "keittiöstä pääsee..."). Kerro myös vuokrasta tai naapurustosta.',
  minWords: 50,
  maxWords: 120,
  timeMinutes: 20,
  rubric: [
    'Kerroit, missä kaupungissa tai kaupunginosassa asut.',
    'Käytit paikallissijoja oikein (-ssa/-ssä, -sta/-stä, -Vn).',
    'Mainitsit ainakin kolme huonetta tai osaa asunnosta.',
    'Kerroit jotain vuokrasta, naapurustosta tai muutosta.',
    'Lauseet ovat selkeitä ja loogisia.',
  ],
  modelAnswer:
    'Asun kolmiossa Turussa, lähellä yliopistoa. Asunnossani on olohuone, kaksi makuuhuonetta ja keittiö. Keittiöstä pääsee suoraan parvekkeelle, jossa kasvatan kukkia kesällä. Makuuhuoneessani on iso sänky ja työpöytä. Vuokra on 700 euroa kuukaudessa, ja se sisältää veden. Naapurustossa on kauppa ja kirjasto aivan lähellä, joten en tarvitse autoa arjessa.',
}

export const week5Speaking: SpeakingPrompt = {
  id: 's-w5',
  weekId: 5,
  title: 'Etsit vuokra-asuntoa',
  level: 'A2',
  instructions:
    'Kuvittele, että soitat vuokranantajalle ja kysyt asunnosta. Kysy esimerkiksi, missä asunto sijaitsee, montako huonetta siinä on, paljonko vuokra on, ja mitä vuokraan sisältyy. Käytä paikallissijoja.',
  prepSeconds: 45,
  speakSeconds: 90,
  helpfulPhrases: [
    'Missä asunto sijaitsee?',
    'Montako huonetta asunnossa on?',
    'Sisältyykö vuokraan sähkö tai vesi?',
    'Onko lähellä kauppaa tai bussipysäkkiä?',
    'Milloin voisin muuttaa asuntoon?',
  ],
}
