import type { ListeningExercise, ReadingExercise, SpeakingPrompt, WritingPrompt } from '../../types'

export const week9Reading: ReadingExercise = {
  id: 'r-w9',
  weekId: 9,
  title: 'Matka Rovaniemelle',
  level: 'A2',
  textFi: `Viime viikonloppuna matkustin ystäväni kanssa Rovaniemelle. Ensin varasimme junaliput internetistä kaksi viikkoa etukäteen, koska liput olivat silloin halvempia. Sitten pakkasimme laukut ja lähdimme asemalle aikaisin aamulla.

Juna lähti Helsingistä kello kahdeksan, ja matka kesti melkein kahdeksan tuntia. Junassa oli vähän ruuhkaa, mutta löysimme hyvät paikat ikkunan vieressä. Katsoimme maisemia ja join kahvia ravintolavaunussa.

Rovaniemellä ensin menimme hotelliin ja jätimme laukut huoneeseen. Sitten kävelimme keskustassa ja söimme lounasta pienessä ravintolassa. Lopuksi menimme katsomaan revontulia illalla. Se oli upea kokemus!

Palasimme Helsinkiin bussilla, koska junaliput olivat loppuneet. Bussimatka oli pidempi ja väsyttävämpi kuin junamatka, mutta koko reissu oli mukava. Ensi kesänä haluamme matkustaa Lappiin uudestaan, mutta silloin lentokoneella.`,
  questions: [
    {
      id: 'q1',
      question: 'Milloin kirjoittaja ja ystävä varasivat junaliput?',
      options: [
        'Samana päivänä kuin matka alkoi.',
        'Kaksi viikkoa etukäteen.',
        'Kuukausi etukäteen.',
        'He eivät varanneet lippuja etukäteen.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Kuinka kauan junamatka Rovaniemelle kesti?',
      options: ['Kaksi tuntia', 'Viisi tuntia', 'Melkein kahdeksan tuntia', 'Kaksitoista tuntia'],
      correctIndex: 2,
    },
    {
      id: 'q3',
      question: 'Mitä he tekivät Rovaniemellä ensin?',
      options: [
        'He söivät lounasta.',
        'He menivät hotelliin ja jättivät laukut huoneeseen.',
        'He katsoivat revontulia.',
        'He lähtivät heti takaisin Helsinkiin.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q4',
      question: 'Miksi he palasivat Helsinkiin bussilla eivätkä junalla?',
      options: [
        'Bussi oli halvempi.',
        'Junaliput olivat loppuneet.',
        'He halusivat nähdä enemmän maisemia.',
        'Juna ei kulje Rovaniemeltä Helsinkiin.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q5',
      question: 'Miten he haluavat matkustaa Lappiin ensi kesänä?',
      options: ['Junalla', 'Bussilla', 'Lentokoneella', 'Autolla'],
      correctIndex: 2,
    },
  ],
}

export const week9Listening: ListeningExercise = {
  id: 'l-w9',
  weekId: 9,
  title: 'Lipun ostaminen asemalla',
  level: 'A2',
  scriptFi: `Myyjä: Hyvää päivää, mitä saisi olla?
Matkustaja: Hei, haluaisin ostaa lipun Tampereelle. Milloin seuraava juna lähtee?
Myyjä: Seuraava juna lähtee kello 14.15, mutta siinä junassa on paljon ruuhkaa tänään.
Matkustaja: Onko myöhemmin toista junaa?
Myyjä: On, kello 15.30 lähtevässä junassa on enemmän tilaa.
Matkustaja: Otan sitten sen. Paljonko lippu maksaa?
Myyjä: Yhdensuuntainen lippu maksaa kaksikymmentäkahdeksan euroa.
Matkustaja: Voinko maksaa kortilla?
Myyjä: Kyllä, tietysti. Haluatko paikkalipun myös?
Matkustaja: Kyllä kiitos, ikkunapaikka jos mahdollista.
Myyjä: Selvä, tässä lippusi. Hyvää matkaa!`,
  questions: [
    {
      id: 'q1',
      question: 'Mihin kaupunkiin matkustaja haluaa lipun?',
      options: ['Turkuun', 'Tampereelle', 'Ouluun', 'Vaasaan'],
      correctIndex: 1,
    },
    {
      id: 'q2',
      question: 'Miksi matkustaja ei osta lippua kello 14.15 junaan?',
      options: [
        'Se juna on myöhässä.',
        'Siinä junassa on paljon ruuhkaa.',
        'Se juna ei pysähdy Tampereella.',
        'Lippu siihen junaan oli loppuunmyyty.',
      ],
      correctIndex: 1,
    },
    {
      id: 'q3',
      question: 'Paljonko yhdensuuntainen lippu maksaa?',
      options: ['18 euroa', '22 euroa', '28 euroa', '35 euroa'],
      correctIndex: 2,
    },
    {
      id: 'q4',
      question: 'Millaisen paikan matkustaja haluaa?',
      options: ['Käytävän vieressä olevan paikan', 'Ikkunapaikan', 'Ravintolavaunun paikan', 'Hän ei halua paikkalippua'],
      correctIndex: 1,
    },
  ],
}

export const week9Writing: WritingPrompt = {
  id: 'w-w9',
  weekId: 9,
  title: 'Kertomus matkasta',
  level: 'A2',
  instructions:
    'Kirjoita kertomus matkasta, jonka olet joskus tehnyt. Käytä imperfektiä (esim. matkustin, lähdin, näin) ja järjestä tapahtumat sanoilla ensin, sitten ja lopuksi. Kerro, minne matkustit, miten matkustit, ja mitä teit matkalla.',
  minWords: 60,
  maxWords: 120,
  timeMinutes: 25,
  rubric: [
    'Käytit imperfektiä (past-aikamuotoa) johdonmukaisesti.',
    'Käytit sanoja ensin, sitten ja lopuksi tapahtumien järjestyksessä.',
    'Kerroit, minne matkustit ja miten matkustit.',
    'Kuvasit ainakin kaksi asiaa, joita teit matkalla.',
    'Teksti on ymmärrettävä ja looginen.',
  ],
  modelAnswer:
    'Viime kesänä matkustin perheeni kanssa Turkuun. Ensin varasimme laivaliput ja hotellihuoneen internetistä. Sitten pakkasimme laukut ja lähdimme autolla kotoa aamulla varhain.\n\nMatka kesti noin kaksi tuntia, ja teillä oli jonkin verran ruuhkaa. Turussa ensin kävelimme tuomiokirkolle ja katsoimme sen historiaa. Sitten söimme lounasta kauppahallissa ja kävimme myös linnassa.\n\nLopuksi menimme illalla joenrantaan ja söimme jäätelöä. Palasimme kotiin seuraavana päivänä junalla, koska auto oli huollossa. Koko matka oli mukava, ja haluaisimme käydä Turussa uudestaan.',
}

export const week9Speaking: SpeakingPrompt = {
  id: 's-w9',
  weekId: 9,
  title: 'Kerro viimeisimmästä matkastasi',
  level: 'A2',
  instructions:
    'Kerro viimeisimmästä matkastasi. Käytä imperfektiä ja kerro tapahtumat järjestyksessä: mitä teit ensin, sitten ja lopuksi. Kerro, minne matkustit, kenen kanssa, ja miksi matka jäi mieleen.',
  prepSeconds: 45,
  speakSeconds: 90,
  helpfulPhrases: [
    'Viime vuonna/kesänä matkustin...',
    'Ensin me varasimme liput...',
    'Sitten menimme...',
    'Lopuksi kävimme...',
    'Matka jäi mieleeni, koska...',
  ],
}
