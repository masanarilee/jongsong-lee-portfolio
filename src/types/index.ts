export interface Skill {
  name: string;
  rating: number;
}

export interface Value {
  title: string;
  description: string;
}

export interface Credo {
  title: string;
  description: string;
}

export interface Principle {
  title: string;
  description: string;
}

export interface ProfileData {
  name: string;
  furigana: string;
  english: string;
  tagline: string;
  intro: string;
  mission: { statement: string; description: string };
  vision: { statement: string; description: string };
  values: Value[];
  skills: Skill[];
  credos: Credo[];
  principles: Principle[];
  decisionFramework: string[];
}
