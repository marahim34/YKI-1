import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week27Reading: ReadingExercise = {
  id: 'r-w27',
  weekId: 27,
  title: 'Kulttuurin merkitys yhteiskunnassa',
  level: 'B2',
  textFi: `Taiteen ja kulttuurin rahoituksesta käydään Suomessa säännöllisesti keskustelua, ja usein kysymys kiteytyy siihen, nähdäänkö kulttuuri välttämättömänä osana yhteiskuntaa vai pikemminkin ylellisyytenä, josta voidaan tarvittaessa tinkiä. Monen taiteilijan ja tutkijan mielestä kysymyksenasettelu on kuitenkin harhaanjohtava, sillä kulttuurin ymmärtäminen pelkkänä viihteenä sivuuttaa sen laajemman yhteiskunnallisen merkityksen.

Taiteen tekeminen ja kokeminen tukevat tutkimusten mukaan ihmisten hyvinvointia monella tavalla. Esimerkiksi musiikin kuunteleminen ja kirjallisuuden lukeminen on yhdistetty stressin vähentymiseen, kun taas yhteisöllinen esiintyminen, kuten teatterin tekeminen tai kuorossa laulaminen, vahvistaa osallistujien yhteenkuuluvuuden tunnetta. Näiden vaikutusten tunnistaminen on saanut yhä useamman kunnan pohtimaan kulttuuripalveluiden roolia osana hyvinvointipolitiikkaa pelkän viihdykkeen sijaan.

Kulttuurin taloudellista merkitystä ei myöskään pidä vähätellä. Kulttuurialan työllistävä vaikutus ulottuu taiteilijoiden lisäksi tapahtumatuotantoon, matkailuun ja luoviin aloihin laajemminkin. Kaupunkien elinvoimaisuuden kannalta monipuolinen kulttuuritarjonta on usein ratkaisevassa asemassa, kun nuoret perheet tai osaajat valitsevat asuinpaikkaansa.

Kulttuurin ymmärtäminen ainoastaan taloudellisena resurssina jättäisi kuitenkin huomiotta jotain olennaista: taiteen kyvyn haastaa ajattelua, herättää keskustelua ja tarjota tilaa yhteiskunnalliselle itsetutkiskelulle. Juuri tämä yhdistelmä – hyvinvoinnin tukeminen, taloudellinen merkitys ja yhteiskunnallinen keskustelu – tekee kulttuurista huomattavasti moniulotteisemman ilmiön kuin pelkän vapaa-ajan harrastuksen.`,
  questions: [
    {
      id: 'q1',
      question: 'Mikä kysymys tekstin mukaan usein toistuu kulttuurikeskustelussa?',
      options: [
        'Onko kulttuuri kiellettävä kokonaan.',
        'Nähdäänkö kulttuuri välttämättömänä osana yhteiskuntaa vai ylellisyytenä.',
        'Pitäisikö kulttuuria opettaa vain yliopistoissa.',
        'Onko taidetta olemassa lainkaan Suomessa.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Millaisia hyvinvointivaikutuksia tekstissä mainitaan taiteen kokemiselle?',
      options: [
        'Ei mitään mitattavia vaikutuksia.',
        'Stressin vähentyminen ja yhteenkuuluvuuden tunteen vahvistuminen.',
        'Ainoastaan taloudellinen hyöty.',
        'Kielitaidon heikkeneminen.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Miten kulttuuriala tekstin mukaan vaikuttaa talouteen?',
      options: [
        'Se ei työllistä ketään.',
        'Sen työllistävä vaikutus ulottuu taiteilijoiden lisäksi esimerkiksi tapahtumatuotantoon ja matkailuun.',
        'Se vaikuttaa vain suurten kaupunkien budjettiin.',
        'Se vähentää matkailua merkittävästi.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Mitä tekstin mukaan jäisi huomiotta, jos kulttuuri ymmärrettäisiin vain taloudellisena resurssina?',
      options: [
        'Kulttuurin kyky työllistää ihmisiä.',
        'Taiteen kyky haastaa ajattelua ja herättää yhteiskunnallista keskustelua.',
        'Kulttuurin vaikutus matkailuun.',
        'Kulttuurin hinta.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q5',
      question: 'Mikä on tekstin päätarkoitus?',
      options: [
        'Osoittaa, että kulttuuri on pelkkää viihdettä, jolla ei ole syvempää merkitystä.',
        'Argumentoida, että kulttuurin merkitys on moniulotteinen: se koskee hyvinvointia, taloutta ja yhteiskunnallista keskustelua yhtä aikaa.',
        'Vaatia, että kaikki kulttuurirahoitus lopetetaan.',
        'Kertoa yksityiskohtaisesti yhden museon historiasta.',
      ],
      correctIndex: 1,
    },
  ],
}

export const week27Listening: ListeningExercise = {
  id: 'l-w27',
  weekId: 27,
  title: 'Keskustelu teatteriesityksen jälkeen',
  level: 'B2',
  scriptFi: `Sanna: No, mitä pidit esityksestä? Minusta ohjaajan tulkinta oli aika rohkea.
Miika: Totta puhuen minua häiritsi se, miten paljon näyttelijät improvisoivat. En oikein ymmärtänyt, mikä oli näytelmän ydinajatus lopulta.
Sanna: Minusta juuri se epämääräisyys oli tarkoituksellista. Ohjaaja taisi halunnut haastaa katsojan tekemään omat tulkintansa sen sijaan, että kaikki selitettäisiin valmiiksi.
Miika: Voi olla, mutta minusta se tuntui vähän siltä, ettei tekijöillä itselläänkään ollut selkeää näkemystä.
Sanna: Kiinnostavaa, että näet sen niin. Minä taas ajattelin, että juuri se avoimuus teki esityksestä puhuttelevan – jouduin miettimään sitä vielä kotimatkalla.
Miika: No, ehkä olen liian tottunut perinteisempään kerrontaan. Musiikki ja lavastus olivat kyllä minunkin mielestäni hienoja.
Sanna: Niin, siitä olemme samaa mieltä. Ehkä kannattaisi käydä katsomassa se uudelleen ja verrata, muuttuuko käsityksemme.
Miika: Voisin harkita sitä. Ehkä ymmärtäisin paremmin, mistä oikeastaan oli kyse.`,
  questions: [
    {
      id: 'q1',
      question: 'Mikä Miikaa häiritsi esityksessä?',
      options: [
        'Näyttelijöiden puvustus.',
        'Se, että hän ei ymmärtänyt, mikä oli näytelmän ydinajatus improvisaation vuoksi.',
        'Musiikki ja lavastus.',
        'Esityksen pituus.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Mitä Sanna todella tarkoittaa sanoessaan, että "epämääräisyys oli tarkoituksellista"?',
      options: [
        'Että hän uskoo ohjaajan tehneen tietoisen taiteellisen valinnan jättää tulkinta katsojalle avoimeksi.',
        'Että hän ei ymmärtänyt esitystä yhtään sen paremmin kuin Miika.',
        'Että esitys oli hänen mielestään huonosti valmisteltu.',
        'Että hän on samaa mieltä Miikan kanssa siitä, että tekijöillä ei ollut näkemystä.',
      ],
      correctIndex: 0,
    },
    {
      id: 'q3',
      question: 'Mistä asiasta Sanna ja Miika ovat samaa mieltä?',
      options: [
        'Näytelmän ydinajatuksesta.',
        'Siitä, että musiikki ja lavastus olivat hienoja.',
        'Siitä, että esitys oli kokonaan epäonnistunut.',
        'Siitä, ettei kannata käydä katsomassa esitystä uudelleen.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Mitä keskustelun lopussa ehdotetaan?',
      options: [
        'Esityksen katsomista uudelleen, jotta ymmärrys mahdollisesti muuttuisi.',
        'Ohjaajalle valittamista.',
        'Esityksen boikotointia.',
        'Rahan takaisin vaatimista.',
      ],
      correctIndex: 0,
    },
  ],
}

export const week27Writing: WritingPrompt = {
  id: 'w-w27',
  weekId: 27,
  title: 'Analyyttinen essee: Taiteen merkitys yksilölle ja yhteiskunnalle',
  level: 'B2',
  instructions:
    'Kirjoita analyyttinen essee aiheesta "Miksi taiteen ja kulttuurin ymmärtäminen ja kokeminen ovat tärkeitä yksilölle ja yhteiskunnalle?". Käytä tekstissäsi nominalisoituja (-minen-johdin) ilmauksia (esim. "ymmärtäminen", "kehittyminen", "kokeminen", "osallistuminen").',
  minWords: 180,
  maxWords: 260,
  timeMinutes: 40,
  rubric: [
    'Esitit selkeän pääväitteen heti alussa.',
    'Käytit vähintään kolmea -minen-nominalisaatiota luontevasti (esim. "ymmärtäminen", "kehittyminen").',
    'Perustelit väitteesi sekä yksilön että yhteiskunnan näkökulmasta.',
    'Käytit argumentoivia konnektoreita (esim. toisaalta, kuitenkin, tämän vuoksi).',
    'Teksti on jäsennelty selkeästi: johdanto, perustelut ja lopetus.',
  ],
  modelAnswer:
    'Taiteen kokeminen ja siihen osallistuminen ovat mielestäni tärkeitä sekä yksilön hyvinvoinnin että koko yhteiskunnan kehittymisen kannalta.\n\nYksilön näkökulmasta taiteen ymmärtäminen avartaa ajattelua ja tarjoaa keinon käsitellä omia tunteita. Esimerkiksi kirjallisuuden lukeminen tai musiikin kuunteleminen voi auttaa jäsentämään vaikeitakin kokemuksia, kun taas oma tekeminen, kuten maalaaminen tai soittaminen, tukee itsensä ilmaisemista tavalla, johon pelkkä puhuminen ei aina riitä.\n\nYhteiskunnan tasolla taiteen merkitys näkyy erityisesti yhteisen keskustelun herättämisessä. Taideteosten tulkitseminen ja niistä keskusteleminen voivat nostaa esiin kysymyksiä, joita muuten ei ehkä käsiteltäisi julkisuudessa. Tämän lisäksi kulttuurialan kehittyminen tukee myös taloutta työllistämällä laajasti eri aloja.\n\nToisaalta on totta, että taiteen arvoa on vaikea mitata samalla tavalla kuin esimerkiksi teollisuustuotannon arvoa, minkä vuoksi sen rahoitus jää usein poliittisessa keskustelussa toissijaiseksi.\n\nTästä huolimatta uskon, että taiteen kokeminen ja siitä oppiminen ovat välttämättömiä sivistyneelle yhteiskunnalle, eikä niitä pitäisi nähdä pelkkänä ylimääräisenä lisänä.',
}

export const week27Speaking: SpeakingPrompt = {
  id: 's-w27',
  weekId: 27,
  title: 'Esittele suosikkiteoksesi merkitys',
  level: 'B2',
  instructions:
    'Kerro kuulijalle jostain sinulle merkityksellisestä taideteoksesta, kirjasta, elokuvasta tai musiikkiesityksestä. Selitä, miksi sen kokeminen ja ymmärtäminen ovat olleet sinulle tärkeitä, ja pohdi myös laajemmin taiteen merkitystä yhteiskunnassa.',
  prepSeconds: 60,
  speakSeconds: 120,
  helpfulPhrases: [
    'Tämän teoksen kokeminen sai minut ajattelemaan...',
    'Sen ymmärtäminen vaati minulta...',
    'Taiteen tekeminen ja siihen osallistuminen ovat mielestäni...',
    'Yhteiskunnan kannalta kulttuurin kehittyminen...',
    'Uskon, että tällaisten teosten näkeminen...',
  ],
}
