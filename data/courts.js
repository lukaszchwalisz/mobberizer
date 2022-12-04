import React from 'react';

const Courts = [
{
	id:'a01',
	title:'Sąd Apelacyjny w Białymstoku',
	adres:'ul. Mickiewicza 5, 15-950 Białystok',
	tel:'(85) 743 07 27 ',
	email:'boi@bialystok.sa.gov.pl',
	www:'https://bialystok.sa.gov.pl',
	apelacja:'białostocka',
	okręg:'białostocki, łomżyński, olsztyński, ostrołęcki, suwalski',
	tag: 'Białystok, białostocka, białostocki, łomżyński, olsztyński, ostrołęcki, suwalski',
},
{
	id:'a02',
	title:'Sąd Apelacyjny w Gdańsku',
	adres:'ul. Nowe Ogrody 28/29, 80-803 Gdańsk',
	tel:'58 323 85 41, 58 323 85 24',
	email:'boi@gdansk.sa.gov.pl',
	www:'https://gdansk.sa.gov.pl',
	apelacja:'gdańska',
	okręg:'bydgoski, elbląski, gdański, słupski, toruński, włocławski',
	tag: 'Gdańsk, gdańska, bydgoski, elbląski, gdański, słupski, toruński, włocławski',
},
{
	id:'a03',
	title:'Sąd Apelacyjny w Katowicach',
	adres:'Al. Korfantego 117/119, 40-156 Katowice',
	tel:'(32) 200 45 83',
	email:'informacja@katowice.sa.gov.pl',
	www:'https://katowice.sa.gov.pl',
	apelacja:'katowicka',
	okręg:'bielski, częstochowski, gliwicki, rybnicki, katowicki, sosnowiecki',
	tag: 'Katowice, katowicka, bielski, częstochowski, gliwicki, rybnicki, katowicki, sosnowiecki',
},
{
	id:'a04',
	title:'Sąd Apelacyjny w Krakowie',
	adres:'Przy Rondzie 3, 31-547 Kraków',
	tel:'(12) 417 54 00',
	email:'sa.krakow@krakow.sa.gov.pl',
	www:'https://krakow.sa.gov.pl',
	apelacja:'krakowska',
	okręg:'kielecki, krakowski, nowosądecki, tarnowski',
	tag: 'Kraków, krakowska, kielecki, krakowski, nowosądecki, tarnowski',
},
{
	id:'a05',
	title:'Sąd Apelacyjny w Lublinie',
	adres:'Obrońców Pokoju 1, 20-950 Lublin',
	tel:'(81) 452 33 70 45 ',
	email:'boi@lublin.sa.gov.pl',
	www:'https://lublin.sa.gov.pl',
	apelacja:'lubelska',
	okręg:'lubelski, radomski, siedlecki, zamojski',
	tag: 'Lublin, lubelska, lubelski, radomski, siedlecki, zamojski',
},
{
	id:'a06',
	title:'Sąd Apelacyjny w Łodzi',
	adres:'Narutowicza 64, 90-136 Łódź',
	tel:'(42) 685 06 96',
	email:'boi@lodz.sa.gov.pl',
	www:'https://lodz.sa.gov.pl',
	apelacja:'łódzka',
	okręg:'kaliski, łódzki, piotrowski, płocki, sieradzki',
	tag: 'Łódź, łódzka, kaliski, łódzki, piotrowski, płocki, sieradzki',
},
{
	id:'a07',
	title:'Sąd Apelacyjny w Poznaniu',
	adres:'Trójpole 21,	61-693 Poznań',
	tel:'(61) 827 45 63',
	email:'informacja@poznan.sa.gov.pl',
	www:'https://poznan.sa.gov.pl',
	apelacja:'poznańska',
	okręg:'koniński, poznański, zielonogórski',
	tag: 'Poznań, poznańska, koniński, poznański, zielonogórski',
},
{
	id:'a08',
	title:'Sąd Apelacyjny w Rzeszowie',
	adres:'Al. Piłsudskiego 28,	35-001 Rzeszów',
	tel:'(17) 858 02 63',
	email:'boi@rzeszow.sa.gov.pl',
	www:'https://rzeszow.sa.gov.pl',
	apelacja:'rzeszowska',
	okręg:'przemyski, krośnieński, rzeszowski, tarnobrzeski',
	tag: 'Rzeszów, rzeszowska, przemyski, krośnieński, rzeszowski, tarnobrzeski',
},
{
	id:'a09',
	title:'Sąd Apelacyjny w Szczecinie',
	adres:'Mickiewicza 163,	71-165 Szczecin',
	tel:'(91) 484 94 87',
	email:'informacja@szczecin.sa.gov.pl',
	www:'https://szczecin.sa.gov.pl',
	apelacja:'szczecińska',
	okręg:'szczeciński, koszaliński, gorzowski',
	tag: 'Szczecin, szczecińska, szczeciński, koszaliński, gorzowski',
},
{
	id:'a10',
	title:'Sąd Apelacyjny w Warszawie',
	adres:'Pl.Krasińskich 2/4/6, 00-207	Warszawa',
	tel:'(22) 530 88 85',
	email:'boi@waw.sa.gov.pl',
	www:'https://waw.sa.gov.pl',
	apelacja:'warszawska',
	okręg:'warszawski, warszawsko-praski',
	tag: 'Warszawa, warszawska, warszawski, warszawsko-praski',
},
{
	id:'a11',
	title:'Sąd Apelacyjny we Wrocławiu',
	adres:'Energetyczna 4, 53-330 Wrocław',
	tel:'(71) 798 77 99',
	email:'boi@wroclaw.sa.gov.pl',
	www:'https://wroclaw.sa.gov.pl',
	apelacja:'wrocławska',
	okręg:'jeleniogórski, legnicki, opolski, świdnicki, wrocławski',
	tag: 'Wrocław, wrocławska, jeleniogórski, legnicki, opolski, świdnicki, wrocławski',
},
{
	id:'1',
	title:'Sąd Okręgowy w Białymstoku',
	adres:'Skłodowskiej-Curie 1, 15-950	Białystok',
	tel:'(85) 742 23 46',
	email:'boi@bialystok.so.gov.pl',
	www:'https://bialystok.so.gov.pl',
	apelacja:'białostocka',
	okręg:'białostocki, łomżyński, olsztyński, ostrołęcki, suwalski',
	tag: 'Białystok, białostocka, białostocki, łomżyński, olsztyński, ostrołęcki, suwalski',
},
{
	id:'2',
	title:'Sąd Rejonowy w Białymstoku',
	adres:'Mickiewicza 103,	15-950 Białystok',
	tel:'(85) 665 65 10',
	email:'boi@bialystok.sr.gov.pl',
	www:'https://bialystok.sr.gov.pl',
	apelacja:'białostocka',
	okręg:'białostocki',
	tag: 'Białystok, białostocka, białostocki, #wp',
},
{
	id:'3',
	title:'Sąd Rejonowy w Bielsku Podlaskim',
	adres:'3 Maja  7, 17-100 Bielsk Podlaski',
	tel:'(85) 731 21 65, 731 21 67',
	email:'boi@bielsk-podlaski.sr.gov.pl',
	www:'https://bielsk-podlaski.sr.gov.pl',
	apelacja:'białostocka',
	okręg:'białostocki',
	tag: 'Bielsk Podlaski, białostocka, białostocki',
},
{
	id:'4',
	title:'Sąd Rejonowy w Sokółce',
	adres:'Piłsudskiego 7, 16-100 Sokółka',
	tel:'(85) 81 12 300',
	email:'boi@sokolka.sr.gov.pl',
	www:'https://sokolka.sr.gov.pl/',
	apelacja:'białostocka',
	okręg:'białostocki',
	tag: 'Sokółka, białostocka, białostocki',
},
{
	id:'5',
	title:'Sąd Okręgowy w Łomży',
	adres:'ul. Dworna 16, 18-400 Łomża',
	tel:'(86) 215 42 48',
	email:'boi@lomza.so.gov.pl',
	www:'https://lomza.so.gov.pl/',
	apelacja:'białostocka',
	okręg:'łomżyński',
	tag: 'Łomża, białostocka, łomżyński, #wp',
},
{
	id:'6',
	title:'Sąd Rejonowy w Grajewie',
	adres:'ul. Kolejowa 1, 19-200 Grajewo',
	tel:'(86) 272 25 25',
	email:'administracja@grajewo.sr.gov.pl',
	www:'https://lomza.so.gov.pl/index.php?k=49',
	apelacja:'białostocka',
	okręg:'łomżyński',
	tag: 'Grajewo, białostocka, łomżyński',
},
{
	id:'7',
	title:'Sąd Rejonowy w Łomży',
	adres:'ul. Polowa 1	18-400 Łomża',
	tel:'(86) 215 09 22',
	email:'boi@lomza.sr.gov.pl',
	www:'https://lomza.so.gov.pl/index.php?k=7',
	apelacja:'białostocka',
	okręg:'łomżyński',
	tag: 'Łomża, białostocka, łomżyński, #wp',
},
{
	id:'8',
	title:'Sąd Rejonowy w Zambrowie',
	adres:'Al. Wojska Polskiego 56, 18-300 Zambrów',
	tel:'(86) 271 31 07',
	email:'administracja@zambrow.sr.gov.pl',
	www:'https://lomza.so.gov.pl/index.php?k=8',
	apelacja:'białostocka',
	okręg:'łomżyński',
	tag: 'Zambrów, białostocka, łomżyński',
},
{
	id:'9',
	title:'Sąd Rejonowy w  Wysokiem Mazowieckiem',
	adres:'ul. Ludowa 44, 18-200 Wysokie Mazowieckie',
	tel:'(86) 477 02 30',
	email:'sr@wysmaz.sr.gov.pl',
	www:'https://lomza.so.gov.pl/index.php?k=9',
	apelacja:'białostocka',
	okręg:'łomżyński',
	tag: 'Zambrów, białostocka, łomżyński',
},
{
	id:'10',
	title:'Sąd Okręgowy w Olsztynie',
	adres:'ul. Dąbrowszczaków 44A, 10-543 Olsztyn',
	tel:'(89) 521 61 84',
	email:'boi@olsztyn.so.gov.pl ',
	www:'https://olsztyn.so.gov.pl/',
	apelacja:'białostocka',
	okręg:'olsztyński',
	tag: 'Olsztyn, białostocka, olsztyński, #wp',
},
{
	id:'11',
	title:'Sąd Rejonowy w Bartoszycach',
	adres:'ul. Warszawska 3, 11-200	Bartoszyce',
	tel:'(89) 762 22 96',
	email:'boi@bartoszyce.sr.gov.pl',
	www:'https://bartoszyce.sr.gov.pl/',
	apelacja:'białostocka',
	okręg:'olsztyński',
	tag: 'Bartoszyce, białostocka, olsztyński, #wp',
},
{
	id:'12',
	title:'Sąd Rejonowy w Biskupcu',
	adres:'ul. Sądowa 4, 11-300	Biskupiec',
	tel:'(89) 715 46 86',
	email:'boi@biskupiec.sr.gov.pl',
	www:'https://biskupiec.sr.gov.pl/',
	apelacja:'białostocka',
	okręg:'olsztyński',
	tag: 'Biskupiec, białostocka, olsztyński',
},
{
	id:'13',
	title:'Sąd Rejonowy w Giżycku',
	adres:'ul. Warszawska 28, 11-500 Giżycko',
	tel:'(87) 429 82 21',
	email:'punkt.obsługi@gizycko.sr.gov.pl',
	www:'https://gizycko.sr.gov.pl/',
	apelacja:'białostocka',
	okręg:'olsztyński',
	tag: 'Giżycko, białostocka, olsztyński, #wp',
},
{
	id:'14',
	title:'Sąd Rejonowy w Kętrzynie',
	adres:'ul. Sikorskiego 66, 11-400 Kętrzyn',
	tel:'(89) 751 76 06',
	email:'poczta@ketrzyn.sr.gov.pl',
	www:'https://ketrzyn.sr.gov.pl/',
	apelacja:'białostocka',
	okręg:'olsztyński',
	tag: 'Kętrzyn, białostocka, olsztyński, #wp',
},
{
	id:'15',
	title:'Sąd Rejonowy w Lidzbarku Warmińskim',
	adres:'ul. Bartoszycka 4a, 11-100 Lidzbark Warmiński',
	tel:'(89) 767 83 00',
	email:'sekcja.administracyjna@lidzbarkwarminski.sr.gov.pl',
	www:'https://lidzbarkwarminski.sr.gov.pl/',
	apelacja:'białostocka',
	okręg:'olsztyński',
	tag: 'Lidzbark Warmiński, białostocka, olsztyński',
},
{
	id:'16',
	title:'Sąd Rejonowy w Mrągowie',
	adres:'ul. Królewiecka 55, 11-700 Mrągowo',
	tel:'(89) 741 30 87',
	email:'boi.mragowo@olsztyn.so.gov.pl',
	www:'https://mragowo.sr.gov.pl/',
	apelacja:'białostocka',
	okręg:'olsztyński',
	tag: 'Mrągowo, białostocka, olsztyński',
},
{
	id:'17',
	title:'Sąd Rejonowy w Nidzicy',
	adres:'ul. Kościuszki 15, 13-100 Nidzica',
	tel:'(89) 521 59 59',
	email:'poi@nidzica.sr.gov.pl',
	www:'https://nidzica.sr.gov.pl/',
	apelacja:'białostocka',
	okręg:'olsztyński',
	tag: 'Nidzica, białostocka, olsztyński',
},
{
	id:'18',
	title:'Sąd Rejonowy w Olsztynie',
	adres:'ul. Dąbrowszczaków 44, 10-543 Olsztyn',
	tel:'(89) 523 02 80, 89 523 02 83',
	email:'boi.srolsztyn@olsztyn.sr.gov.pl',
	www:'https://olsztyn.sr.gov.pl/',
	apelacja:'białostocka',
	okręg:'olsztyński',
	tag: 'Olsztyn, białostocka, olsztyński, #wp',
},
{
	id:'19',
	title:'Sąd Rejonowy w Piszu',
	adres:'ul. Warszawska 47, 11-200 Pisz',
	tel:'(87) 424 13 18',
	email:'boi@pisz.sr.gov.pl',
	www:'https://pisz.sr.gov.pl/',
	apelacja:'białostocka',
	okręg:'olsztyński',
	tag: 'Pisz, białostocka, olsztyński',
},
{
	id:'20',
	title:'Sąd Rejonowy w Szczytnie',
	adres:'ul. Sienkiewicza 8, 12-100 Szczytno',
	tel:'(89) 624 71 13, 89 624 71 14',
	email:'obsługa.interesantow@szczytno.sr.gov.pl',
	www:'https://szczytno.sr.gov.pl/',
	apelacja:'białostocka',
	okręg:'olsztyński',
	tag: 'Szczytno, białostocka, olsztyński',
},
{
	id:'21',
	title:'Sąd Okręgowy w Ostrołęce',
	adres:'ul. Gomulickiego 5, 07-410 Ostrołęka',
	tel:'(29) 765 01 28, 29 765 01 12',
	email:'boi@ostroleka.so.gov.pl',
	www:'https://ostroleka.so.gov.pl/',
	apelacja:'białostocka',
	okręg:'ostrołęcki',
	tag: 'Ostrołęka, białostocka, ostrołęcki, #wp',
},
{
	id:'22',
	title:'Sąd Rejonowy w Ostrołęce',
	adres:'ul. Mazowiecka 3, 07-410	Ostrołęka',
	tel:'(29) 765 44 00',
	email:'boi@ostroleka.sr.gov.pl',
	www:'https://ostroleka.sr.gov.pl/',
	apelacja:'białostocka',
	okręg:'ostrołęcki',
	tag: 'Ostrołęka, białostocka, ostrołęcki, #wp',
},
{
	id:'23',
	title:'Sąd Rejonowy w Ostrowi Mazowieckiej',
	adres:'ul. Prusa 2,	07-300 Ostrowia Mazowiecka',
	tel:'(29) 746 89 35',
	email:'boi@ostrowmaz.sr.gov.pl',
	www:'https://ostrowmaz.sr.gov.pl/',
	apelacja:'białostocka',
	okręg:'ostrołęcki',
	tag: 'Ostrowia Mazowiecka, białostocka, ostrołęcki',
},
{
	id:'24',
	title:'Sąd Rejonowy w Przasnyszu',
	adres:'ul. Świerkowa 7,	06-300 Przasnysz',
	tel:'(29) 752 13 12',
	email:'boi@przasnysz.sr.gov.pl',
	www:'https://przasnysz.sr.gov.pl/',
	apelacja:'białostocka',
	okręg:'ostrołęcki',
	tag: 'Przasnysz, białostocka, ostrołęcki',
},
{
	id:'25',
	title:'Sąd Rejonowy w Pułtusku',
	adres:'ul. Rynek  37, 06-100 Pułtusk',
	tel:'(23) 692 99 70',
	email:'biuro.podawcze@pultusk.sr.gov.pl',
	www:'https://pultusk.sr.gov.pl/',
	apelacja:'białostocka',
	okręg:'ostrołęcki',
	tag: 'Pułtusk, białostocka, ostrołęcki',
},
{
	id:'26',
	title:'Sąd Rejonowy w Wyszkowie',
	adres:'ul. Kościuszki 50, 07-200 Wyszków',
	tel:'(29) 742 38 08',
	email:'boi@wyszkow.sr.gov.pl',
	www:'https://wyszkow.sr.gov.pl/',
	apelacja:'białostocka',
	okręg:'ostrołęcki',
	tag: 'Wyszków, białostocka, ostrołęcki',
},
{
	id:'27',
	title:'Sąd Okręgowy w Suwałkach',
	adres:'ul. Waryńskiego 45, 16-400 Suwałki',
	tel:'(87) 563 13 30, (87) 563 12 48',
	email:'so@suwalki.so.gov.pl',
	www:'https://suwalki.so.gov.pl/',
	apelacja:'białostocka',
	okręg:'suwalski',
	tag: 'Suwałki, białostocka, suwalski, #wp',
},
{
	id:'28',
	title:'Sąd Rejonowy w Augustowie',
	adres:'ul. Młyńska 59, 16-300 Augustów',
	tel:'(87) 643 84 30',
	email:'poi@augustow.sr.gov.pl',
	www:'https://augustow.sr.gov.pl/',
	apelacja:'białostocka',
	okręg:'suwalski',
	tag: 'Augustów, białostocka, suwalski',
},
{
	id:'29',
	title:'Sąd Rejonowy w Ełku',
	adres:'ul. Małeckich 4, 19-300 Ełk',
	tel:'(87) 629 03 09',
	email:'boi@elk.sr.gov.pl',
	www:'https://elk.sr.gov.pl/',
	apelacja:'białostocka',
	okręg:'suwalski',
	tag: 'Ełk, białostocka, suwalski, #wp',
},
{
	id:'30',
	title:'Sąd Rejonowy w Olecku',
	adres:'Osiedle Siejnik I 18, 19-400	Olecko',
	tel:'(87) 523 06 50',
	email:'boi@olecko.sr.gov.pl',
	www:'https://olecko.sr.gov.pl/',
	apelacja:'białostocka',
	okręg:'suwalski',
	tag: 'Olecko, białostocka, suwalski',
},
{
	id:'31',
	title:'Sąd Rejonowy w Suwałkach',
	adres:'ul. Waryńskiego 45, 16-400 Suwałki',
	tel:'(87) 563 54 44',
	email:'boi@suwalki.sr.gov.pl',
	www:'https://suwalki.sr.gov.pl/',
	apelacja:'białostocka',
	okręg:'suwalski',
	tag: 'Suwałki, białostocka, suwalski, #wp',
},
{
	id:'32',
	title:'Sąd Okręgowy w Bydgoszczy',
	adres:'ul. Wały Jagiellońskie 2, 85-128	Bydgoszcz',
	tel:'(52) 325 31 00',
	email:'boi@bydgoszcz.so.gov.pl',
	www:'https://bydgoszcz.so.gov.pl/',
	apelacja:'gdańska',
	okręg:'bydgoski',
	tag: 'Bydgoszcz, gdańska, bydgoski, #wp',
},
{
	id:'33',
	title:'Sąd Rejonowy w Bydgoszczy',
	adres:'ul. Wały Jagiellońskie 2, 85-128	Bydgoszcz',
	tel:'(52) 587 85 00',
	email:'boi@bydgoszcz.sr.gov.pl',
	www:'https://bydgoszcz.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'bydgoski',
	tag: 'Bydgoszcz, gdańska, bydgoski, #wp',
},
{
	id:'34',
	title:'Sąd Rejonowy w Inowrocławiu',
	adres:'ul. Narutowicza 42, 88-100 Inowrocław',
	tel:'(52) 359 26 20',
	email:'boi@inowroclaw.sr.gov.pl',
	www:'https://bip.inowroclaw.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'bydgoski',
	tag: 'Inowrocław, gdańska, bydgoski, #wp',
},
{
	id:'35',
	title:'Sąd Rejonowy w Mogilnie',
	adres:'ul. Sądowa 21, 88-300 Mogilno',
	tel:'(52) 315 97 00',
	email:'administracja@mogilno.sr.gov.pl',
	www:'https://mogilno.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'bydgoski',
	tag: 'Mogilno, gdańska, bydgoski',
},
{
	id:'36',
	title:'Sąd Rejonowy w Nakle nad Notecią',
	adres:'ul. Sądowa 3, 89-100	Nakło nad Notecią',
	tel:'(52) 386 78 00',
	email:'sad@naklo.sr.gov.pl',
	www:'https://naklo.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'bydgoski',
	tag: 'Nakło nad Notecią, gdańska, bydgoski',
},
{
	id:'37',
	title:'Sąd Rejonowy w Szubinie',
	adres:'Pl. Wolności 4, 89-200 Szubin',
	tel:'(52) 391 01 30',
	email:'sad@szubin.sr.gov.pl',
	www:'https://szubin.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'bydgoski',
	tag: 'Szubin, gdańska, bydgoski',
},
{
	id:'38',
	title:'Sąd Rejonowy w Świeciu',
	adres:'ul. Sądowa 12, 86-100 Świecie',
	tel:'(52) 333 28 01',
	email:'poi@swiecie.sr.gov.pl',
	www:'https://swiecie.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'bydgoski',
	tag: 'Świecie, gdańska, bydgoski, #wp',
},
{
	id:'39',
	title:'Sąd Rejonowy w Tucholi',
	adres:'ul. Świecka 28, 89-500 Tuchola',
	tel:'(52) 336 04 00',
	email:'sad@tuchola.sr.gov.pl',
	www:'https://tuchola.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'bydgoski',
	tag: 'Tuchola, gdańska, bydgoski',
},
{
	id:'40',
	title:'Sąd Rejonowy w Żninie',
	adres:'Pl. Wolności 17, 88-400 Żnin',
	tel:'(52) 303 37 12',
	email:'administracja@znin.sr.gov.pl',
	www:'https://znin.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'bydgoski',
	tag: 'Żnin, gdańska, bydgoski',
},
{
	id:'41',
	title:'Sąd Okręgowy w Elblągu',
	adres:'Pl. Konstytucji 1, 82-300 Elbląg',
	tel:'(55) 611 24 00',
	email:'boi@elblag.so.gov.pl',
	www:'https://elblag.so.gov.pl/',
	apelacja:'gdańska',
	okręg:'elbląski',
	tag: 'Elbląg, gdańska, elbląski, #wp',
},
{
	id:'42',
	title:'Sąd Rejonowy w Braniewie',
	adres:'ul. Sądowa 1, 14-500	Braniewo',
	tel:'(55) 646 52 52, 55 646 52 51',
	email:'boi@braniewo.sr.gov.pl',
	www:'https://braniewo.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'elbląski',
	tag: 'Braniewo, gdańska, elbląski',
},
{
	id:'43',
	title:'Sąd Rejonowy w Działdowie',
	adres:'ul. Jagiełły 31, 13-200 Działdowo',
	tel:'(23) 697 07 75',
	email:'boi@dzialdowo.sr.gov.pl',
	www:'https://dzialdowo.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'elbląski',
	tag: 'Działdowo, gdańska, elbląski',
},
{
	id:'44',
	title:'Sąd Rejonowy w Elblągu',
	adres:'ul. Płk. Dąbka 8-12, 82-300 Elbląg',
	tel:'(55) 611 28 10',
	email:'boi@elblag.sr.gov.pl',
	www:'https://elblag.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'elbląski',
	tag: 'Elbląg, gdańska, elbląski, #wp',
},
{
	id:'45',
	title:'Sąd Rejonowy w Iławie',
	adres:'ul. Kopernika 4B, 14-200	Iława',
	tel:'(89) 644 57 00',
	email:'boi@ilawa.sr.gov.pl',
	www:'https://ilawa.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'elbląski',
	tag: 'Iława, gdańska, elbląski',
},
{
	id:'46',
	title:'Sąd Rejonowy w Nowym Mieście Lubawskim',
	adres:'ul. Grunwaldzka 28, 13-300 Nowe Miasto Lubawskie',
	tel:'(56) 472 61 38, 56 472 61 25',
	email:'boi@nowemiastolubawskie.sr.gov.pl',
	www:'https://nowemiastolubawskie.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'elbląski',
	tag: 'Nowe Miasto Lubawskie, gdańska, elbląski',
},
{
	id:'47',
	title:'Sąd Rejonowy w Ostródzie',
	adres:'ul. Jana III Sobieskiego 12, 14-100 Ostróda',
	tel:'(89) 642 55 00',
	email:'boi@ostroda.sr.gov.pl',
	www:'https://ostroda.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'elbląski',
	tag: 'Ostróda, gdańska, elbląski',
},
{
	id:'48',
	title:'Sąd Okręgowy w Gdańsku',
	adres:'ul. Nowe Ogrody 30/34, 80-803 Gdańsk',
	tel:'(58) 321 32 68, 58 324 28 13',
	email:'informacja@gdansk.so.gov.pl',
	www:'https://gdansk.so.gov.pl/',
	apelacja:'gdańska',
	okręg:'gdański',
	tag: 'Gdańsk, gdańska, gdański, #wp',
},
{
	id:'49',
	title:'Sąd Rejonowy Gdańsk-Północ w Gdańsku',
	adres:'ul. Piekarnicza 10, 80-126 Gdańsk',
	tel:'(58) 321 37 00, 58 321 38 00, 58 321 38 51',
	email:'informacja.srgdapn@gdansk-polnoc.sr.gov.pl',
	www:'https://gdansk-polnoc.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'gdański',
	tag: 'Gdańsk, gdańska, gdański',
},
{
	id:'50',
	title:'Sąd Rejonowy Gdańsk-Południe w Gdańsku',
	adres:'ul. 3 Maja 9a, 80-802 Gdańsk',
	tel:'(58) 324 25 50, 58 324 25 48, 58 324 25 52',
	email:'boi@gdansk-poludnie.sr.gov.pl',
	www:'https://gdansk-poludnie.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'gdański',
	tag: 'Gdańsk, gdańska, gdański, #wp',
},
{
	id:'51',
	title:'Sąd Rejonowy w Gdyni',
	adres:'ul. Plac Konstytucji 5, 81-354 Gdynia',
	tel:'(58) 765 61 04',
	email:'administracja@gdynia.sr.gov.pl',
	www:'https://gdynia.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'gdański',
	tag: 'Gdynia, gdańska, gdański, #wp',
},
{
	id:'52',
	title:'Sąd Rejonowy w Kartuzach',
	adres:'ul. Kościuszki 1, 83-300	Kartuzy',
	tel:'(58) 779 68 00',
	email:'boi@kartuzy.sr.gov.pl',
	www:'https://www.kartuzy.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'gdański',
	tag: 'Kartuzy, gdańska, gdański, #wp',
},
{
	id:'53',
	title:'Sąd Rejonowy w Kościerzynie',
	adres:'ul. Dworcowa 2, 83-400 Kościerzyna',
	tel:'(58) 680 13 48',
	email:'administracja@koscierzyna.sr.gov.pl',
	www:'https://koscierzyna.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'gdański',
	tag: 'Kościerzyna, gdańska, gdański',
},
{
	id:'54',
	title:'Sąd Rejonowy w Kwidzynie',
	adres:'Pl. Plebiscytowy 1, 82-500 Kwidzyn',
	tel:'(55) 262 45 49',
	email:'boi@kwidzyn.sr.gov.pl',
	www:'https://kwidzyn.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'gdański',
	tag: 'Kwidzyn, gdańska, gdański',
},
{
	id:'55',
	title:'Sąd Rejonowy w Malborku',
	adres:'ul. 17 Marca 3, 82-200 Malbork',
	tel:'(55) 647 07 00',
	email:'poi@malbork.sr.gov.pl',
	www:'https://malbork.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'gdański',
	tag: 'Malbork, gdańska, gdański, #wp',
},
{
	id:'56',
	title:'Sąd Rejonowy w Sopocie',
	adres:'ul. 1 Maja 10, 81-828 Sopot',
	tel:'(58) 554 98 00, 58 554 98 01',
	email:'boi@sopot.sr.gov.pl',
	www:'https://sopot.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'gdański',
	tag: 'Sopot, gdańska, gdański',
},
{
	id:'57',
	title:'Sąd Rejonowy w Starogardzie Gdańskim',
	adres:'ul. Kościuszki 30, 83-200 Starogard Gdański',
	tel:'(58) 777 50 50',
	email:'boi@starogard-gd.sr.gov.pl',
	www:'https://starogard-gd.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'gdański',
	tag: 'Starogard Gdański, gdańska, gdański',
},
{
	id:'58',
	title:'Sąd Rejonowy w Tczewie',
	adres:'al. Zwycięstwa 14, 83-110 Tczew',
	tel:'(58) 778 50 01, 58 778 50 02',
	email:'boi-cywilne@tczew.sr.gov.pl, boi-karne@tczew.sr.gov.pl',
	www:'https://tczew.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'gdański',
	tag: 'Tczew, gdańska, gdański',
},
{
	id:'59',
	title:'Sąd Rejonowy w Wejherowie',
	adres:'ul. Wniebowstąpienia 4, 84-200 Wejherowo',
	tel:'(58) 672 89 89, 58 672 88 71',
	email:'informacja@wejherowo.sr.gov.pl',
	www:'https://wejherowo.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'gdański',
	tag: 'Wejherowo, gdańska, gdański',
},
{
	id:'60',
	title:'Sąd Okręgowy w Słupsku',
	adres:'ul. Zamenhofa 7, 76-200 Słupsk',
	tel:'(59) 846 94 28, 59 846 95 65, 59 846 95 64',
	email:'boi@slupsk.so.gov.pl',
	www:'http://slupsk.so.gov.pl/',
	apelacja:'gdańska',
	okręg:'słupski',
	tag: 'Słupsk, gdańska, słupski, #wp',
},
{
	id:'61',
	title:'Sąd Rejonowy w Słupsku',
	adres:'ul. Szarych Szeregów 13, 76-200 Słupsk',
	tel:'(59) 846 92 06',
	email:'boi.cywilne@slupsk.sr.gov.pl, boi.karne@slupsk.sr.gov.pl',
	www:'http://slupsk.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'słupski',
	tag: 'Słupsk, gdańska, słupski, #wp',
},
{
	id:'62',
	title:'Sąd Rejonowy w Lęborku',
	adres:'Plac Kopernika 4, 84-300 Lębork',
	tel:'(59) 863 68 36',
	email:'poczta@lebork.sr.gov.pl',
	www:'http://lebork.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'słupski',
	tag: 'Lębork, gdańska, słupski',
},
{
	id:'63',
	title:'Sąd Rejonowy w Chojnicach',
	adres:'ul. Młyńska 30, 89-600 Chojnice',
	tel:'(52) 395 27 93',
	email:'boi@chojnice.sr.go.pl',
	www:'http://chojnice.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'słupski',
	tag: 'Chojnice, gdańska, słupski',
},
{
	id:'64',
	title:'Sąd Rejonowy w Miastku',
	adres:'ul. Armii Karjowej 30, 77-200 Miastko',
	tel:'(59) 858 71 00',
	email:'administracja@miastko.sr.gov.pl',
	www:'http://miastko.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'słupski',
	tag: 'Miastko, gdańska, słupski',
},
{
	id:'65',
	title:'Sąd Rejonowy w Bytowie',
	adres:'ul. Zamkowa 1, 77-100 Bytów',
	tel:'(59) 822 81 99',
	email:'administracja@bytow.sr.gov.pl',
	www:'http://bytow.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'słupski',
	tag: 'Bytów, gdańska, słupski',
},
{
	id:'66',
	title:'Sąd Rejonowy w Człuchowie',
	adres:'ul. Szczecińska 1, 77-300 Człuchów',
	tel:'(59) 834 69 94',
	email:'informacja@czluchow.sr.gov.pl',
	www:'http://czluchow.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'słupski',
	tag: 'Człuchów, gdańska, słupski',
},
{
	id:'67',
	title:'Sąd Okręgowy w Toruniu',
	adres:'ul. Piekary 51, 87-100 Toruń',
	tel:'(56) 610 55 51, 56 610 55 53',
	email:'boi@torun.so.gov.pl',
	www:'http://torun.so.gov.pl/',
	apelacja:'gdańska',
	okręg:'toruński',
	tag: 'Toruń, gdańska, toruński, #wp',
},
{
	id:'68',
	title:'Sąd Rejonowy w Brodnicy',
	adres:'ul. Sądowa 5, 87-300	Brodnica',
	tel:'(56) 494 17 09',
	email:'boi@brodnica.sr.gov.pl',
	www:'http://brodnica.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'toruński',
	tag: 'Brodnica, gdańska, toruński',
},
{
	id:'69',
	title:'Sąd Rejonowy w Chełmnie',
	adres:'ul. Toruńska 3, 86-200 Chełmno',
	tel:'(56) 677 02 00',
	email:'boi@chelmno.sr.gov.pl',
	www:'http://chelmno.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'toruński',
	tag: 'Chełmno, gdańska, toruński',
},
{
	id:'70',
	title:'Sąd Rejonowy w Golubiu Dobrzyniu',
	adres:'ul. Kościelna 23/25, 87-400 Golub-Dobrzyń',
	tel:'(56) 682 35 01',
	email:'sr@golubdobrzyn.sr.gov.pl',
	www:'http://golubdobrzyn.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'toruński',
	tag: 'Golub-Dobrzyń, gdańska, toruński',
},
{
	id:'71',
	title:'Sąd Rejonowy w Grudziądzu',
	adres:'ul. Sikorskiego 19/23, 86-300 Grudziądz',
	tel:'(56) 450 59 87',
	email:'poi@grudziadz.sr.gov.pl',
	www:'http://grudziadz.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'toruński',
	tag: 'Grudziądz, gdańska, toruński, #wp',
},
{
	id:'72',
	title:'Sąd Rejonowy w Wąbrzeźnie',
	adres:'ul. Wolności 19,	87-200 Wąbrzeźno',
	tel:'(56) 689 06 00',
	email:'srw@wabrzezno.sr.gov.pl',
	www:'http://wabrzezno.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'toruński',
	tag: 'Wąbrzeźno, gdańska, toruński',
},
{
	id:'73',
	title:'Sąd Rejonowy w Toruniu',
	adres:'ul. Fosa Staromiejska 12/14,	87-100 Toruń',
	tel:'(56) 610 57 95',
	email:'boi@torun.sr.gov.pl',
	www:'http://torun.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'toruński',
	tag: 'Toruń, gdańska, toruński, #wp',
},
{
	id:'74',
	title:'Sąd Okręgowy we Włocławku',
	adres:'ul. Wojska Polskiego 22,	87-800 Włocławek',
	tel:'(54) 412 03 80',
	email:'boi@wloclawek.so.gov.pl',
	www:'http://wloclawek.so.gov.pl/',
	apelacja:'gdańska',
	okręg:'włocławski',
	tag: 'Włocławek, gdańska, włocławski, #wp',
},
{
	id:'75',
	title:'Sąd Rejonowy w Aleksandrowie Kujawskim',
	adres:'ul. Narutowicza 16, 87-700 Aleksandrów Kujawski',
	tel:'(54) 282 24 24',
	email:'mail@aleksandrowkuj.sr.gov.pl',
	www:'http://aleksandrowkuj.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'włocławski',
	tag: 'Aleksandrów Kujawski, gdańska, włocławski',
},
{
	id:'76',
	title:'Sąd Rejonowy w Lipnie',
	adres:'ul. Piłsudskiego 15/17, 87-600 Lipno',
	tel:'(54) 287 22 05',
	email:'srlipno@lipno.sr.gov.pl',
	www:'http://lipno.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'włocławski',
	tag: 'Lipno, gdańska, włocławski',
},
{
	id:'77',
	title:'Sąd Rejonowy w Radziejowie',
	adres:'ul. Brzeska 20, 88-200 Radziejów',
	tel:'(54) 285 36 21',
	email:'b.podawcze@radziejow.sr.gov.pl',
	www:'http://radziejow.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'włocławski',
	tag: 'Radziejów, gdańska, włocławski',
},
{
	id:'78',
	title:'Sąd Rejonowy w Rypinie',
	adres:'ul. Warszawska 42, 87-500 Rypin',
	tel:'(54) 280 24 58',
	email:'srrypin@rypin.sr.gov.pl',
	www:'http://rypin.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'włocławski',
	tag: 'Rypin, gdańska, włocławski',
},
{
	id:'79',
	title:'Sąd Rejonowy we Włocławku',
	adres:'ul. Kilińskiego 20, 87-800 Włocławek',
	tel:'(54) 422 26 82, 54 422 27 52',
	email:'srwloclawek@wloclawek.sr.gov.pl',
	www:'http://wloclawek.sr.gov.pl/',
	apelacja:'gdańska',
	okręg:'włocławski',
	tag: 'Włocławek, gdańska, włocławski, #wp',
},
{
	id:'80',
	title:'Sąd Okręgowy w Bielsku-Białej',
	adres:'ul. Cieszyńska 10, 43-300 Bielsko-Biała',
	tel:'(33) 499 04 80',
	email:'informacja@bielsko-biala.so.gov.pl',
	www:'http://bielsko-biala.so.gov.pl/',
	apelacja:'katowicka',
	okręg:'bielski',
	tag: 'Bielsko-Biała, katowicka, bielski, #wp',
},
{
	id:'81',
	title:'Sąd Rejonowy w Bielsku-Białej',
	adres:'ul. Mickiewicza 22, 43-300 Bielsko-Biała',
	tel:'(33) 499 78 26',
	email:'informacja@bielsko-biala.sr.gov.pl',
	www:'http://bielsko-biala.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'bielski',
	tag: 'Bielsko-Biała, katowicka, bielski, #wp',
},
{
	id:'82',
	title:'Sąd Rejonowy Cieszynie',
	adres:'ul. Garncarska 8, 43-400	Cieszyn',
	tel:'(33) 479 46 06, 33 479 47 06',
	email:'punkt.informacyjny@cieszyn.sr.gov.pl',
	www:'http://cieszyn.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'bielski',
	tag: 'Cieszyn, katowicka, bielski, #wp',
},
{
	id:'83',
	title:'Sąd Rejonowy w Żywcu',
	adres:'ul. Kościuszki 39, 34-300 Żywiec',
	tel:'(33) 475 12 18',
	email:'bpodawcze@zywiec.sr.gov.pl',
	www:'http://zywiec.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'bielski',
	tag: 'Żywiec, katowicka, bielski, #wp',
},
{
	id:'84',
	title:'Sąd Okręgowy w Częstochowie',
	adres:'ul. Dąbrowskiego 23/35, 42-200 Częstochowa',
	tel:'(34) 368 46 57',
	email:'boi@czestochowa.so.gov.pl',
	www:'http://czestochowa.so.gov.pl/',
	apelacja:'katowicka',
	okręg:'częstochowski',
	tag: 'Częstochowa, katowicka, częstochowski, #wp',
},
{
	id:'85',
	title:'Sąd Rejonowy w Częstochowie',
	adres:'ul. Dąbrowskiego 23/35, 42-202 Częstochowa',
	tel:'(34) 364 41 00',
	email:'boi@czestochowa.sr.gov.pl',
	www:'http://czestochowa.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'częstochowski',
	tag: 'Częstochowa, katowicka, częstochowski, #wp',
},
{
	id:'86',
	title:'Sąd Rejonowy w Lublińcu',
	adres:'ul. Sądowa 3, 42-700	Lubliniec',
	tel:'(34) 351 51 56',
	email:'boi@lubliniec.sr.gov.pl',
	www:'http://lubliniec.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'częstochowski',
	tag: 'Lubliniec, katowicka, częstochowski',
},
{
	id:'87',
	title:'Sąd Rejonowy w Myszkowie',
	adres:'ul. Kwiatkowskiego 2, 42-300	Myszków',
	tel:'(34) 315 98 00, 34 315 98 01',
	email:'boi@myszkow.sr.gov.pl',
	www:'http://myszkow.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'częstochowski',
	tag: 'Myszków, katowicka, częstochowski',
},
{
	id:'88',
	title:'Sąd Okręgowy w Gliwicach',
	adres:'ul. Kościuszki 15, 44-100 Gliwice',
	tel:'(32) 338 01 16',
	email:'boi@gliwice.so.gov.pl',
	www:'http://gliwice.so.gov.pl/',
	apelacja:'katowicka',
	okręg:'gliwicki',
	tag: 'Gliwice, katowicka, gliwicki, #wp',
},
{
	id:'89',
	title:'Sąd Rejonowy w Gliwicach',
	adres:'ul. Powstańców Warszawy 23, 44-101 Gliwice',
	tel:'(32) 338 77 95',
	email:'boi@gliwice.sr.gov.pl',
	www:'http://gliwice.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'gliwicki',
	tag: 'Gliwice, katowicka, gliwicki, #wp',
},
{
	id:'90',
	title:'Sąd Rejonowy w Rudzie Śląskiej',
	adres:'ul. Bukowa 5A, 41-700 Ruda Śląska',
	tel:'(32) 438 11 05',
	email:'boi@ruda-slaska.sr.gov.pl',
	www:'http://ruda-slaska.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'gliwicki',
	tag: 'Ruda Śląska, katowicka, gliwicki',
},
{
	id:'91',
	title:'Sąd Rejonowy w Tarnowskich Górach',
	adres:'ul. Opolska 17, 42-600 Tarnowskie Góry',
	tel:'(32) 381 83 10',
	email:'boi@tgory.sr.gov.pl',
	www:'http://tgory.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'gliwicki',
	tag: 'Tarnowskie Góry, katowicka, gliwicki',
},
{
	id:'92',
	title:'Sąd Rejonowy w Zabrzu',
	adres:'ul. 3 Maja 21, 41-800 Zabrze',
	tel:'(32) 373 58 31, 32 73 58 32',
	email:'informacja@poczta.zabrze.sr.gov.pl',
	www:'http://zabrze.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'gliwicki',
	tag: 'Zabrze, katowicka, gliwicki, #wp',
},
{
	id:'93',
	title:'Sąd Okręgowy w Rybniku',
	adres:'ul. Piłsudskiego 33,	44-200 Rybnik',
	tel:'(32) 78 40 581, 33 78 40 582',
	email:'boi@rybnik.so.gov.pl',
	www:'http://rybnik.so.gov.pl/',
	apelacja:'katowicka',
	okręg:'rybnicki',
	tag: 'Rybnik, katowicka, rybnicki, #wp',
},
{
	id:'94',
	title:'Sąd Rejonowy w Jastrzębiu-Zdroju',
	adres:'ul. Stanisława Staszica 3, 44-330 Jastrzębie-Zdrój',
	tel:'(32) 478 74 00',
	email:'jastrzebie@jastrzebie.sr.gov.pl',
	www:'http://jastrzebie.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'rybnicki',
	tag: 'Jastrzębie-Zdrój, katowicka, rybnicki, #wp',
},
{
	id:'95',
	title:'Sąd Rejonowy w Raciborzu',
	adres:'ul. Nowa 29, 47-400 Racibórz',
	tel:'(32) 459 46 22',
	email:'boi@raciborz.sr.gov.pl',
	www:'http://raciborz.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'rybnicki',
	tag: 'Racibórz, katowicka, rybnicki',
},
{
	id:'96',
	title:'Sąd Rejonowy w Rybniku',
	adres:'Pl. Kopernika 2, 44-200 Rybnik',
	tel:'(32) 439 31 07',
	email:'biuro.podawcze@rybnik.sr.gov.pl',
	www:'http://rybnik.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'rybnicki',
	tag: 'Rybnik, katowicka, rybnicki',
},
{
	id:'97',
	title:'Sąd Rejonowy w Wodzisławiu Śląskim',
	adres:'ul. Sądowa 3, 44-300	Wodzisław Śląski',
	tel:'(32) 459 14 19, 33 459 14 30',
	email:'wodzisław@wodzislaw.sr.gov.pl',
	www:'http://wodzislaw.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'rybnicki',
	tag: 'Wodzisław Śląski, katowicka, rybnicki',
},
{
	id:'98',
	title:'Sąd Rejonowy w Żorach',
	adres:'Al. Jana Pawła II 15, 44-240	Żory',
	tel:'(32) 475 96 00',
	email:'sad@zory.sr.gov.pl',
	www:'http://zory.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'rybnicki',
	tag: 'Żory, katowicka, rybnicki',
},
{
	id:'99',
	title:'Sąd Okręgowy w Katowicach',
	adres:'ul. Francuska 38, 40-028	Katowice',
	tel:'(32) 607 06 60',
	email:'informacja@katowice.so.gov.pl',
	www:'http://katowice.so.gov.pl/',
	apelacja:'katowicka',
	okręg:'katowicki',
	tag: 'Katowice, katowicka, katowicki, #wp',
},
{
	id:'100',
	title:'Sąd Rejonowy w Bytomiu',
	adres:'ul. Piekarska 1,	41-902 Bytom',
	tel:'(32) 388 91 01',
	email:'informacja@bytom.sr.gov.pl',
	www:'http://bytom.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'katowicki',
	tag: 'Bytom, katowicka, katowicki, #wp',
},
{
	id:'101',
	title:'Sąd Rejonowy w Chorzowie',
	adres:'ul. dr Józefa Rostka 2, 41-500 Chorzów',
	tel:'(32) 349 94 45',
	email:'boi@chorzow.sr.gov.pl',
	www:'http://chorzow.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'katowicki',
	tag: 'Chorzów, katowicka, katowicki, #wp',
},
{
	id:'102',
	title:'Sąd Rejonowy Katowice-Wschód w Katowicach',
	adres:'ul. Lompy 14, 40-040	Katowice',
	tel:'(32) 604 79 87, 32 604 79 88',
	email:'poi@katowice-wschod.sr.gov.pl',
	www:'http://katowice-wschod.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'katowicki',
	tag: 'Katowice Wschód, katowicka, katowicki',
},
{
	id:'103',
	title:'Sąd Rejonowy Katowice-Zachód w Katowicach',
	adres:'Pl. Wolności 10, 40-078 Katowice',
	tel:'(32) 604 77 31, 32 604 75 81',
	email:'boi.karny@katowice-zachod.sr.gov.pl, boi.cywilny@katowice-zachod.sr.gov.pl',
	www:'http://katowice-zachod.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'katowicki',
	tag: 'Katowice Zachód, katowicka, katowicki',
},
{
	id:'104',
	title:'Sąd Rejonowy Katowice-Zachód w Katowicach',
	adres:'Pl. Wolności 10, 40-078 Katowice',
	tel:'(32) 604 77 31, 32 604 75 81',
	email:'boi.karny@katowice-zachod.sr.gov.pl, boi.cywilny@katowice-zachod.sr.gov.pl',
	www:'http://katowice-zachod.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'katowicki',
	tag: 'Katowice Zachód, katowicka, katowicki, #wp',
},
{
	id:'105',
	title:'Sąd Rejonowy w Mikołowie',
	adres:'ul. Ks.Kard.St. Wyszyńskiego 12/14, 43-190 Mikołów',
	tel:'(32) 784 61 21, 32 784 61 13',
	email:'informacja@mikolow.sr.gov.pl',
	www:'http://mikolow.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'katowicki',
	tag: 'Mikołów, katowicka, katowicki, #wp',
},
{
	id:'106',
	title:'Sąd Rejonowy w Mysłowicach',
	adres:'ul. Krakowska 2, 41-400 Mysłowice',
	tel:'(32) 317 41 29',
	email:'poi@myslowice.sr.gov.pl',
	www:'http://myslowice.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'katowicki',
	tag: 'Mysłowice, katowicka, katowicki',
},
{
	id:'107',
	title:'Sąd Rejonowy w Pszczynie',
	adres:'ul. bp. Bogedaina 14, 43-200	Przczyna',
	tel:'(32) 449 41 00',
	email:'informacja@pszczyna.sr.gov.pl',
	www:'http://pszczyna.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'katowicki',
	tag: 'Przczyna, katowicka, katowicki',
},
{
	id:'108',
	title:'Sąd Rejonowy w Siemianowicach Śląskich',
	adres:'ul. Chorzowska 14, 41-106 Siemianowice Śląskie',
	tel:'(32) 766 43 10',
	email:'boi@siemianowice.sr.gov.pl',
	www:'http://siemianowice.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'katowicki',
	tag: 'Siemianowice Śląskie, katowicka, katowicki',
},
{
	id:'109',
	title:'Sąd Rejonowy w Tychach',
	adres:'ul. Budowlanych 33, 43-100 Tychy',
	tel:'(32) 323 31 05, 32 323 31 06',
	email:'informacja@tychy.sr.gov.pl',
	www:'http://tychy.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'katowicki',
	tag: 'Tychy, katowicka, katowicki, #wp',
},
{
	id:'110',
	title:'Sąd Okręgowy w Sosnowcu',
	adres:'ul. Żeromskiego 3, 41-205 Sosnowiec',
	tel:'(32) 36 87 303, (32) 36 87 403',
	email:'boi.cywilny@sosnowiec.so.gov.pl, boi.karny@sosnowiec.so.gov.pl',
	www:'http://sosnowiec.so.gov.pl/',
	apelacja:'katowicka',
	okręg:'sosnowiecki',
	tag: 'Sosnowiec, katowicka, sosnowiecki, #wp',
},
{
	id:'111',
	title:'Sąd Rejonowy w Będzinie',
	adres:'ul. Sączewskiego 23, 42-500 Będzin',
	tel:'(32) 368 81 88',
	email:'administracja@bedzin.sr.gov.pl',
	www:'http://bedzin.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'sosnowiecki',
	tag: 'Będzin, katowicka, sosnowiecki, #wp',
},
{
	id:'112',
	title:'Sąd Rejonowy w Dąbrowie Górniczej',
	adres:'ul. Graniczna 23, 41-300	Dąbrowa Górnicza',
	tel:'(32) 295 94 50',
	email:'boi@dabrowag.sr.gov.pl',
	www:'http://dabrowag.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'sosnowiecki',
	tag: 'Dąbrowa Górnicza, katowicka, sosnowiecki, #wp',
},
{
	id:'113',
	title:'Sąd Rejonowy w Jaworznie',
	adres:'ul. Grunwaldzka 28, 43-600 Jaworzno',
	tel:'(32) 758 62 00, 32 758 62 27',
	email:'boi@jaworzno.sr.gov.pl',
	www:'http://jaworzno.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'sosnowiecki',
	tag: 'Jaworzno, katowicka, sosnowiecki',
},
{
	id:'114',
	title:'Sąd Rejonowy w Sosnowcu',
	adres:'ul. 1 Maja 19, 41-200 Sosnowiec',
	tel:'(32) 296 18 04',
	email:'informacja@sosnowiec.sr.gov.pl',
	www:'http://sosnowiec.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'sosnowiecki',
	tag: 'Sosnowiec, katowicka, sosnowiecki, #wp',
},
{
	id:'115',
	title:'Sąd Rejonowy w Zawierciu',
	adres:'ul. Leśna 4,	42-400 Zawiercie',
	tel:'(32) 649 79 06',
	email:'boi@zawiercie.sr.gov.pl',
	www:'http://zawiercie.sr.gov.pl/',
	apelacja:'katowicka',
	okręg:'sosnowiecki',
	tag: 'Zawiercie, katowicka, sosnowiecki, #wp',
},
{
	id:'116',
	title:'Sąd Okręgowy w Kielcach',
	adres:'ul. Seminaryjska 12a, 25-372	Kielce',
	tel:'(41) 340 23 00',
	email:'boi@kielce.so.gov.pl',
	www:'http://kielce.so.gov.pl/',
	apelacja:'krakowska',
	okręg:'kielecki',
	tag: 'Kielce, krakowska, kielecki, #wp',
},
{
	id:'117',
	title:'Sąd Rejonowy w Busku-Zdroju',
	adres:'ul. Kościuszki 5, 28-100	Busko-Zdrój',
	tel:'(41) 246 28 07',
	email:'boi@busko.sr.gov.pl',
	www:'http://busko.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'kielecki',
	tag: 'Busko-Zdrój, krakowska, kielecki',
},
{
	id:'118',
	title:'Sąd Rejonowy w Jędrzejowie',
	adres:'ul. 11 Listopada 74, 28-300 Jędrzejów',
	tel:'(41) 386 14 41 w. 1013',
	email:'administracja@jedrzejow.sr.gov.pl',
	www:'http://jedrzejow.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'kielecki',
	tag: 'Jędrzejów, krakowska, kielecki, #wp',
},
{
	id:'119',
	title:'Sąd Rejonowy w Kielcach',
	adres:'ul. Warszawska 44, 25-312 Kielce',
	tel:'(41) 349 57 85',
	email:'boi@kielce.sr.gov.pl',
	www:'http://kielce.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'kielecki',
	tag: 'Kielce, krakowska, kielecki, #wp',
},
{
	id:'120',
	title:'Sąd Rejonowy w Końskich',
	adres:'ul. Odrowąża 5, 26-200	Końskie',
	tel:'(41) 372 27 02',
	email:'boi@konskie.sr.gov.pl',
	www:'http://konskie.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'kielecki',
	tag: 'Końskie, krakowska, kielecki',
},
{
	id:'121',
	title:'Sąd Rejonowy w Opatowie',
	adres:'Pl. Obrońców Pokoju 18, 27-500	Opatów',
	tel:'(12) 286 32 83',
	email:'boi@opatow.sr.gov.pl',
	www:'http://opatow.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'kielecki',
	tag: 'Opatów, krakowska, kielecki',
},
{
	id:'122',
	title:'Sąd Rejonowy w Ostrowcu Świętokrzyskim',
	adres:'ul. Kościuszki 1, 27-400	Ostrowiec Świętokrzyski',
	tel:'(41) 246 20 94, 41 246 20 96',
	email:'poi@ostrowiec.sr.gov.pl',
	www:'http://ostrowiec.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'kielecki',
	tag: 'Ostrowiec Świętokrzyski, krakowska, kielecki, #wp',
},
{
	id:'123',
	title:'Sąd Rejonowy w Pińczowie',
	adres:'ul. 3 Maja 12a, 28-400	Pińczów',
	tel:'(41) 246 22 02',
	email:'administracja@pinczow.sr.gov.pl',
	www:'http://pinczow.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'kielecki',
	tag: 'Pińczów, krakowska, kielecki',
},
{
	id:'124',
	title:'Sąd Rejonowy w Sandomierzu',
	adres:'ul. Kościuszki 2a, 27-600 Sandomierz',
	tel:'(15) 832 30 62, 15 832 30 63, 15 832 30 64',
	email:'administracja@sandomierz.sr.gov.pl',
	www:'http://sandomierz.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'kielecki',
	tag: 'Sandomierz, krakowska, kielecki, #wp',
},
{
	id:'125',
	title:'Sąd Rejonowy w Skarżysku-Kamiennej',
	adres:'ul. Krasińskiego 11, 26-110 Skarżysko-Kamienna',
	tel:'(12) 286 32 83',
	email:'sad@skarzysko.sr.gov.pl',
	www:'http://skarzysko.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'kielecki',
	tag: 'Skarżysko-Kamienna, krakowska, kielecki, #wp',
},
{
	id:'126',
	title:'Sąd Rejonowy w Starachowicach',
	adres:'ul. Staszica 12,	27-200 Starachowice',
	tel:'(41) 274 13 12',
	email:'administracja@starachowice.sr.gov.pl',
	www:'http://starachowice.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'kielecki',
	tag: 'Starachowice, krakowska, kielecki',
},
{
	id:'127',
	title:'Sąd Rejonowy w Staszowie',
	adres:'ul. Kościuszki 2, 28-200	Staszów',
	tel:'(15) 864 82 93',
	email:'boi@staszow.sr.gov.pl',
	www:'http://staszow.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'kielecki',
	tag: 'Staszów, krakowska, kielecki',
},
{
	id:'128',
	title:'Sąd Rejonowy we Włoszczowie',
	adres:'ul. Kusocińskiego 11, 29-100	Włoszczowa',
	tel:'(12) 286 32 83',
	email:'boi.wloszczowa@sr.gov.pl',
	www:'http://wloszczowa.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'kielecki',
	tag: 'Włoszczowa, krakowska, kielecki',
},
{
	id:'129',
	title:'Sąd Okręgowy w Krakowie',
	adres:'ul. Przy Rondzie 7, 31-547 Kraków',
	tel:'(12) 619 50 86, 12 619 57 70',
	email:'informacja@krakow.so.gov.pl',
	www:'http://krakow.so.gov.pl/',
	apelacja:'krakowska',
	okręg:'krakowski',
	tag: 'Kraków, krakowska, krakowski, #wp',
},
{
	id:'130',
	title:'Sąd Rejonowy dla Krakowa-Krowodrzy w Krakowie',
	adres:'ul. Przy Rondzie 7, 31-547 Kraków',
	tel:'(12) 619 53 10',
	email:'sad@krakow-krowodrza.sr.gov.pl',
	www:'http://krakow-krowodrza.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'krakowski',
	tag: 'Kraków-Krowodrza, krakowska, krakowski',
},
{
	id:'131',
	title:'Sąd Rejonowy dla Krakowa-Nowej Huty w Krakowie',
	adres:'ul. Przy Rondzie 7, 31-547 Kraków',
	tel:'(12) 286 32 83',
	email:'kontakt@krakow-nowahuta.sr.gov.pl',
	www:'http://krakow-nowahuta.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'krakowski',
	tag: 'Kraków-Nowa Huta, krakowska, krakowski, #wp',
},
{
	id:'132',
	title:'Sąd Rejonowy dla Krakowa-Podgórza w Krakowie',
	adres:'ul. Przy Rondzie 7, 31-547 Kraków',
	tel:'kontakt@krakow-podgorze.sr.gov.pl',
	email:'kontakt@krakow-podgorze.sr.gov.pl',
	www:'http://krakow-podgorze.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'krakowski',
	tag: 'Kraków-Podgórze, krakowska, krakowski',
},
{
	id:'133',
	title:'Sąd Rejonowy dla Krakowa-Śródmieścia w Krakowie',
	adres:'ul. Przy Rondzie 7, 31-547 Kraków',
	tel:'(12) 286 32 83',
	email:'oa@krakow-sr.sr.gov.pl',
	www:'http://krakow-sr.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'krakowski',
	tag: 'Kraków-Śródmieście, krakowska, krakowski',
},
{
	id:'134',
	title:'Sąd Rejonowy w Chrzanowie',
	adres:'al. Henryka 23, 32-500 Chrzanów',
	tel:'(32) 649 40 68',
	email:'boi@chrzanow.sr.gov.pl',
	www:'http://chrzanow.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'krakowski',
	tag: 'Chrzanów, krakowska, krakowski, #wp',
},
{
	id:'135',
	title:'Sąd Rejonowy w Miechowie',
	adres:'Pl. Kościuszki 3a, 32-200 Miechów',
	tel:'(41) 382 50 68',
	email:'boi@miechow.sr.gov.pl',
	www:'http://miechow.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'krakowski',
	tag: 'Miechów, krakowska, krakowski',
},
{
	id:'136',
	title:'Sąd Rejonowy w Myślenicach',
	adres:'ul. Piłsudskiego 7, 32-400 Myślenice',
	tel:'(12) 373 51 54',
	email:'informacja@myslenice.sr.gov.pl',
	www:'http://myslenice.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'krakowski',
	tag: 'Myślenice, krakowska, krakowski',
},
{
	id:'137',
	title:'Sąd Rejonowy w Olkuszu',
	adres:'ul. K. K. Wielkiego 45, 32-300 Olkusz',
	tel:'(12) 286 32 83',
	email:'boi@olkusz.sr.gov.pl',
	www:'http://olkusz.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'krakowski',
	tag: 'Olkusz, krakowska, krakowski',
},
{
	id:'138',
	title:'Sąd Rejonowy w Oświęcimiu',
	adres:'ul. Rynek Główny 14,	32-600 Oświęcim',
	tel:'(12) 286 32 83',
	email:'boi@oswiecim.sr.gov.pl',
	www:'http://oswiecim.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'krakowski',
	tag: 'Oświęcim, krakowska, krakowski',
},
{
	id:'139',
	title:'Sąd Rejonowy w Suchej Beskidzkiej',
	adres:'ul. Mickiewicza 11, 34-200 Sucha Beskidzka',
	tel:'(12) 619 57 70, 12 619 50 86',
	email:'poi@suchab.sr.gov.pl',
	www:'http://suchab.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'krakowski',
	tag: 'Sucha Beskidzka, krakowska, krakowski',
},
{
	id:'140',
	title:'Sąd Rejonowy w Wadowicach',
	adres:'ul. Żwirki i Wigury 9, 34-100 Wadowice',
	tel:'(12) 286 32 83',
	email:'boi@wadowice.sr.gov.pl',
	www:'http://wadowice.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'krakowski',
	tag: 'Wadowice, krakowska, krakowski',
},
{
	id:'141',
	title:'Sąd Rejonowy w Wieliczce',
	adres:'ul. Janińska 25, 32-020	Wieliczka',
	tel:'(12) 347 30 10',
	email:'informacja@wieliczka.sr.gov.pl',
	www:'http://wieliczka.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'krakowski',
	tag: 'Wieliczka, krakowska, krakowski',
},
{
	id:'142',
	title:'Sąd Okręgowy w Nowym Sączu',
	adres:'ul. Pijarska 3, 33-300 Nowy Sącz',
	tel:'(12) 286 32 83',
	email:'boi@nowysacz.so.gov.pl',
	www:'http://nowysacz.so.gov.pl/',
	apelacja:'krakowska',
	okręg:'nowosądecki',
	tag: 'Nowy Sącz, krakowska, nowosądecki, #wp',
},
{
	id:'143',
	title:'Sąd Rejonowy w Gorlicach',
	adres:'ul. Biecka 5, 38-300	Gorlice',
	tel:'(12) 286 32 83',
	email:'boi@gorlice.sr.gov.pl',
	www:'http://gorlice.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'nowosądecki',
	tag: 'Gorlice, krakowska, nowosądecki',
},
{
	id:'144',
	title:'Sąd Rejonowy w Nowym Sączu',
	adres:'ul. Smolika 1, 33-300 Nowy Sącz',
	tel:'(18) 531 73 95',
	email:'boi@nowysacz.sr.gov.pl',
	www:'http://nowysacz.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'nowosądecki',
	tag: 'Nowy Sącz, krakowska, nowosądecki, #wp',
},
{
	id:'145',
	title:'Sąd Rejonowy w Limanowej',
	adres:'ul. Marka 19, 34-600	Limanowa',
	tel:'(18) 330 05 80',
	email:'boi@limanowa.sr.gov.pl',
	www:'http://limanowa.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'nowosądecki',
	tag: 'Limanowa, krakowska, nowosądecki',
},
{
	id:'146',
	title:'Sąd Rejonowy w Nowym Targu',
	adres:'ul. Ludźmierska 29, 34-400 Nowy Targ',
	tel:'(18) 261 26 86',
	email:'boi@nowytarg.sr.gov.pl',
	www:'http://nowytarg.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'nowosądecki',
	tag: 'Nowy Targ, krakowska, nowosądecki, #wp',
},
{
	id:'147',
	title:'Sąd Rejonowy w Zakopanem',
	adres:'ul. Gimnazjalna 13, 34-500 Zakopane',
	tel:'(18) 202 46 85',
	email:'boi@zakopane.sr.gov.pl',
	www:'http://zakopane.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'nowosądecki',
	tag: 'Zakopane, krakowska, nowosądecki',
},
{
	id:'148',
	title:'Sąd Okręgowy w Tarnowie',
	adres:'ul. Dąbrowskiego 27,	33-100 Tarnów',
	tel:'(14) 688 74 44',
	email:'informacja@tarnow.so.gov.pl',
	www:'http://tarnow.so.gov.pl/',
	apelacja:'krakowska',
	okręg:'tarnowski',
	tag: 'Tarnów, krakowska, tarnowski, #wp',
},
{
	id:'149',
	title:'Sąd Rejonowy w Brzesku',
	adres:'ul. Kościuszki 20, 32-800 Brzesko',
	tel:'(14) 664 61 01',
	email:'boi@brzesko.sr.gov.pl',
	www:'http://brzesko.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'tarnowski',
	tag: 'Brzesko, krakowska, tarnowski',
},
{
	id:'150',
	title:'Sąd Rejonowy w Dąbrowie Tarnowskiej',
	adres:'ul. Bojki 2,	33-200 Dąbrowa Tarnowska',
	tel:'(12) 286 32 83',
	email:'informacja@dabrowatar.sr.gov.pl',
	www:'http://dabrowatar.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'tarnowski',
	tag: 'Dąbrowa Tarnowska, krakowska, tarnowski',
},
{
	id:'151',
	title:'Sąd Rejonowy w Bochni',
	adres:'ul. Kościuszki 4, 32-700 Bochnia',
	tel:'(14) 615 21 00',
	email:'boi@bochnia.sr.gov.pl',
	www:'http://bochnia.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'tarnowski',
	tag: 'Bochnia, krakowska, tarnowski, #wp',
},
{
	id:'152',
	title:'Sąd Rejonowy w Tarnowie',
	adres:'ul. Dąbrowskiego 27,	33-100 Tarnów',
	tel:'(14) 688 74 47',
	email:'srtarnow@tarnow.sr.gov.pl',
	www:'http://tarnow.sr.gov.pl/',
	apelacja:'krakowska',
	okręg:'tarnowski',
	tag: 'Tarnów, krakowska, tarnowski, #wp',
},

];


export { Courts };
						 				
									

// apelacja lubelska		SA	Sąd Apelacyjny w Lublinie	Obrońców Pokoju 1	20-950	Lublin	(81) 452 33 70 45 	boi@lublin.sa.gov.pl

// apelacja lubelska	okręg lubelski	SO	Sąd Okręgowy w Lublinie	Krakowskie Przedmieście 43	20-076	Lublin	(81) 460 10 00	boi@lublin.so.gov.pl
// apelacja lubelska	okręg lubelski	SR	Sąd Rejonowy w Białej Podlaskiej	Brzeska 20-22	21-500	Biała Podlaska	(83) 311 10 95	boi@bialapodlaska.sr.gov.pl
// apelacja lubelska	okręg lubelski	SR	Sąd Rejonowy w Chełmie	Al. I Armii Wojska Polskiego 16	22-100	Chełm	(82) 562 25 06	boi@chelm.sr.gov.pl
// apelacja lubelska	okręg lubelski	SR	Sąd Rejonowy w Kraśniku	Lubelska 81	23-200	Kraśnik	(81) 825 20 01	krasnik@krasnik.sr.gov.pl
// apelacja lubelska	okręg lubelski	SR	Sąd Rejonowy w  Lubartowie	Lubelska 57	21-100	Lubartów	(81) 852 68 00	adm@lubartow.sr.gov.pl
// apelacja lubelska	okręg lubelski	SR	Sąd Rejonowy Lublin-Wschód w Lublinie z siedzibą w Świdniku	Kardynała Stefana Wyszyńskiego 18	21-040	Świdnik	(81) 464 87 22	boi@lublin-wschod.sr.gov.pl
// apelacja lubelska	okręg lubelski	SR	Sąd Rejonowy Lublin-Zachód w Lublinie	Krakowskie Przedmieście 76	20-950	Lublin	(81) 478 16 07	sek@lublin-zachod.sr.gov.pl 
// apelacja lubelska	okręg lubelski	SR	Sąd Rejonowy w Opolu Lubelskim	Stary Rynek 46 	24-300 	Opole Lubelskie	(81) 827 28 25	administracyjny@opolelubelskie.sr.gov.pl
// apelacja lubelska	okręg lubelski	SR	Sąd Rejonowy w Puławach	Lubelska 7	24-100	Puławy	(81) 888 55 85	biuro@pulawy.sr.gov.pl
// apelacja lubelska	okręg lubelski	SR	Sąd Rejonowy w Radzyniu Podlaskim	Stefana Kardynała Wyszyńskiego 5	21-300	Radzyń	(83) 313 30 01, 313 30 02	boi@radzyn.sr.gov.pl
// apelacja lubelska	okręg lubelski	SR	Sąd Rejonowy w Rykach	Kościuszki 15	08-500	Ryki	(81) 865 60 51	bpod@ryki.sr.gov.pl
// apelacja lubelska	okręg lubelski	SR	Sąd Rejonowy we Włodawie	Sejmowa7  	22-200	Włodawa	(82) 572 11 15	sekretariat@wlodawa.sr.gov.pl

// apelacja lubelska	okręg radomski	SO	Sąd Okręgowy w Radomiu	Piłsudskiego 10	26-600	Radom	(48) 677 67 00, 677 67 66	boi@radom.so.gov.pl
// apelacja lubelska	okręg radomski	SR	Sąd Rejonowy w Grójcu	Sportowa 14	05-600	Grójec	(48)  664 83 01	poi@grojec.sr.gov.pl
// apelacja lubelska	okręg radomski	SR	Sąd Rejonowy w Kozienicach	Konstytucji 3 Maja 22	26-900	Radom	(48) 614 29 13	biuro@kozienice.sr.gov.pl
// apelacja lubelska	okręg radomski	SR	Sąd Rejonowy w Lipsku	Partyzantów 1	27-300	Lipsko	(48) 378 44 60	biuropodawcze@lipsko.sr.gov.pl
// apelacja lubelska	okręg radomski	SR	Sąd Rejonowy w Przysusze	Al. Jana Pawła II 11	26-400	Przysucha	(48) 675 03 70	administracja@przysucha.sr.gov.pl
// apelacja lubelska	okręg radomski	SR	Sąd Rejonowy w Radomiu	Struga 63	26-600	Radom	(48) 368 04 42, 368 04 44, 368 04 45	boi@radom.sr.gov.pl
// apelacja lubelska	okręg radomski	SR	Sąd Rejonowy w Szydłowcu	Pl. Marii Konopnickiej 7	26-500	Szydłowiec	(48) 617 87 00	administracja@szydlowiec.sr.gov.pl
// apelacja lubelska	okręg radomski	SR	Sąd Rejonowy w Zwoleniu	Moniuszki 6	26-700	Zwoleń	(48) 676 30 51	biuropodawcze@zwolen.sr.gov.pl

// apelacja lubelska	okręg siedlecki	SO	Sąd Okręgowy w Siedlcach	Sądowa 2	08-100	Siedlce	(25) 640 78 41	boi@siedlce.so.gov.pl
// apelacja lubelska	okręg siedlecki	SR	Sąd Rejonowy w Garwolinie	Al. Legionów 46	08-400	Garwolin	(25) 684 17 00	boi@garwolin.sr.gov.pl
// apelacja lubelska	okręg siedlecki	SR	Sąd Rejonowy w Łukowie	Staropijarska 1	21-400	Łuków	(25) 798 23 51	biuropodawcze@lukow.sr.gov.pl
// apelacja lubelska	okręg siedlecki	SR	Sąd Rejonowy w Mińsku Mazowieckim	Okrzei 14	05-309	Mińs Mazowiecki	(25) 756 49 10	boi@minsk-mazowiecki.sr.gov.pl
// apelacja lubelska	okręg siedlecki	SR	Sąd Rejonowy w Węgrowie	Przemysłowa 20	07-100	Węgrów	(25) 792 22 31	poczta@wegrow.sr.gov.pl
// apelacja lubelska	okręg siedlecki	SR	Sąd Rejonowy w Sokołowie Podlaskim	ks Bosco 3	08-300	Sokołów Podlaski	(25) 787 23 22	biuro.podawcze@sokolow-podlaski.sr.gov.pl
// apelacja lubelska	okręg siedlecki	SR	Sąd Rejonowy w Siedlcach	Kazimierzowska 31A	08-110	Siedlce	(25) 640 07 01	boi@siedlce.sr.gov.pl

// apelacja lubelska	okręg zamojski	SO	Sąd Okręgowy w Zamościu	Wyszyńskiego 11	22-400	Zamość	(84) 631 68 00	biuro@zamosc.so.gov.pl
// apelacja lubelska	okręg zamojski	SR	Sąd Rejonowy w Biłgoraju	Kościuszki  29	23-400	Biłgoraj	(84) 685 09 01, 685 09 02 	adm@bilgoraj.sr.gov.pl
// apelacja lubelska	okręg zamojski	SR	Sąd Rejonowy w Hrubieszowie	Dobrzańskiego "Hubala" 7	22-500	Hrubieszów	(84) 696 40 42	administracja@hrubieszow.sr.gov.pl
// apelacja lubelska	okręg zamojski	SR	Sąd Rejonowy w Janowie Lubelskim 	Zamoyskiego 94	23-300	Janów Lubelski	(15) 872 00 50, 872 04 49	administracja@janowlubelski.sr.gov.pl
// apelacja lubelska	okręg zamojski	SR	Sąd Rejonowy w Krasnymstawie	Poniatowskiego 31	22-300	Krasnystaw	(82) 576 28 01	boi@krasnystaw.sr.gov.pl
// apelacja lubelska	okręg zamojski	SR	Sąd Rejonowy w Tomaszowie Lubelskim	Lwowska 55	22-600	Tomaszów Lubelski	(84) 665 74 55, 665 74 89	boi@tomaszowlub.sr.gov.pl
// apelacja lubelska	okręg zamojski	SR	Sąd Rejonowy w Zamosciu	Wyszyńskiego 11	22-400	Zamość	(84) 631 65 00	boi@zamosc.sr.gov.pl

// apelacja łódzka		SA	Sąd Apelacyjny w Łodzi	Narutowicza 64	90-136	Łódź	(42) 685 06 96	boi@lodz.sa.gov.pl

// apelacja łódzka	okręg kaliski	SO	Sąd Okręgowy w Kaliszu	Al. Wolności 13	62-800	Kalisz	(62) 765 78 11	biuro_obslugi@kalisz.so.gov.pl
// apelacja łódzka	okręg kaliski	SR	Sąd Rejonowy w Kaliszu	Al. Wolności 13	62-800	Kalisz	(62) 765 78 61	boi@kalisz.sr.gov.pl
// apelacja łódzka	okręg kaliski	SR	Sąd Rejonowy w Ostrowie Wielkopolskim	Sądowa 2	63-400	Ostrów Wielkopolski	(62) 592 61 79	poi@ostrow.sr.gov.pl
// apelacja łódzka	okręg kaliski	SR	Sąd Rejonowy w Jarocinie	Al. Niepodległości 15	63-200	Jarocin	(62) 505 29 60	administracja@jarocin.sr.gov.pl
// apelacja łódzka	okręg kaliski	SR	Sąd Rejonowy w Pleszewie	Malińska 21	63-300	Pleszew	(62) 742 06 98	administracja@pleszew.sr.gov.pl
// apelacja łódzka	okręg kaliski	SR	Sąd Rejonowy w Kępnie	Al. Marcinkowskiego 10	63-600	Kępno	(62) 782 72 84	bpodawcze@kepno.sr.gov.pl
// apelacja łódzka	okręg kaliski	SR	Sąd Rejonowy w Ostrzeszowie	Zamkowa 9 A	63-500	Ostrzeszów	(62) 732 27 20	administracja@ostrzeszow.sr.gov.pl
// apelacja łódzka	okręg kaliski	SR	Sąd Rejonowy w Krotoszynie	Sienkiewicza 11	63-700	Krotoszyn	(62) 725 11 00	administracja@krotoszyn.sr.gov.pl

// apelacja łódzka	okręg łódzki	SO	Sąd Okręgowy w Łodzi	Pl. Dąbrowskiego 5	90-921	Łódź	(42) 685 04 00	boi@lodz.so.gov.pl
// apelacja łódzka	okręg łódzki	SR	Sąd Rejonowy w Kutnie	Spokojna 2	99-300	Kutno	(24) 251 13 50	boi@kutno.sr.gov.pl
// apelacja łódzka	okręg łódzki	SR	Sąd Rejonowy w Łowiczu	Kaliska 1/3	99-400	Łowicz	(46) 830 43 10	boi@lowicz.sr.gov.pl
// apelacja łódzka	okręg łódzki	SR	Sąd Rejonowy w Łęczycy	Konopnickiej 16	99-100	Łęczyca	(24) 721 12 82	boi.leczyca@leczyca.sr.gov.pl
// apelacja łódzka	okręg łódzki	SR	Sąd Rejonowy w Pabianicach	Partyzancka 105/127	95-200	Pabianice	(42) 225 51 83	boi@pabianice.sr.gov.pl
// apelacja łódzka	okręg łódzki	SR	Sąd Rejonowy w Skierniewicach	Reymonta 12/14	96-100	Skierniewice	(46) 834 49 40	boi@skierniewice.sr.gov.pl
// apelacja łódzka	okręg łódzki	SR	Sąd Rejonowy w Zgierzu	Sokołowska 6	95-100	Zgierzu	(42) 715 76 00	boi@zgierz.sr.gov.pl
// apelacja łódzka	okręg łódzki	SR	Sąd Rejonowy dla Łodzi-Śródmieścia w Łodzi	Al. Kościuszki 107/109	90-928	Łódź	(42) 201 20 00	boi@lodz.sr.gov.pl
// apelacja łódzka	okręg łódzki	SR	Sąd Rejonowy w Brzezinach	Waryńskiego 32	95-060	Brzeziny	(46) 875 51 41, 875 21 51	boi@brzeziny.sr.gov.pl
// apelacja łódzka	okręg łódzki	SR	Sąd Rejonowy dla Łodzi-Widzewa w Łodzi	Al. Piłsudskiego 143	92-332	Łódź	(42) 677 47 26,  677 95 64	boi.pilsudskiego@widzew.sr.gov.pl, boi.kopcinskiego@widzew.sr.gov.pl
// apelacja łódzka	okręg łódzki	SR	Sąd Rejonowy w Rawie Mazowieckiej 	Kościuszki 17	96-200	Rawa Mazowiecka	(46) 813 19 15	boi@rawa.sr.gov.pl

// apelacja łódzka	okręg piotrkowski	SO	Sąd Okręgowy w Piotrkowie Trybunalskim	Słowackiego 5	97-300	Piotrków Trybunalski	(44) 649 41 80	boi@piotrkow-tryb.so.gov.pl
// apelacja łódzka	okręg piotrkowski	SR	Sąd Rejonowy w Bełchatowie	Okrzei 4	97-400	Bełchatów	(44) 635 76 06	boi@belchatow.sr.gov.pl
// apelacja łódzka	okręg piotrkowski	SR	Sąd Rejonowy w Opocznie	Biernackiego 20	26-300	Opoczno	(44) 755 71 07 	informacja@opoczno.sr.gov.pl
// apelacja łódzka	okręg piotrkowski	SR	Sąd Rejonowy w Piotrkowie Trybunalskim 	Słowackiego 5	97-300	Piotrków Trybunalski	(44) 649 42 00	boi@piotrkow-tryb.sr.gov.pl
// apelacja łódzka	okręg piotrkowski	SR	Sąd Rejonowy w Radomsku 	Tysiaclecia 3	97-500	Radomsko	(44) 685 81 12	poczta@radomsko.sr.gov.pl
// apelacja łódzka	okręg piotrkowski	SR	Sąd Rejonowy w Tomaszowie Mazowieckim	Mościckiego 9	97-200	Tomaszów Mazowiecki	(44) 725 75 08, 725 75 09	boi@tomaszow-maz.sr.gov.pl

// apelacja łódzka	okręg płocki	SO	Sąd Okręgowy w Płocku	Pl. Narutowicza 4	09-404	Płock	(24) 269 72 13	sekretariat.prezesa@plock.so.gov.pl
// apelacja łódzka	okręg płocki	SR	Sąd Rejonowy w Płocku	Pl. Narutowicza 6	09-404	Płock	(24) 269 74 76	biuropodawcze@plock.sr.gov.pl
// apelacja łódzka	okręg płocki	SR	Sąd Rejonowy w Ciechanowie 	Mikołajczyka 5	06-400	Ciechanów	(23) 674 17 71	informacja@ciechanow.sr.gov.pl
// apelacja łódzka	okręg płocki	SR	Sąd Rejonowy w Gostyninie	3 Maja 43	09-500	Gostynin	(24) 352 08 31	administracja@gostynin.sr.gov.plk
// apelacja łódzka	okręg płocki	SR	Sąd Rejonowy w Mławie 	Reymonta 3	06-500	Mława	(23) 654 89 06	boi@mlawa.sr.gov.pl
// apelacja łódzka	okręg płocki	SR	Sąd Rejonowy w Sochaczewie	1 Maja 7	96-500	Sochaczew	(46) 862 32 64 w.300	biuro.podawcze@sochaczew.sr.gov.pl
// apelacja łódzka	okręg płocki	SR	Sąd Rejonowy w Płońsku	Sienkiewicz 9a	09-100	Płońsk	(23) 661 37 10	boi@plonsk.sr.gov.pl
// apelacja łódzka	okręg płocki	SR	Sąd Rejonowy w Sierpcu	Wiosny Ludów 1	09-200	Sierpc	(24) 275 22 93	administracja@sierpc.sr.gov.pl
// apelacja łódzka	okręg płocki	SR	Sąd Rejonowy w Żyrardowie	Al. Partyzantów 3	96-300	Żyrardów	(46) 854 31 41	boi@zyrardow.sr.gov.pl 

// apelacja łódzka	okręg sieradzki	SO	Sąd Okręgowy w Sieradzu	Al. Zwycięstwa 1	98-200	Sieradz	(43) 826 66 09	boi@sieradz.so.gov.pl
// apelacja łódzka	okręg sieradzki	SR	Sąd Rejonowy w Sieradzu 	Al. Zwycięstwa 1	98-200	Sieradz	(43) 826 66 00	boi@sieradz.sr.gov.pl
// apelacja łódzka	okręg sieradzki	SR	Sąd Rejonowy w Łasku	Kolejowa 12	98-100	Łask	(43) 676 85 00	administracja@lask.sr.gov.pl
// apelacja łódzka	okręg sieradzki	SR	Sąd Rejonowy w Wieluniu	Pl. Jagielloński 1	98-300	Wieluń	(43) 842 01 00	poi@wielun.sr.gov.pl
// apelacja łódzka	okręg sieradzki	SR	Sąd Rejonowy w Zduńskiej Woli	Żeromskiego 19	98-220	Zduńska Wola	(43) 824 18 18	boi@zdwola.sr.gov.pl

// apelacja poznańska		SA	Sąd Apelacyjny w Poznaniu	Trójpole 21	61-693	Poznań	(61) 827 45 63	informacja@poznan.sa.gov.pl

// apelacja poznańska	okręg koniński	SO	Sąd Okręgowy w Koninie	Energetyka  5	62-510	Konin	(63) 242 30 22	boi@konin.so.gov.pl
// apelacja poznańska	okręg koniński	SR	Sąd Rejonowy w Koninie	Chopina 28	62-510	Konin	(63) 240 47 46	boi@konin.sr.gov.pl
// apelacja poznańska	okręg koniński	SR	Sąd Rejonowy w Kole	Włocławska 4	62-600	Koło	(63) 228 29 17	bp@kolo.sr.gov.pl
// apelacja poznańska	okręg koniński	SR	Sąd Rejonowy w Słupcy	Armii Krajowej 2	62-400	Słupca	(63) 228 27 00	biuropodawcze@slupca.sr.gov.pl
// apelacja poznańska	okręg koniński	SR	Sąd Rejonowy w Turku	Legionów Polskich 4	62-700	Turek	(63) 278 57 60	bpodawcze@turek.sr.gov.pl

// apelacja poznańska	okręg poznański	SO	Sąd Okręgowy w Poznaniu	Hejmowskiego 2	61-736	Poznań	(61) 628 30 00 wew. 1	informacja@poznan.so.gov.pl
// apelacja poznańska	okręg poznański	SR	Sąd Rejonowy w Chodzieży	Krasińskiego 10	64-800	Chodzież	(67) 356 77 00	boi@chodziez.sr.gov.pl
// apelacja poznańska	okręg poznański	SR	Sąd Rejonowy w Gnieźnie 	Franciszkańska 9/10	62-200 	Gniezno	(61) 423 93 00	boi@gniezno.sr.gov.pl
// apelacja poznańska	okręg poznański	SR	Sąd Rejonowy w Gostyniu 	Sądowa 1	63-800	Gostyń	(65) 521 44 08, 521 44 09	biuro_podawcze@gostyn.sr.gov.pl
// apelacja poznańska	okręg poznański	SR	Sąd Rejonowy w Grodzisku Wielkopolskim	Żwirki i Wigury nr 3	62-065	Grodzisk Wielkopolski	(61) 628 48 08	poi@grodziskwlkp.sr.gov.pl
// apelacja poznańska	okręg poznański	SR	Sąd Rejonowy w Kościanie	Pl. Niezłomnych 2	64-000	Kościan	(65) 521 45 46	biuro.podawcze@koscian.sr.gov.pl
// apelacja poznańska	okręg poznański	SR	Sąd Rejonowy w Lesznie	Dąbrowskiego 2	64-100	Leszno	(65) 525 94 03	boi@leszno.sr.gov.pl
// apelacja poznańska	okręg poznański	SR	Sąd Rejonowy w Nowym Tomyślu	Pl. Niepodległości 31	64-300	Nowy Tomyśl	(61) 628 49 60	administracja@nowytomysl.sr.gov.pl
// apelacja poznańska	okręg poznański	SR	Sąd Rejonowy w Obornikach	Piłsudskiego 47	64-600 	Oborniki	(61) 628 48 77	adm@oborniki.sr.gov.pl
// apelacja poznańska	okręg poznański	SR	Sąd Rejonowy w Pile	Al. Powstańców Wlkp.  79	64-920	Piła	(67) 352 29 28	info@pila.sr.gov.pl
// apelacja poznańska	okręg poznański	SR	Sąd Rejonowy Poznań-Grunwald i Jeżyce w Poznaniu	Kamiennogórska 26	60-179	Poznań	(61) 628 97 00	boi@poznan-grunwald.sr.gov.pl
// apelacja poznańska	okręg poznański	SR	Sąd Rejonowy Poznań-Nowe Miasto i Wilda w Poznaniu	Al. Marcinkowskiego 32	61-745	Poznań	(61) 640 90 00	boi@poznan-nowemiasto.sr.gov.pl 
// apelacja poznańska	okręg poznański	SR	Sąd Rejonowy Poznań-Stare Miasto w Poznaniu	Młyńska 1a	61-729	Poznań	(61) 666 08 50	informacja@poznan-staremiasto.sr.gov.pl
// apelacja poznańska	okręg poznański	SR	Sąd Rejonowy w Rawiczu	Ignacego Buszy nr 1	63-900	Rawicz	(65) 521 44 51	biuro.podawcze@rawicz.sr. gov.pl
// apelacja poznańska	okręg poznański	SR	Sąd Rejonowy w Szamotułach	Al. 1 Maja 5A	64-500	Szamotuły	(61) 667 47 00	boi@szamotuly.sr.gov.pl
// apelacja poznańska	okręg poznański	SR	Sąd Rejonowy w Śremie	Franciszkańska 4	63-100	Śrem	(61) 282 14 10	administracja@srem.sr.gov.pl
// apelacja poznańska	okręg poznański	SR	Sąd Rejonowy w Środzie Wielkopolskiej	Stary Rynek 6	63-000	Środa Wielkopolska	(61) 629 49 00	administracja@srodawlkp.sr.gov.pl
// apelacja poznańska	okręg poznański	SR	Sąd Rejonowy w Trzciance	Staszica 1	64-980	Trzcianka	(67) 352 89 00	biuropodawcze@trzcianka.sr.gov.pl
// apelacja poznańska	okręg poznański	SR	Sąd Rejonowy w Wągrowcu 	Kościuszki 18 	62-100	Wągrowiec	(67) 268 18 00	boi@wagrowiec.sr.gov.pl 
// apelacja poznańska	okręg poznański	SR	Sąd Rejonowy w Wolsztynie	Mickiewicza 2	64-200	Wolsztyn	(68) 420 23 05	administracja@wolsztyn.sr.gov.pl
// apelacja poznańska	okręg poznański	SR	Sąd Rejonowy we Wrześni	Jana Pawła II 10	62-300	Września	(61) 436 90 01	administracja@wrzesnia.sr.gov.pl
// apelacja poznańska	okręg poznański	SR	Sąd Rejonowy w Złotowie 	Konopnickiej 15	77-400	Złotów	(67) 264 28 00	biuropodawcze@zlotow.sr.gov.pl

// apelacja poznańska	okręg zielonogórski	SO	Sąd Okręgowy w Zielonej Górze	Pl. Słowiański 1	65-069	Zielona Góra	(68) 322 03 00	boi@zielona-gora.so.gov.pl 
// apelacja poznańska	okręg zielonogórski	SR	Sąd Rejonowy w Krośnie Odrzańskim	Piastów 10 L	66-600	Krosno Odrzańskie	(68) 383 99 10	biuro.podawcze@krosno-odrz.sr.gov.pl
// apelacja poznańska	okręg zielonogórski	SR	Sąd Rejonowy w Nowej Soli	Piłsudskiego 24 	67-100 	Nowa Sól	(68) 356 97 30	sekretariat@nowa-sol.sr.gov.pl
// apelacja poznańska	okręg zielonogórski	SR	Sąd Rejonowy w Świebodzinie	Park Chopina 3	66-200	Świebodzin	(68) 381 94 64	boi@swiebodzin.sr.gov.pl
// apelacja poznańska	okręg zielonogórski	SR	Sąd Rejonowy we Wschowie	Plac Kosynierów 1C	67-400 	Wschowie	(65) 540 15 01	podawcze@wschowa.sr.gov.pl
// apelacja poznańska	okręg zielonogórski	SR	Sąd Rejonowy w Zielonej Górze	Pl. Słowiański 2	65-069	Zielona Góra	(68) 322 03 10	informacja@zielona-gora.sr.gov.pl
// apelacja poznańska	okręg zielonogórski	SR	Sąd Rejonowy w Żaganiu	Szprotawska 3	68-100	Żagań	(68) 478 49 36	boi@zagan.sr.gov.pl
// apelacja poznańska	okręg zielonogórski	SR	Sąd Rejonowy w Żarach	Spokojna 20	68-200	Żary	(68) 363 53 42	sekretariat@zary.sr.gov.pl

// apelacja rzeszowska		SA	Sąd Apelacyjny w Rzeszowie 	Al. Piłsudskiego 28	35-001	Rzeszów	(17) 858 02 63	boi@rzeszow.sa.gov.pl 

// apelacja rzeszowska	okręg przemyski	SO	Sąd Okręgowy w Przemyślu	Konarskiego 6	37-700	Przemyśl	(16) 676 13 01, 676 13 02	biuro@przemysl.so.gov.pl
// apelacja rzeszowska	okręg przemyski	SR	Sąd Rejonowy w Jarosławiu	Jana Pawła II 11	37-500	Jarosław	(16) 624 01 02	boi@jaroslaw.sr.gov.pl
// apelacja rzeszowska	okręg przemyski	SR	Sąd Rejonowy w Przeworsku	Lwowska 9	37-200	Przeworsk	(16) 649 08 10	boi@przeworsk.sr.gov.pl
// apelacja rzeszowska	okręg przemyski	SR	Sąd Rejonowy w Lubaczowie	Mickiewicza 24	37-600	Lubaczów	(16) 632 50 64	sad@lubaczow.sr.gov.pl
// apelacja rzeszowska	okręg przemyski	SR	Sąd Rejonowy w Przemyślu	Mickiewicza 14	37-700	Przemyśl	(16) 679 45 50	boi@przemysl.sr.gov.pl

// apelacja rzeszowska	okręg krośnieński	SO	Sąd Okręgowy w Krośnie	Sienkiewicza 12	38-400	Krosno Odrzańskie	(13) 437 36 38	poi@krosno.so.gov.pl
// apelacja rzeszowska	okręg krośnieński	SR	Sąd Rejonowy w Brzozowie	3 Maja 2a	36-200	Brzozów	(13) 433 83 30	administracja@brzozow.sr.gov.pl
// apelacja rzeszowska	okręg krośnieński	SR	Sąd Rejonowy w Jaśle	Armii Krajowej 3	38-200	Jasło	(13) 446 20 80	administracja@jaslo.sr.gov.pl
// apelacja rzeszowska	okręg krośnieński	SR	Sąd Rejonowy w Krośnie	Sienkiewicza  12	38-400	Krosno	(13) 437 56 00	adm@krosno.sr.gov.pl 
// apelacja rzeszowska	okręg krośnieński	SR	Sąd Rejonowy w Lesku	Pl. Konstytucji 3 Maja 9	38-600	Lesko	(13) 468 98 00	administracja@lesko.sr.gov.pl
// apelacja rzeszowska	okręg krośnieński	SR	Sąd Rejonowy w Sanoku	Kościuszki 5	38-500	Sanok	(13) 465 67 87	boi@sanok.sr.gov.pl

// apelacja rzeszowska	okręg rzeszowski	SO	Sąd Okręgowy w Rzeszowie	Pl. Śreniawitów 3	35-959	Rzeszów	(17) 875 63 00	boi@rzeszow.so.gov.pl
// apelacja rzeszowska	okręg rzeszowski	SR	Sąd Rejonowy w Ropczycach	Słowackiego 7	39-100	Ropczyce	(17) 222 03 00	sekretariat@ropczyce.sr.gov.pl
// apelacja rzeszowska	okręg rzeszowski	SR	Sąd Rejonowy w Leżajsku	Mickiewicza 47 	37-300	Leżajsk	(17) 240 53 00	sekretariat@lezajsk.sr.gov.pl
// apelacja rzeszowska	okręg rzeszowski	SR	Sąd Rejonowy w Łańcucie	Grunwaldzka 10 	37-100	Łańcut	(17) 224 23 31	boi@lancut.sr.gov.pl
// apelacja rzeszowska	okręg rzeszowski	SR	Sąd Rejonowy w Dębicy	Słoneczna 3	39-200	Dębia	(14) 680 76 70	boi@debica.sr.gov.pl
// apelacja rzeszowska	okręg rzeszowski	SR	Sąd Rejonowy w Rzeszowie	Kustronia 4	35-303	Rzeszów	(17) 715 24 00	boi@rzeszow.sr.gov.pl
// apelacja rzeszowska	okręg rzeszowski	SR	Sąd Rejonowy w Strzyżowie	3 Maja 14	38-100	Strzyżów	(17) 272 81 00	sekretariat@strzyzow.sr.gov.pl

// apelacja rzeszowska	okręg tarnobrzeski	SO	Sąd Okręgowy w Tarnobrzegu	Sienkiewicza 27	39-400	Tarnobrzeg	(15) 688 25 17	boi@tarnobrzeg.so.gov.pl
// apelacja rzeszowska	okręg tarnobrzeski	SR	Sąd Rejonowy w Nisku	Pl. Wolności 14	37-400	Nisko	(15) 841 20 48	boi@nisko.sr.gov.pl
// apelacja rzeszowska	okręg tarnobrzeski	SR	Sąd Rejonowy w Mielcu	Kościuszki 15	39-300	Mielec	(17) 582 04 01	administracja@mielec.sr.gov.pl 
// apelacja rzeszowska	okręg tarnobrzeski	SR	Sąd Rejonowy w Stalowej Woli	Popiełuszki 16	37-450	Stalowa Wola	(15) 643 45 50, 643 45 51	boi@stalowawola.sr.gov.pl
// apelacja rzeszowska	okręg tarnobrzeski	SR	Sąd Rejonowy w Tarnobrzegu	Sienkiewicza 27	39-400	Tarnobrzeg	(15) 688 25 00	sekretariat@tarnobrzeg.sr.gov.pl
// apelacja rzeszowska	okręg tarnobrzeski	SR	Sąd Rejonowy w Kolbuszowej	Tyszkiewiczów 4	36-100	Kolbuszowa	(17) 227 72 00, 227 72 17	boi@kolbuszowa.sr.gov.pl

// apelacja szczecińska		SA	Sąd Apelacyjny w Szczecinie 	Mickiewicza 163 	71-165	Szczecin	(91) 484 94 87	informacja@szczecin.sa.gov.pl

// apelacja szczecińska	okręg szczeciński	SO	Sąd Okręgowy w Szczecinie	Kaszubska 42	70-952	Szczecin	(91) 448 00 02	boi@szczecin.so.gov.pl
// apelacja szczecińska	okręg szczeciński	SR	Sąd Rejonowy w Gryficach	Wysoka Brama 2	72-300	Gryfice	(91) 386 68 01	sr.gryfice@gryfice.sr.gov.pl
// apelacja szczecińska	okręg szczeciński	SR	Sąd Rejonowy Szczecin-Prawobrzeże i Zachód w Szczecinie	Pl. Żołnierza Polskiego 16	70-551	Szczecin	(91) 460 35 33	boi@szczecin-pz.sr.gov.pl
// apelacja szczecińska	okręg szczeciński	SR	Sąd Rejonowy Szczecin-Centrum w Szczecinie	Kaszubska 42	70-227	Szczecin	(91) 485 55 42	boi@szczecin-centrum.sr.gov.pl
// apelacja szczecińska	okręg szczeciński	SR	Sąd Rejonowy w Świnoujściu	Paderewskiego 6	72-600	Świnoujście	(91) 326 28 70	boi@swinoujscie.sr.gov.pl
// apelacja szczecińska	okręg szczeciński	SR	Sąd Rejonowy w Stargardzie	Wojska Polskiego 17-19	73-110	Starogard	(91) 578 74 31	sekretariat@stargard.sr.gov.pl
// apelacja szczecińska	okręg szczeciński	SR	Sąd Rejonowy w Myśliborzu	Niedziałkowskiego 6	74-300	Myslibórz	(95) 747 34 46	sr.mysliborz@mysliborz.sr.gov.pl
// apelacja szczecińska	okręg szczeciński	SR	Sąd Rejonowy w Goleniowie	Konstytucji 3 Maja 45 	72-100	Goleniów	(91) 466 74 46, 466 68 48	boi@goleniow.sr.gov.pl
// apelacja szczecińska	okręg szczeciński	SR	Sąd Rejonowy w Gryfinie	Grunwaldzka 2	74-100	Gryfino	(91) 420 03 07	informacje@gryfino.sr.gov.pl
// apelacja szczecińska	okręg szczeciński	SR	Sąd Rejonowy w Łobzie	Niepodległości 15	73-150	Łobez	(91) 397 06 31	hbobko@lobez.sr.gov.pl
// apelacja szczecińska	okręg szczeciński	SR	Sąd Rejonowy w Kamieniu Pomorskim	Kościuszki 13	72-400	Kamień Pomorski	(91) 382 57 80	sekretariat@kamien.sr.gov.pl
// apelacja szczecińska	okręg szczeciński	SR	Sąd Rejonowy w Choszcznie	Wolności 14	73-200	Choszczno	(95) 765 70 69	sekretariat@choszczno.sr.gov.pl

// apelacja szczecińska	okręg koszaliński	SO	Sąd Okręgowy w Koszalinie	Waryńskiego 7	75-541	Koszalin	(94) 342 88 71	boi@koszalin.so.gov.pl
// apelacja szczecińska	okręg koszaliński	SR	Sąd Rejonowy w Koszalinie	Andersa 34B	75-626	Koszalin	(94) 317 02 21, 342 86 28	informacja@koszalin.sr.gov.pl
// apelacja szczecińska	okręg koszaliński	SR	Sąd Rejonowy w Kołobrzegu	Katedralna 13	78-100	Kołobrzeg	(34) 357 51 42	poi@kolobrzeg.sr.gov.pl
// apelacja szczecińska	okręg koszaliński	SR	Sąd Rejonowy w Wałczu	Sądowa 2	78-600	Wałcz	(67) 250 19 46	boi@walcz.sr.gov.pl
// apelacja szczecińska	okręg koszaliński	SR	Sąd Rejonowy w Białogardzie	Lipowa 1 	78-200	Białogard	(94) 312 01 10	o.administracyjny@bialogard.sr.gov.pl
// apelacja szczecińska	okręg koszaliński	SR	Sąd Rejonowy w Drawsku Pomorskim	Złocieniecka 5	78-500	Drawsko Pomorskie	(94) 363 64 60	poi@drawsko-pom.sr.gov.pl
// apelacja szczecińska	okręg koszaliński	SR	Sąd Rejonowy w Szczecinku	Bohaterów Warszawy 42	78-400	Szczecinek	(94) 373 08 00	boi@szczecinek.sr.gov.pl
// apelacja szczecińska	okręg koszaliński	SR	Sąd Rejonowy w Sławnie	I Pułku Ułanów 20	76-100 	Sławno	(59) 810 67 46	biuropodawcze@slawno.sr.gov.pl

// apelacja szczecińska	okręg gorzowski	SO	Sąd Okręgowy w Gorzowie Wielkopolskim	Mieszka I 33	66-400	Gorzów Wielkopolski	(95) 725 67 65	boi@gorzow-wlkp.so.gov.pl
// apelacja szczecińska	okręg gorzowski	SR	Sąd Rejonowy w Gorzowie Wielkopolskim	Chopina 52 blok 10	66-400	Gorzów Wielkopolski	(95) 725 65 04	boi@gorzow-wlkp.sr.gov.pl
// apelacja szczecińska	okręg gorzowski	SR	Sąd Rejonowy w Słubicach	Bohaterów Warszawy 3B	69-100	Słubie	(95) 750 70 03	sekretariat@slubice.sr.gov.pl
// apelacja szczecińska	okręg gorzowski	SR	Sąd Rejonowy w Strzelcach Krajeńskich	Rynek 2-3	66-500	Strzelce Krajeńskie	(95) 763 21 55	informacja@strzelce-kraj.sr.gov.pl
// apelacja szczecińska	okręg gorzowski	SR	Sąd Rejonowy w Sulęcinie	Kościuszki 30	69-200	Sulęcin	(95) 755 48 24, 755 48 25, 755 48 26	boi@sulecin.sr.gov.pl
// apelacja szczecińska	okręg gorzowski	SR	Sąd Rejonowy w Międzyrzeczu	Wojska Polskiego 1	66-300	Międzyrzecz	(95) 742 40 09	info@miedzyrzecz.sr.gov.pl

// apelacja warszawska		SA	Sąd Apelacyjny w Warszawie	Pl.Krasińskich 2/4/6	00-207	Warszawa	(22) 530 88 85	boi@waw.sa.gov.pl

// apelacja warszawska	okręg warszawski	SO	Sąd Okręgowy w Warszawie	Al. Solidarności 127	00-898	Warszawa	(22) 440 80 00	boi@warszawa.so.gov.pl
// apelacja warszawska	okręg warszawski	SR	Sąd Rejonowy dla m.st. Warszawy w Warszawie	Marszałkowska 82	00-517	Warszawa	(22) 553 97 71	boi_marszałkowska@warszawa.sr.gov.pl
// apelacja warszawska	okręg warszawski	SR	Sąd Rejonowy dla Warszawy-Śródmieścia w Warszawie	Marszałkowska 82	00-517	Warszawa	(22) 553 96 16	boi@warszawa-srodmiescie.sr.gov.pl
// apelacja warszawska	okręg warszawski	SR	Sąd Rejonowy dla Warszawy-Żoliborza w Warszawie	Kocjana 3	01-473	Warszawa	(22) 328 60 30	boi@srzoliborz.pl
// apelacja warszawska	okręg warszawski	SR	Sąd Rejonowy dla Warszawy-Mokotowa w Warszawie	Ogrodowa 51a	00-873	Warszawa	(22) 501 97 20	boi@mokotow.sr.gov.pl
// apelacja warszawska	okręg warszawski	SR	Sąd Rejonowy dla Warszawy-Woli w Warszawie	Kocjana 3 	01-473 	Warszawa	(22) 328 60 20, 328 60 21, 328 60 22	boi@warszawa-wola.sr.gov.pl
// apelacja warszawska	okręg warszawski	SR	Sąd Rejonowy w Grodzisku Mazowieckim	Bartniaka 21/23	05-825	Grodzisk Mazowiecki	(22) 770 92 31	boi@grodzisk.sr.gov.pl
// apelacja warszawska	okręg warszawski	SR	Sąd Rejonowy w Piasecznie	Kościuszki 14	05-500	Piaseczno	(22) 703 78 97, 703 79 04	boi@piaseczno.sr.gov.pl
// apelacja warszawska	okręg warszawski	SR	Sąd Rejonowy w Pruszkowie	Kraszewskiego 22	05-800	Pruszków	(22) 733 41 00	boi@warszawa.so.gov.pl

// apelacja warszawska	okręg warszawsko-praski	SO	Sąd Okręgowy Warszawa-Praga w Warszawie	Poligonowa 3	04-051	Warszawa	(22) 417 72 72	kontakt@warszawapraga.so.gov.pl  
// apelacja warszawska	okręg warszawsko-praski	SR	Sąd Rejonowy w Legionowie	Sobieskiego 47	05-118	Legionowo	(22) 782 36 01	administracja@legionowo.sr.gov.pl
// apelacja warszawska	okręg warszawsko-praski	SR	Sąd Rejonowy w Nowym Dworze Mazowieckim	Słowackiego 19	05-100 	Nowy Dwór Mazowiecki	(22)  732 50 02	boi@nowydwormaz.sr.gov.pl
// apelacja warszawska	okręg warszawsko-praski	SR	Sąd Rejonowy w Otwocku	Armii Krajowej 2	05-400	Otwock	(22) 778 20 50	boi@otwock.sr.gov.pl
// apelacja warszawska	okręg warszawsko-praski	SR	Sąd Rejonowy dla Warszawy Pragi-Południe w Warszawie 	Terespolska 15a	03-813	Warszawa	(22) 509 11 61	boi2@warszawa-pragapoludnie.sr.gov.pl
// apelacja warszawska	okręg warszawsko-praski	SR	Sąd Rejonowy dla Warszawy Pragi-Północ w Warszawie	Terespolska 15a	03-813	Warszawa	(22) 509 11 58	email: boi@warszawapraga-pln.sr.gov.pl
// apelacja warszawska	okręg warszawsko-praski	SR	Sąd Rejonowy w Wołominie	Prądzyńskiego 3A	05-200 	Wołomin	(22) 776 21 44, 776 28 15, 787 28 49	boi@wolomin.sr.gov.pl

// apelacja wrocławska		SA	Sąd Apelacyjny we Wrocławiu	Energetyczna 4	53-330 	Wrocław	(71) 798 77 99 	boi@wroclaw.sa.gov.pl

// apelacja wrocławska	okręg jeleniogórski	SO	Sąd Okręgowy w Jeleniej Górze	Wojska Polskiego 56	58-500	Jelenia Góra	(75) 641 52 51, 641 52 52	p.informacyjny@jelenia-gora.so.gov.pl 
// apelacja wrocławska	okręg jeleniogórski	SR	Sąd Rejonowy w Jeleniej Górze	Mickiewicza 21	58-500	Jelenia Góra	(75) 671 28 30	poi@jelenia-gora.sr.gov.pl
// apelacja wrocławska	okręg jeleniogórski	SR	Sąd Rejonowy w Lubaniu	Pl. 3 Maja 12	59-800	Lubań	(75) 646 46 21	p.informacyjny@luban.sr.gov.pl
// apelacja wrocławska	okręg jeleniogórski	SR	Sąd Rejonowy w Lwówku Śląskim	Jaśkiewicza 12	59-600	Lwówek Śląski	(75) 646 94 50	biuro.podawcze@lwowekslaski.sr.gov.pl
// apelacja wrocławska	okręg jeleniogórski	SR	Sąd Rejonowy w Zgorzelcu	Poniatowskiego 2	59-900	Zgorzelec	(75) 645 69 31	boi@zgorzelec.sr.gov.pl
// apelacja wrocławska	okręg jeleniogórski	SR	Sąd Rejonowy w Kamiennej Górze	Wojska Polskiego 36	58-400	Kamienna Góra	(75) 671 24 01	sekretariat@kamienna-gora.sr.gov.pl
// apelacja wrocławska	okręg jeleniogórski	SR	Sąd Rejonowy w Bolesławcu	Sądowa 1	59-700	Bolesławiec	(75) 646 95 45	boi@boleslawiec.sr.gov.pl

// apelacja wrocławska	okręg legnicki	SO	Sąd Okręgowy w Legnicy	Złotoryjska 40	59-220	Legnica	(76) 754 51 60, 754 51 62	boi@legnica.so.gov.pl
// apelacja wrocławska	okręg legnicki	SR	Sąd Rejonowy w Legnicy	Złotoryjska 19	59-220	Legnica	(76) 754 47 40	boi@legnica.sr.gov.pl
// apelacja wrocławska	okręg legnicki	SR	Sąd Rejonowy w Głogowie	Kutrzeby 2	67-200	Głogów	(76) 754 52 40	boi@glogow.sr.gov.pl
// apelacja wrocławska	okręg legnicki	SR	Sąd Rejonowy w Jaworze	Klasztorna 5	59-400	Jawor	(76) 754 40 01	sr.jawor@jawor.gov.pl
// apelacja wrocławska	okręg legnicki	SR	Sąd Rejonowy w Lubinie	Wrocławska 3	59-300	Lubin	(76) 754 42 10	boi@lubin.sr.gov.pl
// apelacja wrocławska	okręg legnicki	SR	Sąd Rejonowy w Złotoryi	Kolejowa 3	59-500	Złotoryja	(76) 745 90 14	k.kocuj@zlotoryja.sr.gov.pl

// apelacja wrocławska	okręg opolski	SO	Sąd Okręgowy w Opolu	Pl. Daszyńskiego 1	45-064	Opole	(77) 541 81 05, 541 81 90	boi@opole.so.gov.pl
// apelacja wrocławska	okręg opolski	SR	Sąd Rejonowy w Strzelcach Opolskich 	Opolska 11	47-100	Strzelce Opolskie	(77) 463 11 87, 463 11 77, 463 11 88	boi@strzelce.sr.gov.pl
// apelacja wrocławska	okręg opolski	SR	Sąd Rejonowy w Kędzierzynie-Koźlu	Żeromskiego 5	47-200	Kędzierzyn-Koźle	(77) 405 30 01	podawcze@kozle.sr.gov.pl
// apelacja wrocławska	okręg opolski	SR	Sąd Rejonowy w Opolu	Ozimska 60a 	45-368 	Opole	(77) 541 54 01, 541 54 08, 541 54 07	sr@opole.sr.gov.pl
// apelacja wrocławska	okręg opolski	SR	Sąd Rejonowy w Oleśnie 	Sądowa 3	46-300	Olesno	(34) 359 69 00	administracja@olesno.sr.gov.pl
// apelacja wrocławska	okręg opolski	SR	Sąd Rejonowy w Kluczborku	Katowicka 2	46-200 	Kluczbork	(77) 447 16 69	boi@kluczbork.sr.gov.pl
// apelacja wrocławska	okręg opolski	SR	Sąd Rejonowy w Głubczycach	Kochanowskiego 1	48-100	Głubczyce	(77) 471 06 01	boi@glubczyce.sr.gov.pl
// apelacja wrocławska	okręg opolski	SR	Sąd Rejonowy w Nysie	Plac Kościelny 6	48-300	Nysa	(77) 448 35 00	boi@nysa.sr.gov.pl 
// apelacja wrocławska	okręg opolski	SR	Sąd Rejonowy w Prudniku 	Kościuszki 5	48-200 	Prudnik	(77) 443 86 03	boi@prudnik.sr.gov.pl
// apelacja wrocławska	okręg opolski	SR	Sąd Rejonowy w Brzegu	Chrobrego 31	49-300 	Brzeg	(77) 444 23 31, 444 23 32	boi@brzeg.sr.gov.pl

// apelacja wrocławska	okręg świdnicki	SO	Sąd Okręgowy w Świdnicy	Pl. Grunwaldzki 14	58-100	Świdnica	(74) 851 83 50	boi@swidnica.so.gov.pl
// apelacja wrocławska	okręg świdnicki	SR	Sąd Rejonowy w Dzierżoniowie	Świdnicka 51	58-200	Dzierżoniów	(74) 633 41 00	informacja@dzierzoniow.sr.gov.pl
// apelacja wrocławska	okręg świdnicki	SR	Sąd Rejonowy w Świdnicy 	Okulickiego 2-4	58-100	Świdnica	(74) 851 84 35	srs@swidnica.sr.gov.pl
// apelacja wrocławska	okręg świdnicki	SR	Sąd Rejonowy w Kłodzku	Bohaterów Getta 15	57-300	Kłodzko	(74) 865 13 17	punktinformacyjny@klodzko.sr.gov.pl
// apelacja wrocławska	okręg świdnicki	SR	Sąd Rejonowy w Wałbrzychu	Słowackiego 10	58-300	Wałbrzych	(74) 843 03 00	informacja@walbrzych.sr.gov.pl
// apelacja wrocławska	okręg świdnicki	SR	Sąd Rejonowy w Ząbkowicach Śląskich	Świerkowa 1	57-200	Ząbkowice Śląskie	(74) 816 51 00	poi@zabkowice.sr.gov.pl

// apelacja wrocławska	okręg wrocławski	SO	Sąd Okręgowy we Wrocławiu	Sądowa 1	50-046	Wrocław	(71) 370 45 00	punkt.informacyjny@wroclaw.so.gov.pl
// apelacja wrocławska	okręg wrocławski	SR	Sąd Rejonowy w Wołowie	Reja 11	56-100	Wołów	(71) 756 61 49	biuro.podawcze@wolow.sr.gov.pl
// apelacja wrocławska	okręg wrocławski	SR	Sąd Rejonowy w Miliczu	Piłsudskiego 10	56-300	Milicz	(71) 749 90 00	biuro.podawcze@milicz.sr.gov.pl
// apelacja wrocławska	okręg wrocławski	SR	Sąd Rejonowy w Strzelinie	Bolka I Świdnickiego 7	57-100	Strzelin	(71) 749 91 00	biuro.podawcze@strzelin.sr.gov.pl
// apelacja wrocławska	okręg wrocławski	SR	Sąd Rejonowy dla Wrocławia-Fabrycznej we Wrocławiu	Świebodzka 5	50-046	Wrocław	(71) 748 90 48	biuro.podawcze@wroclaw-fabryczna.sr.gov.pl
// apelacja wrocławska	okręg wrocławski	SR	Sąd Rejonowy dla Wrocława-Krzyków we Wrocławiu	Podwale 30	50-040	Wrocław	(71) 749 63 15	administracyjny@wroclaw-krzyki.sr.gov.pl
// apelacja wrocławska	okręg wrocławski	SR	Sąd Rejonowy dla Wrocławia-Śródmieścia we Wrocławiu	Podwale 30 	50-040	Wrocław	(71) 748 11 40	biuro.podawcze@wroclaw-srodmiescie.sr.gov.pl
// apelacja wrocławska	okręg wrocławski	SR	Sąd Rejonowy w Oławie	11 Listopada 12	55-200	Oława	(71) 749 92 00	punkt.informacyjny@olawa.sr.gov.pl
// apelacja wrocławska	okręg wrocławski	SR	Sąd Rejonowy w Oleśnicy	3 Maja 48/49	56-400	Oleśnica	(71) 756 63 20	biuro.podawcze@olesnica.sr.gov.pl
// apelacja wrocławska	okręg wrocławski	SR	Sąd Rejonowy w Trzebnicy	Parkowa  4	55-100	Trzebnica	(71) 756 62 04	administracyjny@trzebnica.sr.gov.pl
// apelacja wrocławska	okręg wrocławski	SR	Sąd Rejonowy w Środzie Śląskiej	św. Andrzeja 3	55-300	Środa Śląska	(71) 396 02 48	boi@srodaslaska.sr.gov.pl
