export interface Recipe {
    name:         string;
    recipeid:     string;
    known?:       boolean;
    skill:        Skill;
    active?:      Active;
    target?:      Target;
    result:       Result;
    containers?:  Container[];
    ingredients?: Ingredients;
    trigger?:     Trigger;
    cookers?:     Container[];
    nameable?:    boolean;
    lootable?:    Lootable;
}

export interface Active {
    id:     string;
    ratio?: number;
    loss?:  number;
}

export interface Container {
    id:          ContainerID;
    difficulty?: number;
}

export enum ContainerID {
    BakingStone = "baking stone",
    Boiler = "boiler",
    CakeTin = "cake tin",
    Campfire = "campfire",
    Cauldron = "cauldron",
    Forge = "forge",
    FryingPan = "frying pan",
    Mushroom = "mushroom",
    OpenHelm = "open helm",
    Oven = "oven",
    PieDish = "pie dish",
    Plate = "plate",
    PotteryBowl = "pottery bowl",
    PotteryJar = "pottery jar",
    RoastingDish = "roasting dish",
    SaucePan = "sauce pan",
    SausageSkin = "sausage skin",
    Still = "still",
    WineBarrel = "wine barrel",
}

export interface Ingredients {
    mandatory?: Target[];
    optional?:  Target[];
    oneof?:     Oneof[];
    zeroorone?: Oneof[];
    oneormore?: Oneof[];
    any?:       Any[];
}

export interface Any {
    id:         AnyID;
    difficulty: number;
    cstate?:    Cstate;
}

export enum Cstate {
    Boiled = "boiled",
    Candied = "candied",
    ChocolateCoated = "chocolate coated",
    Cooked = "cooked",
    Fried = "fried",
    Grilled = "grilled",
    Raw = "raw",
    Roasted = "roasted",
    Steamed = "steamed",
}

export enum AnyID {
    AnyCheese = "any cheese",
    AnyHerb = "any herb",
    AnyNut = "any nut",
    AnySpice = "any spice",
    Bread = "bread",
}

export interface Target {
    id:            string;
    ratio?:        number;
    loss?:         number;
    cstate?:       Cstate;
    material?:     string;
    pstate?:       Pstate;
    realtemplate?: string;
    amount?:       number;
    difficulty?:   number;
    creature?:     string;
}

export enum Pstate {
    Chopped = "chopped",
    Clotted = "clotted",
    Diced = "diced",
    Fermenting = "fermenting",
    Ground = "ground",
    Mashed = "mashed",
    Minced = "minced",
    None = "none",
    Undistilled = "undistilled",
    Unfermented = "unfermented",
    Whipped = "whipped",
}

export interface Oneof {
    list: Target[];
}

export interface Lootable {
    creature: string;
    rarity:   string;
}

export interface Result {
    id:                 string;
    name?:              string;
    refmaterial?:       string;
    difficulty?:        number | string;
    description?:       string;
    pstate?:            Pstate;
    cstate?:            Cstate;
    refrealtemplate?:   string;
    realtemplate?:      string;
    usetemplateweight?: boolean;
    achievement?:       string;
    material?:          string;
    icon?:              string;
}

export enum Skill {
    Baking = "baking",
    Beverages = "beverages",
    Butchering = "butchering",
    Cooking = "cooking",
    DairyFoodMaking = "dairy food making",
    HotFoodCooking = "hot food cooking",
    Milling = "milling",
}

export enum Trigger {
    Create = "create",
    Heat = "heat",
    Time = "time",
}
