// types/navigation.ts
export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface User {
  id?:string,
  name?: string,
  email?: string,
  profilePic?:string,
  totaltokens?:number,
}

export interface City {
  name: string;
  icon: string;
}

export interface Country {
  name: string;
  flag: string;
}