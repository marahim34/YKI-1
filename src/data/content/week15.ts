import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week15Reading: ReadingExercise = {
  id: 'r-w15',
  weekId: 15,
  title: 'Uutinen: Uusi kirjasto avattiin viime viikolla',
  level: 'B1',
  textFi: `Viime perjantaina kaupungin uusi pääkirjasto avattiin juhlallisesti keskustassa. Rakennus suunniteltiin jo kolme vuotta sitten, ja sen rakentaminen aloitettiin vuonna 2023. Avajaistilaisuudessa puhuttiin kirjaston merkityksestä kaikille kaupunkilaisille.

Tilaisuudessa kerrottiin, että kirjastoon investoitiin yli kymmenen miljoonaa euroa. Rakennukseen lisättiin muun muassa lasten oma osasto, hiljainen lukusali ja tietokoneluokka. Paikallisessa lehdessä julkaistiin artikkeli, jossa haastateltiin kaupungin kulttuurijohtajaa.

Artikkelissa kerrottiin myös, että avajaisviikonloppuna kirjastossa järjestettiin monia tapahtumia lapsille ja aikuisille. Satoja ihmisiä nähtiin jonottamassa jo aamulla ennen ovien avaamista. Monet kaupunkilaiset olivat odottaneet uutta kirjastoa jo pitkään.

Uutinen kirjaston avajaisista jaettiin nopeasti sosiaalisessa mediassa, ja siitä keskusteltiin vilkkaasti. Monet pitivät uutista tärkeänä, koska kirjastoa pidetään yhtenä ajankohtaisimmista ja odotetuimmista rakennushankkeista kaupungissa viime vuosina.`,
  questions: [
    {
      id: 'q1',
      question: 'Milloin uusi pääkirjasto avattiin?',
      options: ['Viime maanantaina', 'Viime perjantaina', 'Kuukausi sitten', 'Vuonna 2023'],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Milloin kirjaston rakentaminen aloitettiin?',
      options: ['Vuonna 2020', 'Vuonna 2023', 'Kolme kuukautta sitten', 'Tänä vuonna'],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Kuinka paljon rahaa kirjastoon investoitiin?',
      options: ['Yli miljoona euroa', 'Yli viisi miljoonaa euroa', 'Yli kymmenen miljoonaa euroa', 'Yli sata miljoonaa euroa'],
      correctIndex: 2,
    },
    {
      id: 'q4',
      question: 'Ketä haastateltiin paikallisen lehden artikkelissa?',
      options: ['Kaupungin kulttuurijohtajaa', 'Kirjaston johtajaa', 'Rakennusyhtiön toimitusjohtajaa', 'Kaupunginjohtajaa'],
      correctIndex: 0,
    },
    {
      id: 'q5',
      question: 'Mitä huomattiin avajaisaamuna?',
      options: [
        'Kirjasto oli lähes tyhjä.',
        'Satoja ihmisiä nähtiin jonottamassa jo aamulla.',
        'Ovet eivät auenneet ajallaan.',
        'Kirjasto piti sulkea heti turvallisuussyistä.',
      ],
      correctIndex: 1,
    },
  ],
}

export const week15Listening: ListeningExercise = {
  id: 'l-w15',
  weekId: 15,
  title: 'Radiouutiset: Liikenneonnettomuus vältettiin',
  level: 'B1',
  scriptFi: `Uutistenlukija: Hyvää iltaa, tässä ovat päivän tärkeimmät uutiset. Tänään aamulla keskustassa vältettiin vakava liikenneonnettomuus, kun bussi ja henkilöauto törmäsivät melkein risteyksessä. Kukaan ei loukkaantunut vakavasti, mutta yksi henkilö vietiin sairaalaan tarkistuksiin.

Poliisi kertoi, että onnettomuuspaikalla tutkittiin tapahtumia useita tunteja. Todistajia haastateltiin, ja tapauksesta kirjoitettiin raportti. Risteyksen liikennevaloja tarkastettiin myös, koska niitä epäiltiin toimimattomiksi.

Kaupungissa on viime kuukausina keskusteltu risteysten turvallisuudesta, ja asiasta on tehty useita aloitteita valtuustolle. Tänään ilmoitettiin, että risteyksen liikennejärjestelyjä muutetaan ensi kuussa.

Näin oli tämän illan tärkeimmät uutiset. Kiitos kun kuuntelitte.`,
  questions: [
    {
      id: 'q1',
      question: 'Mitä tapahtui keskustassa tänä aamuna?',
      options: [
        'Bussi ja henkilöauto törmäsivät melkein risteyksessä.',
        'Kaksi bussia törmäsi toisiinsa.',
        'Risteyksen liikennevalot rikkoutuivat kokonaan.',
        'Kirjasto avattiin uudestaan.',
      ],
      correctIndex: 0,
    },
    {
      id: 'q2',
      question: 'Mitä yhdelle henkilölle tapahtui?',
      options: [
        'Hänet vietiin sairaalaan tarkistuksiin.',
        'Hän loukkaantui vakavasti.',
        'Hänet pidätettiin.',
        'Hän ei ollut paikalla.',
      ],
      correctIndex: 0,
    },
    {
      id: 'q3',
      question: 'Mitä poliisi teki onnettomuuspaikalla?',
      options: [
        'He sulkivat kadun kokonaan viikoksi.',
        'He tutkivat tapahtumia ja haastattelivat todistajia.',
        'He eivät tehneet mitään.',
        'He korjasivat liikennevalot heti paikan päällä.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Mitä uutisessa ilmoitettiin tapahtuvan ensi kuussa?',
      options: [
        'Risteys suljetaan kokonaan.',
        'Risteyksen liikennejärjestelyjä muutetaan.',
        'Bussilinja lopetetaan.',
        'Uusi kirjasto avataan risteyksen viereen.',
      ],
      correctIndex: 1,
    },
  ],
}

export const week15Writing: WritingPrompt = {
  id: 'w-w15',
  weekId: 15,
  title: 'Kirjoita lyhyt uutinen',
  level: 'B1',
  instructions:
    'Kirjoita lyhyt uutinen jostain tapahtumasta (se voi olla todellinen tai kuvitteellinen), esimerkiksi paikallisesta tapahtumasta, urheilukilpailusta tai onnettomuudesta. Käytä passiivin mennyttä aikaa (esim. avattiin, kerrottiin, järjestettiin) monipuolisesti, kuten uutisissa yleensä tehdään.',
  minWords: 80,
  maxWords: 150,
  timeMinutes: 25,
  rubric: [
    'Valitsit selkeän tapahtuman uutisen aiheeksi.',
    'Käytit passiivin mennyttä aikaa (-ttiin/-tiin) useassa eri lauseessa.',
    'Uutinen vastaa kysymyksiin: mitä tapahtui, missä ja milloin.',
    'Teksti on jäsennelty loogisesti, kuten oikea uutinen.',
    'Kieli on selkeää ja ymmärrettävää.',
  ],
  modelAnswer:
    'Viime lauantaina kaupungin urheilupuistossa järjestettiin suuri juoksutapahtuma, johon osallistui yli tuhat juoksijaa. Tapahtuma aloitettiin aamulla kello kahdeksan, ja reitti kulki kaupungin keskustan läpi.\n\nJärjestäjät kertoivat, että tapahtumaan oli valmistauduttu kuukausia. Reitille oli rakennettu vesipisteitä, ja liikennettä ohjattiin useissa kohdissa. Tapahtumasta kirjoitettiin artikkeli myös paikallislehdessä, jossa haastateltiin voittajaa.\n\nOsallistujilta kerättiin palautetta, ja monet pitivät tapahtumaa onnistuneena. Järjestäjät ilmoittivat, että samanlainen tapahtuma järjestetään uudestaan ensi vuonna.',
}

export const week15Speaking: SpeakingPrompt = {
  id: 's-w15',
  weekId: 15,
  title: 'Kerro tuoreesta uutisesta',
  level: 'B1',
  instructions:
    'Kerro tuoreesta uutisesta, joka on vaikuttanut sinuun tai kiinnostanut sinua. Kerro, mitä tapahtui, missä ja milloin, ja miksi uutinen on mielestäsi tärkeä. Käytä passiivin mennyttä aikaa, kun mahdollista (esim. kerrottiin, ilmoitettiin, päätettiin).',
  prepSeconds: 60,
  speakSeconds: 120,
  helpfulPhrases: [
    'Luin äskettäin uutisen, jossa kerrottiin...',
    'Tapahtuma järjestettiin...',
    'Uutisessa ilmoitettiin, että...',
    'Mielestäni tämä on tärkeää, koska...',
    'Asiasta on keskusteltu paljon mediassa.',
  ],
}
