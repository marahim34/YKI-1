import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week13Reading: ReadingExercise = {
  id: 'r-w13',
  weekId: 13,
  title: 'Haaveena uusi tutkinto',
  level: 'B1',
  textFi: `Olen miettinyt jo pitkään, että haluaisin hakea ammattikorkeakouluun opiskelemaan sosiaalialaa. Työskentelen tällä hetkellä hoiva-alalla, mutta minulla ei ole virallista tutkintoa. Jos minulla olisi tutkinto, voisin hakea vaativampiin tehtäviin ja ansaita paremmin.

Ystäväni sanoi, että opiskelu aikuisena on raskasta, koska pitäisi yhdistää työ, perhe ja opinnot. Hän kysyi, miten selviäisin siitä kaikesta. Vastasin, että voisin ehkä opiskella osa-aikaisesti ja käydä töissä vain muutamana päivänä viikossa.

Jos pääsisin sisään kouluun, minun pitäisi ensin suorittaa pääsykoe. Harjoittelisin kokeeseen iltaisin ja viikonloppuisin. Opettajani suomen kurssilla sanoi, että hän voisi auttaa minua harjoittelemaan kirjoittamista, koska pääsykokeessa on myös kirjallinen osuus.

En ole vielä varma, uskaltaisinko hakea tänä vuonna vai odottaisinko vielä yhden vuoden. Mutta tiedän, että jos en yritä, en koskaan tiedä, olisinko onnistunut.`,
  questions: [
    {
      id: 'q1',
      question: 'Mitä alaa kirjoittaja haluaisi opiskella?',
      options: ['Tekniikkaa', 'Sosiaalialaa', 'Kauppatiedettä', 'Lääketiedettä'],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Miksi kirjoittaja haluaisi tutkinnon?',
      options: [
        'Jotta hän voisi muuttaa toiseen kaupunkiin.',
        'Jotta hän voisi hakea vaativampiin tehtäviin ja ansaita paremmin.',
        'Koska hänen esimiehensä vaatii sitä.',
        'Koska nykyinen työ loppuu pian.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Mitä ystävä sanoi opiskelusta aikuisena?',
      options: [
        'Että se on helppoa.',
        'Että se on raskasta, koska pitäisi yhdistää työ, perhe ja opinnot.',
        'Että kannattaa opiskella vain iltaisin.',
        'Että aikuiset eivät voi enää opiskella.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Mitä kirjoittajan pitäisi tehdä ensin, jos hän pääsisi sisään kouluun?',
      options: [
        'Muuttaa uuteen asuntoon.',
        'Lopettaa nykyisen työnsä.',
        'Suorittaa pääsykoe.',
        'Opiskella pääsykoe on jo suoritettu tekstissä.',
      ],
      correctIndex: 2,
    },
    {
      id: 'q5',
      question: 'Missä asiassa opettaja voisi auttaa kirjoittajaa?',
      options: [
        'Matematiikan harjoittelussa',
        'Kirjoittamisen harjoittelussa pääsykoetta varten',
        'Asunnon etsimisessä',
        'Työhaastattelussa',
      ],
      correctIndex: 1,
    },
  ],
}

export const week13Listening: ListeningExercise = {
  id: 'l-w13',
  weekId: 13,
  title: 'Opinto-ohjaajan vastaanotolla',
  level: 'B1',
  scriptFi: `Opinto-ohjaaja: Tervetuloa! Mitä asioita haluaisit käydä läpi tänään?
Opiskelija: Mietin, kannattaisiko minun hakea aikuislukioon vai ammattikouluun.
Opinto-ohjaaja: Mikä ala sinua kiinnostaisi eniten?
Opiskelija: Pidän tekniikasta, joten ehkä hakisin sähköalalle.
Opinto-ohjaaja: Jos hakisit sähköalalle, sinun kannattaisi ensin parantaa matematiikan taitojasi.
Opiskelija: Voisinko osallistua johonkin valmentavaan kurssiin ennen hakua?
Opinto-ohjaaja: Kyllä, meillä on kevätlukukaudella valmentava kurssi, joka auttaisi sinua paljon.
Opiskelija: Se kuulostaa hyvältä. Kuinka kauan kurssi kestäisi?
Opinto-ohjaaja: Se kestäisi noin kolme kuukautta, ja voisit opiskella samalla myös suomea.
Opiskelija: Kiitos, ilmoittaudun mielelläni siihen kurssiin.`,
  questions: [
    {
      id: 'q1',
      question: 'Mitä opiskelija miettii?',
      options: [
        'Kannattaisiko hänen muuttaa toiseen kaupunkiin.',
        'Kannattaisiko hänen hakea aikuislukioon vai ammattikouluun.',
        'Pitäisikö hänen lopettaa opiskelu kokonaan.',
        'Pitäisikö hänen hakea töihin ulkomaille.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Mikä ala opiskelijaa kiinnostaa?',
      options: ['Terveysala', 'Ravintola-ala', 'Sähköala', 'Kauneudenhoitoala'],
      correctIndex: 2,
    },
    {
      id: 'q3',
      question: 'Mitä opinto-ohjaaja suosittelee opiskelijalle ennen hakua?',
      options: [
        'Parantamaan matematiikan taitojaan.',
        'Muuttamaan toiselle paikkakunnalle.',
        'Hankkimaan työkokemusta ulkomailta.',
        'Odottamaan seuraavaan vuoteen.',
      ],
      correctIndex: 0,
    },
    {
      id: 'q4',
      question: 'Kuinka kauan valmentava kurssi kestäisi?',
      options: ['Yhden kuukauden', 'Noin kolme kuukautta', 'Puoli vuotta', 'Yhden vuoden'],
      correctIndex: 1,
    },
  ],
}

export const week13Writing: WritingPrompt = {
  id: 'w-w13',
  weekId: 13,
  title: 'Jos voisin opiskella mitä tahansa',
  level: 'B1',
  instructions:
    'Kirjoita teksti aiheesta: "Jos voisin opiskella mitä tahansa, opiskelisin..." Kerro, mitä opiskelisit, miksi, ja miten elämäsi voisi muuttua sen jälkeen. Käytä konditionaalia (esim. opiskelisin, voisin, tekisin) monipuolisesti.',
  minWords: 80,
  maxWords: 150,
  timeMinutes: 25,
  rubric: [
    'Käytit konditionaalia (-isi-) selkeästi ja oikein useassa lauseessa.',
    'Kerroit, mitä opiskelisit ja miksi.',
    'Pohdit, miten elämäsi voisi muuttua.',
    'Teksti etenee loogisesti ja on ymmärrettävä.',
    'Käytit ainakin yhtä jos-lausetta (esim. jos voisin, jos minulla olisi).',
  ],
  modelAnswer:
    'Jos voisin opiskella mitä tahansa, opiskelisin lääketiedettä. Olen aina ollut kiinnostunut ihmisen kehosta ja terveydestä, ja haluaisin auttaa sairaita ihmisiä. Jos pääsisin opiskelemaan lääketiedettä, minun täytyisi opiskella monta vuotta ja lukea paljon.\n\nJos valmistuisin lääkäriksi, voisin työskennellä sairaalassa tai terveyskeskuksessa. Ansaitsisin todennäköisesti paremmin kuin nyt, mutta tärkeintä olisi, että voisin auttaa muita ihmisiä joka päivä.\n\nTiedän, että opiskelu olisi vaikeaa, ja minun pitäisi ehkä opiskella myös englantia ja latinaa. Mutta uskon, että olisin onnellisempi, jos tekisin työtä, josta todella pidän.',
}

export const week13Speaking: SpeakingPrompt = {
  id: 's-w13',
  weekId: 13,
  title: 'Jos saisit vapaan vuoden opiskeluun',
  level: 'B1',
  instructions:
    'Kerro, mitä tekisit, jos saisit vapaan vuoden ja voisit käyttää sen kokonaan opiskeluun. Mitä opiskelisit? Miksi juuri sitä? Käytä konditionaalimuotoja (esim. opiskelisin, matkustaisin, tekisin).',
  prepSeconds: 45,
  speakSeconds: 90,
  helpfulPhrases: [
    'Jos saisin vapaan vuoden, minä...',
    'Opiskelisin mielelläni...',
    'Se olisi hyödyllistä, koska...',
    'Minun pitäisi ensin...',
    'Uskon, että se muuttaisi elämääni, koska...',
  ],
}
