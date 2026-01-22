import { STATUS, SPECIES, POWER_TYPES, AFFILIATIONS } from './constants';

export const characters = [
  {
    id: 1,
    name: "Iron Sentinel",
    status: STATUS.ALIVE,
    species: SPECIES.HUMAN,
    origin: "Earth",
    location: "Stark Tower, New York",
    powerType: POWER_TYPES.TECH,
    powers: ["Genius Intelligence", "Powered Armor", "Energy Manipulation", "Flight"],
    affiliations: [AFFILIATIONS.AVENGERS, AFFILIATIONS.SHIELD],
    powerStats: {
      intelligence: 95,
      strength: 85,
      speed: 70,
      durability: 90,
      power: 88,
      combat: 75
    },
    image: "https://images.hdqwalls.com/download/the-legacy-of-iron-man-dc-480x854.jpg",
    bio: "Billionaire genius and inventor who built a high-tech suit of armor to protect the world from threats."
  },
  {
    id: 2,
    name: "Thunder God",
    status: STATUS.ALIVE,
    species: SPECIES.ASGARDIAN,
    origin: "Asgard",
    location: "New Asgard, Norway",
    powerType: POWER_TYPES.COSMIC,
    powers: ["Lightning Manipulation", "Godly Strength", "Weather Control", "Mjolnir Mastery"],
    affiliations: [AFFILIATIONS.AVENGERS],
    powerStats: {
      intelligence: 70,
      strength: 98,
      speed: 85,
      durability: 95,
      power: 99,
      combat: 90
    },
    image: "https://images.hdqwalls.com/wallpapers/thor-last-hope-xo.jpg",
    bio: "Prince of Asgard and wielder of Mjolnir, commanding the power of thunder and lightning."
  },
  {
    id: 3,
    name: "Shadow Widow",
    status: STATUS.DECEASED,
    species: SPECIES.ENHANCED_HUMAN,
    origin: "Russia",
    location: "Vormir (last known)",
    powerType: POWER_TYPES.TECH,
    powers: ["Espionage", "Martial Arts", "Enhanced Agility", "Tactical Genius"],
    affiliations: [AFFILIATIONS.AVENGERS, AFFILIATIONS.SHIELD],
    powerStats: {
      intelligence: 85,
      strength: 55,
      speed: 70,
      durability: 60,
      power: 45,
      combat: 95
    },
    image: "https://images.hdqwalls.com/download/black-widow-silent-vengeance-he-1440x900.jpg",
    bio: "Elite spy and assassin trained in the Red Room, a founding member of the Avengers."
  },
  {
    id: 4,
    name: "Gamma Beast",
    status: STATUS.ALIVE,
    species: SPECIES.MUTATED,
    origin: "Earth",
    location: "Mexico (wandering)",
    powerType: POWER_TYPES.MUTANT,
    powers: ["Super Strength", "Regeneration", "Gamma Radiation", "Thunderclap"],
    affiliations: [AFFILIATIONS.AVENGERS],
    powerStats: {
      intelligence: 88,
      strength: 100,
      speed: 60,
      durability: 100,
      power: 95,
      combat: 70
    },
    image: "https://images.hdqwalls.com/wallpapers/marvel-hulk-avenger-in-action-ch.jpg",
    bio: "Scientist transformed by gamma radiation into an unstoppable force of nature."
  },
  {
    id: 5,
    name: "Star Captain",
    status: STATUS.ALIVE,
    species: SPECIES.ENHANCED_HUMAN,
    origin: "Brooklyn, Earth",
    location: "New York",
    powerType: POWER_TYPES.TECH,
    powers: ["Enhanced Strength", "Leadership", "Tactical Mastery", "Shield Combat"],
    affiliations: [AFFILIATIONS.AVENGERS, AFFILIATIONS.SHIELD],
    powerStats: {
      intelligence: 80,
      strength: 75,
      speed: 65,
      durability: 80,
      power: 55,
      combat: 95
    },
    image: "https://images.hdqwalls.com/wallpapers/captain-america-lightning-strikes-mjolnir-rising-df.jpg",
    bio: "Super soldier from World War II, enhanced with the serum and wielding an indestructible shield."
  },
  {
    id: 6,
    name: "Mystic Supreme",
    status: STATUS.ALIVE,
    species: SPECIES.HUMAN,
    origin: "Earth",
    location: "Sanctum Sanctorum, New York",
    powerType: POWER_TYPES.MYSTIC,
    powers: ["Magic", "Time Manipulation", "Dimensional Travel", "Astral Projection"],
    affiliations: [AFFILIATIONS.AVENGERS],
    powerStats: {
      intelligence: 92,
      strength: 40,
      speed: 50,
      durability: 65,
      power: 98,
      combat: 75
    },
    image: "https://images.hdqwalls.com/wallpapers/professor-x-in-avengers-doomsday-dq.jpg",
    bio: "Master of the mystic arts and protector of Earth from supernatural threats."
  },
  {
    id: 7,
    name: "Web Phantom",
    status: STATUS.ALIVE,
    species: SPECIES.ENHANCED_HUMAN,
    origin: "Queens, Earth",
    location: "New York",
    powerType: POWER_TYPES.MUTANT,
    powers: ["Wall Crawling", "Spider Sense", "Enhanced Agility", "Web Shooting"],
    affiliations: [AFFILIATIONS.AVENGERS],
    powerStats: {
      intelligence: 85,
      strength: 70,
      speed: 80,
      durability: 70,
      power: 65,
      combat: 80
    },
    image: "https://images.hdqwalls.com/wallpapers/star-lord-powerful-gl.jpg",
    bio: "Teenager bitten by a radioactive spider, gaining incredible spider-like abilities."
  },
  {
    id: 8,
    name: "Scarlet Witch",
    status: STATUS.DECEASED,
    species: SPECIES.MUTANT,
    origin: "Sokovia",
    location: "Mount Wundagore (last known)",
    powerType: POWER_TYPES.MYSTIC,
    powers: ["Chaos Magic", "Reality Warping", "Telekinesis", "Mind Manipulation"],
    affiliations: [AFFILIATIONS.AVENGERS],
    powerStats: {
      intelligence: 82,
      strength: 45,
      speed: 55,
      durability: 70,
      power: 99,
      combat: 75
    },
    image: "https://images.hdqwalls.com/wallpapers/scarlet-witch-red-magic-rising-av.jpg",
    bio: "Wielder of chaos magic with reality-altering abilities, one of the most powerful beings."
  },
  {
    id: 9,
    name: "Vibranium Panther",
    status: STATUS.DECEASED,
    species: SPECIES.ENHANCED_HUMAN,
    origin: "Wakanda",
    location: "Wakanda",
    powerType: POWER_TYPES.TECH,
    powers: ["Enhanced Reflexes", "Vibranium Suit", "Tactical Genius", "Superhuman Senses"],
    affiliations: [AFFILIATIONS.AVENGERS],
    powerStats: {
      intelligence: 88,
      strength: 75,
      speed: 85,
      durability: 80,
      power: 70,
      combat: 95
    },
    image: "https://images.hdqwalls.com/wallpapers/black-panther-rises-01.jpg",
    bio: "King of Wakanda and protector wearing a suit made of vibranium, the strongest metal."
  },
  {
    id: 10,
    name: "Cosmic Archer",
    status: STATUS.ALIVE,
    species: SPECIES.HUMAN,
    origin: "Earth",
    location: "New York",
    powerType: POWER_TYPES.TECH,
    powers: ["Master Archery", "Tactical Combat", "Expert Marksman", "Acrobatics"],
    affiliations: [AFFILIATIONS.AVENGERS, AFFILIATIONS.SHIELD],
    powerStats: {
      intelligence: 75,
      strength: 50,
      speed: 65,
      durability: 55,
      power: 40,
      combat: 90
    },
    image: "https://images.hdqwalls.com/wallpapers/hawkeye-2022-2u.jpg",
    bio: "Master archer with perfect aim, a founding member of the Avengers."
  },
  {
    id: 11,
    name: "Ant Commander",
    status: STATUS.ALIVE,
    species: SPECIES.HUMAN,
    origin: "Earth",
    location: "San Francisco",
    powerType: POWER_TYPES.TECH,
    powers: ["Size Manipulation", "Quantum Travel", "Insect Communication", "Pym Particles"],
    affiliations: [AFFILIATIONS.AVENGERS],
    powerStats: {
      intelligence: 82,
      strength: 60,
      speed: 70,
      durability: 65,
      power: 75,
      combat: 70
    },
    image: "https://images.hdqwalls.com/wallpapers/the-antman-and-the-wasp-quantumania-5k-6s.jpg",
    bio: "Thief turned hero who can shrink to ant size or grow to giant proportions."
  },
  {
    id: 12,
    name: "Winter Operative",
    status: STATUS.ALIVE,
    species: SPECIES.ENHANCED_HUMAN,
    origin: "Russia",
    location: "Wakanda",
    powerType: POWER_TYPES.TECH,
    powers: ["Enhanced Strength", "Cybernetic Arm", "Expert Assassin", "Tactical Combat"],
    affiliations: [AFFILIATIONS.AVENGERS],
    powerStats: {
      intelligence: 72,
      strength: 80,
      speed: 75,
      durability: 85,
      power: 65,
      combat: 92
    },
    image: "https://images.hdqwalls.com/wallpapers/sebastian-stan-as-bucky-barnes-in-thunderbolts-movie-ko.jpg",
    bio: "Former brainwashed assassin with a cybernetic arm, now fighting for redemption."
  },
  {
    id: 13,
    name: "Vision Sentinel",
    status: STATUS.DECEASED,
    species: SPECIES.ANDROID,
    origin: "Earth (Created)",
    location: "Destroyed",
    powerType: POWER_TYPES.COSMIC,
    powers: ["Mind Stone", "Density Control", "Flight", "Energy Projection"],
    affiliations: [AFFILIATIONS.AVENGERS],
    powerStats: {
      intelligence: 95,
      strength: 85,
      speed: 80,
      durability: 90,
      power: 95,
      combat: 80
    },
    image: "https://images.hdqwalls.com/wallpapers/ultron-what-if-tv-series-4k-cn.jpg",
    bio: "Android powered by the Mind Stone with vast computational abilities and humanity."
  },
  {
    id: 14,
    name: "Star Guardian",
    status: STATUS.ALIVE,
    species: SPECIES.ALIEN,
    origin: "Xandar",
    location: "Space (traveling)",
    powerType: POWER_TYPES.COSMIC,
    powers: ["Element Guns", "Flight", "Enhanced Durability", "Leadership"],
    affiliations: [AFFILIATIONS.GUARDIANS],
    powerStats: {
      intelligence: 75,
      strength: 65,
      speed: 70,
      durability: 70,
      power: 60,
      combat: 85
    },
    image: "https://images.hdqwalls.com/wallpapers/doctor-strange-portal-walker-mx.jpg",
    bio: "Half-human, half-celestial outlaw who leads the Guardians of the Galaxy."
  },
  {
    id: 15,
    name: "Emerald Warrior",
    status: STATUS.ALIVE,
    species: SPECIES.ALIEN,
    origin: "Zen-Whoberi",
    location: "Space (traveling)",
    powerType: POWER_TYPES.MUTANT,
    powers: ["Enhanced Strength", "Master Assassin", "Regeneration", "Combat Skills"],
    affiliations: [AFFILIATIONS.GUARDIANS],
    powerStats: {
      intelligence: 70,
      strength: 80,
      speed: 75,
      durability: 75,
      power: 60,
      combat: 95
    },
    image: "https://images.hdqwalls.com/wallpapers/iron-man-vs-doctor-doom-titans-clash-m8.jpg",
    bio: "Deadly assassin raised by Thanos, now protecting the galaxy with the Guardians."
  }
];

export const getCharacterById = (id) => {
  return characters.find(char => char.id === parseInt(id));
};

export const getCharactersByIds = (ids) => {
  return characters.filter(char => ids.includes(char.id));
};