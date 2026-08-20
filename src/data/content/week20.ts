import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week20Reading: ReadingExercise = {
  id: 'r-w20',
  weekId: 20,
  title: 'Juhannus – Suomen valoisin juhla',
  level: 'B1',
  textFi: `Juhannus on yksi suomalaisten rakkaimmista juhlista, ja sitä vietetään kesäkuun lopussa, jolloin yö on valoisimmillaan. Monille juhannus tarkoittaa mökille lähtemistä, saunomista ja yhdessäoloa perheen tai ystävien kanssa.

Jos haluat viettää juhannusta suomalaiseen tapaan, tee näin: lähde mökille tai järven rannalle jo perjantaina, jotta ehdit rauhoittua kaupungin kiireestä. Sytytä juhannuskokko illalla ja kokoonnu sen ympärille ystävien kanssa. Muista myös lämmittää sauna – se kuuluu olennaisesti suomalaiseen juhannukseen.

Perinteisiin kuuluu myös ruokailu ulkona: grillaa makkaraa tai lohta, ja tarjoile lisäksi tuoreita kesäperunoita ja uusia vihanneksia. Jos haluat noudattaa vanhaa perinnettä, poimi seitsemän erilaista kukkaa ja aseta ne tyynyn alle – kansanperinteen mukaan näet silloin unessa tulevan puolisosi.

Vaikka sää ei aina ole lämmin, älä anna sen pilata juhlaa. Pue lämpimät vaatteet, nauti luonnosta ja muista, että tärkeintä juhannuksessa on yhdessäolo läheisten kanssa.`,
  questions: [
    {
      id: 'q1',
      question: 'Milloin juhannusta vietetään?',
      options: [
        'Toukokuun alussa',
        'Syyskuun alussa',
        'Kesäkuun lopussa',
        'Elokuun lopussa',
      ],
      correctIndex: 2,
    },
    {
      id: 'q2',
      question: 'Mitä teksti kehottaa tekemään perjantaina?',
      options: [
        'Jäämään kaupunkiin töihin',
        'Lähtemään mökille tai järven rannalle jo perjantaina',
        'Sytyttämään kokon heti aamulla',
        'Kutsumaan koko suvun kylään',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Mitä vanhan kansanperinteen mukaan pitäisi tehdä seitsemällä kukalla?',
      options: [
        'Antaa ne juhlavieraille lahjaksi',
        'Heittää ne järveen onnen toivotukseksi',
        'Koristella niillä pöytä',
        'Asettaa ne tyynyn alle nähdäkseen unessa tulevan puolisonsa',
      ],
      correctIndex: 3,
    },
    {
      id: 'q4',
      question: 'Mitä tekstin mukaan pitää muistaa, vaikka sää olisi kylmä?',
      options: [
        'Että juhannusta ei silloin kannata viettää ollenkaan',
        'Pukea lämpimät vaatteet ja nauttia silti luonnosta',
        'Perua koko juhla',
        'Siirtää kokko sisätiloihin',
      ],
      correctIndex: 1,
    },
    {
      id: 'q5',
      question: 'Mitä tekstistä voi päätellä juhannuksen tärkeimmästä merkityksestä suomalaisille?',
      options: [
        'Tärkeintä on runsas ruoka',
        'Tärkeintä on pitkä loma töistä',
        'Tärkeintä on yhdessäolo läheisten kanssa',
        'Tärkeintä on kansanperinteiden tarkka noudattaminen',
      ],
      correctIndex: 2,
    },
  ],
}

export const week20Listening: ListeningExercise = {
  id: 'l-w20',
  weekId: 20,
  title: 'Valmistautuminen itsenäisyyspäivään',
  level: 'B1',
  scriptFi: `Äiti: Muista, että tänä iltana on itsenäisyyspäivä. Laita kynttilät ikkunalle kello kuudeksi.
Poika: Selvä, montako kynttilää laitan?
Äiti: Laita kaksi valkoista kynttilää joka ikkunaan, se on vanha perinne.
Poika: Katsotaanko me tänä vuonna presidentin juhlavastaanoton televisiosta?
Äiti: Kyllä, katsotaan yhdessä. Pue ensin siistit vaatteet, koska aiomme myös käydä katsomassa kaupungin kulkueen.
Poika: Onko kylmä ulkona? Otanko takin mukaan?
Äiti: Ota lämmin takki ja pipo, sillä ulkona voi olla hyvin kylmä joulukuussa.
Poika: Selvä. Muistetaanko sytyttää kynttilät sankarihaudalla, niin kuin viime vuonna?
Äiti: Muistetaan ehdottomasti. Se on tärkeä osa päivää, jotta kunnioitamme niitä, jotka taistelivat maamme puolesta.`,
  questions: [
    {
      id: 'q1',
      question: 'Mitä äiti pyytää poikaa laittamaan ikkunalle?',
      options: [
        'Yhden punaisen kynttilän',
        'Kaksi valkoista kynttilää',
        'Suomen lipun',
        'Kukkakimpun',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Mitä perhe aikoo tehdä illalla ohjelman seuraamisen lisäksi?',
      options: [
        'Käydä katsomassa kaupungin kulkueen',
        'Matkustaa mökille',
        'Järjestää suuret juhlat kotona',
        'Mennä elokuviin',
      ],
      correctIndex: 0,
    },
    {
      id: 'q3',
      question: 'Miksi äiti käskee poikaa ottamaan lämpimän takin?',
      options: [
        'Koska he menevät hiihtämään',
        'Koska sää-ennuste lupaa lunta',
        'Koska kotona ei ole lämmintä',
        'Koska ulkona voi olla hyvin kylmä joulukuussa',
      ],
      correctIndex: 3,
    },
    {
      id: 'q4',
      question: 'Mitä perhe aikoo tehdä sankarihaudalla?',
      options: [
        'Laulaa kansallislaulun',
        'Pitää puheen',
        'Sytyttää kynttilät kunnioittaakseen kaatuneita',
        'Viedä kukkia presidentin puolesta',
      ],
      correctIndex: 2,
    },
  ],
}

export const week20Writing: WritingPrompt = {
  id: 'w-w20',
  weekId: 20,
  title: 'Ohje ystävälle: Miten suomalaista juhlaa vietetään',
  level: 'B1',
  instructions:
    'Kirjoita ohjeteksti ulkomaalaiselle ystävällesi siitä, miten suomalaista juhlaa (esim. joulua, vappua tai juhannusta) vietetään. Anna konkreettisia ohjeita imperatiivimuodossa (esim. "muista...", "osta...", "vietä...").',
  minWords: 90,
  maxWords: 160,
  timeMinutes: 30,
  rubric: [
    'Valitsit yhden suomalaisen juhlan ja pysyit aiheessa.',
    'Annoit ohjeita imperatiivimuodossa vähintään viisi kertaa.',
    'Ohjeet ovat konkreettisia ja hyödyllisiä ulkomaalaiselle.',
    'Mainitsit ainakin yhden perinteen tai tavan, joka liittyy juhlaan.',
    'Teksti on selkeä ja sopivan pituinen.',
  ],
  modelAnswer:
    'Hyvä ystävä!\n\nNyt kun kevät on tulossa, haluan kertoa sinulle, miten suomalaiset viettävät vappua. Vappu on toukokuun ensimmäinen päivä, ja se on yksi suomalaisten iloisimmista juhlista.\n\nEnsinnäkin, pue ylle valkoinen ylioppilaslakki, jos sinulla sattuu olemaan sellainen, tai muuten vain hauskat ja värikkäät vaatteet. Osta tai tee itse simaa ja munkkeja, sillä ne kuuluvat olennaisesti vappuun. Mene aatonaattona ulos ystävien kanssa, koska kaduilla ja puistoissa on silloin paljon juhlivaa väkeä.\n\nMuista myös osallistua johonkin ulkoilmatapahtumaan vapunpäivänä – monissa kaupungeissa järjestetään piknikkejä puistoissa. Ota mukaan eväät ja peitto, ja nauti keväästä yhdessä muiden kanssa.\n\nTärkeintä on kuitenkin rentoutua ja pitää hauskaa – vappu on juhla, jossa arjen säännöt hetkeksi unohtuvat!',
}

export const week20Speaking: SpeakingPrompt = {
  id: 's-w20',
  weekId: 20,
  title: 'Selitä juhlaperinne ulkomaalaiselle',
  level: 'B1',
  instructions:
    'Kuvittele, että ulkomaalainen ystäväsi on Suomessa ensimmäistä kertaa jonain suomalaisena juhlapäivänä (esim. joulu, juhannus tai itsenäisyyspäivä). Selitä hänelle, miten juhlaa vietetään ja anna konkreettisia ohjeita imperatiivimuodossa.',
  prepSeconds: 45,
  speakSeconds: 110,
  helpfulPhrases: [
    'Ensinnäkin, muista...',
    'Osta/valmista...',
    'Pue...',
    'Älä unohda...',
    'Nauti juhlasta ja...',
  ],
}
