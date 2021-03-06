const products = [
  {
    name: "The Pop Shoppe - Root Beer",
    image: "/images/demo/mvmt-d-mr01-blus-nam-1-400x400.jpg",
    description: "Replacement of R Axilla Vein with Synth Sub, Open Approach",
    brand: "Arnica Betula A",
    category: "RUB",
    price: "806.65",  
    sale: false,
    priceCompare: "937.91",
    countInStock: 1,
    rating: 2.2,
    numReviews: 494,
    promotions: [
      {
        name: "Reposition Right Metacarpocarpal Joint, Open Approach",
        detail: "Other open fractures of distal end of radius (alone)",
      },
      {
        name: "HDR Brachytherapy of Prostate using Californium 252",
        detail:
          "Other complications of anesthesia or other sedation in labor and delivery, delivered, with mention of postpartum complication",
      },
      {
        name: "Resection of Left Adrenal Gland, Open Approach",
        detail: "Microtia",
      },
    ],
    colors: [
      {
        name: "Red",
        value: "#bc65e1",
      },
      {
        name: "Turquoise",
        value: "#dd1dbd",
      },
      {
        name: "Green",
        value: "#1de1ec",
      },
    ],
  },
  {
    name: "Spinach - Spinach Leaf",
    image: "/images/demo/aviator-avw6971g352-nam-1-1-400x400.jpg",
    description: "Excision of Ant Neck Subcu/Fascia, Open Approach, Diagn",
    brand: "Heartburn Relief 24 hour",
    category: "RWF",
    price: "308.12",
    sale: false,
    priceCompare: "473.26",
    countInStock: 2,
    rating: 4.2,
    numReviews: 984,
    promotions: [
      {
        name: "Introduction of Anti-inflam into Periph Vein, Open Approach",
        detail:
          "Obstetrical blood-clot embolism, postpartum condition or complication",
      },
      {
        name: "Revision of Synthetic Substitute in Up Back, Open Approach",
        detail: "Bcg vaccine causing adverse effects in therapeutic use",
      },
      {
        name: "Alteration of Male Perineum with Nonaut Sub, Open Approach",
        detail: "Narcissistic personality disorder",
      },
      {
        name: "Extirpation of Matter from Bilateral Breast, Extern Approach",
        detail:
          "Osteoarthrosis, unspecified whether generalized or localized, site unspecified",
      },
      {
        name: "Bypass 1 Cor Art from R Int Mammary, Open Approach",
        detail:
          "Unspecified non-arthropod-borne viral diseases of central nervous system",
      },
    ],
    colors: [
      {
        name: "Green",
        value: "#2e415a",
      },
      {
        name: "Maroon",
        value: "#2bf7df",
      },
      {
        name: "Yellow",
        value: "#851e64",
      },
      {
        name: "Pink",
        value: "#2a542c",
      },
    ],
  },
  {
    name: "Wine - Spumante Bambino White",
    image: "/images/demo/kenneth-cole-kc50982003-nam-avatar-1-400x400.jpg",
    description: "Insertion of Spacer into R Sacroiliac Jt, Open Approach",
    brand: "Neutrogena Men Sensitive Skin Oil Free Moisture",
    category: "ZMW",
    price: "699.15",
    sale: false,
    priceCompare: "767.66",
    countInStock: 3,
    rating: 3.4,
    numReviews: 308,
    promotions: [
      {
        name: "Plain Radiography of Spinal Cord",
        detail: "Gingival recession, minimal",
      },
      {
        name: "Dilate Mid Colic Art, Bifurc, w 3 Drug-elut, Perc Endo",
        detail: "Umbilical hemorrhage after birth",
      },
    ],
    colors: [
      {
        name: "Purple",
        value: "#3a67e6",
      },
      {
        name: "Khaki",
        value: "#876e09",
      },
      {
        name: "Turquoise",
        value: "#30fbea",
      },
      {
        name: "Aquamarine",
        value: "#30da7c",
      },
    ],
  },
  {
    name: "Pork Loin Cutlets",
    image: "/images/demo/michael-kors-mk3203-vang-hong-0-400x400.jpg",
    description: "Repair Duodenum, Percutaneous Endoscopic Approach",
    brand: "CVS PHARMACY",
    category: "CNY",
    price: "220.93",
    sale: false,
    priceCompare: "345.70",
    countInStock: 4,
    rating: 1.8,
    numReviews: 902,
    promotions: [
      {
        name: "Restriction of Left Renal Artery, Perc Endo Approach",
        detail: "Pigmentary iris degeneration",
      },
      {
        name: "Supplement Right Frontal Bone with Autol Sub, Open Approach",
        detail: "Anisocoria",
      },
      {
        name: "LDR Brachytherapy of Thyroid using Iridium 192",
        detail: "Postvaricella encephalitis",
      },
      {
        name: "Fragmentation in Lingula Bronchus, Percutaneous Approach",
        detail: "Arthropod-borne disease, unspecified",
      },
    ],
    colors: [
      {
        name: "Mauv",
        value: "#5566a3",
      },
      {
        name: "Goldenrod",
        value: "#eed85d",
      },
    ],
  },
  {
    name: "Nut - Pistachio, Shelled",
    image: "/images/demo/orient-ra-ag0003s10b-nam-co-tu-dong-2-400x400.jpg",
    description: "Occlusion of Right Pulmonary Vein, Percutaneous Approach",
    brand: "Diltiazem HydrochlorideExtended Release",
    category: "PLN",
    price: "405.94",
    sale: false,
    priceCompare: "510.91",
    countInStock: 5,
    rating: 3.8,
    numReviews: 921,
    promotions: [
      {
        name: "Drainage of Hypoglossal Nerve, Percutaneous Approach",
        detail: "Malignant neoplasm of eye, part unspecified",
      },
      {
        name: "Bypass Splenic Artery to Right Renal Artery, Open Approach",
        detail: "Dysphagia, oropharyngeal phase",
      },
    ],
    colors: [
      {
        name: "Puce",
        value: "#96118d",
      },
      {
        name: "Orange",
        value: "#57b2b0",
      },
    ],
  },
  {
    name: "Cod - Salted, Boneless",
    image: "/images/demo/mathey-tissot-h411bpi-nam-1-400x400.jpg",
    description: "CT Scan of Liver & Spleen using Oth Contrast",
    brand: "Lancome Paris Bienfait MultiVital Broad Spectrum SPF 30 Sunscreen",
    category: "RUB",
    price: "373.72",
    sale: false,
    priceCompare: "458.22",
    countInStock: 6,
    rating: 4.2,
    numReviews: 193,
    promotions: [
      {
        name: "Supplement L Thorax Tendon w Nonaut Sub, Perc Endo",
        detail:
          "Amphetamine or related acting sympathomimetic abuse, in remission",
      },
    ],
    colors: [
      {
        name: "Khaki",
        value: "#1872f6",
      },
      {
        name: "Red",
        value: "#2a0000",
      },
    ],
  },
  {
    name: "Bowl 12 Oz - Showcase 92012",
    image: "/images/demo/edifice-casio-ef-334d-7avudf-bac-7-400x400.jpg",
    description: "Chiropractic Manipulation of Abdomen, Other Method",
    brand: "One Seed Juniper",
    category: "NOK",
    price: "837.25",
    sale: false,
    priceCompare: "999.90",
    countInStock: 7,
    rating: 3.3,
    numReviews: 701,
    promotions: [
      {
        name: "Reposition Right Subclavian Artery, Perc Endo Approach",
        detail: "Unspecified monoarthritis, ankle and foot",
      },
      {
        name: "Revision of Extraluminal Device in Up Intest Tract, Endo",
        detail: "Malignant neoplasm of prepuce",
      },
      {
        name: "Revision of Monitoring Device in Upper Vein, Extern Approach",
        detail: "Alcohol abuse, unspecified",
      },
      {
        name: "Hyperthermia of Tongue",
        detail: "Absence of ear lobe, congenital",
      },
      {
        name: "Revision of Synth Sub in Up Intest Tract, Via Opening",
        detail: "Contact dermatitis and other eczema due to solvents",
      },
    ],
    colors: [
      {
        name: "Green",
        value: "#edb8f2",
      },
      {
        name: "Orange",
        value: "#21d677",
      },
      {
        name: "Aquamarine",
        value: "#47f9e4",
      },
    ],
  },
  {
    name: "Bread - Bagels, Plain",
    image: "/images/demo/orient-fal00002b0-nam-0-400x400.jpg",
    description: "Extirpation of Matter from Thor Disc, Perc Approach",
    brand: "Doxycycline Hyclate",
    category: "PHP",
    price: "930.31",
    sale: true,
    priceCompare: "980.87",
    countInStock: 8,
    rating: 1.9,
    numReviews: 512,
    promotions: [
      {
        name: "Repair Thoracic Duct, Percutaneous Approach",
        detail: "Allergic arthritis, upper arm",
      },
      {
        name: "Excision of Left Kidney Pelvis, Perc Endo Approach, Diagn",
        detail: "Injury to deep plantar blood vessels",
      },
    ],
    colors: [
      {
        name: "Pink",
        value: "#74aa8d",
      },
      {
        name: "Turquoise",
        value: "#23d655",
      },
      {
        name: "Goldenrod",
        value: "#ae8a12",
      },
    ],
  },
  {
    name: "Parsley - Dried",
    image: "/images/demo/larmes-lm-tf004-ot49g-211-4nb-nam-1-400x400.jpg",
    description: "Drainage of Left Ureter, Perc Endo Approach, Diagn",
    brand: "BEBULIN",
    category: "SEK",
    price: "578.81",
    sale: false,
    priceCompare: "646.81",
    countInStock: 9,
    rating: 1.6,
    numReviews: 117,
    promotions: [
      {
        name: "Reposition Cervical Vertebral Joint, Perc Endo Approach",
        detail: "Opportunistic mycoses",
      },
      {
        name: "Destruction of Left Foot Tendon, Perc Endo Approach",
        detail: "Chondritis of pinna",
      },
      {
        name: "Bypass R Com Iliac Art to Abd Aorta w Nonaut Sub, Perc Endo",
        detail: "Toxic effect of unspecified alcohol",
      },
    ],
    colors: [
      {
        name: "Yellow",
        value: "#468488",
      },
      {
        name: "Green",
        value: "#6c25c9",
      },
      {
        name: "Fuscia",
        value: "#4c0746",
      },
    ],
  },
  {
    name: "Cream - 10%",
    image: "/images/demo/baby-g-bga-250-7a2dr-trang-5-400x400.jpg",
    description: "Bypass R Vas Deferens to R Epidid w Autol Sub, Perc Endo",
    brand: "IASO Triple Protection BB SPF 30 PA",
    category: "IQD",
    price: "783.83",
    sale: true,
    priceCompare: "872.86",
    countInStock: 10,
    rating: 1.1,
    numReviews: 819,
    promotions: [
      {
        name: "Revision of Intraluminal Device in Pancreas, Extern Approach",
        detail: "Unspecified paranoid state",
      },
      {
        name: "Revision of Extralum Dev in Vas Deferens, Extern Approach",
        detail:
          "Abrasion or friction burn of shoulder and upper arm, without mention of infection",
      },
      {
        name: "Supplement R Com Carotid with Synth Sub, Perc Endo Approach",
        detail: "Paranoid personality disorder",
      },
      {
        name: "Revision of Nonaut Sub in Lumsac Disc, Open Approach",
        detail: "Carbuncle and furuncle of upper arm and forearm",
      },
    ],
    colors: [
      {
        name: "Indigo",
        value: "#b3d838",
      },
      {
        name: "Puce",
        value: "#4fd03e",
      },
      {
        name: "Pink",
        value: "#b98760",
      },
      {
        name: "Fuscia",
        value: "#c5b556",
      },
    ],
  },
  // {
  //   name: "Lentils - Green, Dry",
  //   image: "/images/demo/phone.jpg",
  //   description: "Division of Right Upper Arm Muscle, Perc Endo Approach",
  //   brand: "Coppertone KIDS",
  //   category: "PHP",
  //   price: "962.71",
  //   sale: false,
  //   priceCompare: "980.23",
  //   countInStock: 11,
  //   rating: 2.1,
  //   numReviews: 184,
  //   promotions: [
  //     {
  //       name: "Repair L Low Extrem Bursa/Lig, Perc Approach",
  //       detail: "Vivax malaria [benign tertian]",
  //     },
  //     {
  //       name: "Dressing of Left Lower Leg using Bandage",
  //       detail:
  //         "Accidents involving powered vehicles used solely within the buildings and premises of industrial or commercial establishment",
  //     },
  //     {
  //       name: "Introduction of Low dose IL-2 into Periph Art, Perc Approach",
  //       detail:
  //         "Closed fracture of unspecified vertebral column with spinal cord injury",
  //     },
  //     {
  //       name: "Replacement of R Vocal Cord with Synth Sub, Open Approach",
  //       detail: "Cyclosporiasis",
  //     },
  //   ],
  //   colors: [
  //     {
  //       name: "Khaki",
  //       value: "#4f04b1",
  //     },
  //     {
  //       name: "Puce",
  //       value: "#183d94",
  //     },
  //     {
  //       name: "Puce",
  //       value: "#49288e",
  //     },
  //   ],
  // },
  // {
  //   name: "Bread - Raisin Walnut Oval",
  //   image: "/images/demo/playstation.jpg",
  //   description: "Repair Left Hypogastric Vein, Open Approach",
  //   brand: "Pure Transformation Sheer Medium",
  //   category: "PHP",
  //   price: "104.00",
  //   sale: true,
  //   priceCompare: "240.86",
  //   countInStock: 12,
  //   rating: 3.1,
  //   numReviews: 870,
  //   promotions: [
  //     {
  //       name: "Removal of Radioactive Element from Upper Jaw, Open Approach",
  //       detail: "Toxic effect of cadmium and its compounds",
  //     },
  //     {
  //       name: "Restriction of Left Large Intestine, Via Opening",
  //       detail: "Hypertrophy of kidney",
  //     },
  //     {
  //       name: "LDR Brachytherapy of Abd Lymph using Californium 252",
  //       detail:
  //         "Tuberculous abscess of spinal cord, tubercle bacilli not found by bacteriological examination, but tuberculosis confirmed histologically",
  //     },
  //   ],
  //   colors: [
  //     {
  //       name: "Khaki",
  //       value: "#6b8df9",
  //     },
  //     {
  //       name: "Purple",
  //       value: "#a9d9d5",
  //     },
  //     {
  //       name: "Red",
  //       value: "#302b71",
  //     },
  //     {
  //       name: "Khaki",
  //       value: "#f5185d",
  //     },
  //   ],
  // },
  // {
  //   name: "Oyster - In Shell",
  //   image: "/images/demo/airpods.jpg",
  //   description: "Revision of Synth Sub in L Scapula, Extern Approach",
  //   brand: "Antiseptic",
  //   category: "XAF",
  //   price: "428.74",
  //   sale: true,
  //   priceCompare: "589.04",
  //   countInStock: 13,
  //   rating: 2.6,
  //   numReviews: 491,
  //   promotions: [
  //     {
  //       name: "Repair Right Sublingual Gland, Percutaneous Approach",
  //       detail: "Myocardial degeneration",
  //     },
  //     {
  //       name: "Urinary System, Change",
  //       detail: "Outcome of delivery, unspecified outcome of delivery",
  //     },
  //   ],
  //   colors: [
  //     {
  //       name: "Orange",
  //       value: "#25af74",
  //     },
  //     {
  //       name: "Khaki",
  //       value: "#1fa3e3",
  //     },
  //   ],
  // },
  // {
  //   name: "Sauce - Cranberry",
  //   image: "/images/demo/alexa.jpg",
  //   description: "Destruction of Rectum, Via Natural or Artificial Opening",
  //   brand: "Oily SK Specific Solutions",
  //   category: "CNY",
  //   price: "719.82",
  //   sale: true,
  //   priceCompare: "860.03",
  //   countInStock: 14,
  //   rating: 4.8,
  //   numReviews: 53,
  //   promotions: [
  //     {
  //       name: "Resection of Bilateral Fallopian Tubes, Perc Endo Approach",
  //       detail:
  //         "Bone and joint disorders of back, pelvis, and lower limbs of mother, unspecified as to episode of care or not applicable",
  //     },
  //     {
  //       name: "Drainage of R Subclav Art with Drain Dev, Open Approach",
  //       detail:
  //         "Infection with microorganisms with resistance to multiple drugs",
  //     },
  //   ],
  //   colors: [
  //     {
  //       name: "Goldenrod",
  //       value: "#d5dbba",
  //     },
  //     {
  //       name: "Crimson",
  //       value: "#5f13d5",
  //     },
  //     {
  //       name: "Crimson",
  //       value: "#8e54e9",
  //     },
  //   ],
  // },
  // {
  //   name: "Macaroons - Homestyle Two Bit",
  //   image: "/images/demo/airpods.jpg",
  //   description: "Destruction of Left Eustachian Tube, Perc Endo Approach",
  //   brand: "TRAZODONE HYDROCHLORIDE",
  //   category: "CNY",
  //   price: "751.06",
  //   sale: false,
  //   priceCompare: "849.40",
  //   countInStock: 15,
  //   rating: 2.7,
  //   numReviews: 968,
  //   promotions: [
  //     {
  //       name: "Insertion of Stimulator Lead into Up Muscle, Perc Approach",
  //       detail: "Latent nystagmus",
  //     },
  //     {
  //       name: "Supplement Left Thorax Muscle with Nonaut Sub, Open Approach",
  //       detail: "Malignant neoplasm of other parts of bronchus or lung",
  //     },
  //   ],
  //   colors: [
  //     {
  //       name: "Blue",
  //       value: "#f445ed",
  //     },
  //     {
  //       name: "Purple",
  //       value: "#5bde48",
  //     },
  //   ],
  // },
  // {
  //   name: "Cake Sheet Combo Party Pack",
  //   image: "/images/demo/camera.jpg",
  //   description: "Excision of Carina, Via Natural or Artificial Opening, Diagn",
  //   brand: "Trokendi XR",
  //   category: "KGS",
  //   price: "840.12",
  //   sale: false,
  //   priceCompare: "989.84",
  //   countInStock: 16,
  //   rating: 3,
  //   numReviews: 164,
  //   promotions: [
  //     {
  //       name: "Fluoroscopy of Left Renal Artery using Low Osmolar Contrast",
  //       detail:
  //         "Other joint derangement, not elsewhere classified, other specified sites",
  //     },
  //     {
  //       name: "Supplement L Int Iliac Art w Nonaut Sub, Perc Endo",
  //       detail:
  //         "Unspecified abortion, complicated by genital tract and pelvic infection, complete",
  //     },
  //     {
  //       name: "Occlusion Cystic Duct w Extralum Dev, Perc Endo",
  //       detail:
  //         "Open fracture of intracapsular section of neck of femur, unspecified",
  //     },
  //   ],
  //   colors: [
  //     {
  //       name: "Purple",
  //       value: "#c3fc66",
  //     },
  //   ],
  // },
  // {
  //   name: "Cheese - Pied De Vents",
  //   image: "/images/demo/mouse.jpg",
  //   description: "Introduction of Autol Pancr Islet into Bil/Panc Tract, Endo",
  //   brand: "Tretin-X",
  //   category: "BRL",
  //   price: "128.75",
  //   sale: false,
  //   priceCompare: "255.75",
  //   countInStock: 17,
  //   rating: 3.2,
  //   numReviews: 838,
  //   promotions: [
  //     {
  //       name: "Insertion of Infusion Dev into Pericard Cav, Perc Approach",
  //       detail:
  //         "Traumatic amputation of arm and hand (complete) (partial), unilateral, below elbow, without mention of complication",
  //     },
  //   ],
  //   colors: [
  //     {
  //       name: "Maroon",
  //       value: "#fdbe62",
  //     },
  //     {
  //       name: "Yellow",
  //       value: "#e52c24",
  //     },
  //     {
  //       name: "Mauv",
  //       value: "#1befbf",
  //     },
  //     {
  //       name: "Violet",
  //       value: "#803820",
  //     },
  //   ],
  // },
  // {
  //   name: "Wasabi Powder",
  //   image: "/images/demo/phone.jpg",
  //   description: "Drainage of Right Popliteal Artery, Perc Endo Approach",
  //   brand: "PISTACHIO",
  //   category: "EUR",
  //   price: "597.28",
  //   sale: true,
  //   priceCompare: "628.42",
  //   countInStock: 18,
  //   rating: 1.8,
  //   numReviews: 70,
  //   promotions: [
  //     {
  //       name: "Drainage of Spinal Canal, Open Approach",
  //       detail: "Amphetamine and other psychostimulant dependence, episodic",
  //     },
  //     {
  //       name: "Excision of Male Perineum, External Approach",
  //       detail: "Adjustment disorder with depressed mood",
  //     },
  //     {
  //       name: "Revision of Synth Sub in R Wrist Jt, Open Approach",
  //       detail: "Other seborrheic keratosis",
  //     },
  //     {
  //       name: "Tomo Nucl Med Imag of Pelvic Region using Iodine 131",
  //       detail: "Open fracture of cervical vertebra, unspecified level",
  //     },
  //     {
  //       name: "Therapeutic Exercise Treatment of Circ Body using Orthosis",
  //       detail: "Foot amputation status",
  //     },
  //   ],
  //   colors: [
  //     {
  //       name: "Aquamarine",
  //       value: "#42ab3c",
  //     },
  //     {
  //       name: "Indigo",
  //       value: "#35ee75",
  //     },
  //     {
  //       name: "Teal",
  //       value: "#90060a",
  //     },
  //     {
  //       name: "Red",
  //       value: "#d103d0",
  //     },
  //   ],
  // },
  // {
  //   name: "Bread Crumbs - Panko",
  //   image: "/images/demo/playstation.jpg",
  //   description: "Bypass Bladder to Cutaneous, Perc Endo Approach",
  //   brand: "CareOne Cold and Cough",
  //   category: "RUB",
  //   price: "123.48",
  //   sale: false,
  //   priceCompare: "231.41",
  //   countInStock: 19,
  //   rating: 1.6,
  //   numReviews: 985,
  //   promotions: [
  //     {
  //       name: "Occlusion of Left Ulnar Artery, Open Approach",
  //       detail: "Screening for malignant neoplasms of rectum",
  //     },
  //   ],
  //   colors: [
  //     {
  //       name: "Yellow",
  //       value: "#af3503",
  //     },
  //   ],
  // },
  // {
  //   name: "Trueblue - Blueberry Cranberry",
  //   image: "/images/demo/airpods.jpg",
  //   description: "Destruction of Superior Mesenteric Vein, Perc Approach",
  //   brand: "Day Time Cold and Flu Relief",
  //   category: "BRL",
  //   price: "973.01",
  //   sale: false,
  //   priceCompare: "986.21",
  //   countInStock: 20,
  //   rating: 4.5,
  //   numReviews: 997,
  //   promotions: [
  //     {
  //       name: "Dilation of Left Basilic Vein, Perc Endo Approach",
  //       detail:
  //         "Subdural hemorrhage following injury with open intracranial wound, with prolonged [more than 24 hours] loss of consciousness without return to pre-existing conscious level",
  //     },
  //     {
  //       name: "Removal of Nonaut Sub from Thor Vertebra, Open Approach",
  //       detail:
  //         "Other motor vehicle traffic accident involving collision with motor vehicle injuring unspecified person",
  //     },
  //     {
  //       name: "Supplement Left Ulnar Artery with Nonaut Sub, Open Approach",
  //       detail: "Accidental fall from or out of building or other structure",
  //     },
  //     {
  //       name: "Supplement Chest Wall with Autol Sub, Open Approach",
  //       detail: "Urgency of urination",
  //     },
  //     {
  //       name: "Inspection of Lower Tendon, Open Approach",
  //       detail: "Blisters, epidermal loss [second degree] of forearm",
  //     },
  //   ],
  //   colors: [
  //     {
  //       name: "Maroon",
  //       value: "#358440",
  //     },
  //     {
  //       name: "Fuscia",
  //       value: "#c87ca5",
  //     },
  //   ],
  // },
];
export default products;
