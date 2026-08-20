import type { CefrLevel, VocabItem } from '../types'

type Row = [fi: string, en: string, bn: string, example: string, exampleEn: string, exampleBn: string, theme: string, level: CefrLevel]

// Original vocabulary bank, organized by the same themes used in the
// curriculum roadmap (see src/data/curriculum.ts). Not copied from any
// textbook — written to cover the same everyday/integration topics that
// Suomen Mestari and Oma Suomi progress through. Bangla (bn) translations
// are provided alongside English for learners whose stronger second
// language is Bangla.
const ROWS: Row[] = [
  // greetings
  ['hei', 'hi', 'হাই / হ্যালো', 'Hei, mitä kuuluu?', 'Hi, how are you?', 'হ্যালো, কেমন আছেন?', 'greetings', 'A1'],
  ['moi', 'hi (casual)', 'হাই (অনানুষ্ঠানিক)', 'Moi, kiva nähdä!', 'Hi, nice to see you!', 'হাই, তোমাকে দেখে ভালো লাগলো!', 'greetings', 'A1'],
  ['näkemiin', 'goodbye', 'বিদায়', 'Näkemiin, hyvää päivänjatkoa!', 'Goodbye, have a nice day!', 'বিদায়, দিনটি ভালো কাটুক!', 'greetings', 'A1'],
  ['kiitos', 'thank you', 'ধন্যবাদ', 'Kiitos avusta.', 'Thanks for the help.', 'সাহায্যের জন্য ধন্যবাদ।', 'greetings', 'A1'],
  ['ole hyvä', "you're welcome / here you go", 'স্বাগতম / এই নিন', 'Ole hyvä, tässä on kahvisi.', "Here you go, here's your coffee.", 'এই নিন, আপনার কফি।', 'greetings', 'A1'],

  // introductions
  ['nimi', 'name', 'নাম', 'Minun nimeni on Sara.', 'My name is Sara.', 'আমার নাম সারা।', 'introductions', 'A1'],
  ['kotoisin', 'from (origin)', 'আদি নিবাস / থেকে আগত', 'Olen kotoisin Bangladeshista.', 'I am from Bangladesh.', 'আমি বাংলাদেশ থেকে এসেছি।', 'introductions', 'A1'],
  ['asua', 'to live (somewhere)', 'বসবাস করা', 'Asun Helsingissä.', 'I live in Helsinki.', 'আমি হেলসিঙ্কিতে থাকি।', 'introductions', 'A1'],
  ['puhua', 'to speak', 'কথা বলা', 'Puhun vähän suomea.', 'I speak a little Finnish.', 'আমি একটু ফিনিশ ভাষায় কথা বলি।', 'introductions', 'A1'],
  ['ikä', 'age', 'বয়স', 'Mikä on sinun ikäsi?', 'What is your age?', 'আপনার বয়স কত?', 'introductions', 'A1'],

  // numbers
  ['yksi', 'one', 'এক', 'Minulla on yksi sisko.', 'I have one sister.', 'আমার একটি বোন আছে।', 'numbers', 'A1'],
  ['kymmenen', 'ten', 'দশ', 'Kello on kymmenen.', "It's ten o'clock.", 'এখন দশটা বাজে।', 'numbers', 'A1'],
  ['sata', 'hundred', 'একশ', 'Se maksaa sata euroa.', 'It costs a hundred euros.', 'এটার দাম একশ ইউরো।', 'numbers', 'A1'],
  ['ensimmäinen', 'first', 'প্রথম', 'Tämä on ensimmäinen viikko.', 'This is the first week.', 'এটি প্রথম সপ্তাহ।', 'numbers', 'A2'],

  // family
  ['perhe', 'family', 'পরিবার', 'Minun perheeni on iso.', 'My family is big.', 'আমার পরিবার বড়।', 'family', 'A1'],
  ['äiti', 'mother', 'মা', 'Äitini asuu Suomessa.', 'My mother lives in Finland.', 'আমার মা ফিনল্যান্ডে থাকেন।', 'family', 'A1'],
  ['isä', 'father', 'বাবা', 'Isäni käy töissä.', 'My father goes to work.', 'আমার বাবা কাজে যান।', 'family', 'A1'],
  ['sisarus', 'sibling', 'ভাইবোন', 'Minulla on kaksi sisarusta.', 'I have two siblings.', 'আমার দুই ভাইবোন আছে।', 'family', 'A1'],
  ['lapsi', 'child', 'সন্তান / শিশু', 'Heillä on kolme lasta.', 'They have three children.', 'তাদের তিনটি সন্তান আছে।', 'family', 'A1'],
  ['aviopuoliso', 'spouse', 'স্বামী / স্ত্রী', 'Aviopuolisoni opiskelee suomea.', 'My spouse is studying Finnish.', 'আমার স্বামী/স্ত্রী ফিনিশ ভাষা শিখছেন।', 'family', 'A2'],

  // relationships
  ['ystävä', 'friend', 'বন্ধু', 'Hän on paras ystäväni.', 'He/she is my best friend.', 'সে আমার সবচেয়ে ভালো বন্ধু।', 'relationships', 'A1'],
  ['naapuri', 'neighbor', 'প্রতিবেশী', 'Naapurini on ystävällinen.', 'My neighbor is friendly.', 'আমার প্রতিবেশী বন্ধুত্বপূর্ণ।', 'relationships', 'A1'],
  ['tuttava', 'acquaintance', 'পরিচিত ব্যক্তি', 'Hän on vain tuttava, ei läheinen ystävä.', 'He is just an acquaintance, not a close friend.', 'সে শুধু পরিচিত, ঘনিষ্ঠ বন্ধু নয়।', 'relationships', 'A2'],
  ['luottaa', 'to trust', 'বিশ্বাস করা', 'Luotan sinuun täysin.', 'I trust you completely.', 'আমি তোমাকে সম্পূর্ণ বিশ্বাস করি।', 'relationships', 'B1'],

  // daily routine
  ['herätä', 'to wake up', 'ঘুম থেকে ওঠা', 'Herään joka aamu kello kuusi.', 'I wake up at six every morning.', 'আমি প্রতিদিন সকাল ছয়টায় ঘুম থেকে উঠি।', 'daily routine', 'A1'],
  ['syödä', 'to eat', 'খাওয়া', 'Syön aamupalaa keittiössä.', 'I eat breakfast in the kitchen.', 'আমি রান্নাঘরে সকালের নাস্তা খাই।', 'daily routine', 'A1'],
  ['nukkua', 'to sleep', 'ঘুমানো', 'Nukun yleensä kahdeksan tuntia.', 'I usually sleep eight hours.', 'আমি সাধারণত আট ঘণ্টা ঘুমাই।', 'daily routine', 'A1'],
  ['arki', 'weekday/everyday life', 'দৈনন্দিন জীবন', 'Minun arkeni on kiireistä.', 'My everyday life is busy.', 'আমার দৈনন্দিন জীবন ব্যস্ত।', 'daily routine', 'A2'],

  // time
  ['kello', 'clock / time', 'ঘড়ি / সময়', 'Paljonko kello on?', 'What time is it?', 'এখন কয়টা বাজে?', 'time', 'A1'],
  ['tunti', 'hour / lesson', 'ঘণ্টা / ক্লাস', 'Suomen tunti alkaa kohta.', 'The Finnish lesson starts soon.', 'ফিনিশ ক্লাস শীঘ্রই শুরু হবে।', 'time', 'A1'],
  ['viikko', 'week', 'সপ্তাহ', 'Ensi viikolla on koe.', 'Next week there is a test.', 'আগামী সপ্তাহে পরীক্ষা আছে।', 'time', 'A1'],
  ['myöhässä', 'late', 'দেরি', 'Olen pahoillani, olen myöhässä.', "I'm sorry, I'm late.", 'দুঃখিত, আমি দেরি করে ফেলেছি।', 'time', 'A2'],

  // food
  ['leipä', 'bread', 'রুটি', 'Ostan leipää kaupasta.', 'I buy bread from the store.', 'আমি দোকান থেকে রুটি কিনি।', 'food', 'A1'],
  ['maito', 'milk', 'দুধ', 'Juon lasillisen maitoa.', 'I drink a glass of milk.', 'আমি এক গ্লাস দুধ পান করি।', 'food', 'A1'],
  ['kala', 'fish', 'মাছ', 'Syömme kalaa perjantaisin.', 'We eat fish on Fridays.', 'আমরা শুক্রবারে মাছ খাই।', 'food', 'A1'],
  ['ruokavalio', 'diet', 'খাদ্যাভ্যাস / ডায়েট', 'Hänellä on erikoinen ruokavalio.', 'He/she has a special diet.', 'তার একটি বিশেষ খাদ্যাভ্যাস আছে।', 'food', 'B1'],
  ['maistua', 'to taste (like)', 'স্বাদ লাগা', 'Tämä keitto maistuu hyvältä.', 'This soup tastes good.', 'এই স্যুপের স্বাদ ভালো।', 'food', 'A2'],

  // shopping
  ['kauppa', 'shop/store', 'দোকান', 'Menen kauppaan iltapäivällä.', 'I am going to the store in the afternoon.', 'আমি বিকেলে দোকানে যাচ্ছি।', 'shopping', 'A1'],
  ['hinta', 'price', 'দাম', 'Mikä on tämän hinta?', 'What is the price of this?', 'এটার দাম কত?', 'shopping', 'A1'],
  ['halpa', 'cheap', 'সস্তা', 'Tämä tuote on halpa.', 'This product is cheap.', 'এই পণ্যটি সস্তা।', 'shopping', 'A1'],
  ['alennus', 'discount', 'ছাড়', 'Kaupassa on tänään alennus.', 'There is a discount at the store today.', 'আজ দোকানে ছাড় চলছে।', 'shopping', 'A2'],

  // home
  ['koti', 'home', 'বাড়ি / ঘর', 'Kotini on lähellä keskustaa.', 'My home is close to the center.', 'আমার বাড়ি শহরের কেন্দ্রের কাছে।', 'home', 'A1'],
  ['huone', 'room', 'ঘর / কক্ষ', 'Asunnossa on kolme huonetta.', 'The apartment has three rooms.', 'অ্যাপার্টমেন্টে তিনটি ঘর আছে।', 'home', 'A1'],
  ['keittiö', 'kitchen', 'রান্নাঘর', 'Keittiö on pieni mutta kaunis.', 'The kitchen is small but beautiful.', 'রান্নাঘরটি ছোট কিন্তু সুন্দর।', 'home', 'A1'],
  ['siivota', 'to clean', 'পরিষ্কার করা', 'Siivoan asunnon lauantaisin.', 'I clean the apartment on Saturdays.', 'আমি শনিবারে বাসা পরিষ্কার করি।', 'home', 'A2'],

  // housing
  ['vuokra', 'rent', 'ভাড়া', 'Vuokra pitää maksaa kuun alussa.', 'The rent has to be paid at the start of the month.', 'মাসের শুরুতে ভাড়া দিতে হয়।', 'housing', 'A2'],
  ['vuokrasopimus', 'rental agreement', 'ভাড়া চুক্তি', 'Allekirjoitin vuokrasopimuksen eilen.', 'I signed the rental agreement yesterday.', 'আমি গতকাল ভাড়া চুক্তিতে সই করেছি।', 'housing', 'B1'],
  ['muuttaa', 'to move (house)', 'বাসা পরিবর্তন করা', 'Muutamme uuteen asuntoon ensi kuussa.', "We're moving to a new apartment next month.", 'আমরা আগামী মাসে নতুন বাসায় যাচ্ছি।', 'housing', 'A2'],
  ['naapurusto', 'neighborhood', 'পাড়া / এলাকা', 'Naapurustomme on rauhallinen.', 'Our neighborhood is quiet.', 'আমাদের এলাকা শান্ত।', 'housing', 'B1'],

  // weather
  ['sää', 'weather', 'আবহাওয়া', 'Millainen sää tänään on?', "What's the weather like today?", 'আজ আবহাওয়া কেমন?', 'weather', 'A1'],
  ['sataa', 'to rain/snow', 'বৃষ্টি/বরফ পড়া', 'Ulkona sataa lunta.', "It's snowing outside.", 'বাইরে বরফ পড়ছে।', 'weather', 'A1'],
  ['pilvinen', 'cloudy', 'মেঘলা', 'Taivas on pilvinen.', 'The sky is cloudy.', 'আকাশ মেঘলা।', 'weather', 'A2'],
  ['pakkanen', 'freezing cold', 'প্রচণ্ড ঠান্ডা', 'Ulkona on kova pakkanen.', "It's freezing cold outside.", 'বাইরে প্রচণ্ড ঠান্ডা।', 'weather', 'A2'],

  // seasons
  ['kevät', 'spring', 'বসন্তকাল', 'Keväällä luonto herää eloon.', 'In spring, nature wakes up.', 'বসন্তে প্রকৃতি জেগে ওঠে।', 'seasons', 'A1'],
  ['kesä', 'summer', 'গ্রীষ্মকাল', 'Kesällä on valoisaa myöhään.', "In summer it's light late.", 'গ্রীষ্মে অনেক রাত পর্যন্ত আলো থাকে।', 'seasons', 'A1'],
  ['syksy', 'autumn', 'শরৎকাল', 'Syksyllä lehdet putoavat puista.', 'In autumn the leaves fall from the trees.', 'শরতে গাছ থেকে পাতা ঝরে।', 'seasons', 'A1'],
  ['talvi', 'winter', 'শীতকাল', 'Talvella on kylmä ja pimeä.', "In winter it's cold and dark.", 'শীতকালে ঠান্ডা ও অন্ধকার থাকে।', 'seasons', 'A1'],

  // hobbies
  ['harrastus', 'hobby', 'শখ', 'Mikä on sinun harrastuksesi?', 'What is your hobby?', 'তোমার শখ কী?', 'hobbies', 'A1'],
  ['lukea', 'to read', 'পড়া', 'Luen kirjaa joka ilta.', 'I read a book every night.', 'আমি প্রতি রাতে একটি বই পড়ি।', 'hobbies', 'A1'],
  ['urheilla', 'to do sports', 'খেলাধুলা করা', 'Urheilen kolme kertaa viikossa.', 'I do sports three times a week.', 'আমি সপ্তাহে তিনবার খেলাধুলা করি।', 'hobbies', 'A2'],
  ['soittaa (soitinta)', 'to play (an instrument)', 'বাজানো (বাদ্যযন্ত্র)', 'Soitan pianoa vapaa-ajalla.', 'I play the piano in my free time.', 'আমি অবসর সময়ে পিয়ানো বাজাই।', 'hobbies', 'A2'],

  // free time
  ['vapaa-aika', 'free time', 'অবসর সময়', 'Mitä teet vapaa-ajalla?', 'What do you do in your free time?', 'তুমি অবসর সময়ে কী করো?', 'free time', 'A1'],
  ['rentoutua', 'to relax', 'বিশ্রাম নেওয়া / রিল্যাক্স করা', 'Rentoudun katsomalla elokuvia.', 'I relax by watching movies.', 'আমি সিনেমা দেখে রিল্যাক্স করি।', 'free time', 'A2'],
  ['tavata (ystäviä)', 'to meet (friends)', 'বন্ধুদের সাথে দেখা করা', 'Tapaan ystäviäni viikonloppuna.', 'I am meeting my friends on the weekend.', 'আমি সপ্তাহান্তে বন্ধুদের সাথে দেখা করছি।', 'free time', 'A2'],

  // health
  ['terveys', 'health', 'স্বাস্থ্য', 'Terveys on tärkeä asia.', 'Health is an important thing.', 'স্বাস্থ্য একটি গুরুত্বপূর্ণ বিষয়।', 'health', 'A1'],
  ['sairas', 'sick', 'অসুস্থ', 'Olen tänään sairas.', 'I am sick today.', 'আজ আমি অসুস্থ।', 'health', 'A1'],
  ['särky', 'ache/pain', 'ব্যথা', 'Minulla on päänsärkyä.', 'I have a headache.', 'আমার মাথাব্যথা করছে।', 'health', 'A2'],
  ['toipua', 'to recover', 'সেরে ওঠা', 'Toivun hitaasti flunssasta.', "I'm recovering slowly from the flu.", 'আমি ধীরে ধীরে ফ্লু থেকে সেরে উঠছি।', 'health', 'B1'],

  // body
  ['pää', 'head', 'মাথা', 'Pääni on kipeä.', 'My head hurts.', 'আমার মাথা ব্যথা করছে।', 'body', 'A1'],
  ['käsi', 'hand/arm', 'হাত', 'Pesen käteni ennen ruokailua.', 'I wash my hands before eating.', 'খাওয়ার আগে আমি হাত ধুই।', 'body', 'A1'],
  ['selkä', 'back', 'পিঠ', 'Selkääni sattuu istumisesta.', 'My back hurts from sitting.', 'বসে থাকার কারণে আমার পিঠ ব্যথা করছে।', 'body', 'A2'],

  // travel
  ['matka', 'trip/journey', 'ভ্রমণ / যাত্রা', 'Matka kesti kolme tuntia.', 'The trip took three hours.', 'যাত্রাটি তিন ঘণ্টা লেগেছিল।', 'travel', 'A1'],
  ['lippu', 'ticket', 'টিকিট', 'Ostin junalipun etukäteen.', 'I bought a train ticket in advance.', 'আমি আগে থেকে ট্রেনের টিকিট কিনেছিলাম।', 'travel', 'A1'],
  ['varata', 'to book/reserve', 'বুকিং করা', 'Varasin hotellihuoneen netistä.', 'I booked a hotel room online.', 'আমি অনলাইনে হোটেল রুম বুক করেছি।', 'travel', 'A2'],
  ['matkustaa', 'to travel', 'ভ্রমণ করা', 'Matkustamme Lappiin talvella.', "We're traveling to Lapland in winter.", 'আমরা শীতকালে ল্যাপল্যান্ডে ভ্রমণ করছি।', 'travel', 'A1'],

  // transport
  ['juna', 'train', 'ট্রেন', 'Juna lähtee kello kahdeksan.', 'The train leaves at eight.', 'ট্রেনটি আটটায় ছাড়বে।', 'transport', 'A1'],
  ['bussi', 'bus', 'বাস', 'Otan bussin töihin.', 'I take the bus to work.', 'আমি কাজে যাওয়ার জন্য বাসে চড়ি।', 'transport', 'A1'],
  ['ruuhka', 'traffic jam', 'যানজট', 'Aamulla on aina ruuhkaa.', "There's always a traffic jam in the morning.", 'সকালে সবসময় যানজট থাকে।', 'transport', 'B1'],

  // work
  ['työ', 'work/job', 'কাজ / চাকরি', 'Minulla on uusi työ.', 'I have a new job.', 'আমার একটি নতুন চাকরি আছে।', 'work', 'A1'],
  ['työpaikka', 'workplace', 'কর্মস্থল', 'Työpaikkani on keskustassa.', 'My workplace is downtown.', 'আমার কর্মস্থল শহরের কেন্দ্রে।', 'work', 'A1'],
  ['kollega', 'colleague', 'সহকর্মী', 'Kollegani auttoi minua tänään.', 'My colleague helped me today.', 'আমার সহকর্মী আজ আমাকে সাহায্য করেছে।', 'work', 'A2'],
  ['ansaita', 'to earn', 'উপার্জন করা', 'Ansaitsen kohtuullisen palkan.', 'I earn a reasonable salary.', 'আমি একটি যুক্তিসঙ্গত বেতন উপার্জন করি।', 'work', 'B1'],
  ['esimies', 'supervisor/boss', 'ঊর্ধ্বতন কর্মকর্তা / বস', 'Esimieheni on ymmärtäväinen.', 'My supervisor is understanding.', 'আমার বস অনেক বুঝদার।', 'work', 'B1'],

  // job search
  ['työhakemus', 'job application', 'চাকরির আবেদন', 'Lähetin työhakemuksen eilen.', 'I sent the job application yesterday.', 'আমি গতকাল চাকরির আবেদন পাঠিয়েছি।', 'job search', 'A2'],
  ['ansioluettelo', 'CV / résumé', 'জীবনবৃত্তান্ত (সিভি)', 'Päivitin ansioluetteloni.', 'I updated my CV.', 'আমি আমার সিভি হালনাগাদ করেছি।', 'job search', 'A2'],
  ['työhaastattelu', 'job interview', 'চাকরির সাক্ষাৎকার', 'Minulla on työhaastattelu huomenna.', 'I have a job interview tomorrow.', 'আগামীকাল আমার চাকরির সাক্ষাৎকার আছে।', 'job search', 'A2'],
  ['pätevyys', 'qualification', 'যোগ্যতা', 'Hänellä on hyvä pätevyys tehtävään.', 'He/she has good qualifications for the role.', 'এই কাজের জন্য তার ভালো যোগ্যতা আছে।', 'job search', 'B1'],

  // workplace
  ['palkka', 'salary', 'বেতন', 'Palkka maksetaan kuun lopussa.', 'The salary is paid at the end of the month.', 'মাসের শেষে বেতন দেওয়া হয়।', 'workplace', 'A2'],
  ['aikataulu', 'schedule', 'সময়সূচি', 'Työaikatauluni vaihtelee viikoittain.', 'My work schedule varies weekly.', 'আমার কাজের সময়সূচি সাপ্তাহিকভাবে পরিবর্তিত হয়।', 'workplace', 'A2'],
  ['vastuu', 'responsibility', 'দায়িত্ব', 'Minulla on paljon vastuuta uudessa tehtävässä.', 'I have a lot of responsibility in the new role.', 'নতুন পদে আমার অনেক দায়িত্ব আছে।', 'workplace', 'B1'],
  ['yhteistyö', 'cooperation/teamwork', 'সহযোগিতা / দলগত কাজ', 'Hyvä yhteistyö on tärkeää tiimissä.', 'Good teamwork is important in the team.', 'দলে ভালো সহযোগিতা গুরুত্বপূর্ণ।', 'workplace', 'B1'],

  // education
  ['koulutus', 'education/training', 'শিক্ষা / প্রশিক্ষণ', 'Hän hakee lisäkoulutusta.', "He/she is applying for further education.", 'সে আরও প্রশিক্ষণের জন্য আবেদন করছে।', 'education', 'A2'],
  ['tutkinto', 'degree/qualification', 'ডিগ্রি', 'Suoritin tutkinnon viime vuonna.', 'I completed a degree last year.', 'আমি গত বছর একটি ডিগ্রি সম্পন্ন করেছি।', 'education', 'B1'],
  ['opettaja', 'teacher', 'শিক্ষক', 'Opettajani kannustaa minua.', 'My teacher encourages me.', 'আমার শিক্ষক আমাকে উৎসাহিত করেন।', 'education', 'A1'],

  // studying
  ['opiskella', 'to study', 'পড়াশোনা করা', 'Opiskelen suomea joka päivä.', 'I study Finnish every day.', 'আমি প্রতিদিন ফিনিশ ভাষা পড়ি।', 'studying', 'A1'],
  ['koe', 'test/exam', 'পরীক্ষা', 'Kokeeseen pitää valmistautua hyvin.', 'You need to prepare well for the test.', 'পরীক্ষার জন্য ভালোভাবে প্রস্তুতি নিতে হবে।', 'studying', 'A1'],
  ['harjoitella', 'to practice', 'অনুশীলন করা', 'Harjoittelen kielioppia joka ilta.', 'I practice grammar every evening.', 'আমি প্রতি সন্ধ্যায় ব্যাকরণ অনুশীলন করি।', 'studying', 'A2'],
  ['edistyä', 'to make progress', 'উন্নতি করা', 'Olen edistynyt paljon tänä vuonna.', "I've made a lot of progress this year.", 'আমি এই বছর অনেক উন্নতি করেছি।', 'studying', 'B1'],

  // society
  ['yhteiskunta', 'society', 'সমাজ', 'Suomalainen yhteiskunta arvostaa tasa-arvoa.', 'Finnish society values equality.', 'ফিনিশ সমাজ সমতাকে মূল্য দেয়।', 'society', 'B1'],
  ['kansalainen', 'citizen', 'নাগরিক', 'Jokaisella kansalaisella on oikeuksia ja velvollisuuksia.', 'Every citizen has rights and duties.', 'প্রতিটি নাগরিকের অধিকার ও দায়িত্ব আছে।', 'society', 'B1'],
  ['oikeus', 'right (entitlement)', 'অধিকার', 'Meillä kaikilla on oikeus koulutukseen.', 'We all have the right to education.', 'আমাদের সবার শিক্ষার অধিকার আছে।', 'society', 'B1'],

  // institutions
  ['viranomainen', 'authority (institution)', 'কর্তৃপক্ষ', 'Otin yhteyttä viranomaiseen.', 'I contacted the authority.', 'আমি কর্তৃপক্ষের সাথে যোগাযোগ করেছি।', 'institutions', 'B1'],
  ['kunta', 'municipality', 'পৌরসভা', 'Kunta järjestää kotoutumiskoulutusta.', 'The municipality organizes integration training.', 'পৌরসভা ইন্টিগ্রেশন প্রশিক্ষণ আয়োজন করে।', 'institutions', 'B1'],
  ['hakemus', 'application (form)', 'আবেদনপত্র', 'Täytin hakemuksen huolellisesti.', 'I filled in the application carefully.', 'আমি সাবধানে আবেদনপত্র পূরণ করেছি।', 'institutions', 'A2'],

  // media
  ['uutinen', 'news item', 'সংবাদ', 'Luin mielenkiintoisen uutisen.', 'I read an interesting news item.', 'আমি একটি আকর্ষণীয় সংবাদ পড়েছি।', 'media', 'A2'],
  ['lehti', 'newspaper/magazine', 'পত্রিকা', 'Tilaan paikallislehden.', 'I subscribe to the local newspaper.', 'আমি স্থানীয় পত্রিকা গ্রহণ করি।', 'media', 'A1'],
  ['media', 'media', 'মিডিয়া', 'Sosiaalinen media vaikuttaa nuoriin.', 'Social media affects young people.', 'সামাজিক মিডিয়া তরুণদের প্রভাবিত করে।', 'media', 'B1'],

  // news
  ['tapahtuma', 'event', 'অনুষ্ঠান / ঘটনা', 'Kaupungissa on tänään tapahtuma.', "There's an event in the city today.", 'আজ শহরে একটি অনুষ্ঠান আছে।', 'news', 'A2'],
  ['vaikuttaa', 'to affect/influence', 'প্রভাবিত করা', 'Päätös vaikuttaa moneen ihmiseen.', 'The decision affects many people.', 'সিদ্ধান্তটি অনেক মানুষকে প্রভাবিত করে।', 'news', 'B1'],
  ['ajankohtainen', 'current/topical', 'সাম্প্রতিক / বর্তমান', 'Tämä on ajankohtainen aihe.', 'This is a topical subject.', 'এটি একটি সাম্প্রতিক বিষয়।', 'news', 'B1'],

  // opinions
  ['mielipide', 'opinion', 'মতামত', 'Mikä on sinun mielipiteesi?', 'What is your opinion?', 'তোমার মতামত কী?', 'opinions', 'A2'],
  ['mielestäni', 'in my opinion', 'আমার মতে', 'Mielestäni tämä on hyvä idea.', 'In my opinion this is a good idea.', 'আমার মতে এটি একটি ভালো ধারণা।', 'opinions', 'A2'],
  ['samaa mieltä', 'in agreement', 'একমত', 'Olen samaa mieltä kanssasi.', 'I agree with you.', 'আমি তোমার সাথে একমত।', 'opinions', 'B1'],
  ['eri mieltä', 'in disagreement', 'দ্বিমত', 'Olen tästä eri mieltä.', 'I disagree about this.', 'আমি এই বিষয়ে দ্বিমত পোষণ করি।', 'opinions', 'B1'],

  // discussion
  ['keskustelu', 'discussion', 'আলোচনা', 'Meillä oli hyvä keskustelu.', 'We had a good discussion.', 'আমাদের একটি ভালো আলোচনা হয়েছিল।', 'discussion', 'A2'],
  ['väittää', 'to argue/claim', 'দাবি করা', 'Hän väittää, että se on totta.', 'He/she claims that it is true.', 'সে দাবি করে যে এটি সত্য।', 'discussion', 'B1'],
  ['perustella', 'to justify/give reasons', 'যুক্তি দেওয়া / ব্যাখ্যা করা', 'Perustele mielipiteesi tarkasti.', 'Justify your opinion carefully.', 'তোমার মতামত সঠিকভাবে ব্যাখ্যা করো।', 'discussion', 'B1'],

  // healthcare
  ['lääkäri', 'doctor', 'ডাক্তার', 'Varasin ajan lääkärille.', 'I booked an appointment with the doctor.', 'আমি ডাক্তারের কাছে অ্যাপয়েন্টমেন্ট বুক করেছি।', 'healthcare', 'A1'],
  ['terveyskeskus', 'health center', 'স্বাস্থ্যকেন্দ্র', 'Terveyskeskus on avoinna arkisin.', 'The health center is open on weekdays.', 'স্বাস্থ্যকেন্দ্র সপ্তাহের কর্মদিনগুলোতে খোলা থাকে।', 'healthcare', 'A2'],
  ['resepti', 'prescription', 'প্রেসক্রিপশন', 'Sain reseptin lääkärikäynnillä.', 'I got a prescription during the doctor visit.', 'ডাক্তারের কাছে গিয়ে আমি প্রেসক্রিপশন পেয়েছি।', 'healthcare', 'B1'],
  ['vakuutus', 'insurance', 'বীমা', 'Minulla on sairausvakuutus.', 'I have health insurance.', 'আমার স্বাস্থ্য বীমা আছে।', 'healthcare', 'B1'],

  // money
  ['raha', 'money', 'টাকা', 'Minulla ei ole tarpeeksi rahaa.', "I don't have enough money.", 'আমার কাছে পর্যাপ্ত টাকা নেই।', 'money', 'A1'],
  ['säästää', 'to save (money)', 'সঞ্চয় করা', 'Säästän joka kuukausi vähän.', 'I save a little each month.', 'আমি প্রতি মাসে একটু সঞ্চয় করি।', 'money', 'A2'],
  ['lasku', 'invoice/bill', 'বিল', 'Maksoin sähkölaskun ajoissa.', 'I paid the electricity bill on time.', 'আমি সময়মতো বিদ্যুৎ বিল পরিশোধ করেছি।', 'money', 'A2'],

  // finance
  ['pankki', 'bank', 'ব্যাংক', 'Avasin tilin pankissa.', 'I opened an account at the bank.', 'আমি ব্যাংকে একটি অ্যাকাউন্ট খুলেছি।', 'finance', 'A1'],
  ['budjetti', 'budget', 'বাজেট', 'Meillä on tiukka budjetti.', 'We have a tight budget.', 'আমাদের বাজেট সীমিত।', 'finance', 'B1'],
  ['sijoittaa', 'to invest', 'বিনিয়োগ করা', 'Hän sijoittaa osakkeisiin.', 'He/she invests in stocks.', 'সে শেয়ারে বিনিয়োগ করে।', 'finance', 'B2'],

  // environment
  ['ympäristö', 'environment', 'পরিবেশ', 'Meidän pitää suojella ympäristöä.', 'We need to protect the environment.', 'আমাদের পরিবেশ রক্ষা করতে হবে।', 'environment', 'B1'],
  ['kierrättää', 'to recycle', 'পুনর্ব্যবহার করা', 'Kierrätämme muovin ja paperin.', 'We recycle plastic and paper.', 'আমরা প্লাস্টিক ও কাগজ পুনর্ব্যবহার করি।', 'environment', 'A2'],
  ['ilmasto', 'climate', 'জলবায়ু', 'Ilmasto muuttuu nopeasti.', 'The climate is changing quickly.', 'জলবায়ু দ্রুত পরিবর্তিত হচ্ছে।', 'environment', 'B1'],
  ['saaste', 'pollution', 'দূষণ', 'Kaupungin ilma kärsii saasteista.', "The city's air suffers from pollution.", 'শহরের বাতাস দূষণে ভুগছে।', 'environment', 'B2'],

  // nature
  ['luonto', 'nature', 'প্রকৃতি', 'Suomalaiset rakastavat luontoa.', 'Finns love nature.', 'ফিনরা প্রকৃতি ভালোবাসে।', 'nature', 'A2'],
  ['metsä', 'forest', 'বন', 'Kävelemme metsässä viikonloppuisin.', 'We walk in the forest on weekends.', 'আমরা সপ্তাহান্তে বনে হাঁটি।', 'nature', 'A1'],
  ['järvi', 'lake', 'হ্রদ', 'Suomessa on tuhansia järviä.', 'Finland has thousands of lakes.', 'ফিনল্যান্ডে হাজার হাজার হ্রদ আছে।', 'nature', 'A1'],

  // traditions
  ['perinne', 'tradition', 'ঐতিহ্য', 'Joulu on tärkeä perinne.', 'Christmas is an important tradition.', 'বড়দিন একটি গুরুত্বপূর্ণ ঐতিহ্য।', 'traditions', 'A2'],
  ['juhla', 'celebration/party', 'উৎসব / পার্টি', 'Meillä on juhla perjantaina.', "We're having a celebration on Friday.", 'শুক্রবারে আমাদের একটি পার্টি আছে।', 'traditions', 'A1'],
  ['vietttää (juhlaa)', 'to celebrate', 'উদযাপন করা', 'Vietämme joulua yhdessä perheen kanssa.', 'We celebrate Christmas together with family.', 'আমরা পরিবারের সাথে একসাথে বড়দিন উদযাপন করি।', 'traditions', 'A2'],

  // festivals
  ['juhannus', 'Midsummer', 'মিডসামার (গ্রীষ্মকালীন উৎসব)', 'Juhannuksena mökille on kiva mennä.', "It's nice to go to the cottage for Midsummer.", 'মিডসামারে কটেজে যাওয়া আনন্দদায়ক।', 'festivals', 'A2'],
  ['itsenäisyyspäivä', 'Independence Day', 'স্বাধীনতা দিবস', 'Itsenäisyyspäivää vietetään joulukuun kuudentena.', 'Independence Day is celebrated on the sixth of December.', 'স্বাধীনতা দিবস ডিসেম্বরের ছয় তারিখে পালিত হয়।', 'festivals', 'A2'],

  // future plans
  ['suunnitelma', 'plan', 'পরিকল্পনা', 'Minulla on suunnitelma ensi vuodelle.', 'I have a plan for next year.', 'আগামী বছরের জন্য আমার একটি পরিকল্পনা আছে।', 'future plans', 'A2'],
  ['aikoa', 'to intend', 'ইচ্ছা করা / পরিকল্পনা করা', 'Aion opiskella lisää suomea.', 'I intend to study more Finnish.', 'আমি আরও ফিনিশ ভাষা শেখার ইচ্ছা করছি।', 'future plans', 'A2'],
  ['tavoite', 'goal', 'লক্ষ্য', 'Tavoitteeni on läpäistä YKI-koe.', 'My goal is to pass the YKI test.', 'আমার লক্ষ্য YKI পরীক্ষায় পাস করা।', 'future plans', 'B1'],

  // communication
  ['viestiä', 'to communicate', 'যোগাযোগ করা', 'Viestimme sähköpostilla.', 'We communicate by email.', 'আমরা ইমেইলের মাধ্যমে যোগাযোগ করি।', 'communication', 'A2'],
  ['selittää', 'to explain', 'ব্যাখ্যা করা', 'Voitko selittää tämän uudestaan?', 'Can you explain this again?', 'তুমি কি আবার এটা ব্যাখ্যা করতে পারবে?', 'communication', 'A2'],
  ['ymmärtää', 'to understand', 'বোঝা', 'En ihan ymmärtänyt kysymystä.', "I didn't quite understand the question.", 'আমি প্রশ্নটি ঠিকমতো বুঝিনি।', 'communication', 'A1'],

  // education policy
  ['uudistus', 'reform', 'সংস্কার', 'Koulutusuudistus herättää keskustelua.', "The education reform is sparking discussion.", 'শিক্ষা সংস্কার আলোচনার জন্ম দিচ্ছে।', 'education policy', 'B2'],
  ['resurssi', 'resource', 'সম্পদ', 'Koululla ei ole tarpeeksi resursseja.', "The school doesn't have enough resources.", 'স্কুলে পর্যাপ্ত সম্পদ নেই।', 'education policy', 'B2'],

  // immigration
  ['kotoutuminen', 'integration', 'একীভূতকরণ (ইন্টিগ্রেশন)', 'Kotoutuminen vie aikaa.', 'Integration takes time.', 'ইন্টিগ্রেশন সময় নেয়।', 'immigration', 'B1'],
  ['maahanmuuttaja', 'immigrant', 'অভিবাসী', 'Moni maahanmuuttaja opiskelee suomea aktiivisesti.', 'Many immigrants actively study Finnish.', 'অনেক অভিবাসী সক্রিয়ভাবে ফিনিশ ভাষা শেখেন।', 'immigration', 'B1'],
  ['oleskelulupa', 'residence permit', 'বসবাসের অনুমতি (রেসিডেন্স পারমিট)', 'Hain jatkoa oleskeluluvalleni.', 'I applied for an extension to my residence permit.', 'আমি আমার রেসিডেন্স পারমিটের মেয়াদ বাড়ানোর জন্য আবেদন করেছি।', 'immigration', 'B1'],

  // technology
  ['sovellus', 'application/app', 'অ্যাপ / অ্যাপ্লিকেশন', 'Lataan uuden sovelluksen puhelimeeni.', "I'm downloading a new app on my phone.", 'আমি আমার ফোনে একটি নতুন অ্যাপ ডাউনলোড করছি।', 'technology', 'A2'],
  ['digitalisaatio', 'digitalization', 'ডিজিটালাইজেশন', 'Digitalisaatio muuttaa työelämää.', 'Digitalization is changing working life.', 'ডিজিটালাইজেশন কর্মজীবন পরিবর্তন করছে।', 'technology', 'B2'],
  ['tietoturva', 'data security', 'তথ্য নিরাপত্তা', 'Tietoturva on tärkeä aihe yrityksille.', 'Data security is an important topic for companies.', 'কোম্পানিগুলোর জন্য তথ্য নিরাপত্তা একটি গুরুত্বপূর্ণ বিষয়।', 'technology', 'B2'],

  // culture
  ['kulttuuri', 'culture', 'সংস্কৃতি', 'Suomen kulttuuri kiinnostaa minua.', 'Finnish culture interests me.', 'ফিনল্যান্ডের সংস্কৃতি আমার আগ্রহের বিষয়।', 'culture', 'A2'],
  ['taide', 'art', 'শিল্প / আর্ট', 'Käymme taidenäyttelyssä lauantaina.', "We're going to an art exhibition on Saturday.", 'আমরা শনিবারে একটি আর্ট প্রদর্শনীতে যাচ্ছি।', 'culture', 'B1'],
  ['esitys', 'performance/show', 'পরিবেশনা / শো', 'Näimme hienon esityksen teatterissa.', 'We saw a great performance at the theatre.', 'আমরা থিয়েটারে একটি চমৎকার পরিবেশনা দেখেছি।', 'culture', 'B1'],

  // arts
  ['kirjallisuus', 'literature', 'সাহিত্য', 'Suomalainen kirjallisuus on monipuolista.', 'Finnish literature is diverse.', 'ফিনিশ সাহিত্য বৈচিত্র্যময়।', 'arts', 'B2'],
  ['musiikki', 'music', 'সঙ্গীত', 'Musiikki rentouttaa minua.', 'Music relaxes me.', 'সঙ্গীত আমাকে প্রশান্তি দেয়।', 'arts', 'A1'],

  // debate
  ['väittely', 'debate', 'বিতর্ক', 'Luokassa oli kiivas väittely.', 'There was a heated debate in the classroom.', 'ক্লাসে একটি উত্তপ্ত বিতর্ক হয়েছিল।', 'debate', 'B2'],
  ['näkökulma', 'point of view', 'দৃষ্টিভঙ্গি', 'Ymmärrän molemmat näkökulmat.', 'I understand both points of view.', 'আমি উভয় দৃষ্টিভঙ্গি বুঝি।', 'debate', 'B2'],
  ['ristiriita', 'conflict/contradiction', 'দ্বন্দ্ব / বিরোধ', 'Heidän välillään on ristiriita.', 'There is a conflict between them.', 'তাদের মধ্যে একটি দ্বন্দ্ব আছে।', 'debate', 'B2'],

  // change
  ['muutos', 'change', 'পরিবর্তন', 'Työelämässä tapahtuu jatkuvasti muutoksia.', 'Changes are constantly happening in working life.', 'কর্মজীবনে ক্রমাগত পরিবর্তন ঘটছে।', 'change', 'B1'],
  ['sopeutua', 'to adapt', 'খাপ খাইয়ে নেওয়া', 'Ihmiset sopeutuvat uusiin tilanteisiin.', 'People adapt to new situations.', 'মানুষ নতুন পরিস্থিতির সাথে খাপ খাইয়ে নেয়।', 'change', 'B2'],
  ['kehittyä', 'to develop/improve', 'উন্নত হওয়া', 'Suomen kieleni kehittyy koko ajan.', 'My Finnish keeps developing all the time.', 'আমার ফিনিশ ভাষা ক্রমাগত উন্নত হচ্ছে।', 'change', 'B1'],

  // colors
  ['punainen', 'red', 'লাল', 'Hänellä on punainen auto.', 'He/she has a red car.', 'তার একটি লাল গাড়ি আছে।', 'colors', 'A1'],
  ['sininen', 'blue', 'নীল', 'Taivas on sininen tänään.', 'The sky is blue today.', 'আজ আকাশ নীল।', 'colors', 'A1'],
  ['vihreä', 'green', 'সবুজ', 'Metsä on vihreä kesällä.', 'The forest is green in summer.', 'গ্রীষ্মে বন সবুজ থাকে।', 'colors', 'A1'],
  ['keltainen', 'yellow', 'হলুদ', 'Aurinko näyttää keltaiselta.', 'The sun looks yellow.', 'সূর্যকে হলুদ দেখায়।', 'colors', 'A1'],
  ['musta', 'black', 'কালো', 'Ostin mustat kengät.', 'I bought black shoes.', 'আমি কালো জুতা কিনেছি।', 'colors', 'A1'],
  ['valkoinen', 'white', 'সাদা', 'Talvella maa on valkoinen lumesta.', 'In winter the ground is white with snow.', 'শীতকালে বরফে মাটি সাদা হয়ে যায়।', 'colors', 'A1'],
  ['harmaa', 'grey', 'ধূসর', 'Taivas on harmaa ja pilvinen.', 'The sky is grey and cloudy.', 'আকাশ ধূসর ও মেঘলা।', 'colors', 'A1'],
  ['ruskea', 'brown', 'বাদামি', 'Hänellä on ruskeat silmät.', 'He/she has brown eyes.', 'তার চোখ বাদামি রঙের।', 'colors', 'A1'],
  ['oranssi', 'orange (color)', 'কমলা রঙ', 'Appelsiini on väriltään oranssi.', 'The orange fruit is orange-colored.', 'কমলালেবুর রঙ কমলা।', 'colors', 'A2'],
  ['violetti', 'purple', 'বেগুনি', 'Hän osti violetin paidan.', 'He/she bought a purple shirt.', 'সে একটি বেগুনি রঙের শার্ট কিনেছে।', 'colors', 'A2'],

  // clothing
  ['takki', 'coat/jacket', 'কোট / জ্যাকেট', 'Puen takin päälle, koska ulkona on kylmä.', "I put on a coat because it's cold outside.", 'বাইরে ঠান্ডা তাই আমি কোট পরি।', 'clothing', 'A1'],
  ['housut', 'trousers/pants', 'প্যান্ট', 'Nämä housut ovat liian pitkät.', 'These trousers are too long.', 'এই প্যান্টটি খুব লম্বা।', 'clothing', 'A1'],
  ['paita', 'shirt', 'শার্ট', 'Ostin uuden paidan juhlaan.', 'I bought a new shirt for the party.', 'আমি অনুষ্ঠানের জন্য একটি নতুন শার্ট কিনেছি।', 'clothing', 'A1'],
  ['kengät', 'shoes', 'জুতা', 'Kengät ovat eteisessä.', 'The shoes are in the hallway.', 'জুতাগুলো করিডোরে আছে।', 'clothing', 'A1'],
  ['hame', 'skirt', 'স্কার্ট', 'Hän pukeutui kauniiseen hameeseen.', 'She dressed in a beautiful skirt.', 'সে একটি সুন্দর স্কার্ট পরেছিল।', 'clothing', 'A2'],
  ['puku', 'suit', 'স্যুট', 'Isä käyttää pukua töissä.', 'Dad wears a suit at work.', 'বাবা কাজে স্যুট পরেন।', 'clothing', 'A2'],
  ['sukat', 'socks', 'মোজা', 'Jalkani ovat kylmät, tarvitsen paksut sukat.', 'My feet are cold, I need thick socks.', 'আমার পা ঠান্ডা, আমার মোটা মোজা দরকার।', 'clothing', 'A1'],
  ['hattu', 'hat', 'টুপি', 'Talvella käytän lämmintä hattua.', 'In winter I wear a warm hat.', 'শীতকালে আমি গরম টুপি পরি।', 'clothing', 'A1'],
  ['käsine', 'glove', 'গ্লাভস', 'Käteni palelevat ilman käsineitä.', 'My hands freeze without gloves.', 'গ্লাভস ছাড়া আমার হাত ঠান্ডায় জমে যায়।', 'clothing', 'A2'],
  ['pukeutua', 'to get dressed', 'পোশাক পরা', 'Pukeudun nopeasti aamulla.', 'I get dressed quickly in the morning.', 'আমি সকালে দ্রুত পোশাক পরি।', 'clothing', 'A2'],

  // common verbs
  ['mennä', 'to go', 'যাওয়া', 'Menen huomenna kauppaan.', 'I will go to the store tomorrow.', 'আমি আগামীকাল দোকানে যাব।', 'common verbs', 'A1'],
  ['tulla', 'to come', 'আসা', 'Tule tänne, ole hyvä.', 'Come here, please.', 'এদিকে এসো, প্লিজ।', 'common verbs', 'A1'],
  ['antaa', 'to give', 'দেওয়া', 'Voitko antaa minulle kynän?', 'Can you give me a pen?', 'তুমি কি আমাকে একটি কলম দিতে পারবে?', 'common verbs', 'A1'],
  ['ottaa', 'to take', 'নেওয়া', 'Otan kahvin mukaani.', "I'll take coffee with me.", 'আমি সাথে কফি নিয়ে যাব।', 'common verbs', 'A1'],
  ['sanoa', 'to say', 'বলা', 'Mitä sinä sanoit?', 'What did you say?', 'তুমি কী বললে?', 'common verbs', 'A1'],
  ['nähdä', 'to see', 'দেখা', 'Näin hänet eilen kadulla.', 'I saw him/her on the street yesterday.', 'আমি গতকাল রাস্তায় তাকে দেখেছি।', 'common verbs', 'A1'],
  ['tehdä', 'to do/make', 'করা', 'Mitä sinä teet nyt?', 'What are you doing now?', 'তুমি এখন কী করছ?', 'common verbs', 'A1'],
  ['katsoa', 'to watch/look', 'দেখা (তাকানো)', 'Katsomme elokuvaa illalla.', "We're watching a movie tonight.", 'আমরা সন্ধ্যায় সিনেমা দেখব।', 'common verbs', 'A1'],
  ['kuunnella', 'to listen', 'শোনা', 'Kuuntelen musiikkia joka päivä.', 'I listen to music every day.', 'আমি প্রতিদিন গান শুনি।', 'common verbs', 'A1'],
  ['löytää', 'to find', 'খুঁজে পাওয়া', 'En löydä avaimiani.', "I can't find my keys.", 'আমি আমার চাবি খুঁজে পাচ্ছি না।', 'common verbs', 'A2'],

  // common adjectives
  ['iso', 'big', 'বড়', 'Heillä on iso talo.', 'They have a big house.', 'তাদের একটি বড় বাড়ি আছে।', 'common adjectives', 'A1'],
  ['pieni', 'small', 'ছোট', 'Asunto on pieni mutta viihtyisä.', 'The apartment is small but cozy.', 'অ্যাপার্টমেন্টটি ছোট কিন্তু আরামদায়ক।', 'common adjectives', 'A1'],
  ['hyvä', 'good', 'ভালো', 'Tämä on hyvä idea.', 'This is a good idea.', 'এটি একটি ভালো ধারণা।', 'common adjectives', 'A1'],
  ['huono', 'bad', 'খারাপ', 'Sää on tänään huono.', 'The weather is bad today.', 'আজ আবহাওয়া খারাপ।', 'common adjectives', 'A1'],
  ['uusi', 'new', 'নতুন', 'Ostin uuden puhelimen.', 'I bought a new phone.', 'আমি একটি নতুন ফোন কিনেছি।', 'common adjectives', 'A1'],
  ['vanha', 'old', 'পুরনো', 'Tämä on vanha rakennus.', 'This is an old building.', 'এটি একটি পুরনো ভবন।', 'common adjectives', 'A1'],
  ['vaikea', 'difficult', 'কঠিন', 'Suomen kielioppi on joskus vaikeaa.', 'Finnish grammar is sometimes difficult.', 'ফিনিশ ব্যাকরণ মাঝে মাঝে কঠিন।', 'common adjectives', 'A2'],
  ['helppo', 'easy', 'সহজ', 'Tämä tehtävä on helppo.', 'This task is easy.', 'এই কাজটি সহজ।', 'common adjectives', 'A2'],

  // adverbs
  ['aina', 'always', 'সবসময়', 'Hän on aina ajoissa.', 'He/she is always on time.', 'সে সবসময় সময়মতো আসে।', 'adverbs', 'A1'],
  ['ei koskaan', 'never', 'কখনো না', 'En koskaan myöhästy kokouksesta.', 'I never come late to a meeting.', 'আমি কখনো মিটিংয়ে দেরি করি না।', 'adverbs', 'A2'],
  ['usein', 'often', 'প্রায়ই', 'Käyn usein kirjastossa.', 'I often visit the library.', 'আমি প্রায়ই লাইব্রেরিতে যাই।', 'adverbs', 'A1'],
  ['joskus', 'sometimes', 'মাঝে মাঝে', 'Joskus syön aamiaisen ulkona.', 'Sometimes I eat breakfast out.', 'মাঝে মাঝে আমি বাইরে নাস্তা করি।', 'adverbs', 'A1'],
  ['nopeasti', 'quickly', 'দ্রুত', 'Hän juoksee nopeasti.', 'He/she runs quickly.', 'সে দ্রুত দৌড়ায়।', 'adverbs', 'A2'],
  ['hitaasti', 'slowly', 'ধীরে', 'Puhu hitaasti, kiitos.', 'Speak slowly, please.', 'দয়া করে ধীরে কথা বলুন।', 'adverbs', 'A1'],
  ['vielä', 'still/yet', 'এখনো', 'En ole vielä valmis.', "I'm not ready yet.", 'আমি এখনো প্রস্তুত নই।', 'adverbs', 'A2'],
  ['jo', 'already', 'ইতিমধ্যে', 'Olen jo syönyt.', 'I have already eaten.', 'আমি ইতিমধ্যে খেয়েছি।', 'adverbs', 'A2'],

  // directions and city
  ['vasemmalle', 'to the left', 'বামদিকে', 'Käänny vasemmalle seuraavasta kulmasta.', 'Turn left at the next corner.', 'পরবর্তী মোড়ে বামদিকে ঘুরুন।', 'directions and city', 'A2'],
  ['oikealle', 'to the right', 'ডানদিকে', 'Kirjasto on oikealla puolella katua.', 'The library is on the right side of the street.', 'লাইব্রেরিটি রাস্তার ডান পাশে আছে।', 'directions and city', 'A2'],
  ['suoraan', 'straight ahead', 'সোজা', 'Mene suoraan ja käänny sitten vasemmalle.', 'Go straight and then turn left.', 'সোজা যান, তারপর বামদিকে ঘুরুন।', 'directions and city', 'A2'],
  ['kartta', 'map', 'মানচিত্র', 'Katson karttaa löytääkseni tien.', 'I look at the map to find the way.', 'রাস্তা খুঁজে পেতে আমি মানচিত্র দেখি।', 'directions and city', 'A2'],
  ['risteys', 'intersection/crossroads', 'চৌরাস্তা', 'Käänny toisesta risteyksestä oikealle.', 'Turn right at the second intersection.', 'দ্বিতীয় চৌরাস্তায় ডানে ঘুরুন।', 'directions and city', 'B1'],
  ['katu', 'street', 'রাস্তা', 'Asun kadun toisessa päässä.', 'I live at the other end of the street.', 'আমি রাস্তার অন্য প্রান্তে থাকি।', 'directions and city', 'A1'],
  ['kaukana', 'far away', 'দূরে', 'Kauppa on kaukana kotoa.', 'The store is far from home.', 'দোকানটি বাড়ি থেকে দূরে।', 'directions and city', 'A2'],
  ['lähellä', 'near/close by', 'কাছে', 'Koulu on lähellä asuntoani.', 'The school is close to my apartment.', 'স্কুলটি আমার বাসার কাছে।', 'directions and city', 'A1'],

  // animals
  ['koira', 'dog', 'কুকুর', 'Meillä on ystävällinen koira.', 'We have a friendly dog.', 'আমাদের একটি বন্ধুত্বপূর্ণ কুকুর আছে।', 'animals', 'A1'],
  ['kissa', 'cat', 'বিড়াল', 'Kissa nukkuu sohvalla.', 'The cat is sleeping on the sofa.', 'বিড়ালটি সোফায় ঘুমাচ্ছে।', 'animals', 'A1'],
  ['lintu', 'bird', 'পাখি', 'Linnut laulavat aamulla puussa.', 'The birds sing in the tree in the morning.', 'সকালে গাছে পাখিরা গান গায়।', 'animals', 'A1'],
  ['hevonen', 'horse', 'ঘোড়া', 'Näimme hevosen pellolla.', 'We saw a horse in the field.', 'আমরা মাঠে একটি ঘোড়া দেখেছি।', 'animals', 'A2'],
  ['karhu', 'bear', 'ভালুক', 'Suomen metsissä asuu karhuja.', "Bears live in Finland's forests.", 'ফিনল্যান্ডের বনে ভালুক বাস করে।', 'animals', 'A2'],
  ['susi', 'wolf', 'নেকড়ে', 'Susi on harvinainen näky luonnossa.', 'A wolf is a rare sight in nature.', 'প্রকৃতিতে নেকড়ে দেখা বিরল।', 'animals', 'B1'],
  ['poro', 'reindeer', 'রেইনডিয়ার (হরিণজাতীয় প্রাণী)', 'Lapissa näkee usein poroja tien varrella.', 'In Lapland you often see reindeer by the roadside.', 'ল্যাপল্যান্ডে প্রায়ই রাস্তার পাশে রেইনডিয়ার দেখা যায়।', 'animals', 'A2'],
  ['kani', 'rabbit', 'খরগোশ', 'Lapsi haluaa lemmikiksi kanin.', 'The child wants a rabbit as a pet.', 'শিশুটি পোষা প্রাণী হিসেবে খরগোশ চায়।', 'animals', 'A2'],

  // emotions
  ['iloinen', 'happy', 'আনন্দিত', 'Olen iloinen, että näen sinut.', "I'm happy to see you.", 'তোমাকে দেখে আমি আনন্দিত।', 'emotions', 'A1'],
  ['surullinen', 'sad', 'দুঃখিত', 'Hän oli surullinen uutisen jälkeen.', 'He/she was sad after the news.', 'খবরটির পর সে দুঃখিত ছিল।', 'emotions', 'A1'],
  ['vihainen', 'angry', 'রাগান্বিত', 'Esimieheni oli vihainen myöhästymisestä.', 'My boss was angry about the lateness.', 'দেরি হওয়ার কারণে আমার বস রাগান্বিত ছিলেন।', 'emotions', 'A2'],
  ['yllättynyt', 'surprised', 'অবাক / বিস্মিত', 'Olin yllättynyt lahjasta.', 'I was surprised by the gift.', 'উপহারটি পেয়ে আমি অবাক হয়েছিলাম।', 'emotions', 'B1'],
  ['huolissaan', 'worried', 'চিন্তিত', 'Olen huolissaan kokeesta.', "I'm worried about the test.", 'আমি পরীক্ষা নিয়ে চিন্তিত।', 'emotions', 'A2'],
  ['rauhallinen', 'calm', 'শান্ত', 'Pysy rauhallisena haastattelussa.', 'Stay calm during the interview.', 'সাক্ষাৎকারের সময় শান্ত থাকো।', 'emotions', 'A2'],
  ['jännittynyt', 'nervous/excited', 'উত্তেজিত / নার্ভাস', 'Olen vähän jännittynyt ennen koetta.', "I'm a bit nervous before the exam.", 'পরীক্ষার আগে আমি একটু নার্ভাস।', 'emotions', 'B1'],
  ['ylpeä', 'proud', 'গর্বিত', 'Vanhempani ovat ylpeitä minusta.', 'My parents are proud of me.', 'আমার বাবা-মা আমার জন্য গর্বিত।', 'emotions', 'B1'],
  ['pettynyt', 'disappointed', 'হতাশ', 'Olin pettynyt tulokseen.', 'I was disappointed with the result.', 'ফলাফল নিয়ে আমি হতাশ হয়েছিলাম।', 'emotions', 'B1'],

  // personality
  ['ystävällinen', 'friendly', 'বন্ধুত্বপূর্ণ', 'Uusi kollegani on hyvin ystävällinen.', 'My new colleague is very friendly.', 'আমার নতুন সহকর্মী অনেক বন্ধুত্বপূর্ণ।', 'personality', 'A1'],
  ['avoin', 'open (personality)', 'উন্মুক্ত মনের / খোলামেলা', 'Hän on avoin uusille ideoille.', 'He/she is open to new ideas.', 'সে নতুন ধারণার জন্য খোলামেলা।', 'personality', 'B1'],
  ['ujo', 'shy', 'লাজুক', 'Lapsi on ujo vieraiden seurassa.', 'The child is shy around strangers.', 'অপরিচিতদের সামনে শিশুটি লাজুক।', 'personality', 'A2'],
  ['rohkea', 'brave', 'সাহসী', 'On rohkeaa muuttaa uuteen maahan.', "It's brave to move to a new country.", 'নতুন দেশে চলে যাওয়া সাহসিকতার কাজ।', 'personality', 'B1'],
  ['ahkera', 'hardworking', 'পরিশ্রমী', 'Hän on ahkera opiskelija.', 'He/she is a hardworking student.', 'সে একজন পরিশ্রমী শিক্ষার্থী।', 'personality', 'A2'],
  ['laiska', 'lazy', 'অলস', 'En ole laiska, olen vain väsynyt.', "I'm not lazy, I'm just tired.", 'আমি অলস নই, শুধু ক্লান্ত।', 'personality', 'A2'],
  ['luotettava', 'reliable/trustworthy', 'নির্ভরযোগ্য', 'Hän on luotettava ystävä.', 'He/she is a reliable friend.', 'সে একজন নির্ভরযোগ্য বন্ধু।', 'personality', 'B1'],
  ['itsepäinen', 'stubborn', 'একগুঁয়ে', 'Isoisäni on vähän itsepäinen.', 'My grandfather is a bit stubborn.', 'আমার দাদা একটু একগুঁয়ে।', 'personality', 'B1'],

  // cooking
  ['keittää', 'to boil/cook', 'সিদ্ধ করা / রান্না করা', 'Keitän vettä teetä varten.', 'I boil water for tea.', 'আমি চায়ের জন্য পানি সিদ্ধ করি।', 'cooking', 'A2'],
  ['paistaa', 'to fry/bake', 'ভাজা / বেক করা', 'Paistan kalaa pannulla.', 'I fry fish in the pan.', 'আমি প্যানে মাছ ভাজি।', 'cooking', 'A2'],
  ['sekoittaa', 'to mix/stir', 'মেশানো', 'Sekoita ainekset hyvin keskenään.', 'Mix the ingredients well together.', 'উপকরণগুলো ভালোভাবে মিশিয়ে নিন।', 'cooking', 'A2'],
  ['leikata', 'to cut', 'কাটা', 'Leikkaan sipulin pieniksi paloiksi.', 'I cut the onion into small pieces.', 'আমি পেঁয়াজটি ছোট টুকরা করে কাটি।', 'cooking', 'A2'],
  ['ruokaohje', 'recipe', 'রান্নার রেসিপি', 'Löysin hyvän ruokaohjeen internetistä.', 'I found a good recipe on the internet.', 'আমি ইন্টারনেটে একটি ভালো রেসিপি পেয়েছি।', 'cooking', 'B1'],
  ['ainesosa', 'ingredient', 'উপকরণ', 'Tarvitsen viisi ainesosaa tähän ruokaan.', 'I need five ingredients for this dish.', 'এই রান্নার জন্য আমার পাঁচটি উপকরণ দরকার।', 'cooking', 'B1'],
  ['uuni', 'oven', 'ওভেন', 'Laita kakku uuniin puoleksi tunniksi.', 'Put the cake in the oven for half an hour.', 'কেকটি আধা ঘণ্টার জন্য ওভেনে দিন।', 'cooking', 'A2'],
  ['mauste', 'spice', 'মসলা', 'Suomalainen ruoka käyttää vähän mausteita.', 'Finnish food uses few spices.', 'ফিনিশ খাবারে কম মসলা ব্যবহার করা হয়।', 'cooking', 'B1'],

  // dining out
  ['ravintola', 'restaurant', 'রেস্তোরাঁ', 'Menemme ravintolaan perjantaina.', "We're going to a restaurant on Friday.", 'আমরা শুক্রবারে রেস্তোরাঁয় যাচ্ছি।', 'dining out', 'A1'],
  ['tarjoilija', 'waiter/waitress', 'ওয়েটার', 'Tarjoilija toi ruoan pöytäämme.', 'The waiter brought food to our table.', 'ওয়েটার আমাদের টেবিলে খাবার এনেছে।', 'dining out', 'A2'],
  ['menu', 'menu', 'মেনু', 'Katsoin menua ennen tilaamista.', 'I looked at the menu before ordering.', 'অর্ডার করার আগে আমি মেনু দেখেছি।', 'dining out', 'A2'],
  ['ruokalista', 'menu (food list)', 'খাবারের তালিকা', 'Ruokalistassa on monta kasvisruokaa.', 'There are many vegetarian dishes on the menu.', 'খাবারের তালিকায় অনেক নিরামিষ খাবার আছে।', 'dining out', 'A2'],
  ['varaus', 'reservation', 'রিজার্ভেশন', 'Teimme varauksen ravintolaan etukäteen.', 'We made a reservation at the restaurant in advance.', 'আমরা আগে থেকেই রেস্তোরাঁয় রিজার্ভেশন করেছিলাম।', 'dining out', 'B1'],
  ['jälkiruoka', 'dessert', 'ডেজার্ট', 'Jälkiruoaksi otan jäätelöä.', "For dessert I'll have ice cream.", 'ডেজার্ট হিসেবে আমি আইসক্রিম নেব।', 'dining out', 'A2'],
  ['tilata', 'to order', 'অর্ডার করা', 'Tilaan kalaa ja salaattia.', "I'll order fish and salad.", 'আমি মাছ ও সালাদ অর্ডার করব।', 'dining out', 'A2'],

  // phone and communication
  ['puhelin', 'phone', 'ফোন', 'Puhelimeni akku on melkein tyhjä.', 'My phone battery is almost empty.', 'আমার ফোনের ব্যাটারি প্রায় শেষ।', 'phone and communication', 'A1'],
  ['soittaa (puhelimella)', 'to call (someone)', 'ফোন করা', 'Soitan äidilleni joka sunnuntai.', 'I call my mother every Sunday.', 'আমি প্রতি রবিবার আমার মাকে ফোন করি।', 'phone and communication', 'A1'],
  ['tekstiviesti', 'text message', 'এসএমএস / টেক্সট মেসেজ', 'Lähetin hänelle tekstiviestin.', 'I sent him/her a text message.', 'আমি তাকে একটি টেক্সট মেসেজ পাঠিয়েছি।', 'phone and communication', 'A2'],
  ['sähköposti', 'email', 'ইমেইল', 'Tarkistan sähköpostini joka aamu.', 'I check my email every morning.', 'আমি প্রতি সকালে ইমেইল চেক করি।', 'phone and communication', 'A1'],
  ['verkkoyhteys', 'internet connection', 'ইন্টারনেট সংযোগ', 'Verkkoyhteys on tänään hidas.', 'The internet connection is slow today.', 'আজ ইন্টারনেট সংযোগ ধীর।', 'phone and communication', 'B1'],
  ['laturi', 'charger', 'চার্জার', 'Unohdin laturini kotiin.', 'I forgot my charger at home.', 'আমি আমার চার্জার বাসায় ভুলে এসেছি।', 'phone and communication', 'A2'],
  ['näyttö', 'screen/display', 'স্ক্রিন', 'Puhelimeni näyttö on rikki.', 'My phone screen is broken.', 'আমার ফোনের স্ক্রিন ভাঙা।', 'phone and communication', 'A2'],

  // law and rights
  ['laki', 'law', 'আইন', 'Suomessa kaikkien pitää noudattaa lakia.', 'In Finland everyone must follow the law.', 'ফিনল্যান্ডে সবাইকে আইন মেনে চলতে হয়।', 'law and rights', 'B1'],
  ['sääntö', 'rule', 'নিয়ম', 'Koulussa on paljon sääntöjä.', 'There are many rules at school.', 'স্কুলে অনেক নিয়ম আছে।', 'law and rights', 'A2'],
  ['velvollisuus', 'duty/obligation', 'দায়িত্ব / কর্তব্য', 'Verojen maksaminen on kansalaisen velvollisuus.', "Paying taxes is a citizen's duty.", 'কর প্রদান একজন নাগরিকের কর্তব্য।', 'law and rights', 'B1'],
  ['sopimus', 'contract/agreement', 'চুক্তি', 'Luin sopimuksen tarkasti ennen allekirjoittamista.', 'I read the contract carefully before signing.', 'সই করার আগে আমি চুক্তিটি ভালোভাবে পড়েছি।', 'law and rights', 'B1'],
  ['allekirjoittaa', 'to sign', 'স্বাক্ষর করা', 'Allekirjoita paperi tähän kohtaan.', 'Sign the paper at this spot.', 'এই জায়গায় কাগজে স্বাক্ষর করুন।', 'law and rights', 'B1'],
  ['oikeudenmukainen', 'fair/just', 'ন্যায্য / নিরপেক্ষ', 'Tuomarin päätös oli oikeudenmukainen.', "The judge's decision was fair.", 'বিচারকের সিদ্ধান্ত ন্যায্য ছিল।', 'law and rights', 'B2'],
  ['rikkoa (sääntöä)', 'to break (a rule)', 'নিয়ম ভাঙা', 'Älä riko liikennesääntöjä.', "Don't break the traffic rules.", 'ট্রাফিক নিয়ম ভাঙবেন না।', 'law and rights', 'B1'],

  // extended family
  ['isovanhempi', 'grandparent', 'দাদা-দাদি / নানা-নানি', 'Vietän kesät isovanhempieni luona.', "I spend summers at my grandparents' place.", 'আমি গ্রীষ্মকাল আমার দাদা-দাদির কাছে কাটাই।', 'extended family', 'A2'],
  ['isoäiti', 'grandmother', 'দাদি / নানি', 'Isoäitini leipoo herkullista pullaa.', 'My grandmother bakes delicious buns.', 'আমার দাদি সুস্বাদু বান তৈরি করেন।', 'extended family', 'A1'],
  ['isoisä', 'grandfather', 'দাদা / নানা', 'Isoisäni kertoo vanhoja tarinoita.', 'My grandfather tells old stories.', 'আমার দাদা পুরনো গল্প বলেন।', 'extended family', 'A1'],
  ['serkku', 'cousin', 'চাচাতো/মামাতো ভাই-বোন', 'Serkkuni asuu Turussa.', 'My cousin lives in Turku.', 'আমার চাচাতো ভাই তুরকুতে থাকে।', 'extended family', 'A2'],
  ['täti', 'aunt', 'খালা / ফুপু / চাচি', 'Tätini tulee kylään ensi viikolla.', 'My aunt is coming to visit next week.', 'আমার খালা আগামী সপ্তাহে বেড়াতে আসবেন।', 'extended family', 'A1'],
  ['setä', 'uncle', 'চাচা / মামা', 'Setäni asuu ulkomailla.', 'My uncle lives abroad.', 'আমার চাচা বিদেশে থাকেন।', 'extended family', 'A1'],
  ['lapsenlapsi', 'grandchild', 'নাতি-নাতনি', 'Isovanhemmillani on viisi lapsenlasta.', 'My grandparents have five grandchildren.', 'আমার দাদা-দাদির পাঁচটি নাতি-নাতনি আছে।', 'extended family', 'A2'],

  // body more
  ['silmä', 'eye', 'চোখ', 'Hänellä on siniset silmät.', 'He/she has blue eyes.', 'তার চোখ নীল রঙের।', 'body more', 'A1'],
  ['korva', 'ear', 'কান', 'Korvani on tukossa flunssan takia.', 'My ear is blocked because of the flu.', 'ফ্লুর কারণে আমার কান বন্ধ হয়ে আছে।', 'body more', 'A1'],
  ['jalka', 'leg/foot', 'পা', 'Jalkani ovat kipeät pitkän kävelyn jälkeen.', 'My legs are sore after a long walk.', 'অনেকক্ষণ হাঁটার পর আমার পা ব্যথা করছে।', 'body more', 'A1'],
  ['sydän', 'heart', 'হৃদয় / হার্ট', 'Sydämeni hakkaa nopeasti liikunnan jälkeen.', 'My heart beats fast after exercise.', 'ব্যায়ামের পর আমার হৃদস্পন্দন দ্রুত হয়।', 'body more', 'A2'],
  ['iho', 'skin', 'ত্বক', 'Talvella ihoni kuivuu helposti.', 'In winter my skin dries easily.', 'শীতকালে আমার ত্বক সহজেই শুষ্ক হয়ে যায়।', 'body more', 'B1'],
  ['hammas', 'tooth', 'দাঁত', 'Minulla särkee hammas.', 'I have a toothache.', 'আমার দাঁতে ব্যথা করছে।', 'body more', 'A2'],

  // weather more
  ['tuuli', 'wind', 'বাতাস', 'Ulkona puhaltaa kova tuuli.', 'A strong wind is blowing outside.', 'বাইরে জোরে বাতাস বইছে।', 'weather more', 'A1'],
  ['ukkonen', 'thunderstorm', 'বজ্রঝড়', 'Yöllä oli kova ukkonen.', 'There was a heavy thunderstorm at night.', 'রাতে প্রচণ্ড বজ্রঝড় হয়েছিল।', 'weather more', 'A2'],
  ['sumu', 'fog', 'কুয়াশা', 'Aamulla oli paksu sumu.', 'There was thick fog in the morning.', 'সকালে ঘন কুয়াশা ছিল।', 'weather more', 'A2'],
  ['kostea', 'humid/damp', 'আর্দ্র', 'Ilma on tänään kostea.', 'The air is humid today.', 'আজ বাতাস আর্দ্র।', 'weather more', 'B1'],
  ['kuiva', 'dry', 'শুষ্ক', 'Kesä oli tänä vuonna hyvin kuiva.', 'The summer was very dry this year.', 'এই বছর গ্রীষ্মকাল খুবই শুষ্ক ছিল।', 'weather more', 'A2'],
  ['lämmin', 'warm', 'উষ্ণ / গরম', 'Toivottavasti huomenna on lämmin ilma.', 'Hopefully tomorrow the weather will be warm.', 'আশা করি আগামীকাল আবহাওয়া উষ্ণ থাকবে।', 'weather more', 'A1'],
]

export const VOCAB_BANK: VocabItem[] = ROWS.map(([fi, en, bn, example, exampleEn, exampleBn, theme, level], i) => ({
  id: `v${i + 1}`,
  fi,
  en,
  bn,
  example,
  exampleEn,
  exampleBn,
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
