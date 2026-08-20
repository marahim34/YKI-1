import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week19Reading: ReadingExercise = {
  id: 'r-w19',
  weekId: 19,
  title: 'Kaupunki, joka haluaa vähentää jätettä',
  level: 'B1',
  textFi: `Lahti on kaupunki, joka on tunnettu ympäristötyöstään Euroopassa. Kaupunki on kehittänyt kierrätysjärjestelmän, joka auttaa asukkaita lajittelemaan jätteensä entistä tarkemmin. Jokaisessa taloyhtiössä on nykyään useita jäteastioita, jotka on merkitty selkeästi eri jätelajeille.

Yksi tärkeimmistä hankkeista on ollut biojätteen kerääminen, joka vähentää kaatopaikoille päätyvän jätteen määrää huomattavasti. Biojäte, joka syntyy esimerkiksi ruoantähteistä, muutetaan biokaasuksi, jota käytetään muun muassa bussien polttoaineena. Monet asukkaat, jotka ovat osallistuneet hankkeeseen, kertovat olevansa ylpeitä kaupunkinsa ympäristötyöstä.

Kaupunki on myös perustanut useita puistoja ja viheralueita, jotka tarjoavat asukkaille paikkoja liikkua luonnossa. Erityisen suosittu on järven ranta, jonne on rakennettu polku, jota pitkin voi kävellä tai pyöräillä ympäri vuoden. Alueella kasvaa metsää, jossa elää monia lintu- ja eläinlajeja.

Kaupungin tavoitteena on olla hiilineutraali vuoteen 2025 mennessä. Tämä tavoite, jota monet muutkin kaupungit ovat alkaneet seurata, vaatii vielä paljon työtä, mutta asukkaat, jotka ovat nähneet muutoksen viime vuosina, uskovat, että se on saavutettavissa.`,
  questions: [
    {
      id: 'q1',
      question: 'Mistä Lahti on tunnettu tekstin mukaan?',
      options: [
        'Suurimmasta satamastaan',
        'Vanhimmasta linnastaan',
        'Ympäristötyöstään',
        'Suurimmasta yliopistostaan',
      ],
      correctIndex: 2,
    },
    {
      id: 'q2',
      question: 'Mihin biojäte muutetaan tekstin mukaan?',
      options: [
        'Lannoitteeksi puutarhoja varten',
        'Biokaasuksi, jota käytetään muun muassa bussien polttoaineena',
        'Uudeksi ruoaksi',
        'Sähköksi kotitalouksille',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Mikä on esimerkki kaupungin rakentamasta viheralueesta?',
      options: [
        'Uusi ostoskeskus',
        'Uusi moottoritie',
        'Iso parkkihalli',
        'Järven rantapolku, jota pitkin voi kävellä tai pyöräillä',
      ],
      correctIndex: 3,
    },
    {
      id: 'q4',
      question: 'Mikä on kaupungin tavoite vuoteen 2025 mennessä?',
      options: [
        'Kaksinkertaistaa asukasluku',
        'Rakentaa uusi lentokenttä',
        'Olla hiilineutraali',
        'Lopettaa kaikki kierrätys',
      ],
      correctIndex: 2,
    },
    {
      id: 'q5',
      question: 'Mitä tekstistä voi päätellä muiden kaupunkien suhtautumisesta Lahden tavoitteeseen?',
      options: [
        'Muut kaupungit eivät ole kiinnostuneita Lahden esimerkistä',
        'Monet muutkin kaupungit ovat alkaneet seurata samanlaista tavoitetta',
        'Muut kaupungit kritisoivat Lahden ympäristötyötä',
        'Lahti on ainoa kaupunki, joka välittää ympäristöstä',
      ],
      correctIndex: 1,
    },
  ],
}

export const week19Listening: ListeningExercise = {
  id: 'l-w19',
  weekId: 19,
  title: 'Uudet lajitteluohjeet',
  level: 'B1',
  scriptFi: `Sara: Muistatko, että meidän pitää alkaa lajitella jätteet paremmin? Meidän taloyhtiöön tuli uudet ohjeet.
Ville: Joo, luin ne. Siinä oli ohje, joka selitti, mihin astiaan mikäkin jäte kuuluu.
Sara: Biojäte on se, joka menee ruskeaan astiaan, eikö niin?
Ville: Kyllä, ja pahvi ja paperi, jotka olemme aiemmin heittäneet sekajätteeseen, pitää nyt viedä erilliseen keräykseen.
Sara: Entä muovi? Meillä on paljon muovipakkauksia, jotka jäävät ruoan ostamisesta.
Ville: Muovi kerätään omaan astiaansa, joka on pihan toisella puolella. Se on vähän kauempana, mutta se ei haittaa.
Sara: Hyvä, että meillä on nyt selkeä järjestelmä, joka helpottaa lajittelua.
Ville: Niin, ja se auttaa myös ympäristöä, mikä on tietysti tärkeintä.`,
  questions: [
    {
      id: 'q1',
      question: 'Minkä uuden ohjeen taloyhtiö on antanut?',
      options: [
        'Ohjeen sähkön säästämisestä',
        'Ohjeen autopaikkojen käytöstä',
        'Ohjeen jätteiden lajittelusta',
        'Ohjeen remontista',
      ],
      correctIndex: 2,
    },
    {
      id: 'q2',
      question: 'Mihin astiaan biojäte kuuluu?',
      options: [
        'Siniseen astiaan',
        'Keltaiseen astiaan',
        'Punaiseen astiaan',
        'Ruskeaan astiaan',
      ],
      correctIndex: 3,
    },
    {
      id: 'q3',
      question: 'Mitä Sara ja Ville ovat aiemmin tehneet väärin?',
      options: [
        'He ovat heittäneet pahvin ja paperin sekajätteeseen',
        'He eivät ole kierrättäneet ollenkaan',
        'He ovat polttaneet jätteensä pihalla',
        'He ovat vieneet kaiken kaatopaikalle',
      ],
      correctIndex: 0,
    },
    {
      id: 'q4',
      question: 'Missä muovinkeräysastia sijaitsee?',
      options: [
        'Keittiössä',
        'Naapuritalossa',
        'Sitä ei ole vielä',
        'Pihan toisella puolella',
      ],
      correctIndex: 3,
    },
  ],
}

export const week19Writing: WritingPrompt = {
  id: 'w-w19',
  weekId: 19,
  title: 'Luontokohde, joka on minulle tärkeä',
  level: 'B1',
  instructions:
    'Kirjoita teksti kaupungin verkkosivulle "Suosikkiluontokohteeni", jossa kuvailet lähialueesi luontokohdetta (esim. puisto, metsä tai järvi), joka on sinulle tärkeä. Kerro, miksi ympäristöstä ja luonnosta kannattaisi huolehtia paremmin. Käytä tekstissäsi useita joka/jotka-relatiivilauseita.',
  minWords: 90,
  maxWords: 160,
  timeMinutes: 30,
  rubric: [
    'Kuvailit konkreettisen luontokohteen, joka on sinulle tärkeä.',
    'Käytit ainakin kolme joka- tai jotka-relatiivilausetta.',
    'Selitit, miksi ympäristöstä kannattaisi huolehtia.',
    'Teksti etenee loogisesti kappaleittain.',
    'Pituus on sopiva tehtävänantoon nähden.',
  ],
  modelAnswer:
    'Lähellä kotiani on metsä, joka on minulle erityisen tärkeä paikka. Se on alue, jossa käyn lähes joka viikonloppu kävelyllä tai lenkillä.\n\nMetsässä on polku, joka kiertää pienen järven ympäri. Järvessä elää monia lintuja, jotka laulavat erityisen kauniisti keväällä. Metsä on myös paikka, jonne monet naapurustoni asukkaat tulevat rauhoittumaan arjen keskellä.\n\nValitettavasti olen huomannut, että osa ihmisistä, jotka käyvät metsässä, jättävät roskia luontoon. Tämä on ongelma, joka vaikuttaa suoraan eläimiin ja kasveihin, jotka elävät alueella. Siksi mielestäni jokaisen, joka nauttii luonnosta, pitäisi myös huolehtia siitä.\n\nUskon, että pienet teot, kuten roskien kerääminen ja kierrättäminen, ovat asioita, jotka voivat todella vaikuttaa ympäristön tilaan pitkällä aikavälillä.',
}

export const week19Speaking: SpeakingPrompt = {
  id: 's-w19',
  weekId: 19,
  title: 'Kerro tärkeästä luontopaikasta',
  level: 'B1',
  instructions:
    'Kerro suomeksi paikasta luonnossa, joka on sinulle tärkeä. Kuvaile paikkaa, kerro miksi se on sinulle merkityksellinen ja mitä siellä voi tehdä. Käytä ainakin kolme kertaa joka- tai jotka-relatiivilausetta.',
  prepSeconds: 45,
  speakSeconds: 110,
  helpfulPhrases: [
    'Paikka, joka on minulle tärkeä, on...',
    'Siellä on..., joka/jotka...',
    'Käyn siellä usein, koska...',
    'Se on paikka, jossa voin...',
    'Luonto, jota haluan suojella, on minulle tärkeä.',
  ],
}
