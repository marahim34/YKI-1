import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week16Reading: ReadingExercise = {
  id: 'r-w16',
  weekId: 16,
  title: 'Keskustelu uudesta pyörätiestä',
  level: 'B1',
  textFi: `Helsingin kaupunki suunnittelee uutta pyörätietä Mannerheimintielle, ja asukkaat kutsuttiin keskustelutilaisuuteen kertomaan mielipiteensä hankkeesta. Tilaisuudessa mielipiteet jakautuivat selvästi kahtia.

Moni nuori asukas oli hankkeen kannalla. Eräs opiskelija totesi: "Mielestäni pyörätie on erinomainen idea, koska se tekee pyöräilystä turvallisempaa ja vähentää autoliikennettä keskustassa." Myös ympäristöjärjestön edustaja oli samaa mieltä ja väitti, että pyöräily vähentäisi päästöjä huomattavasti, jos yhä useampi vaihtaisi auton pyörään.

Toisaalta osa yrittäjistä oli asiasta täysin eri mieltä, sillä he pelkäsivät liikevaihtonsa laskevan. He perustelivat kantaansa sillä, että pyörätie veisi tilaa autopaikoilta, mikä voisi vähentää asiakkaiden määrää kaupoissa. Yksi kauppias sanoi, ettei hän vastusta pyöräilyä sinänsä, mutta hänen mielestään suunnitelmaa pitäisi muuttaa niin, ettei parkkipaikkoja katoaisi kokonaan.

Kaupunki lupasi ottaa kaikki näkemykset huomioon ennen lopullista päätöstä. Lopullinen suunnitelma esitellään valtuustolle syksyllä, ja siihen asti asukkaat voivat vielä lähettää kommentteja kaupungin verkkosivujen kautta.`,
  questions: [
    {
      id: 'q1',
      question: 'Mistä aiheesta asukkaiden keskustelutilaisuudessa keskusteltiin?',
      options: [
        'Uudesta ostoskeskuksesta',
        'Uudesta pyörätiestä Mannerheimintielle',
        'Julkisen liikenteen lipun hinnasta',
        'Uudesta koulusta',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Miksi opiskelija kannatti pyörätietä?',
      options: [
        'Koska se lisäisi autopaikkoja',
        'Koska se toisi lisää rahaa kaupungille',
        'Koska se tekisi pyöräilystä turvallisempaa ja vähentäisi autoliikennettä',
        'Koska se lyhentäisi hänen työmatkaansa',
      ],
      correctIndex: 2,
    },
    {
      id: 'q3',
      question: 'Miksi osa yrittäjistä vastusti hanketta?',
      options: [
        'He pelkäsivät liikevaihdon laskevan autopaikkojen vähentyessä',
        'He pelkäsivät melun lisääntyvän',
        'He eivät pitäneet pyöräilystä lainkaan',
        'He halusivat rakentaa oman pysäköintitalon',
      ],
      correctIndex: 0,
    },
    {
      id: 'q4',
      question: 'Mitä kauppias ehdotti tekstin mukaan?',
      options: [
        'Että pyörätiehanke pitäisi peruuttaa kokonaan',
        'Että pyörätie rakennettaisiin toiseen kaupunginosaan',
        'Että kaupunki maksaisi yrittäjille korvauksia',
        'Että suunnitelmaa muutettaisiin niin, ettei parkkipaikkoja katoaisi kokonaan',
      ],
      correctIndex: 3,
    },
    {
      id: 'q5',
      question: 'Mitä tekstistä voi päätellä kaupungin suhtautumisesta asukkaiden mielipiteisiin?',
      options: [
        'Kaupunki on jo tehnyt lopullisen päätöksen eikä ota mielipiteitä huomioon',
        'Kaupunki haluaa kuulla eri näkemyksiä ennen lopullista päätöstä',
        'Kaupunki on hylännyt koko pyörätiehankkeen',
        'Kaupunki päättää asiasta ilman keskustelutilaisuuksia',
      ],
      correctIndex: 1,
    },
  ],
}

export const week16Listening: ListeningExercise = {
  id: 'l-w16',
  weekId: 16,
  title: 'Pitäisikö äänestysikä laskea?',
  level: 'B1',
  scriptFi: `Emma: Oletko lukenut, että moni ehdottaa äänestysiän laskemista 16 vuoteen?
Joonas: Olen kuullut siitä. Mitä mieltä sinä olet asiasta?
Emma: Mielestäni se olisi hyvä idea, koska nuoret ovat jo kiinnostuneita yhteiskunnallisista asioista ja heidän äänensä pitäisi kuulua.
Joonas: Minä olen vähän eri mieltä. Minusta 16-vuotiaat eivät välttämättä ymmärrä politiikkaa tarpeeksi hyvin, koska heillä ei ole vielä paljon elämänkokemusta.
Emma: Toisaalta monet 16-vuotiaat opiskelevat yhteiskuntaoppia koulussa, joten heillä on tietoa asioista siinä missä aikuisillakin.
Joonas: Se on totta. Mutta väitän silti, että päätös on niin iso, että kannattaisi odottaa vähän vanhemmaksi.
Emma: No, ehkä paras ratkaisu olisi kokeilla asiaa ensin esimerkiksi kunnallisvaaleissa, ennen kuin sitä sovelletaan kaikkiin vaaleihin.
Joonas: Se kuulostaa mielestäni järkevältä kompromissilta.`,
  questions: [
    {
      id: 'q1',
      question: 'Mitä Emma ehdottaa keskustelun aiheeksi?',
      options: [
        'Äänestysiän laskemista 16 vuoteen',
        'Koulujen kesälomien pidentämistä',
        'Julkisen liikenteen hintoja',
        'Työajan lyhentämistä',
      ],
      correctIndex: 0,
    },
    {
      id: 'q2',
      question: 'Miksi Joonas on aluksi eri mieltä Emman kanssa?',
      options: [
        'Hän ei usko nuorten olevan kiinnostuneita politiikasta',
        'Hän ajattelee, ettei 16-vuotiailla ole vielä tarpeeksi elämänkokemusta',
        'Hän ei halua muutoksia lakiin ollenkaan',
        'Hän luulee, ettei asia kiinnosta ketään',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Minkä perusteen Emma antaa nuorten äänestysoikeuden puolesta?',
      options: [
        'Nuoret maksavat jo veroja',
        'Monet nuoret opiskelevat yhteiskuntaoppia ja tietävät asioista',
        'Nuoret äänestäisivät todennäköisemmin kuin aikuiset',
        'Laki vaatii sitä pian joka tapauksessa',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Mihin ratkaisuun keskustelu lopulta päätyy?',
      options: [
        'Äänestysikää ei muuteta ollenkaan',
        'Asiaa kokeillaan ensin esimerkiksi kunnallisvaaleissa',
        'Äänestysikä lasketaan heti 14 vuoteen',
        'Molemmat päättävät olla äänestämättä',
      ],
      correctIndex: 1,
    },
  ],
}

export const week16Writing: WritingPrompt = {
  id: 'w-w16',
  weekId: 16,
  title: 'Mielipideviesti: Pitäisikö koulupäivän alkaa myöhemmin?',
  level: 'B1',
  instructions:
    'Kirjoita mielipideviesti koulun keskustelupalstalle aiheesta "Pitäisikö koulupäivän alkaa myöhemmin aamulla?". Kerro oma mielipiteesi heti alussa (esim. "Mielestäni...") ja perustele näkemyksesi vähintään kahdella syyllä käyttäen koska- tai sillä-sivulausetta. Voit myös mainita vastakkaisen näkökulman.',
  minWords: 80,
  maxWords: 150,
  timeMinutes: 30,
  rubric: [
    'Ilmaisit oman mielipiteesi selvästi heti alussa (esim. "Mielestäni...").',
    'Perustelit mielipiteesi ainakin kahdella syyllä.',
    'Käytit koska- tai sillä-sivulausetta perusteluissasi.',
    'Otit huomioon myös vastakkaisen näkökulman.',
    'Teksti on selkeästi jäsennelty ja pituudeltaan sopiva.',
  ],
  modelAnswer:
    'Mielestäni koulupäivän pitäisi alkaa myöhemmin aamulla, esimerkiksi kello yhdeksän kello kahdeksan sijaan.\n\nEnsinnäkin monet nuoret ovat väsyneitä aamulla, koska heidän luonnollinen unirytminsä on myöhäisempi kuin aikuisilla. Tutkimusten mukaan teini-ikäiset oppivat paremmin myöhemmin aamupäivällä, sillä aivot eivät ole vielä täysin hereillä heti herätessä.\n\nToiseksi myöhäisempi alkamisaika vähentäisi aamun kiirettä, koska perheillä olisi enemmän aikaa aamutoimiin ilman stressiä.\n\nToisaalta ymmärrän, että osa vanhemmista pitää nykyisestä aikataulusta, koska se sopii paremmin heidän työaikatauluihinsa. Silti uskon, että oppilaiden hyvinvointi ja oppiminen ovat tärkeämpiä kuin aikataulun mukavuus vanhemmille.\n\nNäistä syistä toivon, että koulut harkitsisivat myöhäisempää alkamisaikaa.',
}

export const week16Speaking: SpeakingPrompt = {
  id: 's-w16',
  weekId: 16,
  title: 'Ilmaise mielipiteesi: Sosiaalinen media nuorten elämässä',
  level: 'B1',
  instructions:
    'Ystäväsi kysyy sinulta: "Mitä mieltä olet sosiaalisen median vaikutuksesta nuoriin?" Kerro mielipiteesi ja perustele se ainakin kahdella syyllä. Käytä ilmauksia kuten "mielestäni" ja "koska" tai "sillä".',
  prepSeconds: 45,
  speakSeconds: 100,
  helpfulPhrases: [
    'Mielestäni...',
    'Olen samaa/eri mieltä, koska...',
    'Toisaalta...',
    'Väitän, että...',
    'Perustelen tätä sillä, että...',
  ],
}
