// Project data (you can move to JSON later)
const projects = [
  {
    id: 1,
    title: "Abşeron Hall",
    thumb: "./assets/images/projects/absheron_hall/DSC08609-min.avif",
    images: [
      "./assets/images/projects/absheron_hall/DSC08609-min.avif",
      "./assets/images/projects/absheron_hall/DSC08610-min.avif",
      "./assets/images/projects/absheron_hall/DSC08611-min.avif",
      "./assets/images/projects/absheron_hall/DSC08612-min.avif",
      "./assets/images/projects/absheron_hall/DSC08614-min.avif",
      "./assets/images/projects/absheron_hall/DSC08617-min.avif",
      "./assets/images/projects/absheron_hall/DSC08623-min.avif",
      "./assets/images/projects/absheron_hall/DSC08679-min.avif",
    ],
  },
  {
    id: 2,
    title: "Mado",
    thumb: "./assets/images/projects/mado/prj1.avif",
    images: [
      "./assets/images/projects/mado/prj1.avif",
      "./assets/images/projects/mado/prj2.avif",
      "./assets/images/projects/mado/prj3.avif",
    ],
  },
  {
    id: 3,
    title: "Armani",
    thumb: "./assets/images/projects/armani/IMG_4575-min.avif",
    images: [
      "./assets/images/projects/armani/IMG_4575-min.avif",
      "./assets/images/projects/armani/IMG_4577-min.avif",
      "./assets/images/projects/armani/IMG_4579-min.avif",
      "./assets/images/projects/armani/IMG_4585-min.avif",
      "./assets/images/projects/armani/IMG_4595-min.avif",
    ],
  },
  {
    id: 4,
    title: "Bahar Residence",
    thumb: "./assets/images/projects/bahar_residence/prj1.avif",
    images: [
      "./assets/images/projects/bahar_residence/prj1.avif",
      "./assets/images/projects/bahar_residence/prj2.avif",
      "./assets/images/projects/bahar_residence/prj3.avif",
    ],
  },
  {
    id: 5,
    title: "Baku Steel Company",
    thumb: "./assets/images/projects/baku_steel/prj1.jpeg",
    images: [
      "./assets/images/projects/baku_steel/prj1.jpeg",
      "./assets/images/projects/baku_steel/prj2.jpeg",
    ],
  },
  {
    id: 6,
    title: "Beatrice",
    thumb: "./assets/images/projects/beatrice/prj1.avif",
    images: [
      "./assets/images/projects/beatrice/prj1.avif",
      "./assets/images/projects/beatrice/prj2.avif",
    ],
  },
  {
    id: 7,
    title: "Kontakt Home",
    thumb: "./assets/images/projects/kontakt/prj1.avif",
    images: [
      "./assets/images/projects/kontakt/prj1.avif",
      "./assets/images/projects/kontakt/prj2.avif",
    ],
  },
  {
    id: 8,
    title: "Xarı Bülbül",
    thumb: "./assets/images/projects/khari_bulbul/IMG_4886-min.avif",
    images: [
      "./assets/images/projects/khari_bulbul/IMG_4886-min.avif",
      "./assets/images/projects/khari_bulbul/IMG_4914-min.avif",
      "./assets/images/projects/khari_bulbul/IMG_4918-min.avif",
      "./assets/images/projects/khari_bulbul/IMG_4920-min.avif",
      "./assets/images/projects/khari_bulbul/IMG_4931-min.avif",
    ],
  },
  {
    id: 9,
    title: "City Park Mall",
    thumb: "./assets/images/projects/city_park_mall/prj1.avif",
    images: [
      "./assets/images/projects/city_park_mall/prj1.avif",
      "./assets/images/projects/city_park_mall/prj2.avif",
      "./assets/images/projects/city_park_mall/prj3.avif",
      "./assets/images/projects/city_park_mall/prj4.avif",
    ],
  },
  // Add more...
  {
    id: 10,
    title: "AZLED",
    thumb: "./assets/images/projects/azled/prj1.avif",
    images: [
      "./assets/images/projects/azled/prj1.avif",
      "./assets/images/projects/azled/prj2.avif",
      "./assets/images/projects/azled/prj3.avif",
      "./assets/images/projects/azled/prj4.avif",
    ],
  },
  {
    id: 11,
    title: "Deichmann",
    thumb: "./assets/images/projects/deichmann/prj1.avif",
    images: [
      "./assets/images/projects/deichmann/prj1.avif",
      "./assets/images/projects/deichmann/prj2.avif",
      "./assets/images/projects/deichmann/prj3.avif",
      "./assets/images/projects/deichmann/prj4.avif",
      "./assets/images/projects/deichmann/prj5.avif",
      "./assets/images/projects/deichmann/prj6.avif",
    ],
  },
  {
    id: 12,
    title: "Ermanno",
    thumb: "./assets/images/projects/ermanno/prj1.avif",
    images: ["./assets/images/projects/ermanno/prj1.avif"],
  },
  {
    id: 13,
    title: "ExpoHome",
    thumb: "./assets/images/projects/expohome/prj.avif",
    images: [
      "./assets/images/projects/expohome/prj.avif",
      "./assets/images/projects/expohome/prj2.avif",
    ],
  },
  {
    id: 14,
    title: "Flormar",
    thumb: "./assets/images/projects/flormar/prj1.avif",
    images: [
      "./assets/images/projects/flormar/prj1.avif",
      "./assets/images/projects/flormar/prj2.avif",
    ],
  },
  {
    id: 15,
    title: "Kremlin",
    thumb: "./assets/images/projects/kremlin/prj1.avif",
    images: [
      "./assets/images/projects/kremlin/prj1.avif",
      "./assets/images/projects/kremlin/prj2.avif",
      "./assets/images/projects/kremlin/prj3.avif",
    ],
  },
  {
    id: 16,
    title: "Meridian",
    thumb: "./assets/images/projects/meridian/prj1.avif",
    images: [
      "./assets/images/projects/meridian/prj1.avif",
      "./assets/images/projects/meridian/prj2.avif",
      "./assets/images/projects/meridian/prj3.avif",
      "./assets/images/projects/meridian/prj4.avif",
      "./assets/images/projects/meridian/prj5.avif",
    ],
  },
  {
    id: 17,
    title: "Mini Mall",
    thumb: "./assets/images/projects/mini_mall/prj1.avif",
    images: [
      "./assets/images/projects/mini_mall/prj1.avif",
      "./assets/images/projects/mini_mall/prj2.avif",
    ],
  },
  {
    id: 18,
    title: "Modis",
    thumb: "./assets/images/projects/modis/prj1.avif",
    images: [
      "./assets/images/projects/modis/prj1.avif",
      "./assets/images/projects/modis/prj2.avif",
      "./assets/images/projects/modis/prj3.avif",
    ],
  },
  {
    id: 19,
    title: "Neftçilər Mall",
    thumb: "./assets/images/projects/neftchilar_mall/prj1.avif",
    images: [
      "./assets/images/projects/neftchilar_mall/prj1.avif",
      "./assets/images/projects/neftchilar_mall/prj2.avif",
      "./assets/images/projects/neftchilar_mall/prj3.avif",
    ],
  },
  {
    id: 20,
    title: "Şərq Bazarı",
    thumb: "./assets/images/projects/sherq_bazar/prj1.avif",
    images: [
      "./assets/images/projects/sherq_bazar/prj1.avif",
      "./assets/images/projects/sherq_bazar/prj2.avif",
      "./assets/images/projects/sherq_bazar/prj3.avif",
      "./assets/images/projects/sherq_bazar/prj4.avif",
      "./assets/images/projects/sherq_bazar/prj5.avif",
    ],
  },
  {
    id: 21,
    title: "VTB",
    thumb: "./assets/images/projects/vtb/prj1.avif",
    images: [
      "./assets/images/projects/vtb/prj1.avif",
      "./assets/images/projects/vtb/prj2.avif",
      "./assets/images/projects/vtb/prj3.avif",
    ],
  },
  {
    id: 22,
    title: "Xan Qızı",
    thumb: "./assets/images/projects/xan_qiz/prj1.avif",
    images: [
      "./assets/images/projects/xan_qiz/prj1.avif",
      "./assets/images/projects/xan_qiz/prj2.avif",
      "./assets/images/projects/xan_qiz/prj3.avif",
      "./assets/images/projects/xan_qiz/prj4.avif",
    ],
  },
];

export { projects };
