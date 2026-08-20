import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week26Reading: ReadingExercise = {
  id: 'r-w26',
  weekId: 26,
  title: 'Digitalisaatio muuttaa arkea',
  level: 'B2',
  textFi: `Digitalisaatio on muuttanut suomalaista yhteiskuntaa niin nopeasti, että moni asia, joka kymmenen vuotta sitten hoidettiin paperilla tai käymällä paikan päällä virastossa, hoituu nykyään muutamalla näppäimen painalluksella. Pankkiasiat, verotus ja terveydenhuollon ajanvaraukset ovat esimerkkejä palveluista, jotka on siirretty verkkoon. Jos kehitys jatkuisi nykyisellä vauhdilla, muutaman vuoden kuluttua yhä harvempi palvelu vaatisi enää fyysistä asiointia lainkaan.

Kehityksellä on kuitenkin myös kääntöpuolensa. Kaikilla ei ole yhtäläisiä valmiuksia tai laitteita käyttää digitaalisia sovelluksia, ja etenkin ikääntyneet sekä osa maahanmuuttajista voivat jäädä palveluiden ulkopuolelle. Asiantuntijat pohtivat, voitaisiinko digitalisaation etenemistä hidastaa valikoiduilla alueilla niin, että rinnalla säilytettäisiin aina myös perinteisempi vaihtoehto niille, jotka sitä tarvitsevat.

Tietoturva on toinen keskeinen huolenaihe. Jos yhä useampi palvelu siirrettäisiin kokonaan verkkoon, tietomurtojen seuraukset voisivat olla nykyistä paljon vakavampia, koska yhä suurempi osa arkielämästä olisi riippuvainen toimivista järjestelmistä. Moni asiantuntija ehdottaa, että ennen uusien sovellusten käyttöönottoa tietoturvariskit tulisi arvioida nykyistä huolellisemmin, jotta luottamus digitaalisiin palveluihin ei murenisi.

Kaiken kaikkiaan digitalisaatio tarjoaa valtavia mahdollisuuksia, mutta sen hyötyjä ei voida jakaa tasapuolisesti, ellei kehitystä tehtäisi tietoisesti kaikki käyttäjäryhmät huomioiden.`,
  questions: [
    {
      id: 'q1',
      question: 'Mitä esimerkkejä tekstissä annetaan verkkoon siirretyistä palveluista?',
      options: [
        'Ruokakaupat ja vaatekaupat.',
        'Pankkiasiat, verotus ja terveydenhuollon ajanvaraukset.',
        'Vain kirjastopalvelut.',
        'Julkinen liikenne.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Ketkä saattavat tekstin mukaan jäädä digitaalisten palveluiden ulkopuolelle?',
      options: [
        'Nuoret aikuiset.',
        'Ikääntyneet ja osa maahanmuuttajista.',
        'Kaikki suomalaiset yhtä lailla.',
        'Vain suurten kaupunkien asukkaat.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Miksi tietoturva on tekstin mukaan yhä tärkeämpää digitalisaation edetessä?',
      options: [
        'Koska tietomurrot ovat käytännössä loppuneet kokonaan.',
        'Koska yhä suurempi osa arkielämästä olisi riippuvainen toimivista digitaalisista järjestelmistä.',
        'Koska tietoturva ei tekstin mukaan liity digitalisaatioon lainkaan.',
        'Koska kaikki palvelut on jo siirretty pois verkosta.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Mitä asiantuntijat pohtivat ratkaisuksi eriarvoisuuden ehkäisemiseen?',
      options: [
        'Perinteisten asiointitapojen poistamista kokonaan.',
        'Sitä, voitaisiinko digitalisaation etenemistä hidastaa ja säilyttää rinnalla perinteinen vaihtoehto.',
        'Kaikkien palveluiden pakollista siirtoa verkkoon välittömästi.',
        'Internetyhteyksien katkaisemista maaseudulla.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q5',
      question: 'Mikä on tekstin päätarkoitus?',
      options: [
        'Väittää, että digitalisaatiosta ei ole mitään hyötyä.',
        'Tarkastella digitalisaation hyötyjä ja riskejä tasapainoisesti sekä korostaa, että kehitys pitäisi tehdä kaikki käyttäjäryhmät huomioiden.',
        'Kertoa yksityiskohtaisesti yhden sovelluksen teknisistä ominaisuuksista.',
        'Suositella, että kaikki asiointi palautetaan takaisin paperille.',
      ],
      correctIndex: 1,
    },
  ],
}

export const week26Listening: ListeningExercise = {
  id: 'l-w26',
  weekId: 26,
  title: 'Palaveri uuden sovelluksen käyttöönotosta',
  level: 'B2',
  scriptFi: `Projektipäällikkö: Käydään läpi, miten uusi asiakassovellus otettaisiin käyttöön. Ehdotukseni on, että se julkaistaisiin jo ensi kuussa.
Tietoturva-asiantuntija: Odotahan hetki. Jos sovellus julkaistaisiin niin nopeasti, emme ehtisi testata tietoturvaa kunnolla. Suosittelisin, että aikataulua siirrettäisiin ainakin kuukaudella.
Projektipäällikkö: Ymmärrän huolen, mutta johto odottaa tuloksia pian. Eikö riittäisi, että tehtäisiin vain perustestaus?
Tietoturva-asiantuntija: Ei oikeastaan. Jos emme testaisi huolellisesti, riskinä olisi, että käyttäjätietoja vuotaisi julkisuuteen. Sellainen skandaali maksaisi meille paljon enemmän kuin kuukauden viivästys.
Käyttäjäkokemussuunnittelija: Voisiko olla kompromissi? Voitaisiinko julkaista ensin suppeampi versio rajatulle käyttäjäryhmälle, jotta saataisiin palautetta samalla, kun tietoturvatestit jatkuisivat?
Projektipäällikkö: Se kuulostaa itse asiassa hyvältä idealta. Silloin voitaisiin edetä osittain aikataulussa ilman, että turvallisuudesta tingittäisiin.
Tietoturva-asiantuntija: Olen samaa mieltä, kunhan täysi julkaisu tehtäisiin vasta sitten, kun kaikki testit olisi läpäisty hyväksytysti.
Projektipäällikkö: Sovitaan näin. Valmistellaan siis rajattu pilottijulkaisu, ja täysi julkaisu siirretään myöhemmäksi.`,
  questions: [
    {
      id: 'q1',
      question: 'Mitä projektipäällikkö ehdotti alun perin?',
      options: [
        'Että sovellusta ei julkaista koskaan.',
        'Että sovellus julkaistaisiin jo ensi kuussa.',
        'Että projekti lopetetaan kokonaan.',
        'Että sovellus testataan vuoden ajan.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Miksi tietoturva-asiantuntija vastustaa nopeaa aikataulua?',
      options: [
        'Koska hän ei pidä uudesta sovelluksesta lainkaan.',
        'Koska riittämätön testaus voisi johtaa käyttäjätietojen vuotamiseen.',
        'Koska hän haluaa itse johtaa projektia.',
        'Koska budjettia ei ole vielä hyväksytty.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Mitä käyttäjäkokemussuunnittelija ehdottaa kompromissiksi?',
      options: [
        'Sovelluksen kehittämisen lopettamista kokonaan.',
        'Suppeamman pilottiversion julkaisemista rajatulle ryhmälle testien jatkuessa.',
        'Kaikkien tietoturvatestien poistamista.',
        'Sovelluksen julkaisemista vasta kahden vuoden kuluttua.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Mitä palaverin lopputulos todella kertoo osallistujien prioriteeteista?',
      options: [
        'Että aikataulu on tärkeämpi kuin tietoturva kaikille osallistujille.',
        'Että osallistujat päätyivät ratkaisuun, joka pyrkii yhdistämään sekä nopeuden että tietoturvan huomioimisen.',
        'Että tietoturva-asiantuntija hävisi keskustelun täysin.',
        'Että projekti keskeytetään toistaiseksi kokonaan.',
      ],
      correctIndex: 1,
    },
  ],
}

export const week26Writing: WritingPrompt = {
  id: 'w-w26',
  weekId: 26,
  title: 'Pohtiva essee: Tekoälyn rooli tulevaisuuden yhteiskunnassa',
  level: 'B2',
  instructions:
    'Kirjoita pohtiva essee aiheesta "Miten tekoälyä ja digitalisaatiota voitaisiin hyödyntää yhteiskunnassa vastuullisesti?". Pohdi, mitä voitaisiin tehdä ja mitä pitäisi välttää. Käytä tekstissäsi passiivin konditionaalia (esim. "voitaisiin", "tehtäisiin", "otettaisiin käyttöön").',
  minWords: 180,
  maxWords: 260,
  timeMinutes: 40,
  rubric: [
    'Esitit selkeän näkökulman tai väitteen heti alussa.',
    'Käytit vähintään kolmea passiivin konditionaalin muotoa luontevasti (esim. "voitaisiin", "tehtäisiin").',
    'Pohdit sekä mahdollisuuksia että riskejä.',
    'Käytit argumentoivia konnektoreita (esim. toisaalta, kuitenkin, tämän vuoksi).',
    'Teksti on jäsennelty selkeästi: johdanto, pohdinta ja lopetus.',
  ],
  modelAnswer:
    'Tekoälyä ja digitalisaatiota voitaisiin hyödyntää yhteiskunnassa monin tavoin, mutta vastuullisuus vaatisi mielestäni nykyistä tarkempia pelisääntöjä.\n\nJos tekoälyä käytettäisiin esimerkiksi terveydenhuollossa diagnoosien tukena, lääkärit voisivat säästää aikaa ja potilaat saisivat nopeammin apua. Samoin julkishallinnossa monia rutiinitehtäviä voitaisiin automatisoida, jolloin virkailijoiden aika vapautuisi monimutkaisempien asioiden hoitamiseen.\n\nToisaalta, jos päätöksiä tehtäisiin liikaa pelkän algoritmin varassa ilman ihmisen valvontaa, riskinä olisi, että virheitä ei huomattaisi ajoissa tai että tietyt ihmisryhmät kohdeltaisiin epäoikeudenmukaisesti. Tämän vuoksi olisi tärkeää, että kaikki merkittävät päätökset tarkistettaisiin aina myös ihmisen toimesta.\n\nLisäksi, jos tekoälyjärjestelmiä otettaisiin käyttöön nopeasti ilman kunnollista tietoturva-arviointia, luottamus koko digitalisaatioon voisi horjua. Siksi uusia järjestelmiä ei pitäisi julkaista, ennen kuin niiden turvallisuus ja oikeudenmukaisuus olisi testattu huolellisesti.\n\nKaiken kaikkiaan uskon, että tekoälystä voitaisiin saada suurin hyöty vain, jos kehitys tehtäisiin avoimesti ja ihmiskeskeisesti, ei pelkän tehokkuuden ehdoilla.',
}

export const week26Speaking: SpeakingPrompt = {
  id: 's-w26',
  weekId: 26,
  title: 'Ehdota ratkaisua digitalisaation haasteeseen',
  level: 'B2',
  instructions:
    'Kuvittele, että osallistut työpaikkasi palaveriin, jossa pohditaan, miten uusi digitaalinen järjestelmä otettaisiin käyttöön. Esitä oma ehdotuksesi siitä, mitä voitaisiin tehdä, jotta järjestelmä olisi sekä toimiva että turvallinen. Käytä passiivin konditionaalia.',
  prepSeconds: 60,
  speakSeconds: 120,
  helpfulPhrases: [
    'Mielestäni voitaisiin ensin...',
    'Jos näin tehtäisiin, saavutettaisiin...',
    'Riskinä olisi, että...',
    'Sen sijaan kannattaisi kokeilla, voitaisiinko...',
    'Lopulta päätös pitäisi tehdä niin, että...',
  ],
}
