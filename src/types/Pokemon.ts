export type Pokemon = {
  name?: string;
  images?: {
    main: string;
    big: string;
    complete?: string;
  };
  active?: boolean;
  picked?: number;
  stats?: {
    offense: number;
    endurance: number;
    mobility: number;
    scoring: number;
    support: number;
  };
  difficulty?: Difficulty;
  tags?: Array<Tag>;
  battleType?: BattleType;
};

export enum Tag {
  DEFENDER = "Defender",
  RANGED = "Ranged",
  SUPPORTER = "Supporter",
  SPEEDSTER = "Speedster",
  MELEE = "Melee",
  ATTACKER = "Attacker",
  ALLROUNDER = "Allrounder",
}

enum Difficulty {
  NOVICE = 1,
  INTERMEDIATE = 2,
  EXPERT = 3,
}

export enum BattleType {
  ATTACKER = 1,
  SPEEDSTER = 2,
  ALLROUNDER = 3,
  DEFENDER = 4,
  SUPPORTER = 5,
}

export enum BattleTypeColor {
  ATTACKER = "#F16C38",
  SPEEDSTER = "#29A5E3",
  ALLROUNDER = "#CE5FD3",
  DEFENDER = "#ACED5B",
  SUPPORTER = "#FECC51",
}