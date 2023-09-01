import { getItemString } from './item';
import { getMoveString, getMoveProperties } from './moves';
import { getPokemonName } from './name';

export const evolutionFunctions = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "Level",
  5: "",
  6: "getItemString",
  7: "",
  8: "getItemString",
  9: "Level",
  10: "Level",
  11: "Level",
  12: "Level",
  13: "Level",
  14: "Level",
  15: "",
  16: "",
  17: "getItemString",
  18: "getItemString",
  19: "getItemString",
  20: "getItemString",
  21: "getMoveString",
  22: "getPokemonName",
  23: "Level",
  24: "Level",
  25: "",
  26: "",
  27: "",
  28: "",
  29: "getMoveProperties",
  30: "Level",
  31: "Level",
  32: "Level",
  33: "Level",
  34: "",
  35: "",
  36: "",
  37: "",
  38: "",
  39: "",
  40: "Level",
  41: "Level",
  42: "getItemString",
  43: "",
  44: "",
  45: "",
  46: "Level",
  47: "Level",
}

export const EVOLUTION_METHOD_DETAILS = {
  0: {
    method: '',
    requiresLevel: false,
    parameterType: 'None',
  },
  1: {
    method: 'Friendship',
    requiresLevel: false,
    parameterType: 'None',
  },
  2: {
    method: 'Friendship + Day',
    requiresLevel: false,
    parameterType: 'None',
  },
  3: {
    method: 'Friendship + Night',
    requiresLevel: false,
    parameterType: 'None',
  },
  4: {
    method: `Level REPLACE`,
    requiresLevel: true,
    parameterType: 'None',
  },
  5: {
    method: 'Trade',
    requiresLevel: false,
    parameterType: 'None',
  },
  6: {
    method: `Trade with REPLACE`,
    requiresLevel: false,
    parameterType: 'Item',
  },
  7: {
    method: 'Karrablast/Shelmet Trade',
    requiresLevel: false,
    parameterType: 'None',
  },
  8: {
    method: `Use REPLACE`,
    requiresLevel: false,
    parameterType: 'Item',
  },
  9: {
    method: `Level REPLACE & Atk > Def`,
    requiresLevel: true,
    parameterType: 'None',
  },
  10: {
    method: `Level REPLACE & Atk = Def`,
    requiresLevel: true,
    parameterType: 'None',
  },
  11: {
    method: `Level REPLACE & Def > Atk`,
    requiresLevel: true,
    parameterType: 'None',
  },
  12: {
    method: `Level REPLACE + RNG`,
    requiresLevel: true,
    parameterType: 'None',
  },
  13: {
    method: `Level REPLACE + RNG`,
    requiresLevel: true,
    parameterType: 'None',
  },
  14: {
    method: `Level REPLACE & Free Space + Poké Ball`,
    requiresLevel: true,
    parameterType: 'None',
  },
  15: {
    method: 'SPECIAL_NUKENIN',
    requiresLevel: true,
    parameterType: 'None',
  },
  16: {
    method: 'High Beauty',
    requiresLevel: false,
    parameterType: 'None',
  },
  17: {
    method: `Use REPLACE & Male`,
    requiresLevel: false,
    parameterType: 'Item',
  },
  18: {
    method: `Use REPLACE & Female`,
    requiresLevel: false,
    parameterType: 'Item',
  },
  19: {
    method: `Hold REPLACE & Day`,
    requiresLevel: true,
    parameterType: 'Item',
  },
  20: {
    method: `Hold REPLACE & Night`,
    requiresLevel: true,
    parameterType: 'Item',
  },
  21: {
    method: `Knows REPLACE`,
    requiresLevel: false,
    parameterType: 'Move',
  },
  22: {
    method: `REPLACE in party`,
    requiresLevel: false,
    parameterType: 'Pokemon',
  },
  23: {
    method: `Level REPLACE & Male`,
    requiresLevel: true,
    parameterType: 'None',
  },
  24: {
    method: `Level REPLACE & Female`,
    requiresLevel: true,
    parameterType: 'None',
  },
  25: {
    method: 'Level Up in Magnetic Field',
    requiresLevel: false,
    parameterType: 'None',
  },
  26: {
    method: 'Level Up By Moss Rock',
    requiresLevel: false,
    parameterType: 'None',
  },
  27: {
    method: 'Level Up By Ice Rock',
    requiresLevel: false,
    parameterType: 'None',
  },
  28: {
    method: 'Level Up & Device Upside-Down',
    requiresLevel: true,
    parameterType: 'None',
  },
  29: {
    method: `Friendship + REPLACE Move`,
    requiresLevel: false,
    parameterType: 'Typing',
  },
  30: {
    method: `Level REPLACE + Dark-Type in Party`,
    requiresLevel: true,
    parameterType: 'None',
  },
  31: {
    method: `Level REPLACE in Rain`,
    requiresLevel: true,
    parameterType: 'None',
  },
  32: {
    method: `Level REPLACE During Day`,
    requiresLevel: true,
    parameterType: 'None',
  },
  33: {
    method: `Level REPLACE During Night`,
    requiresLevel: true,
    parameterType: 'None',
  },
  34: {
    method: 'On LvUp: Lv ≥ LvReq & is female → set form to 1',
    requiresLevel: true,
    parameterType: 'None',
  },
  35: {
    method: 'FRIENDLY',
    requiresLevel: false,
    parameterType: 'None',
  },
  36: {
    method: 'On LvUp: Lv ≥ LvReq & is game version',
    requiresLevel: true,
    parameterType: 'GameVersion',
  },
  37: {
    method: 'On LvUp: Lv ≥ LvReq & is game version & is day',
    requiresLevel: true,
    parameterType: 'GameVersion',
  },
  38: {
    method: 'On LvUp: Lv ≥ LvReq & is game version & is night',
    requiresLevel: true,
    parameterType: 'GameVersion',
  },
  39: {
    method: 'Level Up on Summit',
    requiresLevel: false,
    parameterType: 'None',
  },
  40: {
    method: `Level REPLACE 7:00-7:59PM`,
    requiresLevel: true,
    parameterType: 'None',
  },
  41: {
    method: `Level REPLACE & Non-Native region`,
    requiresLevel: true,
    parameterType: 'None',
  },
  42: {
    method: `Use REPLACE & Non-Native region`,
    requiresLevel: false,
    parameterType: 'Item',
  },
  43: {
    method: "3 Crits in One Battle",
    requiresLevel: false,
    parameterType: 'None',
  },
  44: {
    method: 'Galarian Yamask Evolution',
    requiresLevel: false,
    parameterType: 'None',
  },
  45: {
    method: 'PokéSafe Blender',
    requiresLevel: false,
    parameterType: 'None',
  },
  46: {
    method: `Level REPLACE & Amped Nature`,
    requiresLevel: true,
    parameterType: 'None',
  },
  47: {
    method: `Level REPLACE & Low-Key Nature`,
    requiresLevel: true,
    parameterType: 'None',
  },
};