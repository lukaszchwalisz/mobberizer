const Dict = [
    {
        id: '1',
        title:'Pracoholizm',
        content:'to zaburzenie równowagi między pracą a innymi sferami życia, utrata kontroli nad własnym zachowaniem na skutek psychologicznego przymusu jej wykonywania; objawia się on obsesyjną i wewnętrzną potrzebą ciągłego wykonywania pracy kosztem innych obszarów życia.',
        link:'https://www.ciop.pl/CIOPPortalWAR/appmanager/ciop/pl?_nfpb=true&_pageLabel=P30001831335539182278&html_tresc_root_id=16117&html_tresc_id=17758&html_klucz=19558'  
    },
    {
        id: '2',
        title:'Wypalenie zawodowe',
        content:'jest zespołem objawów powstających w wyniku przeciążenia emocjonalnego i fizycznego, które są spowodowane przez stres występujący w miejscu pracy; charakteryzuje się trzema głównymi składnikami: emocjonalnym wyczerpaniem, depersonalizacją i obniżeniem poczucia własnej skuteczności (wg Christiny Maslach).',
        link:'https://www.kul.pl/files/714/media/3.44.2001.art.2.pdf..pdf'
    },
    {
        id: '3',
        title:'Zaburzenia adaptacyjne',
        content:'to stan subiektywnego distresu i zaburzeń emocjonalnych zwykle przeszkadzający w społecznym funkcjonowaniu i działaniu, pojawiający się w okresie adaptacji do istotnych zmian życiowych lub do następstw stresującego wydarzenia życiowego (włączając wystąpienie poważnej choroby fizycznej lub zagrożenie tą chorobą) (F43.2).',
        link:'https://www.icd10data.com/ICD10CM/Codes/F01-F99/F40-F48/F43-/F43.2'
    },
    {
        id: '4',
        title:'Ostra reakcja na stres',
        content:'to przemijające zaburzenie o znacznym nasileniu, które rozwija się jako reakcja na wyjątkowy stres fizyczny lub psychiczny u osoby nie przejawiającej uprzednio żadnego zaburzenia psychicznego, ustępujące zazwyczaj w ciągu godzin lub dni (F43.0).',
        link:'https://www.icd10data.com/ICD10CM/Codes/F01-F99/F40-F48/F43-/F43.0'
    },
    {
        id: '5',
        title:'Zaburzenie stresowe pourazowe',
        content:'to zaburzenie lękowe wywołane intensywnym strachem, przerażeniem, traumatycznym doświadczeniem ( szczególnie zagrażające życiu ); zaburzenie charakteryzuje się natrętnymi powtarzającymi się myślami lub obrazami traumatycznego zdarzenia; unikanie czegokolwiek związanego ze zdarzeniem; stan nadgorliwości i zmniejszona reakcja emocjonalna; objawy te występują przez co najmniej miesiąc, najczęściej są długotrwałe (F43.1).',
        link:'https://www.icd10data.com/ICD10CM/Codes/F01-F99/F40-F48/F43-/F43.1'
    },
    {
        id: '6',
        title:'Depresja',
        content:'to zaburzenie nastroju charakteryzujące się obniżonym nastrojem, utratą zainteresowań i przyjemności z życia oraz zmniejszeniem aktywności fizycznej i psychicznej (F32.0 - F33.9).',
        link:''
    },
    {
        id: '7',
        title:'Nerwica ',
        content:'to choroba psychiczna charakteryzująca się występowaniem napadów lęku lub niepokoju',
        link:''
    },
    {
        id: '8',
        title:'Stres',
        content:'to reakcja organizmu na bodziec zewnętrzny lub wewnętrzny, który wymaga dostosowania się do nowych warunków lub sytuacji.',
        link:''
    },
    {
        id: '9',
        title:'Lęk - zaburzenia lękowe',
        content:'jest to emocja odczuwana w sytuacjach zagrożenia lub niepewności',
        link:''
    },
    {
        id: '11',
        title:'Zaburzenia psychosomatyczne',
        content:'to zaburzenia, w których czynniki psychiczne i emocjonalne mają wpływ na powstawanie lub nasilenie objawów fizycznych; zaburzenia te mogą dotyczyć różnych układów i narządów organizmu, takich jak układ pokarmowy, układ krążenia, układ oddechowy czy skóra.',
        link:'https://web.swps.pl/strefa-psyche/blog/relacje/23509-zaburzenia-psychosomatyczne-jak-stres-wplywa-na-organizm-podcast'
    },
    {
        id: '12',
        title:'Myśli samobójcze',
        content:'są to myśli, które dotyczą zakończenia własnego życia, planowania, w jaki sposób można by to uczynić lub rozważania argumentów za i przeciw samobójstwu.',
        link:'http://www.samobojstwo.pl/'
    },
    {
        id: '13',
        title:'Koszmary nocne',
        content:'to nieprzyjemne sny, które wywołują silne emocje negatywne, takie jak strach, smutek, złość czy wina. Koszmary nocne mogą być związane z traumami, stresami, lękami, depresją lub innymi zaburzeniami psychicznymi. Koszmary nocne pojawiają się zwykle w drugiej połowie nocy, podczas snu REM (snu z szybkimi ruchami gałek ocznych), który jest fazą snu związana z marzeniami sennymi',
        link:'https://www.doctorinfo.pl/warunki/koszmary-nocne/'
    },
    {
        id: '14',
        title:'Bezsenność', 
        content:'to zaburzenie snu, które polega na trudnościach z zasypianiem, częstym budzeniu się w nocy lub zbyt wczesnym przebudzaniem się rano; może mieć negatywne skutki dla zdrowia fizycznego i psychicznego, takie jak zmęczenie, drażliwość, obniżenie koncentracji, pamięci i nastroju, podatność na infekcje, nadciśnienie, cukrzyca czy depresja.',
        link:'https://portal.abczdrowie.pl/bezsennosc'
    },
    {
        id: '15',
        title:'Niezdolność do pracy',
        content:'niezdolną do pracy jest osoba, która całkowicie lub częściowo utraciła zdolność do pracy zarobkowej z powodu naruszenia sprawności organizmu i nie rokuje odzyskania zdolności do pracy po przekwalifikowaniu.',
        link:'https://www.zus.pl/lekarze/orzekanie-o-niezdolnosci-do-pracy/pojecie-niezdolnosci-do-pracy/definicje'
    },
    {
        id: '16',
        title:'Ciężki uszczerbek na zdrowiu',
        content:'to naruszenie sprawności organizmu, które powoduje upośledzenie czynności organizmu nierokujące poprawy.',
        link:'https://statystyka.policja.pl/st/kodeks-karny/przestepstwa-przeciwko/63426,Ciezki-uszczerbek-na-zdrowiu-art-156.html'
    },
    {
        id: '17',
        title:'Mobbing',
        content:'oznacza działania lub zachowania dotyczące pracownika lub skierowane przeciwko niemu, polegające w szczególności na systematycznym i długotrwałym nękaniu i zastraszaniu pracownika, wywołującym u niego zaniżoną ocenę przydatności zawodowej, powodujące lub mające na celu poniżenie, ośmieszenie pracownika, izolowanie go od współpracowników lub wyeliminowanie z zespołu współpracowników.',
        link:'https://www.ciop.pl/CIOPPortalWARCIOPPortalWAR/appmanager/ciop/pl?_nfpb=true&_pageLabel=P61800284591650978135826&html_tresc_root_id=300013353&html_tresc_id=300013349&html_klucz=54321&html_klucz_spis='
    },
    {
        id: '18',
        title:'Konflikt',
        content:'to niezgodność, sprzeczność lub zderzenie interesów, poglądów, wartości lub celów między dwiema lub więcej stronami; także stan emocjonalny, w którym osoba lub grupa odczuwa napięcie, frustrację lub zagrożenie ze strony innej osoby lub grupy.',
        link:'https://perso.in/blog/konflikty-przyczyny-rodzaje-rozwiazywanie-i-zarzadzanie/'
    },
    {
        id: '19',
        title:'Dyskryminacja',
        content:'to traktowanie jednej osoby lub grupy osób w sposób gorszy niż innych z powodu ich przynależności do określonej grupy społecznej np. ze względu na płeć, wiek, orientację seksualną, pochodzenie etniczne',
        link:''
    },
    {
        id: '20',
        title:'Molestowanie seksualne',
        content:'to niepożądane zachowanie o charakterze seksualnym, które narusza godność osoby i powoduje jej poczucie upokorzenia lub zastraszenia',
        link:''
    },
    {
        id: '21',
        title:'Stalking',
        content:'to uporczywe i niepożądane śledzenie czyjejś osoby, które powoduje u niej lęk lub poczucie zagrożenia',
        link:''
    },
    {
        id: '22',
        title:'Bullying',
        content:'to długotrwałe i systematyczne nękanie lub zastraszanie jednej osoby przez inną osobę lub grupę osób',
        link:''
    },

    ];
    
    export { Dict };