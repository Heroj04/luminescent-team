/******************** 2.0 Gamedata **********************/
//All the constant numbers
const PersonalTable2 = require('./gamedata2.0/PersonalTable.json');
const GrowTable2 = require('./gamedata2.0/GrowTable.json');
const EvolveTable2 = require('./gamedata2.0/EvolveTable.json');
const EggMovesTable2 = require('./gamedata2.0/TamagoWazaTable.json');
const LearnsetTable2 = require('./gamedata2.0/WazaOboeTable.json');
const MovesTable2 = require('./gamedata2.0/WazaTable.json');
const ItemTable2 = require('./gamedata2.0/ItemTable.json');
const ShopTable2 = require('./gamedata2.0/ShopTable.json');
const areasList2 = require('./gamedata2.0/areas');
const EvolutionData2 = require('./gamedata2.0/evolution.json');

//All the Location files
const displayNames2 =  require('./gamedata2.0/english_dp_fld_areaname_display.json');
const areaNames2 =  require('./gamedata2.0/english_dp_fld_areaname.json');
const mapInfo2 =  require('./gamedata2.0/MapInfo.json');
const encounterLocations2 =  require('./gamedata2.0/encounter_locations.json');
const pokemonLocations2 =  require('./gamedata2.0/pokemon_locations.json');
const trainerLocations2 =  require('./gamedata2.0/Mapper_Trainer_Output.json');
const field_items2 =  require('./gamedata2.0/item_list.json');
const hidden_items2 =  require('./gamedata2.0/hide_item_list.json');
const staticLocations2 =  require('./gamedata2.0/static_pokemon_locations.json');
const staticAreaLocations2 =  require('./gamedata2.0/static_area_locations.json');

//All the Pokemon english files
const basePokemonNames2 = require('./gamedata2.0/english_ss_monsname.json');
const formPokemonNames2 = require('./gamedata2.0/english_ss_zkn_form.json');
const pokemonHeight2 = require('./gamedata2.0/english_ss_zkn_height.json');
const pokemonWeight2 = require('./gamedata2.0/english_ss_zkn_weight.json');
const pokemonDexType2 = require('./gamedata2.0/english_ss_zkn_type.json');
const PokedexInfo2 = require('./gamedata2.0/english_dp_pokedex_diamond.json');

//All the other english files
const natureNames2 = require('./gamedata2.0/english_ss_seikaku.json');
const abilityNames2 = require('./gamedata2.0/english_ss_tokusei.json');
const abilityInfo2 = require('./gamedata2.0/english_ss_tokuseiinfo.json');
const typeName2 = require('./gamedata2.0/english_ss_typename.json');
const moveNames2 = require('./gamedata2.0/english_ss_wazaname.json');
const moveInfo2 = require('./gamedata2.0/english_ss_wazainfo.json');
const itemNames2 = require('./gamedata2.0/english_ss_itemname.json');

//Custom files
const moveEnum2 = require('./gamedata2.0/moveEnum.json');
const smogonMoves2 = require('./gamedata2.0/smogonMoves.json');
const tutorMoves2 = require('./gamedata2.0/tutorMoves.json');
const ItemMap2 = require('./gamedata2.0/item_map.json');
const FixedShop2 = require('./gamedata2.0/fixed_shop.json');

/******************** 3.0 Gamedata **********************/
const PersonalTable3 = require('./gamedata3.0/PersonalTable.json');
const GrowTable3 = require('./gamedata3.0/GrowTable.json');
const EvolveTable3 = require('./gamedata3.0/EvolveTable.json');
const EggMovesTable3 = require('./gamedata3.0/TamagoWazaTable.json');
const LearnsetTable3 = require('./gamedata3.0/WazaOboeTable.json');
const MovesTable3 = require('./gamedata3.0/WazaTable.json');
const ItemTable3 = require('./gamedata3.0/ItemTable.json');
const ShopTable3 = require('./gamedata3.0/ShopTable.json');
const areasList3 = require('./gamedata3.0/areas');
const EvolutionData3 = require('./gamedata3.0/evolution.json');

//All the Location files
const displayNames3 = require('./gamedata3.0/english_dp_fld_areaname_display.json');
const areaNames3 = require('./gamedata3.0/english_dp_fld_areaname.json');
const mapInfo3 = require('./gamedata3.0/MapInfo.json');
const encounterLocations3 = require('./gamedata3.0/encounter_locations.json');
const pokemonLocations3 = require('./gamedata3.0/pokemon_locations.json');
const trainerLocations3 = require('./gamedata3.0/Mapper_Trainer_Output.json');
const field_items3 = require('./gamedata3.0/item_list.json');
const hidden_items3 = require('./gamedata3.0/hide_item_list.json');
const staticLocations3 = require('./gamedata3.0/static_pokemon_locations.json');
const staticAreaLocations3 = require('./gamedata3.0/static_area_locations.json');

//All the Pokemon english files
const basePokemonNames3 = require('./gamedata3.0/english_ss_monsname.json');
const formPokemonNames3 = require('./gamedata3.0/english_ss_zkn_form.json');
const pokemonHeight3 = require('./gamedata3.0/english_ss_zkn_height.json');
const pokemonWeight3 = require('./gamedata3.0/english_ss_zkn_weight.json');
const pokemonDexType3 = require('./gamedata3.0/english_ss_zkn_type.json');
const PokedexInfo3 = require('./gamedata3.0/english_dp_pokedex_diamond.json');

//All the other english files
const natureNames3 = require('./gamedata3.0/english_ss_seikaku.json');
const abilityNames3 = require('./gamedata3.0/english_ss_tokusei.json');
const abilityInfo3 = require('./gamedata3.0/english_ss_tokuseiinfo.json');
const typeName3 = require('./gamedata3.0/english_ss_typename.json');
const moveNames3 = require('./gamedata3.0/english_ss_wazaname.json');
const moveInfo3 = require('./gamedata3.0/english_ss_wazainfo.json');
const itemNames3 = require('./gamedata3.0/english_ss_itemname.json');

//Custom files
const moveEnum3 = require('./gamedata3.0/moveEnum.json');
const smogonMoves3 = require('./gamedata3.0/smogonMoves.json');
const tutorMoves3 = require('./gamedata3.0/tutorMoves.json');
const ItemMap3 = require('./gamedata3.0/item_map.json');
const FixedShop3 = require('./gamedata3.0/fixed_shop.json');

/******************** Gamedata Exports **********************/
const GAMEDATA2 = "2.0";
const GAMEDATA3 = "3.0";

const PersonalTable = {
  [GAMEDATA2]: PersonalTable2,
  [GAMEDATA3]: PersonalTable3,
};
const GrowTable = {
  [GAMEDATA2]: GrowTable2,
  [GAMEDATA3]: GrowTable3,
};
const EvolveTable = {
  [GAMEDATA2]: EvolveTable2,
  [GAMEDATA3]: EvolveTable3,
};
const EggMovesTable = {
  [GAMEDATA2]: EggMovesTable2,
  [GAMEDATA3]: EggMovesTable3,
};
const LearnsetTable = {
  [GAMEDATA2]: LearnsetTable2,
  [GAMEDATA3]: LearnsetTable3,
};
const MovesTable = {
  [GAMEDATA2]: MovesTable2,
  [GAMEDATA3]: MovesTable3,
};
const EvolutionData = {
  [GAMEDATA2]: EvolutionData2,
  [GAMEDATA3]: EvolutionData3,
};
const BasePokemonNames = {
  [GAMEDATA2]: basePokemonNames2,
  [GAMEDATA3]: basePokemonNames3,
};
const FormPokemonNames = {
  [GAMEDATA2]: formPokemonNames2,
  [GAMEDATA3]: formPokemonNames3,
};
const PokemonHeight = {
  [GAMEDATA2]: pokemonHeight2,
  [GAMEDATA3]: pokemonHeight3,
};
const PokemonWeight = {
  [GAMEDATA2]: pokemonWeight2,
  [GAMEDATA3]: pokemonWeight3,
};
const PokemonDexType = {
  [GAMEDATA2]: pokemonDexType2,
  [GAMEDATA3]: pokemonDexType3,
};
const PokedexInfo = {
  [GAMEDATA2]: PokedexInfo2,
  [GAMEDATA3]: PokedexInfo3,
};
const NatureNames = {
  [GAMEDATA2]: natureNames2,
  [GAMEDATA3]: natureNames3,
};
const AbilityNames = {
  [GAMEDATA2]: abilityNames2,
  [GAMEDATA3]: abilityNames3,
};
const AbilityInfo = {
  [GAMEDATA2]: abilityInfo2,
  [GAMEDATA3]: abilityInfo3,
};
const TypeName = {
  [GAMEDATA2]: typeName2,
  [GAMEDATA3]: typeName3,
};
const MoveNames = {
  [GAMEDATA2]: moveNames2,
  [GAMEDATA3]: moveNames3,
};
const MoveInfo = {
  [GAMEDATA2]: moveInfo2,
  [GAMEDATA3]: moveInfo3,
};
const ItemTable = {
  [GAMEDATA2]: ItemTable2,
  [GAMEDATA3]: ItemTable3,
};
const ItemNames = {
  [GAMEDATA2]: itemNames2,
  [GAMEDATA3]: itemNames3,
};
const MoveEnum = {
  [GAMEDATA2]: moveEnum2,
  [GAMEDATA3]: moveEnum3,
};
const SmogonMoves = {
  [GAMEDATA2]: smogonMoves2,
  [GAMEDATA3]: smogonMoves3,
};
const TutorMoves = {
  [GAMEDATA2]: tutorMoves2,
  [GAMEDATA3]: tutorMoves3,
};
const DisplayNames = {
  [GAMEDATA2]: displayNames2,
  [GAMEDATA3]: displayNames3,
};
const AreaNames = {
  [GAMEDATA2]: areaNames2,
  [GAMEDATA3]: areaNames3,
};
const MapInfo = {
  [GAMEDATA2]: mapInfo2,
  [GAMEDATA3]: mapInfo3,
};
const EncounterLocations = {
  [GAMEDATA2]: encounterLocations2,
  [GAMEDATA3]: encounterLocations3,
};
const PokemonLocations = {
  [GAMEDATA2]: pokemonLocations2,
  [GAMEDATA3]: pokemonLocations3,
};
const TrainerLocations = {
  [GAMEDATA2]: trainerLocations2,
  [GAMEDATA3]: trainerLocations3,
};
const FieldItems = {
  [GAMEDATA2]: field_items2,
  [GAMEDATA3]: field_items3,
};
const HiddenItems = {
  [GAMEDATA2]: hidden_items2,
  [GAMEDATA3]: hidden_items3,
};
const StaticLocations = {
  [GAMEDATA2]: staticLocations2,
  [GAMEDATA3]: staticLocations3,
};
const StaticAreaLocations = {
  [GAMEDATA2]: staticAreaLocations2,
  [GAMEDATA3]: staticAreaLocations3,
};
const ShopTable = {
  [GAMEDATA2]: ShopTable2,
  [GAMEDATA3]: ShopTable3,
};
const AreasList = {
  [GAMEDATA2]: areasList2,
  [GAMEDATA3]: areasList3,
};
const ItemMap = {
  [GAMEDATA2]: ItemMap2,
  [GAMEDATA3]: ItemMap3,
};
const FixedShop = {
  [GAMEDATA2]: FixedShop2,
  [GAMEDATA3]: FixedShop3,
}

module.exports = {
  GAMEDATA2,
  GAMEDATA3,
  PersonalTable,
  GrowTable,
  EvolveTable,
  EggMovesTable,
  LearnsetTable,
  MovesTable,
  EvolutionData,
  BasePokemonNames,
  FormPokemonNames,
  PokemonHeight,
  PokemonWeight,
  PokemonDexType,
  PokedexInfo,
  NatureNames,
  AbilityNames,
  AbilityInfo,
  TypeName,
  MoveNames,
  MoveInfo,
  ItemTable,
  ItemNames,
  MoveEnum,
  SmogonMoves,
  TutorMoves,
  DisplayNames,
  AreaNames,
  MapInfo,
  EncounterLocations,
  PokemonLocations,
  TrainerLocations,
  FieldItems,
  HiddenItems,
  StaticLocations,
  StaticAreaLocations,
  ShopTable,
  AreasList,
  ItemMap,
  FixedShop,
};
