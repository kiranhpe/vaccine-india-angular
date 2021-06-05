import { Card } from "./interfaces/card.interface";

export interface StatsCard extends Card{
    total: number;
    delta?: number;
    catagories: Catagory[];
}

export interface Catagory {
    name: string;
    value: number;
}