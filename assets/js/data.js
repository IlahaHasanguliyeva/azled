/* -------------------------------------------------
   1. Data – define your posts here
   ------------------------------------------------- */
const indoorProducts = [
  {
    id: 1,
    type: "indoor",
    img: "./assets/images/products/indoor/P1.8Indoor.jpg",
    title: "P1.8 Indoor LED Display",
    excerpt:
      "“P1.8” tipli indoor LED ekranlar, yüksək dəqiqlik üçün nəzərdə tutulub. Piksel aralığı ~1.8 mm ilə çox yaxın baxış məsafələrində təmiz görüntü verir. Əsas olaraq konfrans zalı, nəzarət otağı, studiya, alış-veriş mərkəzi kimi yerlərdə istifadə olunur. Keyfiyyətli seçim edərkən piksel aralığı, parlaqlıq, yeniləmə tezliyi, servis imkanı, enerji, baxış bucağı kimi parametrlərə diqqətlə baxmaq lazımdır.",
    conditions: [
      "İşıqlandırma şərtləri: İndoor olsa belə, arxa işıq, pəncərə, spot işıqlar varsa, parlaqlıq kifayət etməyə bilər.",
      "Baxış məsafəsi: Piksel aralığı 1.8 mm olduğu üçün çox yaxın məsafədən baxış üçün uygundur, lakin çox uzaqdan baxılacaqsa daha böyük pitch istifadə edilə bilər.",
      "Quraşdırma səthi düz olmalıdır; modul bərabər yerləşməzsə “görünən şıplar” və görüntü səviyyəsində sapmalar ola bilər.",
      "Xidmət (service) ehtiyatları və komponent təminatı (LED lampalar, sürücü IC-lər, kabinet hissələri) vacibdir.",
      "Montaj sonrası kalibrasiya: parlaqlıq, rəng balansı, modullar arasında uyğunluq.",
      "Enerji və istilik idarəsi: yüksək parlaqlıq və sıx piksellik sahələrdə istilik yığılması mümkündür.",
    ],
  },
  {
    id: 2,
    type: "indoor",
    img: "./assets/images/products/indoor/P2.0indoor.jpg",
    title: "P2.0 Indoor LED Screen",
    excerpt:
      "“P2.0” tipli indoor LED ekranlar, piksel aralığı təxminən 2 mm olan yüksək dəqiqlikli indoor ekran texnologiyasıdır. Yaxın baxış məsafəsi tələb olunan yerlər (məs., satış mərkəzi, brend mağazası, konfrans zalı) üçün uyğundur. Seçim edərkən piksel aralığı, parlaqlıq, yeniləmə tezliyi, baxış bucağı, enerji istehlakı və montaj/servis imkanları kimi parametrlərə diqqət edilməlidir.",
    conditions: [
      "İşıqlandırma şərtləri: İndoor olsa belə, əgər pəncərə qarşısıdırsa və ya gün işığı güclüdürsə parlaqlıq daha yüksək olmalı.",
      "Baxış məsafəsi: Piksel aralığı 2 mm olsa da çox yaxın məsafədən baxan istifadəçi üçün piksellənmə hiss oluna bilər.",
      "Məkan ölçüsü və ekran ölçüsü: Ekranın ölçüsü, baxan kütlənin məsafəsi və hündürlüyü ilə uyğun olmalıdır.",
      "Xidmət təminatı və ehtiyat hissələri: Led çipləri, sürücü IC-ləri, modulların dəyişdirilməsi imkanları, istehsalçının təminatı vacibdir.",
      "Montaj sonrası kalibrləmə: Parlaqlıq, rəng və modullar arasında uyğunluq kalibrlənməlidir.",
    ],
  },
  {
    id: 3,
    type: "indoor",
    img: "./assets/images/products/indoor/P2.5indoor.jpg",
    title: "P2.5 Indoor LED Screen",
    excerpt:
      "“P2.5” indoor LED ekranlar, piksel aralığı ~ 2,5 mm olan yüksək dəqiqlikli indoor ekran texnologiyasıdır. Yaxın baxış məsafəsi tələb olunan yerlər üçün optimal balans təqdim edir: çox ultra-fine (məs: P1.8) deyil, lakin standart daha iri pitch olan variantlardan (məs: P3-P4) görkəmli dərəcədə daha yüksək dəqiqlik verir. Seçim edərkən xüsusilə piksel aralığı, parlaqlıq, yeniləmə tezliyi, baxış bucağı, enerji istehlakı və montaj / servis imkanlarına diqqət etmək lazımdır.",
    conditions: [
      "İşıqlandırma: Indoor olsa da əgər güclü işıq var — ekranın parlaqlığı kifayət etməyə bilər.",
      "Baxış məsafəsi: 2,5 mm piksel aralığı olsa da çox yaxın məsafədən baxan istifadəçi üçün piksel görünə bilər — layihədə baxış məsafəsini əvvəlcədən hesablamaq vacibdir.",
      "Xidmət təminatı: LED çipləri, sürücü-IC-lər, modulların dəyişdirilməsi imkanları — istehsalçı və satış sonrası servis şərtləri önəmlidir.",
      "Montaj sonrası kalibrləmə: Parlaqlıq, rəng balansı, modullar arasında uyğunluq — bu addımlar görmə təcrübəsinə birbaşa təsir edir.",
    ],
  },
  {
    id: 4,
    type: "indoor",
    img: "./assets/images/products/indoor/P3.0Indoor.jpg",
    title: "P3.0 Indoor LED Screen",
    excerpt:
      "“P3.0” indoor LED ekranlar, piksel aralığı təxminən 3 mm olan yüksək dəqiqlikli indoor ekran texnologiyasıdır. Yaxın baxış məsafəsi tələb olunan yerlər üçün (məs: mağazalar, konfrans zalı, lobi sahəsi) uyğundur və orta səviyyədə “fine pitch” seçimi sayılır (məs: P1.8 və ya P2.0-dan daha az yüksək dəqiqlik, lakin P4-dən daha yüksək). Seçim edərkən xüsusilə piksel aralığı, parlaqlıq, yeniləmə tezliyi, baxış bucağı, enerji istehlakı və montaj/servis imkanlarına diqqət etmək lazımdır.",
    conditions: [
      "İşıqlandırma şərtləri: Indoor olsa belə, əgər pəncərə qarşısıdırsa və gün işığı çoxdursa – ekranın parlaqlığı yetməyə bilər.",
      "Baxış məsafəsi: Piksel aralığı ~3 mm olduğu üçün çox yaxın məsafədən baxmaq tələb olunursa, piksellənmə hiss oluna bilər – layihələndirmədə bu məsafəni diqqətə almaq vacibdir.",
      "Xidmət təminatı və ehtiyat hissələri: LED çipləri, sürücü IC-ləri, modulların dəyişdirilməsi və servis imkanları – istehsalçı və satış sonrası servis şərtləri önəmlidir.",
      "Montaj sonrası kalibrləmə: Parlaqlıq düzəlişi, rəng balansı, modullar arasında uyğunluq – bunlar görmə təcrübəsinə birbaşa təsir edir.",
    ],
  },
  {
    id: 5,
    type: "indoor",
    img: "./assets/images/products/indoor/P4.0Indoor.jpg",
    title: "P4.0 Indoor LED Screen",
    excerpt:
      "“P4.0” indoor LED ekranlar, piksel aralığı təxminən 4 mm olan orta səviyyəli indoor LED ekran texnologiyasıdır. Çox incə detal tələb edən tətbiqlər üçün (məs: ultra-yaxın baxış məsafəsi olan vitrinlərdə) P2.5 və ya daha aşağı pitch daha müvafiq ola bilər; lakin P4 çox-saylı istifadə halları üçün — məsələn mağaza vitrinləri, konfrans zalı ekranları, xətdəki reklam panelləri — yaxşı balans təqdim edir. Seçim edərkən xüsusilə piksel aralığı, parlaqlıq, yeniləmə tezliyi, baxış bucağı, enerji istehlakı və montaj/servis imkanlarına diqqət etmək lazımdır.",
    conditions: [
      "İşıqlandırma şərtləri: Indoor olsa da, əgər pəncərə qarşısıdırsa və ya gün işığı güclüdürsə — ekranın parlaqlığı kifayət etməyə bilər.",
      "Baxış məsafəsi: Piksel aralığı ~4 mm olduğu üçün çox yaxın məsafədən baxan istifadəçi üçün piksel görünə bilər — layihələndirmədə bu məsafəni diqqətə almaq vacibdir.",
      "Xidmət təminatı və ehtiyat hissələri: LED çipləri, sürücü IC-ləri, modulların dəyişdirilməsi imkanları — istehsalçı və satış sonrası servis şərtləri önəmlidir.",
      "Montaj sonrası kalibrləmə: Parlaqlıq düzəlişi, rəng balansı, modullar arasında uyğunluq — bunlar görmə təcrübəsinə birbaşa təsir edir.",
    ],
  },
];

const outdoorProducts = [
  {
    id: 101,
    type: "outdoor",
    img: "./assets/images/products/outdoor/P2.5Outdoor.webp",
    title: "P2.5 Outdoor LED Billboard",
    excerpt:
      "“P2.5” Outdoor LED ekranlar, piksel aralığı təxminən 2,5 mm olan, yüksək dəqiqlikli açıq sahə ekran texnologiyasıdır. Gün işığının altında görünürlüğü qorumaq üçün yüksək parlaqlıq, IP qoruma səviyyəsi, ciddi montaj və enerji-hava şərtlərinə uyğun dizayn tələb olunur. Seçim edərkən xüsusilə piksel aralığı, parlaqlıq, yeniləmə tezliyi, IP qoruma səviyyəsi, enerji istehlakı və servis imkanlarına diqqət yetirmək lazımdır.",
    conditions: [
      "İşıqlandırma şərtləri: Açıq sahə olduğundan gün işığı və ya refleksiyalar görüntü keyfiyyətini azalda bilər — yüksək parlaqlıq və anti-refleks örtük faydalıdır.",
      "Baxış məsafəsi: Piksel aralığı 2,5 mm olsa da əgər ekran çox böyük və baxan auditoriya uzaqdadırsa — piksel fərqi hiss olunmaya bilər və daha iri pitch (məs: P3, P4) daha maliyyət baxımından məqbuldur.",
      "Montaj sonrası kalibrləmə: Rəng balansı, parlaqlıq uniformluğu və modullar arasında uyğunluq — outdoor halda temperatur və rütubət dəyişkənliyinə görə bu xüsusilə vacibdir.",
      "Xidmət təminatı və ehtiyat hissələri: LED lampalar, sürücü IC-lər, modul yedəkləri — outdoor halda servis şərtləri çətin ola bilər.",
      "Quraşdırma dayanıqlılığı: Rüzgar, su, toz, ekstremal temperatur dəyişiklikləri outdoor sistemlər üçün risklər yaradır — kabinetin dayanıqlı olması vacibdir.",
    ],
  },
  {
    id: 102,
    type: "outdoor",
    img: "./assets/images/products/outdoor/P3.0outdoor.jpg",
    title: "P3.0 Outdoor LED Billboard",
    excerpt:
      "“P3.0” outdoor LED ekranlar, piksel aralığı təxminən 3 mm olan, açıq sahə üçün nəzərdə tutulmuş yüksək dəqiqlikli LED ekran texnologiyasıdır. Günəş işığı altında görünürlüğü yaxşıdır, reklam, stadion, açıq meydan istifadə üçün uyğundur. Seçərkən əsas diqqət ediləcək parametrlər: piksel aralığı, parlaqlıq, yeniləmə tezliyi, IP qoruma səviyyəsi, enerji istehlakı, modul/kabinet ölçüsü və servis imkanı.",
    conditions: [
      "Açıq sahə işıqlandırması və gün işığı: Günəş şüaları, parıltı, kölgə və reflek­siyalar görüntü keyfiyyətini azalda bilər.",
      "Piksel aralığı və baxış məsafəsi: P3 (3mm) pitch çox detallı görüntü verir, lakin əgər baxış məsafəsi çox böyükdürsə, daha iri pitch (məs: P4, P5) daha maliyyət baxımından səmərəli ola bilər.",
      "Maitənans / ehtiyat hissələri: Açıq sahə şərtləri çətin ola bilər — su, toz, rütubət — buna görə servis imkanı və ehtiyat hissələri təminatı önəmlidir.",
      "Montaj sonrası kalibrasiya: Rəng uyğunluğu, parlaqlıq uniformluğu və modullar arasında düzülmə — bunlar görüntü efektinə birbaşa təsir edir.",
      "Kabinet dayanıqlılığı: Rüzgar, külək, gün şüaları, temperatur dalğalanmaları — kabinetin sərt şərtlərə davamlı olması vacibdir.",
    ],
  },
  {
    id: 103,
    type: "outdoor",
    img: "./assets/images/products/outdoor/P4.0outdoor.jpg",
    title: "P4.0 Outdoor LED Billboard",
    excerpt:
      "“P4.0” Outdoor LED ekranlar, piksel aralığı təxminən 4 mm olan, açıq sahə üçün nəzərdə tutulmuş yüksək keyfiyyətli LED ekran sistemləridir. Günəş işığı altında görünürlük, dayanıqlıq və geniş baxış bucağı kimi şərtləri təmin etmək üçün hazırlanmışdır. Seçim edərkən əsas diqqət ediləcək parametrlər:	Piksel aralığı (4 mm) və baxış məsafəsi Parlaqlıq və gün işığı altında görünürlük,  Yeniləmə tezliyi və video performansı, IP qoruma səviyyəsi və açıq sahə şərtlərinə uyğunluq, Güc istehlakı və istilik yayımlaması, Montaj və servis imkanları,",
    conditions: [
      "Açıq sahənin işıqlandırma şərtləri çox güclüdür — əgər parlama, gün işığı və ya refleksiya varsa, ekranın parlaqlığı kifayət etməyə bilər.",
      "Piksel aralığı 4 mm olduğundan, əgər baxış məsafəsi çox kiçik (məs: <4 m) olacaqsa, görüntü “piksellənmiş” hiss oluna bilər — belə halda daha incə pitch (məs: P3.0 və ya P2.5) seçimi daha uyğun ola bilər.",
      "Montaj sonrası kalibrləmə: parlaqlıq uniformluğu, rəng düzgünlüyü, modullar arası uyğunluq — bu göstəricilər görüntü keyfiyyətinə təsir edir.",
      "Ekranın uzunömürlü işləməsi üçün hava, rütubət, toz və UV radiasiyası kimi şərtlər nəzərə alınmalıdır.",
      "Ekranın idarəetmə və məzmun sistemi düzgün planlanmalıdır — siqnal, kontroller, kabelləşmə və qorumanın düzgün olması vacibdir.",
    ],
  },
  {
    id: 104,
    type: "outdoor",
    img: "./assets/images/products/outdoor/P5Outdoor.jpg",
    title: "P5 Outdoor Digital Sign",
    excerpt:
      "“P5.0” Outdoor LED monitorlar, piksel aralığı təxminən 5 mm açıq hava şəraitində istifadə üçün nəzərdə tutulmuş yüksək parlaqlıq və davamlılığa malik ekranlardır.",
    conditions: [
      "Baxış məsafəsi: Piksel aralığı 5 mm olduğu üçün optimal baxış məsafəsi təxminən 5 metr və daha uzaq olmalıdır.",
      "Parlaqlıq: Günəş işığı altında yaxşı görünürlük üçün yüksək parlaqlıq tələb olunur.",
      "Quraşdırma mühiti: Hava şəraiti, rütubət və toz kimi amillər ekranın performansına təsir göstərə bilər.",
      "Texniki xidmət: Modulların asanlıqla dəyişdirilə bilməsi üçün xidmət nöqtələrinin əlçatan olması vacibdir.",
    ],
  },
];

// Export for use in other files
export { indoorProducts, outdoorProducts };
