import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week21Reading: ReadingExercise = {
  id: 'r-w21',
  weekId: 21,
  title: 'Suvin tulevaisuudensuunnitelmat',
  level: 'B1',
  textFi: `Suvi on 24-vuotias opiskelija, joka on juuri valmistumassa sairaanhoitajaksi. Hänellä on paljon suunnitelmia lähitulevaisuudelle. Ensi kesänä hän aikoo matkustaa Aasiaan kolmeksi kuukaudeksi, koska hän haluaa nähdä maailmaa ennen kuin aloittaa työelämän.

Suvi kertoo, että hän tulee matkustamaan ensin Thaimaahan, jossa hän aikoo osallistua vapaaehtoistyöhön paikallisessa sairaalassa. Sen jälkeen hän tulee jatkamaan matkaansa Vietnamiin ja Kambodžaan, joissa hän haluaa tutustua paikalliseen kulttuuriin ja historiaan. Matkan aikana hän aikoo myös opiskella hieman thain kieltä, jotta hän pärjäisi paremmin paikallisten kanssa.

Matkan jälkeen Suvi aikoo palata Suomeen ja hakea töitä yliopistosairaalasta. Hän uskoo, että hän tulee saamaan hyvin töitä, koska sairaanhoitajista on tällä hetkellä pulaa. Pitkällä tähtäimellä hän haaveilee myös jatko-opinnoista: hän aikoo opiskella myöhemmin lisää ja erikoistua esimerkiksi ensihoitoon.

Suvin ystävät ihmettelevät, mistä hän saa rohkeutta lähteä yksin niin pitkälle matkalle, mutta Suvi vastaa aina samalla tavalla: "Jos en tee sitä nyt, en ehkä koskaan tule tekemään sitä. Tulevaisuus on tehtävä itse."`,
  questions: [
    {
      id: 'q1',
      question: 'Mitä Suvi aikoo tehdä ensi kesänä?',
      options: [
        'Aloittaa uuden työpaikan heti',
        'Muuttaa pysyvästi ulkomaille',
        'Matkustaa Aasiaan kolmeksi kuukaudeksi',
        'Jatkaa suoraan jatko-opintoihin',
      ],
      correctIndex: 2,
    },
    {
      id: 'q2',
      question: 'Missä maassa Suvi aikoo tehdä vapaaehtoistyötä sairaalassa?',
      options: [
        'Vietnamissa',
        'Kambodžassa',
        'Thaimaassa',
        'Malesiassa',
      ],
      correctIndex: 2,
    },
    {
      id: 'q3',
      question: 'Miksi Suvi aikoo opiskella hieman thain kieltä matkan aikana?',
      options: [
        'Koska se on pakollista vapaaehtoistyössä',
        'Koska hän haluaa muuttaa Thaimaahan pysyvästi',
        'Koska hänen ystävänsä pyysi häntä',
        'Jotta hän pärjäisi paremmin paikallisten kanssa',
      ],
      correctIndex: 3,
    },
    {
      id: 'q4',
      question: 'Mitä Suvi aikoo tehdä matkan jälkeen?',
      options: [
        'Palata Suomeen ja hakea töitä yliopistosairaalasta',
        'Jäädä matkustelemaan loputtomiin',
        'Aloittaa oman yrityksen',
        'Muuttaa Vietnamiin pysyvästi',
      ],
      correctIndex: 0,
    },
    {
      id: 'q5',
      question: 'Mitä Suvin viimeisestä lausahduksesta voi päätellä hänen asenteestaan?',
      options: [
        'Hän pelkää tulevaisuutta eikä usko onnistuvansa',
        'Hän uskoo, että pitää tarttua tilaisuuksiin nyt eikä lykätä niitä',
        'Hän ei ole varma, haluaako hän matkustaa ollenkaan',
        'Hän luottaa siihen, että vanhemmat suunnittelevat hänen tulevaisuutensa',
      ],
      correctIndex: 1,
    },
  ],
}

export const week21Listening: ListeningExercise = {
  id: 'l-w21',
  weekId: 21,
  title: 'Erilaiset tulevaisuudensuunnitelmat',
  level: 'B1',
  scriptFi: `Jonna: Mitä sinä aiot tehdä valmistumisen jälkeen?
Petri: Minä aion matkustaa ensin pari kuukautta, ja sen jälkeen tulen hakemaan töitä IT-alalta.
Jonna: Minne aiot matkustaa?
Petri: Luultavasti tulen matkustamaan Etelä-Amerikkaan, koska en ole koskaan käynyt siellä. Entä sinä, mitä sinä aiot tehdä?
Jonna: Minä aion jäädä Suomeen ja aloittaa työt heti, koska haluan säästää rahaa asuntoa varten.
Petri: Aiotko ostaa asunnon pian?
Jonna: Toivottavasti parin vuoden sisällä. Tulen ensin asumaan vuokralla, mutta säästän joka kuukausi vähän lisää.
Petri: Kuulostaa hyvältä suunnitelmalta. Minä taas ajattelen, että voin säästää myöhemmin – nyt haluan nähdä maailmaa, kun siihen on vielä mahdollisuus.
Jonna: Ymmärrän kyllä. Meillä on vain erilaiset tavoitteet juuri nyt.`,
  questions: [
    {
      id: 'q1',
      question: 'Mitä Petri aikoo tehdä valmistumisen jälkeen?',
      options: [
        'Aloittaa työt heti IT-alalla',
        'Jatkaa opiskelua yliopistossa',
        'Matkustaa ensin ja hakea sitten IT-alan töitä',
        'Muuttaa ulkomaille pysyvästi',
      ],
      correctIndex: 2,
    },
    {
      id: 'q2',
      question: 'Minne Petri aikoo matkustaa?',
      options: [
        'Aasiaan',
        'Etelä-Amerikkaan',
        'Afrikkaan',
        'Pohjois-Eurooppaan',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Mitä Jonna aikoo tehdä valmistumisen jälkeen?',
      options: [
        'Matkustaa ympäri maailmaa',
        'Muuttaa vanhempiensa luo',
        'Ottaa vapaavuoden',
        'Jäädä Suomeen ja aloittaa työt säästääkseen asuntoa varten',
      ],
      correctIndex: 3,
    },
    {
      id: 'q4',
      question: 'Mikä ero Jonnan ja Petrin tavoitteissa on tekstin mukaan?',
      options: [
        'Heillä on täysin samat tavoitteet',
        'Petri ei halua matkustaa ollenkaan',
        'Jonna haluaa säästää heti, kun taas Petri haluaa nähdä maailmaa ensin',
        'Jonna ei aio koskaan ostaa asuntoa',
      ],
      correctIndex: 2,
    },
  ],
}

export const week21Writing: WritingPrompt = {
  id: 'w-w21',
  weekId: 21,
  title: 'Tulevaisuudensuunnitelmani',
  level: 'B1',
  instructions:
    'Kirjoita teksti aiheesta "Mitä aion tehdä seuraavien viiden vuoden aikana?". Kerro konkreettisia suunnitelmia opiskelun, työn tai matkustamisen suhteen. Käytä tulevaisuuden ilmaisuja "aion" ja "tulen -maan/-mään" -rakennetta.',
  minWords: 90,
  maxWords: 160,
  timeMinutes: 30,
  rubric: [
    'Kerroit ainakin kolme konkreettista tulevaisuudensuunnitelmaa.',
    'Käytit "aion" + perusmuoto -rakennetta useita kertoja.',
    'Käytit ainakin kaksi kertaa "tulen/tulet -maan/-mään" -rakennetta.',
    'Perustelit ainakin yhtä suunnitelmaa (esim. koska-lauseella).',
    'Teksti on johdonmukainen ja sopivan pituinen.',
  ],
  modelAnswer:
    'Seuraavien viiden vuoden aikana minulla on useita suunnitelmia. Ensinnäkin aion suorittaa suomen kielen tutkinnon loppuun, koska haluan päästä töihin, joissa tarvitaan hyvää kielitaitoa.\n\nTämän jälkeen tulen hakemaan töitä omalta alaltani, ja uskon, että tulen löytämään sopivan työpaikan noin vuoden sisällä valmistumisesta. Aion myös jatkaa suomen kielen opiskelua töiden ohella, jotta kielitaitoni paranee entisestään.\n\nMuutaman vuoden kuluttua aion matkustaa ulkomaille, luultavasti Aasiaan, koska haluan nähdä muita kulttuureita ennen kuin perustan mahdollisesti perheen. Matkan jälkeen tulen todennäköisesti palaamaan Suomeen jatkamaan urani rakentamista.\n\nPitkällä tähtäimellä aion myös ostaa oman asunnon ja vakiinnuttaa elämäni Suomessa. Uskon, että näiden vuosien aikana tulen oppimaan paljon uutta sekä itsestäni että ympäröivästä maailmasta.',
}

export const week21Speaking: SpeakingPrompt = {
  id: 's-w21',
  weekId: 21,
  title: 'Kerro tulevaisuudensuunnitelmistasi',
  level: 'B1',
  instructions:
    'Kerro suomeksi, mitä aiot tehdä seuraavien viiden vuoden aikana opiskelun, työn tai matkustamisen suhteen. Käytä "aion" ja "tulen -maan/-mään" -rakenteita ja perustele ainakin yhtä suunnitelmaasi.',
  prepSeconds: 45,
  speakSeconds: 110,
  helpfulPhrases: [
    'Aion...',
    'Tulen -maan/-mään...',
    'Uskon, että tulen...',
    '...koska haluan...',
    'Pitkällä tähtäimellä aion...',
  ],
}
