const Q1 = document.getElementById("Q1_text");
const Q2 = document.getElementById("Q2_text");
const submit = document.getElementById("submitbtn");
const answer_label = document.getElementById("answer_label");
let answer;

const elements = new Map([
  ["hydrogen", "H"],
  ["helium", "He"],
  ["lithium", "Li"],
  ["beryllium", "Be"],
  ["boron", "B"],
  ["carbon", "C"],
  ["nitrogen", "N"],
  ["oxygen", "O"],
  ["fluorine", "F"],
  ["neon", "Ne"],
  ["sodium", "Na"],
  ["magnesium", "Mg"],
  ["aluminum", "Al"],
  ["silicon", "Si"],
  ["phosphorus", "P"],
  ["sulfur", "S"],
  ["chlorine", "Cl"],
  ["argon", "Ar"],
  ["potassium", "K"],
  ["calcium", "Ca"],
  ["scandium", "Sc"],
  ["titanium", "Ti"],
  ["vanadium", "V"],
  ["chromium", "Cr"],
  ["manganese", "Mn"],
  ["iron", "Fe"],
  ["cobalt", "Co"],
  ["nickel", "Ni"],
  ["copper", "Cu"],
  ["zinc", "Zn"],
  ["gallium", "Ga"],
  ["germanium", "Ge"],
  ["arsenic", "As"],
  ["selenium", "Se"],
  ["bromine", "Br"],
  ["krypton", "Kr"],
  ["rubidium", "Rb"],
  ["strontium", "Sr"],
  ["yttrium", "Y"],
  ["zirconium", "Zr"],
  ["niobium", "Nb"],
  ["molybdenum", "Mo"],
  ["technetium", "Tc"],
  ["ruthenium", "Ru"],
  ["rhodium", "Rh"],
  ["palladium", "Pd"],
  ["silver", "Ag"],
  ["cadmium", "Cd"],
  ["indium", "In"],
  ["tin", "Sn"],
  ["antimony", "Sb"],
  ["tellurium", "Te"],
  ["iodine", "I"],
  ["xenon", "Xe"],
  ["cesium", "Cs"],
  ["barium", "Ba"],
  ["lanthanum", "La"],
  ["cerium", "Ce"],
  ["praseodymium", "Pr"],
  ["neodymium", "Nd"],
  ["promethium", "Pm"],
  ["samarium", "Sm"],
  ["europium", "Eu"],
  ["gadolinium", "Gd"],
  ["terbium", "Tb"],
  ["dysprosium", "Dy"],
  ["holmium", "Ho"],
  ["erbium", "Er"],
  ["thulium", "Tm"],
  ["ytterbium", "Yb"],
  ["lutetium", "Lu"],
  ["hafnium", "Hf"],
  ["tantalum", "Ta"],
  ["tungsten", "W"],
  ["rhenium", "Re"],
  ["osmium", "Os"],
  ["iridium", "Ir"],
  ["platinum", "Pt"],
  ["gold", "Au"],
  ["mercury", "Hg"],
  ["thallium", "Tl"],
  ["lead", "Pb"],
  ["bismuth", "Bi"],
  ["polonium", "Po"],
  ["astatine", "At"],
  ["radon", "Rn"],
  ["francium", "Fr"],
  ["radium", "Ra"],
  ["actinium", "Ac"],
  ["thorium", "Th"],
  ["protactinium", "Pa"],
  ["uranium", "U"],
  ["neptunium", "Np"],
  ["plutonium", "Pu"],
  ["americium", "Am"],
  ["curium", "Cm"],
  ["berkelium", "Bk"],
  ["californium", "Cf"],
  ["einsteinium", "Es"],
  ["fermium", "Fm"],
  ["mendelevium", "Md"],
  ["nobelium", "No"],
  ["lawrencium", "Lr"],
  ["rutherfordium", "Rf"],
  ["dubnium", "Db"],
  ["seaborgium", "Sg"],
  ["bohrium", "Bh"],
  ["hassium", "Hs"],
  ["meitnerium", "Mt"],
  ["darmstadtium", "Ds"],
  ["roentgenium", "Rg"],
  ["copernicium", "Cn"],
  ["nihonium", "Nh"],
  ["flerovium", "Fl"],
  ["moscovium", "Mc"],
  ["livermorium", "Lv"],
  ["tennessine", "Ts"],
  ["oganesson", "Og"],
  ["h", "Hydrogen"],
  ["he", "Helium"],
  ["li", "Lithium"],
  ["be", "Beryllium"],
  ["b", "Boron"],
  ["c", "Carbon"],
  ["n", "Nitrogen"],
  ["o", "Oxygen"],
  ["f", "Fluorine"],
  ["ne", "Neon"],
  ["na", "Sodium"],
  ["mg", "Magnesium"],
  ["al", "Aluminum"],
  ["si", "Silicon"],
  ["p", "Phosphorus"],
  ["s", "Sulfur"],
  ["cl", "Chlorine"],
  ["ar", "Argon"],
  ["k", "Potassium"],
  ["ca", "Calcium"],
  ["sc", "Scandium"],
  ["ti", "Titanium"],
  ["v", "Vanadium"],
  ["cr", "Chromium"],
  ["mn", "Manganese"],
  ["fe", "Iron"],
  ["co", "Cobalt"],
  ["ni", "Nickel"],
  ["cu", "Copper"],
  ["zn", "Zinc"],
  ["ga", "Gallium"],
  ["ge", "Germanium"],
  ["as", "Arsenic"],
  ["se", "Selenium"],
  ["br", "Bromine"],
  ["kr", "Krypton"],
  ["rb", "Rubidium"],
  ["sr", "Strontium"],
  ["y", "Yttrium"],
  ["zr", "Zirconium"],
  ["nb", "Niobium"],
  ["mo", "Molybdenum"],
  ["tc", "Technetium"],
  ["ru", "Ruthenium"],
  ["rh", "Rhodium"],
  ["pd", "Palladium"],
  ["ag", "Silver"],
  ["cd", "Cadmium"],
  ["in", "Indium"],
  ["sn", "Tin"],
  ["sb", "Antimony"],
  ["te", "Tellurium"],
  ["i", "Iodine"],
  ["xe", "Xenon"],
  ["cs", "Cesium"],
  ["ba", "Barium"],
  ["la", "Lanthanum"],
  ["ce", "Cerium"],
  ["pr", "Praseodymium"],
  ["nd", "Neodymium"],
  ["pm", "Promethium"],
  ["sm", "Samarium"],
  ["eu", "Europium"],
  ["gd", "Gadolinium"],
  ["tb", "Terbium"],
  ["dy", "Dysprosium"],
  ["ho", "Holmium"],
  ["er", "Erbium"],
  ["tm", "Thulium"],
  ["yb", "Ytterbium"],
  ["lu", "Lutetium"],
  ["hf", "Hafnium"],
  ["ta", "Tantalum"],
  ["w", "Tungsten"],
  ["re", "Rhenium"],
  ["os", "Osmium"],
  ["ir", "Iridium"],
  ["pt", "Platinum"],
  ["au", "Gold"],
  ["hg", "Mercury"],
  ["tl", "Thallium"],
  ["pb", "Lead"],
  ["bi", "Bismuth"],
  ["po", "Polonium"],
  ["at", "Astatine"],
  ["rn", "Radon"],
  ["fr", "Francium"],
  ["ra", "Radium"],
  ["ac", "Actinium"],
  ["th", "Thorium"],
  ["pa", "Protactinium"],
  ["u", "Uranium"],
  ["np", "Neptunium"],
  ["pu", "Plutonium"],
  ["am", "Americium"],
  ["cm", "Curium"],
  ["bk", "Berkelium"],
  ["cf", "Californium"],
  ["es", "Einsteinium"],
  ["fm", "Fermium"],
  ["md", "Mendelevium"],
  ["no", "Nobelium"],
  ["lr", "Lawrencium"],
  ["rf", "Rutherfordium"],
  ["db", "Dubnium"],
  ["sg", "Seaborgium"],
  ["bh", "Bohrium"],
  ["hs", "Hassium"],
  ["mt", "Meitnerium"],
  ["ds", "Darmstadtium"],
  ["rg", "Roentgenium"],
  ["cn", "Copernicium"],
  ["nh", "Nihonium"],
  ["fl", "Flerovium"],
  ["mc", "Moscovium"],
  ["lv", "Livermorium"],
  ["ts", "Tennessine"],
  ["og", "Oganesson"],
  ["water", "H2O"],
  ["alcohol", "C2H6O"],
  ["ethanol", "C2H6O"],
  ["glucose", "C6H12O6"],
  ["methane", "CH4"],
  ["carbon Dioxide", "CO2"],
  ["oxygen", "O2"],
  ["nitrogen", "N2"],
  ["ammonia", "NH3"],
  ["hydrogenperoxide", "H2O2"],
  ["aceticacid", "CH3COOH"],
  ["methanol", "CH3OH"],
  ["propane", "C3H8"],
  ["butane", "C4H10"],
  ["sulfuricacid", "H2SO4"],
  ["sodiumchloride", "NaCl"],
  ["dna", "C10H13N5O4"],
  ["chloroform", "CHCl3"],
  ["benzene", "C6H6"],
  ["aspirin", "C9H8O4"],
  ["caffeine", "C8H10N4O2"],
  ["methionine", "C5H11NO2S"],
  ["h2o", "Water"],
  ["c2h6o", "Alcohol"],
  ["c2h6o", "Ethanol"],
  ["c6h12o6", "Glucose"],
  ["ch4", "Methane"],
  ["co2", "Carbon Dioxide"],
  ["o2", "Oxygen"],
  ["n2", "Nitrogen"],
  ["nh3", "Ammonia"],
  ["h2o2", "Hydrogen Peroxide"],
  ["ch3cooh", "Acetic Acid"],
  ["ch3oh", "Methanol"],
  ["c3h8", "Propane"],
  ["c4h10", "Butane"],
  ["h2so4", "Sulfuric Acid"],
  ["nacl", "Sodium Chloride"],
  ["c10h13n5o4", "DNA"],
  ["chcl3", "Chloroform"],
  ["c6h6", "Benzene"],
  ["c9h8o4", "Aspirin"],
  ["c8h10n4o2", "Caffeine"],
  ["c5h11no2s", "Methionine"],
]);
const elements_weight = new Map([
  ["hydrogen", 1.008],
  ["helium", 4.0026],
  ["lithium", 6.94],
  ["beryllium", 9.0122],
  ["boron", 10.81],
  ["carbon", 12.011],
  ["nitrogen", 14.007],
  ["oxygen", 15.999],
  ["fluorine", 18.998],
  ["neon", 20.18],
  ["sodium", 22.99],
  ["magnesium", 24.305],
  ["aluminum", 26.982],
  ["silicon", 28.085],
  ["phosphorus", 30.974],
  ["sulfur", 32.06],
  ["chlorine", 35.45],
  ["argon", 39.948],
  ["potassium", 39.098],
  ["calcium", 40.078],
  ["scandium", 44.956],
  ["titanium", 47.867],
  ["vanadium", 50.942],
  ["chromium", 51.996],
  ["manganese", 54.938],
  ["iron", 55.845],
  ["cobalt", 58.933],
  ["nickel", 58.693],
  ["copper", 63.546],
  ["zinc", 65.38],
  ["gallium", 69.723],
  ["germanium", 72.63],
  ["arsenic", 74.922],
  ["selenium", 78.971],
  ["bromine", 79.904],
  ["krypton", 83.798],
  ["rubidium", 85.468],
  ["strontium", 87.62],
  ["yttrium", 88.906],
  ["zirconium", 91.224],
  ["niobium", 92.906],
  ["molybdenum", 95.95],
  ["technetium", 98.0],
  ["ruthenium", 101.07],
  ["rhodium", 102.91],
  ["palladium", 106.42],
  ["silver", 107.87],
  ["cadmium", 112.41],
  ["indium", 114.82],
  ["tin", 118.71],
  ["antimony", 121.76],
  ["tellurium", 127.6],
  ["iodine", 126.9],
  ["xenon", 131.29],
  ["cesium", 132.91],
  ["barium", 137.33],
  ["lanthanum", 138.91],
  ["cerium", 140.12],
  ["praseodymium", 140.91],
  ["neodymium", 144.24],
  ["promethium", 145.0],
  ["samarium", 150.36],
  ["europium", 151.96],
  ["gadolinium", 157.25],
  ["terbium", 158.93],
  ["dysprosium", 162.5],
  ["holmium", 164.93],
  ["erbium", 167.26],
  ["thulium", 168.93],
  ["ytterbium", 173.05],
  ["lutetium", 174.97],
  ["hafnium", 178.49],
  ["tantalum", 180.95],
  ["tungsten", 183.84],
  ["rhenium", 186.21],
  ["osmium", 190.23],
  ["iridium", 192.22],
  ["platinum", 195.08],
  ["gold", 196.97],
  ["mercury", 200.59],
  ["thallium", 204.38],
  ["lead", 207.2],
  ["bismuth", 208.98],
  ["polonium", 209.98],
  ["astatine", 210.0],
  ["radon", 222.0],
  ["francium", 223.0],
  ["radium", 226.0],
  ["actinium", 227.0],
  ["thorium", 232.04],
  ["protactinium", 231.04],
  ["uranium", 238.03],
  ["neptunium", 237.0],
  ["plutonium", 244.0],
  ["americium", 243.0],
  ["curium", 247.0],
  ["berkelium", 247.0],
  ["californium", 251.0],
  ["einsteinium", 252.0],
  ["fermium", 257.0],
  ["mendelevium", 258.0],
  ["nobelium", 259.0],
  ["lawrencium", 262.0],
  ["rutherfordium", 267.0],
  ["dubnium", 270.0],
  ["seaborgium", 271.0],
  ["bohrium", 270.0],
  ["hassium", 277.0],
  ["meitnerium", 276.0],
  ["darmstadtium", 281.0],
  ["roentgenium", 280.0],
  ["copernicium", 285.0],
  ["nihonium", 284.0],
  ["flerovium", 289.0],
  ["moscovium", 288.0],
  ["livermorium", 293.0],
  ["tennessine", 294.0],
  ["oganesson", 294.0],
  ["water", 18.01528],
  ["alcohol", 46.06844],
  ["ethanol", 46.06844],
  ["glucose", 180.1559],
  ["methane", 16.04],
  ["carbondioxide", 44.0095],
  ["oxygen", 31.9988],
  ["nitrogen", 28.0134],
  ["ammonia", 17.0305],
  ["hydrogenperoxide", 34.0147],
  ["aceticacid", 60.052],
  ["methanol", 32.04],
  ["propane", 44.0956],
  ["butane", 58.1222],
  ["sulfuric acid", 98.079],
  ["sodiumchloride", 58.443],
  ["dna", 331.2172],
  ["chloroform", 119.378],
  ["benzene", 78.1118],
  ["aspirin", 180.1574],
  ["caffeine", 194.1906],
  ["methionine", 149.211],
  ["serotonin", 176.215],
  ["adrenaline", 183.204],
  ["dopamine", 153.178],
  ["histamine", 111.145],
  ["insulin", 5808.65],
  ["melatonin", 232.278],
  ["testosterone", 288.429],
  ["estrogen", 272.388],
  ["progesterone", 314.464],
  ["h", 1.008],
  ["he", 4.0026],
  ["li", 6.94],
  ["be", 9.0122],
  ["b", 10.81],
  ["c", 12.011],
  ["n", 14.007],
  ["o", 15.999],
  ["f", 18.998],
  ["ne", 20.18],
  ["na", 22.99],
  ["mg", 24.305],
  ["al", 26.982],
  ["si", 28.085],
  ["p", 30.974],
  ["s", 32.06],
  ["cl", 35.45],
  ["ar", 39.948],
  ["k", 39.098],
  ["ca", 40.078],
  ["sc", 44.956],
  ["ti", 47.867],
  ["v", 50.942],
  ["cr", 51.996],
  ["mn", 54.938],
  ["fe", 55.845],
  ["co", 58.933],
  ["ni", 58.693],
  ["cu", 63.546],
  ["zn", 65.38],
  ["ga", 69.723],
  ["ge", 72.63],
  ["as", 74.922],
  ["se", 78.971],
  ["br", 79.904],
  ["kr", 83.798],
  ["rb", 85.468],
  ["sr", 87.62],
  ["y", 88.906],
  ["zr", 91.224],
  ["nb", 92.906],
  ["mo", 95.95],
  ["tc", 98.0],
  ["ru", 101.07],
  ["rh", 102.91],
  ["pd", 106.42],
  ["ag", 107.87],
  ["cd", 112.41],
  ["in", 114.82],
  ["sn", 118.71],
  ["sb", 121.76],
  ["te", 127.6],
  ["i", 126.9],
  ["xe", 131.29],
  ["cs", 132.91],
  ["ba", 137.33],
  ["la", 138.91],
  ["ce", 140.12],
  ["pr", 140.91],
  ["nd", 144.24],
  ["pm", 145.0],
  ["sm", 150.36],
  ["eu", 151.96],
  ["gd", 157.25],
  ["tb", 158.93],
  ["dy", 162.5],
  ["ho", 164.93],
  ["er", 167.26],
  ["tm", 168.93],
  ["yb", 173.05],
  ["lu", 174.97],
  ["hf", 178.49],
  ["ta", 180.95],
  ["w", 183.84],
  ["re", 186.21],
  ["os", 190.23],
  ["ir", 192.22],
  ["pt", 195.08],
  ["au", 196.97],
  ["hg", 200.59],
  ["tl", 204.38],
  ["pb", 207.2],
  ["bi", 208.98],
  ["po", 209.98],
  ["at", 210.0],
  ["rn", 222.0],
  ["fr", 223.0],
  ["ra", 226.0],
  ["ac", 227.0],
  ["th", 232.04],
  ["pa", 231.04],
  ["u", 238.03],
  ["np", 237.0],
  ["pu", 244.0],
  ["am", 243.0],
  ["cm", 247.0],
  ["bk", 247.0],
  ["cf", 251.0],
  ["es", 252.0],
  ["fm", 257.0],
  ["md", 258.0],
  ["no", 259.0],
  ["lr", 262.0],
  ["rf", 267.0],
  ["db", 270.0],
  ["sg", 271.0],
  ["bh", 270.0],
  ["hs", 277.0],
  ["mt", 276.0],
  ["ds", 281.0],
  ["rg", 280.0],
  ["cn", 285.0],
  ["nh", 284.0],
  ["fl", 289.0],
  ["mc", 288.0],
  ["lv", 293.0],
  ["ts", 294.0],
  ["og", 294.0],
  ["h2o", 18.01528], // water
  ["c2h5oh", 46.06844], // Alcohol (Ethanol)
  ["c2h6o", 46.06844], // Alcohol (Ethanol)
  ["c6h12o6", 180.1559], // Glucose
  ["ch4", 16.04], // Methane
  ["co2", 44.0095], // Carbon Dioxide
  ["o2", 31.9988], // Oxygen
  ["n2", 28.0134], // Nitrogen
  ["nh3", 17.0305], // Ammonia
  ["h2o2", 34.0147], // Hydrogen Peroxide
  ["c2h4o2", 60.052], // Acetic Acid
  ["ch3oh", 32.04], // Methanol
  ["c3h8", 44.0956], // Propane
  ["c4h10", 58.1222], // Butane
  ["h2so4", 98.079], // Sulfuric Acid
  ["nacl", 58.443], // Sodium Chloride (Salt)
  ["dna", 331.2172], // dna
  ["chcl3", 119.378], // Chloroform
  ["c6h6", 78.1118], // Benzene
  ["c9h8o4", 180.1574], // Aspirin
  ["c8h10n4o2", 194.1906], // Caffeine
  ["c5h11no2s", 149.211], // Methionine
  ["c10h12n2o", 176.215], // Serotonin
  ["c9h13no3", 183.204], // Adrenaline
  ["c8h11no2", 153.178], // Dopamine
  ["c5h9n3", 111.145], // Histamine
  ["c254h377n65o75s6", 5808.65], // Insulin
  ["c13h16n2o2", 232.278], // Melatonin
  ["c19h28o2", 288.429], // Testosterone
  ["c18h24o2", 272.388], // Estrogen
  ["c21h30o2", 314.464], // Progesterone
]);
const elements_number = new Map([
  ["hydrogen", 1],
  ["helium", 2],
  ["lithium", 3],
  ["beryllium", 4],
  ["boron", 5],
  ["carbon", 6],
  ["nitrogen", 7],
  ["oxygen", 8],
  ["fluorine", 9],
  ["neon", 10],
  ["sodium", 11],
  ["magnesium", 12],
  ["aluminum", 13],
  ["silicon", 14],
  ["phosphorus", 15],
  ["sulfur", 16],
  ["chlorine", 17],
  ["argon", 18],
  ["potassium", 19],
  ["calcium", 20],
  ["scandium", 21],
  ["titanium", 22],
  ["vanadium", 23],
  ["chromium", 24],
  ["manganese", 25],
  ["iron", 26],
  ["cobalt", 27],
  ["nickel", 28],
  ["copper", 29],
  ["zinc", 30],
  ["gallium", 31],
  ["germanium", 32],
  ["arsenic", 33],
  ["selenium", 34],
  ["bromine", 35],
  ["krypton", 36],
  ["rubidium", 37],
  ["strontium", 38],
  ["yttrium", 39],
  ["zirconium", 40],
  ["niobium", 41],
  ["molybdenum", 42],
  ["technetium", 43],
  ["ruthenium", 44],
  ["rhodium", 45],
  ["palladium", 46],
  ["silver", 47],
  ["cadmium", 48],
  ["indium", 49],
  ["tin", 50],
  ["antimony", 51],
  ["tellurium", 52],
  ["iodine", 53],
  ["xenon", 54],
  ["cesium", 55],
  ["barium", 56],
  ["lanthanum", 57],
  ["cerium", 58],
  ["praseodymium", 59],
  ["neodymium", 60],
  ["promethium", 61],
  ["samarium", 62],
  ["europium", 63],
  ["gadolinium", 64],
  ["terbium", 65],
  ["dysprosium", 66],
  ["holmium", 67],
  ["erbium", 68],
  ["thulium", 69],
  ["ytterbium", 70],
  ["lutetium", 71],
  ["hafnium", 72],
  ["tantalum", 73],
  ["tungsten", 74],
  ["rhenium", 75],
  ["osmium", 76],
  ["iridium", 77],
  ["platinum", 78],
  ["gold", 79],
  ["mercury", 80],
  ["thallium", 81],
  ["lead", 82],
  ["bismuth", 83],
  ["polonium", 84],
  ["astatine", 85],
  ["radon", 86],
  ["francium", 87],
  ["radium", 88],
  ["actinium", 89],
  ["thorium", 90],
  ["protactinium", 91],
  ["uranium", 92],
  ["neptunium", 93],
  ["plutonium", 94],
  ["americium", 95],
  ["curium", 96],
  ["berkelium", 97],
  ["californium", 98],
  ["einsteinium", 99],
  ["fermium", 100],
  ["mendelevium", 101],
  ["nobelium", 102],
  ["lawrencium", 103],
  ["rutherfordium", 104],
  ["dubnium", 105],
  ["seaborgium", 106],
  ["bohrium", 107],
  ["hassium", 108],
  ["meitnerium", 109],
  ["darmstadtium", 110],
  ["roentgenium", 111],
  ["copernicium", 112],
  ["nihonium", 113],
  ["flerovium", 114],
  ["moscovium", 115],
  ["livermorium", 116],
  ["tennessine", 117],
  ["oganesson", 118],
  ["h", 1],
  ["he", 2],
  ["li", 3],
  ["be", 4],
  ["b", 5],
  ["c", 6],
  ["n", 7],
  ["o", 8],
  ["f", 9],
  ["ne", 10],
  ["na", 11],
  ["mg", 12],
  ["al", 13],
  ["si", 14],
  ["p", 15],
  ["s", 16],
  ["cl", 17],
  ["ar", 18],
  ["k", 19],
  ["ca", 20],
  ["sc", 21],
  ["ti", 22],
  ["v", 23],
  ["cr", 24],
  ["mn", 25],
  ["fe", 26],
  ["co", 27],
  ["ni", 28],
  ["cu", 29],
  ["zn", 30],
  ["ga", 31],
  ["ge", 32],
  ["as", 33],
  ["se", 34],
  ["br", 35],
  ["kr", 36],
  ["rb", 37],
  ["sr", 38],
  ["y", 39],
  ["zr", 40],
  ["nb", 41],
  ["mo", 42],
  ["tc", 43],
  ["ru", 44],
  ["rh", 45],
  ["pd", 46],
  ["ag", 47],
  ["cd", 48],
  ["in", 49],
  ["sn", 50],
  ["sb", 51],
  ["te", 52],
  ["i", 53],
  ["xe", 54],
  ["cs", 55],
  ["ba", 56],
  ["la", 57],
  ["ce", 58],
  ["pr", 59],
  ["nd", 60],
  ["pm", 61],
  ["sm", 62],
  ["eu", 63],
  ["gd", 64],
  ["tb", 65],
  ["dy", 66],
  ["ho", 67],
  ["er", 68],
  ["tm", 69],
  ["yb", 70],
  ["lu", 71],
  ["hf", 72],
  ["ta", 73],
  ["w", 74],
  ["re", 75],
  ["os", 76],
  ["ir", 77],
  ["pt", 78],
  ["au", 79],
  ["hg", 80],
  ["tl", 81],
  ["pb", 82],
  ["bi", 83],
  ["po", 84],
  ["at", 85],
  ["rn", 86],
  ["fr", 87],
  ["ra", 88],
  ["ac", 89],
  ["th", 90],
  ["pa", 91],
  ["u", 92],
  ["np", 93],
  ["pu", 94],
  ["am", 95],
  ["cm", 96],
  ["bk", 97],
  ["cf", 98],
  ["es", 99],
  ["fm", 100],
  ["md", 101],
  ["no", 102],
  ["lr", 103],
  ["rf", 104],
  ["db", 105],
  ["sg", 106],
  ["bh", 107],
  ["hs", 108],
  ["mt", 109],
  ["ds", 110],
  ["rg", 111],
  ["cn", 112],
  ["nh", 113],
  ["fl", 114],
  ["mc", 115],
  ["lv", 116],
  ["ts", 117],
  ["og", 118],
]);


submit.onclick = function(event){
  event.preventDefault();
  let Q1_value = Q1.value.toLowerCase().replace(/\s/g, '');
  let Q2_value = Q2.value;

  
  if (Q2_value === "Molecular formula/name") {
    answer = elements.get(Q1_value);
    document.getElementById("answer_label").textContent = answer;
  } 
  
  if (Q2_value === "Weight") {
    answer = elements_weight.get(Q1_value);
    document.getElementById("answer_label").textContent = `${answer} u`;
  } 
  
  if (Q2_value === "Atomic Number") {
    console.log(Q2.value)
    answer = elements_number.get(Q1_value);
    console.log(answer)
    document.getElementById("answer_label").textContent = `Z = ${answer}`;
  } 
  
 if (answer != undefined) {
localStorage.setItem("_answer_", answer)
localStorage.setItem("_type_", Q2_value)
localStorage.setItem("_value_", Q1_value)
 }
  };


if (performance.navigation.type === 1) {
  if (localStorage.getItem("_answer_") !== null) {
    const lastAnswer = localStorage.getItem("_answer_");
    const lastType = localStorage.getItem("_type_");
    const lastValue = localStorage.getItem("_value_");

    
    const lastValue_upper = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

    if (lastType === "Molecular formula/name") {
      answer_label.textContent = `Last answer: ${lastValue_upper(lastValue)} = ${lastAnswer}`;
    }
    if (lastType === "Weight") {
      answer_label.textContent = `Last answer: ${lastValue_upper(lastValue)} = ${lastAnswer} u`;
    }
    if (lastType === "Atomic Number") {
      answer_label.textContent = `Last answer: ${lastValue_upper(lastValue)} = ${lastAnswer} (Z)`;
    } 
  }
}



  function validateTextInput(event) {
    const input = event.target;
    const inputValue = input.value;
    const regex = /^[a-zA-Z\s]*$/;

  
    if (!regex.test(inputValue)) {
      input.value = inputValue.replace(/\d/g, '');
    }
  }