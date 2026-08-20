import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week25Reading: ReadingExercise = {
  id: 'r-w25',
  weekId: 25,
  title: 'Kotoutuminen kasvavassa Suomessa',
  level: 'B2',
  textFi: `Suomeen muuttavien ihmisten määrä on ollut kasvava jo pidemmän aikaa, ja kotoutumisesta on tullut yksi keskeisimmistä yhteiskunnallisista keskustelunaiheista. Kotoutuminen ei tarkoita ainoastaan kielen oppimista, vaan se on paljon laajempi, jatkuvasti muuttuva prosessi, joka koskettaa niin uutta tulijaa kuin vastaanottavaa yhteiskuntaakin. Oleskeluluvan saaminen on vasta ensimmäinen askel; sen jälkeen alkaa usein vuosia kestävä sopeutumisen matka.

Tuoreiden tutkimusten mukaan työllistyminen on yksi merkittävimmistä kotoutumista edistävistä tekijöistä. Työtä etsivä maahanmuuttaja kohtaa kuitenkin usein haasteita, jotka liittyvät tutkintojen tunnustamiseen ja kielitaitovaatimuksiin. Moni korkeasti koulutettu henkilö joutuu aluksi tekemään koulutustaan vastaamatonta työtä, mikä voi tuntua turhauttavalta sekä yksilön että kasvavan yhteiskunnan kannalta, joka tarvitsisi juuri heidän osaamistaan.

Toisaalta viime vuosina kehittyvät kotouttamispalvelut ovat tuoneet myös toiveikkaita esimerkkejä. Useat kunnat ovat ottaneet käyttöön yksilöllisempiä, tulevaisuuteen suuntautuvia kotoutumissuunnitelmia, joissa huomioidaan aiempi koulutus ja työkokemus nykyistä tarkemmin. Vapaaehtoistyöntekijät ja paikalliset yhdistykset ovat niin ikään tärkeä, jatkuvasti kasvava voimavara, joka tukee uusia asukkaita arjen käytännön asioissa.

Onnistunut kotoutuminen ei ole vain maahanmuuttajan vastuulla, vaan se edellyttää koko yhteiskunnalta avoimuutta ja pitkäjänteistä sitoutumista tulevaan.`,
  questions: [
    {
      id: 'q1',
      question: 'Mitä tekstin mukaan kotoutuminen tarkoittaa?',
      options: [
        'Ainoastaan suomen kielen oppimista.',
        'Laajaa ja jatkuvasti muuttuvaa prosessia, joka koskee sekä muuttajaa että yhteiskuntaa.',
        'Vain oleskeluluvan hakemista.',
        'Prosessia, joka päättyy heti oleskeluluvan saamiseen.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Mikä on tutkimusten mukaan merkittävä kotoutumista edistävä tekijä?',
      options: [
        'Asuminen mahdollisimman kaukana kaupungeista.',
        'Työllistyminen.',
        'Se, ettei opiskele suomea lainkaan.',
        'Oleskeluluvan hakemisen nopeus.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Millaisia haasteita korkeasti koulutettu maahanmuuttaja voi tekstin mukaan kohdata?',
      options: [
        'Hänen ei tarvitse koskaan hakea töitä.',
        'Tutkintojen tunnustamiseen ja kielitaitovaatimuksiin liittyviä haasteita, jotka voivat johtaa koulutusta vastaamattomaan työhön.',
        'Hän saa aina heti oman alansa työpaikan.',
        'Kunnat kieltäytyvät tarjoamasta hänelle mitään palveluita.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Millaisia myönteisiä kehityskulkuja tekstissä mainitaan?',
      options: [
        'Kotouttamispalveluita on vähennetty kaikissa kunnissa.',
        'Yksilöllisemmät kotoutumissuunnitelmat ja vapaaehtoistyö tukevat uusia asukkaita.',
        'Vapaaehtoistyöntekijöiden määrä on laskenut merkittävästi.',
        'Kunnat eivät huomioi lainkaan aiempaa koulutusta.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q5',
      question: 'Mikä on tekstin päätarkoitus?',
      options: [
        'Väittää, että kotoutuminen on yksinomaan maahanmuuttajan omalla vastuulla.',
        'Osoittaa, että kotoutuminen on monitahoinen prosessi, joka vaatii sekä yksilön että koko yhteiskunnan panosta.',
        'Kertoa yksityiskohtaisesti oleskelulupaprosessin byrokratiasta.',
        'Väittää, ettei kotoutuminen koskaan onnistu Suomessa.',
      ],
      correctIndex: 1,
    },
  ],
}

export const week25Listening: ListeningExercise = {
  id: 'l-w25',
  weekId: 25,
  title: 'Radio-ohjelma kotoutumisesta',
  level: 'B2',
  scriptFi: `Toimittaja: Tänään vieraanamme on Amina, joka muutti Suomeen viisi vuotta sitten. Amina, millaista sopeutuminen on ollut?
Amina: Se on ollut pitkä matka. Alussa ajattelin, että kielen oppiminen olisi suurin haaste, mutta yllättäen suurin haaste olikin oman osaamiseni tunnustaminen työelämässä.
Toimittaja: Mitä tarkoitat tällä?
Amina: Minulla on kotimaassani suoritettu insinöörin tutkinto, mutta täällä sen arvo ei ollutkaan itsestäänselvä. Jouduin ensin tekemään täysin toista alaa, vaikka osaamiseni olisi riittänyt paljon vaativampaan työhön.
Toimittaja: Kuulostaa turhauttavalta.
Amina: Oli se. Mutta kasvava kotouttamispalvelujen tarjonta auttoi lopulta. Sain yksilöllisen suunnitelman, jossa huomioitiin aiempi koulutukseni, ja pääsin lopulta täydennyskoulutukseen.
Toimittaja: Eli tilanne parani ajan myötä.
Amina: Kyllä, mutta haluan sanoa, ettei kyse ollut vain minun sinnikkyydestäni. Ilman tulevaisuuteen suuntautuvaa tukea moni olisi luovuttanut jo aiemmin.
Toimittaja: Mitä neuvoisit tuleville maahanmuuttajille?
Amina: Sanoisin, ettei kannata odottaa, että kaikki ratkeaa itsestään. Kannattaa hakea aktiivisesti tietoa palveluista, vaikka se tuntuisi aluksi raskaalta.`,
  questions: [
    {
      id: 'q1',
      question: 'Mikä yllätti Aminan suurimpana haasteena?',
      options: [
        'Suomen kielen oppiminen.',
        'Oman ammatillisen osaamisen tunnustaminen työelämässä.',
        'Asunnon löytäminen.',
        'Ystävien saaminen.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Mitä Amina todella tarkoittaa sanoessaan, ettei kyse ollut "vain hänen sinnikkyydestään"?',
      options: [
        'Että hän ei ollut lainkaan sinnikäs.',
        'Että hän haluaa korostaa, kuinka tärkeää ulkopuolinen, järjestelmällinen tuki oli hänen onnistumisensa kannalta, ei pelkkä oma yrittäminen.',
        'Että kotouttamispalvelut olivat hänelle täysin merkityksettömiä.',
        'Että hän sai kaiken avun ilman minkäänlaista omaa ponnistelua.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Mikä lopulta auttoi Aminaa etenemään omalla alallaan?',
      options: [
        'Hän vaihtoi maata uudelleen.',
        'Yksilöllinen kotoutumissuunnitelma ja pääsy täydennyskoulutukseen.',
        'Hän luopui kokonaan omasta alastaan.',
        'Hän ei tarvinnut minkäänlaista tukea.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Minkä neuvon Amina antaa tuleville maahanmuuttajille?',
      options: [
        'Odottaa passiivisesti, että viranomaiset ottavat yhteyttä.',
        'Hakea aktiivisesti tietoa palveluista, vaikka se tuntuisi raskaalta.',
        'Välttää kaikkia viranomaispalveluita.',
        'Muuttaa mahdollisimman nopeasti toiseen maahan.',
      ],
      correctIndex: 1,
    },
  ],
}

export const week25Writing: WritingPrompt = {
  id: 'w-w25',
  weekId: 25,
  title: 'Analyyttinen essee: Kotouttamispolitiikan tulevaisuus',
  level: 'B2',
  instructions:
    'Kirjoita analyyttinen essee aiheesta "Miten kotouttamispolitiikkaa pitäisi kehittää Suomessa tulevaisuudessa?". Käsittele sekä nykytilan haasteita että mahdollisia ratkaisuja. Käytä tekstissäsi VA-partisiippirakenteita (esim. "kasvava", "kehittyvä", "tuleva") kuvaamaan jatkuvia ja tulevia ilmiöitä.',
  minWords: 180,
  maxWords: 260,
  timeMinutes: 40,
  rubric: [
    'Esitit selkeästi tekstin pääväitteen tai näkökulman heti alussa.',
    'Käsittelit sekä nykytilan haasteita että vähintään yhtä ratkaisuehdotusta.',
    'Käytit vähintään kahta VA-partisiippirakennetta luontevasti (esim. "kasvava", "tuleva", "kehittyvä").',
    'Käytit argumentoivia konnektoreita (esim. toisaalta, kuitenkin, tämän vuoksi).',
    'Teksti on jäsennelty selkeästi: johdanto, käsittely ja lopetus.',
  ],
  modelAnswer:
    'Kasvava maahanmuutto on tehnyt kotouttamispolitiikasta yhden Suomen tärkeimmistä tulevaisuuden kysymyksistä, ja nykyistä järjestelmää olisi mielestäni kehitettävä nykyistä yksilöllisempään suuntaan.\n\nTällä hetkellä suurin ongelma on se, että moni tuleva työntekijä joutuu odottamaan liian kauan tutkintonsa tunnustamista, mikä hidastaa sekä hänen omaa elämäänsä että kasvavan yhteiskunnan tarvetta osaavasta työvoimasta. Tämä johtaa turhautumiseen ja joskus siihen, että osaava ihminen päättää muuttaa muualle.\n\nToisaalta viime vuosina kehittyvät digitaaliset palvelut tarjoavat uusia mahdollisuuksia nopeuttaa prosesseja. Jos tutkintojen tunnustaminen ja kielitaidon arviointi voitaisiin tehdä nykyistä joustavammin, yhä useampi tuleva asukas pääsisi nopeammin kiinni omaa osaamistaan vastaavaan työhön.\n\nKuitenkaan pelkkä teknologia ei riitä, sillä onnistunut kotoutuminen edellyttää myös kasvavaa panostusta kielikoulutukseen ja paikallisyhteisöjen tukeen. Tämän vuoksi tulevaisuuden kotouttamispolitiikan tulisi yhdistää nopeutuvat digitaaliset prosessit ja inhimillinen, henkilökohtainen tuki, jotta sekä yksilö että koko yhteiskunta hyötyisivät muutoksesta.',
}

export const week25Speaking: SpeakingPrompt = {
  id: 's-w25',
  weekId: 25,
  title: 'Kuvaile kotoutumisen kehityskulkuja',
  level: 'B2',
  instructions:
    'Selitä kuulijalle, millaisia muutoksia kotoutumisessa ja maahanmuuttopolitiikassa on tapahtumassa Suomessa. Kuvaile kasvavia ja kehittyviä ilmiöitä sekä tulevia haasteita, ja esitä oma näkemyksesi siitä, mihin suuntaan kehityksen pitäisi jatkossa mennä.',
  prepSeconds: 60,
  speakSeconds: 120,
  helpfulPhrases: [
    'Kasvava määrä ihmisiä...',
    'Kehittyvät palvelut ovat auttaneet siinä, että...',
    'Tulevaisuudessa tarvitaan...',
    'Yksi jatkuvasti muuttuva haaste on...',
    'Uskon, että tuleva kehitys...',
  ],
}
