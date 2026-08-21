import type { ConversationChapter } from '../types'

// A new, richer practice format alongside Book Practice: full roleplay
// dialogues, quick-reaction scenarios, longer speaking/opinion prompts, and
// letter-writing tasks, organized into "chapters" the same way Book Practice
// is. Chapter 1 covers parties, compliments, weddings, and everyday social
// situations (kehuminen, häät, naapurit, ihmissuhteet). Original content —
// not copied from any textbook.
export const CONVERSATION_CHAPTERS: ConversationChapter[] = [
  {
    id: 'conv-ch1',
    titleFi: 'Luku 1: Juhlat, kehut ja ihmissuhteet',
    titleEn: 'Chapter 1: Parties, compliments and relationships',
    level: 'B1',
    vocabQuiz: [
      { question: "Mikä sana tarkoittaa 'stylish'?", options: ['tyylikäs', 'ruma', 'tylsä', 'vanha'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'hairstyle'?", options: ['kampaus', 'kampaamo', 'hiukset', 'kammata'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'necklace'?", options: ['kaulakoru', 'korvakoru', 'sormus', 'rannekoru'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'to compliment'?", options: ['kehua', 'moittia', 'unohtaa', 'arvostella'], correctIndex: 0 },
      { question: 'Tuo väri ___ sinulle todella hyvin.', options: ['sopii', 'näyttää', 'kuuluu', 'menee'], correctIndex: 0 },
      { question: "Mikä sana tarkoittaa 'smile'?", options: ['hymy', 'nauru', 'itku', 'ilme'], correctIndex: 0 },
    ],
    discussionQuestions: [
      { fi: 'Muistuttaako lemmikkieläin omistajaansa?', en: 'Does a pet resemble its owner?' },
      { fi: 'Entä muistuttavatko avioparit toisiansa?', en: 'Do married couples resemble each other?' },
      {
        fi: 'Kerro yksi sinulle tärkeä muisto. Mitä silloin tapahtui? Miksi muisto on sinulle tärkeä?',
        en: 'Tell one important memory. What happened? Why is it important to you?',
      },
      { fi: 'Kerro ensimmäinen muisto, joka sinulla on lapsuudesta.', en: 'Tell the first memory you have from childhood.' },
    ],
    crossword: [
      { prompt: 'Nainen, joka menee naimisiin on tällainen. Hänellä on tavallisesti valkoinen puku.', answer: 'morsian', hint: 'bride' },
      { prompt: 'Juhlan nimi, kun mennään naimisiin.', answer: 'häät', hint: 'wedding' },
      { prompt: 'Ennen juhlia vieraille täytyy kertoa, missä ja milloin juhlat ovat. Lähetät tällaisen postissa.', answer: 'kutsu', hint: 'invitation' },
      {
        prompt: 'Jos et halua viedä juhliin pakettia ja kaverilla on jo kaikkea, voit viedä hänelle tällaisen. Sen voi ostaa esimerkiksi hierontaan, kauppaan, elokuviin, teatteriin.',
        answer: 'lahjakortti',
        hint: 'gift card',
      },
      { prompt: "Kun sinä sanot: 'Paljon onnea!' tai 'Onneksi olkoon!', mitä sinä teet?", answer: 'onnittelet', hint: 'you congratulate (perusmuoto: onnitella)' },
      { prompt: 'Järjestät juhlat. Et halua tehdä itse ruokaa juhliin. Voit palkata tämän.', answer: 'pitopalvelu', hint: 'catering service' },
      { prompt: 'Juhla, joka järjestetään, kun lukio, ammattikoulu tai yliopisto on loppu.', answer: 'valmistujaiset', hint: 'graduation party' },
      { prompt: 'Juhla, joka järjestetään, kun joku muuttaa pois tai vaihtaa työpaikkaa.', answer: 'läksiäiset', hint: 'farewell party' },
      { prompt: 'Tämä on ihmisen viimeinen juhla.', answer: 'hautajaiset', hint: 'funeral' },
      { prompt: 'Ihmiset, jotka on kutsuttu juhliin, ovat tällaisia.', answer: 'vieraita', hint: 'guests (perusmuoto: vieras)' },
    ],
    dialogues: [
      {
        id: 'd1',
        titleFi: 'Ystävä tulee sinun luo kylään',
        titleEn: 'A friend comes to visit',
        turns: [
          { speaker: 'Ystävä', fi: 'Moi! Sori, että mä oon vähän myöhässä. Ihan hirvee keli ulkona.' },
          { speaker: 'Sinä', fi: 'Ei se mitään! Tule sisään. Kiva että pääsit.' },
          { speaker: 'Ystävä', fi: 'Kiitos hei kutsusta. Oli tosi kiva, että pyysit mut käymään.' },
          { speaker: 'Sinä', fi: 'Kiitos, että tulit. Haluatko jotain juotavaa?' },
          { speaker: 'Ystävä', fi: 'Kiitos, mä voisin ottaa vaikka kupin kahvia, jos sulla on.' },
          { speaker: 'Sinä', fi: 'Totta kai! Kahvia tulee. Istu vaan olohuoneeseen.' },
          { speaker: 'Ystävä', fi: 'Kiitos. Sulla on tosi kaunis koti. Paljonko tässä on neliöitä?' },
          { speaker: 'Sinä', fi: 'Kiitos! Tässä on noin 65 neliötä. Juuri sopiva minulle.' },
          { speaker: 'Ystävä', fi: 'Juu-u. Sori, nyt mä en muista, että millon sä muutitkaan tähän asuntoon?' },
          { speaker: 'Sinä', fi: 'Mä muutin tänne noin kaksi vuotta sitten.' },
          { speaker: 'Ystävä', fi: 'Niin niin, niinhän se olikin. Ootko sä ollut tyytyväinen tähän asuntoon?' },
          { speaker: 'Sinä', fi: 'Olen kyllä! Asunto on hyvä ja sijainti on erinomainen. Ainoastaan keittiö voisi olla vähän isompi.' },
        ],
      },
      {
        id: 'd2',
        titleFi: 'Ystävä on lähdössä',
        titleEn: 'A friend is leaving',
        turns: [
          { speaker: 'Ystävä', fi: 'Ai kamala, onks kello noin paljon? Kuule kyllä mun nyt on lähdettävä, huomenna on aikainen aamu.' },
          { speaker: 'Sinä', fi: 'Okei, ymmärrän. Mitä sinulla on huomenna suunnitelmissa?' },
          {
            speaker: 'Ystävä',
            fi: 'No mulla on huomenna aamuvuoro, että pitää mennä ajoissa sänkyyn. Mut kiitos sulle tosi paljon. Oli tosi kiva nähdä ja mahtavat tarjoilut sulla taas oli. Ens kerralla sitten sä tuut meille. Sopisko sulle jo ens lauantaina?',
          },
          { speaker: 'Sinä', fi: 'Valitettavasti ens lauantai ei sovi, koska mulla on muita suunnitelmia.' },
          { speaker: 'Ystävä', fi: 'Ai jaa, no ei se mitään. Joskus toiste sitten. Kuule, miten tästä meneekään busseja tähän aikaan tai millä mä pääsisin kaupunkiin?' },
          { speaker: 'Sinä', fi: 'Mä voin viedä sinut autolla kotiin.' },
          { speaker: 'Ystävä', fi: 'Ihan totta? Mut siitä on sulle ihan hirveesti vaivaa! Kyllä mä tästä voin ottaa vaikka taksinkin, jos en muuten pääse.' },
          { speaker: 'Sinä', fi: 'Ei se ole mikään vaiva. Otan mielelläni sinut kyytiin.' },
          { speaker: 'Ystävä', fi: 'Voi vitsi, sä oot kyllä ihan paras. Kiitos paljon.' },
          { speaker: 'Sinä', fi: 'Eipä kestä! Oli kiva nähdä. Nähdään pian!' },
        ],
      },
      {
        id: 'd3',
        titleFi: 'Onnittelet ystävää uudesta työpaikasta',
        titleEn: 'Calling to congratulate',
        turns: [
          { speaker: 'Ystävä', fi: '[Vastaat puheluun ja ystävä kuulee sinut]', en: 'You call and friend answers', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Hei! Täällä on [nimesi]. Soitan onnitellakseni sinua!' },
          { speaker: 'Ystävä', fi: '[Ystävä vastaa]', en: 'Friend responds', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Kuulin, että sait uuden työpaikan! Onneksi olkoon!' },
          { speaker: 'Ystävä', fi: '[Ystävä kiittää ja kommentoi]', en: 'Friend thanks and comments', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Millainen se uusi työ on? Mistä pidät siitä?' },
          { speaker: 'Ystävä', fi: '[Ystävä vastaa]', en: 'Friend responds', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Hyvä kuulla! Milloin voin soittaa sinulle uudelleen jutellakseni lisää?' },
          { speaker: 'Ystävä', fi: '[Ystävä vastaa]', en: 'Friend responds', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Selvä! Otan yhteyttä myöhemmin. Nähdään!' },
        ],
      },
      {
        id: 'd4',
        titleFi: 'Miten pukeutua hienoihin juhliin',
        titleEn: 'Dressing for formal parties',
        turns: [
          {
            speaker: 'Työkaveri',
            fi: 'Moi! Paniikki, auta! Ne firman juhlat… siinä kutsussa lukee, että tumma puku. Mä katoin Googlesta, että se tarkoittaa ihan parhaat vaatteet, mitä on. Mitä sä aiot laittaa päälle?',
          },
          { speaker: 'Sinä', fi: 'Mä aion laittaa pitkän iltapuvun ja korkokengät.' },
          { speaker: 'Työkaveri', fi: 'Voi ei! Niin just. Naisilla se tarkoittaa pitkää iltapukua ja ei mulla edes ole sellaista. Voinkohan mä laittaa ton lyhyen mekon?' },
          { speaker: 'Sinä', fi: 'Kyllä lyhyt mekkokin voi sopia, mutta tumma puku tarkoittaa yleensä juhlavampaa tyyliä.' },
          {
            speaker: 'Työkaveri',
            fi: 'Niin no, niin. En kuitenkaan haluais olla sitten ihan alipukeutunut. Täytyy näyttää, että kunnioittaa. Pakko varmaan lähteä ostoksille. Onneksi on vielä aikaa. Mutta mä en tunne tätä kaupunkia. Kerro mulle, mistä mä voisin mennä ostamaan sellaisen iltapuvun?',
          },
          { speaker: 'Sinä', fi: 'Suosittelen käymään Forumissa tai Stockmannilla. Siellä on hyvä valikoima iltapukuja.' },
          { speaker: 'Työkaveri', fi: 'No se kuulostaa hyvältä! Mä kokeilen sitä. Tuletko mukaan makutuomariksi? Kerrot, jos mä näytän ihan kamalalta niissä vaatteissa.' },
          { speaker: 'Sinä', fi: 'Totta kai! Voin tulla mukaan. Miten olisi lauantaina?' },
          { speaker: 'Työkaveri', fi: 'Okei, mut kiitos sulle! Nyt pitää mennä.' },
          { speaker: 'Sinä', fi: 'Eipä kestä! Tsemppiä ostoksille!' },
        ],
      },
      {
        id: 'd5',
        titleFi: 'Ystävä näyttää väsyneeltä',
        titleEn: 'Friend looks tired',
        turns: [
          { speaker: 'Ystävä', fi: '[Ystävä tulee sisään näyttäen väsyneeltä]', en: 'Friend enters, looking tired', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Hei! Sinä näytät todella väsyneeltä. Onko kaikki hyvin?' },
          { speaker: 'Ystävä', fi: '[Ystävä selittää]', en: 'Friend explains', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Sinun pitäisi nukkua enemmän. Kokeile mennä aikaisemmin nukkumaan ja vältä puhelinta ennen nukkumaanmenoa.' },
          { speaker: 'Ystävä', fi: '[Ystävä vastaa]', en: 'Friend responds', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Entä oletko kokeillut jotain rentoutumistekniikkaa? Meditaatio tai jooga voi auttaa.' },
          { speaker: 'Ystävä', fi: '[Ystävä vastaa]', en: 'Friend responds', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Voin auttaa sinua! Mennään vaikka yhdessä kävelylle tai voin tehdä sinulle rentouttavan teen.' },
        ],
      },
      {
        id: 'd6',
        titleFi: 'Tapaat uuden ihmisen',
        titleEn: 'Meeting someone new, not interested',
        turns: [
          { speaker: 'Tuttava', fi: '[Tapaamisen jälkeen]', en: 'After meeting', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Kiitos tapaamisesta. Oli kiva tavata.' },
          { speaker: 'Tuttava', fi: '[Tuttava ehdottaa uutta tapaamista]', en: 'Acquaintance suggests meeting again', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Kiitos kutsusta, mutta valitettavasti minulla on hyvin kiireistä juuri nyt.' },
          { speaker: 'Tuttava', fi: '[Tuttava painostaa]', en: 'Acquaintance insists', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'En valitettavasti voi tavata enää. Olen todella kiireinen töiden kanssa.' },
          { speaker: 'Tuttava', fi: '[Tuttava näyttää pettyneeltä]', en: 'Acquaintance looks disappointed', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Olet kyllä mukava ihminen, mutta minun elämäntilanne on nyt sellainen, että en ehdi tapaamaan uusia ihmisiä. Toivottavasti ymmärrät.' },
        ],
      },
      {
        id: 'd7',
        titleFi: 'Ystävä on eronnut',
        titleEn: 'Friend has broken up',
        turns: [
          { speaker: 'Ystävä', fi: 'Nyt se sitten tapahtui. Viikonloppuna Markku pakkas kamat ja lähti.' },
          { speaker: 'Sinä', fi: 'Voi ei! Olen niin pahoillani. Tämä on varmasti todella vaikeaa.' },
          {
            speaker: 'Ystävä',
            fi: 'No eihän tää yllätyksenä tullut. Onhan tää meidän suhde ollut jo kauan vähän on-off, mutta kyllä se silti sitten järkyttää, kun toinen lähtee.',
          },
          { speaker: 'Sinä', fi: 'Miten sinä voit nyt? Haluatko puhua asiasta?' },
          { speaker: 'Ystävä', fi: 'No suoraan sanoen ei kovin hyvältä tunnu. Nukuin tosi huonosti viime yönä, eikä itkusta tuu loppua.' },
          { speaker: 'Sinä', fi: 'Haluatko, että tulen luoksesi? Voimme jutella tai vain olla hiljaa yhdessä.' },
          { speaker: 'Ystävä', fi: 'Kiitos, se ois tosi kiva. On mun kuitenkin pakko jaksaa ihan jo lastenkin takia.' },
          { speaker: 'Sinä', fi: 'Entä lapset? Miten he voivat? Millaista heillä on?' },
          {
            speaker: 'Ystävä',
            fi: 'No ihan varmaksi me ei vielä sovittu, mutta kai ne sitten on viikon mun kanssa ja viikon isänsä kanssa. Markun pitää nyt vaan ensin löytää sellanen kämppä, että lapsetkin mahtuu sinne.',
          },
          { speaker: 'Sinä', fi: 'Minun täytyy nyt valitettavasti mennä, mutta soitan sinulle myöhemmin. Jaksamista!' },
          { speaker: 'Ystävä', fi: 'Joo ei haittaa. Kiitos, että kuuntelit.' },
          { speaker: 'Sinä', fi: 'Ole hyvä. Otan yhteyttä pian. Pidä huolta itsestäsi!' },
        ],
      },
      {
        id: 'd8',
        titleFi: 'Kutsut ystävän juhliin',
        titleEn: 'Inviting a friend to a party',
        turns: [
          { speaker: 'Ystävä', fi: '[Ystävä vastaa]', en: 'Friend answers', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Hei! Soitin, koska haluan kutsua sinut syntymäpäiväjuhliini.' },
          {
            speaker: 'Ystävä',
            fi: 'Oho! Vau! Kiitos kutsusta, kuulostaa hauskalta ja totta kai tuun, jos vaan pääsen. Missä ja milloin sä meinaat pitää nää juhlat?',
          },
          { speaker: 'Sinä', fi: 'Juhlat ovat ensi lauantaina kello 18.00 minun luonani.' },
          { speaker: 'Ystävä', fi: 'Joo, ei ainakaan nyt heti tuu mieleen, että olis joku este, että enköhän mä pääse. Milloin sä tarviiit vahvistuksen, että pääsenkö vai en?' },
          { speaker: 'Sinä', fi: 'Voisitko ilmoittaa viimeistään keskiviikkona?' },
          { speaker: 'Ystävä', fi: 'Selvä. Entä onko sulla jotain lahjatoiveita?' },
          { speaker: 'Sinä', fi: 'Ei ole erityisiä toiveita. Tärkeintä on, että tulet paikalle!' },
          { speaker: 'Ystävä', fi: 'Hahaa, selvä juttu! Entä voisinko mä auttaa sua jotenkin juhlien järjestelyissä?' },
          { speaker: 'Sinä', fi: 'Kiitos tarjouksesta, mutta kaikki on jo järjestetty. Kiitos kuitenkin!' },
          { speaker: 'Ystävä', fi: 'Kiitos paljon kutsusta vielä ja nähdään pian!' },
          { speaker: 'Sinä', fi: 'Kiitos, että tulet! Nähdään lauantaina!' },
        ],
      },
      {
        id: 'd9',
        titleFi: 'Tarjous keittiöremontista',
        titleEn: 'Calling for a kitchen renovation quote',
        turns: [
          { speaker: 'Myyjä', fi: '[Myyjä vastaa]', en: 'Salesperson answers', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Hei! Soitan kysyäkseni tarjousta keittiöremontista.' },
          { speaker: 'Myyjä', fi: '[Myyjä kysyy lisätietoja]', en: 'Salesperson asks for details', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Haluaisin remontoida keittiön kokonaan. Uudet kaapit, työtasot ja kodinkoneet.' },
          { speaker: 'Myyjä', fi: '[Myyjä ehdottaa aikaa]', en: 'Salesperson offers a time', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Milloin voisitte tulla katsomaan ja antamaan tarjouksen?' },
          { speaker: 'Myyjä', fi: '[Myyjä ehdottaa päivämäärää]', en: 'Salesperson suggests a date', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Valitettavasti se aika ei sovi. Entä ensi maanantaina kello 14?' },
          { speaker: 'Myyjä', fi: '[Myyjä suostuu]', en: 'Salesperson agrees', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Mahtavaa. Voisitteko kertoa suunnilleen, paljonko remontti maksaa?' },
          { speaker: 'Myyjä', fi: '[Myyjä antaa arvion]', en: 'Salesperson gives estimate', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Selvä, se kuulostaa hyvältä. Nähdään maanantaina.' },
          { speaker: 'Myyjä', fi: '[Myyjä sanoo hyvästit]', en: 'Salesperson says goodbye', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Kiitos ja nähdään!' },
        ],
      },
      {
        id: 'd10',
        titleFi: 'Paketin nouto',
        titleEn: 'Package delivery',
        turns: [
          { speaker: 'Lähetti', fi: 'Lähettipalvelu Jokinen, miten voin auttaa?' },
          { speaker: 'Sinä', fi: 'Hei! Tässä [nimesi]. Soitan paketista, jota en saanut.' },
          { speaker: 'Lähetti', fi: 'Vai niin, sanotko sun nimen ja osoitteen, niin katson täältä?' },
          { speaker: 'Sinä', fi: 'Minun nimeni on [nimi] ja asun [osoite].' },
          {
            speaker: 'Lähetti',
            fi: 'Selvä, kyllä löytyi. Joo, teillä on tuollainen vähän isompi paketti täällä ja ei mahdu postiluukusta, joten pitäisi olla kotona ottamassa sitä vastaan. Milloin voisimme toimittaa paketin?',
          },
          { speaker: 'Sinä', fi: 'Olen kotona huomenna kello 16 jälkeen. Voitteko tulla sitten?' },
          { speaker: 'Lähetti', fi: 'Juu ja, eiköhän se onnistu. Ja saako tästä numerosta kiinni ennen toimitusta?' },
          { speaker: 'Sinä', fi: 'Kyllä, tähän numeroon saa soittaa.' },
          { speaker: 'Lähetti', fi: 'Selvä homma. Mepä laitetaan paketti uudelleen matkaan.' },
          { speaker: 'Sinä', fi: 'Kiitos! Nähdään huomenna.' },
        ],
      },
      {
        id: 'd11',
        titleFi: 'Naapuri valitti metelistä',
        titleEn: 'Neighbor complained about noise',
        turns: [
          { speaker: 'Sinä', fi: '[Vastaat puhelimeen]', en: 'You answer the phone', isPlaceholder: true },
          {
            speaker: 'Isännöitsijä',
            fi: 'No isännöitsijä Virtanen täällä, terve. Lähdin soittelemaan, kun naapuri on valitellut teiltä toissapäivänä tulleesta metelistä. Oliko teillä jonkinlaiset juhlat siellä?',
          },
          { speaker: 'Sinä', fi: '[Vastaat kysymykseen]', en: 'You respond', isPlaceholder: true },
          { speaker: 'Isännöitsijä', fi: 'Joo, ymmärrän. Mihin aikaan teidän vieraat lähti?' },
          { speaker: 'Sinä', fi: '[Vastaat kysymykseen]', en: 'You respond', isPlaceholder: true },
          { speaker: 'Isännöitsijä', fi: 'Naapurin mukaan meteli oli jatkunut aamuviiteen asti. Mitäs olette siitä mieltä?' },
          { speaker: 'Sinä', fi: '[Olet eri mieltä]', en: 'You disagree', isPlaceholder: true },
          { speaker: 'Isännöitsijä', fi: 'Niin, minun on tietysti vaikea tietää, mikä on totuus. Onko teillä ollut jotain riitaa aiemmin naapurin kanssa?' },
          { speaker: 'Sinä', fi: '[Vastaat kysymykseen]', en: 'You respond', isPlaceholder: true },
          { speaker: 'Isännöitsijä', fi: 'Joo ja oliko teillä vuokra- vai omistusasunto?' },
          { speaker: 'Sinä', fi: '[Vastaat kysymykseen]', en: 'You respond', isPlaceholder: true },
          {
            speaker: 'Isännöitsijä',
            fi: 'No niin. Ei tästä nyt tällä kertaa tule kuin varoitus, mutta voisitteko ensi kerralla laittaa vaikka ilmoituksen käytävään ennen juhlia, niin säilyy sitten naapurirauha paremmin.',
          },
          { speaker: 'Sinä', fi: 'Kiitos. Kyllä, voimme tehdä niin. Pahoittelut metelistä.' },
          { speaker: 'Isännöitsijä', fi: 'Hyvä juttu. Kiitoksia ja hyvää päivänjatkoa.' },
        ],
      },
    ],
    reactions: [
      {
        id: 'r1',
        scenarioFi: 'Sinun kaukainen ystävä / sukulainen tulee sinun luoksesi ensimmäisen kerran. Kerro naapurille, mitä aiot näyttää hänelle sinun kotikaupungissasi.',
        scenarioEn: 'A distant friend/relative is visiting you for the first time. Tell your neighbor what you plan to show them in your hometown.',
        sampleFi:
          'Hei naapuri! Mun ystävä tulee käymään ensi viikolla. Aion näyttää hänelle Helsingin keskustan, Senaatintorin, Tuomiokirkon ja tietysti Kauppatorin. Viedään hänet myös Suomenlinnaan, jos sää on hyvä.',
      },
      {
        id: 'r2',
        scenarioFi: 'Sinun naapurin oven takana käy joku, mutta naapuri ei ole kotona. Kerro naapurille, miltä vieras näytti.',
        scenarioEn: "Someone visits your neighbor's door, but the neighbor isn't home. Tell the neighbor what the visitor looked like.",
        sampleFi:
          'Hei naapuri! Sinun ovellasi kävi eilen iltapäivällä nuori mies. Hänellä oli sininen takki ja hän kantoi isoa ruskeaa kirjekuorta. En tunnistanut häntä, mutta halusin kertoa.',
      },
      {
        id: 'r3',
        scenarioFi: 'Näet kadulla, että kaksi poikaa kiusaa koulukaveria. Mene väliin ja kerro pojille, miksi ei saa kiusata.',
        scenarioEn: 'You see two boys bullying a classmate on the street. Step in and tell them why bullying is wrong.',
        sampleFi:
          'Hei pojat! Lopettakaa heti! Kiusaaminen ei ole oikein. Jokaisella on oikeus olla rauhassa. Miten teistä tuntuisi, jos joku kiusaisi teitä? Menkää pois ja jättäkää hänet rauhaan.',
      },
      {
        id: 'r4',
        scenarioFi: 'Ystäväsi kertoo, että hänen isänsä on kuollut. Ystävä on todella surullinen. Mitä sanot?',
        scenarioEn: "Your friend tells you their father has died. What do you say?",
        sampleFi:
          'Voi ei! Olen niin pahoillani. Sydämeni on murtunut puolestasi. Olen täällä sinua varten. Jos haluat puhua, olen valmis kuuntelemaan. Voimme myös vain olla hiljaa yhdessä.',
      },
      {
        id: 'r5',
        scenarioFi: 'Olet ystävän luona kylässä. Ystävä tarjoaa sinulle ruokaa tai juomaa, jota et voi syödä / juoda. Kieltäydy kohteliaasti.',
        scenarioEn: "You're visiting a friend. They offer you food or drink you can't have. Decline politely.",
        sampleFi:
          'Kiitos tarjouksesta! Valitettavasti en voi syödä tätä, koska olen allerginen pähkinöille. Onko sinulla jotain muuta? Jos ei, se on ihan ok, otan vain vettä.',
      },
      {
        id: 'r6',
        scenarioFi: 'Ystävä tulee sinun luo kylään. Hänellä on sinulle todella iso ja kallis lahja. Mitä sanot?',
        scenarioEn: 'A friend visits with a very big, expensive gift for you. What do you say?',
        sampleFi:
          'Vau! Tämä on aivan liian paljon! Sinun ei olisi pitänyt. Olen todella kiitollinen, mutta tämä on liian kallis lahja. Olet todella ystävällinen. Kiitos paljon!',
      },
      {
        id: 'r7',
        scenarioFi: 'Sinulla ja ystävälläsi oli edellisenä päivänä riitaa jostain pienestä asiasta. Soitat ystävällesi ja haluat sopia. Jätä ääniviesti ystävälle.',
        scenarioEn: 'You had a small argument with a friend yesterday. Leave them a voicemail to make up.',
        sampleFi:
          'Hei, tässä [nimi]. Soitan, koska haluan pyytää anteeksi eilistä riitaa. Olin todella tyhmä ja pahoittelen käytöstäni. Toivottavasti voit antaa anteeksi. Haluaisin sopia asian. Soita minulle, kun voit.',
      },
      {
        id: 'r8',
        scenarioFi: 'Sinun auto on mennyt rikki ja tarvitset kyydin ystävältä.',
        scenarioEn: 'Your car has broken down and you need a ride from a friend.',
        sampleFi:
          'Hei! Anteeksi, että häiritsen. Mun auto on mennyt rikki ja mulla olisi tärkeä tapaaminen huomenna kello 10. Pääsisitkö viemään minut sinne? Ymmärrän, jos et ehdi.',
      },
      {
        id: 'r9',
        scenarioFi: 'Näet kaupungilla vanhan ystäväsi, jota et ole nähnyt pitkään aikaan. Mitä sanot hänelle?',
        scenarioEn: "You see an old friend downtown you haven't seen in a long time. What do you say?",
        sampleFi: 'Hei! Onko se sinä? Voi kun ihana nähdä! Miten sinulla menee? Niin kauan aikaa! Mitä sinulle kuuluu? Oletko muuttanut? Onko kaikki hyvin?',
      },
      {
        id: 'r10',
        scenarioFi: 'Työkaverisi kutsuu sinut kylään. Et halua mennä. Kieltäydy kohteliaasti ja kerro syy.',
        scenarioEn: "A colleague invites you over. You don't want to go. Decline politely and give a reason.",
        sampleFi: 'Kiitos kutsusta! Valitettavasti minulla on jo menoa sinä päivänä. Toivottavasti voimme tavata toisen kerran. Hauskaa iltaa teille!',
      },
      {
        id: 'r11',
        scenarioFi: 'Pieni lapsi itkee yksin kaupan parkkipaikalla. Et näe vanhempia. Mitä sanot hänelle?',
        scenarioEn: "A small child is crying alone in a parking lot. You don't see their parents. What do you say?",
        sampleFi:
          'Hei pieni! Miksi itket? Oletko eksynyt? Älä huoli, mä autan sinua. Mikä sinun nimesi on? Mennään yhdessä etsimään sinun vanhempiasi. Oletko nähnyt, mihin suuntaan he menivät?',
      },
      {
        id: 'r12',
        scenarioFi: 'Ystäväsi on tänään todella kaunis / komea ja pukeutunut hyvin. Kehu häntä.',
        scenarioEn: 'Your friend looks great and well-dressed today. Compliment them.',
        sampleFi: 'Vau! Sinä näytät tänään todella upealta! Tämä asu sopii sinulle täydellisesti. Oletpa sinä tyylikäs! Tämä väri on juuri sinun värisi.',
      },
      {
        id: 'r13',
        scenarioFi: 'Haluat kertoa jollekin, kuinka tärkeä hän on sinulle. Kerro myös, miksi hän on sinulle tärkeä.',
        scenarioEn: 'You want to tell someone how important they are to you, and why.',
        sampleFi:
          'Haluan sanoa, että olet todella tärkeä minulle. Olet aina tukenani ja olen saanut sinulta paljon iloa. Sinun kanssasi on helppo puhua ja naurua riittää. Kiitos, että olet olemassa.',
      },
      {
        id: 'r14',
        scenarioFi: 'Olet kuullut, että ystäväsi on puhunut sinusta pahaa selän takana. Mitä sanot hänelle?',
        scenarioEn: 'You heard your friend talked badly about you behind your back. What do you say?',
        sampleFi: 'Hei, olen kuullut, että olet puhunut minusta pahaa muille. Se satuttaa minua. Miksi teit niin? Olisit voinut puhua suoraan minulle. Toivottavasti voit selittää.',
      },
      {
        id: 'r15',
        scenarioFi: 'Ystäväsi kertoo, että hän saa pian lapsen.',
        scenarioEn: "Your friend tells you they're expecting a baby.",
        sampleFi: 'Voi, onneksi olkoon! Tämä on ihana uutinen! Olen todella iloinen puolestasi. Milloin vauva syntyy? Tiedättekö jo sukupuolta? Olet varmasti loistava vanhempi.',
      },
      {
        id: 'r16',
        scenarioFi: 'Ystäväsi on sairastunut vakavasti.',
        scenarioEn: 'Your friend has become seriously ill.',
        sampleFi: 'Voi ei! Olen todella pahoillani kuullessani tämän. Haluan tukea sinua. Onko sinulla kaikki hyvin? Tarvitsetko apua jossain? Olen täällä sinua varten.',
      },
      {
        id: 'r17',
        scenarioFi: 'Menet häihin, mutta unohdit ostaa häälahjan. Mitä sanot hääparille?',
        scenarioEn: "You go to a wedding but forgot to buy a gift. What do you say to the couple?",
        sampleFi: 'Onneksi olkoon! Olen todella iloinen puolestanne. Anteeksi, että unohdin lahjan kotiin. Toimitan sen teille viikonloppuna. Nauttikaa juhlasta!',
      },
      {
        id: 'r18',
        scenarioFi:
          'Sinun ystävä on kutsunut sinut juhannuksena hänen mökille. Et tiedä, mitä pitää pakata mukaan. Kysy neuvoa työkaverilta.',
        scenarioEn: "A friend invited you to their summer cottage for Midsummer. You don't know what to pack. Ask a colleague for advice.",
        sampleFi:
          'Hei! Mulla olis pieni kysymys. Mun ystävä on kutsunut mut juhannuksena mökille. En oo koskaan ollut mökillä Suomessa. Mitä mun pitäis pakata mukaan? Onko siellä hyttysiä? Pitääkö ottaa omat lakanat?',
      },
    ],
    longSpeaking: [
      {
        id: 'k-a',
        titleFi: 'Sitä ihmistä en unohda',
        titleEn: 'That person I will never forget',
        instructionsFi: 'Kerro ihmisestä, jota et koskaan unohda. Miksi et voi unohtaa häntä? Missä tutustuitte? Mitä tapahtui?',
        sampleFi:
          'Eräs ihminen, jota en koskaan unohda, on minun äidinkielenopettajani lukiossa. Hän oli nimeltään Raija. Tutustuin häneen, kun aloitin lukion. Hän oli aina kannustava ja uskoi minuun, vaikka en itse aina uskonut. Eräänä päivänä sain huonon arvosanan kokeesta, ja olin todella masentunut. Raija kutsui minut juttelemaan ja sanoi, että uskoo minun pystyvän parempaan. Hän antoi minulle lisätehtäviä ja auttoi minua. Lopulta sain hyvän arvosanan ja pääsin unelmaopistoon. En koskaan unohda häntä, koska hän muutti elämäni suuntaa.',
      },
      {
        id: 'k-b',
        titleFi: 'Riita puhdistaa ilmaa',
        titleEn: 'A fight clears the air',
        instructionsFi:
          'Miten sinä riitelet? Kenen kanssa riitelet? Mistä asioista? Onko sinun mielestä riita hyvä vai huono asia? Miksi? Mistä tietää, että sinä olet vihainen? Mistä asioista sinä suutut? Miksi?',
        sampleFi:
          'Minä riitelen harvoin, mutta kun riitelen, se johtuu yleensä siitä, että joku on epärehellinen tai epäoikeudenmukainen. Riitelen eniten perheenjäsenten kanssa, koska he ovat lähellä minua. Mielestäni riita on joskus hyvä asia, koska se puhdistaa ilmaa ja asiat tulevat selviksi. Tietysti riita on huono asia, jos siinä satutetaan toista. Kun olen vihainen, minulla on kireä olo ja en pysty puhumaan rauhallisesti. Suutun erityisesti siitä, jos joku valehtelee minulle tai puhuu pahaa selän takana.',
      },
      {
        id: 'k-c',
        titleFi: 'Minä ja pukeutumiseni',
        titleEn: 'Me and my dressing',
        instructionsFi:
          'Miten sinä pukeudut? Onko sinulla oma tyyli? Seuraatko muotia? Miksi / miksi et? Mihin olet tyytyväinen ulkonäössäsi? Mihin et? Olisitko valmis menemään kauneusleikkaukseen? Miksi / miksi et?',
        sampleFi:
          'Minä pukeudun yleensä rennosti ja mukavasti. Tykkään käyttää farkkuja, neuleita ja lenkkareita. Minulla on oma tyyli, mutta en seuraa muotia aktiivisesti. Ostan vaatteita, jotka näyttävät hyvältä ja tuntuvat mukavalta. Olen tyytyväinen ulkonäkööni, vaikka toivoisin olevani vähän pidempi. En ole valmis menemään kauneusleikkaukseen, koska mielestäni jokainen on kaunis omalla tavallaan. Ulkonäkö ei ole tärkein asia elämässä.',
      },
      {
        id: 'k-d',
        titleFi: 'Kerro ystäväsi tai sukulaisesi elämästä',
        titleEn: "Tell about a friend's or relative's life",
        instructionsFi:
          'Kerro esimerkiksi: Missä ja milloin hän on syntynyt? Millainen lapsuus hänellä oli? Mitä hän teki nuorena / aikuisena? Missä hän on nyt? Miksi halusit kertoa hänestä?',
        sampleFi:
          'Haluan kertoa minun isoäidistäni. Hän syntyi 1950-luvulla maaseudulla Pohjois-Suomessa. Hänen lapsuutensa oli vaatimaton, ja hän joutui auttamaan maatilan töissä koulun jälkeen. Nuorena hän muutti kaupunkiin opiskelemaan sairaanhoitajaksi. Aikuisena hän työskenteli sairaalassa yli 30 vuotta. Hän tapasi isoisäni sairaalassa ja he menivät naimisiin. He saivat kolme lasta. Nyt isoäiti on eläkkeellä, mutta hän on edelleen aktiivinen ja auttaa lapsenlapsiaan. Halusin kertoa hänestä, koska hän on esikuva minulle. Hän on aina auttanut muita ja ollut ystävällinen kaikille.',
      },
    ],
    opinions: [
      {
        id: 'm-a',
        titleFi: 'Suomalaiset juhlat ovat tylsiä',
        titleEn: 'Finnish parties are boring',
        instructionsFi: 'Mitä mieltä olet suomalaisista juhlista? Mitä suomalaisissa juhlissa tehdään? Miksi ne ovat / eivät ole tylsiä?',
        sampleFi:
          'Mielestäni suomalaiset juhlat eivät ole tylsiä. Niissä on paljon hyvää ruokaa, juomaa ja seuraa. Suomalaisissa juhlissa syödään, juodaan, jutellaan ja usein myös lauletaan. Esimerkiksi syntymäpäivillä ja häissä on aina mahtavat tarjoilut. Tietysti suomalaiset voivat olla aluksi vähän ujoja, mutta kun tunnelma lämpenee, juhlista tulee hauskoja. Jos vertaa suomalaisia juhlia muihin maihin, ne voivat olla rauhallisempia, mutta se ei tarkoita, että ne olisivat tylsiä. Itse pidän suomalaisista juhlista, koska niissä on lämmin tunnelma ja ihmiset ovat aitoja.',
      },
      {
        id: 'm-b',
        titleFi: 'Syntymäpäivää ei saa unohtaa',
        titleEn: 'Birthday must not be forgotten',
        instructionsFi:
          'Onko syntymäpäivä sinun mielestä tärkeä juhla? Miksi / miksi ei? Kenen syntymäpäivää et varmasti unohda? Millaisen lahjan ostat sinun läheisille syntymäpäivänä?',
        sampleFi:
          'Mielestäni syntymäpäivä on tärkeä juhla, koska se on yksi päivä vuodesta, jolloin voi juhlistaa omaa elämää. On mukava saada onnitteluja ja viettää aikaa perheen ja ystävien kanssa. Tietysti aikuisena syntymäpäivä ei ole niin jännittävä kuin lapsena, mutta silti se on tärkeä päivä. En varmasti unohda äitini ja isäni syntymäpäiviä, koska he ovat minulle tärkeitä. Ostan yleensä lahjaksi jotain henkilökohtaista, kuten kirjan, käsityön tai elämyslahjan, esimerkiksi hieronnan tai teatteriliput.',
      },
      {
        id: 'm-c',
        titleFi: 'Paras tapa asua',
        titleEn: 'The best way to live',
        instructionsFi: 'Mikä on mielestäsi paras tapa asua: omakotitalo, rivitalo, kerrostalo? Miksi? Kumpi on parempi? Omistus- vai vuokra-asunto? Miksi?',
        sampleFi:
          'Mielestäni paras tapa asua on omakotitalo, koska siinä on omaa rauhaa ja tilaa. Omakotitalossa on piha, jossa voi istua kesällä ja lapset voivat leikkiä. Toki omakotitalossa on enemmän työtä: pihan hoito, lumenluonti ja remontit. Rivitalo on hyvä kompromissi, koska siinä on vähän omaa pihaa mutta vähemmän ylläpitoa. Kerrostalossa asuminen on helppoa, mutta naapurit voivat olla äänekkäitä. Omistusasunto on parempi, koska se on oma sijoitus. Vuokra-asunnossa vuokra nousee usein ja raha menee hukkaan. Omistusasunnossa voi tehdä remontteja ja muuttaa asuntoa haluamakseen.',
      },
      {
        id: 'm-d',
        titleFi: 'Hyvä parisuhde vaatii töitä',
        titleEn: 'A good relationship requires work',
        instructionsFi:
          'Millainen on hyvä parisuhde? Miten voi pitää huolta parisuhteesta? Millainen on ideaali puoliso? Millaisia asioita rakkaassasi rakastat / inhoat / siedät / toivot / haluat?',
        sampleFi:
          'Hyvä parisuhde perustuu luottamukseen, kunnioitukseen ja avoimeen viestintään. Parisuhteessa pitää puhua asioista, myös vaikeista. On tärkeää viettää aikaa yhdessä, mutta myös antaa tilaa toiselle. Ideaali puoliso on ymmärtäväinen, luotettava, huumorintajuinen ja kannustava. Rakastan kumppanissani hänen lempeyttään, älykkyyttään ja huumorintajua. Joskus voin inhota sitä, että hän on liian itsepäinen, mutta siedän sitä, koska kukaan ei ole täydellinen. Toivon, että meillä on tulevaisuudessa enemmän aikaa yhdessä ja haluan, että meillä on hyvä ja onnellinen elämä yhdessä.',
      },
      {
        id: 'm-e',
        titleFi: 'Onnellisuus on oma valinta',
        titleEn: 'Happiness is a choice',
        instructionsFi:
          'Kuinka paljon ihminen voi itse vaikuttaa siihen, onko hän onnellinen vai ei? Mitä asioita ihminen ei voi itse muuttaa? Voiko positiivinen ajattelu muuttaa ihmisen? Miten? Miksi / miksi ei?',
        sampleFi:
          'Mielestäni ihminen voi vaikuttaa onnellisuuteensa aika paljon. Valitsemme asenteemme ja sen, miten suhtaudumme asioihin. Tietysti on asioita, joita emme voi muuttaa, kuten menneisyys, sairaudet tai se, miten muut kohtelevat meitä. Mutta me voimme valita, miten reagoimme näihin asioihin. Positiivinen ajattelu voi todella muuttaa ihmisen. Kun ajattelee positiivisesti, näkee enemmän mahdollisuuksia ja on helpompi selviytyä haasteista. Tietysti positiivinen ajattelu ei poista ongelmia, mutta se auttaa selviytymään niistä. Onnellisuus ei ole vain sitä, että kaikki on hyvin, vaan sitä, että osaa nauttia pienistä asioista.',
      },
      {
        id: 'm-f',
        titleFi: 'Sosiaalinen media pilaa ihmissuhteet',
        titleEn: 'Social media ruins relationships',
        instructionsFi:
          'Ihmiset viettävät aikaa enemmän sosiaalisessa mediassa kuin ystävien ja perheen kanssa. Ihmiset ovat yhdessä, mutta katsovat puhelinta. Miten sosiaalinen media muuttaa ystävyyttä ja ihmissuhteita? Mitä hyviä ja huonoja puolia siinä on?',
        sampleFi:
          'Sosiaalisella medialla on sekä hyviä että huonoja puolia. Se voi yhdistää ihmisiä, jotka asuvat kaukana toisistaan. On helppo pitää yhteyttä vanhoihin ystäviin ja sukulaisiin. Kuitenkin sosiaalinen media voi viedä aikaa oikeilta ihmissuhteilta. Ihmiset istuvat samassa huoneessa, mutta katsovat kännykkää eivätkä puhu toisilleen. Tämä on huono asia, koska oikea keskustelu on tärkeää. Sosiaalinen media voi myös aiheuttaa mustasukkaisuutta ja vertailua. Näemme vain toisten onnellisia hetkiä, emme arkea. Ystävyys voi kärsiä, jos luulemme tietävämme kaiken toisen elämästä some-postauksista, mutta emme oikeasti ole läsnä. Mielestäni sosiaalista mediaa pitäisi käyttää kohtuudella ja muistaa viettää aikaa oikeasti yhdessä.',
      },
      {
        id: 'm-g',
        titleFi: 'Käytännöllisyys on muotia tärkeämpää',
        titleEn: 'Practicality is more important than fashion',
        instructionsFi: 'Kumpi on sinulle tärkeämpää: tyyli vai mukavuus? Miksi? Mikä sinulle on tärkeää, kun ostat uusia vaatteita? Voiko talvella olla tyylikäs? Miten?',
        sampleFi:
          'Minulle mukavuus on tärkeämpää kuin tyyli. En jaksa käyttää vaatteita, jotka ovat epämukavia. Kun ostan uusia vaatteita, katson ensin materiaalia ja istuvuutta. Vaatteiden pitää olla mukavia ja sopia omaan tyyliin. Hinta on myös tärkeä tekijä. Talvella voi kyllä olla tyylikäs! Suomessa talvella pitää pukeutua lämpimästi, mutta se ei tarkoita rumasti. Nykyään on paljon kauniita talvitakkeja, neuleita ja asusteita. Hyvät kengät, tyylikäs pipo ja kaunis huivi tekevät talviasusta tyylikkään. Tärkeintä on, että vaatteet ovat lämpimät, mutta ne voivat myös näyttää hyvältä.',
      },
      {
        id: 'm-h',
        titleFi: 'Suomalaiset eivät osaa pukeutua',
        titleEn: "Finns don't know how to dress",
        instructionsFi:
          'Suomalaisia on joskus haukuttu "tuulipukukansaksi". Miten suomalaiset sinun mielestä pukeutuvat? Miten suomalaiset pukeutuvat muihin maihin verrattuna? Minkä maalaiset sinun mielestä pukeutuvat parhaiten? Miksi?',
        sampleFi:
          'Mielestäni suomalaiset pukeutuvat käytännöllisesti, mutta eivät rumasti. Suomessa sää on usein kylmä ja sateinen, joten on ymmärrettävää, että ihmiset pukeutuvat lämpimästi. Tuulipuvut ovat käteviä erityisesti lapsille ja ulkoiluun. Vertailuna muihin maihin, esimerkiksi Keski-Euroopassa ihmiset pukeutuvat usein tyylikkäämmin arkenakin. Suomalaiset pukeutuvat rennommin. Mielestäni italialaiset ja ranskalaiset pukeutuvat parhaiten, koska he ymmärtävät tyylin, värien ja asusteiden merkityksen. He osaavat yhdistellä vaatteita kauniisti. Mutta suomalaistenkin pukeutuminen on muuttunut, ja nykyään nuoret seuraavat muotia enemmän.',
      },
      {
        id: 'm-i',
        titleFi: 'Ihmiset stressaavat turhaan, miltä he näyttävät',
        titleEn: 'People stress unnecessarily about their appearance',
        instructionsFi:
          'Onko sillä väliä, mitä sinulla on päällä tai miltä näytät? Miksi / miksi ei? Mitä ongelmia voi tulla, jos miettii liian paljon ulkonäköä tai jos ei mieti?',
        sampleFi:
          'Mielestäni ulkonäöllä on väliä, mutta ei liikaa. On tärkeää pitää itsestään huolta ja pukeutua siististi, mutta ei kannata stressata liikaa. Jokainen on kaunis omalla tavallaan. Jos miettii liikaa ulkonäköä, voi tulla ahdistusta, syömishäiriöitä tai itsetunto-ongelmia. Voi olla vaikea nauttia elämästä, jos on koko ajan huolissaan siitä, miltä näyttää. Toisaalta, jos ei mieti ulkonäköä ollenkaan, voi vaikuttaa huolimattomalta. Tärkeintä on löytää tasapaino. Hyvä ulkonäkö voi antaa itsevarmuutta, mutta todellinen kauneus tulee sisältä.',
      },
      {
        id: 'm-j',
        titleFi: 'Sukulaiset ovat tärkeämpiä kuin ystävät',
        titleEn: 'Relatives are more important than friends',
        instructionsFi: 'Suomeksi sanotaan "Veri on vettä sakeampaa." Se tarkoittaa, että sukulaiset ovat tärkeämpiä kuin ystävät. Mitä mieltä olet?',
        sampleFi:
          'Tämä on vaikea kysymys. Sanonta "veri on vettä sakeampaa" tarkoittaa, että perhe on tärkein. Mielestäni sekä sukulaiset että ystävät ovat tärkeitä. Sukulaiset ovat aina taustalla, ja heidät on annettu, ei valittu. Ystävät voi valita itse, ja he ovat usein lähellä sydäntä. Joillekin ystävät ovat kuin perhe. Uskon, että tärkeintä on, että on ihmisiä, joihin voi luottaa, olivat he sitten sukulaisia tai ystäviä. Molemmat rikastuttavat elämää, eikä kumpaakaan kannata väheksyä.',
      },
      {
        id: 'm-k',
        titleFi: 'Uusperhe - hyvä vai huono asia?',
        titleEn: 'Stepfamily - good or bad?',
        instructionsFi:
          'Suomessa melkein 50% avioliitoista päätyy eroon. Miksi? Mitä pitäisi tehdä? Tai pitäisikö jotain tehdä? Miten lapsi kasvaa, jos hänellä on monta vanhempaa tai kaksi kotia?',
        sampleFi:
          'Suomessa avioerojen määrä on korkea, koska ihmisillä on vapaus valita ja eroaminen on helpompaa kuin ennen. Jotkut menevät naimisiin liian nuorina tai liian nopeasti, ja sitten huomaavat, etteivät sovi yhteen. En tiedä, pitäisikö tehdä jotain, mutta ehkä parisuhdetaitojen opettaminen voisi auttaa. Uusperhe voi olla sekä hyvä että haastava asia. Lapsi voi saada paljon rakkautta monelta aikuiselta, mutta voi myös olla vaikeaa, jos on kaksi kotia ja erilaiset säännöt. Tärkeintä on, että lapsi tuntee olevansa rakastettu ja turvassa. Avoin viestintä ja yhteistyö vanhempien välillä auttavat lasta sopeutumaan uuteen perhetilanteeseen.',
      },
    ],
    writingTasks: [
      {
        id: 'w1',
        titleFi: 'Viesti',
        instructionsFi: 'Ystävällesi on tapahtunut jotain tärkeää (keksi itse, mitä). Haluat onnitella häntä. Kirjoita hänelle viesti, jossa:',
        bulletsFi: [
          'kerrot, mitä on tapahtunut ja mistä kuulit siitä',
          'onnittele häntä ja kerro, mitä ajattelet tapahtuneesta',
          'kerro, miten haluat juhlia tapahtunutta hänen kanssaan',
        ],
        sampleFi:
          'Hei [nimi]!\n\nKuulin Maijalta, että olet saanut uuden työpaikan! Onneksi olkoon! Tämä on todella hieno uutinen. Tiedän, että olet etsinyt uutta haastetta pitkään, ja nyt se vihdoin löytyi. Olen todella iloinen puolestasi.\n\nHaluaisin juhlistaa tätä sinun kanssasi. Entä mennäänkö perjantaina syömään hyvään ravintolaan? Tai jos haluat, voimme järjestää pienet bileet minun luonani. Kerro, mikä sinulle sopii!\n\nOdotan innolla, että voimme juhlia.\n\nYstävällisin terveisin,\n[Nimesi]',
      },
      {
        id: 'w2',
        titleFi: 'Sähköposti',
        instructionsFi: 'Etsit uutta asuntoa. Olet löytänyt kiinteistönvälittäjän, joka voi auttaa sinua. Kirjoita hänelle sähköposti, jossa:',
        bulletsFi: [
          'kerrot, millaista asuntoa etsit',
          'mikä on tärkeää asunnon sijainnissa',
          'kuinka paljon vuokra / myyntihinta voi olla',
          'milloin haluaisit muuttaa ja miksi juuri silloin',
        ],
        sampleFi:
          'Hei,\n\nNimeni on [Nimi], ja etsin uutta asuntoa Helsingistä. Haluaisin löytää kaksion tai pienen kolmion. Asunnon pitäisi olla rauhallisella alueella, mutta hyvien kulkuyhteyksien varrella. Sijainti on minulle tärkeä: haluaisin asua lähellä metropysäkkiä tai rautatieasemaa, koska käyn töissä keskustassa.\n\nVuokra voisi olla enintään 1200 euroa kuussa tai myyntihinta noin 250 000 euroa. Olen valmis maksamaan enemmän, jos asunto on hyvässä kunnossa ja hyvällä paikalla.\n\nHaluaisin muuttaa mahdollisimman pian, mieluiten ensi kuun alussa, koska nykyinen vuokrasopimukseni päättyy.\n\nVoisitteko kertoa, millaisia asuntoja teillä on tällä hetkellä tarjolla? Voitte ottaa minuun yhteyttä sähköpostilla tai puhelimitse.\n\nYstävällisin terveisin,\n[Nimesi]',
      },
      {
        id: 'w3',
        titleFi: 'Valitus',
        instructionsFi: 'Kerrostalossa, jossa asut, on paljon ongelmia. Olet kyllästynyt ongelmiin ja haluat, että taloyhtiö korjaa asiat. Kirjoita taloyhtiön hallitukselle valitus, jossa kerrot:',
        bulletsFi: ['millaisia ongelmia talossa on', 'mitä ongelmille pitäisi tehdä ja millaisella aikataululla', 'mitä teet, jos asiat eivät muutu'],
        sampleFi:
          'Taloyhtiön hallitukselle\n\nOlen asukas osoitteessa [osoite], ja kirjoitan tämän valituksen, koska olen erittäin tyytymätön talon kuntoon.\n\nTalossa on seuraavia ongelmia:\n- Rappukäytävä on likainen ja valaistus on huono.\n- Hissi on ollut rikki jo kolme viikkoa.\n- Kellarissa on kosteusvaurio ja haju on epämiellyttävä.\n- Pihalla on roskia, eikä pihaa ole hoidettu pitkään aikaan.\n\nVaatimukseni:\n- Rappukäytävä tulisi siivota ja valaistus korjata viikon kuluessa.\n- Hissi pitää korjata mahdollisimman pian, koska iäkkäät asukkaat eivät pääse liikkumaan.\n- Kosteusvaurio tulee tutkia ja korjata kuukauden sisällä.\n- Piha tulee siivota ja hoitaa säännöllisesti.\n\nJos asiat eivät muutu kuukauden sisällä, aion ottaa yhteyttä vuokranantajaan ja harkita muuttamista pois. Tämä on vakava asia, ja toivon, että taloyhtiö ottaa sen tosissaan.\n\nToivon nopeaa reagointia.\n\nYstävällisin terveisin,\n[Nimesi]\nPuhelinnumero: [numero]',
      },
    ],
    vocabSummary: [
      { fi: 'lähipiiri', en: 'close circle / inner circle' },
      { fi: 'morsian', en: 'bride' },
      { fi: 'häät', en: 'wedding' },
      { fi: 'kutsu', en: 'invitation' },
      { fi: 'lahjakortti', en: 'gift card' },
      { fi: 'onnitella', en: 'to congratulate' },
      { fi: 'pitopalvelu', en: 'catering service' },
      { fi: 'valmistujaiset', en: 'graduation party' },
      { fi: 'läksiäiset', en: 'farewell party' },
      { fi: 'hautajaiset', en: 'funeral' },
      { fi: 'vieras', en: 'guest' },
      { fi: 'kehua', en: 'to compliment' },
      { fi: 'pukeutua', en: 'to dress' },
      { fi: 'remontti', en: 'renovation' },
      { fi: 'naapuri', en: 'neighbor' },
      { fi: 'meteli', en: 'noise' },
      { fi: 'isännöitsijä', en: 'property manager' },
      { fi: 'varoitus', en: 'warning' },
      { fi: 'erota', en: 'to break up / divorce' },
      { fi: 'riita', en: 'argument / fight' },
      { fi: 'anteeksi pyytää', en: 'to apologize' },
      { fi: 'kiusata', en: 'to bully' },
      { fi: 'ulkonäkö', en: 'appearance' },
      { fi: 'parisuhde', en: 'relationship' },
      { fi: 'puoliso', en: 'spouse / partner' },
      { fi: 'onnellisuus', en: 'happiness' },
      { fi: 'sosiaalinen media', en: 'social media' },
      { fi: 'uusperhe', en: 'stepfamily' },
      { fi: 'sukulainen', en: 'relative' },
    ],
  },
  {
    id: 'conv-ch2',
    titleFi: 'Luku 2: Ostokset, palvelut ja arki',
    titleEn: 'Chapter 2: Shopping, services and everyday life',
    level: 'B1',
    warmup: [
      { id: 'w-1', scenarioFi: 'Mitä normaalisti ostat kaupasta?', scenarioEn: 'What do you normally buy from the store?', sampleFi: 'Normaalisti ostan ruokaa, kuten leipää, maitoa, juustoa, hedelmiä ja vihanneksia. Ostan myös kahvia ja teetä. Joskus ostan makeisia, jos tekee mieli jotain hyvää.' },
      { id: 'w-2', scenarioFi: 'Mitä et ikinä osta kaupasta?', scenarioEn: 'What do you never buy from the store?', sampleFi: 'En ikinä osta valmisruokia, kuten mikroaterioita. En myöskään osta energiajuomia, koska ne eivät ole terveellisiä.' },
      {
        id: 'w-3',
        scenarioFi: 'Mikä on sinulle tärkeää, kun valitset kaupan?',
        scenarioEn: 'What is important to you when choosing a store?',
        sampleFi: 'Minulle on tärkeää, että kauppa on lähellä ja siellä on hyvä valikoima. Hinta on myös tärkeä. Arvostan myös tuoreita tuotteita ja ystävällistä palvelua.',
      },
      { id: 'w-4', scenarioFi: 'Miten valitset?', scenarioEn: 'How do you choose?', sampleFi: 'Vertailen hintoja ja katson, mitä tuotteita on tarjouksessa. Luen myös tuoteselosteita, erityisesti jos ostan uusia tuotteita.' },
      {
        id: 'w-5',
        scenarioFi: 'Mihin asioihin kiinnität huomiota?',
        scenarioEn: 'What things do you pay attention to?',
        sampleFi: 'Kiinnitän huomiota tuotteiden laatuun, hintaan ja alkuperämaahan. Ostan mielelläni kotimaisia tuotteita. Katson myös parasta ennen -päiväyksiä.',
      },
      {
        id: 'w-6',
        scenarioFi: 'Mitä eroja on Suomen ja sinun kotimaan kaupoissa?',
        scenarioEn: 'What differences are there between Finnish shops and shops in your home country?',
        sampleFi:
          'Suomen kaupoissa on laaja valikoima, mutta hinnat ovat korkeammat kuin kotimaassani. Suomessa on paljon valmiiksi pakattuja tuotteita. Kotimaassani kaupoissa on enemmän tuoreita tuotteita irtotavarana.',
      },
      {
        id: 'w-7',
        scenarioFi: 'Teetkö kauppalistan?',
        scenarioEn: 'Do you make a shopping list?',
        sampleFi: 'Kyllä, teen aina kauppalistan, jotta en unohda mitään. Se säästää aikaa ja rahaa, koska en osta turhia asioita.',
      },
      {
        id: 'w-8',
        scenarioFi: 'Haluatko kuitin?',
        scenarioEn: 'Do you want the receipt?',
        sampleFi: 'Kyllä, haluan aina kuitin, koska haluan tarkistaa ostokset. Joskus tarvitsen kuittia, jos joudun palauttamaan tuotteen.',
      },
      {
        id: 'w-9',
        scenarioFi: 'Miten maksat?',
        scenarioEn: 'How do you pay?',
        sampleFi: 'Maksan yleensä pankkikortilla. Joskus käytän myös mobiilimaksua, kuten MobilePaytä. Käteistä käytän harvoin.',
      },
      {
        id: 'w-10',
        scenarioFi: 'Mikä on hyvä ruokakauppa sinun kotikaupungissa?',
        scenarioEn: 'What is a good grocery store in your hometown?',
        sampleFi: 'Minun kotikaupungissa on hyvä K-Market, jossa on laaja valikoima ja ystävällinen henkilökunta. Siellä on myös hyvät tarjoukset.',
      },
      {
        id: 'w-11',
        scenarioFi: 'Onko sinulla joku etukortti?',
        scenarioEn: 'Do you have a loyalty card?',
        sampleFi: 'Kyllä, minulla on S-kortti ja Plussa-kortti. Ne ovat hyviä, koska saan bonusta ja alennuksia. Kortit säästävät rahaa pitkässä juoksussa.',
      },
      {
        id: 'w-12',
        scenarioFi: 'Onko jotain, mitä sä aina unohdat ostaa kaupasta?',
        scenarioEn: 'Is there something you always forget to buy at the store?',
        sampleFi: 'Unohdan aina ostaa maitoa ja leipää. Joskus unohdan myös vessapaperin, vaikka se on tärkeä.',
      },
      {
        id: 'w-13',
        scenarioFi: 'Onko jotain, mitä sä et koskaan muista ostaa kaupasta?',
        scenarioEn: 'Is there something you never remember to buy at the store?',
        sampleFi: 'En koskaan muista ostaa mausteita, kuten suolaa tai pippuria. Myös hammastahna jää usein ostamatta.',
      },
      {
        id: 'w-14',
        scenarioFi: 'Minä kuluttajana: Piirrä kuva itsestäsi kuluttajana ja kerro siitä.',
        scenarioEn: 'Me as a consumer: draw a picture of yourself as a consumer and tell about it.',
        sampleFi:
          'Tässä on kuva minusta kuluttajana. Ostan ruokaa noin kolme kertaa viikossa lähi-S-marketista. Käytän S-korttia ja kerään bonusta. Vaatteita ostan harvoin, ehkä kerran kuukaudessa. Ostan usein verkkokaupoista, koska ne ovat halvempia. Raha menee eniten ruokaan, vuokraan ja bussilippuihin. Olen aika säästäväinen, mutta ostan mielelläni laadukkaita tuotteita. Haluaisin säästää enemmän rahaa matkustamista varten.',
      },
    ],
    dialogues: [
      {
        id: 'd1',
        titleFi: 'Unohtunut tavara liikuntahallilla',
        titleEn: 'Forgotten item at the gym',
        turns: [
          { speaker: 'Nainen', fi: 'Liikuntakeskus Ilona, miten voin auttaa?' },
          { speaker: 'Sinä', fi: 'Hei! Soitan, koska unohdin tavaran teidän liikuntahallille eilen. Onko löytynyt sellaista?' },
          { speaker: 'Nainen', fi: 'Voi harmi! Kerrotko tarkemmin, millainen se oli?' },
          { speaker: 'Sinä', fi: 'Se on musta urheilukassi, jossa on valkoinen logo. Sisällä oli lenkkarit ja pyyhe.' },
          { speaker: 'Nainen', fi: 'Hmm. Ainakaan tähän respaan ei ole nyt tuotu sellaista tavaraa. Milloin sä kadotit sen?' },
          { speaker: 'Sinä', fi: 'Unohdin sen eilen kello 18 jälkeen, kun olin salilla.' },
          {
            speaker: 'Nainen',
            fi: 'Okei, no voihan se vielä löytyä. Mä voin kyllä laittaa tohon ilmoitustaululle lapun, että tällainen on kadonnut. Sopisko se sulle? Keneen otetaan yhteyttä, jos laitetaan?',
          },
          { speaker: 'Sinä', fi: 'Sopii hyvin! Ottakaa yhteyttä tähän numeroon. Tässä on minun nimeni.' },
          { speaker: 'Nainen', fi: 'Selvä juttu. Mä laitan ilmoituksen ja toivotaan, että löytyy.' },
          { speaker: 'Sinä', fi: 'Kiitos paljon avusta! Kuulen pian teiltä, toivottavasti.' },
        ],
      },
      {
        id: 'd2',
        titleFi: 'Parturi-kampaamossa',
        titleEn: 'At the hair salon',
        turns: [
          { speaker: 'Kampaaja', fi: 'Moi! Sulla tais olla aika mulle varattu. Tuu tänne istumaan. Oletko sä meillä ensimmäistä kertaa?' },
          { speaker: 'Sinä', fi: 'Hei! Kyllä, tämä on ensimmäinen kerta teillä. Sain suosituksen ystävältäni.' },
          { speaker: 'Kampaaja', fi: 'No niin. Mitäs sitten ajattelit, että tänään tehdään?' },
          { speaker: 'Sinä', fi: 'Haluaisin leikata hiukset lyhyemmiksi ja värjätä ne vaaleammiksi.' },
          { speaker: 'Kampaaja', fi: 'Okei, katotaas. Tässä olis tällänen esimerkki tässä lehdessä. Oisko tää hyvä?' },
          { speaker: 'Sinä', fi: 'Hmm, ei oikein. Minulla on pyöreät kasvot, joten tuo tyyli ei sovi minulle. Onko muita ehdotuksia?' },
          { speaker: 'Kampaaja', fi: 'Ahaa, joo. Nyt mä luulen, että ymmärsin idean. Mitäs, haluaisitko juoda jotain?' },
          { speaker: 'Sinä', fi: 'Kiitos, voisin ottaa kupin kahvia.' },
          { speaker: 'Kampaaja', fi: 'Selvä. Tuossa pöydällä on lehtiä, joita voi lukea ja meillä on täällä myös Wi-Fi, jos haluat surffata.' },
          { speaker: 'Sinä', fi: 'Kiitos, luen mielelläni lehtiä.' },
          { speaker: 'Kampaaja', fi: 'Kyllä kyllä. Mä meen hakemaan vähän tarvikkeita ja sitten aloitellaan.' },
          { speaker: 'Sinä', fi: 'Hyvä, odotan innolla!' },
        ],
      },
      {
        id: 'd3',
        titleFi: 'Valitus kahvilassa',
        titleEn: 'Complaint at a café',
        turns: [
          { speaker: 'Myyjä', fi: 'Hei! Maistuuko kahvi?' },
          { speaker: 'Sinä', fi: 'Valitettavasti ei. Tämä kahvi on todella kylmää.' },
          { speaker: 'Myyjä', fi: 'Ai jaa, voi että! Mä oon pahoillani. Mä voin totta kai vaihtaa sen kahvin ja antaa sulle uuden kahvin tilalle.' },
          { speaker: 'Sinä', fi: 'Kiitos, mutta haluaisin mieluummin jotain muuta. Olen pettynyt.' },
          { speaker: 'Myyjä', fi: 'No juu, se on tietysti ihan ymmärrettävää. Olisko jokin toinen juoma parempi?' },
          { speaker: 'Sinä', fi: 'Voisinko saada kaakaon tilalle?' },
          {
            speaker: 'Myyjä',
            fi: 'Selvä, laitetaan sellainen. Vitsi, olen kyllä tosi pahoillani nyt tästä kahvista. Meillä ois täällä tuoretta pullaa myös, jos mä antaisin sellaisen sulle myös kaupan päälle?',
          },
          { speaker: 'Sinä', fi: 'Kiitos, se olisi mukavaa. Arvostan sitä.' },
          { speaker: 'Myyjä', fi: 'No niin, tässä olis tää toinen juoma. Ja vielä kerran pahoittelut tapahtuneesta.' },
          { speaker: 'Sinä', fi: 'Kiitos. Ymmärrän, että vahinkoja sattuu.' },
          {
            speaker: 'Myyjä',
            fi: 'Kiitos sulle, että sanoit. Monet asiakkaat vaan juo sen pahan kahvin, ja sitten ei koskaan enää tule takaisin, tai puhuu pahaa kahvilasta muille. Asiakaspalaute on meille tosi tärkeää.',
          },
          { speaker: 'Sinä', fi: 'Kiitos, että otitte palautteen tosissaan. Tämä on hyvä kahvila, ja tulen varmasti uudelleen.' },
        ],
      },
      {
        id: 'd4',
        titleFi: 'Eksynyt vieraassa kaupungissa',
        titleEn: 'Lost in an unfamiliar city',
        turns: [
          { speaker: 'Sinä', fi: '[Näet miehen kadulla]', en: 'You see a man on the street', isPlaceholder: true },
          { speaker: 'Mies', fi: '[Hän kävelee]', en: 'He is walking', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Anteeksi, voisitteko auttaa?' },
          { speaker: 'Mies', fi: 'Joo, totta kai. Mihin sä olet menossa?' },
          { speaker: 'Sinä', fi: 'Etsin Helsingin päärautatieasemaa. Luulen, että olen eksynyt.' },
          { speaker: 'Mies', fi: 'No sä olet onneksi ihan lähellä. Näetkö tuolla tuon ison rakennuksen?' },
          { speaker: 'Sinä', fi: 'Tarkoitatko tuota harmaata rakennusta?' },
          {
            speaker: 'Mies',
            fi: 'Joo, just se. Ensin kävele suoraan eteenpäin ihan sinne rakennukselle asti. Sitten käännyt vasemmalle ja kävelet kaksi korttelia suoraan ja olet perillä.',
          },
          { speaker: 'Sinä', fi: 'Kiitos! Kuinka kaukana se on?' },
          { speaker: 'Mies', fi: 'Kyllä sä varmaan löydät sinne. Se ei ole kaukana, ehkä noin puoli kilometriä tästä.' },
          { speaker: 'Sinä', fi: 'Kiitos todella paljon avusta!' },
          { speaker: 'Mies', fi: 'Eipä kestä!' },
        ],
      },
      {
        id: 'd5',
        titleFi: 'Kodinkoneen palautus',
        titleEn: 'Returning a faulty appliance',
        turns: [
          { speaker: 'Myyjä', fi: 'Voinks mä auttaa jotenkin?' },
          { speaker: 'Sinä', fi: 'Kyllä! Ostin täältä kahvinkeittimen, mutta se ei toimi kunnolla. Vesi ei lämpene.' },
          { speaker: 'Myyjä', fi: 'Ai jaa! Onko sulla kuitti tallessa?' },
          { speaker: 'Sinä', fi: 'Kyllä, tässä se on.' },
          {
            speaker: 'Myyjä',
            fi: 'Joo, kiitos. No tässähän on takuu vielä onneksi voimassa, joten ei ole mitään ongelmaa. Mä voin antaa sulle uuden tuotteen tilalle.',
          },
          { speaker: 'Sinä', fi: 'Olisiko mahdollista saada rahat takaisin? Haluaisin ostaa toisen merkin.' },
          {
            speaker: 'Myyjä',
            fi: 'Ahaa. Niin no, ymmärtäähän sen. Valitettavasti rahoja mä en voi tästä palauttaa, mutta olisiko tältä valmistajalta jotakin muuta, mikä sua voisi kiinnostaa?',
          },
          { speaker: 'Sinä', fi: 'Onko teillä saman merkin tehokkaampaa kahvinkeitintä?' },
          { speaker: 'Myyjä', fi: 'Joo, niin kauan, kun kyseessä on sama merkki, vaihto voidaan tehdä. Mennään katsomaan tuonne osastolle, millainen malli olisi hyvä.' },
          { speaker: 'Sinä', fi: 'Kiitos! Tämä on oikein hyvä palvelu.' },
        ],
      },
    ],
    reactions: [
      {
        id: 'r1',
        scenarioFi: 'Menet kahvilaan, mutta kaikki pöydät ovat likaisia. Valita asiasta tarjoilijalle.',
        scenarioEn: 'You go to a café but all the tables are dirty. Complain to the waiter.',
        sampleFi: 'Anteeksi, voisitteko auttaa? Kaikki pöydät ovat likaisia. Voisitteko pyyhkiä yhden pöydän puhtaaksi, jotta voin istua?',
      },
      {
        id: 'r2',
        scenarioFi: 'Kaveri on lainannut sinulta autoa. Hän on käyttänyt kaikki bensat ja ei ole tankannut. Kerro kaverille, mitä mieltä olet hänen käytöksestä.',
        scenarioEn: 'A friend borrowed your car, used all the gas, and never refilled it. Tell them what you think.',
        sampleFi:
          'Hei, mä oon vähän pettynyt. Mä lainasin sulle auton, ja sä oot käyttänyt kaikki bensat etkä tankannut. Se on epäkohteliasta. Olisit voinut laittaa bensaa tai ainakin kysyä.',
      },
      {
        id: 'r3',
        scenarioFi: 'Haluat palkata siivoojan kotiin. Kerro ystävällesi, miksi et enää halua siivota itse.',
        scenarioEn: 'You want to hire a cleaner. Tell a friend why you no longer want to clean yourself.',
        sampleFi: 'Mä oon harkinnut siivoojan palkkaamista, koska mulla on niin kiire töissä. En ehdi siivota kunnolla, ja koti on aina sotkuinen. Se auttaisi jaksamaan paremmin.',
      },
      {
        id: 'r4',
        scenarioFi:
          'Olet ostanut Ikeasta lampun, joka on pudonnut katosta alas. Jos lamppu olisi pudonnut jonkun päähän, se olisi ollut vaarallista. Valita asiasta Ikeaan ja vaadi korvausta.',
        scenarioEn: 'A lamp you bought from Ikea fell from the ceiling. Complain and demand compensation.',
        sampleFi:
          'Hei, ostin teiltä lampun, mutta se putosi katosta alas. Tämä on erittäin vaarallista! Lamppu olisi voinut satuttaa jonkun. Haluan korvauksen ja haluan tietää, miksi näin tapahtui.',
      },
      {
        id: 'r5',
        scenarioFi: 'Olet ostanut jonkin huonekalun (keksi itse, minkä). Olet yrittänyt koota sitä, mutta kaikki osat eivät ole pakkauksessa.',
        scenarioEn: "You bought a piece of furniture but some parts are missing from the package.",
        sampleFi: 'Hei, ostin teiltä hyllyn, mutta pakkauksesta puuttuu osia. En voi koota sitä. Tarvitsen puuttuvat osat tai haluan palauttaa tuotteen.',
      },
      {
        id: 'r6',
        scenarioFi: 'Olet Ikeassa ja haluat kokeilla sänkyä. Joku nukkuu sängyssä ja et voi kokeilla sitä. Et myöskään näe sängyn hintaa. Mitä sanot?',
        scenarioEn: "At Ikea, you want to try a bed but someone is lying on it, and you can't see the price.",
        sampleFi: 'Anteeksi, että häiritsen. Haluaisin kokeilla tätä sänkyä, mutta joku nukkuu siinä. Onko teillä toinen samanlainen sänky? Ja voitteko kertoa hinnan, koska en näe sitä?',
      },
      {
        id: 'r7',
        scenarioFi:
          'Haluat ostaa kaksi samanlaista tuolia. Tuoleja on kuitenkin enää kaksi jäljellä ja toinen tuoli on toisella asiakkaalla. Mitä sanot, että saat tuolin?',
        scenarioEn: 'You want two matching chairs but another customer has one. What do you say to get it?',
        sampleFi: 'Anteeksi, tarvitsisin molemmat tuolit. Onko mahdollista, että saisin toisen tuolin, kun olette valmiit? Voin odottaa.',
      },
      {
        id: 'r8',
        scenarioFi: 'Olet ostamassa jotakin kallista (keksi itse, mitä). Haluat tinkiä tuotteesta. Mitä sanot ja miten perustelet?',
        scenarioEn: "You're buying something expensive and want to bargain. What do you say?",
        sampleFi: 'Tämä on vähän kallis. Onko mahdollista saada alennusta? Ostan usein teiltä ja voin suositella teitä ystävilleni.',
      },
      {
        id: 'r9',
        scenarioFi: 'Menet kukkakauppaan ja haluat ostaa kukkia lahjaksi. Kerro myyjälle, kenelle ja millaiseen tilaisuuteen kukat tulevat.',
        scenarioEn: "At a flower shop, tell the seller who the flowers are for and the occasion.",
        sampleFi: 'Hei! Haluaisin ostaa kukkia lahjaksi. Ne ovat äidilleni syntymäpäivälahjaksi. Mitä suosittelisitte? Hän tykkää vaaleanpunaisista kukista.',
      },
      {
        id: 'r10',
        scenarioFi: 'Olet ravintolassa ja viereisessä pöydässä on lapsiperhe, jonka lapset käyttäytyvät huonosti. Mitä sanot vanhemmille?',
        scenarioEn: 'At a restaurant, children at the next table are misbehaving. What do you say to the parents?',
        sampleFi: 'Anteeksi, että häiritsen. Lapset ovat vähän äänekkäitä ja juoksevat. Voisitteko pyytää heitä olemaan vähän rauhallisemmin? Tämä on ravintola, ei leikkipaikka.',
      },
      {
        id: 'r11',
        scenarioFi: 'Ravintolassa on todella hidas palvelu. Valita asiasta tarjoilijalle.',
        scenarioEn: 'Service at a restaurant is very slow. Complain to the waiter.',
        sampleFi: 'Anteeksi, olemme odottaneet ruokaa jo 45 minuuttia. Tämä on todella hidasta. Onko ruoka tulossa? Olemme pettyneitä.',
      },
      {
        id: 'r12',
        scenarioFi: 'Kaupan parkkipaikalla on koira kuumassa autossa. Kerro mielipiteesi koiran omistajalle.',
        scenarioEn: "There's a dog in a hot car in a parking lot. Tell the owner what you think.",
        sampleFi: 'Anteeksi, onko tämä teidän koiranne? Koira on kuumassa autossa, ja ikkunat ovat kiinni. Tämä on vaarallista! Koira voi saada lämpöhalvauksen. Ottakaa koira pois autosta.',
      },
      {
        id: 'r13',
        scenarioFi: 'Sinun läppärissä on jokin vika. Takuu on vielä voimassa. Soitat liikkeeseen.',
        scenarioEn: 'Your laptop has a fault and is still under warranty. You call the store.',
        sampleFi: 'Hei! Ostin teiltä läppärin puoli vuotta sitten. Siinä on ongelma: näyttö välkkyy ja välillä sammuu. Takuu on vielä voimassa. Mitä minun pitäisi tehdä?',
      },
      {
        id: 'r14',
        scenarioFi: 'Olet nähnyt ilmoituksen käytetystä pesukoneesta. Soita myyjälle ja kysy lisätietoja.',
        scenarioEn: "You saw an ad for a used washing machine. Call the seller for more information.",
        sampleFi: 'Hei! Näin ilmoituksenne käytetystä pesukoneesta. Onko se vielä myynnissä? Minkä merkkinen se on? Paljonko se maksaa? Onko siinä takuuta?',
      },
      {
        id: 'r15',
        scenarioFi: 'Neuvo ystävä sinun kotiin bussilla.',
        scenarioEn: 'Give a friend directions by bus to your home.',
        sampleFi: "Sinun kannattaa ottaa bussi 14. Se lähtee keskustasta ja menee suoraan lähelleni. Jää pois pysäkillä 'Kotikatu'. Sitten kävelet 200 metriä eteenpäin, ja olet perillä.",
      },
      {
        id: 'r16',
        scenarioFi: 'Olet bussissa, mutta et tunne reittiä. Kerro kuljettajalle, missä haluat jäädä pois ja pyydä apua.',
        scenarioEn: "You're on a bus but don't know the route. Tell the driver where you want to get off and ask for help.",
        sampleFi: 'Hei, en tunne tätä reittiä. Haluaisin jäädä pois lähellä keskustaa. Voitteko ilmoittaa, kun tulee oikea pysäkki?',
      },
    ],
    longSpeaking: [
      {
        id: 'k-a',
        titleFi: 'Millainen ajankäyttäjä olet?',
        titleEn: 'What kind of time user are you?',
        instructionsFi:
          'Oletko tavallisesti ajoissa vai myöhässä? Tykkäätkö aikatauluista? Miten organisoit aikaasi vai annatko sen olla? Mihin aikasi kuluu? Mihin et halua hukata aikaasi? Mikä on hyvä tapa sopia aikatauluista?',
        sampleFi:
          'Olen tavallisesti ajoissa, koska pidän siitä, että asiat ovat järjestyksessä. Tykkään aikatauluista, ne auttavat minua hallitsemaan arkea. Organisoin aikaani kalenterin avulla. Kirjoitan ylös tärkeät tapaamiset ja tehtävät. Aikani kuluu töissä, kotona ja ystävien kanssa. En halua hukata aikaani somessa tai turhaan odottamiseen. Hyvä tapa sopia aikatauluista on sopia tapaamiset etukäteen ja varmistaa, että molemmat muistavat ajan. Joskus on hyvä sopia myös varoaika, jos joku myöhästyy.',
      },
      {
        id: 'k-b',
        titleFi: 'Millainen riitelijä sinä olet?',
        titleEn: 'What kind of arguer are you?',
        instructionsFi:
          'Kuinka usein riitelet? Mistä suutut? Mikä saa sinut vihaiseksi? Mitä et voi ikinä antaa anteeksi? Miten sinä riitelet? Miten käyttäydyt? Nimeä muutama asia, joista sinun kanssasi voisi helposti riidellä.',
        sampleFi:
          'Riitelen harvoin, ehkä kerran kuukaudessa. Suutun, jos joku valehtelee minulle tai on epäoikeudenmukainen. En voi ikinä antaa anteeksi petosta tai luottamuksen rikkomista. Kun riitelen, yritän pysyä rauhallisena ja puhua asioista, en huuda. Käyttäydyn rationaalisesti, vaikka se on joskus vaikeaa. Minun kanssani voisi helposti riidellä siitä, että olen liian järjestelmällinen tai että haluan suunnitella kaiken etukäteen. Myös epäjärjestys ärsyttää minua.',
      },
      {
        id: 'k-c',
        titleFi: 'Arkipäiväni',
        titleEn: 'My everyday life',
        instructionsFi: 'Millainen on tavallinen arkipäiväsi? Mitä rutiineja sinulla on? Pidätkö rutiineista? Miksi / miksi et? Millainen päivä on huono?',
        sampleFi:
          'Tavallinen arkipäiväni alkaa kello 7. Herään, pesen hampaat ja syön aamupalan. Lähden töihin kello 8. Työpäivä kestää kello 8-16. Työssä pidän lounastauon kello 12. Illalla kello 17 tulen kotiin, teen ruokaa ja rentoudun. Katson televisiota tai luen kirjaa. Menen nukkumaan kello 23. Rutiinit ovat tärkeitä minulle, koska ne antavat rytmin päivään. Pidän rutiineista, koska ne tekevät elämästä helpompaa. Huono päivä on sellainen, jolloin herään myöhässä, unohdan jotain tärkeää tai olen todella väsynyt.',
      },
      {
        id: 'k-d',
        titleFi: 'Ravintolat',
        titleEn: 'Restaurants',
        instructionsFi:
          'Käytkö usein ravintolassa? Mikä on hyvä ravintola mielestäsi? Mikä tekee ravintolasta hyvän? Entä huonon? Mitä eroja kotimaasi ja Suomen ravintoloissa on? Millainen atmosfääri ravintolassa pitäisi olla mielestäsi? Mitä toivoisit ravintoloihin lisää?',
        sampleFi:
          'Käyn ravintolassa noin kahdesti kuukaudessa. Hyvä ravintola on sellainen, jossa on hyvää ruokaa, ystävällinen palvelu ja kiva tunnelma. Hyvän ravintolan tekee laadukkaat raaka-aineet, hyvät annokset ja ammattitaitoinen henkilökunta. Huono ravintola on sellainen, jossa ruoka on mautonta tai palvelu on hidasta. Kotimaassani ravintolat ovat halvempia ja ruoka on mausteisempaa. Suomessa ravintolat ovat kalliimpia, mutta laatu on yleensä hyvää. Mielestäni ravintolassa pitäisi olla rento ja lämmin atmosfääri. Toivoisin ravintoloihin lisää kasvisvaihtoehtoja ja edullisempia hintoja.',
      },
      {
        id: 'k-e',
        titleFi: 'Minä liikenteessä',
        titleEn: 'Me in traffic',
        instructionsFi: 'Miten kuljet kotoa töihin / kouluun / kauppaan? Käytätkö julkista liikennettä? Miksi / miksi et? Pelkäätkö jotain liikenteessä? Mitä ja miksi?',
        sampleFi:
          'Kuljen kotoa töihin bussilla. Bussi on kätevä, koska pysäkki on lähellä kotia. Käytän julkista liikennettä päivittäin, koska se on halvempaa kuin auto. En omista autoa, koska asun keskustassa ja pärjään hyvin bussilla ja metrolla. Julkinen liikenne on ympäristöystävällisempää. Pelkään liikenteessä pyöriä, koska ne tulevat joskus yllättäen ja liikkuvat nopeasti. Pelkään myös, että autoilijat eivät huomaa jalankulkijoita. Siksi olen aina varovainen suojatiellä.',
      },
    ],
    opinions: [
      {
        id: 'm-a',
        titleFi: 'Ketjuyritysten hyödyt ja haitat',
        titleEn: 'Benefits and drawbacks of chain businesses',
        instructionsFi:
          'Mitä hyötyä ja haittaa on siitä, että kauppa / ravintola / huoltoasema kuuluu ketjuun? Ostatko itse mieluummin ketjusta vai itsenäiseltä yrittäjältä? Miksi? Onko globaaleissa ketjuissa riskejä? Mitä?',
        sampleFi:
          'Ketjuyrityksissä on sekä hyötyä että haittaa. Hyötyjä ovat tuttuus ja laadun tasaisuus. Tiedän, mitä saan, kun menen ketjuravintolaan. Hinnat ovat usein kohtuullisia. Haitat ovat, että ketjut voivat olla persoonattomia ja ruoka on usein samanlaista. Itsenäiset yrittäjät tarjoavat usein ainutlaatuisia tuotteita ja persoonallista palvelua. Ostan mieluummin itsenäisiltä yrittäjiltä, koska haluan tukea paikallista yritystoimintaa. Globaaleissa ketjuissa on riskejä: ne voivat viedä markkinoita paikallisilta yrityksiltä ja voivat olla vastuuttomia ympäristöasioissa.',
      },
      {
        id: 'm-b',
        titleFi: 'Alle kouluikäinen ei tarvitse vielä puhelinta',
        titleEn: "A child under school age doesn't need a phone yet",
        instructionsFi:
          'Mikä on sinun mielestäsi sopiva ikä aloittaa kännykän käyttö. Miksi? Mitä hyötyä ja haittaa on siitä, että lapsella on puhelin? Mikä on sopiva puhelinlasku lapselle? Pitäisikö lapsen puhelimen käyttöä rajoittaa? Miten?',
        sampleFi:
          'Mielestäni sopiva ikä kännykän käyttöön on noin 10-12 vuotta. Silloin lapsi on tarpeeksi vastuuntuntoinen. Puhelimen hyötyjä ovat, että lapsi voi olla yhteydessä vanhempiin ja hätätilanteissa apu on lähellä. Haitat ovat, että lapsi voi viettää liikaa aikaa puhelimella, pelata tai katsoa sopimatonta sisältöä. Sopiva puhelinlasku lapselle on noin 10-20 euroa kuukaudessa. Vanhempien pitäisi rajoittaa lapsen puhelimen käyttöä esimerkiksi asettamalla aikarajoja ja kieltämällä puhelimen käyttö ruokailun aikana ja nukkumaan mennessä.',
      },
      {
        id: 'm-c',
        titleFi: 'Arkielämä Suomessa on helppoa',
        titleEn: 'Everyday life in Finland is easy',
        instructionsFi:
          'Millaisia ongelmia sinulla oli arkielämässä, kun tulit Suomeen? Miten ratkaisit ne? Mitkä asiat Suomessa sujuvat helposti? Mikä on vaikeaa? Millaista suomalainen arki on kotimaasi arkeen verrattuna?',
        sampleFi:
          'Kun tulin Suomeen, suurin ongelma oli kieli. En ymmärtänyt suomea, ja asiointi oli vaikeaa. Ratkaisin ongelman opiskelemalla suomea ja pyytämällä apua ystäviltä. Suomessa asiat sujuvat helposti: byrokratia on selkeää, palvelut toimivat hyvin ja ihmiset ovat luotettavia. Vaikeaa on talvi, pimeys ja kalliit hinnat. Suomalainen arki on rauhallista ja säännöllistä. Kotimaassani arki on vilkkaampaa ja ihmiset ovat spontaanimpia. Suomessa arvostetaan järjestystä ja ajallaan olemista.',
      },
      {
        id: 'm-d',
        titleFi: 'Tinkiminen on hauskaa',
        titleEn: 'Bargaining is fun',
        instructionsFi:
          'Tykkäätkö tinkiä hinnoista vai tykkäätkö standardihinnoista? Miksi? Miltä tinkiminen sinusta tuntuu? Mitä ajattelet Suomen tinkimiskulttuurista? Onko sitä? Mistä asioista voi tingata ja mistä ei?',
        sampleFi:
          'Tykkään standardihinnoista, koska ne ovat selkeitä. Tinkiminen tuntuu epämukavalta, en ole tottunut siihen. Suomessa ei juuri tingitä, hinnat ovat kiinteitä. Tämä on minulle hyvä asia, koska tiedän aina, mitä maksan. Suomessa tinkimistä ei ole juuri ollenkaan, paitsi kirpputoreilla tai huutokaupoissa. Mielestäni voi tingata käytetyistä tavaroista tai jos ostaa useita tuotteita kerralla, mutta kaupoissa ja ravintoloissa ei tingitä. Se on kohteliasta.',
      },
    ],
    writingTasks: [
      {
        id: 'w1',
        titleFi: 'Vastaus myynti-ilmoitukseen',
        instructionsFi: 'Olet nähnyt myynti-ilmoituksen tavarasta, jonka haluat ostaa. Lähetä viesti myyjälle ja kysy lisätietoa.',
        bulletsFi: [],
        sampleFi:
          'Hei!\n\nNäin ilmoituksenne Tori.fi:ssä sohvan myynnistä. Olen kiinnostunut ostamaan sen. Onko sohva vielä myynnissä?\n\nHaluaisin kysyä muutamia asioita:\n- Onko sohva hyvässä kunnossa? Onko siinä tahroja tai muita vaurioita?\n- Mitkä ovat sohvan mitat? Mahtuuko se hissiin?\n- Milloin voisin tulla katsomaan sohvaa?\n\nVoitte ottaa minuun yhteyttä tällä numerolla tai sähköpostilla.\n\nYstävällisin terveisin,\n[Nimesi]',
      },
      {
        id: 'w2',
        titleFi: 'Viesti',
        instructionsFi: 'Olet saanut ison kukkalähetyksen puolitutulta. Kirjoita viesti kukkien lähettäjälle.',
        bulletsFi: [],
        sampleFi:
          'Hei!\n\nSain tänään valtavan kauniin kukkalähetyksen! Kukat ovat todella kauniita - niissä on ihania vaaleanpunaisia ruusuja ja valkoisia liljoja. Olin todella yllättynyt ja iloinen.\n\nLuulen, että lähetit kukat kiitokseksi siitä, että autin sinua viime viikolla. Se oli todella ystävällistä, mutta sinun ei olisi tarvinnut! Olin iloinen voidessani auttaa.\n\nPyydän kuitenkin kohteliaasti, että et lähetä enää lahjoja. Arvostan ystävyyttäsi, mutta lahjat eivät ole tarpeen. Riittää, että olemme yhteydessä ja tapaamme joskus.\n\nKiitos vielä kerran kauniista kukista!\n\nYstävällisin terveisin,\n[Nimesi]',
      },
      {
        id: 'w3',
        titleFi: 'Mielipide',
        instructionsFi: 'Valitse teema A tai B ja kirjoita mielipidekirjoitus.',
        bulletsFi: [
          "A. Suomalaiset eivät halua auttaa maahanmuuttajia. (Finns don't want to help immigrants.)",
          'B. Ravintoloiden pitäisi olla auki myös sunnuntaina ja juhlapyhinä. (Restaurants should be open also on Sundays and holidays.)',
        ],
        sampleFi:
          'A. Suomalaiset eivät halua auttaa maahanmuuttajia.\n\nEn ole täysin samaa mieltä tämän väitteen kanssa. Mielestäni suomalaiset auttavat maahanmuuttajia monella tavalla, mutta joskus he eivät tiedä, miten auttaa.\n\nSuomessa on paljon kursseja ja palveluita maahanmuuttajille. Monet suomalaiset toimivat vapaaehtoisina ja auttavat maahanmuuttajia. Kuitenkin kielimuuri voi olla este. Suomalaiset voivat olla ujoja ja epäröiviä, eivätkä he siksi ota kontaktia.\n\nMielestäni on tärkeää, että maahanmuuttajat itsekin ovat aktiivisia ja kysyvät apua. Suomi on hyvä maa, ja täällä on mahdollista saada apua, jos sitä hakee. Myös suomalaisten pitäisi olla rohkeampia ja avoimempia. Pienet teot, kuten tervehtiminen ja auttaminen, voivat tehdä suuren eron.\n\n---\n\nB. Ravintoloiden pitäisi olla auki myös sunnuntaina ja juhlapyhinä.\n\nMielestäni ravintoloiden pitäisi olla auki myös sunnuntaisin ja juhlapyhinä. Tämä olisi hyvä asia monesta syystä.\n\nEnsinnäkin, turistit ja matkailijat tarvitsevat palveluita myös viikonloppuisin. Toiseksi, monet ihmiset haluavat viettää vapaapäivän ravintolassa perheen tai ystävien kanssa. Kolmanneksi, ravintolatyöntekijät voisivat itse päättää, haluavatko he tehdä töitä juhlapyhinä. Tietysti heille pitäisi maksaa korkeampaa palkkaa.\n\nToisaalta, on tärkeää, että työntekijöillä on vapaa-aikaa perheen kanssa. Kuitenkin monilla aloilla, kuten sairaaloissa ja liikenteessä, työskennellään myös pyhinä. Mielestäni ravintolat voisivat olla auki lyhyempiä aikoja pyhinä, esimerkiksi kello 12-18.\n\nYhteenvetona, ravintoloiden aukiolo pyhinä toisi joustavuutta ja palveluita ihmisille, mutta työntekijöiden oikeuksia pitäisi kunnioittaa.',
      },
    ],
    vocabSummary: [
      { fi: 'arkielämä', en: 'everyday life' },
      { fi: 'kauppa', en: 'store/shop' },
      { fi: 'ostos', en: 'purchase' },
      { fi: 'kauppalista', en: 'shopping list' },
      { fi: 'kuitti', en: 'receipt' },
      { fi: 'maksaa', en: 'to pay' },
      { fi: 'etukortti', en: 'loyalty card' },
      { fi: 'alennus', en: 'discount' },
      { fi: 'tarjous', en: 'offer/sale' },
      { fi: 'tuote', en: 'product' },
      { fi: 'palauttaa', en: 'to return' },
      { fi: 'takuu', en: 'warranty' },
      { fi: 'unohdettu tavara', en: 'forgotten item' },
      { fi: 'liikuntahalli', en: 'gym/sports hall' },
      { fi: 'parturi-kampaamo', en: 'hair salon' },
      { fi: 'leikata hiukset', en: 'to cut hair' },
      { fi: 'värjätä hiukset', en: 'to dye hair' },
      { fi: 'kahvila', en: 'café' },
      { fi: 'asiakaspalaute', en: 'customer feedback' },
      { fi: 'eksyä', en: 'to get lost' },
      { fi: 'neuvoa', en: 'to advise' },
      { fi: 'kodinkone', en: 'appliance' },
      { fi: 'valittaa', en: 'to complain' },
      { fi: 'tinkiä', en: 'to bargain' },
      { fi: 'siivooja', en: 'cleaner' },
      { fi: 'kuluttaja', en: 'consumer' },
      { fi: 'ajankäyttö', en: 'time use' },
      { fi: 'aikataulu', en: 'schedule' },
      { fi: 'rutiini', en: 'routine' },
      { fi: 'ravintola', en: 'restaurant' },
      { fi: 'joustavuus', en: 'flexibility' },
      { fi: 'ketjuyritys', en: 'chain business' },
      { fi: 'itsenäinen yrittäjä', en: 'independent entrepreneur' },
      { fi: 'julkinen liikenne', en: 'public transport' },
      { fi: 'tinkiminen', en: 'bargaining' },
    ],
  },
  {
    id: 'conv-ch3',
    titleFi: 'Luku 3: Luonto ja ympäristö',
    titleEn: 'Chapter 3: Nature and environment',
    level: 'B1',
    warmup: [
      {
        id: 'w-1',
        scenarioFi: 'Kuinka paljon Suomen pinta-alasta on metsää?',
        scenarioEn: "How much of Finland's land area is forest?",
        sampleFi: 'Noin 75-80 % Suomen pinta-alasta on metsää. Suomi on yksi Euroopan metsäisimmistä maista.',
      },
      {
        id: 'w-2',
        scenarioFi: 'Mikä suo on?',
        scenarioEn: 'What is a swamp/bog?',
        sampleFi: 'Suo on kosteikkoalue, jossa maaperä on vetistä ja kasvaa erityisiä kasveja, kuten sammalta, varpuja ja suopursua. Suot ovat tärkeitä luonnon monimuotoisuudelle.',
      },
      {
        id: 'w-3',
        scenarioFi: 'Miksi ihmiset liikkuvat syksyllä paljon metsässä?',
        scenarioEn: 'Why do people move a lot in the forest in autumn?',
        sampleFi: 'Syksyllä ihmiset menevät metsään keräämään marjoja ja sieniä. Suomi on kuuluisa mustikoista, puolukoista ja kantarelleista. Ruska-aika on myös kaunis.',
      },
      {
        id: 'w-4',
        scenarioFi: 'Mikä on villieläimen ja kesyn eläimen ero?',
        scenarioEn: 'What is the difference between a wild animal and a tame animal?',
        sampleFi: 'Villieläin elää luonnossa ilman ihmisen apua, esimerkiksi karhu tai susi. Kesy eläin on kesytetty, esimerkiksi koira tai lehmä.',
      },
      {
        id: 'w-5',
        scenarioFi: 'Millainen eläin karhu / susi on?',
        scenarioEn: 'What kind of animal is a bear / wolf?',
        sampleFi:
          'Karhu on suuri ja vahva petoeläin. Se on kaikkiruokainen: se syö marjoja, kalaa ja lihaa. Susi on myös petoeläin. Susi elää laumassa ja saalistaa hirviä. Molemmat ovat arkoja ja välttävät ihmisiä.',
      },
      {
        id: 'w-6',
        scenarioFi: 'Mitkä ovat Suomen kolme tavallista puuta?',
        scenarioEn: "What are Finland's three common trees?",
        sampleFi: 'Suomen kolme yleisintä puuta ovat mänty, kuusi ja koivu.',
      },
      {
        id: 'w-7',
        scenarioFi: 'Mitä täytyy tehdä, jos kyykäärme puree?',
        scenarioEn: 'What must you do if an adder bites?',
        sampleFi: 'Jos kyykäärmä puree, täytyy pysyä rauhallisena. Soita hätänumeroon 112. Pidä puremakohta alhaalla ja älä liiku liikaa. Lääkäriin on mentävä nopeasti.',
      },
      {
        id: 'w-8',
        scenarioFi: 'Milloin hirvi on ihmiselle vaarallinen?',
        scenarioEn: 'When is a moose dangerous to a person?',
        sampleFi: 'Hirvi on vaarallinen erityisesti liikenteessä, koska se voi juosta tielle. Myös emohirvi on vaarallinen, jos se suojaa vasojaan.',
      },
      {
        id: 'w-9',
        scenarioFi: 'Mitä tarkoittaa yötön yö?',
        scenarioEn: 'What does "nightless night" mean?',
        sampleFi: 'Yötön yö tarkoittaa, että aurinko ei laske ollenkaan. Tätä tapahtuu kesällä Lapissa, jossa aurinko paistaa koko yön.',
      },
      {
        id: 'w-10',
        scenarioFi: 'Mitä voi tehdä leirintäalueella?',
        scenarioEn: 'What can you do at a campsite?',
        sampleFi: 'Leirintäalueella voi telttailla, grillata, kävellä luonnossa, kalastaa ja uida. Siellä voi myös nauttia luonnon rauhasta.',
      },
      {
        id: 'w-11',
        scenarioFi: 'Mitä ruokaa luonnosta voi saada?',
        scenarioEn: 'What food can you get from nature?',
        sampleFi: 'Luonnosta voi saada marjoja, sieniä, kalaa ja riistaa. Suomessa marjoja ovat mustikka, puolukka, lakka, vadelma ja karpalo.',
      },
      {
        id: 'w-12',
        scenarioFi: 'Kuinka monta kuukautta talvi voi kestää?',
        scenarioEn: 'How many months can winter last?',
        sampleFi: 'Talvi voi kestää 4-6 kuukautta Suomessa. Lapissa talvi voi kestää jopa 7 kuukautta.',
      },
      {
        id: 'w-13',
        scenarioFi: 'Milloin voit nähdä revontulet?',
        scenarioEn: 'When can you see the northern lights?',
        sampleFi: 'Revontulet näkyvät talvella pimeässä, erityisesti Lapissa ja Pohjois-Suomessa. Paras aika on syyskuusta maaliskuuhun.',
      },
      {
        id: 'w-14',
        scenarioFi: 'Milloin päivä on pisin?',
        scenarioEn: 'When is the day longest?',
        sampleFi: 'Pisin päivä on kesäkuussa, juhannuksen aikaan. Silloin aurinko paistaa pitkään, etelässä noin 18-19 tuntia.',
      },
      {
        id: 'w-15',
        scenarioFi: 'Millainen puu on eri vuodenaikoina?',
        scenarioEn: 'What is a tree like in different seasons?',
        sampleFi:
          'Keväällä puut saavat lehdet ja kukkivat. Kesällä ne ovat vihreitä ja reheviä. Syksyllä lehdet muuttuvat keltaisiksi, punaisiksi ja ruskeiksi. Talvella lehtipuut ovat paljaita, mutta havupuut ovat vihreitä.',
      },
      {
        id: 'w-16',
        scenarioFi: 'Milloin kevät yleensä alkaa?',
        scenarioEn: 'When does spring usually begin?',
        sampleFi: 'Kevät alkaa etelässä maalis-huhtikuussa, kun lumi sulaa ja ensimmäiset kukat, kuten leskenlehdet, puhkeavat. Lapissa kevät alkaa myöhemmin, toukokuussa.',
      },
      {
        id: 'w-17',
        scenarioFi: 'Mitä tarkoittaa ruska ja kaamos?',
        scenarioEn: 'What do "ruska" and "kaamos" mean?',
        sampleFi: 'Ruska on syksyn värikäs aika, kun lehdet muuttuvat värikkäiksi. Kaamos on talven pimeä aika Lapissa, kun aurinko ei nouse ollenkaan.',
      },
      {
        id: 'w-18',
        scenarioFi: 'Jätteiden lajittelu: kerro, miten jätteet lajitellaan Suomessa.',
        scenarioEn: 'Waste sorting: explain how waste is sorted in Finland.',
        sampleFi:
          'Suomessa lajitellaan jätteet tarkasti. Tärkeimmät jätelajit ovat:\n- Biojäte - ruokajätteet, kahvinporot, hedelmänkuoret\n- Kartonki - maitotölkit, munakotelot, lehdet\n- Lasi - pullot, purkit\n- Metalli - säilykepurkit, folio\n- Muovi - muovipullot, pakkaukset\n- Sekajäte - kaikki, mitä ei voi lajitella\n\nLajittelu on tärkeää, koska se vähentää ympäristön kuormitusta. Kierrätys säästää luonnonvaroja ja energiaa. Suomessa on hyvät kierrätysjärjestelmät, kuten pullonpalautus.',
      },
    ],
    dialogues: [
      {
        id: 'd1',
        titleFi: 'Eksynyt metsässä',
        titleEn: 'Lost in the forest',
        turns: [
          { speaker: 'Ystävä', fi: 'No moi! Mitäs sulle?' },
          { speaker: 'Sinä', fi: 'Hei! Mulla on hätä. Mä olen eksynyt metsässä!' },
          { speaker: 'Ystävä', fi: 'Eikä! Missä metsässä sä oot?' },
          { speaker: 'Sinä', fi: 'Mä olen kävelyllä Nuuksion kansallispuistossa, mutta en löydä takaisin polulle.' },
          { speaker: 'Ystävä', fi: 'Okei okei, no millä sä menit sinne?' },
          { speaker: 'Sinä', fi: 'Mä lähdin tänään aamulla patikoimaan. Seurasin sinisiä merkkejä, mutta nyt en näe niitä enää.' },
          {
            speaker: 'Ystävä',
            fi: 'No mut onneks sulla on kännykkä, siitähän voi paikantaa, missä sä oot. Mä soitan nyt hätäkeskukseen, että joku lähtee hakemaan sua. Kai sulla on lämpimästi vaatteita?',
          },
          { speaker: 'Sinä', fi: 'Valitettavasti mulla on vain kevyt takki ja shortsit. En varautunut kunnolla.' },
          { speaker: 'Ystävä', fi: 'Voi ei! No sitten on jo kiire. Mä soitan nyt. Pidä itses lämpimänä ja älä oo huolissas. Joku tulee ihan kohta.' },
          { speaker: 'Sinä', fi: 'Kiitos! Odotan täällä. Soita nopeasti!' },
        ],
      },
      {
        id: 'd2',
        titleFi: 'Kalastusluvan kysyminen',
        titleEn: 'Asking about a fishing permit',
        turns: [
          { speaker: 'Virkailija', fi: 'Metsähallitus, miten voin auttaa?' },
          { speaker: 'Sinä', fi: 'Hei! Soitan, koska haluaisin kysyä kalastusluvasta.' },
          { speaker: 'Virkailija', fi: 'Joo, kyllä. Missä päin aiot kalastaa?' },
          { speaker: 'Sinä', fi: 'Aion kalastaa järvessä Lapin alueella.' },
          { speaker: 'Virkailija', fi: 'Ahaa. Luvan hinta riippuu myös siitä, missä tarkoituksessa kalastat ja millä välineellä.' },
          { speaker: 'Sinä', fi: 'Mitä lupa maksaa virkistyskalastukseen?' },
          {
            speaker: 'Virkailija',
            fi: 'Virkistyskalastuslupa yhteen vesistöön on noin 63€ vuosi, mutta sitten tarvitaan viehelupa erikseen, sen hinta riippuu kalastajan iästä. Tämä on aika monimutkainen prosessi näin puhelimessa, mutta luvat saa kyllä ostettua netistä.',
          },
          { speaker: 'Sinä', fi: 'Voisitteko kertoa verkkosivun osoitteen?' },
          { speaker: 'Virkailija', fi: 'Esimerkiksi kalastusluvat.net on ihan hyvä osoite. Sieltä näkee, mitkä välineet ovat maksullisia. Onkiminen ja talvella pilkkiminen eivät vaadi lupaa.' },
          { speaker: 'Sinä', fi: 'Kiitos paljon avusta! Menen katsomaan nettisivua.' },
        ],
      },
      {
        id: 'd3',
        titleFi: 'Keskustelu luonnosta',
        titleEn: 'Conversation about nature',
        turns: [
          { speaker: 'Ystävä', fi: 'Moi! Mitä sä teet tänä viikonloppuna?' },
          { speaker: 'Sinä', fi: 'Hei! Ajattelin mennä luontoon. Haluaisin nähdä ruskan värit.' },
          { speaker: 'Ystävä', fi: 'Voi, kuulostaa ihanalta! Minne sä aiot mennä?' },
          { speaker: 'Sinä', fi: 'Aion mennä retkeilemään kansallispuistoon. Siellä on kauniita metsiä ja järviä.' },
          { speaker: 'Ystävä', fi: 'Kauanko sä olet siellä?' },
          { speaker: 'Sinä', fi: 'Viikonlopun yli. Telttailen ja nautin luonnon rauhasta.' },
          { speaker: 'Ystävä', fi: 'Mitä sä otat mukaan?' },
          { speaker: 'Sinä', fi: 'Mukaan tulee teltta, makuupussi, ruokaa, vettä, kartta ja kompassi.' },
          { speaker: 'Ystävä', fi: 'Ole varovainen siellä! Soita, kun tulet takaisin.' },
          { speaker: 'Sinä', fi: 'Kiitos! Kyllä mä varon. Soitan, kun pääsen kotiin.' },
        ],
      },
    ],
    reactions: [
      {
        id: 'r1',
        scenarioFi: 'Löydät sohvan, jääkaapin ja paljon roskapusseja metsästä. Soitat kaatopaikalle ja kerrot tilanteesta.',
        scenarioEn: 'You find a sofa, fridge, and trash bags dumped in the forest. Call the dump and report it.',
        sampleFi: 'Hei! Olen metsässä ja löysin täältä sohvan, jääkaapin ja paljon roskapusseja. Joku on dumppanut jätteet luontoon. Voitteko tulla hakemaan ne? Tämä on laitonta.',
      },
      {
        id: 'r2',
        scenarioFi: 'Olet järven rannalla ja siellä on sorsia. Mummo syöttää sorsille suklaata. Mitä sanot mummolle?',
        scenarioEn: 'An elderly woman is feeding ducks chocolate by a lake. What do you say to her?',
        sampleFi: 'Anteeksi, mummo! Sorsat eivät voi syödä suklaata, se on niille myrkyllistä. Olkaa hyvä ja syöttäkää niille vaikka leipää tai kauraa, niin ne pysyvät terveinä.',
      },
      {
        id: 'r3',
        scenarioFi: 'Olet kaupassa ja haluat ostaa hyvät kengät metsään kävelyä varten. Pyydät apua myyjältä.',
        scenarioEn: "At a store, you want good shoes for forest walks. Ask the salesperson for help.",
        sampleFi: 'Hei! Etsin hyviä kenkiä metsäkävelyyn. Tarvitsen kengät, jotka ovat vedenpitävät, mukavat ja kestävät. Mitä suosittelisitte?',
      },
      {
        id: 'r4',
        scenarioFi: 'Olet kävelyllä. Näet, että joku heittää käytetyn jääkaapin metsään. Mitä sanot?',
        scenarioEn: 'While walking, you see someone dumping a fridge in the forest. What do you say?',
        sampleFi: 'Hei! Ette voi heittää jääkaappia metsään! Se on laitonta ja saastuttaa luontoa. Jätteet pitää viedä kaatopaikalle tai kierrätykseen.',
      },
      {
        id: 'r5',
        scenarioFi: 'Olet muuttamassa uuteen kotiin. Haluat lahjoittaa jonkin vanhan tavarasi (keksi itse, minkä) ystävällesi. Mitä sanot?',
        scenarioEn: "You're moving and want to give an old item of yours to a friend. What do you say?",
        sampleFi: 'Hei! Mulla on vanha sohva, jota en enää tarvitse. Haluaisin lahjoittaa sen sinulle, jos haluat. Se on hyvässä kunnossa, ja ajattelin, että se sopisi hyvin sun kotiin.',
      },
      {
        id: 'r6',
        scenarioFi: 'Etsit uutta asuntoa. Välittäjä kysyy, mikä on sinulle tärkeää asuinympäristössä. Mitä sanot?',
        scenarioEn: 'A real-estate agent asks what matters to you about the living environment.',
        sampleFi:
          'Minulle on tärkeää, että asuinympäristö on rauhallinen ja vihreä. Haluaisin asua lähellä metsää tai puistoa, jossa voi kävellä. Myös hyvät kulkuyhteydet ja palvelut lähellä ovat tärkeitä.',
      },
      {
        id: 'r7',
        scenarioFi: 'Ulkomailla asuva ystäväsi kysyy sinulta, millainen on Suomen luonto. Mitä sanot?',
        scenarioEn: 'A friend abroad asks what Finnish nature is like.',
        sampleFi:
          'Suomen luonto on upea! Täällä on paljon metsiä, järviä ja saaria. Talvella on lunta ja pimeää, kesällä aurinko paistaa pitkään. Luonto on puhdasta ja rauhallista. Suomessa on myös neljä vuodenaikaa, joten maisemat vaihtuvat paljon.',
      },
      {
        id: 'r8',
        scenarioFi: 'Näet kadulla miehen, joka potkii jotain eläintä (mitä?). Mitä sanot?',
        scenarioEn: 'You see a man kicking an animal on the street. What do you say?',
        sampleFi: 'Hei! Lopettakaa heti! Eläinten potkiminen on väärin ja laitonta. Jos teillä on ongelma, voitte soittaa eläinsuojeluun. Antakaa eläimen olla rauhassa.',
      },
    ],
    longSpeaking: [
      {
        id: 'k-a',
        titleFi: 'Luonto ja asuinympäristö',
        titleEn: 'Nature and living environment',
        instructionsFi:
          'Kerro, mitä luonto ja asuinympäristö sinulle merkitsevät. Millaisessa paikassa asut? Millaiset mahdollisuudet siellä on liikkua luonnossa? Mitä luonto ja luonnon läheisyys sinulle merkitsevät? Millaisesta luonnosta/ympäristöstä pidät eniten?',
        sampleFi:
          'Luonto on minulle todella tärkeä. Asun lähellä metsää ja järveä, joten minulla on hyvät mahdollisuudet liikkua luonnossa. Käyn usein kävelyllä metsässä ja nautin rauhasta. Luonto auttaa minua rentoutumaan ja unohtamaan arjen stressin.\n\nPidän eniten metsäluonnosta, erityisesti syksyllä, kun ruska on kauneimmillaan. Värit ovat upeita: punaista, keltaista ja oranssia. Myös kesällä on ihanaa, kun voi uida järvessä ja grillata.\n\nLuonnon läheisyys merkitsee minulle vapautta ja rauhaa. Voin hengittää raikasta ilmaa ja kuulla lintujen laulua. Se on parasta lääkettä väsymykseen. Toivon, että voin aina asua luonnon lähellä.',
      },
      {
        id: 'k-b',
        titleFi: 'Luonnonsuojelu',
        titleEn: 'Nature conservation',
        instructionsFi:
          'Kerro luonnonsuojelusta. Mitä ajattelet luonnon suojelemisesta? Millä tavalla voimme suojella luontoa? Toimitko itse ympäristöystävällisesti? Miten ja missä asioissa?',
        sampleFi:
          'Luonnonsuojelu on erittäin tärkeää. Meidän pitää suojella luontoa tuleville sukupolville. Luonto on kaunis ja arvokas, ja se tarjoaa meille ruokaa, vettä ja puhdasta ilmaa.\n\nVoimme suojella luontoa monella tavalla: lajittelemalla jätteet, käyttämällä vähemmän muovia, kierrättämällä, säästämällä energiaa ja käyttämällä julkista liikennettä. Pienet teot voivat tehdä suuren eron.\n\nItse toimin ympäristöystävällisesti. Lajittelen jätteet huolellisesti, käytän kestokasseja muovipussien sijaan ja kierrätän vaatteita. Pyrin ostamaan kotimaisia tuotteita. Käytän bussia auton sijaan. Luonnonsuojelu on jokaisen vastuu.',
      },
      {
        id: 'k-c',
        titleFi: 'Minun maisemani',
        titleEn: 'My landscape',
        instructionsFi:
          'Ihmisellä voi olla maisema, joka on tärkeä. Yhdelle se voi olla järven ranta, toiselle tärkeä on metsä, kolmannelle miljoonakaupunki. Kuvaile maisemaa, joka on sinulle tärkeä. Kerro myös, miksi se on sinulle tärkeä.',
        sampleFi:
          'Minulle tärkein maisema on lapsuuteni kesämökki. Se sijaitsee järven rannalla, ja siellä on vanha puinen mökki, jossa vietin lapsuuden kesät. Järven vesi on kirkasta, ja rannalla on kivinen uimaranta.\n\nMökillä on sauna, ja kun on saunonut, voi uida järvessä. Illalla voi istua terassilla ja katsoa auringonlaskua. Metsä alkaa aivan pihasta, ja siellä on paljon marjoja ja sieniä.\n\nTämä maisema on minulle tärkeä, koska se tuo mieleen rauhan ja onnellisuuden. Siellä ei ole kiirettä, ja voi vain olla. Se on paikka, jossa voi olla oma itsensä. Mökki on minun turvapaikkani.',
      },
    ],
    opinions: [
      {
        id: 'm-a',
        titleFi: 'Pyörä vai auto?',
        titleEn: 'Bicycle or car?',
        instructionsFi:
          'Käytätkö itse enemmän pyörää vai autoa? Miksi? Kumpi on mielestäsi parempi? Miksi? Missä tilanteessa? Mitä hyviä puolia autossa/pyörässä on? Mitä huonoja puolia autossa/pyörässä on? Miksi ihmisten pitäisi käyttää enemmän autoa/pyörää?',
        sampleFi:
          'Käytän itse enemmän pyörää, koska asun kaupungissa ja lyhyet matkat ovat helpompia pyörällä. Pyörä on ekologisempi ja halvempi kuin auto. Se on myös terveellistä.\n\nMielestäni pyörä on parempi kaupungissa, mutta auto on tarpeellinen maaseudulla tai pitkillä matkoilla. Autossa on hyvää, että se on nopea ja suojaa säältä. Huonoa autossa on, että se on kallis, saastuttaa ja parkkipaikan löytäminen on vaikeaa.\n\nPyörässä hyvää on, että se on halpa, terveellinen ja ympäristöystävällinen. Huonoa pyörässä on, että sateella tai talvella pyöräily on epämukavaa.\n\nIhmisten pitäisi käyttää enemmän pyörää, koska se vähentää saasteita ja liikennettä. Pyöräily on hyväksi terveydelle. Kaupungeissa pyöräily on usein nopeampaa kuin autolla ajaminen.',
      },
      {
        id: 'm-b',
        titleFi: 'Ihmiset ostavat liikaa turhaa tavaraa',
        titleEn: 'People buy too much useless stuff',
        instructionsFi: 'Ihmisillä on usein paljon tavaroita. Mikä on turhaa ja mikä on tarpeellista? Onko sinulla turhaa tavaraa? Mitä? Miksi ihmiset ostavat turhia tavaroita?',
        sampleFi:
          'Mielestäni ihmiset ostavat liikaa tavaraa, jota he eivät oikeasti tarvitse. Tarpeellista tavaraa ovat ruoka, vaatteet, kodinkoneet ja työvälineet. Turhaa tavaraa ovat koriste-esineet, liikaa vaatteita, joita ei koskaan käytä, ja kertakäyttötuotteet.\n\nMinullakin on turhaa tavaraa: vanhoja vaatteita, joita en käytä, ja kirjoja, joita en ole lukenut. Olen yrittänyt vähentää turhaa tavaraa lahjoittamalla ja kierrättämällä.\n\nIhmiset ostavat turhia tavaroita, koska mainonta houkuttelee, ja ostaminen tuottaa hetkellistä iloa. Myös sosiaalinen paine voi vaikuttaa: haluamme näyttää hyvältä ja omistaa uusimpia tuotteita. On tärkeää miettiä, tarvitseeko oikeasti ostaa jotain.',
      },
      {
        id: 'm-c',
        titleFi: 'Julkisen liikenteen pitäisi olla ilmaista',
        titleEn: 'Public transport should be free',
        instructionsFi: 'Mitä mieltä olet julkisen liikenteen (juna, bussi, metro, raitiovaunu) hinnoista Suomessa? Mitä hyötyä olisi siitä, että julkinen liikenne olisi halpaa?',
        sampleFi:
          'Julkinen liikenne Suomessa on melko kallista. Esimerkiksi kertalippu Helsingissä maksaa noin 3 euroa, ja kuukausilippu maksaa yli 70 euroa. Opiskelijoille ja eläkeläisille on alennuksia, mutta silti hinnat ovat korkeat.\n\nJos julkinen liikenne olisi halvempaa tai ilmaista, siitä olisi paljon hyötyä. Ensinnäkin, useammat ihmiset käyttäisivät julkista liikennettä, mikä vähentäisi liikennettä ja saasteita. Toiseksi, se auttaisi pienituloisia ihmisiä liikkumaan. Kolmanneksi, se kannustaisi ympäristöystävällisyyteen.\n\nTietysti ilmainen julkinen liikenne maksaisi paljon. Se pitäisi rahoittaa veroilla. Mielestäni lippujen hintoja voisi laskea, mutta ilmainen liikenne on haastavaa. On kuitenkin tärkeää, että julkinen liikenne on kohtuuhintaista ja saavutettavaa kaikille.',
      },
    ],
    writingTasks: [
      {
        id: 'w1',
        titleFi: 'Kutsu',
        instructionsFi:
          'Sinun kodin lähellä on leikkipuisto, joka on huonossa kunnossa. Haluat järjestää talkoot ja kutsut kaikki naapurit auttamaan leikkipuiston siivoamisessa ja kunnostamisessa.',
        bulletsFi: [],
        sampleFi:
          'Hei naapurit!\n\nKutsun teidät talkoisiin leikkipuistoon, joka on kadun päässä. Leikkipuisto on valitettavasti huonossa kunnossa. Hiekkalaatikko on täynnä roskia, keinut ovat rikki ja penkit ovat lahoja.\n\nMielestäni meidän pitäisi kunnostaa leikkipuisto, jotta lapset voivat leikkiä turvallisesti. Suunnitelmissa on:\n- Siivota roskat\n- Korjata keinut ja liukumäki\n- Maalata penkit\n- Vaihtaa hiekka hiekkalaatikkoon\n\nVoitte tuoda mukana harjoja, roskapusseja, maalia ja työkaluja. Myös kahvia ja pullaa saa tuoda, jotta jaksamme!\n\nTalkoot järjestetään ensi lauantaina kello 10-14. Tervetuloa kaikki! Yhdessä saamme paljon aikaan.\n\nTerveisin,\n[Nimesi]',
      },
      {
        id: 'w2',
        titleFi: 'Viesti',
        instructionsFi: 'Ystäväsi haluaa muuttaa samaan paikkaan kuin sinä. Kuvaile ympäristöä ystävälle ja kerro, mitä hyviä ja huonoja puolia asuinpaikassasi on.',
        bulletsFi: [],
        sampleFi:
          'Hei [ystävän nimi]!\n\nKuulin, että harkitset muuttamista tänne samaan kaupunkiin. Se olisi ihanaa! Kerron nyt vähän tästä paikasta, jotta tiedät, millainen täällä on.\n\nHyviä puolia:\n- Luonto on lähellä: metsä ja järvi ovat vain 10 minuutin kävelymatkan päässä.\n- Täällä on rauhallista ja turvallista.\n- Julkinen liikenne toimii hyvin, bussit menevät usein.\n- Kaupassa ja kirjastossa on hyvät palvelut.\n\nHuonoja puolia:\n- Täällä on aika hiljaista, ei paljon tapahtumia.\n- Talvella lunta on paljon ja tiet voivat olla liukkaat.\n- Keskustaan on matkaa noin 20 minuuttia.\n\nKaiken kaikkiaan tämä on hyvä paikka asua. Toivottavasti muutat tänne, niin voimme nähdä useammin!\n\nTerveisin,\n[Nimesi]',
      },
      {
        id: 'w3',
        titleFi: 'Mielipide',
        instructionsFi: 'Valitse teema A tai B ja kirjoita mielipidekirjoitus.',
        bulletsFi: ['A. Kierrättäminen on vaikeaa. (Recycling is difficult.)', 'B. Muovin käyttämistä täytyy vähentää. (The use of plastic must be reduced.)'],
        sampleFi:
          'A. Kierrättäminen on vaikeaa.\n\nEn ole täysin samaa mieltä siitä, että kierrättäminen olisi vaikeaa. Suomessa kierrättäminen on helppoa, koska lajittelupisteet ovat lähellä ja ohjeet ovat selkeät.\n\nMonissa taloyhtiöissä on omat kierrätyspisteet, joissa voi lajitella paperia, lasia, metallia, muovia ja biojätettä. Lisäksi kaupoissa on pullonpalautusautomaatteja. Ohjeet lukevat usein roska-astioiden kyljessä.\n\nToisaalta, jos asuu maaseudulla, kierrätys voi olla vaikeampaa, koska lähin kierrätyspiste voi olla kaukana. Myös kaikki eivät tiedä, miten eri jätteet lajitellaan.\n\nMielestäni kierrättäminen on tärkeää ja kannattavaa. Se ei ole vaikeaa, kun oppii tavat. Kouluissa ja netissä on hyvää tietoa kierrätyksestä. Kun jokainen lajittelee, voimme suojella ympäristöä.\n\n---\n\nB. Muovin käyttämistä täytyy vähentää.\n\nOlen täysin samaa mieltä siitä, että muovin käyttöä täytyy vähentää. Muovi saastuttaa valtameriä ja luontoa, ja se hajoaa todella hitaasti. Muovijäte on suuri ympäristöongelma.\n\nVoimme vähentää muovin käyttöä monella tavalla:\n- Käyttää kestokasseja muovipussien sijaan\n- Ostaa tuotteita, joissa on vähemmän muovipakkauksia\n- Kierrättää muovit\n- Vältetään kertakäyttömuovia, kuten pillit ja muoviset astiat\n- Käyttää juomapulloja uudelleen\n\nMyös kaupat ja yritykset voivat vähentää muovin käyttöä. Monet kaupat ovat jo vähentäneet muovipusseja. Suomessa on hyvä muovinkierrätysjärjestelmä, mutta vielä enemmän voitaisiin tehdä.\n\nMuovin vähentäminen on jokaisen vastuu. Pienet teot, kuten oman kahvikupin käyttö, voivat tehdä suuren eron. Tulevaisuudessa toivottavasti muovia käytetään vähemmän ja korvataan kestävillä materiaaleilla.',
      },
    ],
    vocabSummary: [
      { fi: 'luonto', en: 'nature' },
      { fi: 'ympäristö', en: 'environment' },
      { fi: 'metsä', en: 'forest' },
      { fi: 'järvi', en: 'lake' },
      { fi: 'suo', en: 'swamp/bog' },
      { fi: 'marja', en: 'berry' },
      { fi: 'sieni', en: 'mushroom' },
      { fi: 'kala', en: 'fish' },
      { fi: 'hirvi', en: 'moose/elk' },
      { fi: 'karhu', en: 'bear' },
      { fi: 'susi', en: 'wolf' },
      { fi: 'kyykäärme', en: 'adder/viper' },
      { fi: 'retki', en: 'trip/excursion' },
      { fi: 'patikoida', en: 'to hike' },
      { fi: 'kalastaa', en: 'to fish' },
      { fi: 'kalastuslupa', en: 'fishing permit' },
      { fi: 'onkiminen', en: 'angling' },
      { fi: 'pilkkiminen', en: 'ice fishing' },
      { fi: 'kierrättää', en: 'to recycle' },
      { fi: 'lajitella', en: 'to sort' },
      { fi: 'biojäte', en: 'biowaste' },
      { fi: 'sekajäte', en: 'mixed waste' },
      { fi: 'kierrätys', en: 'recycling' },
      { fi: 'kestävä kehitys', en: 'sustainable development' },
      { fi: 'saastuttaa', en: 'to pollute' },
      { fi: 'yötön yö', en: 'nightless night' },
      { fi: 'kaamos', en: 'polar night' },
      { fi: 'ruska', en: 'autumn colors' },
      { fi: 'revontulet', en: 'northern lights' },
      { fi: 'leirintäalue', en: 'campsite' },
      { fi: 'telttailla', en: 'to camp' },
      { fi: 'talkoot', en: 'working bee/volunteer work' },
      { fi: 'kansallispuisto', en: 'national park' },
    ],
  },
  {
    id: 'conv-ch4',
    titleFi: 'Luku 4: Työ ja koulutus',
    titleEn: 'Chapter 4: Work and education',
    level: 'B1',
    warmup: [
      {
        id: 'w-1',
        scenarioFi: 'Mikä on sinun ammattisi?',
        scenarioEn: 'What is your profession?',
        sampleFi: 'Olen [ammattisi, esim. insinööri / opettaja / sairaanhoitaja / kokki]. Työskentelen [yrityksen/paikan nimi].',
      },
      {
        id: 'w-2',
        scenarioFi: 'Missä olet töissä / koulussa?',
        scenarioEn: 'Where do you work / study?',
        sampleFi: 'Olen töissä [yrityksen nimi]:ssa. / Opiskelen [koulu/yliopisto]:ssa.',
      },
      {
        id: 'w-3',
        scenarioFi: 'Mitä kieltä sinä puhut töissä?',
        scenarioEn: 'What language do you speak at work?',
        sampleFi: 'Puhun töissä suomea ja englantia. Työkaverit ovat eri maista, joten käytämme usein englantia.',
      },
      {
        id: 'w-4',
        scenarioFi: 'Mitä ammatteja sinun kotimaassa on?',
        scenarioEn: 'What professions are there in your home country?',
        sampleFi:
          'Kotimaassani on monia ammatteja: lääkäreitä, opettajia, insinöörejä, maanviljelijöitä, kalastajia ja käsityöläisiä. Maaseudulla on paljon maataloustöitä, kaupungeissa taas palvelualan töitä.',
      },
      {
        id: 'w-5',
        scenarioFi: 'Mikä ammatti on arvostettu kotimaassasi?',
        scenarioEn: 'What profession is respected in your home country?',
        sampleFi: 'Kotimaassani arvostetaan erityisesti lääkäreitä, insinöörejä ja opettajia. Myös lakimiehet ja poliitikot ovat arvostettuja.',
      },
      {
        id: 'w-6',
        scenarioFi: 'Millaisia töitä sinun ystävät / perhe tekevät?',
        scenarioEn: 'What kind of work do your friends/family do?',
        sampleFi: 'Äitini on opettaja ja isäni on insinööri. Ystäväni ovat eri aloilla: yksi on sairaanhoitaja, toinen on myyjä ja kolmas on opiskelija.',
      },
      {
        id: 'w-7',
        scenarioFi: 'Millaista on työelämän kielitaito?',
        scenarioEn: 'What is work-life language proficiency like?',
        sampleFi:
          'Työelämässä tarvitaan hyvää kielitaitoa. Pitää osata puhua, kirjoittaa ja ymmärtää ammattisanastoa. Suomessa tarvitaan usein suomea, mutta myös englantia tarvitaan kansainvälisissä tehtävissä.',
      },
      {
        id: 'w-8',
        scenarioFi: 'Millaista kieltä töissä tarvitaan?',
        scenarioEn: 'What kind of language is needed at work?',
        sampleFi:
          'Töissä tarvitaan sekä arkikieltä että ammattikieltä. Pitää osata kommunikoida työkavereiden, asiakkaiden ja pomon kanssa. Tarvitaan myös sähköpostien kirjoittamista ja kokouksissa puhumista.',
      },
      {
        id: 'w-9',
        scenarioFi: 'Mikä on riittävä kielitaito?',
        scenarioEn: 'What is sufficient language proficiency?',
        sampleFi:
          'Riittävä kielitaito tarkoittaa, että pystyy hoitamaan työtehtävät, ymmärtää ohjeet ja pystyy kommunikoimaan työyhteisössä. Taso B1-B2 on usein riittävä.',
      },
      {
        id: 'w-10',
        scenarioFi: "Käytä ilmausta 'perusteella' (on the basis of / by) kolmessa esimerkkilauseessa.",
        scenarioEn: "Use the phrase 'perusteella' (on the basis of) in three example sentences.",
        sampleFi:
          "Millä perusteella sinä luulet, että minä en puhu totta? (On what basis do you think I'm not telling the truth?)\nPäätös tehtiin hakemuksen perusteella. (The decision was made based on the application.)\nHän valittiin työhön kokemuksen perusteella. (He was chosen for the job based on experience.)",
      },
      {
        id: 'w-11',
        scenarioFi: "Käytä ilmausta 'syystä tai toisesta' (for one reason or another) kolmessa esimerkkilauseessa.",
        scenarioEn: "Use the phrase 'syystä tai toisesta' (for one reason or another) in three example sentences.",
        sampleFi:
          "Syystä tai toisesta Pekka ei tullut palaveriin. (For one reason or another, Pekka didn't come to the meeting.)\nSyystä tai toisesta en saanut työtä. (For one reason or another, I didn't get the job.)\nSyystä tai toisesta kone ei toimi. (For one reason or another, the machine doesn't work.)",
      },
      {
        id: 'w-12',
        scenarioFi: "Käytä ilmausta 'omaksi ilokseen' (for one's own enjoyment) kolmessa esimerkkilauseessa.",
        scenarioEn: "Use the phrase 'omaksi ilokseen' (for one's own enjoyment) in three example sentences.",
        sampleFi:
          "Lidia opiskelee omaksi ilokseen. (Lidia studies for her own enjoyment.)\nHän soittaa pianoa omaksi ilokseen. (He plays piano for his own enjoyment.)\nOpettelen suomea omaksi ilokseni, vaikka en tarvitse sitä töissä. (I study Finnish for my own enjoyment, even though I don't need it at work.)",
      },
    ],
    dialogues: [
      {
        id: 'd1',
        titleFi: 'Ilmoitus sairaudesta pomolle',
        titleEn: 'Informing the boss about illness',
        turns: [
          { speaker: 'Sinä', fi: '[Soitat ja pomo vastaa]', en: 'You call and boss answers', isPlaceholder: true },
          { speaker: 'Pomo', fi: 'Nieminen.' },
          { speaker: 'Sinä', fi: 'Hei, tässä [nimesi]. Soitan, koska olen sairas enkä pääse töihin tänään.' },
          { speaker: 'Pomo', fi: 'Ahaa... no ei sille sitten mitään voi. Oletko soittanut jo työterveyteen?' },
          { speaker: 'Sinä', fi: 'Kyllä, soitin juuri ja sain ajan lääkärille tänään kello 14.' },
          { speaker: 'Pomo', fi: 'Selvä. Oliko sulla jotain sellaisia tärkeitä hommia kesken, että tarvitset sijaisen?' },
          { speaker: 'Sinä', fi: 'Minulla on muutama tärkeä sähköposti lähetettävänä. Voisinko lähettää ne kotoa, jos jaksan?' },
          { speaker: 'Pomo', fi: 'Selvä juttu. Nyt pikaista paranemista. Ilmoita sitten, kun tiedät, kuinka pitkä sairausloma sulle tuli.' },
          { speaker: 'Sinä', fi: 'Kiitos! Ilmoitan heti kun tiedän. Nähdään pian.' },
        ],
      },
      {
        id: 'd2',
        titleFi: 'Seminaarissa kollegan kanssa',
        titleEn: 'At a seminar with a colleague',
        turns: [
          { speaker: 'Kollega', fi: 'Olipa hyvä esitys se toinen tänään! Tykkäsitkö sä?' },
          { speaker: 'Sinä', fi: 'Kyllä tykkäsin! Se oli todella mielenkiintoinen ja puhuja oli hyvä.' },
          { speaker: 'Kollega', fi: 'Mä en muista hänen nimeä. Katsotaan ohjelmasta. Odotas. Muistatko mihin aikaan hänen esitys oli?' },
          { speaker: 'Sinä', fi: 'Hänen esitys oli kello 11. Hän puhui digitaalisesta markkinoinnista.' },
          { speaker: 'Kollega', fi: 'Joo, tässä! Helena Roihu. Hän on todella hyvä puhuja! Mukaansatempaava. Mä ainakin inspiroiduin, kun kuuntelin. Entä sä?' },
          { speaker: 'Sinä', fi: 'Kyllä, minäkin inspiroiduin! Hänellä oli hyviä esimerkkejä ja selkeä tapa puhua.' },
          { speaker: 'Kollega', fi: 'Se kolmas puhuja oli myös hyvä, mutta teema ei ollut niin kiinnostava.' },
          { speaker: 'Sinä', fi: 'Olen samaa mieltä. Hän puhui teknisistä yksityiskohdista, jotka eivät olleet kovin kiinnostavia.' },
          { speaker: 'Kollega', fi: 'Kyllä! Ootas, se on tuolla salissa 3. Esitys alkaa viiden minuutin kuluttua. Haetaanko kahvit mukaan sinne?' },
          { speaker: 'Sinä', fi: 'Hyvä idea! Haetaan kahvit ja mennään sitten saliin 3.' },
        ],
      },
      {
        id: 'd3',
        titleFi: 'Tapaamisen sopiminen',
        titleEn: 'Scheduling a meeting',
        turns: [
          { speaker: 'Kollega', fi: 'Kuule, meidän pitäs tavata ja jutella tästä hankkeesta. Milloin sulla olisi aikaa?' },
          { speaker: 'Sinä', fi: 'Katsotaanpa kalenterista. Milloin sinulla olisi aikaa?' },
          {
            speaker: 'Kollega',
            fi: 'Mulla on kalenteri ihan täynnä, mutta ootas mä tarkistan. Hmmm. Se ei onnistu. Sopisko sulle perjantaina aamupäivällä? Mulle sopis silloin mihin aikaan vaan.',
          },
          { speaker: 'Sinä', fi: 'Valitettavasti perjantai ei sovi minulle. Minulla on palaveri koko aamupäivän.' },
          { speaker: 'Kollega', fi: 'Voi hitto. No sitten se menee väkisin parilla viikolla eteenpäin. Mites sitten toi tiistai kahdeskymmenesviides päivä?' },
          { speaker: 'Sinä', fi: 'Kyllä, se sopii hyvin. Mihin aikaan?' },
          { speaker: 'Kollega', fi: 'Juu se sopii. Onpa vaikea löytää yhteistä aikaa. Taitaa olla kiireisin aika vuodesta.' },
          { speaker: 'Sinä', fi: 'Kyllä, näyttää siltä. Entä kello 14? Sopiiko se sinulle?' },
          { speaker: 'Kollega', fi: 'No just näin se on. Mutta hyvä, että nyt on ainakin aika kalenterissa varattu. Mä varaan meille neukkarin ja laitan vaikka sulle viestin sitten, missä tavataan.' },
          { speaker: 'Sinä', fi: 'Hyvä! Odotan viestiäsi. Nähdään tiistaina!' },
        ],
      },
      {
        id: 'd4',
        titleFi: 'Työmatkasta keskustelu',
        titleEn: 'Discussing a business trip',
        turns: [
          { speaker: 'Työkaveri', fi: 'No moi hei, pitkästä aikaa! Ei ole näkynyt. Missä sä oot ollut?' },
          { speaker: 'Sinä', fi: 'Hei! Mä olin työmatkalla Berliinissä viikon.' },
          { speaker: 'Työkaveri', fi: 'Jaa jaa. No miten reissu meni?' },
          { speaker: 'Sinä', fi: 'Reissu meni hyvin. Tapasin asiakkaita ja pidin esityksen uudesta tuotteesta.' },
          { speaker: 'Työkaveri', fi: 'Niin justiinsa. No oliko hyvät järjestelyt? Hotellit ja muut?' },
          { speaker: 'Sinä', fi: 'Hotelli oli hyvä ja sijainti oli keskustassa. Kaikki sujui hyvin.' },
          { speaker: 'Työkaveri', fi: 'Kuulostaa hyvältä! Millainen aamupala hotellissa oli?' },
          { speaker: 'Sinä', fi: 'Aamupala oli mahtava! Siellä oli paljon vaihtoehtoja: leipää, hedelmiä, jugurttia ja lämmintä ruokaa.' },
          { speaker: 'Työkaveri', fi: 'Se on välillä kiva käydä reissussa, mutta on ne työmatkat aika raskaita myös. Mikä fiilis sulla nyt on?' },
          { speaker: 'Sinä', fi: 'Olen vähän väsynyt, mutta tyytyväinen. Työmatka onnistui hyvin, vaikka se oli raskas.' },
          { speaker: 'Työkaveri', fi: 'Jep jep. Mut nyt pitää mennä jatkamaan hommia. Kiva nähdä taas.' },
          { speaker: 'Sinä', fi: 'Kiitos, samoin! Nähdään myöhemmin!' },
        ],
      },
    ],
    reactions: [
      {
        id: 'r1',
        scenarioFi: 'Sinulla on asiaa työkaverillesi ja menet tapaamaan häntä. Hän ei kuitenkaan ole työpisteellään. Lähetä hänelle WhatsAppilla ääniviesti, jossa kerrot asiasi.',
        scenarioEn: "Your colleague isn't at their desk. Leave them a WhatsApp voice message.",
        sampleFi: 'Hei, tässä [nimi]. Mä tulin sun työpisteelle, mutta sä et ole täällä. Mulla olisi asiaa siitä projektista, josta puhuttiin. Soita mulle, kun voit, niin jutellaan. Kiitos!',
      },
      {
        id: 'r2',
        scenarioFi: 'Sinun työpaikalle on tullut uusi työntekijä. Hän ei tiedä, mitä tehdä. Auta häntä.',
        scenarioEn: "A new employee doesn't know what to do. Help them.",
        sampleFi: 'Hei ja tervetuloa! Mä näytän sulle, miten tämä homma toimii. Tässä on sun työpiste, ja tässä on tietokone. Täältä löydät ohjelmat. Jos tarvitset apua, kysy vaan!',
      },
      {
        id: 'r3',
        scenarioFi: 'Olet ollut työhaastattelussa. Soitat haastattelijalle, koska haluat vielä kysyä jotakin (keksi itse, mitä).',
        scenarioEn: 'After a job interview, call the interviewer with a follow-up question.',
        sampleFi: 'Hei, tässä [nimi]. Kiitos vielä eilisestä haastattelusta. Mulla olisi yksi kysymys: milloin voisin kuulla päätöksen? Ja minkälainen työaikataulu teillä on? Kiitos!',
      },
      {
        id: 'r4',
        scenarioFi: 'Sinun palkassa on virhe (keksi itse, mikä). Soitat palkanlaskijalle.',
        scenarioEn: 'There is an error in your salary. Call payroll.',
        sampleFi: 'Hei, tässä [nimi]. Huomasin, että palkassani on virhe. Minulta puuttuu 100 euroa tästä kuukauden palkasta. Voisitteko tarkistaa asian?',
      },
      {
        id: 'r5',
        scenarioFi: 'Työkaverisi täyttää pian 50 vuotta. Sinä haluat järjestää ohjelmaa. Ehdota työkavereille, miten voitte juhlia.',
        scenarioEn: "A colleague is turning 50 soon. Suggest to coworkers how to celebrate.",
        sampleFi: 'Hei kaikki! Maija täyttää pian 50 vuotta. Ehdotan, että järjestetään yllätysjuhlat kahvihuoneessa. Tuon kakun, ja voitte tuoda jotain pientä syötävää. Mitä mieltä olette?',
      },
      {
        id: 'r6',
        scenarioFi: 'Olet saanut uuden työpaikan ja sinun täytyy irtisanoutua. Kerro pomolle tilanne.',
        scenarioEn: 'You got a new job and need to resign. Tell your boss.',
        sampleFi: 'Hei, mulla olisi asiaa. Olen saanut uuden työpaikan, joten minun täytyy irtisanoutua. Olen todella kiitollinen teillä saamastani kokemuksesta. Irtisanoutumisaikani on kuukausi.',
      },
      {
        id: 'r7',
        scenarioFi: 'Tiedät todella hyvän työntekijän sinun projektiin. Suosittele häntä sinun pomolle.',
        scenarioEn: 'You know a great employee for your project. Recommend them to your boss.',
        sampleFi:
          'Hei, mä haluaisin suositella kollegaani Liisaa projektiin. Hän on todella ammattitaitoinen, työskentelee tehokkaasti ja tulee hyvin toimeen ihmisten kanssa. Hän sopisi erinomaisesti tähän projektiin.',
      },
      {
        id: 'r8',
        scenarioFi: 'Sinun täytyy varata neuvotteluhuone. Kerro, milloin tarvitset sitä ja kuinka ison neuvotteluhuoneen tarvitset.',
        scenarioEn: 'You need to book a meeting room. State when and how big a room you need.',
        sampleFi: 'Hei, haluaisin varata neuvotteluhuoneen ensi viikon tiistaille kello 10-12. Tarvitsemme tilaa 6 hengelle ja videoneuvottelulaitteet. Onko huonetta vapaana?',
      },
      {
        id: 'r9',
        scenarioFi: 'Työkaverisi ei ole tehnyt sovittua asiaa (keksi itse, mitä). Olet hänelle vihainen. Kerro, mitä mieltä olet siitä, että hän ei tehnyt, mitä oli sovittu.',
        scenarioEn: "A colleague didn't do what was agreed. Tell them how you feel about it.",
        sampleFi: 'Hei, mä olen pettynyt. Sanoit, että hoidat raportin, mutta et ole tehnyt sitä. Nyt mulla on kiire, ja joudun tekemään sen itse. Olisit voinut kertoa aiemmin, ettet ehtinyt.',
      },
      {
        id: 'r10',
        scenarioFi: 'Sinulla on liikaa töitä ja olet tosi väsynyt. Ehdota sinun pomolle, miten sinun töitä voi helpottaa.',
        scenarioEn: "You're overworked and tired. Suggest to your boss how your workload could be eased.",
        sampleFi: 'Hei, mä olen todella väsynyt, koska mulla on liikaa töitä. Voisiko osa töistä siirtää toiselle? Tai voisimmeko palkata harjoittelijan auttamaan? Tarvitsen apua.',
      },
      {
        id: 'r11',
        scenarioFi: 'Työkaverisi jää äitiyslomalle. Mitä sanot?',
        scenarioEn: "A colleague is going on maternity leave. What do you say?",
        sampleFi: 'Onneksi olkoon! Mahtava uutinen! Olen todella iloinen puolestasi. Nauti äitiyslomasta ja vauvan kanssa olemisesta. Pidämme sinuun yhteyttä!',
      },
      {
        id: 'r12',
        scenarioFi: 'Sinun ystävä on saanut potkut. Mitä sanot?',
        scenarioEn: "Your friend got fired. What do you say?",
        sampleFi: 'Voi ei! Olen todella pahoillani kuullessani tämän. Se on varmasti vaikeaa. Tarvitsetko apua työnhaussa? Voimme yhdessä katsoa työpaikkailmoituksia.',
      },
      {
        id: 'r13',
        scenarioFi: 'Sinun ystävä on saanut uuden, tosi hyvän työpaikan. Mitä sanot?',
        scenarioEn: 'Your friend got a great new job. What do you say?',
        sampleFi: 'Onneksi olkoon! Tämä on hienoa! Olen todella iloinen puolestasi. Millainen se työ on? Kerro lisää!',
      },
      {
        id: 'r14',
        scenarioFi: 'Sinun pomo ilmoittaa, että tulee iso muutos organisaatiossa ja henkilökunnasta irtisanotaan 20%. Kerro työkaverille, mitä ajattelet asiasta.',
        scenarioEn: 'Your boss announces 20% layoffs. Tell a colleague what you think.',
        sampleFi:
          'Tämä on todella huono uutinen. 20% irtisanomiset on iso määrä. Olen huolissani omasta paikastani. Pelkään, että moni menettää työpaikkansa. Tämä vaikuttaa koko työyhteisöön.',
      },
      {
        id: 'r15',
        scenarioFi: 'Sinun palkkasi on mielestäsi liian pieni. Perustele pomolle, miksi tarvitset palkankorotuksen.',
        scenarioEn: 'You think your salary is too low. Argue to your boss why you need a raise.',
        sampleFi:
          'Hei, haluaisin keskustella palkastani. Olen työskennellyt täällä jo kaksi vuotta ja hoitanut vastuualueitani hyvin. Olen myös saanut positiivista palautetta asiakkailta. Uskon, että ansaitsisin palkankorotuksen.',
      },
      {
        id: 'r16',
        scenarioFi: 'Haluat osallistua koulutukseen (keksi itse, mihin). Kerro pomolle, mitä hyötyä koulutuksesta on.',
        scenarioEn: 'You want to attend training. Tell your boss the benefits.',
        sampleFi:
          'Hei, haluaisin osallistua digitaalisen markkinoinnin koulutukseen. Se auttaisi minua kehittämään taitojani ja tuo uusia ideoita meidän tiimiin. Koulutus kestää kolme päivää.',
      },
      {
        id: 'r17',
        scenarioFi: 'Lapsesi tulee kotiin ja itkee. Koulussa on tapahtunut jotakin pahaa (keksi itse, mitä). Selitä asia opettajalle.',
        scenarioEn: 'Your child comes home crying about something at school. Explain to the teacher.',
        sampleFi: 'Hei, poikani tuli kotiin itkien. Hän kertoi, että joku kiusasi häntä koulussa tänään. Haluaisin tietää, mitä tapahtui ja miten voimme ratkaista tämän.',
      },
      {
        id: 'r18',
        scenarioFi: 'Sinä näit, kun koulun pihalla joku lapsi kiusasi toista lasta. Soitat kouluun rehtorille ja kerrot asiasta.',
        scenarioEn: 'You saw bullying at a schoolyard. Call the principal to report it.',
        sampleFi: 'Hei, tässä [nimi]. Näin tänään koulun pihalla, kun yksi lapsi kiusasi toista. Haluaisin ilmoittaa tästä, jotta koulu voi puuttua asiaan. Kiusaaminen ei ole hyväksyttävää.',
      },
    ],
    longSpeaking: [
      {
        id: 'k-a',
        titleFi: 'Koulu kotimaassani',
        titleEn: 'School in my home country',
        instructionsFi:
          'Kuvaile kotimaasi koulujärjestelmää, sen hyviä ja huonoja puolia. Mikä on erilaista sinun kotimaassasi koulussa ja Suomessa? Mitä tiedät? Mitä haluaisit tuoda sinun kotimaan koulusta Suomeen?',
        sampleFi:
          'Kotimaassani koulujärjestelmä on erilainen kuin Suomessa. Koulu alkaa 7-vuotiaana ja kestää 12 vuotta. Koulupäivät ovat pitkiä, noin kello 8-16. Luokat ovat suuria, jopa 30-40 oppilasta.\n\nHyviä puolia kotimaan koulussa on, että oppilaat oppivat ahkeruutta ja kurinalaisuutta. Koulussa on paljon kotitehtäviä ja kokeita. Huonoja puolia on, että koulu on kilpailullinen ja stressaava.\n\nSuomessa koulu on rennompi. Täällä on vähemmän kotitehtäviä, ja oppilaita kannustetaan itsenäisyyteen. Koulupäivät ovat lyhyempiä ja lounas on ilmainen.\n\nHaluaisin tuoda kotimaastani Suomeen vahvan oppimiskulttuurin ja kunnioituksen opettajia kohtaan. Suomesta haluaisin tuoda kotimaahani rennomman ilmapiirin ja yksilöllisen tuen.',
      },
      {
        id: 'k-b',
        titleFi: 'Minä koulussa',
        titleEn: 'Me at school',
        instructionsFi:
          'Millainen koululainen sinä olit? Mikä on paras koulumuistosi? Mitä inhosit koulussa? Mistä pidit? Millainen oli sinun paras opettaja? Miksi?',
        sampleFi:
          "Olin koulussa ahkera ja utelias oppilas. Pidin erityisesti matematiikasta ja kielistä. Paras koulumuistoni on, kun voitin matematiikkakilpailun koulussa. Se oli hieno hetki, koska sain tunnustusta.\n\nInhosin koulussa liikuntatunteja, koska en ollut hyvä urheilussa. Pidin kirjallisuudesta ja piirtämisestä. Paras opettajani oli äidinkielen opettaja. Hän oli kannustava ja uskoi minuun. Hän sanoi aina: 'Sinä pystyt parempaan.' Hän auttoi minua löytämään intohimon kirjoittamiseen.\n\nKoulu oli minulle tärkeä paikka, vaikka se oli joskus vaikeaa. Opin siellä paljon elämästä ja itsestäni.",
      },
      {
        id: 'k-c',
        titleFi: 'Ensimmäinen työpaikkani',
        titleEn: 'My first job',
        instructionsFi: 'Mikä oli sinun ensimmäinen työpaikkasi? Millaista työtä teit? Piditkö siitä? Miksi / miksi et? Miten sait työn? Millainen palkka oli?',
        sampleFi:
          'Ensimmäinen työpaikkani oli kesätyö ravintolassa. Olin 16-vuotias. Työskentelin tarjoilijana ja tiskarin apulaisena. Työ oli fyysisesti raskasta: kannoin astioita, pesin tiskiä ja siivosin pöytiä.\n\nPidin työstä, koska sain omaa rahaa ja opin paljon. Opin työskentelemään nopeasti ja huolellisesti. Opin myös, miten asiakkaiden kanssa puhutaan.\n\nSain työn ystävän suosituksesta. Palkka oli pieni, noin 7 euroa tunnissa, mutta se oli hyvä ensimmäiseksi työksi. Työ opetti minulle ahkeruutta ja vastuullisuutta. Se oli arvokas kokemus.',
      },
      {
        id: 'k-d',
        titleFi: 'Normaali työpäiväni',
        titleEn: 'My typical workday',
        instructionsFi: 'Millainen on sinun tavallinen työpäivä? Mitä teet töissä? Milloin sinulla on tauko? Mistä pidät työssäsi? Mistä et?',
        sampleFi:
          'Normaali työpäiväni alkaa kello 8. Menen töihin bussilla. Aamulla tarkistan sähköpostit ja teen päivän suunnitelman. Sitten pidän palavereita tiimin kanssa.\n\nTyössäni suunnittelen markkinointikampanjoita ja kirjoitan tekstejä. Pidän lounastauon kello 12. Lounaan jälkeen jatkan töitä. Iltaisin kello 16 lähden kotiin.\n\nPidän työssäni luovuudesta ja siitä, että saan tehdä erilaisia asioita. En pidä siitä, että välillä on liikaa kiirettä ja stressiä. Pidän myös työkavereista, he ovat mukavia.\n\nTyö on mielenkiintoista ja haastavaa. Se sopii minulle hyvin.',
      },
    ],
    opinions: [
      {
        id: 'm-a',
        titleFi: 'Työn pitää olla hauskaa',
        titleEn: 'Work should be fun',
        instructionsFi: 'Pitääkö työstä nauttia vai onko se vain tapa saada rahaa? Miksi/miksi ei työn pitäisi olla hauskaa? Millaisesta työstä sinä nautit? Mikä on tylsää?',
        sampleFi:
          'Mielestäni työn pitäisi olla sekä hauskaa että mielekästä, mutta tiedän, että kaikki työ ei voi olla hauskaa. Työ on tapa saada rahaa, mutta se on myös iso osa elämää. Vietämme paljon aikaa töissä, joten on tärkeää, että työ on mielenkiintoista.\n\nTyöstä pitäisi nauttia, koska se vaikuttaa hyvinvointiin. Jos työ on tylsää ja ikävää, se voi aiheuttaa stressiä ja masennusta. On kuitenkin realistista ymmärtää, että kaikilla ei ole mahdollisuutta tehdä unelmatyötä.\n\nNautin työstä, jossa saan olla luova, auttaa muita ja oppia uutta. Tylsää on rutiinityö, jossa ei ole haasteita. Paras työ on sellainen, jossa voi kehittyä ja tuntea itsensä hyödylliseksi.',
      },
      {
        id: 'm-b',
        titleFi: 'Opiskelu kannattaa aina',
        titleEn: 'Studying is always worthwhile',
        instructionsFi: 'Miksi opiskelu on/ei ole tärkeää? Millaisia asioita on hyvä opiskella? Mikä on turhaa? Maailma muuttuu. Muuttuuko koulu?',
        sampleFi:
          'Opiskelu on aina tärkeää, koska se kehittää taitoja ja avaa ovia. Ilman opiskelua on vaikea menestyä työelämässä. Opiskelu antaa itseluottamusta ja auttaa ymmärtämään maailmaa.\n\nOn hyvä opiskella asioita, jotka kiinnostavat ja joista on hyötyä työelämässä. Kielet, matematiikka, tietotekniikka ja viestintä ovat tärkeitä. Turhaa on opiskella asioita, joita ei koskaan käytä.\n\nMaailma muuttuu nopeasti, ja koulun pitää muuttua mukana. Nykyään tarvitaan enemmän digitaalisia taitoja ja ongelmanratkaisukykyä. Koulun pitäisi opettaa myös elämäntaitoja, kuten talouden hallintaa ja ihmissuhdetaitoja.\n\nOpiskelu kannattaa aina, koska se on investointi itseen. Se maksaa itsensä takaisin.',
      },
      {
        id: 'm-c',
        titleFi: 'Nykyään kaikilla on aina kiire',
        titleEn: 'Nowadays everyone is always busy',
        instructionsFi: 'Onko ihmisten ajankäyttö muuttunut? Miten? Miksi näyttää siltä, että kaikilla on kiire? Mitä haittaa/hyötyä kiireestä on?',
        sampleFi:
          'Kyllä, ihmisten ajankäyttö on muuttunut. Nykyään kaikilla on kiire, koska elämä on nopeampaa ja vaatimukset ovat korkeammat. Työt vievät paljon aikaa, ja monilla on myös perhe, harrastukset ja sosiaalinen elämä.\n\nKiire voi johtua siitä, että yritämme tehdä liikaa samaan aikaan. Teknologia, kuten puhelimet ja sähköposti, tekee työstä jatkuvaa. On vaikea olla tavoitettavissa koko ajan.\n\nKiireestä on haittaa: se lisää stressiä, väsymystä ja sairauksia. Se voi vahingoittaa ihmissuhteita, koska ei ole aikaa olla läsnä.\n\nKiireellä voi olla myös hyötyä: se voi lisätä tehokkuutta ja motivoida. Mutta on tärkeää löytää tasapaino. Joskus pitää hidastaa ja nauttia elämästä.',
      },
      {
        id: 'm-d',
        titleFi: 'Tulevaisuudessa robotit tekevät ihmisten työt',
        titleEn: "In the future, robots will do people's work",
        instructionsFi:
          'Uskotko, että robotit tekevät ihmisten työt? Miksi / miksi et? Mitä hyötyä ja haittaa automaatiosta on töissä? Miten tekoäly (AI) voi auttaa meitä? Mitä riskejä tekoälyssä on?',
        sampleFi:
          'Uskon, että robotit ja tekoäly tekevät yhä enemmän töitä tulevaisuudessa. Ne korvaavat erityisesti rutiinitehtäviä ja fyysistä työtä. Esimerkiksi tehtaissa ja logistiikassa robotit jo tekevät paljon.\n\nAutomaation hyötyjä ovat tehokkuus, tarkkuus ja turvallisuus. Robotit eivät väsy ja tekevät vähemmän virheitä kuin ihmiset. Haitat ovat, että monet työpaikat voivat kadota ja ihmiset joutuvat kouluttautumaan uudelleen.\n\nTekoäly voi auttaa meitä monella tavalla: lääketieteessä, liikenteessä, asiakaspalvelussa ja tutkimuksessa. Se voi tehdä elämästä helpompaa.\n\nRiskejä tekoälyssä on, että se voi olla epäeettistä tai syrjivää, jos sitä ei ohjata oikein. On tärkeää, että ihmiset valvovat tekoälyä ja sen päätöksiä.',
      },
      {
        id: 'm-e',
        titleFi: 'Koulupuku on hyvä asia',
        titleEn: 'School uniform is a good thing',
        instructionsFi: 'Onko sinun kotimaassa koulupuku? Mitä haittaa ja hyötyä siitä on? Millainen pukeutuminen sopii kouluun?',
        sampleFi:
          'Kotimaassani on koulupuku. Oppilaat käyttävät valkoisia paitoja ja tummia housuja tai hameita. Se on pakollinen kaikissa kouluissa.\n\nKoulupuvussa on hyötyä: se luo yhdenvertaisuutta, koska kaikki näyttävät samalta. Se vähentää vertailua ja kiusaamista. Se myös säästää aikaa, kun ei tarvitse miettiä pukeutumista.\n\nHaitat ovat, että se rajoittaa yksilöllisyyttä ja voi olla epämukava. Jotkut oppilaat eivät pidä siitä, että heidän pitää pukeutua tietyllä tavalla.\n\nSuomessa ei ole koulupukua. Oppilaat pukeutuvat rennosti ja oman tyylinsä mukaan. Mielestäni kouluun sopii siisti ja mukava pukeutuminen. Tärkeintä on, että vaatteet eivät häiritse opiskelua.',
      },
      {
        id: 'm-f',
        titleFi: 'Lasten kasvatus Suomessa on hyvä / huono',
        titleEn: 'Child rearing in Finland is good/bad',
        instructionsFi: 'Onko tavassa kasvattaa lapsia Suomessa / sinun kotimaassa eroja? Mitä hyviä ja huonoja puolia molemmissa on?',
        sampleFi:
          'Suomessa ja kotimaassani on eroja lasten kasvatuksessa. Suomessa kasvatus on vapaampaa ja lapsia kannustetaan itsenäisyyteen. Lapsilla on paljon vapautta ja he saavat tehdä omia päätöksiä.\n\nKotimaassani kasvatus on kurinalaisempaa. Lapsilta odotetaan kuuliaisuutta ja kunnioitusta aikuisia kohtaan. Vanhemmat ovat tiukempia ja asettavat selkeät säännöt.\n\nSuomalaisessa kasvatuksessa hyvää on, että lapset oppivat itsenäisyyttä ja luovuutta. He uskaltavat sanoa mielipiteensä. Huonoa voi olla, että rajat ovat välillä liian löysät.\n\nKotimaani kasvatuksessa hyvää on, että lapset oppivat kunnioittamaan vanhempiaan ja auktoriteetteja. Huonoa on, että lapset eivät aina uskalla ilmaista itseään.',
      },
      {
        id: 'm-g',
        titleFi: 'Suomi tarvitsee lisää työntekijöitä ulkomailta',
        titleEn: 'Finland needs more workers from abroad',
        instructionsFi:
          'Miten Suomeen voisi houkutella lisää ihmisiä töihin? Millaisiin töihin Suomeen tarvitaan lisää ihmisiä? Mitä haasteita tai ongelmia on siinä, että palkataan ihmisiä suoraan ulkomailta?',
        sampleFi:
          'Suomi tarvitsee lisää työntekijöitä ulkomailta, koska väestö vanhenee ja tietyillä aloilla on työvoimapulaa. Erityisesti hoitoalalla, rakennusalalla ja teknologia-alalla tarvitaan osaajia.\n\nSuomeen voisi houkutella työntekijöitä parantamalla maahanmuuttoprosesseja, tarjoamalla kielikoulutusta ja helpottamalla työlupia. Myös asumisen ja perheen tukeminen on tärkeää.\n\nHaasteita on: kieli on vaikea oppia, työkulttuuri on erilainen ja byrokratia voi olla hidasta. Myös syrjintä ja ennakkoluulot voivat olla esteitä.\n\nOn tärkeää, että ulkomailta tulevat työntekijät saavat riittävää tukea ja koulutusta. Suomi tarvitsee heitä, joten meidän pitää olla avoimia ja ystävällisiä.',
      },
    ],
    writingTasks: [
      {
        id: 'w1',
        titleFi: 'Viesti',
        instructionsFi:
          'Haluat vaihtaa vuoroa työkaverin kanssa. Hän ei ole nyt paikalla, mutta sinulla on kiire, etkä tiedä hänen puhelinnumeroaan. Jätät hänen työpöydälle viestin. Aloita ja lopeta viesti sopivalla tavalla.',
        bulletsFi: [],
        sampleFi:
          'Hei [nimi]!\n\nMinulla olisi pyyntö: voisimmeko vaihtaa vuoroja? Minulla olisi tärkeä lääkäriaika ensi perjantaina kello 10, joten en pääse töihin silloin.\n\nVoisitko ottaa minun perjantaivuoroni? Voin tehdä sinun maanantai- tai keskiviikkopäivän. Mikä sinulle sopisi?\n\nOlisin todella kiitollinen, jos voisit auttaa. Ota minuun yhteyttä, kun tulet töihin, niin sovitaan yksityiskohdat.\n\nKiitos jo etukäteen!\n\nTerveisin,\n[Nimesi]',
      },
      {
        id: 'w2',
        titleFi: 'Kirje opettajalle',
        instructionsFi: 'Haluat lähettää kiitoskirjeen omalle tai lapsesi opettajalle.',
        bulletsFi: [],
        sampleFi:
          'Hei [opettajan nimi]!\n\nHaluan lähettää teille kiitoskirjeen. Olette ollut lapseni opettajana tänä vuonna, ja haluan kiittää teitä kaikesta työstä.\n\nOlette opettanut lapselleni paljon: matematiikkaa, lukemista ja kirjoittamista. Tärkeintä on, että olette opettanut häntä olemaan itsevarma ja utelias. Olette aina kannustanut häntä ja uskonut häneen.\n\nMielestäni olette erinomainen opettaja. Olette kärsivällinen, ystävällinen ja innostava. Lapseni rakastaa teidän tunteja, ja hän on oppinut paljon.\n\nToivon, että te muistatte minut ja lapseni. Toivottavasti näemme vielä.\n\nKiitos vielä kerran kaikesta!\n\nYstävällisin terveisin,\n[Nimesi]',
      },
      {
        id: 'w3',
        titleFi: 'Mielipide',
        instructionsFi: 'Valitse A tai B ja kirjoita mielipidekirjoitus.',
        bulletsFi: [
          'A. Suomalainen koulu on maailman paras. (The Finnish school is the best in the world.)',
          'B. Suomessa on pakko osata suomea. (In Finland, you must know Finnish.)',
        ],
        sampleFi:
          'A. Suomalainen koulu on maailman paras.\n\nOlen melko samaa mieltä siitä, että suomalainen koulu on yksi maailman parhaista. Suomessa koulutus on ilmaista ja kaikilla on yhtäläinen mahdollisuus oppia.\n\nSuomalainen koulu on rennompi kuin monissa muissa maissa. Oppilailla on vähemmän kotitehtäviä ja kokeita, mutta oppimistulokset ovat hyviä. Opettajat ovat korkeasti koulutettuja ja ammattitaitoisia.\n\nKoulussa panostetaan yksilölliseen tukeen. Jokainen oppilas saa apua, jos hän tarvitsee sitä. Myös kouluruoka on ilmainen ja terveellinen.\n\nTietysti mikään koulu ei ole täydellinen. Suomalaisessa koulussa voisi olla enemmän liikuntaa ja taideaineita. Myös digitaalisia taitoja voisi opettaa enemmän.\n\nKaiken kaikkiaan suomalainen koulu on erinomainen. Se on tasa-arvoinen, kannustava ja laadukas.\n\n---\n\nB. Suomessa on pakko osata suomea.\n\nOlen samaa mieltä siitä, että Suomessa on tärkeää osata suomea. Suomi on maan virallinen kieli, ja sitä käytetään arjessa, töissä ja virastoissa.\n\nIlman suomen kielen taitoa on vaikea saada työtä, varsinkin jos työ vaatii asiakaspalvelua tai kommunikaatiota. Myös byrokratia on helpompaa, jos ymmärtää suomea.\n\nSuomea tarvitaan myös sosiaalisessa elämässä. Suomalaiset puhuvat mielellään suomea, vaikka he osaavat usein englantia. Kielitaito auttaa ystävystymään ja integroitumaan yhteiskuntaan.\n\nTietysti on mahdollista pärjätä englannilla esimerkiksi kansainvälisissä yrityksissä tai yliopistoissa. Mutta pitkällä aikavälillä suomen kielen osaaminen on välttämätöntä.\n\nSuomi on kaksikielinen maa, ja ruotsilla pärjää tietyillä alueilla. Mutta yleisesti ottaen suomen kielen taito on avain onnistuneeseen elämään Suomessa.',
      },
    ],
    vocabSummary: [
      { fi: 'työ', en: 'work/job' },
      { fi: 'koulu', en: 'school' },
      { fi: 'ammatti', en: 'profession' },
      { fi: 'koulutus', en: 'education/training' },
      { fi: 'työpaikka', en: 'workplace' },
      { fi: 'työkaveri', en: 'colleague' },
      { fi: 'pomo', en: 'boss' },
      { fi: 'palkka', en: 'salary' },
      { fi: 'palkankorotus', en: 'pay raise' },
      { fi: 'työhaastattelu', en: 'job interview' },
      { fi: 'irtisanoutua', en: 'to resign' },
      { fi: 'työmatka', en: 'business trip' },
      { fi: 'palaveri', en: 'meeting' },
      { fi: 'esitys', en: 'presentation' },
      { fi: 'projekti', en: 'project' },
      { fi: 'kielitaito', en: 'language skills' },
      { fi: 'opiskella', en: 'to study' },
      { fi: 'oppilas', en: 'student' },
      { fi: 'opettaja', en: 'teacher' },
      { fi: 'kokous', en: 'meeting' },
      { fi: 'sairausloma', en: 'sick leave' },
      { fi: 'äitiysloma', en: 'maternity leave' },
      { fi: 'kokemus', en: 'experience' },
      { fi: 'vastuu', en: 'responsibility' },
      { fi: 'tiimi', en: 'team' },
      { fi: 'työelämä', en: 'working life' },
      { fi: 'työvoima', en: 'workforce' },
      { fi: 'koulupuku', en: 'school uniform' },
      { fi: 'tekoäly', en: 'AI / artificial intelligence' },
      { fi: 'automaatio', en: 'automation' },
      { fi: 'tasa-arvo', en: 'equality' },
    ],
  },
  {
    id: 'conv-ch5',
    titleFi: 'Luku 5: Terveys ja hyvinvointi',
    titleEn: 'Chapter 5: Health and wellbeing',
    level: 'B1',
    warmup: [
      { id: 'w-1', scenarioFi: 'Mitä sulle kuuluu?', scenarioEn: 'How are you?', sampleFi: 'Kiitos hyvää! Entä sulle? / Ihan hyvää, vähän väsyttää vaan.' },
      { id: 'w-2', scenarioFi: 'Miten sulla menee?', scenarioEn: "How's it going?", sampleFi: 'Hyvin menee, kiitos! / Ihan ok, on ollut kiireinen viikko.' },
      { id: 'w-3', scenarioFi: 'Miten voit?', scenarioEn: 'How are you feeling?', sampleFi: 'Kiitos, hyvin! / Olen vähän flunssainen, mutta muuten ok.' },
      { id: 'w-4', scenarioFi: 'Miltä sinusta tuntuu?', scenarioEn: 'How do you feel?', sampleFi: 'Tuntuu hyvältä! / Olen vähän väsynyt, mutta iloinen.' },
      { id: 'w-5', scenarioFi: 'Mikä fiilis sulla on nyt?', scenarioEn: "What's your mood right now?", sampleFi: 'Hyvä fiilis! / Vähän stressaantunut olo, paljon töitä.' },
      { id: 'w-6', scenarioFi: 'Olin flunssassa viime viikolla.', scenarioEn: 'I had the flu last week.', sampleFi: 'Voi ei! Oletko nyt terve? Levättiikö kunnolla?' },
      { id: 'w-7', scenarioFi: 'Mun päätä särkee.', scenarioEn: 'I have a headache.', sampleFi: 'Voi harmi! Ota Buranaa tai lepää vähän. Haluatko lasillisen vettä?' },
      { id: 'w-8', scenarioFi: 'Mennäänkö apteekkiin?', scenarioEn: 'Shall we go to the pharmacy?', sampleFi: 'Kyllä, hyvä idea! Mulla onkin loppunut särkylääke.' },
      { id: 'w-9', scenarioFi: 'Mä oon todella väsynyt!', scenarioEn: "I'm really tired!", sampleFi: 'Sun pitää levätä! Mene ajoissa nukkumaan. Oletko nukkunut huonosti?' },
      {
        id: 'w-10',
        scenarioFi: 'Mulla on kova selkäkipu. Mikä auttaa?',
        scenarioEn: 'I have severe back pain. What helps?',
        sampleFi: 'Lepää ja laita lämpötyyny selkään. Voit myös mennä hierontaan tai fysioterapeutille.',
      },
      { id: 'w-11', scenarioFi: 'Mihin Buranaa käytetään?', scenarioEn: 'What is Burana used for?', sampleFi: 'Buranaa käytetään kipuun, tulehdukseen ja kuumeeseen. Se on särkylääke.' },
      { id: 'w-12', scenarioFi: 'Mulla on nenä tukossa.', scenarioEn: 'I have a stuffy nose.', sampleFi: 'Ota nenäsumutetta tai hengitä höyryä. Juo paljon vettä ja lepää.' },
      { id: 'w-13', scenarioFi: 'Mulla on kuivat silmät.', scenarioEn: 'I have dry eyes.', sampleFi: 'Käytä silmätippoja. Vältä näyttöjä ja pidä taukoja.' },
      {
        id: 'w-14',
        scenarioFi: 'Milloin ja mikä sua naurattaa?',
        scenarioEn: 'When and what makes you laugh?',
        sampleFi: 'Naurattaa, kun kuulen hyvän vitsin tai näen hauskan videon. Ystävien kanssa tulee usein naurettua.',
      },
      {
        id: 'w-15',
        scenarioFi: 'Milloin ja mikä sua itkettää?',
        scenarioEn: 'When and what makes you cry?',
        sampleFi: 'Itkettää, jos näen surullisen elokuvan tai jos joku läheinen on surullinen. Joskus itken ilosta.',
      },
      {
        id: 'w-16',
        scenarioFi: 'Mikä sua ärsyttää? Mikä sua ottaa päähän?',
        scenarioEn: 'What annoys you? What pisses you off?',
        sampleFi: 'Ärsyttää, kun ihmiset ovat myöhässä tai kun joku puhuu kovaa puhelimessa julkisessa paikassa.',
      },
      { id: 'w-17', scenarioFi: 'Mikä sua pelottaa?', scenarioEn: 'What scares you?', sampleFi: 'Pelottaa korkeat paikat ja hämähäkit. Myös sairaudet ja onnettomuudet pelottavat.' },
      { id: 'w-18', scenarioFi: 'Piristääkö kahvi sinua?', scenarioEn: 'Does coffee perk you up?', sampleFi: 'Kyllä, kahvi piristää! Mutta jos juon liikaa, tulee hermostunut olo.' },
      { id: 'w-19', scenarioFi: 'Mikä sua jännittää?', scenarioEn: 'What makes you nervous?', sampleFi: 'Jännittää työhaastattelut ja esiintymiset. Myös tärkeät tentit jännittävät.' },
      { id: 'w-20', scenarioFi: 'Mikä sua hävettää?', scenarioEn: 'What embarrasses you?', sampleFi: 'Hävettää, jos sanon jotain tyhmää tai jos kaadun julkisella paikalla.' },
      {
        id: 'w-21',
        scenarioFi: 'Mun koira kuoli eilen.',
        scenarioEn: 'My dog died yesterday.',
        sampleFi: 'Voi ei! Olen niin pahoillani! Se on varmasti todella surullista. Olen täällä sinua varten.',
      },
      { id: 'w-22', scenarioFi: 'Mun sisko sai vauvan!', scenarioEn: 'My sister had a baby!', sampleFi: 'Onneksi olkoon! Mahtava uutinen! Miten siskosi voi? Terve vauva?' },
      { id: 'w-23', scenarioFi: 'Hei, sä oot myöhässä.', scenarioEn: "Hey, you're late.", sampleFi: 'Anteeksi! Olen todella pahoillani! Oli liikenneongelmia. Tulen nyt heti.' },
      {
        id: 'w-24',
        scenarioFi: 'Neuvo ystävää: Häntä nukuttaa opettajan puhe.',
        scenarioEn: "Advise a friend: He's sleepy during the teacher's speech.",
        sampleFi: 'Yritä nukkua paremmin yöllä. Voit myös juoda vettä tai tehdä muistiinpanoja pysyäksesi hereillä.',
      },
      {
        id: 'w-25',
        scenarioFi: 'Neuvo ystävää: Häntä itkettää.',
        scenarioEn: "Advise a friend: She's crying.",
        sampleFi: 'Mitä tapahtui? Haluatko puhua? Olen täällä sinua varten. Itkeminen on ok, se helpottaa oloa.',
      },
      {
        id: 'w-26',
        scenarioFi: 'Neuvo ystävää: Häntä ärsyttää pomo töissä.',
        scenarioEn: "Advise a friend: The boss is annoying him at work.",
        sampleFi: 'Oletko puhunut pomollesi? Ehkä voisit keskustella rauhallisesti ongelmista. Jos ei auta, mieti, haluatko jatkaa siellä.',
      },
      {
        id: 'w-27',
        scenarioFi: 'Neuvo ystävää: Häntä huimaa ja päätä särkee.',
        scenarioEn: 'Advise a friend: He feels dizzy and has a headache.',
        sampleFi: 'Istu alas ja lepää. Juo vettä. Jos olo pahenee, mene lääkäriin.',
      },
      {
        id: 'w-28',
        scenarioFi: 'Neuvo ystävää: Hän tylsistyy työpaikalla.',
        scenarioEn: "Advise a friend: She's bored at work.",
        sampleFi: 'Kysy pomolta lisää haastavia tehtäviä. Voisit myös opiskella uusia taitoja työajalla tai harkita työpaikan vaihtoa.',
      },
      {
        id: 'w-29',
        scenarioFi: 'Neuvo ystävää: Häntä pelottaa kuolema.',
        scenarioEn: "Advise a friend: He's scared of death.",
        sampleFi: 'Se on ymmärrettävää. Kannattaa puhua tunteista. Elämä on arvokasta, yritä nauttia jokaisesta päivästä.',
      },
      {
        id: 'w-30',
        scenarioFi: 'Neuvo ystävää: Häntä janottaa, mutta ei ole juotavaa.',
        scenarioEn: "Advise a friend: She's thirsty but has no drink.",
        sampleFi: 'Mennään yhdessä ostamaan juomaa. Kaupassa on vettä tai mehua.',
      },
      {
        id: 'w-31',
        scenarioFi: 'Neuvo ystävää: Häntä suututtaa, että hän maksoi niin paljon.',
        scenarioEn: "Advise a friend: He's angry that he paid so much.",
        sampleFi: 'Ymmärrän, se on turhauttavaa. Kysy hyvitystä tai palauta tuote. Opimme virheistä.',
      },
      {
        id: 'w-32',
        scenarioFi: 'Neuvo ystävää: Häntä masentaa talvi.',
        scenarioEn: 'Advise a friend: The winter depresses her.',
        sampleFi: 'Talvi on vaikeaa monille. Kokeile kirkasvalohoitoa, liikuntaa ja D-vitamiinia. Muista, että kevät tulee pian.',
      },
      {
        id: 'w-33',
        scenarioFi: 'Neuvo ystävää: Hänellä on huono näkö.',
        scenarioEn: 'Advise a friend: He has poor eyesight.',
        sampleFi: 'Mene silmälääkärille tarkastukseen. Saatat tarvita silmälasit tai piilolinssit.',
      },
      {
        id: 'w-34',
        scenarioFi: 'Neuvo ystävää: Hänellä on miesflunssa.',
        scenarioEn: 'Advise a friend: He has man flu.',
        sampleFi: 'Haha, miesflunssa on paha! Lepää, juo lämmintä juomaa ja ota lääkettä. Olet kohta kunnossa!',
      },
      {
        id: 'w-35',
        scenarioFi: 'Neuvo ystävää: Hänellä on kova vatsa eli ummetusta.',
        scenarioEn: 'Advise a friend: He has constipation.',
        sampleFi: 'Juopahan enemmän vettä ja syö kuitua, kuten hedelmiä, vihanneksia ja täysjyväleipää. Liikunta auttaa.',
      },
      {
        id: 'w-36',
        scenarioFi: 'Neuvo ystävää: Hänellä on paljon ylipainoa.',
        scenarioEn: 'Advise a friend: He has a lot of excess weight.',
        sampleFi: 'Mene lääkäriin ja ravitsemusterapeutille. Terveellinen ruokavalio ja säännöllinen liikunta auttavat.',
      },
      {
        id: 'w-37',
        scenarioFi: 'Neuvo ystävää: Hän on menossa leikkaukseen.',
        scenarioEn: "Advise a friend: She's going to surgery.",
        sampleFi: 'Tsemppiä! Toivottavasti kaikki menee hyvin. Olen ajatellut sinua. Ota rauhallisesti, kyllä se menee hyvin.',
      },
    ],
    dialogues: [
      {
        id: 'd1',
        titleFi: 'Hätätilanne - nainen makaa kadulla',
        titleEn: 'Emergency - woman lying on the street',
        turns: [
          { speaker: 'Virkailija', fi: 'Hätäkeskus, mikä on hätänne?' },
          { speaker: 'Sinä', fi: 'Hei! Olen [nimi]. Näen naisen makaavan kadulla. Yritin herättää häntä, mutta hän ei vastaa.' },
          { speaker: 'Virkailija', fi: 'Mikä on tarkka sijaintinne?' },
          { speaker: 'Sinä', fi: 'Olen [osoite/risteys]. Nainen on maassa ja näyttää tajuttomalta.' },
          { speaker: 'Virkailija', fi: 'Onko naisella näkyviä vammoja?' },
          { speaker: 'Sinä', fi: 'Ei näy verta, mutta hän ei liiku. Hengittääkö hän? En ole varma.' },
          { speaker: 'Virkailija', fi: '[Virkailija kysyy lisäkysymyksiä]', en: 'Operator asks more questions', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Hän hengittää kyllä, mutta hyvin matalasti. Tarvitsen ambulanssin pian.' },
          { speaker: 'Virkailija', fi: '[Virkailija kertoo, että apu on tulossa]', en: 'Operator says help is on the way', isPlaceholder: true },
          { speaker: 'Sinä', fi: 'Kiitos! Jään tähän odottamaan ja pidän silmällä naista.' },
        ],
      },
      {
        id: 'd2',
        titleFi: 'Ystävä on ollut onnettomuudessa',
        titleEn: 'Friend has been in an accident',
        turns: [
          { speaker: 'Ystävä', fi: 'Maija.' },
          { speaker: 'Sinä', fi: 'Hei Maija! Tässä [nimi]. Kuulin, että sinulle tapahtui onnettomuus. Mitä tapahtui?' },
          { speaker: 'Ystävä', fi: 'No juu, niin olin. Mä olin menossa pyörällä töihin ja sitten siinä Leppäkadulla auto törmäsi muhun suojatiellä.' },
          { speaker: 'Sinä', fi: 'Voi ei! Oletko kunnossa? Mitä lääkärit sanoivat?' },
          {
            speaker: 'Ystävä',
            fi: 'No mä en tiedä vielä, mutta ainakin käsi on murtunut ja ilmeisesti selässä on myös jotain, koska se on tosi kipeä. Ne ottaa vielä magneettikuvat tänään. Onneksi mulla oli kypärä päässä.',
          },
          { speaker: 'Sinä', fi: 'Voi ei, kuulostaa kamalalta! Tarvitsetko jotain? Voinko tuoda sinulle vaikka ruokaa tai kirjoja sairaalaan?' },
          { speaker: 'Ystävä', fi: 'No kiitos. Se olis kyllä mahtavaa. Sä olet tosi hyvä ystävä. Milloin sä voisit tulla käymään täällä?' },
          { speaker: 'Sinä', fi: 'Mä tulen tänään iltapäivällä. Missä osastolla sinä olet?' },
          { speaker: 'Ystävä', fi: 'Mä oon tässä yliopiston sairaalassa. Osasto 10. Kiitos tosi paljon ja nähdään pian.' },
          { speaker: 'Sinä', fi: 'Nähdään pian! Tsemppiä!' },
        ],
      },
      {
        id: 'd3',
        titleFi: 'Ystävä on eronnut',
        titleEn: 'Friend has broken up',
        turns: [
          { speaker: 'Ystävä', fi: 'Nyt se sitten tapahtui. Viikonloppuna Markku pakkas kamat ja lähti.' },
          { speaker: 'Sinä', fi: 'Voi ei! Olen niin pahoillani. Tämä on varmasti todella vaikeaa.' },
          {
            speaker: 'Ystävä',
            fi: 'No eihän tää yllätyksenä tullut. Onhan tää meidän suhde ollut jo kauan vähän on-off, mutta kyllä se silti sitten järkyttää, kun toinen lähtee.',
          },
          { speaker: 'Sinä', fi: 'Miten sinä voit nyt? Haluatko puhua asiasta?' },
          { speaker: 'Ystävä', fi: 'No suoraan sanoen ei kovin hyvältä tunnu. Nukuin tosi huonosti viime yönä, eikä itkusta tuu loppua.' },
          { speaker: 'Sinä', fi: 'Haluatko, että tulen luoksesi? Voimme jutella tai vain olla hiljaa yhdessä.' },
          { speaker: 'Ystävä', fi: 'Kiitos, se ois tosi kiva. On mun kuitenkin pakko jaksaa ihan jo lastenkin takia.' },
          { speaker: 'Sinä', fi: 'Entä lapset? Miten he voivat? Millaista heillä on?' },
          {
            speaker: 'Ystävä',
            fi: 'No ihan varmaksi me ei vielä sovittu, mutta kai ne sitten on viikon mun kanssa ja viikon isänsä kanssa. Markun pitää nyt vaan ensin löytää sellanen kämppä, että lapsetkin mahtuu sinne.',
          },
          { speaker: 'Sinä', fi: 'Minun täytyy nyt valitettavasti mennä, mutta soitan sinulle myöhemmin. Jaksamista!' },
          { speaker: 'Ystävä', fi: 'Joo ei haittaa. Kiitos, että kuuntelit.' },
          { speaker: 'Sinä', fi: 'Ole hyvä. Otan yhteyttä pian. Pidä huolta itsestäsi!' },
        ],
      },
    ],
    reactions: [
      {
        id: 'r1',
        scenarioFi: 'Tarvitset apteekista jotain ja pyydät, että ystävä auttaa.',
        scenarioEn: 'You need something from the pharmacy and ask a friend for help.',
        sampleFi: 'Hei! Mä tarvitsisin särkylääkettä apteekista, mutta mulla on niin huono olo. Pääsisitkö hakemaan mulle Buranaa? Voin maksaa sinulle takaisin.',
      },
      {
        id: 'r2',
        scenarioFi: 'Olet nähnyt auto-onnettomuuden. Poliisi kysyy sinulta, mitä tapahtui. Vastaa poliisille.',
        scenarioEn: 'You witnessed a car accident. The police ask what happened.',
        sampleFi:
          'Näin kun auto ajoi punaisia päin ja törmäsi toiseen autoon. Se tapahtui kello 14.30. Auto tuli vasemmalta ja nopeus oli aika kova. Soitin heti hätänumeroon.',
      },
      {
        id: 'r3',
        scenarioFi: 'Olet lenkillä ja näet, että nuori nainen makaa kadulla. Mitä sanot hänelle?',
        scenarioEn: "While jogging, you see a young woman lying on the street. What do you say to her?",
        sampleFi: 'Hei! Herätkää! Voitteko kuulla minua? Oletteko kunnossa? Soitan nyt ambulanssin. Älkää liikkuko, pysykää paikallanne.',
      },
      {
        id: 'r4',
        scenarioFi: 'Olet suojatiellä ja auto melkein törmää sinuun. Mitä sanot kuljettajalle?',
        scenarioEn: "You're on a crosswalk and a car almost hits you. What do you say to the driver?",
        sampleFi: 'Hei! Katsokaa tietä! Olen suojatiellä! Teidän pitää hidastaa! Tämä on todella vaarallista!',
      },
      {
        id: 'r5',
        scenarioFi: 'Menet laboratorioon, mutta pelkäät pistämistä.',
        scenarioEn: "You're going to a lab for bloodwork but are afraid of needles.",
        sampleFi: 'Anteeksi, mä pelkään todella paljon neuloja ja pistämistä. Voitteko olla varovainen? En halua nähdä neulaa. Voitteko puhua mulle samalla?',
      },
      {
        id: 'r6',
        scenarioFi: 'Näet ehkä 10-vuotiaan tytön polttamassa tupakkaa pihalla. Mitä sanot hänelle?',
        scenarioEn: 'You see a girl of about 10 smoking. What do you say to her?',
        sampleFi:
          'Hei! Tupakka on todella haitallista, erityisesti lapsille. Et saa polttaa, olet liian nuori. Se vahingoittaa terveyttäsi. Kerrotko vanhemmillesi tästä?',
      },
      {
        id: 'r7',
        scenarioFi: 'Rattijuoppo tulee sinun kodin parkkipaikalle. Tunnistat henkilön. Soitat poliisille.',
        scenarioEn: 'A drunk driver you recognize pulls into your parking lot. Call the police.',
        sampleFi:
          'Hei, tässä [nimi]. Haluan ilmoittaa rattijuoposta. Henkilö ajoi parkkipaikalle ja vaikuttaa humalaiselta. Henkilö on [nimi] ja auto on [rekisterinumero]. Osoite on [osoite].',
      },
      {
        id: 'r8',
        scenarioFi: 'Kuulet, että sinun ystävällä on rintasyöpä. Mitä sanot hänelle?',
        scenarioEn: 'You hear a friend has breast cancer. What do you say?',
        sampleFi: 'Voi ei! Olen niin pahoillani kuulla tämä. Olen täällä sinua varten. Milloin hoito alkaa? Tarvitsetko apua? Voimme yhdessä käydä lääkärissä.',
      },
      {
        id: 'r9',
        scenarioFi: 'Pelkäät, että sinulla on joku muistisairaus. Unohtelet asioita usein. Kysy aiheesta lisää terveydenhoitajalta.',
        scenarioEn: "You're worried about memory loss. Ask a nurse for more information.",
        sampleFi: 'Hei, mulla on ollut huoli. Olen unohtanut asioita usein viime aikoina. Pelkään, että mulla voi olla muistisairaus. Voitteko kertoa, millaisia testejä on tehtävissä?',
      },
      {
        id: 'r10',
        scenarioFi: 'Olet sopinut ystävän kanssa jotain, mutta olet sairas ja et voi tavata.',
        scenarioEn: "You made plans with a friend but you're sick and can't meet.",
        sampleFi: 'Hei, mulla on todella huono olo. Olen sairas, enkä voi tulla tapaamaan sinua. Voidaanko siirtää tapaaminen toiselle päivälle? Olen todella pahoillani.',
      },
      {
        id: 'r11',
        scenarioFi: 'Sinulla on kuumetta ja lapsi pitää hakea päiväkodista. Pyydä ystävältä apua.',
        scenarioEn: "You have a fever and need to pick up your child from daycare. Ask a friend for help.",
        sampleFi: 'Hei! Mulla on kova kuume ja mun pitäisi hakea lapsi päiväkodista. Pääsisitkö sä hakemaan hänet? Mä voin maksaa sulle bensat. Auta, mä oon ihan pihalla!',
      },
      {
        id: 'r12',
        scenarioFi: 'Olet vaa\'alla ja huomaat, että painosi on noussut 10 kg.',
        scenarioEn: "You're on a scale and notice you've gained 10 kg.",
        sampleFi: 'Voi ei! Paino on noussut 10 kiloa. Tämä on iso muutos. Mun täytyy aloittaa terveellisempi ruokavalio ja liikunta. Varaan ajan ravitsemusterapeutille.',
      },
      {
        id: 'r13',
        scenarioFi: 'Menet kuntosalille ja haluat dieetin ja kunto-ohjelman.',
        scenarioEn: 'At the gym, you want a diet and fitness plan.',
        sampleFi: 'Hei! Haluaisin aloittaa kunto-ohjelman ja dieetin. Tarvitsen apua. Olen lihonut, ja haluan laihtua terveellisesti. Voitteko tehdä minulle suunnitelman?',
      },
    ],
    longSpeaking: [
      {
        id: 'k-a',
        titleFi: 'Onnettomuus tai sairauskohtaus voi muuttaa koko elämän',
        titleEn: 'An accident or illness can change your whole life',
        instructionsFi:
          'Onko sinulla tai läheisellä ollut sairauskohtaus tai onnettomuus? Mitä tapahtui? Miten onnettomuus tai sairaus voi muuttaa elämää? Pelkäätkö onnettomuuksia tai sairauksia? Miksi / miksi et?',
        sampleFi:
          'Isälläni oli sydänkohtaus kaksi vuotta sitten. Se tapahtui yllättäen työpäivän aikana. Onneksi joku soitti ambulanssin nopeasti, ja hän selvisi. Tämä muutti hänen elämäänsä: hän joutui muuttamaan ruokavaliota, aloittamaan liikunnan ja vähentämään stressiä.\n\nOnnettomuus tai sairaus voi muuttaa elämää monella tavalla. Se voi opettaa arvostamaan terveyttä ja elämää. Se voi myös muuttaa prioriteetteja.\n\nPelkään onnettomuuksia ja sairauksia, koska ne ovat arvaamattomia. Kuitenkin yritän elää terveellisesti ja nauttia elämästä. Terveys on tärkein asia.',
      },
      {
        id: 'k-b',
        titleFi: 'Vartaloni on temppeli',
        titleEn: 'My body is a temple',
        instructionsFi: 'Pidätkö huolta vartalostasi? Miten? Onko vartalo sinulle tärkeä? Miksi / miksi ei? Miten vartalosi on muuttunut elämäsi aikana?',
        sampleFi:
          'Pidän huolta vartalostani parhaani mukaan. Liikun säännöllisesti, syön terveellisesti ja nukun riittävästi. Vartalo on minulle tärkeä, koska ilman tervettä kehoa en voi tehdä asioita, joista pidän.\n\nVartaloni on muuttunut elämäni aikana. Nuorena olin hoikka ja energinen. Nyt aikuisena keho on muuttunut: olen lihonut vähän ja huomaan, että palautuminen on hitaampaa. Yritän hyväksyä itseni sellaisena kuin olen.\n\nVartalo on temppeli - se on ainoa paikka, jossa asumme. Siksi on tärkeää pitää siitä huolta.',
      },
      {
        id: 'k-c',
        titleFi: 'Minulle tärkein aisti',
        titleEn: 'My most important sense',
        instructionsFi:
          'Mikä aisti (näkö, haju, maku, tunto, kuulo) on sinulle tärkein? Miksi? Millaisista asioista nautit aistien kautta? Jos joutuisit luopumaan jostakin aistista, mikä se olisi ja miksi?',
        sampleFi:
          'Minulle tärkein aisti on näkö. Sen avulla näen maailman kauniit värit, rakkaiden ihmisten kasvot ja luonnon maisemat. Ilman näköä elämä olisi todella vaikeaa.\n\nNautin aistien kautta monista asioista: hyvästä ruoasta (maku), musiikista (kuulo), kukkien tuoksusta (haju), auringon lämmöstä (tunto).\n\nJos joutuisin luopumaan jostain aistista, se olisi haju. Vaikka haju on tärkeä, pystyisin elämään ilman sitä. Näkö, kuulo ja maku ovat minulle tärkeämpiä.',
      },
      {
        id: 'k-d',
        titleFi: 'Aivot kaipaavat huoltoa',
        titleEn: 'The brain needs maintenance',
        instructionsFi: 'Miten pidät huolta aivoistasi? Milloin aivosi toimivat hyvin? Entä huonosti? Mikä on tärkeää aivojen hyvinvoinnille?',
        sampleFi:
          'Pidän huolta aivoistani monella tavalla. Luen paljon, opettelen uusia asioita ja teen ristikkotehtäviä. Myös liikunta ja hyvä uni auttavat aivoja.\n\nAivot toimivat hyvin, kun nukun tarpeeksi, syön terveellisesti ja liikun. Aivot toimivat huonosti, kun olen väsynyt, stressaantunut tai sairas.\n\nAivojen hyvinvoinnille tärkeitä ovat uni, liikunta, terveellinen ruoka ja henkinen hyvinvointi. Myös sosiaaliset suhteet ja uudet haasteet pitävät aivot aktiivisina.',
      },
      {
        id: 'k-e',
        titleFi: 'Minun hyvinvointi',
        titleEn: 'My wellbeing',
        instructionsFi: 'Miten pysyt terveenä? Miten hoidat terveyttäsi? Millainen on hyvä / terve elämä? Milloin olit viimeksi sairas?',
        sampleFi:
          'Pysyn terveenä liikkumalla, syömällä terveellisesti ja nukkumalla riittävästi. Käyn myös lääkärissä säännöllisissä tarkastuksissa.\n\nHoidan terveyttäni lenkkeilemällä, syömällä vihanneksia, juomalla vettä ja välttämällä liiallista stressiä.\n\nHyvä elämä on tasapainoista: on aikaa työlle, perheelle, ystäville ja itselle. Terve elämä tarkoittaa kohtuutta kaikessa.\n\nOlin viimeksi sairas kolme kuukautta sitten. Olin flunssassa ja lepäsin kotona muutaman päivän. Onneksi toivuin nopeasti.',
      },
      {
        id: 'k-f',
        titleFi: 'Terveellinen ruoka',
        titleEn: 'Healthy food',
        instructionsFi: 'Millainen ruoka on terveellistä? Miksi? Haluaisitko muuttaa jotain ruokavaliossasi? Mitä?',
        sampleFi:
          'Terveellinen ruoka on monipuolista ja ravinteikasta. Se sisältää paljon kasviksia, hedelmiä, täysjyväviljaa, proteiinia ja terveellisiä rasvoja. On tärkeää välttää liikaa sokeria, suolaa ja tyydyttyneitä rasvoja.\n\nHaluaisin muuttaa ruokavaliossani sitä, että söisin enemmän kalaa ja vähemmän punaista lihaa. Haluaisin myös vähentää sokerin käyttöä ja syödä enemmän kasviksia.\n\nTerveellinen ruoka antaa energiaa ja pitää kehon kunnossa. Se on tärkeä osa hyvinvointia.',
      },
    ],
    opinions: [
      {
        id: 'm-a',
        titleFi: 'Fyysinen terveys on tärkeää myös henkiselle terveydelle',
        titleEn: 'Physical health is important for mental health',
        instructionsFi:
          'Onko fyysinen terveys ja henkinen terveys (psyyke) mielestäsi yhtä tärkeitä? Miten pidät huolta fyysisestä ja henkisestä terveydestä? Suomessa on paljon masennusta ja myös itsemurhia. Mistä ajattelet, että se johtuu?',
        sampleFi:
          'Mielestäni fyysinen ja henkinen terveys ovat yhtä tärkeitä. Ne vaikuttavat toisiinsa: jos fyysinen terveys on huono, se vaikuttaa mielialaan, ja jos henkinen terveys on huono, se vaikuttaa kehoon.\n\nPidän huolta fyysisestä terveydestä liikkumalla ja syömällä terveellisesti. Henkistä terveyttä hoidan rentoutumalla, juttelemalla ystävien kanssa ja tekemällä asioita, joista nautin.\n\nSuomessa on paljon masennusta ja itsemurhia. Syitä voivat olla pimeys, kylmyys, sosiaalinen eristyneisyys ja korkeat vaatimukset. Myös alkoholilla on osuutta asiaan.\n\nOn tärkeää puhua mielenterveysongelmista ja hakea apua ajoissa. Kukaan ei ole yksin ongelmiensa kanssa.',
      },
      {
        id: 'm-b',
        titleFi: 'Urheilu ja doping',
        titleEn: 'Sports and doping',
        instructionsFi: 'Mitä mieltä olet dopingista? Voiko huippu-urheilija pärjätä ilman dopingia?',
        sampleFi:
          'Olen ehdottomasti dopingia vastaan. Se on epäurheilijamaista, epäeettistä ja vaarallista terveydelle. Doping antaa epäreilun edun ja vääristää kilpailua.\n\nHuippu-urheilija voi pärjätä ilman dopingia. Parhaat urheilijat ovat lahjakkaita, ahkeria ja omistautuneita. Dopingia käyttävät ne, jotka eivät luota omaan kykyynsä.\n\nDoping voi aiheuttaa vakavia terveysongelmia, kuten sydänongelmia ja hormonaalisia häiriöitä. Sen käyttö pitäisi kieltää kokonaan, ja valvonnan pitäisi olla tiukempaa.',
      },
      {
        id: 'm-c',
        titleFi: 'Terveydenhuolto Suomessa',
        titleEn: 'Healthcare in Finland',
        instructionsFi:
          'Millaista sairaanhoito on mielestäsi Suomessa? Mitä hyviä ja mitä huonoja puolia Suomen terveydenhuollossa on? Onko sairaaloissa ja terveyskeskuksissa riittävästi henkilökuntaa? Mikä on erilaista sinun kotimaassa?',
        sampleFi:
          'Suomen terveydenhuolto on mielestäni hyvä. Se on laadukasta, turvallista ja kaikille saatavilla. Julkinen terveydenhuolto on kohtuuhintaista.\n\nHyviä puolia ovat ammattitaitoinen henkilökunta, hyvät hoitotulokset ja ennaltaehkäisy. Huonoja puolia ovat pitkät jonot kiireettömiin hoitoihin ja henkilökunnan puute.\n\nSairaaloissa ja terveyskeskuksissa on ajoittain liian vähän henkilökuntaa. Tämä johtaa kiireeseen ja väsymykseen.\n\nKotimaassani terveydenhuolto on erilaista: siellä on yksityistä ja julkista hoitoa, mutta hinnat ovat usein korkeita. Suomessa terveydenhuolto on tasa-arvoisempaa.',
      },
      {
        id: 'm-d',
        titleFi: 'Päihteet Suomessa',
        titleEn: 'Substances in Finland',
        instructionsFi:
          'Mitä ajattelet suomalaisten päihteiden käytöstä (päihteet = alkoholi, tupakka, huumeet, lääkkeiden väärinkäyttö)? Millaisissa tilanteissa päihteiden käyttö on sallittua? Millaisia ongelmia päihteistä voi tulla? Mitä mieltä olet alaikäisten (alle 18-vuotiaiden) päihteiden käytöstä?',
        sampleFi:
          'Suomalaiset käyttävät alkoholia melko paljon erityisesti viikonloppuisin. Tupakointi on vähentynyt, mutta sähkötupakka on yleistynyt. Huumeiden käyttö on lisääntynyt, mikä on huolestuttavaa.\n\nPäihteiden käyttö on sallittua aikuisille kohtuullisissa määrissä. Alkoholia saa käyttää yli 18-vuotiaana, ja tupakkaa yli 18-vuotiaana. Huumeet ovat laittomia.\n\nPäihteistä voi tulla vakavia ongelmia: riippuvuus, terveysongelmat, sosiaaliset ongelmat, taloudelliset ongelmat ja rikokset.\n\nAlaikäisten päihteiden käyttö on erittäin haitallista, koska keho ja aivot kehittyvät. Sitä pitäisi ehdottomasti estää. Vanhemmilla ja koululla on tärkeä rooli valistuksessa.',
      },
    ],
    writingTasks: [
      {
        id: 'w1',
        titleFi: 'Keskustelun aloitus nettipalstalla',
        instructionsFi:
          'Sinulla on jokin terveysongelma, johon tarvitset apua. Pyydät apua terveysnettipalstalla. Kirjoita keskustelun aloitus, jossa kerrot, millainen terveysongelma sinulla on, mitä oireita sinulla on, miten se haittaa arkielämää, ja miksi pyydät apua nettipalstalta.',
        bulletsFi: [],
        sampleFi:
          'Otsikko: Selkäkipu vaivaa - mitä tehdä?\n\nHei kaikki!\n\nMinulla on ollut selkäkipua viimeiset kaksi viikkoa. Kipu on alaselässä ja se säteilee joskus vasempaan jalkaan. Kipu on erityisen paha aamuisin ja kun istun pitkään.\n\nOireita: Kipu on tylsää ja välillä terävää. Kipu pahenee, kun olen pitkään paikallaan. Aamulla selkä on jäykkä.\n\nTämä haittaa arkeani todella paljon. En pysty nukkumaan kunnolla, ja töissä istuminen on vaikeaa. Myös käveleminen on välillä kivuliasta.\n\nOlen käynyt lääkärissä, mutta hän sanoi, että se on todennäköisesti lihasjännitystä. Olen ottanut Buranaa ja levännyt, mutta kipu ei mene pois.\n\nOnko jollain ollut samanlaista? Mitä teitte? Olisiko hieronta tai fysioterapia hyvä idea? Kiitos avusta!\n\nTerveisin,\n[Nimi]',
      },
      {
        id: 'w2',
        titleFi: 'Viesti työkaverille',
        instructionsFi:
          'Työkaverisi on joutunut pitkälle sairauslomalle. Kirjoita hänelle viesti, jossa kerrot, mistä ja miten kuulit sairauslomasta, kysyt, mitä työkaverille on tapahtunut, kerrot, miten voit auttaa häntä töissä, ja tarjoat muuta apua työkaverille.',
        bulletsFi: [],
        sampleFi:
          'Hei [nimi]!\n\nKuulin Maijalta, että olet joutunut sairauslomalle. Olen todella pahoillani kuulla tästä. Toivottavasti olet kunnossa ja paranet pian.\n\nVoitko kertoa, mitä on tapahtunut? Onko se vakavaa? Mietin, voinko auttaa sinua jotenkin.\n\nTöissä voin hoitaa sinun kiireellisimmät tehtävät, jos haluat. Voit lähettää minulle listan, mitä pitää tehdä. Voin myös vastata sähköposteihin puolestasi.\n\nJos tarvitset apua muuten, esimerkiksi ruuan hankinnassa tai lasten hoidossa, kerro rohkeasti! Olen täällä sinua varten.\n\nParanemisia ja ota yhteyttä, kun jaksat!\n\nTerveisin,\n[Nimesi]',
      },
      {
        id: 'w3',
        titleFi: 'Valitus',
        instructionsFi:
          'Sukulaisesi on saanut mielestäsi huonoa hoitoa sairaalassa. Et ole tyytyväinen hoitoon ja valitat potilasasiamiehelle. Kirjoita valitus, jossa kerrot, mitä sukua olet potilaalle, milloin ja miksi sukulaisesi oli sairaalassa, miksi hoito oli mielestäsi huonoa, ja mitä haluat, että asialle tehdään.',
        bulletsFi: [],
        sampleFi:
          'Potilasasiamiehelle\n\nOlen [nimi], ja kirjoitan tämän valituksen äitini puolesta. Äitini, [äidin nimi], oli sairaalahoidossa [sairaalan nimi] 10.-20. maaliskuuta 2026 keuhkokuumeen vuoksi.\n\nHoito oli mielestäni huonoa seuraavista syistä:\n- Hoitajat olivat usein kiireisiä eivätkä vastanneet äitini soittokelloon ajoissa.\n- Lääkäri ei kertonut äidilleni riittävästi hoidon etenemisestä.\n- Ruoka oli huonoa, ja äiti ei pystynyt syömään sitä.\n- Huone oli meluisa eikä äiti saanut nukuttua.\n\nToivon, että asialle tehdään jotain:\n- Henkilökuntaa pitäisi olla enemmän, jotta potilaat saavat riittävästi huomiota.\n- Lääkäreiden pitäisi keskustella potilaiden kanssa selkeämmin hoidosta.\n- Ruuan laatua pitäisi parantaa.\n- Potilashuoneiden pitäisi olla rauhallisempia.\n\nToivon, että otatte tämän valituksen vakavasti ja parannatte hoitoa.\n\nYstävällisin terveisin,\n[Nimesi]\nPuhelinnumero: [numero]',
      },
    ],
    vocabSummary: [
      { fi: 'terveys', en: 'health' },
      { fi: 'hyvinvointi', en: 'wellbeing' },
      { fi: 'sairaus', en: 'illness/disease' },
      { fi: 'oire', en: 'symptom' },
      { fi: 'kipu', en: 'pain' },
      { fi: 'pääkipu / päänsärky', en: 'headache' },
      { fi: 'selkäkipu', en: 'back pain' },
      { fi: 'flunssa', en: 'flu/cold' },
      { fi: 'kuume', en: 'fever' },
      { fi: 'väsymys', en: 'tiredness/fatigue' },
      { fi: 'masennus', en: 'depression' },
      { fi: 'ahdistus', en: 'anxiety' },
      { fi: 'stressi', en: 'stress' },
      { fi: 'uni', en: 'sleep' },
      { fi: 'lepo', en: 'rest' },
      { fi: 'lääke', en: 'medicine' },
      { fi: 'särkylääke', en: 'painkiller' },
      { fi: 'apteekki', en: 'pharmacy' },
      { fi: 'sairaala', en: 'hospital' },
      { fi: 'lääkäri', en: 'doctor' },
      { fi: 'hoitaja', en: 'nurse' },
      { fi: 'terveyskeskus', en: 'health center' },
      { fi: 'hätätilanne', en: 'emergency' },
      { fi: 'ambulanssi', en: 'ambulance' },
      { fi: 'ensiapu', en: 'first aid' },
      { fi: 'onnettomuus', en: 'accident' },
      { fi: 'leikkaus', en: 'surgery' },
      { fi: 'toipuminen', en: 'recovery' },
      { fi: 'liikunta', en: 'exercise' },
      { fi: 'ravinto', en: 'nutrition' },
      { fi: 'ruokavalio', en: 'diet' },
      { fi: 'päihteet', en: 'substances (alcohol, drugs, etc.)' },
      { fi: 'terveellinen', en: 'healthy' },
      { fi: 'henkinen terveys', en: 'mental health' },
      { fi: 'fyysinen terveys', en: 'physical health' },
      { fi: 'itsemurha', en: 'suicide' },
      { fi: 'doping', en: 'doping' },
    ],
  },
  {
    id: 'conv-ch6',
    titleFi: 'Luku 6: Yhteiskunta',
    titleEn: 'Chapter 6: Society',
    level: 'B1',
    warmup: [
      {
        id: 'w-1',
        scenarioFi: 'Milloin kävit viimeksi Migrissä?',
        scenarioEn: 'When did you last visit Migri (the Finnish Immigration Service)?',
        sampleFi: 'Kävin Migrissä viimeksi kuusi kuukautta sitten hakemassa oleskelulupaa. Jouduin odottamaan kaksi tuntia, mutta asia hoitui lopulta hyvin.',
      },
      {
        id: 'w-2',
        scenarioFi: 'Milloin kävit viimeksi Kelassa?',
        scenarioEn: 'When did you last visit Kela (the Social Insurance Institution)?',
        sampleFi: 'Kävin Kelassa viimeksi kolme kuukautta sitten. Menin hakemaan sairauspäivärahaa. Sain ajan ja palvelu oli ystävällistä.',
      },
      {
        id: 'w-3',
        scenarioFi: 'Milloin kävit viimeksi poliisiasemalla?',
        scenarioEn: 'When did you last visit the police station?',
        sampleFi: 'Kävin poliisiasemalla vuosi sitten hakemassa passia. Jonotin noin tunnin, mutta prosessi oli sujuva.',
      },
      {
        id: 'w-4',
        scenarioFi: 'Milloin kävit viimeksi vakuutusyhtiössä?',
        scenarioEn: 'When did you last visit an insurance company?',
        sampleFi: 'Kävin vakuutusyhtiössä viime kuussa tekemässä kotivakuutusta. Asioin heidän verkkosivuillaan, enkä käynyt paikan päällä.',
      },
      {
        id: 'w-5',
        scenarioFi: 'Milloin kävit viimeksi verotoimistossa?',
        scenarioEn: 'When did you last visit the tax office?',
        sampleFi: 'Kävin verotoimistossa viimeksi keväällä veroilmoituksen takia. Tarvitsin apua verokortin päivittämisessä.',
      },
      {
        id: 'w-6',
        scenarioFi: 'Milloin kävit viimeksi maistraatissa?',
        scenarioEn: 'When did you last visit the Local Register Office?',
        sampleFi: 'Kävin maistraatissa kaksi vuotta sitten, kun vaihdoin osoitteen. Nykyään osoitteen voi vaihtaa netissä.',
      },
      {
        id: 'w-7',
        scenarioFi: 'Milloin kävit viimeksi suurlähetystössä?',
        scenarioEn: 'When did you last visit the embassy?',
        sampleFi: 'Kävin suurlähetystössä vuosi sitten hakemassa uutta passia. Jouduin varaamaan ajan etukäteen.',
      },
    ],
    dialogues: [
      {
        id: 'd1',
        titleFi: 'Avioliiton rekisteröinti maistraatissa',
        titleEn: 'Registering a marriage at the Local Register Office',
        turns: [
          { speaker: 'Virkailija', fi: 'Hei, miten voin auttaa?' },
          { speaker: 'Sinä', fi: 'Hei! Haluaisimme rekisteröidä avioliiton.' },
          { speaker: 'Virkailija', fi: 'Asia selvä. Ovatko molemmat osapuolet täysi-ikäisiä?' },
          { speaker: 'Sinä', fi: 'Kyllä, molemmat ovat yli 18-vuotiaita.' },
          { speaker: 'Virkailija', fi: 'Ja kumpikaan ei ole naimisissa, rekisteröidyssä parisuhteessa tai sukulaisia keskenään?' },
          { speaker: 'Sinä', fi: 'Ei, kumpikaan ei ole naimisissa, eikä meillä ole sukulaisuussuhdetta.' },
          {
            speaker: 'Virkailija',
            fi: 'Sitten voidaan aloittaa esteiden tutkinta. Maistraatin nettisivulla on tutkintapyyntölomake, jonka voi printata ja täyttää. Voin myös tulostaa sen tässä, jos haluat.',
          },
          { speaker: 'Sinä', fi: 'Kiitos, voisitteko tulostaa lomakkeen?' },
          { speaker: 'Virkailija', fi: 'Sanotko sun henkilötunnuksen? Tarvitsen sen tähän.' },
          { speaker: 'Sinä', fi: 'Henkilötunnukseni on [number].' },
          { speaker: 'Virkailija', fi: 'Kiitos. Kun olet täyttänyt lomakkeen, tuo se tänne ja sitten voidaan varata aika rekisteröinnille.' },
          { speaker: 'Sinä', fi: 'Paljonko rekisteröinti maksaa?' },
          {
            speaker: 'Virkailija',
            fi: 'Rekisteröinti täällä maistraatissa ei maksa mitään, mutta jos haluatte, että se rekisteröidään muualla, tulee matkakustannukset teidän maksettavaksi.',
          },
          { speaker: 'Sinä', fi: 'Kiitos! Täytän lomakkeen ja tuon sen pian.' },
        ],
      },
      {
        id: 'd2',
        titleFi: 'Kotivakuutus ja korvaus',
        titleEn: 'Home insurance and compensation',
        turns: [
          { speaker: 'Virkailija', fi: 'Vakuutusyhtiö Turvanasi, miten voin auttaa?' },
          { speaker: 'Sinä', fi: 'Hei! Haluaisin hakea korvausta kotivakuutuksesta. Kodissani oli vesivahinko.' },
          { speaker: 'Virkailija', fi: 'Oi voi, sepä ikävää. Milloin ja miten huomasit asian?' },
          { speaker: 'Sinä', fi: 'Huomasin eilen, kun pesukone vuoti vettä keittiön lattialle. Vesi levisi myös eteiseen.' },
          { speaker: 'Virkailija', fi: 'Selvä. Sanotko vielä sun nimen ja osoitteen, niin etsin vakuutustiedot.' },
          { speaker: 'Sinä', fi: 'Nimeni on [name] ja osoite [address].' },
          {
            speaker: 'Virkailija',
            fi: 'Kiitos, löysin tiedot. Kuulkaa, nyt on käynyt niin ikävästi, että teillä on viimeinen kotivakuutuksen lasku maksamatta, joten kotivakuutus ei ole enää ollut pariin kuukauteen voimassa.',
          },
          { speaker: 'Sinä', fi: 'Mitä? Miten se on mahdollista? En ole saanut laskua!' },
          {
            speaker: 'Virkailija',
            fi: 'Niinkö? Meillä on täällä tieto, että lasku on lähtenyt tasan kaksi kuukautta sitten ja sitten muistutusmaksu siitä kolmen viikon kuluttua.',
          },
          {
            speaker: 'Sinä',
            fi: 'Teillä on varmasti virhe. Minulla on ollut ongelmia postin kanssa. Olen saanut vain muutaman postin viime aikoina.',
          },
          {
            speaker: 'Virkailija',
            fi: 'Ai jaa. No posti on kyllä ollut tosi epäluotettava viime aikoina. Multakin on hävinnyt monta pakettia. Mä myös näen täältä, että olet ollut meidän asiakas jo kymmenen vuotta ja aina maksanut laskut ajallaan, joten yritetään korjata tämä asia, että saadaan kotivakuutuksesta sulle korvaus. Tätä asiaa ei kuitenkaan voida hoitaa näin puhelimessa, niin pääsetkö käymään täällä meidän toimistolla?',
          },
          { speaker: 'Sinä', fi: 'Kyllä, voin tulla. Milloin teille sopii?' },
          { speaker: 'Virkailija', fi: 'Selvä juttu. Mä merkitsen tähän kalenteriin. Nähdään silloin.' },
          { speaker: 'Sinä', fi: 'Kiitos avusta! Nähdään!' },
        ],
      },
    ],
    reactions: [
      {
        id: 'r1',
        scenarioFi: 'Sinulla on jokin ongelma oleskeluluvan kanssa (keksi itse, mikä). Soita Migriin.',
        sampleFi:
          'Hei! Soitan Migriin. Minulla on ongelma oleskeluluvan kanssa. Olen odottanut päätöstä jo kolme kuukautta, mutta en ole kuullut mitään. Haluaisin kysyä, mikä tilanne on ja milloin voin saada päätöksen.',
      },
      {
        id: 'r2',
        scenarioFi: 'Olet saanut YKI-testin tulokset. Haluat hakea kansalaisuutta, mutta sinulla on kysymyksiä. Soita Migriin.',
        sampleFi:
          'Hei! Olen saanut YKI-testin tulokset ja läpäissyt sen. Nyt haluaisin hakea kansalaisuutta. Minulla on kysymyksiä hakemuksesta: mitä papereita tarvitaan ja kuinka kauan käsittely kestää? Voisitteko auttaa?',
      },
      {
        id: 'r3',
        scenarioFi: 'Olet odottanut Suomen passia jo 16 kuukautta. Haluat kysyä lisää. Soita Migriin.',
        sampleFi:
          'Hei! Olen hakenut Suomen passia 16 kuukautta sitten, enkä ole saanut sitä vielä. Käsittelyaika on todella pitkä. Voitteko kertoa, missä vaiheessa hakemukseni on? Tarvitsen passia matkustamista varten.',
      },
      {
        id: 'r4',
        scenarioFi:
          'Presidentin kansliasta soitetaan sinulle ja saat kutsun 6.12. itsenäisyyspäivän juhlaan, koska olet ollut tosi ahkera suomen kielen opiskelija. Mitä sanot?',
        sampleFi: 'Vau! Tämä on aivan uskomatonta! Olen todella otettu ja kiitollinen! Totta kai tulen juhlaan! Tämä on minulle suuri kunnia. Kiitos todella paljon!',
      },
      {
        id: 'r5',
        scenarioFi: 'Sinun kännykkä on mennyt rikki (keksi itse, miten). Kysyt, korvaako kotivakuutus sen.',
        sampleFi: 'Hei! Kännykkäni putosi lattialle ja näyttö meni rikki. Korvaako kotivakuutus tämän? Minulla on kotivakuutus, ja haluaisin tietää, saanko korvausta.',
      },
      {
        id: 'r6',
        scenarioFi: 'Sinun työtilanteesi on muuttunut (keksi itse, miten) ja sinun täytyy muuttaa veroprosenttiasi. Soita verotoimistoon.',
        sampleFi:
          'Hei! Työtilanteeni on muuttunut. Aloitan uudessa työssä ensi kuussa, ja palkka on korkeampi. Minun täytyy muuttaa veroprosenttiani. Voitteko auttaa minua laskemaan uuden veroprosentin?',
      },
      {
        id: 'r7',
        scenarioFi: 'Sinulla on jokin ongelma Kelan kanssa (keksi itse, mikä). Soita Kelaan.',
        sampleFi:
          'Hei! Soitan Kelasta saamastani päätöksestä. Hain sairauspäivärahaa, mutta sain hylkäävän päätöksen. En ymmärrä, miksi hakemus hylättiin. Voitteko kertoa, mitä tietoja puuttuu?',
      },
      {
        id: 'r8',
        scenarioFi: 'Olet joutunut rikoksen uhriksi (keksi itse, mitä on tapahtunut). Ilmoita asiasta poliisille.',
        sampleFi:
          'Hei! Haluan ilmoittaa rikoksesta. Minun lompakkoni varastettiin eilen kaupungilla. Se tapahtui kello 16.00. Haluaisin tehdä rikosilmoituksen. Mitä tietoja tarvitsette?',
      },
    ],
    longSpeaking: [
      {
        id: 'k-a',
        titleFi: 'Minulle on tärkeää, mistä olen kotoisin',
        titleEn: 'Where I come from is important to me',
        instructionsFi: 'Mitä kansalaisuus sinulle merkitsee? Mikä on sinun kotimaa? Miksi ajattelet niin? Mitä suomalaisuus sinulle merkitsee?',
        sampleFi:
          'Kansalaisuus on minulle tärkeä, koska se kertoo, mistä olen kotoisin. Kotimaani on [country]. Siellä on minun juureni, perheeni ja kulttuurini. Vaikka asun Suomessa, kotimaani on aina osa minua.\n\nSuomalaisuus merkitsee minulle rehellisyyttä, luotettavuutta ja rauhaa. Suomalaiset ovat usein hiljaisia ja ujoja, mutta myös ystävällisiä ja auttavaisia. Suomessa arvostetaan luontoa, tasa-arvoa ja koulutusta.\n\nOn tärkeää, että säilytän oman kulttuurini, mutta samalla haluan oppia suomalaisista tavoista. Uskon, että jokainen voi olla ylpeä omasta taustastaan ja samalla kunnioittaa toisten kulttuureja.',
      },
      {
        id: 'k-b',
        titleFi: 'Suomalaiset ystäväni',
        titleEn: 'My Finnish friends',
        instructionsFi:
          'Onko sinulla suomalaisia ystäviä? Millaisia he ovat? Miten olet tutustunut heihin? Sanotaan, että suomalaiset ovat ujoja ja hiljaisia. Mitä mieltä olet? Mikä on hyvä tapa tutustua uusiin ihmisiin?',
        sampleFi:
          'Minulla on muutamia suomalaisia ystäviä. He ovat ystävällisiä, luotettavia ja rehellisiä. He eivät puhu paljon, mutta kun he puhuvat, he tarkoittavat sitä.\n\nTutustuin heihin työpaikalla ja harrastusten kautta. Menin mukaan liikuntaryhmään, ja siellä tapasin uusia ihmisiä. Yhteiset harrastukset auttavat tutustumaan.\n\nSanotaan, että suomalaiset ovat ujoja ja hiljaisia. Se on osittain totta. Suomalaiset eivät pidä turhanpäiväisestä jutustelusta, mutta kun he tutustuvat, he ovat lämpimiä ja luotettavia. He arvostavat syvällisiä keskusteluja.\n\nHyvä tapa tutustua uusiin ihmisiin on mennä mukaan yhteisiin aktiviteetteihin: harrastuksiin, kursseille, työpaikan tapahtumiin. Kannattaa olla avoin ja kärsivällinen. Ystävyys ei synny hetkessä, vaan ajan kanssa.',
      },
    ],
    opinions: [
      {
        id: 'm-a',
        titleFi: 'Suomi ei ole tasa-arvoinen maa',
        titleEn: 'Finland is not an equal country',
        instructionsFi: 'Miten Suomen tasa-arvo/epätasa-arvo näkyy? Ketkä ovat tasa-arvoisia? Missä asioissa Suomi ei ole tasa-arvoinen?',
        sampleFi:
          'Suomi on melko tasa-arvoinen maa verrattuna moneen muuhun maahan. Täällä naisilla ja miehillä on samat oikeudet, koulutus on ilmaista ja kaikilla on mahdollisuus terveydenhuoltoon.\n\nKuitenkin Suomessa on epätasa-arvoa. Eriarvoisuutta näkyy esimerkiksi tuloissa, asuinalueilla ja maahanmuuttajien asemassa. Joillakin aloilla, kuten tekniikan alalla, on vähemmän naisia. Palkkaerot naisten ja miesten välillä ovat olemassa.\n\nMaahanmuuttajat kokevat usein syrjintää työnhaussa ja arjessa. Se on epäreilua. Tasa-arvo tarkoittaa, että kaikilla on samat mahdollisuudet, riippumatta taustasta.\n\nSuomi on hyvä maa, mutta tasa-arvotyötä pitää tehdä jatkuvasti. Tasa-arvo ei ole itsestäänselvyys, ja jokainen voi omalla toiminnallaan edistää sitä.',
      },
      {
        id: 'm-b',
        titleFi: 'Nykyään ihmiset eivät välitä toisista',
        titleEn: "Nowadays people don't care about each other",
        instructionsFi: 'Jos näet kadulla ihmisen makaamassa, autatko häntä? Ketkä ihmiset ovat sinulle tärkeitä? Miten autat muita ihmisiä?',
        sampleFi:
          'Jos näen kadulla ihmisen makaamassa, autan häntä. Soitan ambulanssin tai kysyn, onko hän kunnossa. Mielestäni on tärkeää auttaa toisia.\n\nMinulle tärkeitä ihmisiä ovat perhe, ystävät ja työkaverit. Heidän kanssaan on hyvä jakaa ilot ja surut. Tärkeintä on, että on ihmisiä, joihin voi luottaa.\n\nAutan muita ihmisiä monella tavalla: kuuntelen, annan neuvoja, autan käytännön asioissa ja olen läsnä. Pienetkin teot merkitsevät paljon. Mielestäni ihmiset välittävät toisistaan, mutta kiireessä se unohtuu. On tärkeää muistaa pysähtyä ja auttaa.',
      },
      {
        id: 'm-c',
        titleFi: 'Suomessa on liian vähän maahanmuuttajia poliitikkoina',
        titleEn: 'Finland has too few immigrants as politicians',
        instructionsFi: 'Mitä asioita maahanmuuttajat voivat edistää? Miksi olisi hyvä, että maahanmuuttajat osallistuisivat aktiivisemmin politiikkaan?',
        sampleFi:
          'Suomessa on liian vähän maahanmuuttajia poliitikkoina. Se on ongelma, koska maahanmuuttajilla on omia kokemuksia ja näkökulmia, joita tarvitaan päätöksenteossa.\n\nMaahanmuuttajat voivat edistää esimerkiksi kotoutumista, kielikoulutusta, työllisyyttä ja yhdenvertaisuutta. He tietävät, millaisia haasteita maahanmuuttajat kohtaavat. He voivat tuoda esiin asioita, jotka kantasuomalaiset eivät välttämättä huomaa.\n\nOlisi hyvä, että maahanmuuttajat osallistuisivat aktiivisemmin politiikkaan, koska se lisää monimuotoisuutta ja edustavuutta. Se auttaisi rakentamaan yhteiskuntaa, jossa kaikki tuntevat olevansa mukana.\n\nMyös puolueiden pitäisi rohkaista maahanmuuttajia ehdokkaiksi. Tarvitaan lisää erilaisia ääniä päätöksenteossa.',
      },
      {
        id: 'm-d',
        titleFi: 'Suomen verot ovat liian korkeat',
        titleEn: 'Finnish taxes are too high',
        instructionsFi: 'Mitä mieltä olet Suomen verotuksesta? Millainen Suomen verotus on kotimaasi verotukseen verrattuna?',
        sampleFi:
          'Suomen verot ovat korkeat verrattuna moniin muihin maihin. Ansiotulovero, arvonlisävero ja muut verot tekevät elämästä kallista. Kuitenkin verorahat menevät hyviin asioihin: koulutukseen, terveydenhuoltoon, sosiaaliturvaan ja infrastruktuuriin.\n\nKotimaassani verot ovat alemmat, mutta julkiset palvelut ovat heikompia. Suomessa verot maksavat hyvästä elämänlaadusta. Täällä on ilmainen koulutus ja terveydenhuolto, mitä monessa maassa ei ole.\n\nVerot voisivat olla kohtuullisemmat, mutta on tärkeää, että verorahat käytetään tehokkaasti. Jos verot laskisivat liikaa, palvelut heikkenisivät.\n\nMielestäni verotus on Suomessa oikeudenmukaista: enemmän tienaavat maksavat enemmän. Se on osa suomalaista hyvinvointivaltiota.',
      },
    ],
    writingTasks: [
      {
        id: 'w1',
        titleFi: 'Viesti ystävälle',
        instructionsFi:
          'Ulkomaalainen ystäväsi haluaa muuttaa Suomeen. Lähetä hänelle viesti, mitä hänen pitää tehdä, että voi muuttaa. Kerro myös, mitä hänen on tärkeää tietää Suomesta ennen muuttoa.',
        bulletsFi: [],
        sampleFi:
          'Hei [name]!\n\nKuulin, että harkitset muuttamista Suomeen. Se on mahtava idea! Kerron nyt, mitä sinun pitää tehdä ja tietää ennen muuttoa.\n\nMitä pitää tehdä:\n- Hae oleskelulupaa Migristä. Tarvitset työpaikan tai opiskelupaikan.\n- Hanki henkilötunnus ja kirjaudu maistraatissa.\n- Avaa pankkitili ja hanki verokortti.\n- Jos et puhu suomea, opiskele kieltä. Se auttaa arjessa ja työnhaussa.\n\nTärkeää tietää Suomesta:\n- Ilma on kylmä, erityisesti talvella. Ota lämpimiä vaatteita!\n- Suomalaiset ovat rauhallisia ja arvostavat omaa tilaa. Ole kärsivällinen.\n- Julkinen liikenne toimii hyvin. Auto ei ole pakollinen kaupungissa.\n- Byrokratia on sujuvaa, mutta varaudu paperityöhön.\n- Suomi on turvallinen ja luonnonkaunis maa.\n\nToivottavasti nämä vinkit auttavat! Kysy, jos haluat lisätietoja.\n\nTerveisin,\n[Your name]',
      },
      {
        id: 'w2',
        titleFi: 'Valitus',
        instructionsFi:
          'Olet hakenut suomen kielen jatkokurssille, mutta et ole päässyt, koska virkailijan mukaan sinun kielitaito riittää. Kirjoita virkailijalle valitus, jossa kerrot: miksi sinun pitäisi saada jatkaa kielikoulutusta, mitä teet, kun kielitaitosi on parempi, miten hylätty päätös vaikuttaa sinun elämääsi.',
        bulletsFi: [],
        sampleFi:
          'Hei!\n\nOlen [name], ja haen suomen kielen jatkokurssille. Valitettavasti hakemukseni hylättiin, koska virkailijan mukaan kielitaitoni on riittävä. Olen eri mieltä tästä päätöksestä.\n\nMiksi tarvitsen jatkokurssia:\n- Kirjoitustaitoni ei ole vielä tarpeeksi hyvä. Tarvitsen lisää harjoitusta.\n- Tarvitsen parempaa puheen sujuvuutta työssäni.\n- Koen, että kielitaitoni on välitasoa, enkä vielä pärjää kaikissa tilanteissa.\n\nMitä teen, kun kielitaitoni on parempi:\n- Pystyn kommunikoimaan sujuvammin työssä ja arjessa.\n- Voin osallistua enemmän suomalaiseen yhteiskuntaan.\n- Minulla on paremmat mahdollisuudet edetä urallani.\n\nMiten hylätty päätös vaikuttaa minuun:\n- Kielitaitoni ei kehity tarpeeksi nopeasti.\n- Jatkokurssi on ainoa mahdollisuus saada opetusta.\n- Ilman kurssia minun on vaikea integroitua ja saada töitä.\n\nToivon, että voitte harkita päätöstä uudelleen ja päästää minut kurssille.\n\nYstävällisin terveisin,\n[Your name]',
      },
      {
        id: 'w3',
        titleFi: 'Mielipide: valitse A tai B',
        instructionsFi:
          'A. Maahanmuuttajat lähtevät pois Suomesta, koska eivät saa töitä. / B. Oma auto on liian kallis. Valitse toinen ja kirjoita mielipidekirjoitus.',
        bulletsFi: [],
        sampleFi:
          'A. Maahanmuuttajat lähtevät pois Suomesta, koska eivät saa töitä.\n\nTämä on valitettavasti totta monille maahanmuuttajille. Monet heistä lähtevät pois Suomesta, koska eivät löydä töitä. Syitä on useita.\n\nEnsinnäkin, kielitaito on iso este. Vaikka maahanmuuttaja osaisi englantia, suomea tarvitaan useimmissa työpaikoissa. Toiseksi, työnantajat saattavat syrjiä maahanmuuttajia. He saattavat ajatella, että maahanmuuttajilla on vähemmän kokemusta tai he eivät sovi työyhteisöön.\n\nMyös tutkintojen tunnustaminen on ongelma. Monen maahanmuuttajan koulutus ei kelpaa Suomessa, ja he joutuvat tekemään matalapalkkatöitä.\n\nSuomi tarvitsee lisää työntekijöitä, joten ongelma pitäisi ratkaista. Maahanmuuttajille pitäisi tarjota enemmän kielikoulutusta, työnantajia pitäisi kouluttaa syrjinnän vähentämiseksi ja tutkintojen tunnustamista pitäisi helpottaa.\n\nJos maahanmuuttajat saavat töitä, he jäävät Suomeen ja rikastuttavat yhteiskuntaa. Se on hyväksi kaikille.\n\nB. Oma auto on liian kallis.\n\nOlen samaa mieltä siitä, että auton omistaminen on kallista Suomessa. Auton hankinta, polttoaine, vakuutus, huolto, verot ja parkkimaksut tekevät siitä kalliin.\n\nAuton hinta on usein korkea, ja siihen tarvitaan lainaa. Bensa maksaa noin 2 euroa litralta, mikä on paljon. Auton veroja on useita, kuten käyttövoimavero ja ajoneuvovero. Vakuutuksetkin maksavat satoja euroja vuodessa.\n\nKaupungeissa auto ei ole edes tarpeellinen, koska julkinen liikenne toimii hyvin. Pienemmillä paikkakunnilla auto on välttämätön, koska etäisyydet ovat pitkiä.\n\nMielestäni julkinen liikenne pitäisi tehdä halvemmaksi ja kattavammaksi, jotta ihmiset voisivat luopua autoista. Se säästäisi rahaa ja vähentäisi saasteita.\n\nItse käytän bussia ja pyörää, koska se on halvempaa ja ympäristöystävällisempää. Auto on liian kallis minun budjetilleni.',
      },
    ],
    vocabSummary: [
      { fi: 'yhteiskunta', en: 'society' },
      { fi: 'kansalaisuus', en: 'citizenship' },
      { fi: 'oleskelulupa', en: 'residence permit' },
      { fi: 'Migri', en: 'Finnish Immigration Service' },
      { fi: 'Kela', en: 'Social Insurance Institution' },
      { fi: 'verotoimisto', en: 'tax office' },
      { fi: 'maistraatti', en: 'Local Register Office' },
      { fi: 'poliisi', en: 'police' },
      { fi: 'vakuutus', en: 'insurance' },
      { fi: 'kotivakuutus', en: 'home insurance' },
      { fi: 'korvaus', en: 'compensation' },
      { fi: 'avioliitto', en: 'marriage' },
      { fi: 'rekisteröidä', en: 'to register' },
      { fi: 'henkilötunnus', en: 'personal identity number' },
      { fi: 'verokortti', en: 'tax card' },
      { fi: 'veroprosentti', en: 'tax percentage' },
      { fi: 'tasa-arvo', en: 'equality' },
      { fi: 'syrjintä', en: 'discrimination' },
      { fi: 'maahanmuuttaja', en: 'immigrant' },
      { fi: 'kotoutuminen', en: 'integration' },
      { fi: 'kielikoulutus', en: 'language education' },
      { fi: 'byrokratia', en: 'bureaucracy' },
      { fi: 'päätös', en: 'decision' },
      { fi: 'hakemus', en: 'application' },
      { fi: 'käsittelyaika', en: 'processing time' },
      { fi: 'rikosilmoitus', en: 'crime report' },
      { fi: 'suurlähetystö', en: 'embassy' },
      { fi: 'valitus', en: 'complaint' },
      { fi: 'poliitikko', en: 'politician' },
      { fi: 'äänestäminen', en: 'voting' },
      { fi: 'hyvinvointivaltio', en: 'welfare state' },
    ],
  },
]

export function conversationChapter(id: string): ConversationChapter | undefined {
  return CONVERSATION_CHAPTERS.find((c) => c.id === id)
}
