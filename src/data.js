// import img1 from "./images/casadeconchita.jpeg";
// import img2 from "./images/frontnew.jpeg";
// import img3 from "./images/miramar.jpeg";
// import img4 from "./images/parking.jpeg";

// import img5 from "./images/portal.jpg";
// import img6 from "./images/portal1.jpeg";
// import img7 from "./images/portal2.jpeg";
// import img8 from "./images/portal3.jpeg";
// import img9 from "./images/portal4.jpeg";
// import img10 from "./images/portal5.jpeg";
// import img11 from "./images/tarjeta.jpeg";
// import img12 from "./images/vedado.jpeg";

// import room1 from "./images/redroom.jpeg";
// import room2 from "./images/cuartoazul1.jpeg";
// import room3 from "./images/cuartoazul2.jpeg";
// import room4 from "./images/cuartoazul3.jpeg";

// import casita from "./images/latest pics/casita.JPG";
// import casita1 from "./images/latest pics/casita1.JPG";
// import casita2 from "./images/latest pics/casita2.JPG";

// import cuartoAzul1 from "./images/latest pics/cuarto azul 1.JPG";
import cuartoAzul2 from "./images/latest pics/cuarto azul 2 NEW.JPG";
// import cuartoAzul3 from "./images/latest pics/cuarto azul 3.JPG";

// import banoAzul from "./images/latest pics/bano azul.JPG";

// import casita5 from "./images/latest pics/casita 5 NEW.JPG";
// import casitaFront from "./images/latest pics/casita front.JPG";
// import casitaPortal from "./images/latest pics/Casita Portal.JPG";
// import casitaPortal2 from "./images/latest pics/Casita portal2.JPG";
// import casitaSala from "./images/latest pics/Casita Sala.JPG";
import casitaNew from "./images/latest pics/casita NEW8.JPG";

import cuartoBlanco from "./images/latest pics/cuarto blanco NEW2.JPG";

import final1blue from "./images/latest pics/finalpics/Blue room v1.1.png";
import final2casita from "./images/latest pics/finalpics/la casita v1.2.png";
import final3white from "./images/latest pics/finalpics/White room v1.1.png";

export default [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "La Casita",
      slug: "la-casita",
      type: "single",
      price: 50,
      size: 29,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: true,
      description:
        "Centrally located, not far from Havana, in the tranquil coastal area of Miramar, the B&B style casa particular ‘Alquiler de Conchita & Alex' offers private rooms in family Gispert's house. The front terrace offers shade to sip a sour daiquiri or sweet piña colada with a hint of sun. La Casita is the intimate detached house with own entrance, sunny terrasse and a kitchen lounge with couches. The house has a comfortable double bed, modern furnishings and the refrigerator is stocked with soft drinks. You will have a  private bathroom with towels. You have the option to add daily breakfast to your stay, as well as home-made lunch and dinner from ‘paladar’ upon requests, with a day’s notice.",
      extras: [
        "Non-smoking rooms",
        "Private entrance",
        "Double beds",
        "Private bathroom with shower",
        "Air condition",
        "Refrigerator with refreshments",
        "Terrace",
        "Possibilities for home-cooked meals",
        "Short distance to Old Havana",
        "Not far from airport",
      ],
      images: [
        {
          fields: {
            file: {
              url: casitaNew,
            },
          },
        },
        {
          fields: {
            file: {
              url: final2casita,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "Blue Room",
      slug: "cuarto-azul",
      type: "single",
      price: 40,
      size: 15,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: true,
      description:
        "Centrally located, not far from Havana, in the tranquil coastal area of Miramar, the B&B style casa particular ‘Alquiler de Conchita & Alex’ offers private rooms in family Gispert's house. The front terrace offers shade to sip a sour daiquiri or sweet piña colada in the sun. The Blue Room has its own entrance, comfortable double beds and modern furnishings. A refrigerator with soft drinks and a private bathroom with towels is provided. You have the option to add daily breakfast to your stay, as well as home-made lunch and dinner from ‘paladar’ upon requests, with a day’s notice.",
      extras: [
        "Non-smoking rooms",
        "Private entrance",
        "Double beds",
        "Private bathroom with shower",
        "Air condition",
        "Refrigerator with refreshments",
        "Terrace",
        "Possibilities for home-cooked meals",
        "Short distance to Old Havana",
        "Not far from airport",
      ],
      images: [
        {
          fields: {
            file: {
              url: cuartoAzul2,
            },
          },
        },
        {
          fields: {
            file: {
              url: final1blue,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "White Room",
      slug: "cuarto-blanco",
      type: "single",
      price: 40,
      size: 16,
      capacity: 2,
      pets: true,
      breakfast: false,
      featured: true,
      description:
        "Centrally located, not far from Havana, in the tranquil coastal area of Miramar, the B&B style casa particular ‘Alquiler de Conchita & Alex’ offers private rooms in family Gispert's house. The front terrace offers shade to sip a sour daiquiri or sweet piña colada in the sun. The white room has decor that gives a feel of the 'old Havana'. You will have your own entrance and nice colonial style windows, comfortable double beds and modern furnishings. A refrigerator with soft drinks and a large private bathroom with towels is provided. You have the option to add daily breakfast to your stay, as well as home-made lunch and dinner from ‘paladar’ upon requests, with a day’s notice.",
      extras: [
        "Non-smoking rooms",
        "Private entrance",
        "Double beds",
        "Private bathroom with shower",
        "Air condition",
        "Refrigerator with refreshments",
        "Terrace",
        "Possibilities for home-cooked meals",
        "Short distance to Old Havana",
        "Not far from airport",
      ],
      images: [
        {
          fields: {
            file: {
              url: cuartoBlanco,
            },
          },
        },

        {
          fields: {
            file: {
              url: final3white,
            },
          },
        },
      ],
    },
  },
  // {
  //   sys: {
  //     id: "4",
  //   },
  //   fields: {
  //     name: "single deluxe",
  //     slug: "single-deluxe",
  //     type: "single",
  //     price: 300,
  //     size: 400,
  //     capacity: 1,
  //     pets: true,
  //     breakfast: true,
  //     featured: false,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img4,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   sys: {
  //     id: "5",
  //   },
  //   fields: {
  //     name: "double economy",
  //     slug: "double-economy",
  //     type: "double",
  //     price: 200,
  //     size: 300,
  //     capacity: 2,
  //     pets: false,
  //     breakfast: false,
  //     featured: false,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img5,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   sys: {
  //     id: "6",
  //   },
  //   fields: {
  //     name: "double basic",
  //     slug: "double-basic",
  //     type: "double",
  //     price: 250,
  //     size: 350,
  //     capacity: 2,
  //     pets: false,
  //     breakfast: false,
  //     featured: false,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img6,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   sys: {
  //     id: "7",
  //   },
  //   fields: {
  //     name: "double standard",
  //     slug: "double-standard",
  //     type: "double",
  //     price: 300,
  //     size: 400,
  //     capacity: 2,
  //     pets: true,
  //     breakfast: false,
  //     featured: false,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img7,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   sys: {
  //     id: "8",
  //   },
  //   fields: {
  //     name: "double deluxe",
  //     slug: "double-deluxe",
  //     type: "double",
  //     price: 40,
  //     size: 500,
  //     capacity: 2,
  //     pets: true,
  //     breakfast: true,
  //     featured: true,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img8,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   sys: {
  //     id: "9",
  //   },
  //   fields: {
  //     name: "family economy",
  //     slug: "family-economy",
  //     type: "family",
  //     price: 300,
  //     size: 500,
  //     capacity: 3,
  //     pets: false,
  //     breakfast: false,
  //     featured: false,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img9,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   sys: {
  //     id: "10",
  //   },
  //   fields: {
  //     name: "family basic",
  //     slug: "family-basic",
  //     type: "family",
  //     price: 350,
  //     size: 550,
  //     capacity: 4,
  //     pets: false,
  //     breakfast: false,
  //     featured: false,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img10,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   sys: {
  //     id: "11",
  //   },
  //   fields: {
  //     name: "family standard",
  //     slug: "family-standard",
  //     type: "family",
  //     price: 400,
  //     size: 600,
  //     capacity: 5,
  //     pets: true,
  //     breakfast: false,
  //     featured: false,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img11,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   sys: {
  //     id: "12",
  //   },
  //   fields: {
  //     name: "family deluxe",
  //     slug: "family-deluxe",
  //     type: "family",
  //     price: 40,
  //     size: 700,
  //     capacity: 6,
  //     pets: true,
  //     breakfast: true,
  //     featured: true,
  //     description:
  //       "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
  //     extras: [
  //       "Plush pillows and breathable bed linens",
  //       "Soft, oversized bath towels",
  //       "Full-sized, pH-balanced toiletries",
  //       "Complimentary refreshments",
  //       "Adequate safety/security",
  //       "Internet",
  //       "Comfortable beds",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: img12,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
  // {
  //   sys: {
  //     id: "13",
  //   },
  //   fields: {
  //     name: "presidential",
  //     slug: "presidential-room",
  //     type: "presidential",
  //     price: 40,
  //     size: 20,
  //     capacity: 2,
  //     pets: true,
  //     breakfast: true,
  //     featured: true,
  //     description:
  //       "Centrally located, not far from Havana, in the tranquil coastal area of Miramar, the B&B style casa particular ‘Alquiler de Conchita’ offers private rooms in Gispert's house. The front terrace offers shade to sip a sour daiquiri or sweet piña colada in the sun. Each of the rooms has its own entrance and features nice colonial style windows, comfortable double beds and modern furnishings. A refrigerator with soft drinks and a private bathroom with towels is provided. You have the option to add daily breakfast to your stay, as well as home-made lunch and dinner from ‘paladar’ upon requests, with a day’s notice.",
  //     extras: [
  //       "Non-smoking rooms",
  //       "Private entrance",
  //       "Double beds",
  //       "Private bathroom with shower",
  //       "Air condition",
  //       "Refrigerator with refreshments",
  //       "Terrace",
  //       "Possibilities for home-cooked meals",
  //       "Short distance to Old Havana",
  //       "Not far from airport",
  //     ],
  //     images: [
  //       {
  //         fields: {
  //           file: {
  //             url: room1,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room2,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room3,
  //           },
  //         },
  //       },
  //       {
  //         fields: {
  //           file: {
  //             url: room4,
  //           },
  //         },
  //       },
  //     ],
  //   },
  // },
];
