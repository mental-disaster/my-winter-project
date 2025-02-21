import { SkillAttribute } from "@/types/skillAttribute";

export const SKILLATTRIBUTES: {[key: string]: SkillAttribute} = {
    1: { id: 1, name: 'icon1', img: null },
    2: { id: 2, name: 'icon2', img: null },
    3: { id: 3, name: 'icon3', img: null },
} as const;