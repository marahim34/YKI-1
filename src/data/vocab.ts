import type { CefrLevel, VocabItem } from '../types'

type Row = [fi: string, en: string, example: string, exampleEn: string, theme: string, level: CefrLevel]

// Original vocabulary bank, organized by the same themes used in the
// curriculum roadmap (see src/data/curriculum.ts). Not copied from any
// textbook — written to cover the same everyday/integration topics that
// Suomen Mestari and Oma Suomi progress through.
const ROWS: Row[] = [
  // greetings
  ['hei', 'hi', 'Hei, mitä kuuluu?', 'Hi, how are you?', 'greetings', 'A1'],
  ['moi', 'hi (casual)', 'Moi, kiva nähdä!', 'Hi, nice to see you!', 'greetings', 'A1'],
  ['näkemiin', 'goodbye', 'Näkemiin, hyvää päivänjatkoa!', 'Goodbye, have a nice day!', 'greetings', 'A1'],
  ['kiitos', 'thank you', 'Kiitos avusta.', 'Thanks for the help.', 'greetings', 'A1'],
  ['ole hyvä', "you're welcome / here you go", 'Ole hyvä, tässä on kahvisi.', "Here you go, here's your coffee.", 'greetings', 'A1'],

  // introductions
  ['nimi', 'name', 'Minun nimeni on Sara.', 'My name is Sara.', 'introductions', 'A1'],
  ['kotoisin', 'from (origin)', 'Olen kotoisin Bangladeshista.', 'I am from Bangladesh.', 'introductions', 'A1'],
  ['asua', 'to live (somewhere)', 'Asun Helsingissä.', 'I live in Helsinki.', 'introductions', 'A1'],
  ['puhua', 'to speak', 'Puhun vähän suomea.', 'I speak a little Finnish.', 'introductions', 'A1'],
  ['ikä', 'age', 'Mikä on sinun ikäsi?', 'What is your age?', 'introductions', 'A1'],

  // numbers
  ['yksi', 'one', 'Minulla on yksi sisko.', 'I have one sister.', 'numbers', 'A1'],
  ['kymmenen', 'ten', 'Kello on kymmenen.', "It's ten o'clock.", 'numbers', 'A1'],
  ['sata', 'hundred', 'Se maksaa sata euroa.', 'It costs a hundred euros.', 'numbers', 'A1'],
  ['ensimmäinen', 'first', 'Tämä on ensimmäinen viikko.', 'This is the first week.', 'numbers', 'A2'],

  // family
  ['perhe', 'family', 'Minun perheeni on iso.', 'My family is big.', 'family', 'A1'],
  ['äiti', 'mother', 'Äitini asuu Suomessa.', 'My mother lives in Finland.', 'family', 'A1'],
  ['isä', 'father', 'Isäni käy töissä.', 'My father goes to work.', 'family', 'A1'],
  ['sisarus', 'sibling', 'Minulla on kaksi sisarusta.', 'I have two siblings.', 'family', 'A1'],
  ['lapsi', 'child', 'Heillä on kolme lasta.', 'They have three children.', 'family', 'A1'],
  ['aviopuoliso', 'spouse', 'Aviopuolisoni opiskelee suomea.', 'My spouse is studying Finnish.', 'family', 'A2'],

  // relationships
  ['ystävä', 'friend', 'Hän on paras ystäväni.', 'He/she is my best friend.', 'relationships', 'A1'],
  ['naapuri', 'neighbor', 'Naapurini on ystävällinen.', 'My neighbor is friendly.', 'relationships', 'A1'],
  ['tuttava', 'acquaintance', 'Hän on vain tuttava, ei läheinen ystävä.', 'He is just an acquaintance, not a close friend.', 'relationships', 'A2'],
  ['luottaa', 'to trust', 'Luotan sinuun täysin.', 'I trust you completely.', 'relationships', 'B1'],

  // daily routine
  ['herätä', 'to wake up', 'Herään joka aamu kello kuusi.', 'I wake up at six every morning.', 'daily routine', 'A1'],
  ['syödä', 'to eat', 'Syön aamupalaa keittiössä.', 'I eat breakfast in the kitchen.', 'daily routine', 'A1'],
  ['nukkua', 'to sleep', 'Nukun yleensä kahdeksan tuntia.', 'I usually sleep eight hours.', 'daily routine', 'A1'],
  ['arki', 'weekday/everyday life', 'Minun arkeni on kiireistä.', 'My everyday life is busy.', 'daily routine', 'A2'],

  // time
  ['kello', 'clock / time', 'Paljonko kello on?', 'What time is it?', 'time', 'A1'],
  ['tunti', 'hour / lesson', 'Suomen tunti alkaa kohta.', 'The Finnish lesson starts soon.', 'time', 'A1'],
  ['viikko', 'week', 'Ensi viikolla on koe.', 'Next week there is a test.', 'time', 'A1'],
  ['myöhässä', 'late', 'Olen pahoillani, olen myöhässä.', "I'm sorry, I'm late.", 'time', 'A2'],

  // food
  ['leipä', 'bread', 'Ostan leipää kaupasta.', 'I buy bread from the store.', 'food', 'A1'],
  ['maito', 'milk', 'Juon lasillisen maitoa.', 'I drink a glass of milk.', 'food', 'A1'],
  ['kala', 'fish', 'Syömme kalaa perjantaisin.', 'We eat fish on Fridays.', 'food', 'A1'],
  ['ruokavalio', 'diet', 'Hänellä on erikoinen ruokavalio.', 'He/she has a special diet.', 'food', 'B1'],
  ['maistua', 'to taste (like)', 'Tämä keitto maistuu hyvältä.', 'This soup tastes good.', 'food', 'A2'],

  // shopping
  ['kauppa', 'shop/store', 'Menen kauppaan iltapäivällä.', 'I am going to the store in the afternoon.', 'shopping', 'A1'],
  ['hinta', 'price', 'Mikä on tämän hinta?', 'What is the price of this?', 'shopping', 'A1'],
  ['halpa', 'cheap', 'Tämä tuote on halpa.', 'This product is cheap.', 'shopping', 'A1'],
  ['alennus', 'discount', 'Kaupassa on tänään alennus.', 'There is a discount at the store today.', 'shopping', 'A2'],

  // home
  ['koti', 'home', 'Kotini on lähellä keskustaa.', 'My home is close to the center.', 'home', 'A1'],
  ['huone', 'room', 'Asunnossa on kolme huonetta.', 'The apartment has three rooms.', 'home', 'A1'],
  ['keittiö', 'kitchen', 'Keittiö on pieni mutta kaunis.', 'The kitchen is small but beautiful.', 'home', 'A1'],
  ['siivota', 'to clean', 'Siivoan asunnon lauantaisin.', 'I clean the apartment on Saturdays.', 'home', 'A2'],

  // housing
  ['vuokra', 'rent', 'Vuokra pitää maksaa kuun alussa.', 'The rent has to be paid at the start of the month.', 'housing', 'A2'],
  ['vuokrasopimus', 'rental agreement', 'Allekirjoitin vuokrasopimuksen eilen.', 'I signed the rental agreement yesterday.', 'housing', 'B1'],
  ['muuttaa', 'to move (house)', 'Muutamme uuteen asuntoon ensi kuussa.', "We're moving to a new apartment next month.", 'housing', 'A2'],
  ['naapurusto', 'neighborhood', 'Naapurustomme on rauhallinen.', 'Our neighborhood is quiet.', 'housing', 'B1'],

  // weather
  ['sää', 'weather', 'Millainen sää tänään on?', "What's the weather like today?", 'weather', 'A1'],
  ['sataa', 'to rain/snow', 'Ulkona sataa lunta.', "It's snowing outside.", 'weather', 'A1'],
  ['pilvinen', 'cloudy', 'Taivas on pilvinen.', 'The sky is cloudy.', 'weather', 'A2'],
  ['pakkanen', 'freezing cold', 'Ulkona on kova pakkanen.', "It's freezing cold outside.", 'weather', 'A2'],

  // seasons
  ['kevät', 'spring', 'Keväällä luonto herää eloon.', 'In spring, nature wakes up.', 'seasons', 'A1'],
  ['kesä', 'summer', 'Kesällä on valoisaa myöhään.', "In summer it's light late.", 'seasons', 'A1'],
  ['syksy', 'autumn', 'Syksyllä lehdet putoavat puista.', 'In autumn the leaves fall from the trees.', 'seasons', 'A1'],
  ['talvi', 'winter', 'Talvella on kylmä ja pimeä.', "In winter it's cold and dark.", 'seasons', 'A1'],

  // hobbies
  ['harrastus', 'hobby', 'Mikä on sinun harrastuksesi?', 'What is your hobby?', 'hobbies', 'A1'],
  ['lukea', 'to read', 'Luen kirjaa joka ilta.', 'I read a book every night.', 'hobbies', 'A1'],
  ['urheilla', 'to do sports', 'Urheilen kolme kertaa viikossa.', 'I do sports three times a week.', 'hobbies', 'A2'],
  ['soittaa (soitinta)', 'to play (an instrument)', 'Soitan pianoa vapaa-ajalla.', 'I play the piano in my free time.', 'hobbies', 'A2'],

  // free time
  ['vapaa-aika', 'free time', 'Mitä teet vapaa-ajalla?', 'What do you do in your free time?', 'free time', 'A1'],
  ['rentoutua', 'to relax', 'Rentoudun katsomalla elokuvia.', 'I relax by watching movies.', 'free time', 'A2'],
  ['tavata (ystäviä)', 'to meet (friends)', 'Tapaan ystäviäni viikonloppuna.', 'I am meeting my friends on the weekend.', 'free time', 'A2'],

  // health
  ['terveys', 'health', 'Terveys on tärkeä asia.', 'Health is an important thing.', 'health', 'A1'],
  ['sairas', 'sick', 'Olen tänään sairas.', 'I am sick today.', 'health', 'A1'],
  ['särky', 'ache/pain', 'Minulla on päänsärkyä.', 'I have a headache.', 'health', 'A2'],
  ['toipua', 'to recover', 'Toivun hitaasti flunssasta.', "I'm recovering slowly from the flu.", 'health', 'B1'],

  // body
  ['pää', 'head', 'Pääni on kipeä.', 'My head hurts.', 'body', 'A1'],
  ['käsi', 'hand/arm', 'Pesen käteni ennen ruokailua.', 'I wash my hands before eating.', 'body', 'A1'],
  ['selkä', 'back', 'Selkääni sattuu istumisesta.', 'My back hurts from sitting.', 'body', 'A2'],

  // travel
  ['matka', 'trip/journey', 'Matka kesti kolme tuntia.', 'The trip took three hours.', 'travel', 'A1'],
  ['lippu', 'ticket', 'Ostin junalipun etukäteen.', 'I bought a train ticket in advance.', 'travel', 'A1'],
  ['varata', 'to book/reserve', 'Varasin hotellihuoneen netistä.', 'I booked a hotel room online.', 'travel', 'A2'],
  ['matkustaa', 'to travel', 'Matkustamme Lappiin talvella.', "We're traveling to Lapland in winter.", 'travel', 'A1'],

  // transport
  ['juna', 'train', 'Juna lähtee kello kahdeksan.', 'The train leaves at eight.', 'transport', 'A1'],
  ['bussi', 'bus', 'Otan bussin töihin.', 'I take the bus to work.', 'transport', 'A1'],
  ['ruuhka', 'traffic jam', 'Aamulla on aina ruuhkaa.', "There's always a traffic jam in the morning.", 'transport', 'B1'],

  // work
  ['työ', 'work/job', 'Minulla on uusi työ.', 'I have a new job.', 'work', 'A1'],
  ['työpaikka', 'workplace', 'Työpaikkani on keskustassa.', 'My workplace is downtown.', 'work', 'A1'],
  ['kollega', 'colleague', 'Kollegani auttoi minua tänään.', 'My colleague helped me today.', 'work', 'A2'],
  ['ansaita', 'to earn', 'Ansaitsen kohtuullisen palkan.', 'I earn a reasonable salary.', 'work', 'B1'],
  ['esimies', 'supervisor/boss', 'Esimieheni on ymmärtäväinen.', 'My supervisor is understanding.', 'work', 'B1'],

  // job search
  ['työhakemus', 'job application', 'Lähetin työhakemuksen eilen.', 'I sent the job application yesterday.', 'job search', 'A2'],
  ['ansioluettelo', 'CV / résumé', 'Päivitin ansioluetteloni.', 'I updated my CV.', 'job search', 'A2'],
  ['työhaastattelu', 'job interview', 'Minulla on työhaastattelu huomenna.', 'I have a job interview tomorrow.', 'job search', 'A2'],
  ['pätevyys', 'qualification', 'Hänellä on hyvä pätevyys tehtävään.', 'He/she has good qualifications for the role.', 'job search', 'B1'],

  // workplace
  ['palkka', 'salary', 'Palkka maksetaan kuun lopussa.', 'The salary is paid at the end of the month.', 'workplace', 'A2'],
  ['aikataulu', 'schedule', 'Työaikatauluni vaihtelee viikoittain.', 'My work schedule varies weekly.', 'workplace', 'A2'],
  ['vastuu', 'responsibility', 'Minulla on paljon vastuuta uudessa tehtävässä.', 'I have a lot of responsibility in the new role.', 'workplace', 'B1'],
  ['yhteistyö', 'cooperation/teamwork', 'Hyvä yhteistyö on tärkeää tiimissä.', 'Good teamwork is important in the team.', 'workplace', 'B1'],

  // education
  ['koulutus', 'education/training', 'Hän hakee lisäkoulutusta.', "He/she is applying for further education.", 'education', 'A2'],
  ['tutkinto', 'degree/qualification', 'Suoritin tutkinnon viime vuonna.', 'I completed a degree last year.', 'education', 'B1'],
  ['opettaja', 'teacher', 'Opettajani kannustaa minua.', 'My teacher encourages me.', 'education', 'A1'],

  // studying
  ['opiskella', 'to study', 'Opiskelen suomea joka päivä.', 'I study Finnish every day.', 'studying', 'A1'],
  ['koe', 'test/exam', 'Kokeeseen pitää valmistautua hyvin.', 'You need to prepare well for the test.', 'studying', 'A1'],
  ['harjoitella', 'to practice', 'Harjoittelen kielioppia joka ilta.', 'I practice grammar every evening.', 'studying', 'A2'],
  ['edistyä', 'to make progress', 'Olen edistynyt paljon tänä vuonna.', "I've made a lot of progress this year.", 'studying', 'B1'],

  // society
  ['yhteiskunta', 'society', 'Suomalainen yhteiskunta arvostaa tasa-arvoa.', 'Finnish society values equality.', 'society', 'B1'],
  ['kansalainen', 'citizen', 'Jokaisella kansalaisella on oikeuksia ja velvollisuuksia.', 'Every citizen has rights and duties.', 'society', 'B1'],
  ['oikeus', 'right (entitlement)', 'Meillä kaikilla on oikeus koulutukseen.', 'We all have the right to education.', 'society', 'B1'],

  // institutions
  ['viranomainen', 'authority (institution)', 'Otin yhteyttä viranomaiseen.', 'I contacted the authority.', 'institutions', 'B1'],
  ['kunta', 'municipality', 'Kunta järjestää kotoutumiskoulutusta.', 'The municipality organizes integration training.', 'institutions', 'B1'],
  ['hakemus', 'application (form)', 'Täytin hakemuksen huolellisesti.', 'I filled in the application carefully.', 'institutions', 'A2'],

  // media
  ['uutinen', 'news item', 'Luin mielenkiintoisen uutisen.', 'I read an interesting news item.', 'media', 'A2'],
  ['lehti', 'newspaper/magazine', 'Tilaan paikallislehden.', 'I subscribe to the local newspaper.', 'media', 'A1'],
  ['media', 'media', 'Sosiaalinen media vaikuttaa nuoriin.', 'Social media affects young people.', 'media', 'B1'],

  // news
  ['tapahtuma', 'event', 'Kaupungissa on tänään tapahtuma.', "There's an event in the city today.", 'news', 'A2'],
  ['vaikuttaa', 'to affect/influence', 'Päätös vaikuttaa moneen ihmiseen.', 'The decision affects many people.', 'news', 'B1'],
  ['ajankohtainen', 'current/topical', 'Tämä on ajankohtainen aihe.', 'This is a topical subject.', 'news', 'B1'],

  // opinions
  ['mielipide', 'opinion', 'Mikä on sinun mielipiteesi?', 'What is your opinion?', 'opinions', 'A2'],
  ['mielestäni', 'in my opinion', 'Mielestäni tämä on hyvä idea.', 'In my opinion this is a good idea.', 'opinions', 'A2'],
  ['samaa mieltä', 'in agreement', 'Olen samaa mieltä kanssasi.', 'I agree with you.', 'opinions', 'B1'],
  ['eri mieltä', 'in disagreement', 'Olen tästä eri mieltä.', 'I disagree about this.', 'opinions', 'B1'],

  // discussion
  ['keskustelu', 'discussion', 'Meillä oli hyvä keskustelu.', 'We had a good discussion.', 'discussion', 'A2'],
  ['väittää', 'to argue/claim', 'Hän väittää, että se on totta.', 'He/she claims that it is true.', 'discussion', 'B1'],
  ['perustella', 'to justify/give reasons', 'Perustele mielipiteesi tarkasti.', 'Justify your opinion carefully.', 'discussion', 'B1'],

  // healthcare
  ['lääkäri', 'doctor', 'Varasin ajan lääkärille.', 'I booked an appointment with the doctor.', 'healthcare', 'A1'],
  ['terveyskeskus', 'health center', 'Terveyskeskus on avoinna arkisin.', 'The health center is open on weekdays.', 'healthcare', 'A2'],
  ['resepti', 'prescription', 'Sain reseptin lääkärikäynnillä.', 'I got a prescription during the doctor visit.', 'healthcare', 'B1'],
  ['vakuutus', 'insurance', 'Minulla on sairausvakuutus.', 'I have health insurance.', 'healthcare', 'B1'],

  // money
  ['raha', 'money', 'Minulla ei ole tarpeeksi rahaa.', "I don't have enough money.", 'money', 'A1'],
  ['säästää', 'to save (money)', 'Säästän joka kuukausi vähän.', 'I save a little each month.', 'money', 'A2'],
  ['lasku', 'invoice/bill', 'Maksoin sähkölaskun ajoissa.', 'I paid the electricity bill on time.', 'money', 'A2'],

  // finance
  ['pankki', 'bank', 'Avasin tilin pankissa.', 'I opened an account at the bank.', 'finance', 'A1'],
  ['budjetti', 'budget', 'Meillä on tiukka budjetti.', 'We have a tight budget.', 'finance', 'B1'],
  ['sijoittaa', 'to invest', 'Hän sijoittaa osakkeisiin.', 'He/she invests in stocks.', 'finance', 'B2'],

  // environment
  ['ympäristö', 'environment', 'Meidän pitää suojella ympäristöä.', 'We need to protect the environment.', 'environment', 'B1'],
  ['kierrättää', 'to recycle', 'Kierrätämme muovin ja paperin.', 'We recycle plastic and paper.', 'environment', 'A2'],
  ['ilmasto', 'climate', 'Ilmasto muuttuu nopeasti.', 'The climate is changing quickly.', 'environment', 'B1'],
  ['saaste', 'pollution', 'Kaupungin ilma kärsii saasteista.', "The city's air suffers from pollution.", 'environment', 'B2'],

  // nature
  ['luonto', 'nature', 'Suomalaiset rakastavat luontoa.', 'Finns love nature.', 'nature', 'A2'],
  ['metsä', 'forest', 'Kävelemme metsässä viikonloppuisin.', 'We walk in the forest on weekends.', 'nature', 'A1'],
  ['järvi', 'lake', 'Suomessa on tuhansia järviä.', 'Finland has thousands of lakes.', 'nature', 'A1'],

  // traditions
  ['perinne', 'tradition', 'Joulu on tärkeä perinne.', 'Christmas is an important tradition.', 'traditions', 'A2'],
  ['juhla', 'celebration/party', 'Meillä on juhla perjantaina.', "We're having a celebration on Friday.", 'traditions', 'A1'],
  ['vietttää (juhlaa)', 'to celebrate', 'Vietämme joulua yhdessä perheen kanssa.', 'We celebrate Christmas together with family.', 'traditions', 'A2'],

  // festivals
  ['juhannus', 'Midsummer', 'Juhannuksena mökille on kiva mennä.', "It's nice to go to the cottage for Midsummer.", 'festivals', 'A2'],
  ['itsenäisyyspäivä', 'Independence Day', 'Itsenäisyyspäivää vietetään joulukuun kuudentena.', 'Independence Day is celebrated on the sixth of December.', 'festivals', 'A2'],

  // future plans
  ['suunnitelma', 'plan', 'Minulla on suunnitelma ensi vuodelle.', 'I have a plan for next year.', 'future plans', 'A2'],
  ['aikoa', 'to intend', 'Aion opiskella lisää suomea.', 'I intend to study more Finnish.', 'future plans', 'A2'],
  ['tavoite', 'goal', 'Tavoitteeni on läpäistä YKI-koe.', 'My goal is to pass the YKI test.', 'future plans', 'B1'],

  // communication
  ['viestiä', 'to communicate', 'Viestimme sähköpostilla.', 'We communicate by email.', 'communication', 'A2'],
  ['selittää', 'to explain', 'Voitko selittää tämän uudestaan?', 'Can you explain this again?', 'communication', 'A2'],
  ['ymmärtää', 'to understand', 'En ihan ymmärtänyt kysymystä.', "I didn't quite understand the question.", 'communication', 'A1'],

  // education policy
  ['uudistus', 'reform', 'Koulutusuudistus herättää keskustelua.', "The education reform is sparking discussion.", 'education policy', 'B2'],
  ['resurssi', 'resource', 'Koululla ei ole tarpeeksi resursseja.', "The school doesn't have enough resources.", 'education policy', 'B2'],

  // immigration
  ['kotoutuminen', 'integration', 'Kotoutuminen vie aikaa.', 'Integration takes time.', 'immigration', 'B1'],
  ['maahanmuuttaja', 'immigrant', 'Moni maahanmuuttaja opiskelee suomea aktiivisesti.', 'Many immigrants actively study Finnish.', 'immigration', 'B1'],
  ['oleskelulupa', 'residence permit', 'Hain jatkoa oleskeluluvalleni.', 'I applied for an extension to my residence permit.', 'immigration', 'B1'],

  // technology
  ['sovellus', 'application/app', 'Lataan uuden sovelluksen puhelimeeni.', "I'm downloading a new app on my phone.", 'technology', 'A2'],
  ['digitalisaatio', 'digitalization', 'Digitalisaatio muuttaa työelämää.', 'Digitalization is changing working life.', 'technology', 'B2'],
  ['tietoturva', 'data security', 'Tietoturva on tärkeä aihe yrityksille.', 'Data security is an important topic for companies.', 'technology', 'B2'],

  // culture
  ['kulttuuri', 'culture', 'Suomen kulttuuri kiinnostaa minua.', 'Finnish culture interests me.', 'culture', 'A2'],
  ['taide', 'art', 'Käymme taidenäyttelyssä lauantaina.', "We're going to an art exhibition on Saturday.", 'culture', 'B1'],
  ['esitys', 'performance/show', 'Näimme hienon esityksen teatterissa.', 'We saw a great performance at the theatre.', 'culture', 'B1'],

  // arts
  ['kirjallisuus', 'literature', 'Suomalainen kirjallisuus on monipuolista.', 'Finnish literature is diverse.', 'arts', 'B2'],
  ['musiikki', 'music', 'Musiikki rentouttaa minua.', 'Music relaxes me.', 'arts', 'A1'],

  // debate
  ['väittely', 'debate', 'Luokassa oli kiivas väittely.', 'There was a heated debate in the classroom.', 'debate', 'B2'],
  ['näkökulma', 'point of view', 'Ymmärrän molemmat näkökulmat.', 'I understand both points of view.', 'debate', 'B2'],
  ['ristiriita', 'conflict/contradiction', 'Heidän välillään on ristiriita.', 'There is a conflict between them.', 'debate', 'B2'],

  // change
  ['muutos', 'change', 'Työelämässä tapahtuu jatkuvasti muutoksia.', 'Changes are constantly happening in working life.', 'change', 'B1'],
  ['sopeutua', 'to adapt', 'Ihmiset sopeutuvat uusiin tilanteisiin.', 'People adapt to new situations.', 'change', 'B2'],
  ['kehittyä', 'to develop/improve', 'Suomen kieleni kehittyy koko ajan.', 'My Finnish keeps developing all the time.', 'change', 'B1'],
]

export const VOCAB_BANK: VocabItem[] = ROWS.map(([fi, en, example, exampleEn, theme, level], i) => ({
  id: `v${i + 1}`,
  fi,
  en,
  example,
  exampleEn,
  theme,
  level,
  source: 'original',
}))

export function vocabByTheme(theme: string): VocabItem[] {
  return VOCAB_BANK.filter((v) => v.theme === theme)
}

export function vocabForWeek(vocabThemes: string[]): VocabItem[] {
  return VOCAB_BANK.filter((v) => vocabThemes.includes(v.theme))
}
