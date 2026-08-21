import type { BookPracticeChapter } from '../types'

export const BOOK_PRACTICE: BookPracticeChapter[] = [
  // ───────────────────────── Suomen Mestari 1 ─────────────────────────
  {
    id: 'sm1-ch1',
    book: 'Suomen Mestari 1',
    chapterLabel: 'Luku 1–2: Tervehdykset ja esittäytyminen',
    level: 'A1',
    topic: 'Tervehdykset ja esittäytyminen',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'hello'?", options: ['Hei', 'Kiitos', 'Anteeksi', 'Näkemiin'], correctIndex: 0 },
      { question: 'Mitä sanotaan, kun lähdet pois?', options: ['Huomenta', 'Näkemiin', 'Ole hyvä', 'Kiitos'], correctIndex: 1 },
      { question: 'Mikä sana sopii lauseeseen: Mikä sinun ___ on?', options: ['nimi', 'ikä', 'koti', 'kieli'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'thank you'?", options: ['Anteeksi', 'Kiitos', 'Hei hei', 'Terve'], correctIndex: 1 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause oikealla persoonapronominilla tai olla-verbin muodolla.',
      items: [
        { prompt: 'Minä ___ suomalainen.', answer: 'olen', hint: 'olla, minä-muoto' },
        { prompt: '___ sinä opiskelija?', answer: 'oletko', hint: 'kysymyslause, olla+ko' },
        { prompt: 'Hän ___ Anna.', answer: 'on', hint: 'olla, hän-muoto' },
        { prompt: 'Me ___ Helsingistä.', answer: 'olemme', hint: 'olla, me-muoto' },
      ],
    },
    grammarTopicIds: ['persoonapronominit-olla', 'kysymyslauseet'],
  },
  {
    id: 'sm1-ch2',
    book: 'Suomen Mestari 1',
    chapterLabel: 'Luku 3–4: Perhe',
    level: 'A1',
    topic: 'Perhe',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'sister'?", options: ['sisko', 'veli', 'äiti', 'isä'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'brother'?", options: ['täti', 'veli', 'serkku', 'poika'], correctIndex: 1 },
      { question: 'Kuka on perheen nuorin jäsen usein?', options: ['isoisä', 'äiti', 'vauva', 'setä'], correctIndex: 2 },
      { question: "Mikä sana tarkoittaa 'parents'?", options: ['lapset', 'sisarukset', 'sukulaiset', 'vanhemmat'], correctIndex: 3 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause oikealla omistusliitteellä.',
      items: [
        { prompt: 'Tämä on ___ (minä) sisko.', answer: 'siskoni', hint: 'omistusliite -ni' },
        { prompt: 'Onko tämä ___ (sinä) veli?', answer: 'veljesi', hint: 'omistusliite -si; veli → velje-' },
        { prompt: 'Heidän ___ (he) koira on söpö.', answer: 'koiransa', hint: 'omistusliite -nsa' },
        { prompt: 'Meidän ___ (me) äiti asuu Turussa.', answer: 'äitimme', hint: 'omistusliite -mme' },
      ],
    },
    grammarTopicIds: ['omistusliitteet', 'sijamuodot-perusteet'],
  },
  {
    id: 'sm1-ch3',
    book: 'Suomen Mestari 1',
    chapterLabel: 'Luku 5–6: Arki ja kellonajat',
    level: 'A1',
    topic: 'Arki ja kellonajat',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'morning'?", options: ['aamu', 'ilta', 'yö', 'päivä'], correctIndex: 0 },
      { question: "Paljonko kello on, kun sanotaan 'varttia vaille yhdeksän'?", options: ['9.15', '8.45', '9.45', '8.15'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'to wake up'?", options: ['nukkua', 'syödä', 'herätä', 'mennä'], correctIndex: 2 },
      { question: "Mikä sana tarkoittaa 'evening'?", options: ['aamu', 'päivä', 'yö', 'ilta'], correctIndex: 3 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause verbin preesensmuodolla.',
      items: [
        { prompt: 'Minä ___ (herätä) kello seitsemän.', answer: 'herään', hint: 'preesens, minä' },
        { prompt: 'Hän ___ (mennä) töihin kahdeksalta.', answer: 'menee', hint: 'preesens, hän; mennä → mene-' },
        { prompt: 'Me ___ (syödä) lounasta kello kaksitoista.', answer: 'syömme', hint: 'preesens, me' },
        { prompt: 'Sinä ___ (nukkua) yleensä kello yksitoista.', answer: 'nukut', hint: 'preesens, sinä' },
      ],
    },
    grammarTopicIds: ['kellonajat', 'preesens'],
  },
  {
    id: 'sm1-ch4',
    book: 'Suomen Mestari 1',
    chapterLabel: 'Luku 7–8: Ruoka ja ostokset',
    level: 'A2',
    topic: 'Ruoka ja ostokset',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'bread'?", options: ['leipä', 'maito', 'juusto', 'liha'], correctIndex: 0 },
      { question: 'Missä ostat ruokaa?', options: ['kirjastossa', 'kaupassa', 'sairaalassa', 'koulussa'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'cheap'?", options: ['kallis', 'hyvä', 'halpa', 'huono'], correctIndex: 2 },
      { question: 'Mikä sana sopii lauseeseen: Minä ostan kaksi kiloa ___.', options: ['omena', 'omenaa', 'omenat', 'omenia'], correctIndex: 1 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause objektin oikealla sijamuodolla (partitiivi).',
      items: [
        { prompt: 'Minä ostan ___ (leipä).', answer: 'leipää', hint: 'partitiivi' },
        { prompt: 'Hän syö ___ (omena) joka päivä.', answer: 'omenaa', hint: 'partitiivi' },
        { prompt: 'Me juomme ___ (maito) aamulla.', answer: 'maitoa', hint: 'partitiivi' },
        { prompt: 'Ostatko sinä ___ (kahvi)?', answer: 'kahvia', hint: 'partitiivi' },
      ],
    },
    grammarTopicIds: ['objektin-sijamuodot', 'monikko'],
  },
  {
    id: 'sm1-ch5',
    book: 'Suomen Mestari 1',
    chapterLabel: 'Luku 9–10: Koti ja asuminen',
    level: 'A2',
    topic: 'Koti ja asuminen',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'kitchen'?", options: ['keittiö', 'makuuhuone', 'olohuone', 'kylpyhuone'], correctIndex: 0 },
      { question: 'Missä nukut?', options: ['keittiössä', 'makuuhuoneessa', 'olohuoneessa', 'eteisessä'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'balcony'?", options: ['piha', 'kellari', 'parveke', 'katto'], correctIndex: 2 },
      { question: "Mikä sana tarkoittaa 'rent' (vuokra-asumisessa)?", options: ['omistaa', 'myydä', 'ostaa', 'vuokrata'], correctIndex: 3 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause oikealla paikallissijalla (sisä- tai ulkopaikallissija).',
      items: [
        { prompt: 'Kirja on ___ (pöytä).', answer: 'pöydällä', hint: 'ulkopaikallissija, adessiivi' },
        { prompt: 'Minä asun ___ (kerrostalo).', answer: 'kerrostalossa', hint: 'sisäpaikallissija, inessiivi' },
        { prompt: 'Hän menee ___ (keittiö).', answer: 'keittiöön', hint: 'sisäpaikallissija, illatiivi' },
        { prompt: 'Auto on ___ (piha).', answer: 'pihalla', hint: 'ulkopaikallissija, adessiivi' },
      ],
    },
    grammarTopicIds: ['sisapaikallissijat', 'ulkopaikallissijat'],
  },
  {
    id: 'sm1-ch6',
    book: 'Suomen Mestari 1',
    chapterLabel: 'Luku 11–12: Sää ja vapaa-aika',
    level: 'A2',
    topic: 'Sää ja vapaa-aika',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'rain'?", options: ['sade', 'lumi', 'aurinko', 'tuuli'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'cold'?", options: ['lämmin', 'kylmä', 'kuuma', 'sateinen'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'hobby'?", options: ['työ', 'koulu', 'harrastus', 'koti'], correctIndex: 2 },
      { question: "Minkä sanan vastakohta on 'kylmä'?", options: ['sateinen', 'pilvinen', 'tuulinen', 'lämmin'], correctIndex: 3 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause verbin imperfektimuodolla.',
      items: [
        { prompt: 'Eilen ___ (sataa) koko päivän.', answer: 'satoi', hint: 'imperfekti, hän/se-muoto' },
        { prompt: 'Viime kesänä me ___ (uida) joka päivä.', answer: 'uimme', hint: 'imperfekti, me' },
        { prompt: 'Hän ___ (pelata) jalkapalloa lapsena.', answer: 'pelasi', hint: 'imperfekti, hän' },
        { prompt: 'Minä ___ (matkustaa) Ruotsiin viime vuonna.', answer: 'matkustin', hint: 'imperfekti, minä' },
      ],
    },
    grammarTopicIds: ['imperfekti', 'komparointi'],
  },

  // ───────────────────────── Suomen Mestari 2 ─────────────────────────
  {
    id: 'sm2-ch1',
    book: 'Suomen Mestari 2',
    chapterLabel: 'Luku 1–2: Työnhaku',
    level: 'A2',
    topic: 'Työnhaku',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'job application'?", options: ['työhakemus', 'työsopimus', 'palkka', 'haastattelu'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'interview'?", options: ['ansioluettelo', 'haastattelu', 'ilmoitus', 'hakemus'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'CV/resume'?", options: ['työpaikka', 'palkka', 'ansioluettelo', 'sopimus'], correctIndex: 2 },
      { question: "Mikä sana tarkoittaa 'salary'?", options: ['hakemus', 'haastattelu', 'sopimus', 'palkka'], correctIndex: 3 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause modaaliverbillä tai MA-infinitiivillä.',
      items: [
        { prompt: 'Minun täytyy ___ (kirjoittaa) hyvä ansioluettelo.', answer: 'kirjoittaa', hint: 'täytyy + perusmuoto (A-infinitiivi)' },
        { prompt: 'Voitko sinä ___ (auttaa) minua hakemuksen kanssa?', answer: 'auttaa', hint: 'voida + A-infinitiivi' },
        { prompt: 'Hän meni toimistoon ___ (jättää) hakemuksen.', answer: 'jättämään', hint: 'MA-infinitiivi, illatiivi' },
        { prompt: 'Minä olen juuri nyt työtä ___ (etsiä).', answer: 'etsimässä', hint: 'MA-infinitiivi, inessiivi: olla tekemässä' },
      ],
    },
    grammarTopicIds: ['modaaliverbit', 'ma-infinitiivi'],
  },
  {
    id: 'sm2-ch2',
    book: 'Suomen Mestari 2',
    chapterLabel: 'Luku 3–4: Opiskelu',
    level: 'A2',
    topic: 'Opiskelu',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'exam'?", options: ['tentti', 'luento', 'kurssi', 'tutkinto'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'lecture'?", options: ['tentti', 'luento', 'essee', 'tauko'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'degree'?", options: ['kurssi', 'opiskelija', 'tutkinto', 'opettaja'], correctIndex: 2 },
      { question: "Mikä sana tarkoittaa 'essay/assignment'?", options: ['tentti', 'luento', 'arvosana', 'essee'], correctIndex: 3 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause konditionaalilla tai sopivalla sivulauseella.',
      items: [
        { prompt: 'Minä ___ (haluta) opiskella lisää matematiikkaa.', answer: 'haluaisin', hint: 'konditionaali, minä' },
        { prompt: 'Hän sanoi, ___ hän ei ehdi tentin lukemiseen.', answer: 'että', hint: 'sivulause, konjunktio että' },
        { prompt: 'Jos sinulla ___ (olla) enemmän aikaa, opiskelisit joka päivä.', answer: 'olisi', hint: 'konditionaali, hän/se' },
        { prompt: 'Me emme päässeet luennolle, ___ juna myöhästyi.', answer: 'koska', hint: 'sivulause, syy' },
      ],
    },
    grammarTopicIds: ['konditionaali', 'sivulauseet'],
  },
  {
    id: 'sm2-ch3',
    book: 'Suomen Mestari 2',
    chapterLabel: 'Luku 5–6: Yhteiskunta ja media',
    level: 'B1',
    topic: 'Yhteiskunta ja media',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'news'?", options: ['uutiset', 'lehti', 'mainos', 'ohjelma'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'election'?", options: ['laki', 'vaalit', 'hallitus', 'media'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'government'?", options: ['eduskunta', 'hallitus', 'kunta', 'virasto'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'newspaper'?", options: ['uutiset', 'kanava', 'some', 'lehti'], correctIndex: 3 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause passiivin preesensmuodolla tai referoinnilla.',
      items: [
        { prompt: 'Suomessa ___ (äänestää) presidentinvaaleissa kuuden vuoden välein.', answer: 'äänestetään', hint: 'passiivi, preesens' },
        { prompt: 'Tässä lehdessä ___ (kirjoittaa) usein politiikasta.', answer: 'kirjoitetaan', hint: 'passiivi, preesens' },
        { prompt: 'Toimittaja kertoi, että hallitus ___ (aikoa) muuttaa lakia.', answer: 'aikoo', hint: 'referointi, että-lause' },
        { prompt: 'Uutisissa sanottiin, että sää ___ (muuttua) viikonloppuna.', answer: 'muuttuu', hint: 'referointi, preesens säilyy' },
      ],
    },
    grammarTopicIds: ['passiivi-preesens', 'referointi'],
  },
  {
    id: 'sm2-ch4',
    book: 'Suomen Mestari 2',
    chapterLabel: 'Luku 7–8: Raha ja talous',
    level: 'B1',
    topic: 'Raha ja talous',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'budget'?", options: ['budjetti', 'lasku', 'säästö', 'laina'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'loan'?", options: ['säästö', 'laina', 'vero', 'palkka'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'tax'?", options: ['vero', 'korko', 'osake', 'tili'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'savings'?", options: ['lasku', 'korko', 'säästöt', 'budjetti'], correctIndex: 2 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause konditionaalilla tai komparatiivi-/superlatiivimuodolla.',
      items: [
        { prompt: 'Jos voittaisin lotossa, ___ (ostaa) uuden asunnon.', answer: 'ostaisin', hint: 'konditionaali, minä' },
        { prompt: 'Tämä laina on ___ (halpa) kuin se toinen.', answer: 'halvempi', hint: 'komparatiivi' },
        { prompt: 'Hän ___ (säästää) rahaa, jos palkka olisi suurempi.', answer: 'säästäisi', hint: 'konditionaali, hän' },
        { prompt: 'Tämä on kaupungin ___ (edullinen) pankki.', answer: 'edullisin', hint: 'superlatiivi' },
      ],
    },
    grammarTopicIds: ['konditionaali', 'komparointi'],
  },
  {
    id: 'sm2-ch5',
    book: 'Suomen Mestari 2',
    chapterLabel: 'Luku 9–10: Ympäristö',
    level: 'B1',
    topic: 'Ympäristö',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'environment'?", options: ['ympäristö', 'ilmasto', 'luonto', 'saaste'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'climate change'?", options: ['ilmastonmuutos', 'saastuminen', 'kierrätys', 'energia'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'recycling'?", options: ['energia', 'kierrätys', 'jäte', 'luonto'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'pollution'?", options: ['uusiutuva', 'kestävyys', 'saastuminen', 'metsä'], correctIndex: 2 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause passiivin imperfektillä tai relatiivipronominilla (joka/jotka).',
      items: [
        { prompt: 'Viime vuonna kaupungissa ___ (rakentaa) uusi kierrätyskeskus.', answer: 'rakennettiin', hint: 'passiivi, imperfekti' },
        { prompt: 'Metsä, ___ kasvaa lähellä kotiani, on hyvin vanha.', answer: 'joka', hint: 'relatiivipronomini, yksikkö' },
        { prompt: 'Ihmiset, ___ välittävät ympäristöstä, kierrättävät enemmän.', answer: 'jotka', hint: 'relatiivipronomini, monikko' },
        { prompt: 'Ennen tätä lakia jätteitä ei ___ (lajitella) yhtä tarkasti.', answer: 'lajiteltu', hint: 'passiivi, imperfekti kielteinen: ei lajiteltu' },
      ],
    },
    grammarTopicIds: ['passiivi-imperfekti', 'relatiivilauseet'],
  },
  {
    id: 'sm2-ch6',
    book: 'Suomen Mestari 2',
    chapterLabel: 'Luku 11–12: Tulevaisuus ja matkasuunnitelmat',
    level: 'B1',
    topic: 'Tulevaisuus ja matkasuunnitelmat',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'plan' (suunnitelma)?", options: ['suunnitelma', 'matka', 'lippu', 'reitti'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'destination'?", options: ['matkalaukku', 'kohde', 'passi', 'aikataulu'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'ticket'?", options: ['lippu', 'reitti', 'passi', 'viisumi'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'to book' (varata)?", options: ['matkustaa', 'saapua', 'lähteä', 'varata'], correctIndex: 3 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause tulevaisuuden ilmaisulla tai NUT-partisiipilla.',
      items: [
        { prompt: 'Ensi kesänä me ___ (matkustaa) Japaniin.', answer: 'matkustamme', hint: 'preesens ilmaisee tulevaa' },
        { prompt: 'Aiomme ___ (varata) hotellin ennen matkaa.', answer: 'varata', hint: 'aikoa + A-infinitiivi, tulevaisuuden ilmaus' },
        { prompt: 'Olemme jo ___ (ostaa) lentoliput.', answer: 'ostaneet', hint: 'NUT-partisiippi, perfekti: olemme ostaneet' },
        { prompt: 'Hän on aiemmin ___ (matkustaa) Aasiassa monta kertaa.', answer: 'matkustanut', hint: 'NUT-partisiippi, perfekti' },
      ],
    },
    grammarTopicIds: ['tulevaisuus', 'nut-partisiippi'],
  },

  // ───────────────────────── Suomen Mestari 3 ─────────────────────────
  {
    id: 'sm3-ch1',
    book: 'Suomen Mestari 3',
    chapterLabel: 'Luku 1–2: Viestintä työelämässä',
    level: 'B1',
    topic: 'Viestintä työelämässä',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'meeting'?", options: ['kokous', 'lasku', 'ilmoitus', 'sopimus'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'deadline'?", options: ['määräaika', 'aikataulu', 'kalenteri', 'tauko'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'colleague'?", options: ['esimies', 'työkaveri', 'asiakas', 'johtaja'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'report'?", options: ['muistio', 'esitys', 'raportti', 'liite'], correctIndex: 2 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause passiivin preesensillä tai imperatiivimuodolla.',
      items: [
        { prompt: 'Kokouksessa ___ (keskustella) uudesta projektista.', answer: 'keskustellaan', hint: 'passiivi, preesens' },
        { prompt: '___ (lähettää) minulle raportti huomiseen mennessä!', answer: 'lähetä', hint: 'imperatiivi, sinä-muoto' },
        { prompt: 'Tässä yrityksessä ___ (käyttää) sähköpostia paljon.', answer: 'käytetään', hint: 'passiivi, preesens' },
        { prompt: 'Olkaa hyvä ja ___ (odottaa) hetki.', answer: 'odottakaa', hint: 'imperatiivi, te-muoto' },
      ],
    },
    grammarTopicIds: ['passiivi-preesens', 'imperatiivi'],
  },
  {
    id: 'sm3-ch2',
    book: 'Suomen Mestari 3',
    chapterLabel: 'Luku 3–4: Yhteiskunnalliset aiheet',
    level: 'B1',
    topic: 'Yhteiskunnalliset aiheet',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'equality'?", options: ['tasa-arvo', 'oikeus', 'velvollisuus', 'vapaus'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'citizen'?", options: ['kansalainen', 'maahanmuuttaja', 'virkamies', 'poliitikko'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'right' (oikeus)?", options: ['laki', 'oikeus', 'sääntö', 'velvollisuus'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'duty/obligation'?", options: ['vapaus', 'tasa-arvo', 'velvollisuus', 'kansalainen'], correctIndex: 2 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause relatiivipronominilla tai sopivalla sivulauseen konjunktiolla.',
      items: [
        { prompt: 'Laki, ___ hyväksyttiin viime vuonna, koskee kaikkia kansalaisia.', answer: 'joka', hint: 'relatiivipronomini, yksikkö' },
        { prompt: 'Ihmiset uskovat, ___ tasa-arvo on tärkeää.', answer: 'että', hint: 'sivulause, että' },
        { prompt: 'Palvelut, ___ kunta tarjoaa, ovat monille ilmaisia.', answer: 'joita', hint: 'relatiivipronomini, partitiivi monikko' },
        { prompt: 'Moni ei äänestä, ___ ei usko vaalien vaikuttavan mihinkään.', answer: 'koska', hint: 'sivulause, syy' },
      ],
    },
    grammarTopicIds: ['relatiivilauseet', 'sivulauseet'],
  },
  {
    id: 'sm3-ch3',
    book: 'Suomen Mestari 3',
    chapterLabel: 'Luku 5–6: Teknologia ja digitalisaatio',
    level: 'B2',
    topic: 'Teknologia ja digitalisaatio',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'application (app)'?", options: ['sovellus', 'laite', 'verkko', 'ohjelmisto'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'artificial intelligence'?", options: ['tekoäly', 'robotiikka', 'ohjelmointi', 'data'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'device'?", options: ['sovellus', 'laite', 'järjestelmä', 'verkko'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'data'?", options: ['tieto', 'data', 'ohjelma', 'koodi'], correctIndex: 1 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause passiivin konditionaalilla tai nominalisoinnilla (teon nimi).',
      items: [
        { prompt: 'Tekoälyä ___ (voida) hyödyntää monella alalla, jos siihen panostettaisiin.', answer: 'voitaisiin', hint: 'passiivin konditionaali' },
        { prompt: 'Uusi järjestelmä ___ (ottaa) käyttöön, jos rahoitus varmistuisi.', answer: 'otettaisiin', hint: 'passiivin konditionaali' },
        { prompt: 'Sovelluksen ___ (käyttää) on lisääntynyt viime vuosina.', answer: 'käyttö', hint: 'nominalisointi: käyttää → käyttö' },
        { prompt: 'Tietojen ___ (kerätä) herättää monia kysymyksiä yksityisyydestä.', answer: 'kerääminen', hint: 'nominalisointi, -minen-johdos' },
      ],
    },
    grammarTopicIds: ['passiivin-konditionaali', 'nominalisointi'],
  },
  {
    id: 'sm3-ch4',
    book: 'Suomen Mestari 3',
    chapterLabel: 'Luku 7–8: Kulttuuri ja taide',
    level: 'B2',
    topic: 'Kulttuuri ja taide',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'exhibition'?", options: ['näyttely', 'konsertti', 'esitys', 'teos'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'artwork'?", options: ['taiteilija', 'teos', 'galleria', 'näytelmä'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'author/writer'?", options: ['kirjailija', 'ohjaaja', 'näyttelijä', 'säveltäjä'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'director (elokuva)'?", options: ['kirjailija', 'säveltäjä', 'ohjaaja', 'kriitikko'], correctIndex: 2 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause NUT-partisiipilla tai VA-partisiipilla.',
      items: [
        { prompt: 'Näyttelyssä oli monta ___ (maalata) taulua.', answer: 'maalattua', hint: 'NUT-partisiippi, passiivin partisiippi: maalattu' },
        { prompt: 'Kirjailijan äskettäin ___ (julkaista) romaani sai hyvää palautetta.', answer: 'julkaisema', hint: 'VA-partisiippi (agenttipartisiippi): tekijä genetiivissä + partisiippi' },
        { prompt: 'Museossa esitellään taiteilijan ___ (tehdä) teoksia.', answer: 'tekemiä', hint: 'VA-partisiippi, monikon partitiivi: tekemiä' },
        { prompt: 'Elokuva kertoo lapsuudessa ___ (kadota) taulusta.', answer: 'kadonneesta', hint: 'NUT-partisiippi, elatiivi: kadonnut → kadonneesta' },
      ],
    },
    grammarTopicIds: ['nut-partisiippi', 'va-partisiippi'],
  },
  {
    id: 'sm3-ch5',
    book: 'Suomen Mestari 3',
    chapterLabel: 'Luku 9–10: Mielipiteenvaihto ja väittely',
    level: 'B2',
    topic: 'Mielipiteenvaihto ja väittely',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'opinion'?", options: ['mielipide', 'väite', 'argumentti', 'näkökulma'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'argument (perustelu)'?", options: ['mielipide', 'perustelu', 'väittely', 'kritiikki'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'to disagree'?", options: ['olla samaa mieltä', 'olla eri mieltä', 'väittää', 'epäillä'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'debate'?", options: ['keskustelu', 'väittely', 'haastattelu', 'luento'], correctIndex: 1 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause argumentointi-ilmauksella tai lauseenvastikkeella.',
      items: [
        { prompt: 'Minun ___ (mieli), koulutuksen pitäisi olla ilmaista.', answer: 'mielestäni', hint: 'argumentointi-ilmaus: mielestäni (mieli + stä + ni)' },
        { prompt: 'Toisaalta voidaan väittää, ___ verojen nostaminen hidastaa taloutta.', answer: 'että', hint: 'argumentointi, sivulauseen että' },
        { prompt: '___ (myöntää) ongelman olemassaolon, poliitikko ei ehdottanut ratkaisua.', answer: 'myöntäessään', hint: 'lauseenvastike, temporaalinen -essa/-essään' },
        { prompt: '___ (lukea) tutkimuksen loppuun asti ymmärsimme paremmin aiheen.', answer: 'luettuamme', hint: 'lauseenvastike, temporaalinen, mennyt: luettuamme' },
      ],
    },
    grammarTopicIds: ['argumentointi', 'lauseenvastikkeet'],
  },
  {
    id: 'sm3-ch6',
    book: 'Suomen Mestari 3',
    chapterLabel: 'Luku 11–12: Työelämän muutokset',
    level: 'B2',
    topic: 'Työelämän muutokset',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'remote work'?", options: ['etätyö', 'osa-aikatyö', 'työharjoittelu', 'vuorotyö'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'redundancy/layoff'?", options: ['ylennys', 'irtisanominen', 'palkkaus', 'eläke'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'promotion'?", options: ['ylennys', 'irtisanominen', 'koulutus', 'loma'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'retirement'?", options: ['loma', 'palkka', 'eläke', 'tauko'], correctIndex: 2 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause passiivin imperfektillä tai nominalisoinnilla.',
      items: [
        { prompt: 'Monissa yrityksissä ___ (siirtyä) etätyöhön pandemian aikana.', answer: 'siirryttiin', hint: 'passiivi, imperfekti' },
        { prompt: 'Työntekijöiden ___ (kouluttaa) uusiin järjestelmiin kesti kauan.', answer: 'kouluttaminen', hint: 'nominalisointi, -minen-johdos' },
        { prompt: 'Viime vuonna tehtaassa ___ (irtisanoa) kymmeniä työntekijöitä.', answer: 'irtisanottiin', hint: 'passiivi, imperfekti' },
        { prompt: 'Etätyön ___ (lisääntyä) on muuttanut työkulttuuria paljon.', answer: 'lisääntyminen', hint: 'nominalisointi, -minen-johdos' },
      ],
    },
    grammarTopicIds: ['passiivi-imperfekti', 'nominalisointi'],
  },

  // ───────────────────────── Oma Suomi 1 ─────────────────────────
  {
    id: 'os1-ch1',
    book: 'Oma Suomi 1',
    chapterLabel: 'Luku 1–2: Esittäytyminen ja arki',
    level: 'A1',
    topic: 'Esittäytyminen ja arki',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'name'?", options: ['nimi', 'ikä', 'osoite', 'ammatti'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'where from'?", options: ['mitä', 'missä', 'mistä', 'miksi'], correctIndex: 2 },
      { question: "Mikä on sopiva vastaus kysymykseen 'Mistä sinä olet kotoisin?'", options: ['Olen kotoisin Suomesta.', 'Olen kolmekymmentä vuotta.', 'Olen opettaja.', 'Olen kotona.'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'occupation/job'?", options: ['harrastus', 'osoite', 'perhe', 'ammatti'], correctIndex: 3 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause olla-verbillä tai preesensmuodolla.',
      items: [
        { prompt: 'Minä ___ kotoisin Virosta.', answer: 'olen', hint: 'olla, minä-muoto' },
        { prompt: 'Hän ___ (asua) Tampereella.', answer: 'asuu', hint: 'preesens, hän' },
        { prompt: 'Me ___ (puhua) suomea vähän.', answer: 'puhumme', hint: 'preesens, me' },
        { prompt: '___ sinä opiskelija vai työntekijä?', answer: 'oletko', hint: 'kysymyslause: olla+ko' },
      ],
    },
    grammarTopicIds: ['persoonapronominit-olla', 'preesens'],
  },
  {
    id: 'os1-ch2',
    book: 'Oma Suomi 1',
    chapterLabel: 'Luku 3–4: Asuminen',
    level: 'A1',
    topic: 'Asuminen',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'apartment'?", options: ['asunto', 'talo', 'huone', 'piha'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'room'?", options: ['huone', 'ovi', 'ikkuna', 'seinä'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'window'?", options: ['ovi', 'ikkuna', 'katto', 'lattia'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'furniture'?", options: ['tavarat', 'laitteet', 'vaatteet', 'huonekalut'], correctIndex: 3 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause sisäpaikallissijalla tai monikkomuodolla.',
      items: [
        { prompt: 'Sohva on ___ (olohuone).', answer: 'olohuoneessa', hint: 'sisäpaikallissija, inessiivi' },
        { prompt: 'Minä muutan uuteen ___ (asunto) ensi kuussa.', answer: 'asuntoon', hint: 'sisäpaikallissija, illatiivi' },
        { prompt: 'Talossa on kolme ___ (huone).', answer: 'huonetta', hint: 'monikko, partitiivi lukusanan jälkeen' },
        { prompt: 'Ikkunat ovat ___ (talo).', answer: 'talossa', hint: 'sisäpaikallissija, inessiivi' },
      ],
    },
    grammarTopicIds: ['sisapaikallissijat', 'monikko'],
  },
  {
    id: 'os1-ch3',
    book: 'Oma Suomi 1',
    chapterLabel: 'Luku 5–6: Terveys',
    level: 'A1',
    topic: 'Terveys',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'doctor'?", options: ['lääkäri', 'sairaanhoitaja', 'potilas', 'apteekki'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'headache'?", options: ['vatsakipu', 'päänsärky', 'kuume', 'flunssa'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'medicine'?", options: ['resepti', 'lääke', 'hoito', 'ajanvaraus'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'pharmacy'?", options: ['sairaala', 'terveyskeskus', 'apteekki', 'klinikka'], correctIndex: 2 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause kieltomuodolla (ei + verbi).',
      items: [
        { prompt: 'Minulla ___ (olla) kuumetta tänään.', answer: 'ei ole', hint: 'kieltomuoto, olla-verbi' },
        { prompt: 'Hän ___ (voida) tulla töihin, koska on sairas.', answer: 'ei voi', hint: 'kieltomuoto, preesens' },
        { prompt: 'Lapset ___ (nukkua) hyvin, kun heillä on kuumetta.', answer: 'eivät nuku', hint: 'kieltomuoto, preesens, he-muoto' },
        { prompt: 'Minä ___ (mennä) tänään kouluun, koska olen kipeä.', answer: 'en mene', hint: 'kieltomuoto, preesens, minä' },
      ],
    },
    grammarTopicIds: ['kieltomuoto', 'sijamuodot-perusteet'],
  },
  {
    id: 'os1-ch4',
    book: 'Oma Suomi 1',
    chapterLabel: 'Luku 7–8: Matkustaminen',
    level: 'A2',
    topic: 'Matkustaminen',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'airport'?", options: ['lentokenttä', 'asema', 'satama', 'hotelli'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'passport'?", options: ['lippu', 'passi', 'viisumi', 'kartta'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'train station'?", options: ['lentokenttä', 'satama', 'rautatieasema', 'pysäkki'], correctIndex: 2 },
      { question: "Mikä sana tarkoittaa 'suitcase'?", options: ['reppu', 'laukku', 'matkalaukku', 'kassi'], correctIndex: 2 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause ulkopaikallissijalla tai verbin imperfektimuodolla.',
      items: [
        { prompt: 'Odotimme junaa ___ (asema).', answer: 'asemalla', hint: 'ulkopaikallissija, adessiivi' },
        { prompt: 'Viime kesänä me ___ (matkustaa) Norjaan.', answer: 'matkustimme', hint: 'imperfekti, me' },
        { prompt: 'Hän ___ (unohtaa) passin kotiin.', answer: 'unohti', hint: 'imperfekti, hän' },
        { prompt: 'Laukku putosi ___ (pöytä).', answer: 'pöydältä', hint: 'ulkopaikallissija, ablatiivi' },
      ],
    },
    grammarTopicIds: ['ulkopaikallissijat', 'imperfekti'],
  },
  {
    id: 'os1-ch5',
    book: 'Oma Suomi 1',
    chapterLabel: 'Luku 9–10: Vapaa-aika',
    level: 'A2',
    topic: 'Vapaa-aika',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'hobby'?", options: ['harrastus', 'työ', 'koulu', 'loma'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'to relax'?", options: ['rentoutua', 'kiirehtiä', 'väsyä', 'huolestua'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'weekend'?", options: ['arki', 'viikonloppu', 'loma', 'ilta'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'to go for a walk'?", options: ['mennä nukkumaan', 'tehdä ruokaa', 'katsoa televisiota', 'käydä kävelyllä'], correctIndex: 3 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause monikkomuodolla tai komparatiivilla/superlatiivilla.',
      items: [
        { prompt: 'Minulla on monta ___ (harrastus).', answer: 'harrastusta', hint: 'monikko, partitiivi' },
        { prompt: 'Uinti on ___ (mukava) kuin juoksu.', answer: 'mukavampi', hint: 'komparatiivi' },
        { prompt: 'Viikonloppuisin käymme usein ___ (elokuvat).', answer: 'elokuvissa', hint: 'monikko, inessiivi' },
        { prompt: 'Tämä on vuoden ___ (kiva) päivä.', answer: 'kivoin', hint: 'superlatiivi' },
      ],
    },
    grammarTopicIds: ['monikko', 'komparointi'],
  },
  {
    id: 'os1-ch6',
    book: 'Oma Suomi 1',
    chapterLabel: 'Luku 11–12: Ostokset',
    level: 'A2',
    topic: 'Ostokset',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'price'?", options: ['hinta', 'ale', 'kuitti', 'tuote'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'receipt'?", options: ['kuitti', 'kassa', 'ale', 'laukku'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'sale/discount'?", options: ['hinta', 'tuote', 'ale', 'kuitti'], correctIndex: 2 },
      { question: "Mikä sana sopii kysymykseen: '___ paljon tämä maksaa?'", options: ['Mitä', 'Miten', 'Paljonko', 'Missä'], correctIndex: 2 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause objektin sijamuodolla tai kysymyssanalla.',
      items: [
        { prompt: 'Minä ostan ___ (uusi takki).', answer: 'uuden takin', hint: 'objektin sijamuoto, kokonaisobjekti' },
        { prompt: '___ tämä paita maksaa?', answer: 'paljonko', hint: 'kysymyssana' },
        { prompt: 'Hän etsii ___ (kengät).', answer: 'kenkiä', hint: 'partitiiviobjekti, monikko' },
        { prompt: '___ väriä sinä haluat?', answer: 'mitä', hint: 'kysymyssana' },
      ],
    },
    grammarTopicIds: ['objektin-sijamuodot', 'kysymyslauseet'],
  },

  // ───────────────────────── Oma Suomi 2 ─────────────────────────
  {
    id: 'os2-ch1',
    book: 'Oma Suomi 2',
    chapterLabel: 'Luku 1–2: Työelämä',
    level: 'B1',
    topic: 'Työelämä',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'employer'?", options: ['työnantaja', 'työntekijä', 'kollega', 'esimies'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'work permit'?", options: ['työlupa', 'oleskelulupa', 'passi', 'viisumi'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'contract'?", options: ['sopimus', 'hakemus', 'ilmoitus', 'palkka'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'shift (työvuoro)'?", options: ['tauko', 'vuoro', 'loma', 'palkka'], correctIndex: 1 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause passiivin preesensillä tai modaaliverbillä.',
      items: [
        { prompt: 'Tässä yrityksessä ___ (noudattaa) työaikalakia tarkasti.', answer: 'noudatetaan', hint: 'passiivi, preesens' },
        { prompt: 'Sinun täytyy ___ (allekirjoittaa) työsopimus ensin.', answer: 'allekirjoittaa', hint: 'täytyy + A-infinitiivi' },
        { prompt: 'Uusia työntekijöitä ___ (perehdyttää) ensimmäisellä viikolla.', answer: 'perehdytetään', hint: 'passiivi, preesens' },
        { prompt: 'Työntekijä saa ___ (pitää) taukoja lain mukaan.', answer: 'pitää', hint: 'saada + A-infinitiivi' },
      ],
    },
    grammarTopicIds: ['passiivi-preesens', 'modaaliverbit'],
  },
  {
    id: 'os2-ch2',
    book: 'Oma Suomi 2',
    chapterLabel: 'Luku 3–4: Yhteiskunta ja palvelut',
    level: 'B1',
    topic: 'Yhteiskunta ja palvelut',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'municipality'?", options: ['kunta', 'valtio', 'virasto', 'palvelu'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'authority/office (virasto)'?", options: ['kunta', 'virasto', 'palvelu', 'laki'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'service'?", options: ['palvelu', 'laki', 'virasto', 'kunta'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'application (viranomaisasiointi)'?", options: ['kuitti', 'sopimus', 'hakemus', 'ilmoitus'], correctIndex: 2 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause sivulauseen konjunktiolla tai relatiivipronominilla.',
      items: [
        { prompt: 'Kela on virasto, ___ hoitaa sosiaaliturva-asioita.', answer: 'joka', hint: 'relatiivipronomini' },
        { prompt: 'Meille kerrottiin, ___ hakemus käsitellään kuukaudessa.', answer: 'että', hint: 'sivulause, että' },
        { prompt: 'Palvelut, ___ kunta järjestää, vaihtelevat alueittain.', answer: 'joita', hint: 'relatiivipronomini, partitiivi monikko' },
        { prompt: 'En tiennyt, ___ minun pitäisi kääntyä tässä asiassa.', answer: 'mihin', hint: 'epäsuora kysymys, sivulause' },
      ],
    },
    grammarTopicIds: ['sivulauseet', 'relatiivilauseet'],
  },
  {
    id: 'os2-ch3',
    book: 'Oma Suomi 2',
    chapterLabel: 'Luku 5–6: Terveydenhuolto',
    level: 'B1',
    topic: 'Terveydenhuolto',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'appointment (ajanvaraus)'?", options: ['ajanvaraus', 'resepti', 'hoito', 'tutkimus'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'treatment'?", options: ['hoito', 'oire', 'diagnoosi', 'lääke'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'symptom'?", options: ['oire', 'hoito', 'resepti', 'tauti'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'nurse'?", options: ['lääkäri', 'sairaanhoitaja', 'potilas', 'hammaslääkäri'], correctIndex: 1 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause passiivin imperfektillä tai NUT-partisiipilla.',
      items: [
        { prompt: 'Minut ___ (tutkia) terveyskeskuksessa viime viikolla.', answer: 'tutkittiin', hint: 'passiivi, imperfekti' },
        { prompt: 'Lääkäri kirjoitti minulle ___ (tarvita) reseptin.', answer: 'tarvitun', hint: 'NUT-partisiippi, passiivin partisiippi' },
        { prompt: 'Potilas oli jo ___ (kotiutua), kun soitin sairaalaan.', answer: 'kotiutunut', hint: 'NUT-partisiippi, pluskvamperfekti' },
        { prompt: 'Ennen leikkausta hänelle ___ (antaa) rauhoittava lääke.', answer: 'annettiin', hint: 'passiivi, imperfekti' },
      ],
    },
    grammarTopicIds: ['passiivi-imperfekti', 'nut-partisiippi'],
  },
  {
    id: 'os2-ch4',
    book: 'Oma Suomi 2',
    chapterLabel: 'Luku 7–8: Perinteet ja juhlat',
    level: 'B1',
    topic: 'Perinteet ja juhlat',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'tradition'?", options: ['perinne', 'juhla', 'tapa', 'loma'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'Christmas'?", options: ['joulu', 'pääsiäinen', 'juhannus', 'vappu'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'Midsummer (juhannus)'?", options: ['joulu', 'juhannus', 'pääsiäinen', 'uusivuosi'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'gift'?", options: ['kortti', 'koriste', 'kynttilä', 'lahja'], correctIndex: 3 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause verbin imperfektimuodolla ja huomioi astevaihtelu.',
      items: [
        { prompt: 'Viime jouluna me ___ (leipoa) piparkakkuja yhdessä.', answer: 'leivoimme', hint: 'imperfekti, astevaihtelu p:v, leipoa → leivo-' },
        { prompt: 'Juhannuksena perhe ___ (kokoontua) mökille.', answer: 'kokoontui', hint: 'imperfekti, hän' },
        { prompt: 'Lapset ___ (saada) lahjoja joulupukilta.', answer: 'saivat', hint: 'imperfekti, he' },
        { prompt: 'Me ___ (sytyttää) kynttilät pöydälle.', answer: 'sytytimme', hint: 'imperfekti, astevaihtelu tt:t, sytyttää → sytyt-' },
      ],
    },
    grammarTopicIds: ['imperfekti', 'astevaihtelu'],
  },
  {
    id: 'os2-ch5',
    book: 'Oma Suomi 2',
    chapterLabel: 'Luku 9–10: Kotoutuminen',
    level: 'B1',
    topic: 'Kotoutuminen',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'integration (kotoutuminen)'?", options: ['kotoutuminen', 'maahanmuutto', 'kielitaito', 'kulttuuri'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'language skills'?", options: ['kielitaito', 'kulttuuri', 'tutkinto', 'tulkki'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'interpreter'?", options: ['tulkki', 'opettaja', 'ohjaaja', 'virkailija'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'residence permit'?", options: ['työlupa', 'oleskelulupa', 'passi', 'viisumi'], correctIndex: 1 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause konditionaalilla tai tulevaisuuden ilmaisulla.',
      items: [
        { prompt: 'Jos opiskelisin suomea enemmän, ___ (löytää) töitä helpommin.', answer: 'löytäisin', hint: 'konditionaali, minä' },
        { prompt: 'Ensi vuonna hän ___ (suorittaa) kielitutkinnon.', answer: 'suorittaa', hint: 'preesens ilmaisee tulevaa' },
        { prompt: 'Kotoutumiskoulutus ___ (auttaa) minua paljon, jos pääsisin mukaan.', answer: 'auttaisi', hint: 'konditionaali, hän/se' },
        { prompt: 'Aiomme ___ (muuttaa) toiseen kaupunkiin ensi kesänä.', answer: 'muuttaa', hint: 'aikoa + A-infinitiivi, tulevaisuus' },
      ],
    },
    grammarTopicIds: ['konditionaali', 'tulevaisuus'],
  },
  {
    id: 'os2-ch6',
    book: 'Oma Suomi 2',
    chapterLabel: 'Luku 11–12: Tulevaisuuden suunnitelmat',
    level: 'B1',
    topic: 'Tulevaisuuden suunnitelmat',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'goal'?", options: ['tavoite', 'unelma', 'suunnitelma', 'päätös'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'dream'?", options: ['tavoite', 'unelma', 'toive', 'päätös'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'decision'?", options: ['päätös', 'suunnitelma', 'tavoite', 'unelma'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'to achieve (saavuttaa)'?", options: ['unelmoida', 'suunnitella', 'saavuttaa', 'päättää'], correctIndex: 2 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause tulevaisuuden ilmaisulla tai VA-partisiipilla.',
      items: [
        { prompt: 'Viiden vuoden kuluttua minä ___ (valmistua) yliopistosta.', answer: 'valmistun', hint: 'preesens ilmaisee tulevaa' },
        { prompt: 'Tulevaisuudessa aiomme ___ (perustaa) oman yrityksen.', answer: 'perustaa', hint: 'aikoa + A-infinitiivi' },
        { prompt: 'Tavoitteeni on löytää itseäni ___ (kiinnostaa) työ.', answer: 'kiinnostava', hint: 'VA-partisiippi, aktiivi: kiinnostava työ' },
        { prompt: 'Etsin alaa, joka on tulevaisuudessa hyvin ___ (kasvaa).', answer: 'kasvava', hint: 'VA-partisiippi, aktiivi: kasvava ala' },
      ],
    },
    grammarTopicIds: ['tulevaisuus', 'va-partisiippi'],
  },

  // ───────────────────── extra real-life situational chapters ─────────────────────
  {
    id: 'sm1-ch7',
    book: 'Suomen Mestari 1',
    chapterLabel: 'Luku 13–14: Vuokra-asunnon hakeminen',
    level: 'A2',
    topic: 'Vuokra-asunnon hakeminen',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'rental agreement'?", options: ['vuokrasopimus', 'vuokranantaja', 'vuokralainen', 'takuuvuokra'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'landlord'?", options: ['vuokralainen', 'vuokranantaja', 'asukas', 'muuttaja'], correctIndex: 1 },
      { question: 'Mikä maksu maksetaan yleensä ennen muuttoa vakuudeksi?', options: ['vuokrasopimus', 'takuuvuokra', 'naapurusto', 'remontti'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'apartment viewing'?", options: ['näyttö', 'muuttopäivä', 'irtisanominen', 'asunnonhaku'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause omistusrakenteella (adessiivi + olla) tai sisäpaikallissijalla.',
      items: [
        { prompt: 'Minu___ (minä) on kaksi huonetta vuokra-asunnossani.', answer: 'lla', hint: 'omistusrakenne: minulla + on' },
        { prompt: 'Asunnossa ei ole ___ (parveke).', answer: 'parveketta', hint: 'omistusrakenteen kielto: partitiivi' },
        { prompt: 'Asunto sijaitsee ___ (keskusta).', answer: 'keskustassa', hint: 'sisäpaikallissija: -ssa (missä?)' },
        { prompt: 'Muutan uuteen asuntoon ___ (ensi kuu).', answer: 'ensi kuussa', hint: 'sisäpaikallissija ajanilmauksessa' },
      ],
    },
    grammarTopicIds: ['omistusrakenne', 'sisapaikallissijat'],
  },
  {
    id: 'sm1-ch8',
    book: 'Suomen Mestari 1',
    chapterLabel: 'Luku 15–16: Kaupungilla ja suunnat',
    level: 'A2',
    topic: 'Kaupungilla ja suunnat',
    vocabQuiz: [
      { question: "Mikä ilmaus tarkoittaa 'turn left'?", options: ['käänny oikealle', 'käänny vasemmalle', 'mene suoraan', 'pysähdy tässä'], correctIndex: 1 },
      { question: "Mikä sana tarkoittaa 'crossroads/intersection'?", options: ['risteys', 'silta', 'kortteli', 'aukio'], correctIndex: 0 },
      { question: "Mikä ilmaus tarkoittaa 'straight ahead'?", options: ['suoraan eteenpäin', 'taaksepäin', 'ympäri', 'vinosti'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'traffic light'?", options: ['liikennevalo', 'pysäkki', 'risteys', 'kartta'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause imperatiivilla (käskymuoto) tai oikealla ulkopaikallissijalla.',
      items: [
        { prompt: '___ (kääntyä) seuraavasta risteyksestä oikealle.', answer: 'käänny', hint: 'imperatiivi, sinä-muoto' },
        { prompt: '___ (mennä) suoraan eteenpäin kirjastoon asti.', answer: 'mene', hint: 'imperatiivi, sinä-muoto' },
        { prompt: 'Odota minua bussi___ (millä?).', answer: 'pysäkillä', hint: 'ulkopaikallissija: -lla (missä?)' },
        { prompt: 'Kävele silta___ (mille?) ja käänny vasemmalle.', answer: 'sillalle', hint: 'ulkopaikallissija: -lle (mihin?)' },
      ],
    },
    grammarTopicIds: ['ulkopaikallissijat', 'imperatiivi'],
  },
  {
    id: 'sm2-ch7',
    book: 'Suomen Mestari 2',
    chapterLabel: 'Luku 13–14: Työhaastattelu',
    level: 'B1',
    topic: 'Työhaastattelu',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'strength' (haastattelussa)?", options: ['vahvuus', 'heikkous', 'kokemus', 'suositus'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'salary expectation'?", options: ['palkkatoive', 'työsopimus', 'irtisanominen', 'työkokemus'], correctIndex: 0 },
      { question: 'Kerro, miksi ___ tähän tehtävään.', options: ['soveltuisit', 'irtisanoisit', 'palkkaisit', 'eroaisit'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'recruiter'?", options: ['rekrytoija', 'esimies', 'kollega', 'harjoittelija'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause konditionaalilla (kohtelias haastatteluvastaus) tai verbin oikealla rektiolla.',
      items: [
        { prompt: '___ (voida) kertoa hieman kokemuksestani.', answer: 'Voisin', hint: 'konditionaali: voisin' },
        { prompt: 'Uskon ___ (oma osaaminen).', answer: 'omaan osaamiseeni', hint: 'uskoa + illatiivi' },
        { prompt: 'Olen aina pitänyt ___ (haastavat tehtävät).', answer: 'haastavista tehtävistä', hint: 'pitää + elatiivi' },
        { prompt: '___ (olla) kiinnostunut tästä tehtävästä jo pitkään.', answer: 'Olisin', hint: 'konditionaali, kohtelias muoto' },
      ],
    },
    grammarTopicIds: ['konditionaali', 'verbien-rektio'],
  },
  {
    id: 'sm2-ch8',
    book: 'Suomen Mestari 2',
    chapterLabel: 'Luku 15–16: Pankki ja raha-asiat',
    level: 'B1',
    topic: 'Pankki ja raha-asiat',
    vocabQuiz: [
      { question: "Mikä ilmaus tarkoittaa 'to transfer money'?", options: ['siirtää rahaa', 'lainata rahaa', 'säästää rahaa', 'tienata rahaa'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'interest' (koron)?", options: ['korko', 'saldo', 'lasku', 'verkkopankki'], correctIndex: 0 },
      { question: 'Maksan ___ verkkopankissa.', options: ['laskun', 'lainan', 'saldon', 'koron'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'balance' (tilillä olevan rahan määrä)?", options: ['saldo', 'korko', 'lasku', 'laina'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause objektin oikealla sijamuodolla tai asiointikielen muodolla.',
      items: [
        { prompt: 'Maksoin ___ (lasku) eilen.', answer: 'laskun', hint: 'kokonaisobjekti (akkusatiivi) — tekeminen valmis' },
        { prompt: 'Siirrän ___ (raha) joka kuukausi säästötilille.', answer: 'rahaa', hint: 'osaobjekti (partitiivi) — määrittelemätön määrä' },
        { prompt: '___ (voisitteko) kertoa lainan korosta?', answer: 'Voisitteko', hint: 'asiointikieli: kohtelias monikon te-muoto' },
        { prompt: 'Hakemus ___ (käsitellä) kahden viikon kuluessa.', answer: 'käsitellään', hint: 'passiivi — asiointikielessä yleinen persoonaton muoto' },
      ],
    },
    grammarTopicIds: ['objektin-sijamuodot', 'asiointikieli'],
  },
  {
    id: 'sm3-ch7',
    book: 'Suomen Mestari 3',
    chapterLabel: 'Luku 13–14: Asiointi virastossa',
    level: 'B2',
    topic: 'Asiointi virastossa',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'application'?", options: ['hakemus', 'päätös', 'liite', 'määräaika'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'deadline'?", options: ['määräaika', 'käsittelyaika', 'liite', 'todistus'], correctIndex: 0 },
      { question: 'Muista liittää hakemukseen tarvittavat ___.', options: ['liitteet', 'päätökset', 'todistukset', 'hakemukset'], correctIndex: 0 },
      { question: "Mikä ilmaus tarkoittaa 'to book an appointment'?", options: ['varata aika', 'perua aika', 'odottaa vuoroa', 'jättää hakemus'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause passiivilla tai asiointikielen kohteliaalla rakenteella.',
      items: [
        { prompt: 'Hakemukset ___ (käsitellä) noin kolmessa viikossa.', answer: 'käsitellään', hint: 'passiivi, preesens' },
        { prompt: 'Päätös ___ (lähettää) postitse.', answer: 'lähetetään', hint: 'passiivi, preesens' },
        { prompt: '___ (olla mahdollista) saada lisäaikaa hakemukselle?', answer: 'Olisiko mahdollista', hint: 'asiointikieli: kohtelias kysymysrakenne' },
        { prompt: 'Pyydän teitä ___ (toimittaa) puuttuvat liitteet.', answer: 'toimittamaan', hint: 'pyytää + MA-infinitiivin illatiivi' },
      ],
    },
    grammarTopicIds: ['asiointikieli', 'passiivi-preesens'],
  },
  {
    id: 'sm3-ch8',
    book: 'Suomen Mestari 3',
    chapterLabel: 'Luku 15–16: Some ja digitaalinen viestintä',
    level: 'B2',
    topic: 'Some ja digitaalinen viestintä',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'social media'?", options: ['some', 'sanomalehti', 'radio', 'televisio'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'to share (a post)'?", options: ['jakaa', 'poistaa', 'muokata', 'ladata'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'notification'?", options: ['ilmoitus', 'viesti', 'linkki', 'profiili'], correctIndex: 0 },
      { question: "Mikä liitepartikkeli sopii merkitykseen 'myös': Sinä___ olet aktiivinen somessa.", options: ['-kin', '-kaan', '-han', '-pa'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause liitepartikkelilla (-kin, -kaan/-kään, -han/-hän) tai puhekielisellä muodolla.',
      items: [
        { prompt: 'En ___ (minä + kään) ole nähnyt sitä videota.', answer: 'minäkään', hint: 'liitepartikkeli -kään kielteisessä lauseessa' },
        { prompt: '___ (tämä + kin) on hyvä juttu jakaa.', answer: 'Tämäkin', hint: 'liitepartikkeli -kin: myös tämä' },
        { prompt: 'Puhekielessä sanotaan "mä oon" kirjakielen "___" sijaan.', answer: 'minä olen', hint: 'puhekieli vs. kirjakieli' },
        { prompt: 'Näit___ (sinä + hän) jo sen ilmoituksen?', answer: 'näithän', hint: 'liitepartikkeli -hän: pehmentää, olettaa myöntävän vastauksen' },
      ],
    },
    grammarTopicIds: ['liitepartikkelit', 'puhekieli-vs-kirjakieli'],
  },
  {
    id: 'os1-ch7',
    book: 'Oma Suomi 1',
    chapterLabel: 'Luku 13–14: Lääkärissä ja apteekissa',
    level: 'A2',
    topic: 'Lääkärissä ja apteekissa',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'symptom'?", options: ['oire', 'kuume', 'resepti', 'lähete'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'fever'?", options: ['kuume', 'särky', 'toipuminen', 'sairausloma'], correctIndex: 0 },
      { question: 'Lääkäri antoi minulle ___ apteekkiin.', options: ['reseptin', 'lähetteen', 'diagnoosin', 'todistuksen'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'painkiller'?", options: ['särkylääke', 'rokote', 'side', 'tabletti'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause imperfektillä (kertominen oireista) tai modaaliverbillä (suositus).',
      items: [
        { prompt: 'Eilen minulla ___ (olla) kova kuume.', answer: 'oli', hint: 'imperfekti: olla → oli' },
        { prompt: 'Aamulla pääni ___ (särkeä) kovasti.', answer: 'särki', hint: 'imperfekti' },
        { prompt: 'Sinun ___ (pitää) ottaa särkylääkettä.', answer: 'pitää', hint: 'modaaliverbi + A-infinitiivi' },
        { prompt: '___ (voida) varata ajan lääkärille verkossa.', answer: 'Voit', hint: 'modaaliverbi voida, sinä-muoto' },
      ],
    },
    grammarTopicIds: ['imperfekti', 'modaaliverbit'],
  },
  {
    id: 'os1-ch8',
    book: 'Oma Suomi 1',
    chapterLabel: 'Luku 15–16: Julkinen liikenne',
    level: 'A2',
    topic: 'Julkinen liikenne',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'ticket' (matkalippu)?", options: ['matkalippu', 'aikataulu', 'pysäkki', 'reitti'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'schedule/timetable'?", options: ['aikataulu', 'matkalippu', 'pysäkki', 'linja'], correctIndex: 0 },
      { question: 'Bussi ___ myöhässä tänään.', options: ['oli', 'meni', 'tuli', 'ajoi'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'route/line'?", options: ['linja', 'asema', 'pysäkki', 'vaunu'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause ulkopaikallissijalla tai adverbilla (-sti-pääte).',
      items: [
        { prompt: 'Odotan bussi___ (millä?) joka aamu.', answer: 'pysäkillä', hint: 'ulkopaikallissija: -lla (missä?)' },
        { prompt: 'Nousin juna___ (mille?) viime hetkellä.', answer: 'junalle', hint: 'ulkopaikallissija: -lle (mihin?)' },
        { prompt: 'Bussi saapui ___ (nopea).', answer: 'nopeasti', hint: 'adverbi: -sti-pääte' },
        { prompt: 'Kuljettaja ajoi ___ (varovainen).', answer: 'varovaisesti', hint: 'adverbi: -sti-pääte, astevaihtelu' },
      ],
    },
    grammarTopicIds: ['ulkopaikallissijat', 'adverbien-muodostus'],
  },
  {
    id: 'os2-ch7',
    book: 'Oma Suomi 2',
    chapterLabel: 'Luku 13–14: Kela ja sosiaalietuudet',
    level: 'B1',
    topic: 'Kela ja sosiaalietuudet',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'application' (Kelalle)?", options: ['hakemus', 'päätös', 'etuus', 'liite'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'child benefit'?", options: ['lapsilisä', 'asumistuki', 'työttömyyskorvaus', 'opintotuki'], correctIndex: 0 },
      { question: 'Sain Kelalta myönteisen ___.', options: ['päätöksen', 'hakemuksen', 'liitteen', 'tulon'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'housing benefit'?", options: ['asumistuki', 'lapsilisä', 'sairauspäiväraha', 'eläke'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause omistusrakenteella tai asiointikielen muodolla.',
      items: [
        { prompt: '___ (minä) on oikeus asumistukeen.', answer: 'Minulla', hint: 'omistusrakenne: adessiivi + on' },
        { prompt: 'Hakijalla ei ___ (olla, imperfekti) tarvittavia liitteitä.', answer: 'ollut', hint: 'omistusrakenteen kielto, imperfekti' },
        { prompt: '___ (voisitteko) lähettää puuttuvat tiedot?', answer: 'Voisitteko', hint: 'asiointikieli: kohtelias monikon te-muoto' },
        { prompt: 'Hakemus ___ (käsitellä) neljän viikon kuluessa.', answer: 'käsitellään', hint: 'passiivi, asiointikielessä yleinen' },
      ],
    },
    grammarTopicIds: ['asiointikieli', 'omistusrakenne'],
  },
  {
    id: 'os2-ch8',
    book: 'Oma Suomi 2',
    chapterLabel: 'Luku 15–16: Verotus ja tulot',
    level: 'B1',
    topic: 'Verotus ja tulot',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'tax'?", options: ['vero', 'tulo', 'palkka', 'korko'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'income'?", options: ['tulo', 'vero', 'lasku', 'saldo'], correctIndex: 0 },
      { question: 'Työnantaja maksaa ___ suoraan verottajalle.', options: ['veron', 'palkan', 'laskun', 'koron'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'tax card'?", options: ['verokortti', 'pankkikortti', 'henkilökortti', 'matkalippu'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause objektin oikealla sijamuodolla tai verbin rektiolla.',
      items: [
        { prompt: 'Maksoin ___ (vero) ajallaan.', answer: 'veron', hint: 'kokonaisobjekti (akkusatiivi)' },
        { prompt: 'Ansaitsen ___ (raha) osa-aikatyöllä.', answer: 'rahaa', hint: 'osaobjekti (partitiivi)' },
        { prompt: 'Luotan ___ (verottaja) laskelmaan.', answer: 'verottajaan', hint: 'luottaa + illatiivi' },
        { prompt: 'Osallistuin ___ (verotusta koskeva infotilaisuus).', answer: 'verotusta koskevaan infotilaisuuteen', hint: 'osallistua + illatiivi' },
      ],
    },
    grammarTopicIds: ['objektin-sijamuodot', 'verbien-rektio'],
  },

  // ─────────────── Ykäänkö vai ykiinkö – Highway to hill ───────────────
  // A YKI-testi speaking/writing drill book with no reading texts and no
  // dedicated grammar section, organized by the seven themes typical of the
  // YKI exam, with a strong emphasis on spoken-register Finnish (sä vs.
  // sinä). The companion chapters below mirror that: light vocab per theme,
  // plus a written→spoken (puhekieli) transformation drill instead of
  // traditional grammar, since that's the book's actual character.
  {
    id: 'yvy-ch1',
    book: 'Ykäänkö vai ykiinkö – Highway to hill',
    chapterLabel: 'Teema 1: Arki ja vapaa-aika',
    level: 'A2',
    topic: 'Arki ja vapaa-aika',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'daily routine'?", options: ['arki', 'juhla', 'loma', 'matka'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'hobby'?", options: ['harrastus', 'työ', 'koulu', 'lepo'], correctIndex: 0 },
      { question: 'Viikonloppuna minulla on ___ aikaa.', options: ['vapaa-aikaa', 'kiireaikaa', 'työaikaa', 'kouluaikaa'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'to relax'?", options: ['rentoutua', 'kiirehtiä', 'väsyä', 'stressata'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'to get bored'?", options: ['kyllästyä', 'innostua', 'väsyä', 'rentoutua'], correctIndex: 0 },
      { question: 'Käyn kuntosalilla ___ kertaa viikossa.', options: ['kolme', 'kolmas', 'kolmea', 'kolmen'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Muuta kirjakielinen lause puhekieliseksi — näin YKI:n suullinen osio usein kuulostaa.',
      items: [
        { prompt: 'Minä olen väsynyt. → Puhekielellä: ___ oon väsynyt.', answer: 'Mä', hint: 'minä → mä' },
        { prompt: 'Emme mene tänään ulos. → Puhekielellä: Me ___ mennä tänään ulos.', answer: 'ei', hint: 'passiivi korvaa me-muodon puhekielessä: me ei mennä' },
        { prompt: 'Etkö sinä ole vapaana viikonloppuna? → Puhekielellä: ___ sä oo vapaana viikonloppuna?', answer: 'Etks', hint: 'etkö → etks' },
        { prompt: 'Meillä ei ole aikaa. → Puhekielellä: ___ ei oo aikaa.', answer: 'Meil', hint: 'meillä → meil' },
        { prompt: 'Minä käyn usein elokuvissa. → ___ käyn usein leffassa.', answer: 'Mä', hint: 'minä → mä; elokuvat → leffa on puhekielinen synonyymi' },
        { prompt: 'Hän ei harrasta mitään. → Se ei ___ mitään.', answer: 'harrasta', hint: 'hän → se puhekielessä, verbimuoto pysyy samana' },
      ],
    },
    grammarTopicIds: ['puhekieli-vs-kirjakieli'],
    sampleAnswer: {
      promptFi: 'Kerro tyypillisestä arkipäivästäsi ja siitä, miten vietät vapaa-aikaasi.',
      promptEn: 'Describe a typical weekday of yours and how you spend your free time.',
      promptBn: 'আপনার সাধারণ কর্মদিবস এবং আপনি কীভাবে অবসর সময় কাটান তা বর্ণনা করুন।',
      textFi:
        'Arkipäiväni noudattaa melko vakiintunutta rytmiä. Herään yleensä puoli seitsemältä ja aloitan päivän rauhallisella aamupalalla, koska en jaksa kiirehtiä heti aamusta. Töihin lähden bussilla, ja matka kestää noin kaksikymmentä minuuttia, jonka käytän usein podcastien kuunteluun tai suomen sanaston kertaamiseen. Työpäivän jälkeen pyrin aina varaamaan itselleni edes puoli tuntia liikuntaa varten, sillä olen huomannut, että se auttaa jaksamaan paremmin sekä henkisesti että fyysisesti. Iltaisin vietän aikaa joko lukien tai tapaamalla ystäviä, ja viikonloppuisin yritän tehdä jotain täysin erilaista kuin arkena – esimerkiksi retkeillä luonnossa tai kokeilla uutta harrastusta. Vaikka arkeni saattaa kuulostaa tavalliselta, pidän juuri siitä rutiinista, koska se antaa minulle turvallisuuden tunteen kiireisen elämän keskellä.',
      textEn:
        "My weekday follows a fairly established rhythm. I usually wake up at half past six and start the day with a calm breakfast, since I don't have the energy to rush first thing in the morning. I go to work by bus, and the trip takes about twenty minutes, which I often use to listen to podcasts or review Finnish vocabulary. After the workday I always try to reserve at least half an hour for exercise, since I've noticed it helps me cope better both mentally and physically. In the evenings I spend time either reading or meeting friends, and on weekends I try to do something completely different from my weekdays — for example hiking in nature or trying a new hobby. Even though my everyday life might sound ordinary, I like precisely that routine, because it gives me a sense of security amid a busy life.",
      textBn:
        'আমার কর্মদিবস মোটামুটি একটি স্থির ছন্দ মেনে চলে। আমি সাধারণত সাড়ে ছটায় ঘুম থেকে উঠি এবং শান্তভাবে নাশতা করে দিন শুরু করি, কারণ সকাল সকাল তাড়াহুড়ো করার শক্তি আমার থাকে না। কাজে যাই বাসে, আর যাত্রায় প্রায় বিশ মিনিট লাগে, যা আমি প্রায়ই পডকাস্ট শুনতে অথবা ফিনিশ শব্দভাণ্ডার পুনরালোচনা করতে ব্যবহার করি। কর্মদিবস শেষে আমি সবসময় নিজের জন্য অন্তত আধা ঘণ্টা ব্যায়ামের জন্য রাখার চেষ্টা করি, কারণ আমি লক্ষ্য করেছি যে এটি মানসিক ও শারীরিক উভয় দিক থেকেই আমাকে ভালো থাকতে সাহায্য করে। সন্ধ্যায় আমি হয় বই পড়ে অথবা বন্ধুদের সাথে দেখা করে সময় কাটাই, এবং সপ্তাহান্তে আমি কর্মদিবসের চেয়ে সম্পূর্ণ ভিন্ন কিছু করার চেষ্টা করি — যেমন প্রকৃতিতে ভ্রমণ অথবা নতুন কোনো শখ চেষ্টা করা। যদিও আমার দৈনন্দিন জীবন সাধারণ শোনাতে পারে, আমি ঠিক সেই রুটিনটাই পছন্দ করি, কারণ ব্যস্ত জীবনের মাঝে এটি আমাকে নিরাপত্তার অনুভূতি দেয়।',
    },
  },
  {
    id: 'yvy-ch2',
    book: 'Ykäänkö vai ykiinkö – Highway to hill',
    chapterLabel: 'Teema 2: Työ ja opiskelu',
    level: 'B1',
    topic: 'Työ ja opiskelu',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'workplace'?", options: ['työpaikka', 'kotipaikka', 'oppilaitos', 'virasto'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'colleague'?", options: ['kollega', 'esimies', 'asiakas', 'kilpailija'], correctIndex: 0 },
      { question: 'Aloitin uuden ___ viime kuussa.', options: ['työpaikan', 'lomani', 'harrastukseni', 'opintoni'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'deadline'?", options: ['määräaika', 'aikataulu', 'tauko', 'palaveri'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'promotion'?", options: ['ylennys', 'irtisanominen', 'loma', 'palkka'], correctIndex: 0 },
      { question: 'Esimieheni antoi minulle hyvää ___.', options: ['palautetta', 'rahaa', 'lomaa', 'työtä'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Muuta kirjakielinen lause puhekieliseksi.',
      items: [
        { prompt: 'Minä olen töissä huomenna. → ___ oon töissä huomenna.', answer: 'Mä', hint: 'minä → mä' },
        { prompt: 'Sinä olet hyvä työntekijä. → ___ oot hyvä työntekijä.', answer: 'Sä', hint: 'sinä → sä' },
        { prompt: 'Me teemme projektin yhdessä. → Me ___ projektin yhdessä.', answer: 'tehdään', hint: 'passiivi korvaa me-muodon: me tehdään' },
        { prompt: 'En minä tiedä vastausta. → En ___ tiedä vastausta.', answer: 'mä', hint: 'minä → mä kielteisessä lauseessa' },
        { prompt: 'Minä pidän työstäni. → ___ tykkään duunista.', answer: 'Mä', hint: 'minä → mä; työ → duuni on hyvin yleinen puhekielen sana' },
        { prompt: 'Emme ehtineet valmiiksi ajoissa. → Me ei ___ valmiiksi ajoissa.', answer: 'ehditty', hint: 'puhekielen passiivimuoto: emme ehtineet → me ei ehditty' },
      ],
    },
    grammarTopicIds: ['puhekieli-vs-kirjakieli', 'verbien-rektio'],
    sampleAnswer: {
      promptFi: 'Kerro nykyisestä työstäsi tai opiskelustasi ja siitä, mikä siinä on parasta ja mikä haastavinta.',
      promptEn: "Talk about your current job or studies, and what's best and most challenging about it.",
      promptBn: 'আপনার বর্তমান চাকরি বা পড়াশোনা সম্পর্কে বলুন এবং তাতে সবচেয়ে ভালো ও সবচেয়ে কঠিন দিক কী তা জানান।',
      textFi:
        'Työskentelen tällä hetkellä asiakaspalvelussa, ja olen ollut samassa yrityksessä nyt reilun vuoden. Parasta työssäni on ehdottomasti vaihtelevuus – joka päivä tulee eteen erilaisia tilanteita ja ihmisiä, enkä koskaan tiedä etukäteen, millainen päivästä tulee. Pidän myös siitä, että pääsen käyttämään suomen kieltä käytännössä joka päivä, mikä on auttanut minua kehittymään huomattavasti nopeammin kuin pelkkä kielikurssi olisi tehnyt. Haastavinta on toisaalta se, että työ on ajoittain hyvin kiireistä, ja täytyy pystyä tekemään nopeita päätöksiä paineen alla. Olen kuitenkin oppinut, että virheistä ei kannata lannistua, vaan niistä pitää ottaa opiksi ja jatkaa eteenpäin. Tulevaisuudessa toivon pääseväni etenemään urallani ja ehkä jopa kouluttamaan uusia työntekijöitä, sillä koen, että minulla olisi siihen paljon annettavaa.',
      textEn:
        "I currently work in customer service, and I've been at the same company for just over a year now. The best part of my job is definitely the variety — every day brings different situations and people, and I never know in advance what the day will be like. I also like that I get to use Finnish in practice every single day, which has helped me develop much faster than a language course alone would have. The most challenging part, on the other hand, is that the work is occasionally very hectic, and you have to be able to make quick decisions under pressure. However, I've learned that there's no point getting discouraged by mistakes — you have to learn from them and move forward. In the future I hope to advance in my career and perhaps even train new employees, since I feel I would have a lot to offer there.",
      textBn:
        'আমি বর্তমানে গ্রাহকসেবায় কাজ করি, এবং এক বছরের কিছু বেশি সময় ধরে একই কোম্পানিতে আছি। আমার কাজের সবচেয়ে ভালো দিক অবশ্যই বৈচিত্র্য — প্রতিদিন ভিন্ন ভিন্ন পরিস্থিতি ও মানুষের মুখোমুখি হতে হয়, এবং দিনটি কেমন হবে তা আগে থেকে জানা যায় না। আমি এটাও পছন্দ করি যে প্রতিদিন বাস্তবে ফিনিশ ভাষা ব্যবহার করার সুযোগ পাই, যা শুধু ভাষা কোর্সের চেয়ে অনেক দ্রুত আমার উন্নতিতে সাহায্য করেছে। অন্যদিকে সবচেয়ে কঠিন দিক হলো, কাজটি মাঝে মাঝে খুবই ব্যস্ত থাকে, এবং চাপের মধ্যে দ্রুত সিদ্ধান্ত নিতে হয়। তবে আমি শিখেছি যে ভুল করে হতাশ হওয়ার দরকার নেই — বরং তা থেকে শিক্ষা নিয়ে এগিয়ে যেতে হয়। ভবিষ্যতে আমি আমার কর্মজীবনে এগিয়ে যেতে চাই, এমনকি নতুন কর্মীদের প্রশিক্ষণ দিতেও চাই, কারণ আমি মনে করি এক্ষেত্রে আমার দেওয়ার মতো অনেক কিছু আছে।',
    },
  },
  {
    id: 'yvy-ch3',
    book: 'Ykäänkö vai ykiinkö – Highway to hill',
    chapterLabel: 'Teema 3: Asuminen ja koti',
    level: 'A2',
    topic: 'Asuminen ja koti',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'apartment'?", options: ['asunto', 'talo', 'huone', 'piha'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'rent (noun)'?", options: ['vuokra', 'lasku', 'palkka', 'hinta'], correctIndex: 0 },
      { question: 'Muutin uuteen ___ viime viikolla.', options: ['asuntoon', 'kaupunkiin', 'maahan', 'kouluun'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'neighbor'?", options: ['naapuri', 'vieras', 'ystävä', 'sukulainen'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'to move (house)'?", options: ['muuttaa', 'matkustaa', 'palata', 'lähteä'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'downtown/city center'?", options: ['keskusta', 'esikaupunki', 'maaseutu', 'satama'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Muuta kirjakielinen lause puhekieliseksi.',
      items: [
        { prompt: 'Minulla on uusi asunto. → ___ on uusi asunto.', answer: 'Mulla', hint: 'minulla → mulla' },
        { prompt: 'Me emme ole kotona. → Me ei ___ kotona.', answer: 'olla', hint: 'emme ole → ei olla (puhekielen passiivimuoto)' },
        { prompt: 'Onko sinulla uusi naapuri? → Onks ___ uusi naapuri?', answer: 'sul', hint: 'sinulla → sul' },
        { prompt: 'Minä pidän tästä asunnosta. → ___ tykkään tästä asunnosta.', answer: 'Mä', hint: 'minä → mä; tykätä on puhekielinen synonyymi verbille pitää' },
        { prompt: 'Emme viihdy täällä. → Me ei ___ täällä.', answer: 'viihdytä', hint: 'emme viihdy → me ei viihdytä (puhekielen passiivimuoto)' },
        { prompt: 'Sinä asut kaukana keskustasta. → ___ asut kaukana keskustasta.', answer: 'Sä', hint: 'sinä → sä' },
      ],
    },
    grammarTopicIds: ['puhekieli-vs-kirjakieli', 'omistusrakenne'],
    sampleAnswer: {
      promptFi: 'Kuvaile kotiasi ja kerro, millainen olisi unelmiesi asunto.',
      promptEn: 'Describe your home and tell what your dream apartment would be like.',
      promptBn: 'আপনার বাড়ি সম্পর্কে বর্ণনা করুন এবং বলুন আপনার স্বপ্নের বাসা কেমন হবে।',
      textFi:
        'Asun tällä hetkellä kaksiossa lähellä keskustaa, ja vaikka asunto on melko pieni, se on kodikas ja sopii minulle hyvin, koska kaikki palvelut ovat kävelymatkan päässä. Suurin haittapuoli on se, ettei asunnossa ole parveketta, minkä vuoksi joudun aina menemään ulos, kun haluan hengittää raikasta ilmaa. Jos saisin valita, unelmieni asunto olisi tilava kolmio, jossa olisi valoisa olohuone, oma työhuone etätöitä varten sekä iso parveke tai jopa pieni piha. Arvostaisin myös rauhallista naapurustoa ja hyviä kulkuyhteyksiä, sillä en halua olla riippuvainen autosta. Vaikka nykyinen kotini ei olekaan täydellinen, olen oppinut arvostamaan sitä, että minulla ylipäätään on turvallinen ja lämmin paikka, jonne palata joka päivän jälkeen.',
      textEn:
        "I currently live in a two-room apartment near the city center, and although it's fairly small, it's cozy and suits me well, since all the services are within walking distance. The biggest downside is that the apartment doesn't have a balcony, which means I always have to go outside whenever I want to breathe some fresh air. If I could choose, my dream apartment would be a spacious three-room flat with a bright living room, my own home office for remote work, and a large balcony or even a small yard. I would also value a quiet neighborhood and good transport connections, since I don't want to be dependent on a car. Even though my current home isn't perfect, I've learned to appreciate simply having a safe and warm place to return to after every day.",
      textBn:
        'আমি বর্তমানে কেন্দ্রস্থলের কাছাকাছি একটি দুই কক্ষের অ্যাপার্টমেন্টে থাকি, এবং যদিও জায়গাটি বেশ ছোট, এটি আরামদায়ক এবং আমার জন্য উপযুক্ত, কারণ সব সেবা হাঁটার দূরত্বে। সবচেয়ে বড় অসুবিধা হলো এখানে কোনো বারান্দা নেই, তাই তাজা বাতাস নিতে হলে আমাকে সবসময় বাইরে যেতে হয়। যদি বেছে নেওয়ার সুযোগ থাকত, আমার স্বপ্নের বাসা হতো একটি প্রশস্ত তিন কক্ষের ফ্ল্যাট, যেখানে থাকবে আলোকিত বসার ঘর, দূরবর্তী কাজের জন্য নিজস্ব একটি কক্ষ, এবং বড় একটি বারান্দা বা এমনকি ছোট একটি উঠান। আমি শান্ত পরিবেশ এবং ভালো যাতায়াত ব্যবস্থাকেও গুরুত্ব দিতাম, কারণ আমি গাড়ির উপর নির্ভরশীল হতে চাই না। যদিও আমার বর্তমান বাসা পুরোপুরি নিখুঁত নয়, আমি শিখেছি যে প্রতিদিনের শেষে ফিরে আসার জন্য একটি নিরাপদ ও উষ্ণ জায়গা থাকাটাই মূল্যবান।',
    },
  },
  {
    id: 'yvy-ch4',
    book: 'Ykäänkö vai ykiinkö – Highway to hill',
    chapterLabel: 'Teema 4: Terveys ja hyvinvointi',
    level: 'B1',
    topic: 'Terveys ja hyvinvointi',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'symptom'?", options: ['oire', 'lääke', 'hoito', 'kipu'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'stress'?", options: ['stressi', 'rentoutuminen', 'lepo', 'uni'], correctIndex: 0 },
      { question: 'Minun täytyy levätä, koska olen ___.', options: ['väsynyt', 'iloinen', 'terve', 'vahva'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'well-being'?", options: ['hyvinvointi', 'sairaus', 'väsymys', 'huoli'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'to recover'?", options: ['toipua', 'sairastua', 'väsyä', 'kärsiä'], correctIndex: 0 },
      { question: 'Nukun huonosti, jos juon liikaa ___.', options: ['kahvia', 'vettä', 'maitoa', 'mehua'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Muuta kirjakielinen lause puhekieliseksi.',
      items: [
        { prompt: 'Minä nukun huonosti. → ___ nukun huonosti.', answer: 'Mä', hint: 'minä → mä' },
        { prompt: 'Sinun pitäisi levätä enemmän. → ___ pitäis levätä enemmän.', answer: 'Sun', hint: 'sinun → sun' },
        { prompt: 'He eivät voi hyvin. → Ne ei ___ hyvin.', answer: 'voi', hint: 'he → ne puhekielessä, verbi pysyy yksikkömuotoisena' },
        { prompt: 'En minä jaksa enää. → En ___ jaksa enää.', answer: 'mä', hint: 'minä → mä kielteisessä lauseessa' },
        { prompt: 'Minä stressaan liikaa töistä. → ___ stressaan liikaa duunista.', answer: 'Mä', hint: 'minä → mä; työ → duuni' },
        { prompt: 'Emme käy koskaan lääkärissä. → Me ei ___ koskaan lääkärissä.', answer: 'käydä', hint: 'emme käy → me ei käydä (puhekielen passiivimuoto)' },
      ],
    },
    grammarTopicIds: ['puhekieli-vs-kirjakieli'],
    sampleAnswer: {
      promptFi: 'Kerro, miten pidät huolta terveydestäsi ja hyvinvoinnistasi arjessa.',
      promptEn: 'Explain how you take care of your health and well-being in everyday life.',
      promptBn: 'আপনি দৈনন্দিন জীবনে কীভাবে নিজের স্বাস্থ্য ও সুস্থতার যত্ন নেন তা বলুন।',
      textFi:
        'Pidän terveyttäni tärkeänä asiana, joten yritän panostaa siihen aktiivisesti arjessani. Pyrin liikkumaan vähintään puoli tuntia päivässä, useimmiten kävelemällä tai pyöräilemällä töihin, koska se on helppo tapa yhdistää liikunta osaksi normaalia päivää. Kiinnitän huomiota myös ruokavalioon ja yritän syödä monipuolisesti, vaikka myönnänkin, että kiireisinä päivinä pikaruoka houkuttelee liikaa. Ehkä tärkeintä on kuitenkin uni – olen huomannut, että jos nukun liian vähän, sekä keskittymiskykyni että mielialani kärsivät selvästi. Viime aikoina olen alkanut kiinnittää enemmän huomiota myös henkiseen hyvinvointiin, esimerkiksi rajaamalla työajan selkeästi ja varaamalla aikaa rentoutumiselle ilman puhelinta. Uskon, että pienet mutta säännölliset teot vaikuttavat pitkällä aikavälillä enemmän kuin yksittäiset suuret muutokset.',
      textEn:
        "I consider my health an important matter, so I try to actively invest in it in my everyday life. I aim to move for at least half an hour a day, most often by walking or cycling to work, since it's an easy way to combine exercise with a normal day. I also pay attention to my diet and try to eat in a varied way, although I admit that fast food is too tempting on busy days. Perhaps the most important thing, though, is sleep — I've noticed that if I sleep too little, both my ability to concentrate and my mood clearly suffer. Lately I've also started paying more attention to mental well-being, for example by clearly limiting my working hours and setting aside time to relax without my phone. I believe that small but regular actions matter more in the long run than single big changes.",
      textBn:
        'আমি আমার স্বাস্থ্যকে গুরুত্বপূর্ণ মনে করি, তাই দৈনন্দিন জীবনে সক্রিয়ভাবে এতে মনোযোগ দেওয়ার চেষ্টা করি। আমি প্রতিদিন অন্তত আধা ঘণ্টা নড়াচড়া করার চেষ্টা করি, বেশিরভাগ সময় হেঁটে বা সাইকেলে কাজে গিয়ে, কারণ এভাবে ব্যায়ামকে সাধারণ দিনের অংশ করে নেওয়া সহজ। আমি খাদ্যাভ্যাসের দিকেও মনোযোগ দিই এবং বৈচিত্র্যময় খাবার খাওয়ার চেষ্টা করি, যদিও স্বীকার করি যে ব্যস্ত দিনে ফাস্ট ফুড খুব লোভনীয় মনে হয়। তবে সবচেয়ে গুরুত্বপূর্ণ সম্ভবত ঘুম — আমি লক্ষ্য করেছি যে কম ঘুমালে আমার মনোযোগ এবং মেজাজ দুটোই স্পষ্টভাবে খারাপ হয়ে যায়। সম্প্রতি আমি মানসিক সুস্থতার দিকেও বেশি মনোযোগ দিতে শুরু করেছি, যেমন কাজের সময় স্পষ্টভাবে সীমিত রাখা এবং ফোন ছাড়া বিশ্রামের জন্য সময় রাখা। আমি বিশ্বাস করি, দীর্ঘমেয়াদে ছোট কিন্তু নিয়মিত অভ্যাসগুলো একক বড় পরিবর্তনের চেয়ে বেশি প্রভাব ফেলে।',
    },
  },
  {
    id: 'yvy-ch5',
    book: 'Ykäänkö vai ykiinkö – Highway to hill',
    chapterLabel: 'Teema 5: Yhteiskunta ja palvelut',
    level: 'B1',
    topic: 'Yhteiskunta ja palvelut',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'service'?", options: ['palvelu', 'laitos', 'virasto', 'toimisto'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'citizen'?", options: ['kansalainen', 'asukas', 'turisti', 'virkamies'], correctIndex: 0 },
      { question: 'Kunnan ___ auttavat asukkaita monissa asioissa.', options: ['palvelut', 'lait', 'verot', 'vaalit'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'authority/office'?", options: ['virasto', 'yritys', 'koulu', 'sairaala'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'to apply (for something)'?", options: ['hakea', 'saada', 'antaa', 'myöntää'], correctIndex: 0 },
      { question: 'Kaikilla kansalaisilla on oikeus ___.', options: ['terveydenhuoltoon', 'autoon', 'lomaan', 'asuntoon'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Muuta kirjakielinen lause puhekieliseksi.',
      items: [
        { prompt: 'Me tarvitsemme lisää tietoa. → Me ___ lisää tietoa.', answer: 'tarvitaan', hint: 'passiivi korvaa me-muodon puhekielessä' },
        { prompt: 'He eivät tienneet säännöistä. → Ne ei ___ säännöistä.', answer: 'tienny', hint: 'tienneet → tienny (loppu-t katoaa, -ee- lyhenee)' },
        { prompt: 'Minä asioin virastossa eilen. → ___ asioin virastossa eilen.', answer: 'Mä', hint: 'minä → mä' },
        { prompt: 'Emmekö me saa apua? → ___ me saada apua?', answer: 'Eiks', hint: 'emmekö → eiks (kieltokysymys yksinkertaistuu puhekielessä)' },
        { prompt: 'Minä luotan viranomaisiin. → ___ luotan viranomaisiin.', answer: 'Mä', hint: 'minä → mä' },
        { prompt: 'He eivät osanneet neuvoa minua. → Ne ei ___ neuvoa mua.', answer: 'osannu', hint: 'osanneet → osannu; minua → mua' },
      ],
    },
    grammarTopicIds: ['puhekieli-vs-kirjakieli', 'asiointikieli'],
    sampleAnswer: {
      promptFi: 'Kerro kokemuksestasi asioidessasi suomalaisen viranomaisen tai palvelun kanssa.',
      promptEn: 'Talk about an experience you had dealing with a Finnish authority or service.',
      promptBn: 'কোনো ফিনিশ কর্তৃপক্ষ বা সেবার সাথে আপনার অভিজ্ঞতার কথা বলুন।',
      textFi:
        'Kun muutin Suomeen, jouduin asioimaan useiden eri viranomaisten kanssa, ja muistan erityisen hyvin ensimmäisen käyntini Kelan toimistossa. Olin etukäteen hieman jännittynyt, koska en ollut varma, ymmärtäisinkö kaiken virkakieltä, mutta yllätyksekseni virkailija selitti asiat hyvin selkeästi ja oli valmis toistamaan tarvittaessa. Hakemuksen täyttäminen vei jonkin verran aikaa, sillä liitteitä piti kerätä useasta eri paikasta, mutta koko prosessi eteni lopulta sujuvasti. Opin tästä kokemuksesta, että kannattaa aina varata riittävästi aikaa ja ottaa mukaan kaikki mahdolliset asiakirjat etukäteen, jotta asiointi ei viivästy turhaan. Nykyään koen olevani paljon varmempi asioidessani viranomaisten kanssa, koska tiedän suunnilleen, mitä odottaa ja miten prosessi yleensä etenee.',
      textEn:
        "When I moved to Finland, I had to deal with several different authorities, and I remember my first visit to the Kela office particularly well. I was a bit nervous beforehand, because I wasn't sure I would understand all the official language, but to my surprise the clerk explained things very clearly and was ready to repeat things if needed. Filling in the application took some time, since I had to gather attachments from several different places, but the whole process eventually went smoothly. I learned from this experience that it's always worth reserving enough time and bringing all possible documents along in advance, so that the process isn't delayed unnecessarily. Nowadays I feel much more confident dealing with authorities, because I roughly know what to expect and how the process usually proceeds.",
      textBn:
        'যখন আমি ফিনল্যান্ডে চলে এসেছিলাম, তখন আমাকে বিভিন্ন কর্তৃপক্ষের সাথে যোগাযোগ করতে হয়েছিল, আর কেলার অফিসে আমার প্রথম যাওয়ার কথা বিশেষভাবে মনে আছে। আমি আগে থেকেই কিছুটা নার্ভাস ছিলাম, কারণ নিশ্চিত ছিলাম না যে সরকারি ভাষা পুরোপুরি বুঝতে পারব কিনা, কিন্তু অবাক করে দিয়ে কর্মকর্তা সবকিছু খুব স্পষ্টভাবে ব্যাখ্যা করলেন এবং প্রয়োজনে আবার বলতেও রাজি ছিলেন। আবেদনপত্র পূরণ করতে কিছুটা সময় লেগেছিল, কারণ বিভিন্ন জায়গা থেকে সংযুক্তি সংগ্রহ করতে হয়েছিল, তবে পুরো প্রক্রিয়াটি শেষ পর্যন্ত মসৃণভাবে এগিয়েছিল। এই অভিজ্ঞতা থেকে আমি শিখেছি যে সবসময় পর্যাপ্ত সময় রাখা এবং সম্ভাব্য সব কাগজপত্র আগে থেকে সাথে নেওয়া উচিত, যাতে প্রক্রিয়াটি অযথা বিলম্বিত না হয়। এখন আমি কর্তৃপক্ষের সাথে যোগাযোগ করার সময় অনেক বেশি আত্মবিশ্বাসী বোধ করি, কারণ মোটামুটি জানি কী আশা করতে হবে এবং প্রক্রিয়াটি সাধারণত কীভাবে এগোয়।',
    },
  },
  {
    id: 'yvy-ch6',
    book: 'Ykäänkö vai ykiinkö – Highway to hill',
    chapterLabel: 'Teema 6: Matkustaminen',
    level: 'B1',
    topic: 'Matkustaminen',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'trip/journey'?", options: ['matka', 'reitti', 'lippu', 'kartta'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'to book (a trip)'?", options: ['varata', 'peruuttaa', 'odottaa', 'myöhästyä'], correctIndex: 0 },
      { question: 'Lentomme ___ kaksi tuntia myöhässä.', options: ['oli', 'meni', 'tuli', 'ajoi'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'destination'?", options: ['kohde', 'lähtö', 'paluu', 'reitti'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'to get lost'?", options: ['eksyä', 'löytää', 'saapua', 'lähteä'], correctIndex: 0 },
      { question: 'Ennen matkaa kannattaa tarkistaa ___.', options: ['aikataulut', 'sään huomenna', 'naapurin nimi', 'television ohjelmat'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Muuta kirjakielinen lause puhekieliseksi.',
      items: [
        { prompt: 'Minä matkustan usein yksin. → ___ matkustan usein yksin.', answer: 'Mä', hint: 'minä → mä' },
        { prompt: 'Emme ehtineet lentokentälle ajoissa. → Me ei ___ lentokentälle ajoissa.', answer: 'ehditty', hint: 'puhekielen passiivimuoto: emme ehtineet → me ei ehditty' },
        { prompt: 'Sinulla on varmasti kiva matka. → ___ on varmasti kiva matka.', answer: 'Sul', hint: 'sinulla → sul' },
        { prompt: 'He eivät löytäneet hotellia. → Ne ei ___ hotellia.', answer: 'löytäny', hint: 'löytäneet → löytäny' },
        { prompt: 'Minä unohdin passini kotiin. → ___ unohdin passin kotiin.', answer: 'Mä', hint: 'minä → mä' },
        { prompt: 'He eivät varanneet hotellia etukäteen. → Ne ei ___ hotellia etukäteen.', answer: 'varannu', hint: 'varanneet → varannu' },
      ],
    },
    grammarTopicIds: ['puhekieli-vs-kirjakieli'],
    sampleAnswer: {
      promptFi: 'Kerro matkasta, joka on jäänyt erityisesti mieleesi, ja miksi.',
      promptEn: 'Describe a trip that has particularly stuck in your memory, and why.',
      promptBn: 'এমন একটি ভ্রমণের কথা বলুন যা বিশেষভাবে আপনার মনে গেঁথে আছে, এবং কেন।',
      textFi:
        'Yksi matkoista, jotka ovat jääneet erityisen hyvin mieleeni, oli reissu Pohjois-Norjaan pari vuotta sitten. Matkustimme ystäväni kanssa autolla useita päiviä, ja vaikka reitti oli pitkä ja välillä väsyttäväkin, maisemat olivat niin upeita, että kaikki vaiva kannatti. Yövyimme muutaman kerran teltassa keskellä ei mitään, ja muistan erityisen hyvin illan, jolloin näimme revontulet ensimmäistä kertaa elämässämme – se oli hetki, jota en unohda koskaan. Matka opetti minulle myös paljon itsestäni, sillä jouduin selviytymään tilanteista, joihin en ollut aiemmin tottunut, kuten navigoimaan tuntemattomilla teillä ilman kunnollista verkkoyhteyttä. Uskon, että juuri tällaiset matkat, joissa kaikki ei mene suunnitelmien mukaan, jäävät parhaiten mieleen ja opettavat eniten. Sen jälkeen olen yrittänyt matkustaa useammin tavalla, joka vie minut hieman pois omalta mukavuusalueeltani.',
      textEn:
        "One of the trips that has stuck in my memory particularly well was a trip to Northern Norway a couple of years ago. My friend and I drove for several days, and although the route was long and at times tiring, the scenery was so magnificent that all the effort was worth it. We camped a few times in the middle of nowhere, and I remember especially well the evening when we saw the northern lights for the first time in our lives — a moment I will never forget. The trip also taught me a lot about myself, since I had to cope with situations I wasn't used to before, such as navigating unfamiliar roads without a proper internet connection. I believe that it's precisely trips like this, where not everything goes according to plan, that stay in your memory best and teach you the most. Since then I've tried to travel more often in a way that takes me a little outside my own comfort zone.",
      textBn:
        'যে ভ্রমণগুলো আমার মনে বিশেষভাবে গেঁথে আছে তার মধ্যে একটি হলো কয়েক বছর আগে উত্তর নরওয়েতে করা একটি ট্রিপ। আমি আমার বন্ধুর সাথে গাড়িতে করে বেশ কয়েকদিন ভ্রমণ করেছিলাম, এবং যদিও রাস্তা লম্বা ও মাঝে মাঝে ক্লান্তিকর ছিল, দৃশ্যগুলো এতটাই অসাধারণ ছিল যে সব কষ্ট সার্থক মনে হয়েছিল। আমরা কয়েকবার একদম জনশূন্য জায়গায় তাঁবুতে রাত কাটিয়েছিলাম, এবং সেই সন্ধ্যাটি বিশেষভাবে মনে আছে যখন আমরা জীবনে প্রথমবারের মতো মেরুজ্যোতি দেখেছিলাম — এমন একটি মুহূর্ত যা আমি কখনো ভুলব না। এই ভ্রমণ আমাকে নিজের সম্পর্কেও অনেক কিছু শিখিয়েছে, কারণ আমাকে এমন পরিস্থিতির সাথে মানিয়ে নিতে হয়েছিল যা আগে অভ্যস্ত ছিলাম না, যেমন সঠিক ইন্টারনেট সংযোগ ছাড়া অপরিচিত রাস্তায় পথ খুঁজে বের করা। আমি বিশ্বাস করি, ঠিক এই ধরনের ভ্রমণ, যেখানে সবকিছু পরিকল্পনামাফিক হয় না, সেগুলোই সবচেয়ে বেশি মনে থাকে এবং সবচেয়ে বেশি শেখায়। এরপর থেকে আমি এমনভাবে ভ্রমণ করার চেষ্টা করেছি যা আমাকে নিজের স্বস্তির গণ্ডি থেকে কিছুটা বের করে আনে।',
    },
  },
  {
    id: 'yvy-ch7',
    book: 'Ykäänkö vai ykiinkö – Highway to hill',
    chapterLabel: 'Teema 7: Ihmissuhteet ja perhe',
    level: 'B2',
    topic: 'Ihmissuhteet ja perhe',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'relationship'?", options: ['suhde', 'sukulainen', 'ystävyys', 'perhe'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'to trust'?", options: ['luottaa', 'epäillä', 'pelätä', 'unohtaa'], correctIndex: 0 },
      { question: 'Meidän ___ on kestänyt jo kymmenen vuotta.', options: ['suhteemme', 'perheemme', 'kotimme', 'työmme'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'conflict/argument'?", options: ['riita', 'sopimus', 'juhla', 'vierailu'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'to forgive'?", options: ['antaa anteeksi', 'syyttää', 'epäillä', 'unohtaa'], correctIndex: 0 },
      { question: 'Hyvässä ystävyydessä on tärkeää ___.', options: ['rehellisyys', 'kilpailu', 'etäisyys', 'salailu'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Muuta kirjakielinen lause puhekieliseksi.',
      items: [
        { prompt: 'Minä rakastan perhettäni. → ___ rakastan perhettäni.', answer: 'Mä', hint: 'minä → mä' },
        { prompt: 'Emme riitele usein. → Me ei ___ usein.', answer: 'riidellä', hint: 'emme riitele → me ei riidellä (puhekielen passiivimuoto)' },
        { prompt: 'Luuletko sinä, että hän tulee? → Luuleks ___, että se tulee?', answer: 'sä', hint: 'luuletko sinä → luuleks sä; hän → se puhekielessä' },
        { prompt: 'He eivät ymmärtäneet toisiaan. → Ne ei ___ toisiaan.', answer: 'ymmärtäny', hint: 'ymmärtäneet → ymmärtäny' },
        { prompt: 'Minä luotan sinuun täysin. → ___ luotan suhun täysin.', answer: 'Mä', hint: 'minä → mä; sinuun → suhun on hyvin puhekielinen muoto' },
        { prompt: 'He eivät puhu enää keskenään. → Ne ei ___ enää keskenään.', answer: 'puhu', hint: 'he → ne, verbimuoto pysyy samana yksikössä' },
      ],
    },
    grammarTopicIds: ['puhekieli-vs-kirjakieli', 'liitepartikkelit'],
    sampleAnswer: {
      promptFi: 'Kerro, millainen on mielestäsi hyvä ihmissuhde, ja anna esimerkki omasta elämästäsi.',
      promptEn: 'Describe what you think makes a good relationship, and give an example from your own life.',
      promptBn: 'আপনার মতে একটি ভালো সম্পর্ক কেমন হওয়া উচিত তা বলুন, এবং নিজের জীবন থেকে একটি উদাহরণ দিন।',
      textFi:
        'Mielestäni hyvä ihmissuhde, oli kyse sitten parisuhteesta, ystävyydestä tai perhesuhteesta, rakentuu ennen kaikkea molemminpuoliselle luottamukselle ja avoimelle viestinnälle. Uskon, että erimielisyyksiä syntyy väistämättä kaikissa suhteissa, mutta tärkeintä on se, miten niistä puhutaan ja miten ne ratkaistaan. Omasta elämästäni voin mainita esimerkkinä ystävyyteni lapsuudenystäväni kanssa, joka on kestänyt jo yli kaksikymmentä vuotta huolimatta siitä, että asumme nykyään eri kaupungeissa. Olemme oppineet, että emme voi olla aina samaa mieltä kaikesta, mutta olemme silti aina valmiita kuuntelemaan toisiamme ja tarvittaessa pyytämään anteeksi. Uskon, että juuri tämä valmius nähdä vaivaa suhteen eteen, eikä pelkkä alkuperäinen kemia, on se, mikä pitää ihmissuhteet elossa pitkällä aikavälillä.',
      textEn:
        "In my opinion, a good relationship — whether it's a romantic relationship, a friendship, or a family relationship — is built above all on mutual trust and open communication. I believe disagreements inevitably arise in every relationship, but what matters most is how they are talked about and resolved. From my own life I can mention as an example my friendship with a childhood friend, which has lasted more than twenty years despite the fact that we now live in different cities. We've learned that we can't always agree on everything, but we're still always willing to listen to each other and, when needed, to apologize. I believe it's precisely this willingness to put effort into the relationship, rather than just the original chemistry, that keeps relationships alive in the long run.",
      textBn:
        'আমার মতে একটি ভালো সম্পর্ক, তা প্রেমের সম্পর্ক, বন্ধুত্ব বা পারিবারিক সম্পর্কই হোক না কেন, মূলত পারস্পরিক বিশ্বাস এবং খোলামেলা যোগাযোগের উপর গড়ে ওঠে। আমি বিশ্বাস করি, প্রতিটি সম্পর্কেই মতভেদ অনিবার্যভাবে দেখা দেয়, তবে সবচেয়ে গুরুত্বপূর্ণ হলো সেগুলো নিয়ে কীভাবে কথা বলা হয় এবং কীভাবে সমাধান করা হয়। নিজের জীবন থেকে উদাহরণ হিসেবে আমি আমার শৈশবের বন্ধুর সাথে বন্ধুত্বের কথা বলতে পারি, যা বিশ বছরেরও বেশি সময় ধরে টিকে আছে, যদিও আমরা এখন ভিন্ন শহরে থাকি। আমরা শিখেছি যে সবকিছুতে সবসময় একমত হওয়া সম্ভব নয়, কিন্তু তারপরও একে অপরের কথা শুনতে এবং প্রয়োজনে ক্ষমা চাইতে সবসময় প্রস্তুত থাকি। আমি বিশ্বাস করি, ঠিক এই ধরনের সম্পর্কের জন্য চেষ্টা করার ইচ্ছাই, শুধু প্রাথমিক রসায়ন নয়, দীর্ঘমেয়াদে সম্পর্ককে জীবিত রাখে।',
    },
  },

  // ───────────────────────────── YKIä kohti ─────────────────────────────
  // A reading/writing/listening/speaking exercise book for YKI-testi prep,
  // also organized by the seven YKI themes, without a dedicated grammar
  // section. Unlike the drill book above, these companion chapters use
  // ordinary grammar drills tied to each theme (rather than a puhekieli
  // focus), to feel like a genuinely distinct second book.
  {
    id: 'yk-ch1',
    book: 'YKIä kohti',
    chapterLabel: 'Teema 1: Arki ja vapaa-aika',
    level: 'A2',
    topic: 'Arki ja vapaa-aika',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'weekday'?", options: ['arkipäivä', 'juhlapäivä', 'lomapäivä', 'pyhäpäivä'], correctIndex: 0 },
      { question: "Mikä ilmaus tarkoittaa 'to hang out/spend time'?", options: ['viettää aikaa', 'kiirehtiä', 'stressata', 'väsyä'], correctIndex: 0 },
      { question: 'Aamuisin minulla on kiire, mutta illat ovat ___.', options: ['rauhallisia', 'kiireisiä', 'meluisia', 'lyhyitä'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'routine'?", options: ['rutiini', 'yllätys', 'poikkeus', 'muutos'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'to plan (a schedule)'?", options: ['suunnitella', 'unohtaa', 'perua', 'muuttaa'], correctIndex: 0 },
      { question: 'Viikonloppuisin teen usein jotain ___ arjesta.', options: ['erilaista', 'samanlaista', 'tylsempää', 'kiireisempää'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause preesensillä tai sopivalla ajanilmauksella.',
      items: [
        { prompt: 'Yleensä minä ___ (herätä) kello seitsemän.', answer: 'herään', hint: 'preesens: herätä → herään' },
        { prompt: 'Viikonloppuisin ___ (nukkua) pidempään.', answer: 'nukun', hint: 'preesens, minä-muoto' },
        { prompt: 'Käyn lenkillä kolme kertaa ___ (viikko).', answer: 'viikossa', hint: 'sisäpaikallissija ajanilmauksessa: -ssa' },
        { prompt: 'Vapaa-ajallani ___ (lukea) usein kirjoja.', answer: 'luen', hint: 'preesens, minä-muoto' },
        { prompt: 'Joka aamu minä ___ (juoda) kahvia ennen töitä.', answer: 'juon', hint: 'preesens, minä-muoto' },
        { prompt: 'Käyn kuntosalilla kaksi kertaa ___ (viikko).', answer: 'viikossa', hint: 'sisäpaikallissija ajanilmauksessa: -ssa' },
      ],
    },
    grammarTopicIds: ['preesens', 'kellonajat'],
    sampleAnswer: {
      promptFi: 'Kirjoita lyhyt viesti ystävällesi, jossa kerrot, miten tyypillinen viikkosi menee.',
      promptEn: 'Write a short message to a friend describing how your typical week goes.',
      promptBn: 'আপনার একজন বন্ধুকে একটি সংক্ষিপ্ত বার্তা লিখুন, যেখানে বলুন আপনার সাধারণ সপ্তাহ কেমন কাটে।',
      textFi:
        'Hei! Kysyit, millaista arkeni on nykyään, joten kerron vähän. Maanantaista perjantaihin herään aika aikaisin ja lähden suoraan töihin, joten aamut menevät melko rutiininomaisesti. Keskiviikkoisin käyn suomen kielen kurssilla töiden jälkeen, mikä on ollut todella hyödyllistä, vaikka väsyttääkin joskus pitkän työpäivän päälle. Torstai-iltaisin yritän aina varata aikaa itselleni, esimerkiksi lukemalla tai käymällä lenkillä, koska huomasin, että muuten viikko menee pelkässä työn ja velvollisuuksien pyörityksessä. Viikonloppuisin taas yritän tietoisesti tehdä jotain erilaista kuin arkena, esimerkiksi tavata ystäviä tai lähteä pienelle retkelle luontoon. Millaista sinun viikkosi on ollut viime aikoina?',
      textEn:
        "Hi! You asked what my everyday life is like these days, so let me tell you a bit. From Monday to Friday I wake up fairly early and go straight to work, so the mornings go quite routinely. On Wednesdays I go to a Finnish course after work, which has been really useful, even though it's tiring on top of a long workday. On Thursday evenings I always try to reserve time for myself, for example by reading or going for a run, because I noticed that otherwise the week just spins around work and obligations. On weekends, on the other hand, I try to consciously do something different from my weekdays, for example meeting friends or going on a small trip into nature. What has your week been like lately?",
      textBn:
        'হাই! তুমি জিজ্ঞেস করেছিলে আজকাল আমার দৈনন্দিন জীবন কেমন, তাই একটু বলি। সোমবার থেকে শুক্রবার পর্যন্ত আমি বেশ সকালে উঠি এবং সরাসরি কাজে চলে যাই, তাই সকালগুলো মোটামুটি রুটিনমাফিক কাটে। বুধবারে কাজের পর আমি ফিনিশ ভাষার কোর্সে যাই, যা সত্যিই খুব উপকারী হয়েছে, যদিও লম্বা কর্মদিনের পর কখনো কখনো ক্লান্ত লাগে। বৃহস্পতিবার সন্ধ্যায় আমি সবসময় নিজের জন্য সময় রাখার চেষ্টা করি, যেমন বই পড়ে বা দৌড়াতে গিয়ে, কারণ লক্ষ্য করেছি যে নাহলে পুরো সপ্তাহটাই শুধু কাজ আর দায়িত্বের মধ্যে কেটে যায়। সপ্তাহান্তে আবার আমি সচেতনভাবে কর্মদিবসের চেয়ে ভিন্ন কিছু করার চেষ্টা করি, যেমন বন্ধুদের সাথে দেখা করা বা প্রকৃতিতে ছোট একটি ভ্রমণে যাওয়া। সম্প্রতি তোমার সপ্তাহ কেমন কেটেছে?',
    },
  },
  {
    id: 'yk-ch2',
    book: 'YKIä kohti',
    chapterLabel: 'Teema 2: Työ ja opiskelu',
    level: 'B1',
    topic: 'Työ ja opiskelu',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'exam'?", options: ['tentti', 'luento', 'harjoitus', 'kurssi'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'to graduate'?", options: ['valmistua', 'aloittaa', 'keskeyttää', 'hakea'], correctIndex: 0 },
      { question: 'Opiskelen iltaisin, koska päivällä olen ___.', options: ['töissä', 'kotona', 'lomalla', 'koulussa'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'skill'?", options: ['taito', 'tieto', 'tehtävä', 'tavoite'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'to fail (an exam)'?", options: ['reputtaa', 'läpäistä', 'valmistua', 'opiskella'], correctIndex: 0 },
      { question: 'Ennen tenttiä on hyvä ___ ajoissa.', options: ['aloittaa lukeminen', 'unohtaa kirjat', 'mennä nukkumaan myöhään', 'lopettaa opiskelu'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause imperfektillä tai konditionaalilla.',
      items: [
        { prompt: 'Viime vuonna minä ___ (opiskella) ranskaa.', answer: 'opiskelin', hint: 'imperfekti, minä-muoto' },
        { prompt: 'Hän ___ (valmistua) yliopistosta kaksi vuotta sitten.', answer: 'valmistui', hint: 'imperfekti' },
        { prompt: '___ (haluta) mieluummin opiskella kuin tehdä töitä juuri nyt.', answer: 'Haluaisin', hint: 'konditionaali' },
        { prompt: 'Jos minulla ___ (olla) enemmän aikaa, opiskelisin lisää kieliä.', answer: 'olisi', hint: 'konditionaali ehtolauseessa' },
        { prompt: 'Kun olin nuorempi, ___ (haluta) tulla insinööriksi.', answer: 'halusin', hint: 'imperfekti, minä-muoto' },
        { prompt: 'Jos saisin valita uudelleen, ___ (opiskella) eri alaa.', answer: 'opiskelisin', hint: 'konditionaali' },
      ],
    },
    grammarTopicIds: ['imperfekti', 'konditionaali'],
    sampleAnswer: {
      promptFi: 'Kirjoita mielipidekirjoitus siitä, kannattaako aikuisena vaihtaa alaa tai opiskella uudelleen.',
      promptEn: 'Write an opinion piece on whether it is worth changing careers or studying again as an adult.',
      promptBn: 'প্রাপ্তবয়স্ক অবস্থায় পেশা পরিবর্তন করা বা আবার পড়াশোনা করা লাভজনক কিনা তা নিয়ে একটি মতামত রচনা লিখুন।',
      textFi:
        'Mielestäni alan vaihtaminen tai uudelleenkouluttautuminen aikuisena kannattaa hyvin usein, vaikka päätös voikin tuntua aluksi pelottavalta. Ensinnäkin työelämä muuttuu jatkuvasti, ja monet ammatit, jotka olivat suosittuja kymmenen vuotta sitten, eivät välttämättä tarjoa enää samanlaisia mahdollisuuksia tulevaisuudessa. Toisaalta uskon, että aikuisiällä hankittu koulutus on usein tehokkaampaa kuin nuorena hankittu, koska aikuisella on jo selkeämpi käsitys omista vahvuuksistaan ja kiinnostuksen kohteistaan. Joku voisi väittää, että alan vaihtaminen on liian riskialtista, varsinkin jos perheellä on jo taloudellisia velvoitteita, ja tämä huoli on täysin ymmärrettävä. Kuitenkin uskon, että pitkällä aikavälillä työ, joka tuntuu merkitykselliseltä, kannattaa lähes aina enemmän kuin pelkkä taloudellinen turvallisuus lyhyellä aikavälillä. Kaiken kaikkiaan kantani on, että rohkeus opiskella uudelleen aikuisena on usein yksi parhaista päätöksistä, joita ihminen voi tehdä.',
      textEn:
        "In my opinion, changing careers or retraining as an adult is very often worth it, even though the decision can initially feel frightening. Firstly, working life is constantly changing, and many professions that were popular ten years ago may no longer offer the same opportunities in the future. On the other hand, I believe that education acquired in adulthood is often more effective than that acquired when young, since an adult already has a clearer understanding of their own strengths and interests. Someone might argue that changing careers is too risky, especially if a family already has financial obligations, and this concern is entirely understandable. However, I believe that in the long run, work that feels meaningful is almost always worth more than mere short-term financial security. All in all, my position is that the courage to study again as an adult is often one of the best decisions a person can make.",
      textBn:
        'আমার মতে, প্রাপ্তবয়স্ক অবস্থায় পেশা পরিবর্তন করা বা পুনরায় প্রশিক্ষণ নেওয়া প্রায়ই লাভজনক, যদিও সিদ্ধান্তটি প্রথমে ভীতিকর মনে হতে পারে। প্রথমত, কর্মজীবন ক্রমাগত পরিবর্তিত হচ্ছে, এবং দশ বছর আগে জনপ্রিয় থাকা অনেক পেশা ভবিষ্যতে হয়তো আর একই সুযোগ দেবে না। অন্যদিকে, আমি বিশ্বাস করি প্রাপ্তবয়স্ক অবস্থায় অর্জিত শিক্ষা প্রায়ই তরুণ বয়সে অর্জিত শিক্ষার চেয়ে বেশি কার্যকর, কারণ একজন প্রাপ্তবয়স্কের নিজের শক্তি ও আগ্রহ সম্পর্কে স্পষ্টতর ধারণা থাকে। কেউ কেউ যুক্তি দিতে পারেন যে পেশা পরিবর্তন খুব ঝুঁকিপূর্ণ, বিশেষত পরিবারের আর্থিক দায়িত্ব থাকলে, এবং এই উদ্বেগ সম্পূর্ণ বোধগম্য। তবে আমি বিশ্বাস করি, দীর্ঘমেয়াদে অর্থবহ মনে হওয়া কাজ প্রায় সবসময় স্বল্পমেয়াদী আর্থিক নিরাপত্তার চেয়ে বেশি মূল্যবান। সব মিলিয়ে আমার অবস্থান হলো, প্রাপ্তবয়স্ক অবস্থায় আবার পড়াশোনা করার সাহস প্রায়ই একজন মানুষ যে সেরা সিদ্ধান্তগুলো নিতে পারে তার একটি।',
    },
  },
  {
    id: 'yk-ch3',
    book: 'YKIä kohti',
    chapterLabel: 'Teema 3: Asuminen ja koti',
    level: 'A2',
    topic: 'Asuminen ja koti',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'furnished'?", options: ['kalustettu', 'tyhjä', 'remontoitu', 'vuokrattu'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'view (from a window)'?", options: ['näköala', 'ikkuna', 'ovi', 'seinä'], correctIndex: 0 },
      { question: 'Asuntoni on pieni mutta ___.', options: ['kodikas', 'kylmä', 'pimeä', 'meluisa'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'to decorate'?", options: ['sisustaa', 'siivota', 'remontoida', 'myydä'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'to rent out'?", options: ['vuokrata', 'ostaa', 'myydä', 'lainata'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'storage space'?", options: ['säilytystila', 'olohuone', 'näköala', 'remontti'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause sisä- tai ulkopaikallissijalla.',
      items: [
        { prompt: 'Sohva on ___ (olohuone).', answer: 'olohuoneessa', hint: 'sisäpaikallissija: -ssa' },
        { prompt: 'Laitan kirjat ___ (hylly).', answer: 'hyllylle', hint: 'ulkopaikallissija: -lle (mihin?)' },
        { prompt: 'Asun kolmannessa ___ (kerros).', answer: 'kerroksessa', hint: 'sisäpaikallissija: -ssa' },
        { prompt: 'Avaimet ovat ___ (pöytä).', answer: 'pöydällä', hint: 'ulkopaikallissija: -lla (missä?)' },
        { prompt: 'Vien roskat ___ (piha).', answer: 'pihalle', hint: 'ulkopaikallissija: -lle (mihin?)' },
        { prompt: 'Vaatteet ovat ___ (kaappi).', answer: 'kaapissa', hint: 'sisäpaikallissija: -ssa (missä?)' },
      ],
    },
    grammarTopicIds: ['sisapaikallissijat', 'ulkopaikallissijat'],
    sampleAnswer: {
      promptFi: 'Kirjoita ilmoitus, jossa etsit uutta asuntokaveria.',
      promptEn: 'Write a notice in which you are looking for a new roommate.',
      promptBn: 'একটি নতুন রুমমেট খুঁজছেন এমন একটি বিজ্ঞপ্তি লিখুন।',
      textFi:
        'Etsin asuntokaveria kolmioon, joka sijaitsee aivan keskustan tuntumassa, hyvien kulkuyhteyksien varrella. Oma huoneesi olisi valoisa ja noin viidentoista neliön kokoinen, ja yhteiskäytössä olisivat keittiö, kylpyhuone sekä pieni parveke. Vuokra on kohtuullinen, ja siihen sisältyvät kaikki peruskulut, kuten vesi ja lämmitys – ainoastaan sähkö ja internet jaetaan erikseen. Toivon asuntokaverilta ennen kaikkea siisteyttä ja rauhallisuutta, sillä käyn itse töissä epäsäännöllisiä aikoja enkä halua asua jatkuvan metelin keskellä. Ei haittaa, vaikka joskus kutsuisit ystäviä kylään, kunhan asiasta sovitaan etukäteen. Jos kiinnostuit, ota rohkeasti yhteyttä – voidaan sopia yhteinen tapaaminen, jossa näytän asunnon ja voimme tutustua toisiimme paremmin.',
      textEn:
        "I'm looking for a roommate for a three-room apartment located right near the city center, close to good transport connections. Your own room would be bright and about fifteen square meters, and the kitchen, bathroom, and a small balcony would be shared. The rent is reasonable and includes all basic costs such as water and heating — only electricity and internet are split separately. Above all, I'd hope for a roommate who is tidy and calm, since I myself work irregular hours and don't want to live amid constant noise. It's fine if you sometimes invite friends over, as long as it's agreed on in advance. If you're interested, feel free to get in touch — we could arrange a meeting where I show you the apartment and we can get to know each other better.",
      textBn:
        'আমি একটি তিন কক্ষের ফ্ল্যাটের জন্য একজন রুমমেট খুঁজছি, যা কেন্দ্রস্থলের একদম কাছে, ভালো যাতায়াত ব্যবস্থার পাশে অবস্থিত। আপনার নিজের ঘরটি হবে আলোকিত এবং প্রায় পনেরো বর্গমিটার আকারের, আর রান্নাঘর, বাথরুম এবং একটি ছোট বারান্দা যৌথভাবে ব্যবহৃত হবে। ভাড়া যুক্তিসঙ্গত, এবং তাতে পানি ও গরম করার মতো সব মৌলিক খরচ অন্তর্ভুক্ত — শুধু বিদ্যুৎ ও ইন্টারনেট আলাদাভাবে ভাগ করা হয়। আমি রুমমেটের কাছে সবচেয়ে বেশি যা আশা করি তা হলো পরিচ্ছন্নতা ও শান্তি, কারণ আমি নিজেও অনিয়মিত সময়ে কাজ করি এবং ক্রমাগত শব্দের মধ্যে থাকতে চাই না। মাঝে মাঝে বন্ধুদের বাসায় ডাকলে সমস্যা নেই, যতক্ষণ আগে থেকে বিষয়টি নিয়ে কথা বলা হয়। আগ্রহী হলে নির্দ্বিধায় যোগাযোগ করুন — আমরা একটি সাক্ষাতের সময় ঠিক করতে পারি, যেখানে আমি বাসাটি দেখাব এবং আমরা একে অপরকে আরও ভালোভাবে জানতে পারব।',
    },
  },
  {
    id: 'yk-ch4',
    book: 'YKIä kohti',
    chapterLabel: 'Teema 4: Terveys ja hyvinvointi',
    level: 'B1',
    topic: 'Terveys ja hyvinvointi',
    vocabQuiz: [
      { question: "Mikä ilmaus tarkoittaa 'balanced diet'?", options: ['monipuolinen ruokavalio', 'pikaruoka', 'ruokavalio ilman lihaa', 'ruokahalu'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'to exercise'?", options: ['liikkua', 'levätä', 'nukkua', 'syödä'], correctIndex: 0 },
      { question: 'Terveellinen elämäntapa sisältää liikuntaa ja ___ unta.', options: ['riittävästi', 'vähän', 'liikaa', 'ei ollenkaan'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'mental health'?", options: ['mielenterveys', 'ruumiinlämpö', 'verenpaine', 'unettomuus'], correctIndex: 0 },
      { question: "Mikä ilmaus tarkoittaa 'to book a doctor's appointment'?", options: ["varata aika lääkärille", 'peruuttaa lääkeresepti', 'mennä apteekkiin', 'ottaa lääkettä'], correctIndex: 0 },
      { question: 'Terveyskeskuksessa jonotusaika voi olla ___.', options: ['pitkä', 'lyhyt aina', 'olematon', 'ilmainen aina'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause modaaliverbillä tai objektin oikealla sijamuodolla.',
      items: [
        { prompt: 'Sinun ___ (pitää) syödä monipuolisesti.', answer: 'pitää', hint: 'modaaliverbi + A-infinitiivi' },
        { prompt: '___ (voida) me liikkua yhdessä useammin?', answer: 'Voisimmeko', hint: 'konditionaali + kysymysliite' },
        { prompt: 'Syön joka päivä ___ (hedelmä).', answer: 'hedelmiä', hint: 'osaobjekti (partitiivi), määrittelemätön määrä' },
        { prompt: 'Join koko ___ (vesi).', answer: 'veden', hint: 'kokonaisobjekti (akkusatiivi), tekeminen valmis' },
        { prompt: 'Jos ___ (voida) valita, harrastaisin enemmän liikuntaa.', answer: 'voisin', hint: 'konditionaali' },
        { prompt: 'Söin eilen liikaa ___ (makeinen).', answer: 'makeisia', hint: 'osaobjekti (partitiivi)' },
      ],
    },
    grammarTopicIds: ['modaaliverbit', 'objektin-sijamuodot'],
    sampleAnswer: {
      promptFi: 'Kirjoita mielipidekirjoitus siitä, tekevätkö ihmiset nykyään tarpeeksi omasta hyvinvoinnistaan.',
      promptEn: 'Write an opinion piece on whether people nowadays do enough for their own well-being.',
      promptBn: 'মানুষ আজকাল নিজেদের সুস্থতার জন্য যথেষ্ট করছে কিনা তা নিয়ে একটি মতামত রচনা লিখুন।',
      textFi:
        'Olen sitä mieltä, että moni ihminen tietää nykyään erittäin hyvin, mitä hyvinvointi vaatisi, mutta arjen kiireen keskellä sen toteuttaminen jää usein puolitiehen. Ensimmäinen syy tähän on se, että työelämä on entistä vaativampaa, ja monella ei yksinkertaisesti tunnu riittävän aikaa säännölliseen liikuntaan tai riittävään uneen. Toisaalta joku voisi väittää, että kyse on ennen kaikkea priorisoinnista, ja että jokainen voisi löytää edes puoli tuntia päivässä itselleen, jos todella haluaisi. Kuitenkin uskon, että pelkkä yksilön tahto ei riitä, vaan myös yhteiskunnan ja työpaikkojen pitäisi tukea hyvinvointia paremmin, esimerkiksi joustavammilla työajoilla. Kaiken kaikkiaan kantani on, että ihmiset haluaisivat kyllä pitää parempaa huolta itsestään, mutta rakenteelliset esteet tekevät siitä usein vaikeampaa kuin sen pitäisi olla.',
      textEn:
        "I am of the opinion that many people nowadays know very well what well-being would require, but amid the rush of everyday life, actually doing it is often left half-finished. The first reason for this is that working life has become more demanding, and for many there simply doesn't seem to be enough time for regular exercise or sufficient sleep. On the other hand, someone might argue that it's above all a matter of prioritizing, and that everyone could find at least half an hour a day for themselves if they really wanted to. However, I believe that individual willpower alone isn't enough — society and workplaces should also support well-being better, for example through more flexible working hours. All in all, my position is that people would indeed like to take better care of themselves, but structural obstacles often make it harder than it should be.",
      textBn:
        'আমার মতে, আজকাল অনেক মানুষই খুব ভালোভাবে জানে সুস্থতার জন্য কী প্রয়োজন, কিন্তু দৈনন্দিন ব্যস্ততার মধ্যে তা বাস্তবায়ন প্রায়ই অসম্পূর্ণ থেকে যায়। এর প্রথম কারণ হলো, কর্মজীবন আগের চেয়ে বেশি দাবিদার হয়ে উঠেছে, এবং অনেকের নিয়মিত ব্যায়াম বা পর্যাপ্ত ঘুমের জন্য যথেষ্ট সময় বলে মনে হয় না। অন্যদিকে, কেউ কেউ যুক্তি দিতে পারেন যে এটি মূলত অগ্রাধিকারের বিষয়, এবং সত্যিই চাইলে প্রত্যেকেই দিনে অন্তত আধা ঘণ্টা নিজের জন্য বের করতে পারে। তবে আমি বিশ্বাস করি, শুধু ব্যক্তির ইচ্ছাই যথেষ্ট নয় — সমাজ ও কর্মক্ষেত্রেরও সুস্থতাকে আরও ভালোভাবে সমর্থন করা উচিত, যেমন আরও নমনীয় কর্মঘণ্টার মাধ্যমে। সব মিলিয়ে আমার অবস্থান হলো, মানুষ নিজেদের আরও ভালোভাবে যত্ন নিতে চাইলেও, কাঠামোগত বাধাগুলো তা প্রায়ই যতটা কঠিন হওয়া উচিত তার চেয়ে বেশি কঠিন করে তোলে।',
    },
  },
  {
    id: 'yk-ch5',
    book: 'YKIä kohti',
    chapterLabel: 'Teema 5: Yhteiskunta ja palvelut',
    level: 'B1',
    topic: 'Yhteiskunta ja palvelut',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'to vote'?", options: ['äänestää', 'valita', 'päättää', 'hallita'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'municipality'?", options: ['kunta', 'valtio', 'maakunta', 'seutu'], correctIndex: 0 },
      { question: 'Kunnan palvelut ___ veronmaksajien rahoilla.', options: ['rahoitetaan', 'myydään', 'suljetaan', 'perutaan'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'equality'?", options: ['tasa-arvo', 'eriarvoisuus', 'köyhyys', 'rikkaus'], correctIndex: 0 },
      { question: "Mikä ilmaus tarkoittaa 'public service'?", options: ['julkinen palvelu', 'yksityinen yritys', 'harrastus', 'vapaaehtoistyö'], correctIndex: 0 },
      { question: 'Suomessa koulutus on ___ kansalaisille.', options: ['maksutonta', 'kallista', 'vapaaehtoista', 'harvinaista'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause passiivilla.',
      items: [
        { prompt: 'Suomessa ___ (äänestää) neljän vuoden välein.', answer: 'äänestetään', hint: 'passiivi, preesens' },
        { prompt: 'Uusi kirjasto ___ (avata) ensi vuonna.', answer: 'avataan', hint: 'passiivi, preesens' },
        { prompt: 'Palvelut ___ (rahoittaa) verovaroilla.', answer: 'rahoitetaan', hint: 'passiivi, preesens' },
        { prompt: 'Kokous ___ (pitää) viime viikolla.', answer: 'pidettiin', hint: 'passiivi, imperfekti' },
        { prompt: 'Terveyskeskuksessa ___ (hoitaa) potilaita joka päivä.', answer: 'hoidetaan', hint: 'passiivi, preesens' },
        { prompt: 'Viime vuonna laki ___ (muuttaa).', answer: 'muutettiin', hint: 'passiivi, imperfekti' },
      ],
    },
    grammarTopicIds: ['passiivi-preesens', 'passiivi-imperfekti'],
    sampleAnswer: {
      promptFi: 'Kirjoita mielipidekirjoitus siitä, ovatko julkiset palvelut mielestäsi riittäviä Suomessa.',
      promptEn: 'Write an opinion piece on whether you think public services in Finland are sufficient.',
      promptBn: 'ফিনল্যান্ডের সরকারি সেবা আপনার মতে যথেষ্ট কিনা তা নিয়ে একটি মতামত রচনা লিখুন।',
      textFi:
        'Olen sitä mieltä, että Suomen julkiset palvelut ovat kansainvälisesti vertailtuna varsin hyvällä tasolla, mutta niissä on silti parannettavaa. Ensimmäinen syy tähän näkemykseen on se, että esimerkiksi terveyskeskuksissa jonotusajat voivat toisinaan venyä kohtuuttoman pitkiksi, mikä heikentää palvelun laatua käytännössä. Toisaalta on myönnettävä, että verrattuna moniin muihin maihin, Suomessa peruspalvelut ovat kaikkien saatavilla riippumatta tulotasosta, mikä on mielestäni erittäin arvokas asia. Joku voisi väittää, että palveluiden laatu vaihtelee liikaa alueiden välillä, ja tämä huoli on täysin perusteltu, sillä pienemmillä paikkakunnilla palveluita on usein karsittu voimakkaasti. Kuitenkin uskon, että kokonaisuutena suomalainen hyvinvointiyhteiskunta tarjoaa vakaan pohjan, jolle voi rakentaa, kunhan resursseja jaetaan jatkossa nykyistä tasaisemmin. Kaiken kaikkiaan kantani on, että palvelut ovat hyviä, mutta niiden tasa-arvoisuuteen eri alueiden välillä tulisi kiinnittää enemmän huomiota.',
      textEn:
        "I am of the opinion that Finland's public services are at a fairly good level by international comparison, but there is still room for improvement. The first reason for this view is that, for example, waiting times at health centers can sometimes stretch unreasonably long, which weakens the quality of the service in practice. On the other hand, it must be admitted that compared to many other countries, basic services in Finland are available to everyone regardless of income level, which I consider a very valuable thing. Someone might argue that the quality of services varies too much between regions, and this concern is entirely justified, since services have often been cut significantly in smaller localities. However, I believe that overall the Finnish welfare society offers a stable foundation to build on, as long as resources are distributed more evenly going forward. All in all, my position is that the services are good, but more attention should be paid to equality between different regions.",
      textBn:
        'আমার মতে, আন্তর্জাতিক তুলনায় ফিনল্যান্ডের সরকারি সেবা বেশ ভালো মানের, তবে তাতে এখনও উন্নতির জায়গা আছে। এই মতের প্রথম কারণ হলো, উদাহরণস্বরূপ স্বাস্থ্যকেন্দ্রগুলোতে অপেক্ষার সময় কখনো কখনো অস্বাভাবিকভাবে দীর্ঘ হতে পারে, যা বাস্তবে সেবার মান কমিয়ে দেয়। অন্যদিকে, স্বীকার করতেই হয় যে অনেক দেশের তুলনায় ফিনল্যান্ডে আয়ের স্তর নির্বিশেষে মৌলিক সেবা সবার জন্য উপলব্ধ, যা আমার মতে অত্যন্ত মূল্যবান একটি বিষয়। কেউ কেউ যুক্তি দিতে পারেন যে অঞ্চলভেদে সেবার মান খুব বেশি ভিন্ন, এবং এই উদ্বেগ সম্পূর্ণ যুক্তিসঙ্গত, কারণ ছোট শহরগুলোতে সেবা প্রায়ই উল্লেখযোগ্যভাবে কমানো হয়েছে। তবে আমি বিশ্বাস করি, সামগ্রিকভাবে ফিনিশ কল্যাণ সমাজ একটি স্থিতিশীল ভিত্তি প্রদান করে, যার উপর গড়ে তোলা সম্ভব, যদি সম্পদ ভবিষ্যতে আরও সমানভাবে বণ্টন করা হয়। সব মিলিয়ে আমার অবস্থান হলো, সেবাগুলো ভালো, তবে বিভিন্ন অঞ্চলের মধ্যে সমতার দিকে আরও বেশি মনোযোগ দেওয়া উচিত।',
    },
  },
  {
    id: 'yk-ch6',
    book: 'YKIä kohti',
    chapterLabel: 'Teema 6: Matkustaminen',
    level: 'B2',
    topic: 'Matkustaminen',
    vocabQuiz: [
      { question: "Mikä ilmaus tarkoittaa 'to broaden one's horizons'?", options: ['avartaa maailmankuvaa', 'kaventaa näkemystä', 'unohtaa kotimaa', 'välttää uutta'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'culture shock'?", options: ['kulttuurishokki', 'koti-ikävä', 'matkapahoinvointi', 'aikaero'], correctIndex: 0 },
      { question: 'Matkustaminen on opettanut minua ___.', options: ['sopeutumaan', 'unohtamaan', 'pelkäämään', 'kiirehtimään'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'unforgettable'?", options: ['unohtumaton', 'tavallinen', 'lyhyt', 'kallis'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'to immerse oneself (in a culture)'?", options: ['syventyä', 'etääntyä', 'kiirehtiä', 'unohtaa'], correctIndex: 0 },
      { question: 'Matkustaminen yksin vaatii enemmän ___.', options: ['itsenäisyyttä', 'seuraa', 'rahaa aina', 'aikaa aina'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause perfektillä tai NUT-partisiipilla.',
      items: [
        { prompt: 'Olen ___ (matkustaa) monessa maassa.', answer: 'matkustanut', hint: 'perfekti: olla + NUT-partisiippi' },
        { prompt: 'Emme ole koskaan ___ (käydä) Japanissa.', answer: 'käyneet', hint: 'perfekti, monikko' },
        { prompt: 'Olen matkallani ___ (oppia) paljon uutta kulttuurista.', answer: 'oppinut', hint: 'perfekti' },
        { prompt: 'En ole koskaan ___ (nähdä) niin kauniita maisemia.', answer: 'nähnyt', hint: 'perfekti, NUT-partisiippi' },
        { prompt: 'Olemme ___ (nähdä) monta mielenkiintoista paikkaa.', answer: 'nähneet', hint: 'perfekti, monikko' },
        { prompt: 'En ole ikinä ___ (matkustaa) yksin ennen tätä.', answer: 'matkustanut', hint: 'perfekti' },
      ],
    },
    grammarTopicIds: ['perfekti', 'nut-partisiippi'],
    sampleAnswer: {
      promptFi: 'Kirjoita blogiteksti siitä, mitä olet oppinut matkustamalla yksin.',
      promptEn: 'Write a blog post about what you have learned from traveling alone.',
      promptBn: 'একা ভ্রমণ করে আপনি কী শিখেছেন তা নিয়ে একটি ব্লগ লেখা লিখুন।',
      textFi:
        'Kun lähdin ensimmäistä kertaa matkalle täysin yksin, en osannut kuvitella, kuinka paljon se tulisi opettamaan minulle itsestäni. Aluksi ajatus tuntui pelottavalta – kuka auttaisi, jos jokin menisi pieleen, ja miten selviytyisin vieraassa maassa ilman tuttua seuraa? Hyvin nopeasti kuitenkin huomasin, että yksin matkustaminen pakottaa tekemään päätöksiä itsenäisesti ja luottamaan omaan arviointikykyynsä, mikä kasvatti itsevarmuuttani huomattavasti. Olen myös oppinut, että yksin ollessaan on paljon helpompi tutustua paikallisiin ihmisiin, koska ei ole valmista seuraa, johon nojautua joka tilanteessa. Suurin oppi lienee kuitenkin se, että epämukavuusalueelle astuminen kannattaa lähes aina – juuri ne hetket, jotka tuntuivat aluksi pelottavimmilta, ovat jääneet parhaiten mieleeni jälkeenpäin. Suosittelen jokaista kokeilemaan yksin matkustamista ainakin kerran elämässään, sillä se opettaa asioita, joita ei voi oppia millään muulla tavalla.',
      textEn:
        "When I first went on a trip completely alone, I couldn't imagine how much it would end up teaching me about myself. At first the thought felt frightening — who would help if something went wrong, and how would I cope in a foreign country without familiar company? Very quickly, however, I noticed that traveling alone forces you to make decisions independently and trust your own judgment, which significantly increased my self-confidence. I've also learned that when you're alone it's much easier to get to know local people, since you don't have ready-made company to lean on in every situation. The biggest lesson, though, is probably that stepping outside your comfort zone is almost always worth it — precisely the moments that initially felt the scariest have stuck in my memory the best afterward. I recommend everyone try traveling alone at least once in their life, since it teaches things you can't learn any other way.",
      textBn:
        'যখন আমি প্রথমবারের মতো সম্পূর্ণ একা ভ্রমণে বের হয়েছিলাম, তখন আমি কল্পনাও করতে পারিনি এটি আমাকে নিজের সম্পর্কে কতটা শেখাবে। প্রথমে ভাবনাটা ভীতিকর মনে হয়েছিল — কিছু ভুল হলে কে সাহায্য করবে, আর পরিচিত সঙ্গী ছাড়া অপরিচিত দেশে কীভাবে চলব? তবে খুব দ্রুতই আমি লক্ষ্য করলাম যে একা ভ্রমণ করলে নিজে থেকে সিদ্ধান্ত নিতে এবং নিজের বিচারবুদ্ধির উপর আস্থা রাখতে হয়, যা আমার আত্মবিশ্বাসকে উল্লেখযোগ্যভাবে বাড়িয়ে দিয়েছে। আমি এটাও শিখেছি যে একা থাকলে স্থানীয় মানুষদের সাথে পরিচিত হওয়া অনেক সহজ, কারণ প্রতিটি পরিস্থিতিতে নির্ভর করার মতো প্রস্তুত সঙ্গী থাকে না। তবে সবচেয়ে বড় শিক্ষা সম্ভবত এটাই যে, স্বস্তির গণ্ডির বাইরে পা রাখা প্রায় সবসময়ই সার্থক — ঠিক সেই মুহূর্তগুলোই, যা প্রথমে সবচেয়ে ভীতিকর মনে হয়েছিল, পরে আমার স্মৃতিতে সবচেয়ে ভালোভাবে গেঁথে গেছে। আমি প্রত্যেককে জীবনে অন্তত একবার একা ভ্রমণ করার পরামর্শ দিই, কারণ এটি এমন কিছু শেখায় যা অন্য কোনোভাবে শেখা যায় না।',
    },
  },
  {
    id: 'yk-ch7',
    book: 'YKIä kohti',
    chapterLabel: 'Teema 7: Ihmissuhteet ja perhe',
    level: 'B2',
    topic: 'Ihmissuhteet ja perhe',
    vocabQuiz: [
      { question: "Mikä ilmaus tarkoittaa 'mutual respect'?", options: ['molemminpuolinen kunnioitus', 'yksipuolinen rakkaus', 'jatkuva riita', 'täydellinen sopu'], correctIndex: 0 },
      { question: "Mikä ilmaus tarkoittaa 'to compromise'?", options: ['tehdä kompromissi', 'väittää vastaan', 'antaa periksi kokonaan', 'jättää huomiotta'], correctIndex: 0 },
      { question: 'Hyvä parisuhde vaatii ___ ja luottamusta.', options: ['viestintää', 'rahaa', 'aikaa yksin', 'kilpailua'], correctIndex: 0 },
      { question: "Mikä ilmaus tarkoittaa 'to support each other'?", options: ['tukea toisiaan', 'kilpailla toistensa kanssa', 'unohtaa toisensa', 'välttää toisiaan'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'reconciliation'?", options: ['sovinto', 'riita', 'ero', 'epäluottamus'], correctIndex: 0 },
      { question: 'Perheenjäsenten välinen ___ on tärkeää.', options: ['yhteenkuuluvuus', 'kilpailu', 'etäisyys', 'kateus'], correctIndex: 0 },
    ],
    grammarDrill: {
      instructions: 'Täytä lause relatiivilauseella (joka/jotka) tai referoinnilla.',
      items: [
        { prompt: 'Minulla on ystävä, ___ auttaa minua aina.', answer: 'joka', hint: 'relatiivipronomini yksikössä' },
        { prompt: 'Minulla on ystäviä, ___ tukevat minua.', answer: 'jotka', hint: 'relatiivipronomini monikossa' },
        { prompt: 'Hän sanoi, ___ rakastaa perhettään yli kaiken.', answer: 'että', hint: 'epäsuora esitys: sanoi, että...' },
        { prompt: 'Kysyin häneltä, ___ hän oli onnellinen.', answer: 'oliko', hint: 'epäsuora kysymys: -ko-liite siirtyy sivulauseeseen' },
        { prompt: 'Tapasin naisen, ___ oli asunut Suomessa jo kauan.', answer: 'joka', hint: 'relatiivipronomini yksikössä' },
        { prompt: 'Hän kertoi, ___ he olivat muuttaneet ulkomaille.', answer: 'että', hint: 'epäsuora esitys' },
      ],
    },
    grammarTopicIds: ['relatiivilauseet', 'referointi'],
    sampleAnswer: {
      promptFi: 'Kirjoita kirje perheenjäsenellesi, jossa kerrot, miten paljon perhe merkitsee sinulle.',
      promptEn: 'Write a letter to a family member describing how much your family means to you.',
      promptBn: 'আপনার পরিবারের একজন সদস্যকে একটি চিঠি লিখুন, যেখানে বলুন পরিবার আপনার কাছে কতটা গুরুত্বপূর্ণ।',
      textFi:
        'Hei äiti, halusin kirjoittaa sinulle ja kertoa, kuinka paljon perheemme on minulle merkinnyt viime vuosien aikana. Vaikka asumme nykyään eri maissa ja näemme toisiamme harvemmin kuin haluaisimme, tunnen silti olevani lähellä teitä jokaista, kun puhumme puhelimessa tai videopuhelun välityksellä. Muistan erityisen hyvin, kuinka tuit minua, kun päätin muuttaa ulkomaille opiskelemaan – vaikka päätös varmasti pelotti sinuakin, et koskaan yrittänyt estää minua, vaan kannustit minua seuraamaan omaa polkuani. Juuri tällainen tuki on opettanut minulle, että perhe ei ole vain ihmisiä, joiden kanssa jakaa arki, vaan ennen kaikkea ihmisiä, jotka uskovat sinuun myös silloin, kun et itse ole varma. Toivon, että voisimme pian nähdä toisemme kasvotusten pidemmän aikaa, mutta siihen asti haluan, että tiedät, kuinka kiitollinen olen teistä kaikista. Kiitos, että olette aina olleet tukenani, vaikka välimatka on välillä pitkäkin.',
      textEn:
        "Hi mom, I wanted to write to you and tell you how much our family has meant to me over the past few years. Even though we now live in different countries and see each other less often than we'd like, I still feel close to each of you when we talk on the phone or over video call. I remember especially well how you supported me when I decided to move abroad to study — even though the decision surely scared you too, you never tried to stop me, but instead encouraged me to follow my own path. Precisely this kind of support has taught me that family isn't just people you share everyday life with, but above all people who believe in you even when you're not sure of yourself. I hope we can soon see each other face to face for a longer time, but until then I want you to know how grateful I am for all of you. Thank you for always being my support, even though the distance is sometimes long.",
      textBn:
        'প্রিয় মা, আমি তোমাকে লিখতে চেয়েছিলাম যে গত কয়েক বছরে আমাদের পরিবার আমার কাছে কতটা গুরুত্বপূর্ণ হয়ে উঠেছে। যদিও আমরা এখন ভিন্ন দেশে থাকি এবং আমরা যতটা চাই তার চেয়ে কম দেখা হয়, তবুও যখন আমরা ফোনে বা ভিডিও কলে কথা বলি, তখন আমি তোমাদের প্রত্যেকের কাছাকাছি অনুভব করি। বিশেষভাবে মনে আছে, যখন আমি বিদেশে পড়াশোনার জন্য যাওয়ার সিদ্ধান্ত নিয়েছিলাম, তখন তুমি কীভাবে আমাকে সমর্থন করেছিলে — যদিও সিদ্ধান্তটি নিশ্চয়ই তোমাকেও ভয় দেখিয়েছিল, তুমি কখনো আমাকে থামানোর চেষ্টা করোনি, বরং নিজের পথ অনুসরণ করতে উৎসাহিত করেছিলে। ঠিক এই ধরনের সমর্থনই আমাকে শিখিয়েছে যে পরিবার শুধু সেই মানুষ নয় যাদের সাথে দৈনন্দিন জীবন ভাগ করা হয়, বরং সবার আগে তারা এমন মানুষ যারা তোমার উপর বিশ্বাস রাখে এমনকি যখন তুমি নিজেই নিশ্চিত নও। আশা করি আমরা শীঘ্রই আবার দীর্ঘ সময়ের জন্য মুখোমুখি দেখা করতে পারব, কিন্তু ততক্ষণ পর্যন্ত আমি চাই তোমরা জানো, তোমাদের সবার জন্য আমি কতটা কৃতজ্ঞ। ধন্যবাদ, সবসময় আমার পাশে থাকার জন্য, যদিও দূরত্ব কখনো কখনো অনেক বেশি।',
    },
  },
]

export const BOOK_NAMES = [
  'Suomen Mestari 1',
  'Suomen Mestari 2',
  'Suomen Mestari 3',
  'Oma Suomi 1',
  'Oma Suomi 2',
  'Ykäänkö vai ykiinkö – Highway to hill',
  'YKIä kohti',
] as const

export function chaptersForBook(book: string): BookPracticeChapter[] {
  return BOOK_PRACTICE.filter((c) => c.book === book)
}
