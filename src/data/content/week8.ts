import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week8Reading: ReadingExercise = {
  id: 'r-w8',
  weekId: 8,
  title: 'Sairaana kotona',
  level: 'A2',
  textFi: `Eilen illalla minulla alkoi olla kuumetta ja päätä särki kovasti. En nukkunut hyvin yöllä, koska myös kurkkuani särki. Aamulla minun täytyi soittaa työpaikalle ja kertoa, että en tule töihin tänään.

Sitten soitin terveyskeskukseen ja varasin ajan lääkärille. Lääkäri sanoi, että minulla on flunssa. Hän sanoi, että minun pitää levätä kotona ainakin kolme päivää. Minun ei tarvitse ottaa antibiootteja, koska flunssa on virus, ei bakteeri.

Nyt olen kotona sängyssä. En syö paljon, koska en ole nälkäinen, mutta juon paljon vettä ja teetä. Käteni ja jalkani ovat väsyneet, ja selkääni särkee myös vähän. Onneksi minulla ei ole enää niin paljon kuumetta kuin eilen.

Huomenna soitan taas lääkärille, jos en ole parempi. Toivon, että toivun pian, koska haluan mennä takaisin töihin ja tavata ystäviäni.`,
  questions: [
    {
      id: 'q1',
      question: 'Mitä kirjoittajalle tapahtui eilen illalla?',
      options: [
        'Hän satutti jalkansa.',
        'Hänelle alkoi tulla kuumetta ja päätä särki.',
        'Hän meni suoraan sairaalaan.',
        'Hän nukkui koko illan hyvin.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Mitä kirjoittajan piti tehdä aamulla?',
      options: [
        'Mennä suoraan töihin.',
        'Soittaa työpaikalle ja kertoa, ettei tule töihin.',
        'Soittaa poliisille.',
        'Mennä kauppaan ostamaan lääkkeitä.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Kuinka kauan lääkäri sanoi, että kirjoittajan pitää levätä?',
      options: ['Yhden päivän', 'Kaksi päivää', 'Ainakin kolme päivää', 'Koko viikon'],
      correctIndex: 2,
    },
    {
      id: 'q4',
      question: 'Miksi kirjoittajan ei tarvitse ottaa antibiootteja?',
      options: [
        'Koska lääkäri unohti kirjoittaa reseptin.',
        'Koska apteekki oli kiinni.',
        'Koska flunssa on virus, ei bakteeri.',
        'Koska antibiootit ovat liian kalliita.',
      ],
      correctIndex: 2,
    },
    {
      id: 'q5',
      question: 'Mitä kirjoittaja tekee, jos hän ei ole parempi huomenna?',
      options: [
        'Hän menee suoraan töihin joka tapauksessa.',
        'Hän soittaa taas lääkärille.',
        'Hän ei tee mitään.',
        'Hän matkustaa toiseen kaupunkiin.',
      ],
      correctIndex: 1,
    },
  ],
}

export const week8Listening: ListeningExercise = {
  id: 'l-w8',
  weekId: 8,
  title: 'Apteekissa',
  level: 'A2',
  scriptFi: `Farmaseutti: Hyvää päivää! Miten voin auttaa?
Asiakas: Hei. Minulla on kurkkukipua ja yskää jo kolme päivää. Mitä minun pitäisi ottaa?
Farmaseutti: Onko sinulla myös kuumetta?
Asiakas: Ei ole kuumetta, mutta pääni särkee vähän.
Farmaseutti: Selvä. Voisit ottaa näitä kurkkupastilleja ja tätä yskänlääkettä. Sinun ei tarvitse mennä lääkäriin, jos oireet eivät pahene.
Asiakas: Entä jos oireet eivät parane viikossa?
Farmaseutti: Silloin sinun täytyy varata aika lääkärille. Muista myös levätä ja juoda paljon vettä.
Asiakas: Kiitos neuvoista. Paljonko nämä maksavat yhteensä?
Farmaseutti: Yhteensä ne maksavat kaksitoista euroa viisikymmentä senttiä.
Asiakas: Selvä, kiitos paljon!`,
  questions: [
    {
      id: 'q1',
      question: 'Mitä oireita asiakkaalla on ollut kolme päivää?',
      options: ['Vatsakipua ja kuumetta', 'Kurkkukipua ja yskää', 'Selkäkipua', 'Väsymystä ja huimausta'],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Onko asiakkaalla kuumetta?',
      options: [
        'Kyllä, korkea kuume.',
        'Ei ole kuumetta, mutta pää särkee.',
        'Hän ei tiedä.',
        'Kuume nousi keskustelun aikana.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Milloin asiakkaan täytyy varata aika lääkärille farmaseutin mukaan?',
      options: [
        'Heti huomenna.',
        'Jos oireet eivät parane viikossa.',
        'Vasta kuukauden kuluttua.',
        'Ei koskaan, apteekki riittää.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Paljonko lääkkeet maksavat yhteensä?',
      options: ['10 euroa', '12,50 euroa', '15 euroa', '20 euroa'],
      correctIndex: 1,
    },
  ],
}

export const week8Writing: WritingPrompt = {
  id: 'w-w8',
  weekId: 8,
  title: 'Sairauslomaviesti esimiehelle',
  level: 'A2',
  instructions:
    'Kirjoita lyhyt viesti (esim. sähköposti tai tekstiviesti) esimiehellesi. Kerro, että olet sairas etkä voi tulla töihin. Kuvaile oireitasi ja kerro, mitä lääkäri on sanonut. Käytä ainakin kolme kertaa sanoja täytyy, pitää tai ei tarvitse, ja käytä myös kieltomuotoa (en, et, ei...).',
  minWords: 50,
  maxWords: 120,
  timeMinutes: 20,
  rubric: [
    'Kerroit, että olet sairas ja et tule töihin.',
    'Kuvailit oireitasi selkeästi.',
    'Käytit sanoja täytyy, pitää tai ei tarvitse ainakin kolme kertaa.',
    'Käytit kieltomuotoa oikein (en, et, ei...).',
    'Viesti on kohtelias ja ymmärrettävä.',
  ],
  modelAnswer:
    'Hyvä esimies,\n\nValitettavasti en voi tulla tänään töihin, koska olen sairas. Minulla on kuumetta ja kurkkuani särkee kovasti. Kävin aamulla lääkärissä, ja lääkäri sanoi, että minulla on flunssa. Hän sanoi, että minun täytyy levätä kotona ainakin kolme päivää.\n\nMinun ei tarvitse ottaa antibiootteja, koska kyseessä on virus. En pysty tulemaan töihin tällä viikolla, mutta lupaan ilmoittaa, jos vointini muuttuu. En tiedä vielä tarkkaan, milloin palaan töihin, mutta soitan sinulle heti, kun tiedän lisää.\n\nYstävällisin terveisin,\nMaria',
}

export const week8Speaking: SpeakingPrompt = {
  id: 's-w8',
  weekId: 8,
  title: 'Lääkärin vastaanotolla',
  level: 'A2',
  instructions:
    'Kuvittele, että olet lääkärin vastaanotolla. Kerro lääkärille, mikä sinua vaivaa: mitä oireita sinulla on, mistä kehon osasta sinua särkee, ja kuinka kauan olet ollut sairas. Käytä sanoja täytyy, pitää ja ei tarvitse, jos mahdollista.',
  prepSeconds: 45,
  speakSeconds: 90,
  helpfulPhrases: [
    'Minua särkee päätä / vatsaa / selkää.',
    'Minulla on ollut kuumetta kaksi päivää.',
    'En pysty nukkumaan kunnolla.',
    'Pitääkö minun ottaa lääkettä?',
    'Täytyykö minun jäädä kotiin?',
  ],
}
