import React from 'react';

const PIP = [
{
	title:'Państwowa Inspekcja Pracy Okręgowy Inspektorat Pracy w Warszawie',
	adres:'ul. Płocka 11/13, 01-231 Warszawa ',
	tel:'(22) 425 11 94',
	email:'kancelaria@warszawa.pip.gov.pl',
	www:'',
	epuap:'/526-10-53-222/SkrytkaESP',
	tag: 'mazowieckie, Warszawa',
},
{
	title:'Państwowa Inspekcja Pracy Okręgowy Inspektorat Pracy we Wrocławiu',
	adres:'ul. Zielonego Dębu 22, 51-621 Wrocław',
	tel:'(71) 37 10 430, 37 10 468',
	email:'kancelaria@wroclaw.pip.gov.pl',
	www:'',
	epuap:'/OIPWroclaw/SkrytkaESP',
	tag: 'dolnośląskie, Wrocław',
},
{
	title:'Państwowa Inspekcja Pracy Okręgowy Inspektorat Pracy w Zielonej Górze',
	adres:'ul. Dekoracyjna 8, 65-722 Zielona Góra',
	tel:'(68) 451 39 00',
	email:'kancelaria@zgora.pip.gov.pl',
	www:'',
	epuap:'/OIPZG/SkrytkaESP',
	tag: 'lubuskie, Zielona Góra',
},
{
	title:'Państwowa Inspekcja Pracy Ośrodek Szkolenia Państwowej Inspekcji Pracy im. Profesora Jana Rosnera we Wrocławiu ',
	adres:'ul. Mikołaja Kopernika 5, 51-622 Wrocław ',
	tel:'(71) 37 10 404',
	email:'kancelaria@ospip.pl',
	www:'',
	epuap:'/ospip_wroclaw/SkrytkaESP',
	tag: 'dolnoślaskie, Wrocław',
},
{
	title:'Państwowa Inspekcja Pracy Okręgowy Inspektorat Pracy w Białymstoku',
	adres:'ul. Fabryczna 2, 15-483 Białystok',
	tel:'(85) 678 57 00',
	email:'kancelaria@bialystok.pip.gov.pl',
	www:'',
	epuap:'/PipOipBialystok/SkrytkaESP',
	tag: 'podlaskie, Białystok',
},
{
	title: 'Państwowa Inspekcja Pracy Okręgowy Inspektorat Pracy w Krakowie',
	adres: 'pl. Szczepański 5, 31-011 Kraków',
	tel: '(12) 424 04 50',
	email: 'kancelaria@krakow.pip.gov.pl',
	www:'',
	epuap: '/gsiodlarzepuap/SkrytkaESP',
	tag:'małopolskie, Kraków'
},
{
	title: 'Państwowa Inspekcja Pracy Okręgowy Inspektorat Pracy w Opolu',
	adres: 'ul. Oleska 121 „C”, 45-231 Opole', 
	tel: '(77) 47 00 900',
	email: 'kancelaria@opole.pip.gov.pl',
	www:'',
	epuap: '/oipople/SkrytkaESP',
	tag:'opolskie, Opole' 
},
{
	title: 'Państwowa Inspekcja Pracy Okręgowy Inspektorat Pracy w Kielcach',
	adres: 'Al. Tysiąclecia Państwa Polskiego nr 4, 25-314 Kielce', 
	tel: '(41) 343 82 76',
	email: 'kancelaria@kielce.pip.gov.pl',
	www:'',
	epuap: '/OIPKielce/SkrytkaESP',
	tag: 'świętokrzyskie, Kielce'
},
{
	title: 'Państwowa Inspekcja Pracy Okręgowy Inspektorat Pracy w Gdańsku',
	adres: 'ul. Okopowa 7, 80-819 Gdańsk', 
	tel: '(58) 520 18 22 lub 23 ',
	email: 'kancelaria@gdansk.pip.gov.pl',
	www:'',
	epuap: '/OIPGD/skrytka',
	tag: 'pomorskie, Gdańsk'
},
{
	title: 'Państwowa Inspekcja Pracy Okręgowy Inspektorat Pracy w Poznaniu',
	adres: 'ul. Marcelińska 90, 60-324 Poznań', 
	tel: '(61) 628 40 00',
	email: 'kancelaria@poznan.pip.gov.pl',
	www:'',
	epuap: '/oippoznan/SkrytkaESP',
	tag: 'wielkopolskie, Poznań'
},
{
	title: 'Państwowa Inspekcja Pracy Okręgowy Inspektorat Pracy w Rzeszowie',
	adres: 'ul. Gen. St. Maczka 4, 35-234 Rzeszów', 
	tel: '(17) 717 20 00',
	email: 'kancelaria@rzeszow.pip.gov.pl',
	www:'',
	epuap: 'OIP/SkrytkaESP',
	tag: 'podkarpackie, Rzeszów'
},
{
	title: 'Państwowa Inspekcja Pracy Okręgowy Inspektorat Pracy w Szczecinie',
	adres: 'ul. Pszczelna 7, 71-663 Szczecin', 
	tel: '(91) 431 19 30',
	email: 'kancelaria@szczecin.pip.gov.pl',
	www:'',
	epuap: '/oipszczecin/SkrytkaESP',
	tag: 'zachodnopomorskie, Szczecin'
},
{
	title: 'Państwowa Inspekcja Pracy Okręgowy Inspektorat Pracy w Bydgoszczy',
	adres: 'Plac Piastowski 4a, 85-012 Bydgoszcz', 
	tel: '(52) 320 24 00',
	email: 'kancelaria@bydgoszcz.pip.gov.pl',
	www:'',
	epuap: '/PIPOIPBydgoszcz/SkrytkaESP',
	tag: 'kujawsko-pomorskie, Bydgoszcz'
},
{
	title: 'Państwowa Inspekcja Pracy Okręgowy Inspektorat Pracy w Olsztynie',
	adres: 'ul. Kopernika 29, 10-512 Olsztyn', 
	tel: '(89) 527 42 75',
	email: 'kancelaria@olsztyn.pip.gov.pl',
	www:'',
	epuap: '/OIP10/SkrytkaESP',
	tag: 'warmińsko-mazurskie, Olsztyn'
},
{
	title: 'Państwowa Inspekcja Pracy Okręgowy Inspektorat Pracy w Katowicach',
	adres: 'ul. Owocowa 6-6a, 40-158 Katowice', 
	tel: '(32) 60 41 208',
	email: 'kancelaria@katowice.pip.gov.pl',
	www:'',
	epuap: '/oipkatowice/SkrytkaESP',
	tag: 'ślaskie, Katowice'
},
{
	title: 'Państwowa Inspekcja Pracy Okręgowy Inspektorat Pracy w Lublinie',
	adres: 'Al. Piłsudskiego 13, 20-011 Lublin', 
	tel: '(81) 53 71 131',
	email: 'kancelaria@lublin.pip.gov.pl',
	www:'',
	epuap: '/PIP/SkrytkaESP',
	tag: 'lubelskie, Lublin'
},
{
	title: 'Państwowa Inspekcja Pracy Okręgowy Inspektorat Pracy w Łodzi',
	adres: 'al. Kościuszki 123, 90-441 Łódź', 
	tel: '(42) 636 23 13',
	email: 'kancelaria@lodz.pip.gov.pl',
	www:'',
	epuap: '/OIP09/SkrytkaESP',
	tag: 'łódzkie, Łódź'
}

];

export { PIP };