import { Pokemon, Tag } from "@/types/Pokemon";

const pokemons: Array<Pokemon> = [
  {
    name: "Venusaur",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/venusaur/roster/roster-venusaur.png",
      big: "https://unite.pokemon.com/images/pokemon/venusaur/roster/roster-venusaur-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/venusaur/stat/stat-venusaur.png",
    },
    active: true,
    battleType: 1,
    stats: {
      offense: 4.5,
      endurance: 2,
      mobility: 2,
      scoring: 2.5,
      support: 1,
    },
    tags: [Tag.ATTACKER, Tag.RANGED],
    difficulty: 2,
  },
  {
    name: "Charizard",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/charizard/roster/roster-charizard.png",
      big: "https://unite.pokemon.com/images/pokemon/charizard/roster/roster-charizard-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/charizard/stat/stat-charizard.png",
    },
    active: true,
    battleType: 3,
    stats: {
      offense: 3.5,
      endurance: 3,
      mobility: 2.5,
      scoring: 3,
      support: 0.5,
    },
    difficulty: 1,
    tags: [Tag.ALLROUNDER, Tag.MELEE],
  },
  {
    name: "Blastoise",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/blastoise/roster/roster-blastoise.png",
      big: "https://unite.pokemon.com/images/pokemon/blastoise/roster/roster-blastoise-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/blastoise/stat/stat-blastoise.png",
    },
    active: true,
    battleType: 4,
    tags: [Tag.DEFENDER, Tag.RANGED],
    difficulty: 2,
    stats: {
      offense: 2,
      endurance: 3.5,
      mobility: 2,
      scoring: 2,
      support: 3,
    },
  },
  {
    name: "Pikachu",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/pikachu/roster/roster-pikachu.png",
      big: "https://unite.pokemon.com/images/pokemon/pikachu/roster/roster-pikachu-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/pikachu/stat/stat-pikachu.png",
    },
    active: true,
    battleType: 1,
    stats: {
      offense: 4.5,
      endurance: 1.5,
      mobility: 2.5,
      scoring: 2,
      support: 1.5,
    },
    tags: [Tag.ATTACKER, Tag.RANGED],
    difficulty: 1,
  },
  {
    name: "Clefable",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/clefable/roster/roster-clefable.png",
      big: "https://unite.pokemon.com/images/pokemon/clefable/roster/roster-clefable-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/clefable/stat/stat-clefable.png",
    },
    active: true,
    battleType: 5,
    stats: {
      offense: 2,
      endurance: 3,
      mobility: 1.5,
      scoring: 1.5,
      support: 4.5,
    },
    tags: [Tag.SUPPORTER, Tag.MELEE],
    difficulty: 1,
  },
  {
    name: "Alolan Ninetales",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/alolan-ninetales/roster/roster-alolan-ninetales.png",
      big: "https://unite.pokemon.com/images/pokemon/alolan-ninetales/roster/roster-alolan-ninetales-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/alolan-ninetales/stat/stat-alolan-ninetales.png",
    },
    active: true,
    battleType: 1,
    stats: {
      offense: 4,
      endurance: 1.5,
      mobility: 1.5,
      scoring: 2.5,
      support: 3,
    },
    tags: [Tag.ATTACKER, Tag.RANGED],
    difficulty: 2,
  },
  {
    name: "Wigglytuff",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/wigglytuff/roster/roster-wigglytuff.png",
      big: "https://unite.pokemon.com/images/pokemon/wigglytuff/roster/roster-wigglytuff-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/wigglytuff/stat/stat-wigglytuff.png",
    },
    active: true,
    battleType: 5,
    stats: {
      offense: 1,
      endurance: 2.5,
      mobility: 2.5,
      scoring: 2,
      support: 4.5,
    },
    tags: [Tag.SUPPORTER, Tag.RANGED],
    difficulty: 2,
  },
  {
    name: "Machamp",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/machamp/roster/roster-machamp.png",
      big: "https://unite.pokemon.com/images/pokemon/machamp/roster/roster-machamp-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/machamp/stat/stat-machamp.png",
    },
    active: true,
    battleType: 3,
    stats: {
      offense: 4,
      endurance: 2.5,
      mobility: 2.5,
      scoring: 2.5,
      support: 1,
    },
    tags: [Tag.ALLROUNDER, Tag.MELEE],
    difficulty: 2,
  },
  {
    name: "Slowbro",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/slowbro/roster/roster-slowbro.png",
      big: "https://unite.pokemon.com/images/pokemon/slowbro/roster/roster-slowbro-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/slowbro/stat/stat-slowbro.png",
    },
    active: true,
    battleType: 4,
    stats: {
      offense: 1.5,
      endurance: 4,
      mobility: 1.5,
      scoring: 1.5,
      support: 4,
    },
    tags: [Tag.DEFENDER, Tag.RANGED],
    difficulty: 2,
  },
  {
    name: "Dodrio",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/dodrio/roster/roster-dodrio.png",
      big: "https://unite.pokemon.com/images/pokemon/dodrio/roster/roster-dodrio-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/dodrio/stat/stat-dodrio.png",
    },
    active: true,
    battleType: 2,
    stats: {
      offense: 3,
      endurance: 2,
      mobility: 4,
      scoring: 4,
      support: 0.5,
    },
    tags: [Tag.SPEEDSTER, Tag.MELEE],
    difficulty: 3,
  },
  {
    name: "Gengar",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/gengar/roster/roster-gengar.png",
      big: "https://unite.pokemon.com/images/pokemon/gengar/roster/roster-gengar-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/gengar/stat/stat-gengar.png",
    },
    active: true,
    battleType: 2,
    stats: {
      offense: 3.5,
      endurance: 2,
      mobility: 4,
      scoring: 3,
      support: 0.5,
    },
    tags: [Tag.SPEEDSTER, Tag.MELEE],
    difficulty: 3,
  },
  {
    name: "Blissey",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/blissey/roster/roster-blissey.png",
      big: "https://unite.pokemon.com/images/pokemon/blissey/roster/roster-blissey-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/blissey/stat/stat-blissey.png",
    },
    active: true,
    battleType: 5,
    stats: {
      offense: 1,
      endurance: 3.5,
      mobility: 1.5,
      scoring: 1.5,
      support: 4.5,
    },
    tags: [Tag.SUPPORTER, Tag.MELEE],
    difficulty: 1,
  },
  {
    name: "Mr. Mime",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/mr-mime/roster/roster-mr-mime.png",
      big: "https://unite.pokemon.com/images/pokemon/mr-mime/roster/roster-mr-mime-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/mr.mime/stat/stat-mr.mime.png",
    },
    active: true,
    battleType: 5,
  },
  {
    name: "Scizor",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/scizor/roster/roster-scizor.png",
      big: "https://unite.pokemon.com/images/pokemon/scizor/roster/roster-scizor-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/scizor/stat/stat-scizor.png",
    },
    active: true,
    battleType: 3,
    stats: {
      offense: 4.5,
      endurance: 2.5,
      mobility: 4.5,
      scoring: 2.5,
      support: 1,
    },
    tags: [Tag.ALLROUNDER, Tag.MELEE],
    difficulty: 2,
  },
  {
    name: "Lapras",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/lapras/roster/roster-lapras.png",
      big: "https://unite.pokemon.com/images/pokemon/lapras/roster/roster-lapras-2x.png",
    },
    active: true,
    tags: [Tag.DEFENDER, Tag.RANGED],
    difficulty: 2,
    battleType: 4,
    stats: {
      offense: 3,
      endurance: 3.5,
      mobility: 2,
      scoring: 2,
      support: 3,
    },
  },
  {
    name: "Snorlax",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/snorlax/roster/roster-snorlax.png",
      big: "https://unite.pokemon.com/images/pokemon/snorlax/roster/roster-snorlax-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/snorlax/stat/stat-snorlax.png",
    },
    active: true,
    battleType: 4,
    stats: {
      offense: 1.5,
      endurance: 5,
      mobility: 2,
      scoring: 1.5,
      support: 2.5,
    },
    tags: [Tag.DEFENDER, Tag.MELEE],
    difficulty: 1,
  },
  {
    name: "Dragonite",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/dragonite/roster/roster-dragonite.png",
      big: "https://unite.pokemon.com/images/pokemon/dragonite/roster/roster-dragonite-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/dragonite/stat/stat-dragonite.png",
    },
    active: true,
    battleType: 3,
    stats: {
      offense: 4,
      endurance: 2.5,
      mobility: 2.5,
      scoring: 3,
      support: 0.5,
    },
    tags: [Tag.ALLROUNDER, Tag.MELEE],
    difficulty: 1,
  },
  {
    name: "Mew",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/mew/roster/roster-mew.png",
      big: "https://unite.pokemon.com/images/pokemon/mew/roster/roster-mew-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/mew/stat/stat-mew.png",
    },
    active: true,
    battleType: 1,
    stats: {
      offense: 4,
      endurance: 2,
      mobility: 3,
      scoring: 2,
      support: 3,
    },
    tags: [Tag.ATTACKER, Tag.RANGED],
    difficulty: 1,
  },
  {
    name: "Azumarill",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/azumarill/roster/roster-azumarill.png",
      big: "https://unite.pokemon.com/images/pokemon/azumarill/roster/roster-azumarill-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/azumarill/stat/stat-azumarill.png",
    },
    active: true,
    battleType: 3,
    stats: {
      offense: 3,
      endurance: 3,
      mobility: 2.5,
      scoring: 2.5,
      support: 0.5,
    },
    tags: [Tag.ALLROUNDER, Tag.MELEE],
    difficulty: 1,
  },
  {
    name: "Espeon",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/espeon/roster/roster-espeon.png",
      big: "https://unite.pokemon.com/images/pokemon/espeon/roster/roster-espeon-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/espeon/stat/stat-espeon.png",
    },
    active: true,
    battleType: 1,
    stats: {
      offense: 4,
      endurance: 2,
      mobility: 1.5,
      scoring: 2,
      support: 3,
    },
    tags: [Tag.ATTACKER, Tag.RANGED],
    difficulty: 1,
  },
  {
    name: "Umbreon",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/umbreon/roster/roster-umbreon.png",
      big: "https://unite.pokemon.com/images/pokemon/umbreon/roster/roster-umbreon-2x.png",
    },
    active: false,
  },
  {
    name: "Mamoswine",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/mamoswine/roster/roster-mamoswine.png",
      big: "https://unite.pokemon.com/images/pokemon/mamoswine/roster/roster-mamoswine-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/mamoswine/stat/stat-mamoswine.png",
    },
    active: true,
    battleType: 4,
    stats: {
      offense: 2.5,
      endurance: 4,
      mobility: 2,
      scoring: 1.5,
      support: 2.5,
    },
    tags: [Tag.DEFENDER, Tag.MELEE],
    difficulty: 2,
  },
  {
    name: "Tyranitar",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/tyranitar/roster/roster-tyranitar.png",
      big: "https://unite.pokemon.com/images/pokemon/tyranitar/roster/roster-tyranitar-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/tyranitar/stat/stat-tyranitar.png",
    },
    active: true,
    battleType: 3,
    stats: {
      offense: 4,
      endurance: 4,
      mobility: 2,
      scoring: 1.5,
      support: 1,
    },
    tags: [Tag.ALLROUNDER, Tag.MELEE],
    difficulty: 2,
  },
  {
    name: "Gardevoir",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/gardevoir/roster/roster-gardevoir.png",
      big: "https://unite.pokemon.com/images/pokemon/gardevoir/roster/roster-gardevoir-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/gardevoir/stat/stat-gardevoir.png",
    },
    active: true,
    battleType: 1,
    stats: {
      offense: 4.5,
      endurance: 1.5,
      mobility: 1.5,
      scoring: 3,
      support: 1.5,
    },
    tags: [Tag.ATTACKER, Tag.RANGED],
    difficulty: 2,
  },
  {
    name: "Sableye",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/sableye/roster/roster-sableye.png",
      big: "https://unite.pokemon.com/images/pokemon/sableye/roster/roster-sableye-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/sableye/stat/stat-sableye.png",
    },
    active: true,
    battleType: 5,
    stats: {
      offense: 1,
      endurance: 2.5,
      mobility: 2.5,
      scoring: 3.5,
      support: 3.5,
    },
    tags: [Tag.SUPPORTER, Tag.MELEE],
    difficulty: 2,
  },
  {
    name: "Absol",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/absol/roster/roster-absol.png",
      big: "https://unite.pokemon.com/images/pokemon/absol/roster/roster-absol-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/absol/stat/stat-absol.png",
    },
    active: true,
    battleType: 2,
    stats: {
      offense: 3.5,
      endurance: 2,
      mobility: 4,
      scoring: 2.5,
      support: 0.5,
    },
    tags: [Tag.SPEEDSTER, Tag.MELEE],
    difficulty: 3,
  },
  {
    name: "Garchomp",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/garchomp/roster/roster-garchomp.png",
      big: "https://unite.pokemon.com/images/pokemon/garchomp/roster/roster-garchomp-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/garchomp/stat/stat-garchomp.png",
    },
    active: true,
    battleType: 3,
    stats: {
      offense: 3.5,
      endurance: 3.5,
      mobility: 2.5,
      scoring: 2.5,
      support: 0.5,
    },
    tags: [Tag.ALLROUNDER, Tag.MELEE],
    difficulty: 2,
  },
  {
    name: "Lucario",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/lucario/roster/roster-lucario.png",
      big: "https://unite.pokemon.com/images/pokemon/lucario/roster/roster-lucario-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/lucario/stat/stat-lucario.png",
    },
    active: true,
    battleType: 3,
    stats: {
      offense: 3,
      endurance: 2.5,
      mobility: 3.5,
      scoring: 3,
      support: 0.5,
    },
    tags: [Tag.ALLROUNDER, Tag.MELEE],
    difficulty: 3,
  },
  {
    name: "Glaceon",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/glaceon/roster/roster-glaceon.png",
      big: "https://unite.pokemon.com/images/pokemon/glaceon/roster/roster-glaceon-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/glaceon/stat/stat-glaceon.png",
    },
    active: true,
    battleType: 1,
    stats: {
      offense: 4,
      endurance: 2,
      mobility: 3,
      scoring: 1,
      support: 0.5,
    },
    tags: [Tag.ATTACKER, Tag.RANGED],
    difficulty: 2,
  },
  {
    name: "Crustle",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/crustle/roster/roster-crustle.png",
      big: "https://unite.pokemon.com/images/pokemon/crustle/roster/roster-crustle-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/crustle/stat/stat-crustle.png",
    },
    active: true,
    battleType: 4,
    stats: {
      offense: 1.5,
      endurance: 4,
      mobility: 1.5,
      scoring: 2,
      support: 3,
    },
    tags: [Tag.DEFENDER, Tag.MELEE],
    difficulty: 1,
  },
  {
    name: "Zoroark",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/zoroark/roster/roster-zoroark.png",
      big: "https://unite.pokemon.com/images/pokemon/zoroark/roster/roster-zoroark-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/zoroark/stat/stat-zoroark.png",
    },
    active: true,
    battleType: 2,
    stats: {
      offense: 3.5,
      endurance: 1.5,
      mobility: 4,
      scoring: 2,
      support: 0.5,
    },
    tags: [Tag.SPEEDSTER, Tag.MELEE],
    difficulty: 3,
  },
  {
    name: "Chandelure",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/chandelure/roster/roster-chandelure.png",
      big: "https://unite.pokemon.com/images/pokemon/chandelure/roster/roster-chandelure-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/chandelure/stat/stat-chandelure.png",
    },
    active: true,
    battleType: 1,
    stats: {
      offense: 5,
      endurance: 1,
      mobility: 1,
      scoring: 2,
      support: 3,
    },
    tags: [Tag.ATTACKER, Tag.RANGED],
    difficulty: 1,
  },
  {
    name: "Delphox",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/delphox/roster/roster-delphox.png",
      big: "https://unite.pokemon.com/images/pokemon/delphox/roster/roster-delphox-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/delphox/stat/stat-delphox.png",
    },
    active: true,
    battleType: 1,
    stats: {
      offense: 4,
      endurance: 1.5,
      mobility: 3,
      scoring: 2.5,
      support: 0.5,
    },
    tags: [Tag.ATTACKER, Tag.RANGED],
    difficulty: 1,
  },
  {
    name: "Greninja",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/greninja/roster/roster-greninja.png",
      big: "https://unite.pokemon.com/images/pokemon/greninja/roster/roster-greninja-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/greninja/stat/stat-greninja.png",
    },
    active: true,
    battleType: 1,
    stats: {
      offense: 4,
      endurance: 2,
      mobility: 3,
      scoring: 3,
      support: 0.5,
    },
    tags: [Tag.ATTACKER, Tag.RANGED],
    difficulty: 3,
  },
  {
    name: "Talonflame",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/talonflame/roster/roster-talonflame.png",
      big: "https://unite.pokemon.com/images/pokemon/talonflame/roster/roster-talonflame-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/talonflame/stat/stat-talonflame.png",
    },
    active: true,
    battleType: 2,
    stats: {
      offense: 2.5,
      endurance: 1.5,
      mobility: 5,
      scoring: 3.5,
      support: 0.5,
    },
    tags: [Tag.SPEEDSTER, Tag.MELEE],
    difficulty: 1,
  },
  {
    name: "Aegislash",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/aegislash/roster/roster-aegislash.png",
      big: "https://unite.pokemon.com/images/pokemon/aegislash/roster/roster-aegislash-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/aegislash/stat/stat-aegislash.png",
    },
    active: true,
    battleType: 3,
    stats: {
      offense: 3.5,
      endurance: 2,
      mobility: 4,
      scoring: 2.5,
      support: 0.5,
    },
    tags: [Tag.ALLROUNDER, Tag.MELEE],
    difficulty: 3,
  },
  {
    name: "Sylveon",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/sylveon/roster/roster-sylveon.png",
      big: "https://unite.pokemon.com/images/pokemon/sylveon/roster/roster-sylveon-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/sylveon/stat/stat-sylveon.png",
    },
    active: true,
    battleType: 1,
    stats: {
      offense: 3.5,
      endurance: 1.5,
      mobility: 1.5,
      scoring: 3.5,
      support: 3.5,
    },
    tags: [Tag.ATTACKER, Tag.RANGED],
    difficulty: 2,
  },
  {
    name: "Goodra",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/goodra/roster/roster-goodra.png",
      big: "https://unite.pokemon.com/images/pokemon/goodra/roster/roster-goodra-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/goodra/stat/stat-goodra.png",
    },
    active: true,
    battleType: 4,
    stats: {
      offense: 2.5,
      endurance: 4,
      mobility: 2.5,
      scoring: 2.5,
      support: 2,
    },
    tags: [Tag.DEFENDER, Tag.MELEE],
    difficulty: 2,
  },
  {
    name: "Trevenant",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/trevenant/roster/roster-trevenant.png",
      big: "https://unite.pokemon.com/images/pokemon/trevenant/roster/roster-trevenant-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/trevenant/stat/stat-trevenant.png",
    },
    active: true,
    battleType: 4,
    stats: {
      offense: 2,
      endurance: 4,
      mobility: 2,
      scoring: 2.5,
      support: 2.5,
    },
    tags: [Tag.DEFENDER, Tag.MELEE],
    difficulty: 2,
  },
  {
    name: "Hoopa",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/hoopa/roster/roster-hoopa.png",
      big: "https://unite.pokemon.com/images/pokemon/hoopa/roster/roster-hoopa-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/hoopa/stat/stat-hoopa.png",
    },
    active: true,
    battleType: 5,
    stats: {
      offense: 3,
      endurance: 2,
      mobility: 3,
      scoring: 2,
      support: 3.5,
    },
    tags: [Tag.SUPPORTER, Tag.RANGED],
    difficulty: 3,
  },
  {
    name: "Decidueye",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/decidueye/roster/roster-decidueye.png",
      big: "https://unite.pokemon.com/images/pokemon/decidueye/roster/roster-decidueye-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/decidueye/stat/stat-decidueye.png",
    },
    active: true,
    battleType: 1,
    stats: {
      offense: 3.5,
      endurance: 1.5,
      mobility: 1.5,
      scoring: 3.5,
      support: 3.5,
    },
    tags: [Tag.ATTACKER, Tag.RANGED],
    difficulty: 2,
  },
  {
    name: "Tsareena",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/tsareena/roster/roster-tsareena.png",
      big: "https://unite.pokemon.com/images/pokemon/tsareena/roster/roster-tsareena-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/tsareena/stat/stat-tsareena.png",
    },
    active: true,
    battleType: 3,
    stats: {
      offense: 3.5,
      endurance: 1.5,
      mobility: 1.5,
      scoring: 3.5,
      support: 3.5,
    },
    tags: [Tag.ALLROUNDER, Tag.MELEE],
    difficulty: 3,
  },
  {
    name: "Comfey",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/comfey/roster/roster-comfey.png",
      big: "https://unite.pokemon.com/images/pokemon/comfey/roster/roster-comfey-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/comfey/stat/stat-comfey.png",
    },
    active: true,
    stats: {
      offense: 2,
      endurance: 3,
      mobility: 1.5,
      scoring: 1.5,
      support: 4.5,
    },
    difficulty: 1,
    tags: [Tag.SUPPORTER, Tag.RANGED],
    battleType: 5,
  },
  {
    name: "Buzzwole",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/buzzwole/roster/roster-buzzwole.png",
      big: "https://unite.pokemon.com/images/pokemon/buzzwole/roster/roster-buzzwole-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/buzzwole/stat/stat-buzzwole.png",
    },
    active: true,
    battleType: 3,
    stats: {
      offense: 4,
      endurance: 3,
      mobility: 2.5,
      scoring: 2,
      support: 2,
    },
    tags: [Tag.ALLROUNDER, Tag.MELEE],
    difficulty: 2,
  },
  {
    name: "Zeraora",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/zeraora/roster/roster-zeraora.png",
      big: "https://unite.pokemon.com/images/pokemon/zeraora/roster/roster-zeraora-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/zeraora/stat/stat-zeraora.png",
    },
    active: true,
    battleType: 2,
    stats: {
      offense: 3.5,
      endurance: 1.5,
      mobility: 4,
      scoring: 3,
      support: 0.5,
    },
    tags: [Tag.SPEEDSTER, Tag.MELEE],
    difficulty: 3,
  },
  {
    name: "Cinderace",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/cinderace/roster/roster-cinderace.png",
      big: "https://unite.pokemon.com/images/pokemon/cinderace/roster/roster-cinderace-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/cinderace/stat/stat-cinderace.png",
    },
    active: true,
    battleType: 1,
    stats: {
      offense: 4,
      endurance: 1.5,
      mobility: 3,
      scoring: 2.5,
      support: 0.5,
    },
    tags: [Tag.ATTACKER, Tag.RANGED],
    difficulty: 1,
  },
  {
    name: "Greedent",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/greedent/roster/roster-greedent.png",
      big: "https://unite.pokemon.com/images/pokemon/greedent/roster/roster-greedent-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/greedent/stat/stat-greedent.png",
    },
    active: true,
    battleType: 4,
    stats: {
      offense: 4,
      endurance: 1.5,
      mobility: 2,
      scoring: 1,
      support: 1,
    },
    tags: [Tag.DEFENDER, Tag.MELEE],
    difficulty: 3,
  },
  {
    name: "Eldegoss",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/eldegoss/roster/roster-eldegoss.png",
      big: "https://unite.pokemon.com/images/pokemon/eldegoss/roster/roster-eldegoss-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/eldegoss/stat/stat-eldegoss.png",
    },
    active: true,
    battleType: 5,
    stats: {
      offense: 1.5,
      endurance: 2,
      mobility: 2.5,
      scoring: 2.5,
      support: 4,
    },
    tags: [Tag.SUPPORTER, Tag.RANGED],
    difficulty: 1,
  },
  {
    name: "Cramorant",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/cramorant/roster/roster-cramorant.png",
      big: "https://unite.pokemon.com/images/pokemon/cramorant/roster/roster-cramorant-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/cramorant/stat/stat-cramorant.png",
    },
    active: true,
    battleType: 1,
    stats: {
      offense: 4,
      endurance: 3,
      mobility: 3,
      scoring: 1.5,
      support: 1,
    },
    tags: [Tag.ATTACKER, Tag.RANGED],
    difficulty: 3,
  },
  {
    name: "Duraludon",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/duraludon/roster/roster-duraludon.png",
      big: "https://unite.pokemon.com/images/pokemon/duraludon/roster/roster-duraludon-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/duraludon/stat/stat-duraludon.png",
    },
    active: true,
    battleType: 1,
    stats: {
      offense: 3.5,
      endurance: 3.5,
      mobility: 2.5,
      scoring: 2.5,
      support: 0.5,
    },
    tags: [Tag.ATTACKER, Tag.RANGED],
    difficulty: 2,
  },
  {
    name: "Dragapult",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/dragapult/roster/roster-dragapult.png",
      big: "https://unite.pokemon.com/images/pokemon/dragapult/roster/roster-dragapult-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/dragapult/stat/stat-dragapult.png",
    },
    active: true,
    battleType: 1,
    stats: {
      offense: 4,
      endurance: 2.5,
      mobility: 4,
      scoring: 1.5,
      support: 0.5,
    },
    tags: [Tag.ATTACKER, Tag.RANGED],
    difficulty: 3,
  },
  {
    name: "Zacian",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/zacian/roster/roster-zacian.png",
      big: "https://unite.pokemon.com/images/pokemon/zacian/roster/roster-zacian-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/zacian/stat/stat-zacian.png",
    },
    active: true,
    battleType: 3,
    stats: {
      offense: 5,
      endurance: 4,
      mobility: 3,
      scoring: 1,
      support: 2,
    },
    tags: [Tag.ALLROUNDER, Tag.MELEE],
    difficulty: 2,
  },
  {
    name: "Urshifu",
    images: {
      main: "https://unite.pokemon.com/images/pokemon/urshifu/roster/roster-urshifu.png",
      big: "https://unite.pokemon.com/images/pokemon/urshifu/roster/roster-urshifu-2x.png",
      complete:
        "https://unite.pokemon.com/images/pokemon/urshifu/stat/stat-urshifu.png",
    },
    active: true,
    battleType: 3,
    stats: {
      offense: 4.5,
      endurance: 3,
      mobility: 2.5,
      scoring: 2.5,
      support: 1,
    },
    tags: [Tag.ALLROUNDER, Tag.MELEE],
    difficulty: 2,
  },
];

export default pokemons