import type { ReactNode } from "react";
import type { T_Grid } from "./types";
import React from "react";

export function switchArray2D(arr: any[][], x1: number, y1: number, x2: number, y2: number): void {
    const temp = arr[x1][y1];
    arr[x1][y1] = arr[x2][y2];
    arr[x2][y2] = temp;
}

export function getReportData(grid: T_Grid): [T_Grid, (string | null)[][]] {
    const newGrid: T_Grid = [];
    const keys: (string |null)[][] = [];

    for (const row of grid) {
        const r1: ReactNode[] = [];
        const r2: (string | null)[] = [];

        newGrid.push(r1);
        keys.push(r2);

        for (const child of row) {
            r1.push(child);
            r2.push(React.isValidElement(child)? child.key : null);
        }
    }

    return [newGrid, keys];
}

export function setTransform(el: HTMLDivElement, x: number, y: number): void {
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
}

export function resetTransform(el: HTMLDivElement): void {
    setTransform(el, 0, 0);
}

export function moveZtoBackground(el: HTMLDivElement): void {
    el.style.zIndex = "-1";
}

export function revertZ(el: HTMLDivElement): void {
    el.style.zIndex = "0";
}

export function calculateGridWidth(grid: T_Grid, elWidth: number, elGap: number): string {
    if (grid.length === 0) return "0px"; // no rows
    const w = grid[0].length;
    if (w === 0) return "0px"; // empty row

    return `${w*elWidth + (w-1)*elGap}px`;
}

export function calculateGridHeight(grid: T_Grid, elHeight: number, elGap: number): string {
    const h = grid.length;
    if (h === 0) return "0px"; // no rows

    return `${h*elHeight + (h-1)*elGap}px`;
}