import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week18Reading: ReadingExercise = {
  id: 'r-w18',
  weekId: 18,
  title: 'Nuorten raha-asiat',
  level: 'B1',
  textFi: `Moni nuori aikuinen kohtaa ensimmäistä kertaa itsenäisesti raha-asioiden hoitamisen, kun hän muuttaa pois lapsuudenkodistaan. Yksi tärkeimmistä taidoista on budjetin tekeminen: kun tulot ja menot ovat selvillä, on paljon helpompi säästää rahaa kuin silloin, kun kulutusta ei seuraa lainkaan.

Viime kuussa Emma vertaili kolmen eri pankin säästötilejä löytääkseen edullisimman vaihtoehdon. Ensimmäisen pankin tili oli hänen mielestään liian kallis, koska siitä perittiin kuukausimaksu. Toisen pankin korko oli hieman korkeampi kuin ensimmäisen, mutta kolmannen pankin tili osoittautui kaikista edullisimmaksi: siinä ei ollut kuukausimaksua lainkaan, ja korko oli markkinoiden paras.

Emma päätti myös vähentää turhia menojaan. Hän huomasi, että ravintolassa syöminen oli paljon kalliimpaa kuin ruoan valmistaminen kotona, joten hän alkoi laittaa ruokaa itse useammin. Lisäksi hän vertaili kauppojen hintoja ja huomasi, että lähikaupan hinnat olivat usein korkeammat kuin isomman marketin, vaikka lähikauppa oli kätevämpi sijainniltaan.

Muutaman kuukauden kuluttua Emman säästöt olivat kasvaneet huomattavasti. Hän sanoo, että budjetin seuraaminen on ollut hänen elämänsä paras taloudellinen päätös, sillä se on antanut hänelle paremman käsityksen siitä, mihin raha oikeasti kuluu.`,
  questions: [
    {
      id: 'q1',
      question: 'Mitä Emma teki löytääkseen edullisimman säästötilin?',
      options: [
        'Hän valitsi ensimmäisen tarjotun tilin',
        'Hän kysyi ystäviltään suosituksia',
        'Hän vertaili kolmen eri pankin säästötilejä',
        'Hän luki pankkien mainoksia lehdestä',
      ],
      correctIndex: 2,
    },
    {
      id: 'q2',
      question: 'Miksi ensimmäisen pankin tili ei ollut hyvä vaihtoehto?',
      options: [
        'Sen korko oli liian matala',
        'Siitä perittiin kuukausimaksu',
        'Sitä ei voinut avata verkossa',
        'Se oli tarkoitettu vain yrityksille',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Mikä teki kolmannen pankin tilistä parhaan vaihtoehdon?',
      options: [
        'Se oli lähimpänä Emman kotia',
        'Siinä oli korkein kuukausimaksu',
        'Pankki tarjosi ilmaisen lahjan',
        'Siinä ei ollut kuukausimaksua ja korko oli markkinoiden paras',
      ],
      correctIndex: 3,
    },
    {
      id: 'q4',
      question: 'Minkä muutoksen Emma teki ruokailutottumuksiinsa?',
      options: [
        'Hän lopetti ruoanlaiton kokonaan',
        'Hän alkoi tilata ruokaa netistä',
        'Hän alkoi laittaa ruokaa itse useammin kotona',
        'Hän alkoi syödä useammin ravintolassa',
      ],
      correctIndex: 2,
    },
    {
      id: 'q5',
      question: 'Mitä tekstin lopusta voi päätellä budjetin seuraamisen vaikutuksesta Emman elämään?',
      options: [
        'Se ei muuttanut mitään hänen taloudessaan',
        'Se auttoi häntä ymmärtämään paremmin, mihin raha kuluu, ja kasvatti säästöjä',
        'Se sai hänet lopettamaan pankkitilin käytön',
        'Se teki hänen elämästään stressaavampaa',
      ],
      correctIndex: 1,
    },
  ],
}

export const week18Listening: ListeningExercise = {
  id: 'l-w18',
  weekId: 18,
  title: 'Vuokra-asuntojen vertailua',
  level: 'B1',
  scriptFi: `Anna: Katsoin tänään kolme asuntoa. Mikä niistä oli mielestäsi paras?
Mikko: Se keskustan asunto oli tosi kaunis, mutta se oli myös kaikista kallein.
Anna: Niin oli. Se toinen, esikaupungissa, oli halvempi, mutta sinne on aika pitkä matka töihin.
Mikko: Entä se kolmas, lähempänä asemaa?
Anna: Se oli mielestäni järkevin valinta. Vuokra oli matalampi kuin keskustan asunnossa, ja matka töihin on lyhyempi kuin esikaupungin asunnosta.
Mikko: Kuulostaa hyvältä. Onko siellä yhtä paljon tilaa kuin muissa?
Anna: Ei ihan yhtä paljon, mutta se on silti riittävän tilava meille kahdelle.
Mikko: No, minusta kannattaa valita se. Se on kokonaisuutena paras vaihtoehto, vaikka se ei ole se hienoin.
Anna: Samaa mieltä. Soitan vuokranantajalle huomenna.`,
  questions: [
    {
      id: 'q1',
      question: 'Miksi keskustan asunto ei ollut paras vaihtoehto Annan ja Mikon mielestä?',
      options: [
        'Se oli liian pieni',
        'Siellä ei ollut parvekettaa',
        'Se oli liian kaukana kaikesta',
        'Se oli kaikista kallein',
      ],
      correctIndex: 3,
    },
    {
      id: 'q2',
      question: 'Mikä oli esikaupungin asunnon huono puoli?',
      options: [
        'Se oli kaikista kallein',
        'Sinne on pitkä matka töihin',
        'Siinä ei ollut keittiötä',
        'Se oli liian meluisa',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Miksi kolmas asunto oli Annan mielestä järkevin valinta?',
      options: [
        'Se oli kaikista suurin',
        'Siinä oli uusin keittiö',
        'Vuokra oli matalampi kuin keskustassa ja matka töihin lyhyempi kuin esikaupungista',
        'Se oli ilmainen ensimmäisen kuukauden',
      ],
      correctIndex: 2,
    },
    {
      id: 'q4',
      question: 'Mihin lopputulokseen Anna ja Mikko päätyvät?',
      options: [
        'He eivät valitse mitään asunnoista',
        'He valitsevat keskustan asunnon sen kauneuden takia',
        'He valitsevat kolmannen asunnon kokonaisuutena parhaana vaihtoehtona',
        'He päättävät jatkaa asunnon etsimistä',
      ],
      correctIndex: 2,
    },
  ],
}

export const week18Writing: WritingPrompt = {
  id: 'w-w18',
  weekId: 18,
  title: 'Vertaile kahta säästämistapaa',
  level: 'B1',
  instructions:
    'Kirjoita teksti, jossa vertailet kahta tapaa säästää rahaa (esim. pankkitili vs. sijoittaminen, tai oma esimerkki). Kerro, kumpi on mielestäsi parempi ja miksi. Käytä komparatiivi- ja superlatiivimuotoja (esim. "halvempi", "turvallisin", "kannattavin").',
  minWords: 90,
  maxWords: 160,
  timeMinutes: 30,
  rubric: [
    'Vertailit kahta konkreettista säästämis- tai rahankäyttötapaa.',
    'Käytit ainakin kolme komparatiivimuotoa (esim. halvempi, korkeampi).',
    'Käytit ainakin yhden superlatiivimuodon (esim. edullisin, paras).',
    'Perustelit, kumpi vaihtoehto on mielestäsi parempi.',
    'Teksti on selkeä ja sopivan pituinen.',
  ],
  modelAnswer:
    'Kun ihminen haluaa säästää rahaa, hänellä on yleensä kaksi päävaihtoehtoa: tavallinen säästötili tai sijoittaminen esimerkiksi rahastoihin. Molemmilla tavoilla on hyvät ja huonot puolensa.\n\nSäästötili on turvallisempi vaihtoehto kuin sijoittaminen, koska rahan arvo ei laske äkillisesti. Se sopii parhaiten sellaiselle ihmiselle, joka haluaa käyttää rahansa lähitulevaisuudessa, esimerkiksi vuoden tai kahden sisällä. Toisaalta säästötilin korko on yleensä paljon matalampi kuin sijoittamisen keskimääräinen tuotto pitkällä aikavälillä.\n\nSijoittaminen taas on riskialttiimpaa, koska rahaston arvo voi laskea, mutta pitkällä aikavälillä se on usein kannattavin tapa kasvattaa varallisuutta. Mitä pidempi sijoitusaika on, sitä pienempi riski yleensä on.\n\nOmasta mielestäni paras ratkaisu on yhdistää molempia: pitää osa rahasta turvallisimmalla tilillä ja sijoittaa loput pitkäjänteisesti. Näin saa sekä turvaa että mahdollisuuden parempaan tuottoon.',
}

export const week18Speaking: SpeakingPrompt = {
  id: 's-w18',
  weekId: 18,
  title: 'Vertaile kahta ostosvaihtoehtoa',
  level: 'B1',
  instructions:
    'Kuvittele, että olet vertaillut kahta puhelinta tai kahta vuokra-asuntoa. Kerro, mitkä ovat niiden erot, ja perustele, kumpi on mielestäsi parempi vaihtoehto. Käytä komparatiivi- ja superlatiivimuotoja.',
  prepSeconds: 45,
  speakSeconds: 100,
  helpfulPhrases: [
    '... on halvempi/kalliimpi kuin...',
    'Mielestäni paras vaihtoehto on...',
    '... on huomattavasti parempi, koska...',
    'Toinen on käytännöllisempi, mutta toinen on edullisempi.',
    'Kaikista vaihtoehdoista tämä on...',
  ],
}
