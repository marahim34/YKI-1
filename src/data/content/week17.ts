import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week17Reading: ReadingExercise = {
  id: 'r-w17',
  weekId: 17,
  title: 'Suomen terveydenhuoltojärjestelmä',
  level: 'B1',
  textFi: `Suomessa julkinen terveydenhuolto toimii pääasiassa terveyskeskusten kautta. Jokainen asukas kuuluu oman alueensa terveyskeskukseen, ja sinne voi mennä tapaamaan lääkäriä tai sairaanhoitajaa, kun tarvitsee apua. Yhteyttä otetaan yleensä puhelimitse tai verkkoajanvarauksen kautta.

Ajan varaamista varten on hyvä kuvailla oireitaan mahdollisimman tarkasti, jotta hoitaja osaa arvioida, kuinka kiireellinen tilanne on. Kiireellisissä tapauksissa aika järjestyy usein samalle päivälle, kun taas tavallisissa tarkastuksissa jonotusaika voi olla useita viikkoja. Monet varaavat ajan jo hyvissä ajoin etukäteen, jotta he eivät joutuisi odottamaan pitkään.

Jos lääkäri kirjoittaa potilaalle reseptin, sen voi hakea apteekista joko paperisena tai sähköisenä. Sähköisen reseptin lääkkeen voi noutaa mistä tahansa apteekista ilman paperia, mikä on tehnyt asioinnista huomattavasti helpompaa. Osa suomalaisista ottaa myös yksityisen sairausvakuutuksen, jotta he pääsisivät tarvittaessa nopeammin yksityiselle lääkäriasemalle.

Hätätilanteissa, esimerkiksi onnettomuuden sattuessa, kannattaa soittaa suoraan hätänumeroon 112 eikä varata tavallista lääkäriaikaa. Terveyskeskuksen päivystys on olemassa juuri äkillisiä ja vakavia tilanteita varten.`,
  questions: [
    {
      id: 'q1',
      question: 'Mihin kautta suomalainen ottaa yleensä ensin yhteyttä terveysongelmassa?',
      options: [
        'Omaan terveyskeskukseen',
        'Yksityiselle lääkäriasemalle',
        'Suoraan sairaalan päivystykseen',
        'Apteekkiin',
      ],
      correctIndex: 0,
    },
    {
      id: 'q2',
      question: 'Miksi oireiden tarkka kuvailu on tärkeää ajanvarauksessa?',
      options: [
        'Jotta potilas saa aina saman lääkärin',
        'Jotta hoitaja osaa arvioida tilanteen kiireellisyyden',
        'Jotta lääkäri voi laskuttaa oikein',
        'Jotta apteekki tietää mitä lääkettä varata',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Mikä ero on paperisella ja sähköisellä reseptillä tekstin mukaan?',
      options: [
        'Paperireseptin voi hakea mistä tahansa apteekista, mutta sähköistä ei',
        'Sähköinen resepti on aina kalliimpi',
        'Sähköisen reseptin lääkkeen voi noutaa mistä tahansa apteekista ilman paperia',
        'Paperiresepti on nykyään yleisempi',
      ],
      correctIndex: 2,
    },
    {
      id: 'q4',
      question: 'Miksi jotkut suomalaiset ottavat yksityisen sairausvakuutuksen?',
      options: [
        'Koska julkinen terveydenhuolto on maksutonta vain vakuutetuille',
        'Koska terveyskeskukset ovat kiinni suurimman osan vuodesta',
        'Koska vakuutus on pakollinen kaikille',
        'Koska he haluavat päästä tarvittaessa nopeammin yksityiselle lääkärille',
      ],
      correctIndex: 3,
    },
    {
      id: 'q5',
      question: 'Mitä tekstistä voi päätellä hätänumero 112:n käytöstä?',
      options: [
        'Sitä käytetään tavallisten lääkäriaikojen varaamiseen',
        'Se on tarkoitettu vain lapsille',
        'Sitä tulisi käyttää vain vakavissa ja äkillisissä tilanteissa',
        'Se korvaa terveyskeskuksen kokonaan',
      ],
      correctIndex: 2,
    },
  ],
}

export const week17Listening: ListeningExercise = {
  id: 'l-w17',
  weekId: 17,
  title: 'Puhelu terveyskeskukseen',
  level: 'B1',
  scriptFi: `Vastaanottovirkailija: Terveyskeskus, päivää.
Potilas: Päivää, soitan ajanvarausta varten. Minulla on ollut kurkku kipeänä jo kolme päivää.
Vastaanottovirkailija: Selvä, kerro vielä hieman tarkemmin oireista, jotta voin arvioida kiireellisyyden.
Potilas: Minulla on myös kuumetta ja nielemisvaikeuksia.
Vastaanottovirkailija: Kuulostaa siltä, että sinun kannattaisi päästä lääkärille pian. Voisitko tulla huomenna aamulla kello yhdeksän?
Potilas: Se sopii minulle hyvin. Pitääkö minun ottaa jotain mukaan?
Vastaanottovirkailija: Ota Kela-kortti ja henkilöllisyystodistus mukaan tunnistautumista varten. Ja jos sinulla on aiempia lääkitystietoja, tuo nekin mukaan, jotta lääkäri saa kokonaiskuvan tilanteestasi.
Potilas: Selvä, kiitos avusta.
Vastaanottovirkailija: Ole hyvä, nähdään huomenna.`,
  questions: [
    {
      id: 'q1',
      question: 'Miksi potilas soittaa terveyskeskukseen?',
      options: [
        'Hän haluaa peruuttaa ajan',
        'Hän tarvitsee reseptin uusimista',
        'Hänellä on ollut kurkku kipeänä kolme päivää',
        'Hän kysyy rokotusajoista',
      ],
      correctIndex: 2,
    },
    {
      id: 'q2',
      question: 'Mitkä oireet potilaalla on kurkkukivun lisäksi?',
      options: [
        'Päänsärkyä ja väsymystä',
        'Kuumetta ja nielemisvaikeuksia',
        'Yskää ja nuhaa',
        'Vatsakipua',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Milloin potilas pääsee lääkärille?',
      options: [
        'Ensi viikolla',
        'Huomenna aamulla kello yhdeksän',
        'Samana päivänä illalla',
        'Hän ei saanut aikaa lainkaan',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Mitä potilaan pitää ottaa mukaan käynnille?',
      options: [
        'Vain Kela-kortin',
        'Rahaa käteisenä',
        'Lähetteen yksityislääkäriltä',
        'Kela-kortin, henkilöllisyystodistuksen ja mahdolliset lääkitystiedot',
      ],
      correctIndex: 3,
    },
  ],
}

export const week17Writing: WritingPrompt = {
  id: 'w-w17',
  weekId: 17,
  title: 'Terveydenhuolto kotimaassani ja Suomessa',
  level: 'B1',
  instructions:
    'Kirjoita teksti, jossa vertaat kotimaasi terveydenhuoltojärjestelmää Suomen järjestelmään. Kerro esimerkiksi, miten ajanvaraus tehdään ja miksi. Käytä tekstissäsi ainakin kahta jotta-sivulausetta ja yhtä varten-rakennetta (esim. "...ajan varaamista varten", "jotta pääsisit lääkärille").',
  minWords: 90,
  maxWords: 160,
  timeMinutes: 30,
  rubric: [
    'Vertailit kotimaasi ja Suomen terveydenhuoltoa selkeästi.',
    'Käytit ainakin kaksi jotta-sivulausetta.',
    'Käytit ainakin yhden varten-rakenteen.',
    'Kerroit konkreettisen esimerkin ajanvarauksesta tai lääkärikäynnistä.',
    'Teksti on johdonmukainen ja sopivan pituinen.',
  ],
  modelAnswer:
    'Kotimaassani terveydenhuolto toimii hieman eri tavalla kuin Suomessa. Kotimaassani monet ihmiset menevät suoraan sairaalaan, kun taas Suomessa ensin otetaan yhteyttä omaan terveyskeskukseen.\n\nSuomessa ajanvarausta varten pitää yleensä soittaa tai käyttää verkkopalvelua, ja oireet on kuvailtava tarkasti, jotta hoitaja osaa arvioida kiireellisyyden. Kotimaassani taas voi usein mennä suoraan vastaanotolle ilman ajanvarausta, mikä tuntuu minusta helpommalta, mutta jonot voivat olla pitkiä.\n\nToinen ero on resepteissä. Suomessa lääkäri kirjoittaa yleensä sähköisen reseptin, jotta potilas voi hakea lääkkeen mistä tahansa apteekista. Kotimaassani käytetään edelleen enemmän paperireseptejä.\n\nMolemmissa järjestelmissä on hyviä ja huonoja puolia, mutta olen oppinut arvostamaan sitä, että Suomessa hoitoon pääsee selkeän järjestelmän kautta, joka on suunniteltu juuri sitä varten, että kaikki saisivat tarvitsemansa avun.',
}

export const week17Speaking: SpeakingPrompt = {
  id: 's-w17',
  weekId: 17,
  title: 'Soita terveyskeskukseen ja varaa aika',
  level: 'B1',
  instructions:
    'Kuvittele, että sinulla on ollut päänsärkyä ja kuumetta kolme päivää. Soitat terveyskeskukseen varataksesi ajan. Selitä oireesi, kerro miksi tarvitset apua ja kysy, mitä sinun pitää ottaa mukaan käynnille. Käytä jotta- ja varten-rakenteita.',
  prepSeconds: 45,
  speakSeconds: 100,
  helpfulPhrases: [
    'Soitan ajanvarausta varten...',
    'Minulla on ollut... jo muutaman päivän.',
    '..., jotta hoitaja/lääkäri osaa arvioida tilanteeni.',
    'Pitääkö minun ottaa jotain mukaan?',
    '..., jotta pääsen mahdollisimman pian lääkärille.',
  ],
}
