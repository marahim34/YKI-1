import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week29Reading: ReadingExercise = {
  id: 'r-w29',
  weekId: 29,
  title: 'Työelämä jatkuvassa muutoksessa',
  level: 'B2',
  textFi: `Työelämä on viime vuosikymmeninä muuttunut nopeammin kuin koskaan aiemmin, ja monet asiantuntijat uskovat muutosvauhdin vain kiihtyvän tulevaisuudessa. Automaation ja tekoälyn yleistyessä yhä useampi ammatti on joutunut uudelleenmäärittelyn kohteeksi, minkä vuoksi työntekijöiltä odotetaan nykyään kykyä sopeutua jatkuvasti uusiin tilanteisiin sen sijaan, että he oppisivat yhden ammatin taidot kertaalleen elämäänsä varten.

Muutokseen sopeutuakseen moni työntekijä joutuu kouluttautumaan uudelleen useita kertoja työuransa aikana. Tutkijoiden mukaan tämä ei ole ainoastaan yksilön oma haaste, vaan koko yhteiskunnan on löydettävä keinoja tukea jatkuvaa oppimista, jottei työvoima jakautuisi entistä jyrkemmin niihin, jotka pystyvät uudistumaan, ja niihin, jotka jäävät kehityksestä jälkeen.

Työpaikkaa vaihtaessaan tai uutta tehtävää aloittaessaan työntekijä kohtaa usein epävarmuutta, joka voi tuntua raskaalta erityisesti silloin, kun muutos ei ole omasta tahdosta lähtöisin. Toisaalta monet muutosta kokeneet kertovat, että pakon edessä opittu joustavuus on lopulta osoittautunut arvokkaaksi taidoksi, jota voi hyödyntää myöhemminkin uran eri vaiheissa.

Organisaatioiden kannalta keskeinen kysymys on, miten muutoksia johdetaan niin, ettei työntekijöiden hyvinvointi kärsi. Avoimesti viestien ja työntekijöitä osallistaen toteutettu muutosprosessi näyttäisi tutkimusten mukaan onnistuvan huomattavasti todennäköisemmin kuin sellainen, jossa päätökset tehdään ilman minkäänlaista vuoropuhelua henkilöstön kanssa.`,
  questions: [
    {
      id: 'q1',
      question: 'Mitä työntekijöiltä tekstin mukaan odotetaan nykyään aiempaa enemmän?',
      options: [
        'Kykyä pysyä koko uran ajan täsmälleen samassa tehtävässä.',
        'Kykyä sopeutua jatkuvasti uusiin tilanteisiin.',
        'Sitä, ettei koskaan tarvitse opetella mitään uutta.',
        'Sitä, että he välttävät kaikkea koulutusta.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Miksi tekstin mukaan koko yhteiskunnan, ei vain yksilön, on tuettava jatkuvaa oppimista?',
      options: [
        'Jotta työvoima ei jakautuisi entistä jyrkemmin uudistumiskykyisiin ja kehityksestä jälkeen jääviin.',
        'Koska yksittäiset työntekijät eivät tekstin mukaan koskaan opi mitään uutta.',
        'Koska koulutus on tekstin mukaan täysin tarpeetonta.',
        'Koska automaatio on tekstin mukaan pysähtynyt kokonaan.',
      ],
      correctIndex: 0,
    },
    {
      id: 'q3',
      question: 'Millaisia tunteita työpaikan tai tehtävän vaihtaminen voi tekstin mukaan herättää?',
      options: [
        'Aina pelkkää innostusta ilman epävarmuutta.',
        'Epävarmuutta, joka voi tuntua raskaalta etenkin, kun muutos ei ole omasta tahdosta lähtöisin.',
        'Täyttä välinpitämättömyyttä.',
        'Tekstin mukaan tunteita ei koskaan synny työelämän muutoksissa.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Minkälainen muutosprosessi näyttäisi tutkimusten mukaan onnistuvan parhaiten organisaatioissa?',
      options: [
        'Sellainen, jossa päätökset tehdään ilman minkäänlaista vuoropuhelua henkilöstön kanssa.',
        'Avoimesti viestien ja työntekijöitä osallistaen toteutettu muutosprosessi.',
        'Sellainen, josta henkilöstölle ei kerrota mitään etukäteen.',
        'Sellainen, joka toteutetaan mahdollisimman salassa.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q5',
      question: 'Mikä on tekstin päätarkoitus?',
      options: [
        'Väittää, että työelämän muutos on aina yksinomaan kielteinen asia.',
        'Kuvata työelämän jatkuvaa muutosta sekä yksilön että organisaatioiden näkökulmasta ja korostaa tuen ja avoimuuden merkitystä.',
        'Kertoa yksityiskohtaisesti yhden yrityksen irtisanomisprosessista.',
        'Suositella, ettei kukaan koskaan vaihda ammattia.',
      ],
      correctIndex: 1,
    },
  ],
}

export const week29Listening: ListeningExercise = {
  id: 'l-w29',
  weekId: 29,
  title: 'Keskustelu organisaatiomuutoksesta',
  level: 'B2',
  scriptFi: `Henkilöstöpäällikkö: Halusin kertoa teille etukäteen, että osastoa ollaan uudelleenorganisoimassa ensi vuoden alusta. Tiedän, että tämä herättää kysymyksiä.
Työntekijä 1 (Sari): Tarkoittaako tämä, että osa meistä siirretään toisiin tehtäviin?
Henkilöstöpäällikkö: Osa tehtävistä muuttuu, kyllä. Tavoitteena on kuitenkin löytää jokaiselle sopiva paikka, ei vähentää henkilöstöä.
Työntekijä 2 (Jussi): Sanotte "sopiva paikka", mutta käytännössä moni meistä joutunee opettelemaan kokonaan uusia työtehtäviä lyhyessä ajassa. Se ei kuulosta yhtään niin rauhoittavalta kuin annatte ymmärtää.
Henkilöstöpäällikkö: Ymmärrän huolenne. Tarkoitukseni ei ole vähätellä muutoksen vaativuutta, vaan kertoa, että tarjoamme koulutusta jokaiselle, jonka tehtävät muuttuvat.
Sari: Milloin saisimme tarkempaa tietoa siitä, ketä muutos koskee henkilökohtaisesti?
Henkilöstöpäällikkö: Käymme henkilökohtaiset keskustelut jokaisen kanssa seuraavan kuukauden aikana, ennen kuin lopulliset päätökset tehdään.
Jussi: Toivottavasti näissä keskusteluissa kuunnellaan oikeasti meidän toiveitamme, eikä vain ilmoiteta valmiita päätöksiä.
Henkilöstöpäällikkö: Se on juuri tarkoitus. Haluamme, että muutos tehdään yhdessä, ei vain teille.`,
  questions: [
    {
      id: 'q1',
      question: 'Mitä henkilöstöpäällikkö ilmoittaa palaverin alussa?',
      options: [
        'Että yritys lopetetaan kokonaan.',
        'Että osastoa ollaan uudelleenorganisoimassa ensi vuoden alusta.',
        'Että kaikki irtisanotaan.',
        'Että palkkoja korotetaan merkittävästi.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Mitä Jussi todella tarkoittaa sanoessaan, ettei ilmoitus kuulosta "yhtään niin rauhoittavalta" kuin henkilöstöpäällikkö antaa ymmärtää?',
      options: [
        'Että hän on täysin tyytyväinen esitettyyn suunnitelmaan.',
        'Että hän epäilee, että sanavalinta "sopiva paikka" kaunistelee sitä, kuinka vaativaa uusien tehtävien opettelu käytännössä on.',
        'Että hän ei ole ollenkaan huolissaan muutoksesta.',
        'Että hän ehdottaa irtisanoutumista heti.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Mitä henkilöstöpäällikkö lupaa tarjota tehtäviään vaihtaville työntekijöille?',
      options: [
        'Ei mitään tukea.',
        'Koulutusta jokaiselle, jonka tehtävät muuttuvat.',
        'Automaattisen irtisanomisen.',
        'Vain sähköpostitse lähetetyn tiedotteen.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Mitä keskustelu paljastaa henkilöstön ja johdon välisestä luottamuksesta?',
      options: [
        'Että työntekijät luottavat täysin ja varauksetta johdon sanaan.',
        'Että työntekijät suhtautuvat varauksella johdon vakuutteluihin ja odottavat, että sanat näkyvät myös konkreettisina tekoina.',
        'Että henkilöstöpäällikkö ei ole lainkaan kiinnostunut työntekijöiden mielipiteistä.',
        'Että muutoksesta ei keskustella lainkaan tässä palaverissa.',
      ],
      correctIndex: 1,
    },
  ],
}

export const week29Writing: WritingPrompt = {
  id: 'w-w29',
  weekId: 29,
  title: 'Analyyttinen essee: Sopeutuminen työelämän muutoksiin',
  level: 'B2',
  instructions:
    'Kirjoita analyyttinen essee aiheesta "Miten yksilö ja työyhteisö voivat sopeutua parhaiten jatkuviin työelämän muutoksiin?". Käytä tekstissäsi monimutkaisia sivulauseita ja lauseenvastikkeita (esim. "muutosta kohdatessaan", "sopeutuakseen", "tehtyään päätöksen").',
  minWords: 180,
  maxWords: 300,
  timeMinutes: 45,
  rubric: [
    'Esitit selkeän pääväitteen tai näkökulman heti alussa.',
    'Käytit vähintään kahta lauseenvastiketta tai monimutkaista sivulausetta luontevasti.',
    'Pohdit muutosta sekä yksilön että työyhteisön näkökulmasta.',
    'Käytit argumentoivia konnektoreita (esim. toisaalta, kuitenkin, tämän vuoksi).',
    'Teksti on jäsennelty selkeästi: johdanto, käsittely ja lopetus.',
  ],
  modelAnswer:
    'Työelämän jatkuvaan muutokseen sopeutuakseen sekä yksilön että työyhteisön on omaksuttava uudenlainen suhtautuminen oppimiseen ja epävarmuuteen.\n\nYksilön näkökulmasta muutosta kohdatessaan on tärkeää nähdä uuden oppiminen mahdollisuutena eikä pelkästään uhkana. Uutta tehtävää aloittaessaan työntekijä kokee usein epävarmuutta, mutta tehtyään ensimmäiset onnistuneet askeleet uudessa roolissa hän tyypillisesti huomaa, että sopeutumiskyky itsessään on arvokas taito, joka kantaa myös tulevissa muutoksissa.\n\nTyöyhteisön tasolla sopeutuminen edellyttää, että muutosta johdetaan avoimesti ja työntekijöitä kuunnellen, sen sijaan että päätökset tehtäisiin ylhäältä alas ilman minkäänlaista vuoropuhelua. Jos henkilöstölle annetaan mahdollisuus vaikuttaa siihen, miten muutos toteutetaan, luottamus johtoon säilyy todennäköisemmin, vaikka itse muutos olisikin vaikea.\n\nToisaalta on syytä muistaa, ettei jatkuva muutosvalmius saa muuttua kohtuuttomaksi kuormaksi: työntekijän jaksamisesta huolehtiminen on yhtä tärkeää kuin uusien taitojen oppiminen.\n\nTämän vuoksi uskon, että parhaiten muutoksista selviävät ne yksilöt ja työyhteisöt, jotka yhdistävät joustavuuden, avoimen viestinnän ja riittävän tuen sen sijaan, että jättäisivät sopeutumisen yksinomaan yksilön omalle vastuulle.',
}

export const week29Speaking: SpeakingPrompt = {
  id: 's-w29',
  weekId: 29,
  title: 'Kerro omasta tai kuvitteellisesta työelämän muutoksesta',
  level: 'B2',
  instructions:
    'Kerro tilanteesta, jossa sinä tai joku tuntemasi on kohdannut merkittävän muutoksen työelämässä (esim. uuden tehtävän, uudelleenkoulutuksen tai organisaatiomuutoksen). Kuvaile, miten muutokseen sopeuduttiin ja mitä siitä opittiin. Käytä monimutkaisia sivulauseita ja lauseenvastikkeita.',
  prepSeconds: 60,
  speakSeconds: 120,
  helpfulPhrases: [
    'Muutosta kohdatessaan hän/minä...',
    'Sopeutuakseen uuteen tilanteeseen...',
    'Tehtyään päätöksen hän/minä...',
    'Vaikka muutos oli aluksi vaikea...',
    'Jälkeenpäin ajateltuna...',
  ],
}
