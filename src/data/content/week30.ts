import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

// Week 30 — kertausviikko (review week) for weeks 23-29, the last content
// week before the two exam weeks: job interviews/communication, education
// policy, immigration/integration, technology, culture/arts,
// debate/disagreement, and changes in working life, plus the grammar
// covered in Phase 3 (reported speech, NUT- and VA-participles, passive
// conditional, nominalization -minen, non-finite clause substitutes, and
// argumentative connectors). Calibrated toward YKI taitotaso 4 — accurate,
// fluent, well-organized B1.2-B2 Finnish using a genuine range of
// structures, not just correct but well-crafted.

export const week30Reading: ReadingExercise = {
  id: 'r-w30',
  weekId: 30,
  title: 'Kertaus: Työelämän murros ja siihen sopeutuminen',
  level: 'B2',
  textFi: `Suomalainen työelämä on viime vuosina kokenut nopeita muutoksia, joita monet asiantuntijat kuvaavat jopa murrokseksi. Digitalisoituminen ja tekoälyn yleistyminen ovat muuttaneet monien alojen toimintatapoja niin perusteellisesti, että osa aiemmin vakiintuneista ammateista on käytännössä kadonnut kokonaan, kun taas kokonaan uusia tehtäviä on syntynyt niiden tilalle.

Erityisen kiinnostava kysymys on se, miten tähän jatkuvasti muuttuvaan tilanteeseen tulisi sopeutua. Työelämätutkija Maria Lehtonen totesi hiljattain julkaistussa haastattelussa, että jatkuva kouluttautuminen on nykyisin lähes välttämätöntä, jos haluaa pysyä työmarkkinoilla kilpailukykyisenä. Hänen mukaansa erityisesti maahanmuuttajataustaisten työntekijöiden kotoutumista voitaisiin tukea nykyistä paremmin tarjoamalla heille kohdennettua ammatillista koulutusta jo varhaisessa vaiheessa.

Toisaalta osa työnantajista suhtautuu muutokseen varauksella. Monet pelkäävät, että liian nopea digitalisointi voi heikentää työn laatua tai lisätä työntekijöiden kuormitusta, ellei sitä toteuteta huolellisesti suunnitellen. Tehtyään pitkän uran perinteisellä alalla moni kokeneempi työntekijä saattaa myös kokea muutoksen erityisen haastavana.

Vaikka näkemykset eroavat, useimmat asiantuntijat ovat yhtä mieltä siitä, että avoin keskustelu ja riittävä tuki – niin taloudellinen kuin koulutuksellinenkin – ovat avainasemassa, kun suomalaista työelämää sopeutetaan tulevaisuuden vaatimuksiin.`,
  questions: [
    {
      id: 'q1',
      question: 'Mitä tekstin mukaan on tapahtunut osalle aiemmin vakiintuneista ammateista?',
      options: [
        'Ne ovat muuttuneet entistä suositummiksi.',
        'Ne ovat käytännössä kadonneet kokonaan.',
        'Niiden palkat ovat nousseet huomattavasti.',
        'Ne ovat siirtyneet kokonaan ulkomaille.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Mitä Maria Lehtonen piti nykyisin lähes välttämättömänä työmarkkinoilla pärjäämiseksi?',
      options: [
        'Useiden kielien osaamista',
        'Jatkuvaa kouluttautumista',
        'Pitkää työkokemusta yhdeltä alalta',
        'Työpaikan vaihtamista usein',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Miten maahanmuuttajataustaisten kotoutumista voitaisiin Lehtosen mukaan tukea paremmin?',
      options: [
        'Tarjoamalla enemmän vapaa-aikaa',
        'Tarjoamalla kohdennettua ammatillista koulutusta jo varhain',
        'Rajoittamalla työnhakua tietyille aloille',
        'Vähentämällä kielikoulutusta',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Mitä osa työnantajista pelkää liian nopeassa digitalisoinnissa?',
      options: [
        'Että se on liian kallista toteuttaa',
        'Että se voi heikentää työn laatua tai lisätä kuormitusta',
        'Että se poistaa tarpeen kouluttautumiselle kokonaan',
        'Että se ei kiinnosta nuoria työntekijöitä',
      ],
      correctIndex: 1,
    },
    {
      id: 'q5',
      question: 'Mistä asiasta useimmat asiantuntijat ovat tekstin mukaan yhtä mieltä?',
      options: [
        'Siitä, että digitalisointi pitäisi pysäyttää kokonaan',
        'Siitä, että avoin keskustelu ja riittävä tuki ovat avainasemassa muutoksessa',
        'Siitä, että vain nuoret työntekijät hyötyvät muutoksesta',
        'Siitä, että koulutuksella ei ole enää merkitystä',
      ],
      correctIndex: 1,
    },
  ],
}

export const week30Listening: ListeningExercise = {
  id: 'l-w30',
  weekId: 30,
  title: 'Kertaus: Työhaastattelun jälkeen',
  level: 'B2',
  scriptFi: `Anna: Miten työhaastattelusi meni eilen?
Timo: Ihan hyvin meni, mutta yllätyin siitä, että koko haastattelu tehtiin videopuhelun kautta eikä kasvokkain.
Anna: Niin, moni yritys on siirtynyt siihen viime vuosina. Kysyivätkö he mitään erikoista?
Timo: Kysyivät kyllä. Haastattelija kysyi, miten toimisin, jos tiimissäni olisi hyvin erilaisista kulttuureista tulevia jäseniä. Vastasin, että pitäisin sitä rikkautena enkä ongelmana.
Anna: Hyvä vastaus. Mitä muuta he sanoivat?
Timo: He kertoivat, että yritys panostaa paljon työntekijöiden jatkuvaan kouluttautumiseen ja että uusille työntekijöille tarjotaan mentori ensimmäisen vuoden ajaksi.
Anna: Kuulostaa todella hyvältä. Sanoivatko he, milloin saat vastauksen?
Timo: He lupasivat vastata viimeistään ensi viikon perjantaina. Odotan nyt vähän jännittyneenä.
Anna: Toivottavasti saat hyviä uutisia! Kerro heti, kun kuulet jotain.`,
  questions: [
    {
      id: 'q1',
      question: 'Miten Timon työhaastattelu järjestettiin?',
      options: ['Kasvokkain toimistolla', 'Videopuhelun kautta', 'Puhelimessa ilman kuvaa', 'Sähköpostitse'],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Mitä haastattelija kysyi Timolta kulttuurisesta monimuotoisuudesta?',
      options: [
        'Osaako Timo useita kieliä',
        'Miten Timo toimisi tiimissä, jossa on eri kulttuureista tulevia jäseniä',
        'Onko Timo asunut ulkomailla',
        'Mitä mieltä Timo on maahanmuutosta yleisesti',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Mitä yritys tarjoaa uusille työntekijöille tekstin mukaan?',
      options: [
        'Ilmaisen asunnon',
        'Mentorin ensimmäisen vuoden ajaksi',
        'Lisäpalkkaa ensimmäisenä vuonna',
        'Vapaan matkustuspäivän joka kuukausi',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Milloin Timo saa vastauksen haastattelusta viimeistään?',
      options: ['Samana päivänä', 'Ensi viikon perjantaina', 'Kuukauden kuluttua', 'Hän ei saa vastausta ollenkaan'],
      correctIndex: 1,
    },
  ],
}

export const week30Writing: WritingPrompt = {
  id: 'w-w30',
  weekId: 30,
  title: 'Kertaus: Argumentoiva kirjoitus – tekoäly kouluissa',
  level: 'B2',
  instructions:
    'Kirjoita argumentoiva mielipidekirjoitus aiheesta "Pitäisikö tekoälyn käyttöä rajoittaa kouluissa?". Ota kantaa heti alussa, perustele näkemyksesi monipuolisesti, käsittele myös vastakkaista näkökulmaa ja vastaa siihen, ja käytä tekstissäsi ainakin yhtä partisiippirakennetta (NUT- tai VA-partisiippi) sekä referointia.',
  minWords: 170,
  maxWords: 250,
  timeMinutes: 40,
  rubric: [
    'Ilmaisit selkeän kannan heti tekstin alussa.',
    'Perustelit näkemyksesi vähintään kahdella monipuolisella argumentilla.',
    'Käsittelit myös vastakkaista näkökulmaa ja vastasit siihen.',
    'Käytit ainakin yhtä partisiippirakennetta (NUT- tai VA-partisiippi) ja referointia.',
    'Teksti etenee johdonmukaisesti: johdanto, perustelut, vastaväite, yhteenveto.',
  ],
  modelAnswer:
    'Tekoälyn käyttöä ei mielestäni pidä rajoittaa kouluissa, vaan sen hyödyntämistä tulisi ohjata harkitusti osana opetusta.\n\nEnsinnäkin tekoäly voi tukea oppimista monella tavalla. Se voi esimerkiksi tarjota jokaiselle oppilaalle juuri hänen tasolleen sopivia tehtäviä, mikä on perinteisessä luokkaopetuksessa usein vaikeaa toteuttaa. Eräs opettaja totesi hiljattain haastattelussa, että tekoälyä hyödyntäneet oppilaat olivat edistyneet erityisesti kirjoittamisen harjoittelussa nopeammin kuin aiemmin. Tämä kokemus vahvistaa käsitystä siitä, että oikein käytettynä teknologia voi olla arvokas apuväline.\n\nToisaalta on ymmärrettävää, että osa vanhemmista ja opettajista suhtautuu kehitykseen varauksella. Huolena on erityisesti se, että liiallinen tekoälyn käyttäminen voisi heikentää oppilaiden omaa ajattelua ja kirjoitustaitoa, jos tehtävät tehtäisiin kokonaan koneen avulla. Tämä huoli on aiheellinen, eikä sitä pidä väheksyä.\n\nNäin ollen paras ratkaisu ei liene täydellinen kielto vaan selkeiden pelisääntöjen luominen: koulut voisivat esimerkiksi määritellä, missä tehtävissä tekoälyn käyttö on sallittua ja missä oppilaan odotetaan työskentelevän itsenäisesti. Näin oppilaat oppisivat käyttämään teknologiaa vastuullisesti sen sijaan, että se korvaisi heidän omaa oppimistaan kokonaan.\n\nKaiken kaikkiaan uskon, että harkitulla ja ohjatulla tekoälyn käytöllä koulut voivat valmistaa oppilaita paremmin nopeasti kehittyvään työelämään, jossa teknologian osaaminen on jo nyt välttämätöntä.',
}

export const week30Speaking: SpeakingPrompt = {
  id: 's-w30',
  weekId: 30,
  title: 'Kertaus: Referoi ja vertaile kahta näkemystä',
  level: 'B2',
  instructions:
    'Kuvittele, että osallistuit äskettäin paneelikeskusteluun, jossa kaksi asiantuntijaa esitti vastakkaisia näkemyksiä tekoälyn käytöstä työelämässä. Kerro, mitä kumpikin asiantuntija sanoi (käytä referointia: "Hän sanoi, että..."), vertaile heidän näkemyksiään, ja kerro lopuksi oma mielipiteesi.',
  prepSeconds: 60,
  speakSeconds: 120,
  helpfulPhrases: [
    'Ensimmäinen asiantuntija totesi, että...',
    'Toinen taas oli sitä mieltä, että...',
    'Heidän näkemyksensä erosivat siinä, että...',
    'Itse olen samaa/eri mieltä, koska...',
    'Kaiken kaikkiaan ajattelen, että...',
  ],
}
