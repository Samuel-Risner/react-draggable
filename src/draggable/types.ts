import type { ReactNode } from "react";

export type T_Grid = (ReactNode | null)[][];

export type T_Key = (string | null);
export type T_KeyGrid = T_Key[][];

export type T_ElPosData = {
    x: number,
    y: number,
    row: number,
    col: number,
}

export type T_Source = T_ElPosData & {
    el: HTMLDivElement,
    offsetX: number,
    offsetY: number,
}

export type T_Target = T_ElPosData & { el: HTMLDivElement }