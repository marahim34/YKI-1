import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week23Reading: ReadingExercise = {
  id: 'r-w23',
  weekId: 23,
  title: 'Suora vai epäsuora viestintä?',
  level: 'B1',
  textFi: `Suomalaista työelämän viestintäkulttuuria pidetään usein melko suorana. Kokouksissa mennään yleensä nopeasti asiaan, eikä pitkiä kohteliaisuuksia tarvita ennen varsinaisen aiheen käsittelyä. Monelle Suomeen muuttaneelle tämä voi aluksi tuntua jopa töykeältä, mutta kyse ei ole epäkohteliaisuudesta – suoruus nähdään pikemminkin merkkinä rehellisyydestä ja tehokkuudesta.

Toisaalta suomalaisessa työkulttuurissa arvostetaan myös hiljaisuutta. Tauko keskustelussa ei tarkoita, että jotain olisi vialla; se voi yksinkertaisesti tarkoittaa, että toinen osapuoli miettii vastaustaan huolellisesti. Monissa muissa kulttuureissa hiljaisuus keskustelussa saatetaan kokea epämukavana, ja se täytetään nopeasti puheella.

Työyhteisöissä, joissa on työntekijöitä monista eri maista, väärinymmärryksiä syntyy helposti juuri näiden erojen takia. Siksi monet asiantuntijat suosittelevat, että uusi työntekijä kysyy rohkeasti, jos jokin viestintätilanne jää epäselväksi. On myös hyödyllistä tarkkailla, miten kokeneemmat kollegat viestivät kokouksissa ja sähköposteissa.

Vaikka suora viestintätyyli voi tuntua vieraalta, siihen tottuu yleensä ajan myötä. Monet maahanmuuttajat kertovat, että he ovat oppineet arvostamaan suomalaista suoruutta, koska sen ansiosta työasioista puhutaan selkeästi eikä väärinkäsityksiä jää ilmaan roikkumaan.`,
  questions: [
    {
      id: 'q1',
      question: 'Miksi suomalaista viestintää pidetään usein suorana?',
      options: [
        'Koska kokouksissa käytetään paljon aikaa kohteliaisuuksiin.',
        'Koska asiaan mennään nopeasti ilman pitkiä kohteliaisuuksia.',
        'Koska suomalaiset eivät koskaan sano suoraan mielipidettään.',
        'Koska hiljaisuutta pidetään epäkohteliaana.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Mitä tekstin mukaan hiljaisuus keskustelussa usein tarkoittaa suomalaisessa kulttuurissa?',
      options: [
        'Että keskustelukumppani on loukkaantunut.',
        'Että keskustelu on päättynyt.',
        'Että toinen miettii vastaustaan huolellisesti.',
        'Että toinen ei ymmärtänyt kysymystä.',
      ],
      correctIndex: 2,
    },
    {
      id: 'q3',
      question: 'Mitä asiantuntijat suosittelevat uudelle työntekijälle?',
      options: [
        'Olemaan hiljaa, kunnes ymmärtää kulttuurin täysin.',
        'Kysymään rohkeasti, jos viestintätilanne on epäselvä.',
        'Välttämään kokeneempien kollegoiden kanssa keskustelua.',
        'Vaihtamaan työpaikkaa, jos viestintä tuntuu vieraalta.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Minkä asian moni maahanmuuttaja kertoo oppineensa arvostamaan?',
      options: [
        'Pitkiä ja muodollisia kokouksia.',
        'Suomalaista suoruutta, koska se vähentää väärinkäsityksiä.',
        'Sitä, että työasioista ei koskaan puhuta suoraan.',
        'Sitä, että hiljaisuutta pitää aina välttää.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q5',
      question: 'Mikä on tekstin päätarkoitus?',
      options: [
        'Kritisoida suomalaista työkulttuuria.',
        'Selittää suoran viestintätyylin taustaa ja antaa neuvoja sopeutumiseen.',
        'Verrata suomalaista ja ruotsalaista työelämää.',
        'Kertoa, miten kokouksia pitäisi järjestää.',
      ],
      correctIndex: 1,
    },
  ],
}

export const week23Listening: ListeningExercise = {
  id: 'l-w23',
  weekId: 23,
  title: 'Väärinymmärrys palaverissa',
  level: 'B1',
  scriptFi: `Johtaja: Käydään läpi projektin tilanne. Miten aikataulu etenee?
Liisa: No, ihan hyvin, mutta on siinä pieniä haasteita.
Johtaja: Selvä. Entä sinä, Karim, miten sinun osuutesi sujuu?
Karim: Minun mielestäni kaikki sujuu erinomaisesti! Olemme jo edellä aikataulusta.
Johtaja: Hyvä kuulla. Liisa, voisitko tarkentaa, mitä haasteita tarkoitit?
Liisa: Itse asiassa aikataulu on aika tiukka, ja yksi tiimin jäsen on ollut sairaana. Luulen, että emme ehdi valmiiksi sovittuun päivään mennessä ilman lisäapua.
Johtaja: Ahaa, tämä kuulostaa vakavammalta kuin ensin ymmärsin. Kiitos, että kerroit suoraan. Karim, voisitko sinä auttaa Liisan tiimiä pari päivää tällä viikolla?
Karim: Toki, ei ongelmaa. Sanon vain heti, jos aikatauluni ei anna periksi.
Johtaja: Hyvä. Puhutaan tästä tarkemmin huomenna vielä uudelleen.`,
  questions: [
    {
      id: 'q1',
      question: 'Mitä Liisa tarkoitti alun perin sanoessaan, että projekti sujuu "ihan hyvin, mutta on pieniä haasteita"?',
      options: [
        'Että kaikki on täydellisesti aikataulussa.',
        'Että tilanne on itse asiassa melko vakava.',
        'Että hän ei halua puhua projektista.',
        'Että Karimin osuus on myöhässä.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Miksi Liisan tiimi voi jäädä aikataulusta jälkeen?',
      options: [
        'Koska budjetti loppui.',
        'Koska yksi tiimin jäsen on ollut sairaana.',
        'Koska johtaja ei ole antanut ohjeita.',
        'Koska Karim ei auta heitä.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Mitä johtaja pyytää Karimia tekemään?',
      options: [
        'Ottamaan kokonaan vastuun Liisan projektista.',
        'Auttamaan Liisan tiimiä pari päivää tällä viikolla.',
        'Palkkaamaan uuden työntekijän.',
        'Siirtämään koko aikataulua kuukaudella.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Mitä tämä keskustelu kuvaa viestintätyylien erosta?',
      options: [
        'Karim viestii epäsuorasti ja Liisa hyvin suoraan alusta asti.',
        'Karimin ensireaktio oli hyvin positiivinen, kun taas Liisa kertoi ongelmasta vasta tarkentavan kysymyksen jälkeen.',
        'Johtaja ei ole kiinnostunut kummankaan mielipiteestä.',
        'Kukaan ei kerro totuutta koko keskustelussa.',
      ],
      correctIndex: 1,
    },
  ],
}

export const week23Writing: WritingPrompt = {
  id: 'w-w23',
  weekId: 23,
  title: 'Mielipidekirjoitus: Etätyö vai toimistotyö?',
  level: 'B2',
  instructions:
    'Kirjoita mielipidekirjoitus aiheesta "Onko etätyö parempi kuin toimistotyö?". Esitä oma mielipiteesi ja perustele se vähintään kahdella syyllä. Ota huomioon myös vastakkainen näkökulma (esim. "toisaalta..."). Käytä argumentoivaa kieltä ja sivulauseita.',
  minWords: 150,
  maxWords: 250,
  timeMinutes: 40,
  rubric: [
    'Ilmaisit selkeän oman mielipiteen heti alussa.',
    'Perustelit mielipiteesi vähintään kahdella konkreettisella syyllä.',
    'Otit huomioon myös vastakkaisen näkökulman (esim. "toisaalta", "vaikka").',
    'Käytit sivulauseita ja konnektoreita (koska, vaikka, kun taas, sen sijaan).',
    'Teksti on jäsennelty: johdanto, perustelut, lopetus/yhteenveto.',
  ],
  modelAnswer:
    'Mielestäni etätyö on monessa tilanteessa parempi vaihtoehto kuin perinteinen toimistotyö, vaikka molemmilla malleilla on omat etunsa.\n\nEnsinnäkin etätyö säästää aikaa, koska työmatkoihin ei kulu tunteja viikossa. Tämä aika voidaan käyttää lepoon tai perheen kanssa olemiseen. Toiseksi moni ihminen keskittyy paremmin kotona, jossa ei ole jatkuvia keskeytyksiä avokonttorista.\n\nToisaalta on totta, että toimistotyö tukee paremmin yhteisöllisyyttä ja spontaania yhteistyötä, joka voi jäädä etätyössä vähemmälle. Uusien työntekijöiden voi myös olla vaikeampi oppia työn käytäntöjä pelkän etäyhteyden kautta.\n\nTästä huolimatta uskon, että joustava, molempia malleja yhdistävä ratkaisu on useimmille paras: se antaa keskittymisrauhaa mutta säilyttää myös yhteisen tekemisen hetket.',
}

export const week23Speaking: SpeakingPrompt = {
  id: 's-w23',
  weekId: 23,
  title: 'Referoi kollegan puheenvuoro',
  level: 'B2',
  instructions:
    'Kuvittele, että olit kokouksessa, jossa kollegasi Karim sanoi: "Meidän pitäisi siirtää projektin määräaikaa viikolla, koska tiimi tarvitsee lisäaikaa testaukseen." Kerro nyt esimiehellesi epäsuorasti, mitä Karim sanoi kokouksessa (käytä referointia: "Karim sanoi, että..."), ja anna oma näkemyksesi asiasta.',
  prepSeconds: 60,
  speakSeconds: 120,
  helpfulPhrases: [
    'Karim sanoi, että...',
    'Hänen mielestään...',
    'Itse ajattelen, että...',
    'Toisaalta on myös mahdollista, että...',
    'Ehdotan, että...',
  ],
}
