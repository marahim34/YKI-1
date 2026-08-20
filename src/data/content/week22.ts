import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

// Week 22 — kertausviikko (review week) for weeks 11-21: job search/CV, work
// life, education, Finnish society, media/news, opinions/discussion,
// healthcare, money/finance, environment/nature, traditions/festivals, and
// travel plans/the future, plus the grammar covered in Phase 2 (word
// order/question forms, object cases, conditional, passive present + past,
// relative clauses joka/jotka, MA-infinitive, imperative, expressing the
// future). Content is framed explicitly as cumulative review.

export const week22Reading: ReadingExercise = {
  id: 'r-w22',
  weekId: 22,
  title: 'Kertaus: Uusi alku – opiskelua työn ohella',
  level: 'B1',
  textFi: `Sanna on työskennellyt kolme vuotta ravintola-alalla, mutta viime kuukausina hän on miettinyt tulevaisuuttaan uudelleen. Uutisissa on puhuttu paljon siitä, että Suomessa tarvitaan lisää osaajia sosiaali- ja terveysalalle, ja tämä sai Sannan kiinnostumaan asiasta. Hän päätti hakea lähihoitajakoulutukseen, joka alkaisi syksyllä.

Ennen hakemista Sannan täytyi päivittää CV:nsä ja kirjoittaa hakemus, jossa hän kertoi aiemmasta työkokemuksestaan. Hän kysyi myös neuvoa ystävältään, joka on jo valmistunut samalta alalta. "Jos pääset sisään, sinun kannattaa ehdottomasti ottaa paikka vastaan", ystävä sanoi.

Sanna on myös seurannut aktiivisesti keskustelua, jota käydään suomalaisessa yhteiskunnassa hoiva-alan palkoista ja työoloista. Hänen mielestään palkkojen pitäisi olla korkeampia, koska työ on raskasta ja vastuullista. Toisaalta hän ymmärtää, että rahaa ei ole rajattomasti.

Jos Sanna pääsee opiskelemaan, hänen täytyy säästää rahaa etukäteen, sillä opiskeluaikana tulot pienenevät. Hän on jo alkanut suunnitella budjettiaan tarkemmin. Kesällä hän aikoo silti matkustaa muutaman päivän mökille juhannuksena, ennen kuin uusi elämänvaihe alkaa.`,
  questions: [
    {
      id: 'q1',
      question: 'Miksi Sanna kiinnostui hakemaan lähihoitajakoulutukseen?',
      options: [
        'Koska ystävä pakotti hänet hakemaan.',
        'Koska uutisissa kerrottiin alan työvoimapulasta.',
        'Koska hän vihasi ravintola-alaa.',
        'Koska koulutus oli ilmainen.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Mitä Sannan täytyi tehdä ennen hakemista?',
      options: [
        'Muuttaa toiseen kaupunkiin',
        'Päivittää CV ja kirjoittaa hakemus',
        'Irtisanoutua heti työstään',
        'Osallistua televisio-ohjelmaan',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Mitä ystävä suositteli Sannalle, jos hän pääsee sisään koulutukseen?',
      options: [
        'Odottamaan vielä yhden vuoden',
        'Ottamaan paikan ehdottomasti vastaan',
        'Hakemaan mieluummin toiselle alalle',
        'Kysymään lisää palkkaa nykyiseltä työnantajalta',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Mitä mieltä Sanna on hoiva-alan palkoista?',
      options: [
        'Hänen mielestään ne ovat jo liian korkeat.',
        'Hänen mielestään niiden pitäisi olla korkeampia työn raskauden takia.',
        'Hän ei ole kiinnostunut aiheesta lainkaan.',
        'Hän ajattelee, ettei palkoilla ole väliä.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q5',
      question: 'Mitä Sanna aikoo tehdä kesällä ennen opintojen alkua?',
      options: [
        'Matkustaa ulkomaille kuukaudeksi',
        'Aloittaa opinnot heti',
        'Matkustaa muutaman päivän mökille juhannuksena',
        'Jäädä kotiin lepäämään koko kesäksi',
      ],
      correctIndex: 2,
    },
  ],
}

export const week22Listening: ListeningExercise = {
  id: 'l-w22',
  weekId: 22,
  title: 'Kertaus: Kahvitauolla työpaikalla',
  level: 'B1',
  scriptFi: `Outi: Oletko kuullut, että ensi vuonna monet suomalaiset yritykset aikovat tarjota työntekijöilleen enemmän etätyömahdollisuuksia?
Jussi: Olen kuullut siitä. Uutisissa kerrottiin, että moni haluaisi työskennellä kotoa ainakin pari päivää viikossa.
Outi: Minusta se olisi hyvä asia, koska silloin jäisi enemmän aikaa perheelle ja harrastuksille.
Jussi: Samaa mieltä. Muuten, oletko jo suunnitellut kesälomaasi?
Outi: Olen! Aion matkustaa Lappiin heinäkuussa, jos rahaa riittää. Säästän parhaillaan joka kuukausi vähän lisää.
Jussi: Kuulostaa hyvältä suunnitelmalta. Itse ajattelin jäädä kotiin ja osallistua paikallisiin juhannusjuhliin, joita järjestetään joka vuosi rannalla.
Outi: Se on kiva perinne. Onko sinulla muuten uutta työpaikassa?
Jussi: On, itse asiassa hain viime viikolla ylennystä, ja pomo lupasi vastata pian.
Outi: Toivottavasti saat sen! Kerro heti, kun kuulet jotain.`,
  questions: [
    {
      id: 'q1',
      question: 'Mistä uudistuksesta uutisissa kerrottiin?',
      options: [
        'Palkkojen korotuksesta',
        'Etätyömahdollisuuksien lisäämisestä',
        'Lomapäivien vähentämisestä',
        'Uudesta verolaista',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Mihin Outi aikoo matkustaa kesällä?',
      options: ['Lappiin', 'Ulkomaille', 'Etelä-Suomeen', 'Hän ei matkusta ollenkaan'],
      correctIndex: 0,
    },
    {
      id: 'q3',
      question: 'Mitä Jussi aikoo tehdä juhannuksena?',
      options: [
        'Matkustaa Lappiin Outin kanssa',
        'Osallistua paikallisiin juhannusjuhliin',
        'Työskennellä koko viikonlopun',
        'Muuttaa toiseen kaupunkiin',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Mitä Jussi teki viime viikolla työpaikallaan?',
      options: ['Hän irtisanoutui.', 'Hän haki ylennystä.', 'Hän jäi lomalle.', 'Hän vaihtoi osastoa.'],
      correctIndex: 1,
    },
  ],
}

export const week22Writing: WritingPrompt = {
  id: 'w-w22',
  weekId: 22,
  title: 'Kertaus: Mielipideteksti koulutustuesta',
  level: 'B1',
  instructions:
    'Kirjoita mielipideteksti aiheesta "Pitäisikö aikuisten kouluttautumista tukea taloudellisesti enemmän?". Kerro oma mielipiteesi ja perustele se. Käsittele esimerkkeinä työtä, opiskelua tai raha-asioita, ja käytä ainakin yhtä passiivimuotoa tai relatiivilausetta (joka/jotka).',
  minWords: 100,
  maxWords: 180,
  timeMinutes: 30,
  rubric: [
    'Ilmaisit oman mielipiteesi selkeästi.',
    'Perustelit mielipiteesi ainakin yhdellä konkreettisella syyllä.',
    'Käytit passiivia tai relatiivilausetta (joka/jotka) ainakin kerran.',
    'Mainitsit jotain työhön, opiskeluun tai raha-asioihin liittyvää.',
    'Teksti on jäsennelty selkeästi: aloitus, perustelut, lopetus.',
  ],
  modelAnswer:
    'Mielestäni aikuisten kouluttautumista pitäisi tukea nykyistä enemmän taloudellisesti. Monet aikuiset, jotka haluaisivat vaihtaa alaa tai parantaa osaamistaan, eivät uskalla hakea koulutukseen, koska opintotuki on pieni eivätkä he pysty maksamaan kaikkia laskujaan opiskeluaikana.\n\nJos tukea lisättäisiin, useammalla olisi mahdollisuus siirtyä esimerkiksi aloille, joilla tarvitaan enemmän työntekijöitä, kuten sosiaali- ja terveysalalle. Tämä hyödyttäisi koko yhteiskuntaa, ei vain yksittäistä opiskelijaa.\n\nToisaalta ymmärrän, että valtion rahat eivät riitä kaikkeen. Silti uskon, että pitkällä aikavälillä koulutukseen sijoittaminen maksaa itsensä takaisin, kun ihmiset löytävät työtä, jota he osaavat tehdä hyvin ja josta he pitävät.',
}

export const week22Speaking: SpeakingPrompt = {
  id: 's-w22',
  weekId: 22,
  title: 'Kertaus: Työ, opiskelu ja tulevaisuus',
  level: 'B1',
  instructions:
    'Kerro, miten näet oman tulevaisuutesi työn ja opiskelun suhteen. Käytä esimerkkejä ainakin kahdesta seuraavista aiheista: työelämä, koulutus, raha-asiat tai ympäristö. Kerro myös oma mielipiteesi jostakin ajankohtaisesta aiheesta.',
  prepSeconds: 60,
  speakSeconds: 110,
  helpfulPhrases: [
    'Mielestäni...',
    'Tulevaisuudessa aion...',
    'Toisaalta... mutta toisaalta...',
    'Uskon, että...',
    'On tärkeää, että...',
  ],
}
