import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week24Reading: ReadingExercise = {
  id: 'r-w24',
  weekId: 24,
  title: 'Koulutuspolitiikka murroksessa',
  level: 'B2',
  textFi: `Suomalainen koulutusjärjestelmä on vuosikymmenten ajan ollut kansainvälisesti arvostettu, mutta viime vuosina yhä useampi asiantuntija on esittänyt huolensa sen tulevaisuudesta. Hallituksen viime keväänä tekemä päätös leikata korkeakoulujen rahoitusta on herättänyt laajaa keskustelua opettajien, opiskelijoiden ja tutkijoiden keskuudessa. Monet pelkäävät, että äskettäin toteutettu uudistus heikentää koulutuksen laatua pitkällä aikavälillä, vaikka lyhyellä aikavälillä säästöt näyttävätkin houkuttelevilta.

Opetusministeriön julkaisema raportti nostaa esiin myös alueellisen eriarvoisuuden kasvun. Raportin mukaan pääkaupunkiseudulla kasvaneilla nuorilla on huomattavasti paremmat mahdollisuudet päästä haluamaansa koulutukseen kuin pienillä paikkakunnilla asuvilla. Ulkomailla opiskeltuaan moni nuori tutkija on lisäksi todennut, ettei Suomeen enää kannata palata, koska tutkimusrahoitus on niukkaa ja urapolut epävarmoja.

Toisaalta on syytä muistaa, että aiemmin tehdyt uudistukset ovat myös tuottaneet myönteisiä tuloksia. Esimerkiksi ammatillisen koulutuksen uudistus, joka toteutettiin muutama vuosi sitten, on parantanut monen opiskelijan mahdollisuuksia yhdistää työ ja opiskelu joustavasti. Valmistuttuaan tästä uudistetusta järjestelmästä yhä useampi nuori on työllistynyt aiempaa nopeammin.

Koulutuspolitiikan tulevaisuus riippuu lopulta siitä, uskaltaako yhteiskunta investoida pitkäjänteisesti osaamiseen vai valitaanko helpompi, lyhytnäköinen säästölinja.`,
  questions: [
    {
      id: 'q1',
      question: 'Mikä on herättänyt laajaa keskustelua koulutuksen kentällä?',
      options: [
        'Hallituksen päätös lisätä korkeakoulujen rahoitusta.',
        'Hallituksen tekemä päätös leikata korkeakoulujen rahoitusta.',
        'Uusi laki, joka koskee vain peruskouluja.',
        'Opettajien palkkojen nousu.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Mitä opetusministeriön raportti kertoo alueellisesta tilanteesta?',
      options: [
        'Kaikilla nuorilla on Suomessa täysin yhtäläiset mahdollisuudet koulutukseen.',
        'Pienillä paikkakunnilla asuvilla on paremmat mahdollisuudet kuin pääkaupunkiseudulla kasvaneilla.',
        'Pääkaupunkiseudulla kasvaneilla on paremmat mahdollisuudet päästä haluamaansa koulutukseen.',
        'Alueellinen eriarvoisuus on tekstin mukaan hävinnyt kokonaan.',
      ],
      correctIndex: 2,
    },
    {
      id: 'q3',
      question: 'Miksi moni ulkomailla opiskellut nuori tutkija ei halua palata Suomeen?',
      options: [
        'Koska Suomessa ei ole lainkaan yliopistoja.',
        'Koska tutkimusrahoitus on niukkaa ja urapolut epävarmoja.',
        'Koska ulkomailla palkat ovat aina pienemmät.',
        'Koska he eivät osaa enää suomen kieltä.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Mitä esimerkkiä tekstissä käytetään osoittamaan, että uudistukset voivat myös onnistua?',
      options: [
        'Peruskoulujen ruokailuaikojen muutosta.',
        'Ammatillisen koulutuksen uudistusta, joka on parantanut työ- ja opiskelumahdollisuuksien yhdistämistä.',
        'Korkeakoulujen rahoituksen leikkausta.',
        'Yliopistojen sulkemista pienillä paikkakunnilla.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q5',
      question: 'Mikä on tekstin päätarkoitus?',
      options: [
        'Osoittaa, että kaikki koulutusuudistukset ovat aina epäonnistuneet.',
        'Esittää tasapainoisesti sekä huolia että myönteisiä esimerkkejä ja pohtia koulutuspolitiikan pitkän aikavälin suuntaa.',
        'Kertoa yksityiskohtaisesti yhden koulun historiasta.',
        'Vaatia, että kaikki korkeakoulut lakkautetaan.',
      ],
      correctIndex: 1,
    },
  ],
}

export const week24Listening: ListeningExercise = {
  id: 'l-w24',
  weekId: 24,
  title: 'Keskusteluohjelma koulutusleikkauksista',
  level: 'B2',
  scriptFi: `Toimittaja: Tervetuloa ohjelmaan keskustelemaan koulutuspolitiikan tulevaisuudesta. Kansanedustaja Aalto, hallitus on perustellut leikkauksia sillä, että valtion talous on vaikeassa tilanteessa. Onko tämä ainoa syy?
Aalto: Taloudellinen tilanne on tietysti keskeinen syy, mutta haluan myös korostaa, että tavoitteenamme on tehostaa koulutusjärjestelmää, emme heikentää sitä.
Nieminen: Jos saan sanoa, käytännössä tehdyt leikkaukset kuitenkin tarkoittavat, että esimerkiksi tutkimusryhmien rahoitus vähenee merkittävästi jo ensi vuonna. "Tehostaminen" on kaunis sana, mutta todellisuudessa kyse on resurssien vähentämisestä.
Toimittaja: Aalto, miten vastaatte tähän kritiikkiin?
Aalto: Ymmärrän huolen, mutta uskon, että pidemmällä aikavälillä uudistus tuo säästöjä, joita voidaan myöhemmin ohjata takaisin koulutukseen.
Nieminen: "Myöhemmin" on aika epämääräinen lupaus, kun opiskelijat kärsivät jo nyt tehtyjen päätösten seurauksista.
Toimittaja: Näyttää siltä, että näkemyksenne eroavat selvästi siitä, mitä uudistus todellisuudessa tarkoittaa käytännössä.
Aalto: Ehkä niin, mutta olen silti valmis keskustelemaan yksityiskohdista avoimesti.
Nieminen: Toivottavasti se johtaa myös konkreettisiin muutoksiin, ei pelkkiin sanoihin.`,
  questions: [
    {
      id: 'q1',
      question: 'Mihin hallitus vetoaa perustellessaan koulutusleikkauksia?',
      options: [
        'Kansainvälisiin vertailuihin.',
        'Valtion talouden vaikeaan tilanteeseen.',
        'Opiskelijoiden omaan toiveeseen.',
        'Uuteen tutkimustulokseen.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Mitä Nieminen todella tarkoittaa sanoessaan, että "tehostaminen on kaunis sana"?',
      options: [
        'Että sana "tehostaminen" kuulostaa hänen mielestään kauniilta.',
        'Että kyse on hänen mielestään tosiasiassa resurssien vähentämisestä, vaikka se naamioidaan positiiviseksi sanaksi.',
        'Että hän on samaa mieltä Aallon kanssa uudistuksen hyödyistä.',
        'Että hän ei ymmärrä, mitä sana tarkoittaa.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Mitä Aalto lupaa pidemmällä aikavälillä?',
      options: [
        'Että leikkauksia lisätään edelleen.',
        'Että säästöjä voidaan myöhemmin ohjata takaisin koulutukseen.',
        'Että kaikki tutkimusrahoitus palautuu heti ensi vuonna.',
        'Että hän eroaa tehtävästään.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Millainen on keskustelun kokonaissävy lopussa?',
      options: [
        'Molemmat ovat päätyneet täysin samaan mielipiteeseen.',
        'Erimielisyys jatkuu, mutta molemmat suostuvat jatkamaan keskustelua yksityiskohdista.',
        'Keskustelu päättyy riitaan, eikä kumpikaan halua enää puhua aiheesta.',
        'Toimittaja keskeyttää keskustelun kokonaan.',
      ],
      correctIndex: 1,
    },
  ],
}

export const week24Writing: WritingPrompt = {
  id: 'w-w24',
  weekId: 24,
  title: 'Mielipidekirjoitus: Pitäisikö korkeakoulutuksen olla täysin maksutonta?',
  level: 'B2',
  instructions:
    'Kirjoita mielipidekirjoitus aiheesta "Pitäisikö korkeakoulutuksen olla täysin maksutonta kaikille, myös EU:n ulkopuolelta tuleville opiskelijoille?". Perustele kantasi vähintään kahdella syyllä ja käsittele myös vastakkaista näkökulmaa. Käytä tekstissäsi NUT-partisiippirakenteita (esim. "tehty päätös", "opiskeltuaan ulkomailla", "toteutettu uudistus").',
  minWords: 180,
  maxWords: 260,
  timeMinutes: 40,
  rubric: [
    'Ilmaisit selkeän oman kannan heti kirjoituksen alussa.',
    'Perustelit kantasi vähintään kahdella konkreettisella syyllä.',
    'Käsittelit myös vastakkaista näkökulmaa (esim. "toisaalta", "vaikka").',
    'Käytit vähintään kahta NUT-partisiippirakennetta luontevasti (esim. "tehty päätös", "valmistuttuaan").',
    'Teksti on jäsennelty selkeästi: johdanto, perustelut ja lopetus.',
  ],
  modelAnswer:
    'Mielestäni korkeakoulutuksen tulisi pysyä maksuttomana suomalaisille ja EU-kansalaisille, mutta myös EU:n ulkopuolelta tuleville opiskelijoille suunnattuja stipendejä tulisi lisätä nykyisestä.\n\nEnsinnäkin viime vuosikymmeninä tehty päätös pitää koulutus maksuttomana on tasoittanut lähtökohtia perhetaustasta riippumatta. Vähävaraisesta perheestä tuleva nuori pääsee samoihin mahdollisuuksiin kuin varakkaammasta perheestä ponnistava, eikä opintoja tarvitse jättää kesken taloudellisista syistä. Toiseksi ulkomailla opiskeltuaan moni suomalainen tutkija on tuonut mukanaan uutta osaamista, mikä osoittaa, ettei koulutuksen arvoa pidä laskea vain sen hinnassa.\n\nToisaalta on totta, että viime vuosina toteutettu lukukausimaksu-uudistus EU:n ulkopuolisille opiskelijoille on tuonut yliopistoille kaivattuja lisätuloja, joita on voitu käyttää opetuksen laadun parantamiseen. Tätä näkökulmaa ei kannata vähätellä täysin.\n\nSiitä huolimatta uskon, että pitkällä aikavälillä avoin ja saavutettava koulutusjärjestelmä hyödyttää koko yhteiskuntaa enemmän kuin lyhytnäköiset lisätulot, minkä vuoksi maksuttomuutta kannattaisi laajentaa eikä supistaa.',
}

export const week24Speaking: SpeakingPrompt = {
  id: 's-w24',
  weekId: 24,
  title: 'Selitä koulutusuudistuksen vaikutukset',
  level: 'B2',
  instructions:
    'Kuvittele, että ystäväsi kysyy, mitä mieltä olet viime vuosina tehdyistä koulutusleikkauksista ja niiden vaikutuksista. Kerro, mikä on muuttunut, viittaa tehtyihin päätöksiin ja opiskeltuasi/valmistuttuasi hankittuun näkemykseesi, ja esitä oma mielipiteesi asiasta perustellen.',
  prepSeconds: 60,
  speakSeconds: 120,
  helpfulPhrases: [
    'Viime vuosina tehty päätös on vaikuttanut siihen, että...',
    'Opiskeltuani/Valmistuttuani olen huomannut, että...',
    'Toteutettu uudistus on mielestäni...',
    'Toisaalta on myös hyviä puolia, esimerkiksi...',
    'Kokonaisuutena ajattelen, että...',
  ],
}
