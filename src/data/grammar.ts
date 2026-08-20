import type { GrammarTopic } from '../types'

// A self-contained Finnish grammar reference, A1 -> B2, covering every grammar
// point used across the 32-week curriculum plus a few foundational topics
// (astevaihtelu, monikko, ulkopaikallissijat) that don't get their own
// curriculum week but everything else depends on. Original explanations —
// not copied from any textbook.
export const GRAMMAR_TOPICS: GrammarTopic[] = [
  // ---------- A1 ----------
  {
    id: 'persoonapronominit-olla',
    title: 'Persoonapronominit ja olla-verbi',
    level: 'A1',
    category: 'Verbit',
    summary: 'The personal pronouns and the verb "olla" (to be) — the first thing every learner needs.',
    explanation: [
      'Finnish personal pronouns are minä (I), sinä (you), hän (he/she), me (we), te (you pl.), he (they). In casual speech minä/sinä often shorten to mä/sä, but written and formal Finnish uses the full forms.',
      '"Olla" (to be) is irregular and worth memorizing on its own: olen, olet, on, olemme, olette, ovat. Because the verb ending already shows who is doing the action, the pronoun is often dropped in casual speech — "Olen opiskelija" and "Mä oon opiskelija" both mean "I am a student."',
    ],
    examples: [
      { fi: 'Minä olen Anna.', en: 'I am Anna.' },
      { fi: 'Sinä olet opettaja.', en: 'You are a teacher.' },
      { fi: 'Hän on Suomesta.', en: 'He/she is from Finland.' },
      { fi: 'Me olemme opiskelijoita.', en: 'We are students.' },
      { fi: 'He ovat kotona.', en: 'They are at home.' },
    ],
    tips: ['Finnish has no grammatical gender — "hän" means both "he" and "she".'],
  },
  {
    id: 'sijamuodot-perusteet',
    title: 'Nominatiivi ja partitiivi (perusteet)',
    level: 'A1',
    category: 'Sijamuodot',
    summary: 'The two most common cases: the "dictionary form" (nominative) and the partitive, used for amounts and negation.',
    explanation: [
      'The nominative is the basic dictionary form of a word (kissa, talo, kirja) and is used for subjects and for "a/the" objects in general statements.',
      'The partitive (usually -a/-ä, or -ta/-tä, or -tta/-ttä depending on the word) is used for unspecified amounts ("some"), after numbers above one, after negation, and with many verbs like "pitää" (to like) or "rakastaa" (to love). It is one of the most-used cases in everyday Finnish.',
    ],
    examples: [
      { fi: 'Minulla on kissa.', en: 'I have a cat.', note: 'nominative — one whole cat' },
      { fi: 'Minulla ei ole kissaa.', en: "I don't have a cat.", note: 'partitive after negation' },
      { fi: 'Ostan leipää.', en: "I'm buying (some) bread.", note: 'partitive — unspecified amount' },
      { fi: 'Minulla on kaksi kissaa.', en: 'I have two cats.', note: 'partitive after a number' },
      { fi: 'Pidän kahvista.', en: 'I like coffee.', note: 'the verb pitää takes elative, but rakastan kahvia takes partitive' },
    ],
  },
  {
    id: 'kysymyslauseet',
    title: 'Kysymyslauseet',
    level: 'A1',
    category: 'Lauserakenne',
    summary: 'How to ask questions: question words, and the -ko/-kö question ending.',
    explanation: [
      'Question words go at the start of the sentence: kuka (who), mikä/mitä (what), missä (where), milloin (when), miksi (why), miten/kuinka (how), kuka/ketkä (who, plural).',
      'For yes/no questions with no question word, attach -ko or -kö (vowel harmony: -ko with a/o/u, -kö with ä/ö/y/e/i) to the first word, usually the verb, and move that word to the front.',
    ],
    examples: [
      { fi: 'Mistä sinä olet kotoisin?', en: 'Where are you from?' },
      { fi: 'Milloin kurssi alkaa?', en: 'When does the course start?' },
      { fi: 'Puhutko sinä suomea?', en: 'Do you speak Finnish?', note: 'puhut + ko' },
      { fi: 'Onko tämä oikein?', en: 'Is this correct?', note: 'on + ko' },
      { fi: 'Asutteko te Helsingissä?', en: 'Do you (pl.) live in Helsinki?' },
    ],
  },
  {
    id: 'omistusliitteet',
    title: 'Omistusliitteet',
    level: 'A1',
    category: 'Sijamuodot',
    summary: 'Possessive suffixes attached to the end of a noun instead of (or alongside) a possessive pronoun.',
    explanation: [
      'Finnish marks "my/your/his..." with a suffix on the noun itself: -ni (my), -si (your), -nsa/-nsä (his/her/their own), -mme (our), -nne (your, pl.), -nsa/-nsä (their). In speech, people often add the possessive pronoun (minun, sinun...) too for clarity, especially with -nsa forms which can be ambiguous.',
      'The most common ones to know cold are -ni and -si, since "my" and "your" come up constantly when introducing yourself and your family.',
    ],
    examples: [
      { fi: 'Nimeni on Laila.', en: 'My name is Laila.', note: 'nimi + ni' },
      { fi: 'Missä sinun perheesi asuu?', en: 'Where does your family live?', note: 'perhe + si' },
      { fi: 'Hän soitti äidilleen.', en: 'He/she called his/her mother.', note: 'äiti + lle + en' },
      { fi: 'Meidän kotimme on lähellä.', en: 'Our home is nearby.', note: 'koti + mme' },
      { fi: 'He rakastavat työtään.', en: 'They love their (own) work.', note: 'työ + tä + än, reflexive-like -nsa/-än' },
    ],
  },
  {
    id: 'sisapaikallissijat',
    title: 'Sisäpaikallissijat: -ssa/-stä/-Vn',
    level: 'A1',
    category: 'Sijamuodot',
    summary: 'The three "inside" location cases: inessive (in), elative (out of), illative (into).',
    explanation: [
      'These three cases answer "where at / where from / where to" when something is inside a place: inessive -ssa/-ssä ("in"), elative -sta/-stä ("out of/from"), illative — the trickiest one, usually a doubled vowel + n (talo → taloon), but -Vn, -hVn or -seen depending on the word.',
      'Which set of location cases a word takes (these "inside" ones, or the "outside" ones like -lla/-lta/-lle) is mostly a matter of convention per word/place, though it often follows logic — "talossa" (in the house) but "pöydällä" (on the table).',
    ],
    examples: [
      { fi: 'Asun Helsingissä.', en: 'I live in Helsinki.', note: 'inessive' },
      { fi: 'Tulen Helsingistä.', en: "I'm coming from Helsinki.", note: 'elative' },
      { fi: 'Menen Helsinkiin.', en: "I'm going to Helsinki.", note: 'illative' },
      { fi: 'Kirja on laukussa.', en: 'The book is in the bag.' },
      { fi: 'Otin kirjan laukusta ja panin sen pöydälle.', en: 'I took the book out of the bag and put it on the table.', note: 'mixes elative (laukusta) with the "outside" allative (pöydälle)' },
    ],
  },
  {
    id: 'preesens',
    title: 'Preesens ja verbityypit',
    level: 'A1',
    category: 'Verbit',
    summary: 'The present tense, and the 6 verb types that determine how a verb conjugates.',
    explanation: [
      'Finnish verbs fall into six conjugation "types" based on their dictionary (infinitive) ending: Type 1 (puhua → puhun), Type 2 (syödä → syön), Type 3 (tulla → tulen), Type 4 (haluta → haluan), Type 5 (tarvita → tarvitsen), Type 6 (vanheta → vanhenen). Type 1 covers the vast majority of verbs you meet early on.',
      'To conjugate in the present tense, drop the infinitive ending and add the personal ending: -n (minä), -t (sinä), -Ø/vowel change (hän), -mme (me), -tte (te), -vat/-vät (he). Recognizing the type quickly becomes automatic with practice — it just takes seeing enough examples.',
    ],
    examples: [
      { fi: 'Minä puhun suomea.', en: 'I speak Finnish.', note: 'type 1: puhua' },
      { fi: 'Sinä syöt aamiaista.', en: 'You eat breakfast.', note: 'type 2: syödä' },
      { fi: 'Hän tulee kotiin.', en: "He/she is coming home.", note: 'type 3: tulla' },
      { fi: 'Me haluamme oppia.', en: 'We want to learn.', note: 'type 4: haluta' },
      { fi: 'He tarvitsevat apua.', en: 'They need help.', note: 'type 5: tarvita' },
    ],
  },
  {
    id: 'kieltomuoto',
    title: 'Kieltomuoto',
    level: 'A1',
    category: 'Verbit',
    summary: 'Negation: "en, et, ei..." plus the connegative form of the verb.',
    explanation: [
      'Finnish negates a verb with a separate negation word that conjugates by person (en, et, ei, emme, ette, eivät), followed by the verb in a special unchanging "connegative" form — which usually looks like the hän-form of the present tense minus the final vowel/consonant, or the imperfect stem for past negation.',
      'Object case also often changes under negation: a partial or total object in the accusative becomes partitive when the sentence is negative.',
    ],
    examples: [
      { fi: 'En puhu venäjää.', en: "I don't speak Russian." },
      { fi: 'Hän ei asu täällä.', en: "He/she doesn't live here." },
      { fi: 'Emme ymmärrä.', en: "We don't understand." },
      { fi: 'He eivät tulleet eilen.', en: "They didn't come yesterday.", note: 'past negation uses the past connegative (tulleet)' },
      { fi: 'En osta autoa.', en: "I'm not buying a/the car.", note: 'object shifts to partitive (autoa) under negation' },
    ],
  },
  {
    id: 'kellonajat',
    title: 'Kellonajat ja ajanilmaukset',
    level: 'A1',
    category: 'Sanasto ja rakenteet',
    summary: 'Telling the time and common time expressions.',
    explanation: [
      'The formal way to say a time uses ordinal numbers: "Kello on kolme" (it\'s three o\'clock), "Kello on puoli neljä" (half past three — literally "half four", pointing forward to the next hour, the reverse of English logic).',
      'Common time-of-day expressions take the adessive case: aamulla (in the morning), päivällä (during the day), illalla (in the evening), yöllä (at night) — but viikonloppuna (on the weekend) uses the essive.',
    ],
    examples: [
      { fi: 'Paljonko kello on?', en: 'What time is it?' },
      { fi: 'Kello on kymmenen yli kaksi.', en: "It's ten past two." },
      { fi: 'Kello on varttia vaille viisi.', en: "It's a quarter to five." },
      { fi: 'Herään aina kello seitsemän aamulla.', en: 'I always wake up at seven in the morning.' },
      { fi: 'Nähdään illalla!', en: 'See you in the evening!' },
    ],
  },

  // ---------- A2 ----------
  {
    id: 'ulkopaikallissijat',
    title: 'Ulkopaikallissijat: -lla/-lta/-lle',
    level: 'A2',
    category: 'Sijamuodot',
    summary: 'The three "outside/on" location cases: adessive (on/at, or "with"), ablative (off of/from), allative (onto/to).',
    explanation: [
      'These mirror the sisäpaikallissijat but for surfaces, open areas, people, and events: adessive -lla/-llä ("on/at", also used for "having" and for means of transport), ablative -lta/-ltä ("off of/from"), allative -lle ("onto/to").',
      'The adessive is also how Finnish expresses possession, since there is no verb "to have": "Minulla on auto" literally means "on me there is a car."',
    ],
    examples: [
      { fi: 'Kirja on pöydällä.', en: 'The book is on the table.', note: 'adessive' },
      { fi: 'Otin kirjan pöydältä.', en: 'I took the book off the table.', note: 'ablative' },
      { fi: 'Panin kirjan pöydälle.', en: 'I put the book onto the table.', note: 'allative' },
      { fi: 'Minulla on kaksi lasta.', en: 'I have two children.', note: 'possession via adessive' },
      { fi: 'Matkustan bussilla töihin.', en: 'I travel to work by bus.', note: 'adessive for transport' },
    ],
  },
  {
    id: 'imperfekti',
    title: 'Imperfekti',
    level: 'A2',
    category: 'Verbit',
    summary: 'The simple past tense, for completed actions with a clear time in the past.',
    explanation: [
      'The imperfect is formed by inserting -i- (sometimes changing the stem vowel) between the verb stem and the personal ending: puhu-i-n (I spoke), sö-i-n (I ate), ol-i-n (I was). Many common verbs have small irregularities worth learning by exposure rather than rule.',
      'Use the imperfect for a specific, completed past event ("Eilen menin kauppaan" — Yesterday I went to the shop), as opposed to the perfect tense (which this reference doesn\'t cover separately) for past actions relevant to now.',
    ],
    examples: [
      { fi: 'Eilen kävin kaupassa.', en: 'Yesterday I went to the shop.' },
      { fi: 'Hän asui Turussa kaksi vuotta.', en: 'He/she lived in Turku for two years.' },
      { fi: 'Söimme ravintolassa viime viikolla.', en: 'We ate at a restaurant last week.' },
      { fi: 'Opiskelin suomea Suomessa.', en: 'I studied Finnish in Finland.' },
      { fi: 'He eivät tienneet vastausta.', en: "They didn't know the answer.", note: 'negative imperfect uses the past connegative' },
    ],
  },
  {
    id: 'astevaihtelu',
    title: 'Astevaihtelu',
    level: 'A2',
    category: 'Äänne-ja muoto-oppi',
    summary: 'Consonant gradation: certain consonants (k, p, t and their combinations) alternate between a "strong" and "weak" grade depending on the syllable structure.',
    explanation: [
      'Many Finnish words alternate their consonants when a case ending or verb ending is added — most famously kk→k, pp→p, tt→t, but also k→(disappears), p→v, t→d, and several consonant-cluster patterns. This is not optional or stylistic; it is a required part of correct inflection.',
      'The pattern is largely predictable from syllable structure (a closed syllable usually triggers the weak grade), but the fastest way to internalize it is repetition with common words rather than trying to memorize the rule table first.',
    ],
    examples: [
      { fi: 'kauppa → kaupassa', en: 'shop → in the shop', note: 'pp → p' },
      { fi: 'matka → matkalla', en: 'trip → on a trip', note: 'k disappears after t+k cluster context' },
      { fi: 'ottaa → otan', en: 'to take → I take', note: 'tt → t' },
      { fi: 'lukea → luen', en: 'to read → I read' },
      { fi: 'ranta → rannalla', en: 'beach → at the beach', note: 'nt → nn' },
    ],
    tips: ['If a word "sounds off" when you inflect it, try softening the middle consonant first — it is very often the fix.'],
  },
  {
    id: 'komparointi',
    title: 'Komparatiivi ja superlatiivi',
    level: 'A2',
    category: 'Adjektiivit',
    summary: 'Comparing adjectives: "bigger" (comparative) and "biggest" (superlative).',
    explanation: [
      'The comparative is formed by adding -mpi to the adjective stem (isompi — bigger), and the superlative with -in (isoin — biggest). Both then take normal case endings like any adjective.',
      '"Than" is expressed either with the partitive case on the compared-to noun ("isompi kuin talo" or simply "taloa isompi") or with the word "kuin".',
    ],
    examples: [
      { fi: 'Tämä auto on nopeampi kuin tuo.', en: 'This car is faster than that one.' },
      { fi: 'Helsinki on Suomen suurin kaupunki.', en: "Helsinki is Finland's biggest city." },
      { fi: 'Hän on minua vanhempi.', en: 'He/she is older than me.', note: 'partitive-style comparison without kuin' },
      { fi: 'Tämä on paras ratkaisu.', en: 'This is the best solution.', note: 'hyvä → parempi → paras is irregular' },
      { fi: 'Talvi on kylmempi kuin syksy.', en: 'Winter is colder than autumn.' },
    ],
  },
  {
    id: 'modaaliverbit',
    title: 'Modaaliverbit',
    level: 'A2',
    category: 'Verbit',
    summary: 'The modal verbs of ability, permission/possibility, want, and necessity.',
    explanation: [
      'osata = to know how to (a learned skill), voida = can/may (possibility or permission), haluta = to want. All three are followed by the basic (A-)infinitive.',
      'Necessity works differently: täytyy and pitää ("must/have to") are impersonal and take the person in the genitive case, not as the subject: "Minun täytyy lähteä" (literally "of-me it-is-necessary to-leave").',
    ],
    examples: [
      { fi: 'Osaan uida.', en: 'I know how to swim.' },
      { fi: 'Voitko auttaa minua?', en: 'Can you help me?' },
      { fi: 'Haluan oppia suomea hyvin.', en: 'I want to learn Finnish well.' },
      { fi: 'Minun täytyy mennä töihin.', en: 'I have to go to work.', note: 'minun (genitive), not minä' },
      { fi: 'Sinun ei tarvitse huolehtia.', en: "You don't need to worry.", note: 'negative necessity: ei tarvitse' },
    ],
  },
  {
    id: 'objektin-sijamuodot',
    title: 'Objektin sijamuodot',
    level: 'A2',
    category: 'Sijamuodot',
    summary: 'How Finnish marks a whole/complete object (accusative/genitive-like -n, or nominative in plural/imperative) versus a partial or ongoing one (partitive).',
    explanation: [
      'If the action is completed and the whole object is affected, the object usually takes the "total object" form — for singular nouns this looks like the genitive (-n): "Luin kirjan" (I read the [whole] book, finished it).',
      'If the action is ongoing, repeated, partial, or the object is an uncountable/unspecified amount, the object takes the partitive: "Luin kirjaa" (I was reading the book / reading some of it). Negation always forces partitive, regardless of completeness.',
    ],
    examples: [
      { fi: 'Ostin auton.', en: 'I bought a/the car.', note: 'total object — the purchase is complete' },
      { fi: 'Ostan autoa.', en: "I'm in the process of buying a car.", note: 'rare, but shows partitive = ongoing' },
      { fi: 'Luen kirjaa.', en: "I'm reading a/the book.", note: 'ongoing, not finished' },
      { fi: 'Luin kirjan loppuun.', en: 'I read the book to the end.', note: 'completed' },
      { fi: 'En lukenut kirjaa.', en: "I didn't read the book.", note: 'negation forces partitive' },
    ],
  },
  {
    id: 'monikko',
    title: 'Monikko',
    level: 'A2',
    category: 'Sijamuodot',
    summary: 'Forming the plural: nominative plural (-t) and partitive plural (-a/-ä/-ia/-iä, with gradation).',
    explanation: [
      'The nominative plural adds -t to the singular stem: kissa → kissat (cats), talo → talot (houses). It is used for plural subjects and definite plural objects.',
      'The partitive plural is more irregular — it usually inserts -i- before the partitive ending, and often triggers vowel and consonant changes: kissoja, taloja, kirjoja. Case endings in the plural are added after this same -i- marker (e.g. taloissa — in the houses).',
    ],
    examples: [
      { fi: 'Kissat nukkuvat.', en: 'The cats are sleeping.', note: 'nominative plural' },
      { fi: 'Minulla on kolme kissaa... ei, monta kissaa!', en: 'I have three cats... no, many cats!', note: 'monta always takes singular partitive' },
      { fi: 'Ostan omenoita.', en: "I'm buying (some) apples.", note: 'partitive plural' },
      { fi: 'Lapset leikkivät pihalla.', en: 'The children are playing in the yard.' },
      { fi: 'Taloissa asuu paljon ihmisiä.', en: 'Many people live in the houses.', note: 'plural case (inessive) + partitive plural object' },
    ],
  },

  // ---------- B1 ----------
  {
    id: 'konditionaali',
    title: 'Konditionaali',
    level: 'B1',
    category: 'Verbit',
    summary: 'The conditional mood: "would" — for hypotheticals, polite requests, and wishes.',
    explanation: [
      'Formed by inserting -isi- into the verb stem: puhua → puhuisin (I would speak), olla → olisin (I would be). It combines with normal personal endings.',
      'Very common in polite requests ("Voisitko auttaa?" — Could you help?) and in if-then hypotheticals, often paired with "jos" (if): "Jos minulla olisi aikaa, matkustaisin enemmän" (If I had time, I would travel more).',
    ],
    examples: [
      { fi: 'Haluaisin kupin kahvia.', en: 'I would like a cup of coffee.' },
      { fi: 'Voisitko sulkea ikkunan?', en: 'Could you close the window?' },
      { fi: 'Jos voittaisin lotossa, ostaisin talon.', en: 'If I won the lottery, I would buy a house.' },
      { fi: 'Hän sanoi, että tulisi myöhemmin.', en: 'He/she said he/she would come later.' },
      { fi: 'Olisi kiva nähdä sinut pian.', en: 'It would be nice to see you soon.' },
    ],
  },
  {
    id: 'passiivi-preesens',
    title: 'Passiivi, preesens',
    level: 'B1',
    category: 'Verbit',
    summary: 'The present passive — "one does / it is done" — Finnish\'s way of describing an action without naming who does it.',
    explanation: [
      'The passive present is formed with a special ending that varies by verb type but is consistent within each type (e.g. type 1: puhutaan, type 3: tullaan). It has no specific grammatical subject — it corresponds to English "it is done" or the colloquial "we ..." in spoken Finnish.',
      'In everyday spoken Finnish, the passive is very often used instead of the "me" (we) form: "Me mennään" (We\'re going) uses passive morphology even though it means "we", not a true impersonal passive — an important quirk to recognize when listening.',
    ],
    examples: [
      { fi: 'Suomessa puhutaan suomea ja ruotsia.', en: 'In Finland, Finnish and Swedish are spoken.' },
      { fi: 'Täällä ei tupakoida.', en: "Smoking isn't allowed here.", note: 'literally "here one does not smoke"' },
      { fi: 'Mennäänkö elokuviin?', en: 'Shall we go to the movies?', note: 'colloquial "we" use of the passive' },
      { fi: 'Ovi suljetaan kello kahdeksan.', en: 'The door is closed at eight o\'clock.' },
      { fi: 'Kokouksessa keskustellaan uudesta projektista.', en: 'The new project is discussed at the meeting.' },
    ],
  },
  {
    id: 'passiivi-imperfekti',
    title: 'Passiivin imperfekti',
    level: 'B1',
    category: 'Verbit',
    summary: 'The past passive — the same impersonal construction, but describing something that already happened.',
    explanation: [
      'Built the same way as the present passive but with the imperfect passive marker (-tiin/-ttiin depending on the verb): puhuttiin (it was spoken / people spoke), tehtiin (it was done). Recognize it by the -ttiin/-tiin ending on an otherwise passive-looking verb form.',
      'Used constantly in narration and news to describe events without naming an actor, e.g. describing what "was decided" or "was announced" at a meeting.',
    ],
    examples: [
      { fi: 'Kokouksessa päätettiin uudesta aikataulusta.', en: 'A new schedule was decided at the meeting.' },
      { fi: 'Talo rakennettiin vuonna 1950.', en: 'The house was built in 1950.' },
      { fi: 'Eilen puhuttiin paljon säästä.', en: 'Yesterday there was a lot of talk about the weather.' },
      { fi: 'Asiaa ei kerrottu meille.', en: "The matter wasn't told to us." },
      { fi: 'Ravintola avattiin viime kuussa.', en: 'The restaurant was opened last month.' },
    ],
  },
  {
    id: 'relatiivilauseet',
    title: 'Relatiivilauseet: joka / jotka',
    level: 'B1',
    category: 'Lauserakenne',
    summary: 'Relative clauses — "who/which/that" — connecting a description back to a noun.',
    explanation: [
      '"Joka" (singular) and "jotka" (plural) introduce a relative clause and refer back to a noun mentioned earlier. Crucially, joka/jotka itself takes whatever case its role inside the relative clause requires — not the case of the noun it refers to.',
      'Word order inside the relative clause is normal Finnish word order; the clause is usually set off by commas in writing.',
    ],
    examples: [
      { fi: 'Nainen, joka asuu naapurissa, on lääkäri.', en: 'The woman who lives next door is a doctor.', note: 'joka = subject of its clause, nominative' },
      { fi: 'Kirja, jonka luin, oli hyvä.', en: 'The book that I read was good.', note: 'jonka = object, genitive/accusative-like form' },
      { fi: 'Ihmiset, jotka opiskelevat suomea, ovat rohkeita.', en: 'People who study Finnish are brave.', note: 'plural: jotka' },
      { fi: 'Kaupunki, jossa asun, on pieni.', en: 'The city where I live is small.', note: 'jossa = inessive, "in which"' },
      { fi: 'Ystävä, jolle kerroin uutisen, oli yllättynyt.', en: 'The friend I told the news to was surprised.', note: 'jolle = allative, "to whom"' },
    ],
  },
  {
    id: 'ma-infinitiivi',
    title: 'MA-infinitiivi',
    level: 'B1',
    category: 'Verbit',
    summary: 'The third ("MA") infinitive, used for purpose, ongoing action, and after certain structures like "varten" and "jotta".',
    explanation: [
      'Formed by adding -ma/-mä to the verb stem, then a case ending depending on meaning: illative (-maan/-mään) for "in order to / going to do", inessive (-massa/-mässä) for "in the middle of doing", elative (-masta/-mästä) for "from doing", and others.',
      '"Jotta" (in order that) introduces a purpose clause with a normal finite verb (often in the conditional), while "varten" (for the purpose of) is a postposition that pairs with a genitive + the MA-infinitive in illative when describing why something exists.',
    ],
    examples: [
      { fi: 'Menen kauppaan ostamaan maitoa.', en: 'I\'m going to the shop to buy milk.', note: 'illative MA-infinitive: purpose' },
      { fi: 'Olen juuri syömässä.', en: 'I am right in the middle of eating.', note: 'inessive MA-infinitive: ongoing' },
      { fi: 'Hän lopetti tupakoimasta.', en: 'He/she stopped smoking.', note: 'elative MA-infinitive' },
      { fi: 'Opiskelen suomea, jotta löytäisin työtä.', en: 'I study Finnish so that I would find work.' },
      { fi: 'Tämä kurssi on suunniteltu aikuisia varten.', en: 'This course is designed for adults.' },
    ],
  },
  {
    id: 'imperatiivi',
    title: 'Imperatiivi',
    level: 'B1',
    category: 'Verbit',
    summary: 'The imperative — commands and instructions.',
    explanation: [
      'The singular "you" command is simply the verb stem with no ending (Puhu! — Speak!), or with -a/-ä for some verb types. The plural/formal "you" command adds -kaa/-kää to the stem.',
      'Negative commands use älä (singular) or älkää (plural) plus the connegative form of the verb — the same bare stem-like form used in other negations.',
    ],
    examples: [
      { fi: 'Puhu hitaammin, kiitos.', en: 'Speak more slowly, please.' },
      { fi: 'Avatkaa kirjanne sivulle kymmenen.', en: 'Open your books to page ten.', note: 'plural/formal' },
      { fi: 'Älä huoli.', en: "Don't worry." },
      { fi: 'Älkää unohtako kotitehtäviä.', en: "Don't forget the homework.", note: 'negative plural' },
      { fi: 'Muista ottaa avaimet mukaan!', en: 'Remember to bring the keys!' },
    ],
  },
  {
    id: 'tulevaisuus',
    title: 'Tulevan ajan ilmaiseminen',
    level: 'B1',
    category: 'Verbit',
    summary: 'Finnish has no separate future tense — the present tense does double duty, helped by time words or specific structures.',
    explanation: [
      'Usually the present tense plus a future time expression is enough: "Huomenna menen kouttiin" (Tomorrow I go/will go to school). Context and adverbs like huomenna, ensi viikolla, pian carry the future meaning.',
      'For a stronger sense of intention or a change of state that will happen, Finnish uses "aion" + basic infinitive ("I intend to...") or "tulen" + MA-infinitive illative ("tulen tekemään" — I will do), the latter feeling slightly more formal/written.',
    ],
    examples: [
      { fi: 'Ensi vuonna muutamme Ouluun.', en: "Next year we're moving to Oulu.", note: 'present tense + future time word' },
      { fi: 'Aion opiskella lisää suomea.', en: 'I intend to study more Finnish.' },
      { fi: 'Sää tulee olemaan aurinkoinen huomenna.', en: 'The weather will be sunny tomorrow.', note: 'tulla + MA-infinitive illative' },
      { fi: 'Kokous alkaa kello yhdeksän.', en: 'The meeting will start/starts at nine.' },
      { fi: 'Pian valmistun.', en: "I'll graduate soon." },
    ],
  },
  {
    id: 'sivulauseet',
    title: 'Sivulauseet: koska, että, kun, vaikka',
    level: 'B1',
    category: 'Lauserakenne',
    summary: 'The core subordinating conjunctions for building complex sentences.',
    explanation: [
      'koska (because) gives a reason; että (that) reports/links a statement, often after verbs like sanoa, ajatella, luulla; kun (when) marks a time or condition; vaikka (although/even though) marks a concession/contrast.',
      'In writing, a comma separates the main clause from the subordinate clause. Word order inside the subordinate clause stays regular Finnish word order (subject-verb-object), unlike some languages that invert it.',
    ],
    examples: [
      { fi: 'Olen väsynyt, koska nukuin huonosti.', en: "I'm tired because I slept badly." },
      { fi: 'Luulen, että hän on oikeassa.', en: 'I think that he/she is right.' },
      { fi: 'Soita minulle, kun olet perillä.', en: "Call me when you've arrived." },
      { fi: 'Vaikka satoi, menimme ulos.', en: 'Although it was raining, we went outside.' },
      { fi: 'Hän sanoi, että tulee myöhässä.', en: "He/she said that he/she is coming late." },
    ],
  },

  // ---------- B2 ----------
  {
    id: 'referointi',
    title: 'Epäsuora esitys (referointi)',
    level: 'B2',
    category: 'Lauserakenne',
    summary: 'Reported speech — relaying what someone else said, asked, or thought, without quoting them directly.',
    explanation: [
      'Statements are reported with "että": "Hän sanoi, että hän tulee huomenna" (He/she said that he/she is coming tomorrow) — note Finnish does NOT usually shift tense backward the way English does; the reported clause often keeps the tense the original speaker used.',
      'Reported yes/no questions use "-ko/-kö" embedded in the clause ("Hän kysyi, tulenko huomenna" — He/she asked whether I\'m coming tomorrow); reported wh-questions keep the original question word ("Hän kysyi, missä asun" — He/she asked where I live).',
    ],
    examples: [
      { fi: 'Hän kertoi, että projekti on myöhässä.', en: 'He/she told [us] that the project is late.' },
      { fi: 'Kysyin, oliko hän tyytyväinen.', en: 'I asked whether he/she was satisfied.' },
      { fi: 'Opettaja kysyi, ymmärsimmekö tehtävän.', en: 'The teacher asked whether we understood the task.' },
      { fi: 'He väittivät, että eivät tienneet asiasta mitään.', en: "They claimed that they didn't know anything about it." },
      { fi: 'Hän ihmetteli, miksi kukaan ei vastannut.', en: "He/she wondered why no one answered." },
    ],
  },
  {
    id: 'nut-partisiippi',
    title: 'NUT-partisiippi',
    level: 'B2',
    category: 'Partisiipit',
    summary: 'The past active participle (-nut/-nyt, plural -neet) — "having done", used both as an adjective and to build compound past tenses.',
    explanation: [
      'As an adjective, the NUT-participle describes a noun by what it (or its subject) has done: "kuollut puu" (a dead/died tree), "väsynyt opiskelija" (a tired/having-tired-out student).',
      'It is also the participle used in the perfect and pluperfect tenses (olen tehnyt — I have done; olin tehnyt — I had done), and appears in temporal/participial constructions replacing a "after ... " clause: "Syötyään hän lähti" (Having eaten, he/she left / After he/she had eaten, he/she left).',
    ],
    examples: [
      { fi: 'Olen jo lukenut sen kirjan.', en: 'I have already read that book.', note: 'perfect tense uses the NUT-participle' },
      { fi: 'Valmistuttuaan hän muutti Ouluun.', en: 'After graduating, he/she moved to Oulu.', note: 'temporal participle construction' },
      { fi: 'Rikkoutunut lasi oli lattialla.', en: 'The broken glass was on the floor.' },
      { fi: 'Tehty päätös oli lopullinen.', en: 'The decision made was final.' },
      { fi: 'Kokeneet opettajat auttavat uusia oppilaita.', en: 'Experienced teachers help new students.', note: 'plural: -neet' },
    ],
  },
  {
    id: 'va-partisiippi',
    title: 'VA-partisiippi',
    level: 'B2',
    category: 'Partisiipit',
    summary: 'The present active participle (-va/-vä) — "doing/that does", describing an ongoing or characteristic action.',
    explanation: [
      'Formed from the present tense stem plus -va/-vä: kasvava (growing), tuleva (coming/upcoming), kehittyvä (developing). It functions as an adjective describing something mid-action or characterized by that action.',
      'It is common in more formal/written registers — news, reports, official text — where English might use a relative clause ("that is growing") instead of a single adjective.',
    ],
    examples: [
      { fi: 'Kasvava talous kiinnostaa sijoittajia.', en: 'A/the growing economy interests investors.' },
      { fi: 'Tulevat viikot ovat kiireisiä.', en: 'The coming weeks are busy.' },
      { fi: 'Nukkuva lapsi ei herännyt.', en: "The sleeping child didn't wake up." },
      { fi: 'Yritys etsii nopeasti oppivia työntekijöitä.', en: 'The company is looking for quick-learning employees.' },
      { fi: 'Muuttuva ilmasto vaikuttaa meihin kaikkiin.', en: 'The changing climate affects all of us.' },
    ],
  },
  {
    id: 'passiivin-konditionaali',
    title: 'Passiivin konditionaali',
    level: 'B2',
    category: 'Verbit',
    summary: 'Combining the passive with the conditional — "it would be done" — common in formal proposals and hedged suggestions.',
    explanation: [
      'Take the passive stem and add the conditional -isi- marker before the passive personal ending: tehtäisiin (it would be done), voitaisiin (one/it could), päätettäisiin (it would be decided). This is a workhorse construction in formal writing, meeting minutes, and policy discussion.',
      'It is especially useful for hedged, non-committal suggestions where you want to propose something without asserting it as fact — very natural in B2-level argumentative or workplace Finnish.',
    ],
    examples: [
      { fi: 'Asia voitaisiin ratkaista toisin.', en: 'The matter could be resolved differently.' },
      { fi: 'Ehdotan, että kokous siirrettäisiin ensi viikolle.', en: 'I propose that the meeting be moved to next week.' },
      { fi: 'Jos budjetti kasvaisi, palkattaisiin lisää henkilökuntaa.', en: 'If the budget grew, more staff would be hired.' },
      { fi: 'Näin vältettäisiin turhat väärinkäsitykset.', en: 'This way unnecessary misunderstandings would be avoided.' },
      { fi: 'Voitaisiinko tästä keskustella tarkemmin?', en: 'Could this be discussed in more detail?' },
    ],
  },
  {
    id: 'nominalisointi',
    title: 'Nominalisointi: -minen',
    level: 'B2',
    category: 'Sanasto ja rakenteet',
    summary: 'Turning a verb into an abstract noun with the -minen suffix, extremely common in written/formal Finnish.',
    explanation: [
      'Almost any verb can become an abstract "-ing"-like noun with -minen: ymmärtää → ymmärtäminen (understanding), kehittyä → kehittyminen (developing/development), päättää → päättäminen (deciding). These nouns then decline like any other noun.',
      'Formal and written Finnish leans heavily on nominalization where English might keep a verb — "kielen oppiminen on tärkeää" (learning the language is important) reads far more naturally in Finnish than trying to keep "oppia" as a verb in that sentence position.',
    ],
    examples: [
      { fi: 'Suomen kielen oppiminen vie aikaa.', en: 'Learning Finnish takes time.' },
      { fi: 'Päätöksen tekeminen oli vaikeaa.', en: 'Making the decision was difficult.' },
      { fi: 'Ymmärtäminen paranee harjoittelun myötä.', en: 'Understanding improves with practice.' },
      { fi: 'Asian selittäminen ei ollut helppoa.', en: "Explaining the matter wasn't easy." },
      { fi: 'Yhteiskunnan kehittyminen vaatii aikaa.', en: "Society's development requires time." },
    ],
  },
  {
    id: 'lauseenvastikkeet',
    title: 'Lauseenvastikkeet',
    level: 'B2',
    category: 'Lauserakenne',
    summary: 'Non-finite clause substitutes — compact structures that replace a full subordinate clause, typical of fluent written Finnish.',
    explanation: [
      'Instead of "kun hän tuli kotiin" (when he/she came home), fluent Finnish often compresses this into a single participial phrase: "tultuaan kotiin" (having come home) — using the same temporal NUT-participle construction mentioned above, or the referatiivirakenne (reporting construction) to compress "että"-clauses.',
      'The reporting construction replaces "sanoi, että hän tulee" with "sanoi tulevansa" (said he/she is coming) — the VA-participle plus a possessive suffix agreeing with the subject. These compressed forms are a hallmark of advanced, natural-sounding written Finnish and worth recognizing even before you produce them fluently yourself.',
    ],
    examples: [
      { fi: 'Hän sanoi tulevansa myöhemmin.', en: 'He/she said he/she is coming later.', note: 'compressed from "että hän tulee"' },
      { fi: 'Uskon hänen puhuvan totta.', en: 'I believe he/she is telling the truth.', note: 'referatiivirakenne with genitive subject' },
      { fi: 'Kotiin päästyään hän soitti äidilleen.', en: 'Having gotten home, he/she called his/her mother.' },
      { fi: 'Näin hänen kävelevän kadulla.', en: 'I saw him/her walking on the street.' },
      { fi: 'Ilmoitimme kokouksen alkavan kello yhdeksän.', en: 'We announced that the meeting begins at nine.' },
    ],
    tips: ['These are advanced — aim to recognize them when reading/listening well before you try producing them under exam time pressure.'],
  },
  {
    id: 'argumentointi',
    title: 'Argumentoiva kieli: konnektorit',
    level: 'B2',
    category: 'Sanasto ja rakenteet',
    summary: 'The connector vocabulary that structures an argument, essay, or opinion piece — the glue of B2 writing.',
    explanation: [
      'Good B2 argumentative writing signals its structure explicitly with connectors: toisaalta...toisaalta (on one hand...on the other), kuitenkin (however), sen sijaan (instead), lisäksi (in addition), toisin sanoen (in other words), näin ollen (therefore/consequently), vaikka(kin) (even though).',
      'A strong opinion text usually states a clear position, uses "toisaalta" to acknowledge a counter-argument fairly, then returns to the writer\'s position with "kuitenkin" or "silti" (still) — this on-one-hand/on-the-other-hand/but-ultimately shape is exactly what YKI writing raters look for at this level.',
    ],
    examples: [
      { fi: 'Toisaalta etätyö säästää aikaa, toisaalta se voi eristää.', en: 'On one hand remote work saves time, on the other it can be isolating.' },
      { fi: 'Monet pitävät ratkaisua hyvänä. Itse olen kuitenkin eri mieltä.', en: 'Many consider the solution good. I, however, disagree.' },
      { fi: 'Lisäksi on syytä huomioida kustannukset.', en: 'In addition, the costs are worth considering.' },
      { fi: 'Näin ollen ehdotan toista ratkaisua.', en: 'Therefore, I propose a different solution.' },
      { fi: 'Vaikkakin idea on hyvä, sen toteuttaminen on vaikeaa.', en: 'Even though the idea is good, implementing it is difficult.' },
    ],
  },
]

export function grammarTopic(id: string): GrammarTopic | undefined {
  return GRAMMAR_TOPICS.find((t) => t.id === id)
}

export function grammarTopicsFor(ids: string[]): GrammarTopic[] {
  return ids.map((id) => grammarTopic(id)).filter((t): t is GrammarTopic => Boolean(t))
}
