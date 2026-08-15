import React, { useRef, type ReactNode } from "react";
import { BASE_CONTAINER_STYLE } from "./baseStyle";
import GridElement from "./GridElement";
import type { T_Source, T_Grid, T_KeyGrid, T_Target } from "./types";
import { calculateGridHeight, calculateGridWidth, getReportData, moveZtoBackground, resetTransform, revertZ, setTransform, switchArray2D } from "./helpers";

export default function Grid(
  {
    grid,
    reportChange,
    draggingEnabled=true,
    elWidth, elHeight, elGap,
    containerStyle={}, elStyle={}
  }:{
    grid: (ReactNode | null)[][],
    reportChange: (newGrid: T_Grid, keyGrid: T_KeyGrid) => void,
    draggingEnabled?: boolean,
    elWidth: number, elHeight: number, elGap: number,
    containerStyle?: React.CSSProperties, elStyle?: React.CSSProperties
  }
) {
  // element that will be moved
  const source = useRef<T_Source | null>(null);

  // element with which the source element will be switched
  const target = useRef<T_Target | null>(null);

  // the container element (used for calculating positions)
  const containerEl = useRef<HTMLDivElement>(null);

  const setSource = (s: T_Source) => {
    if (!draggingEnabled) return;

    source.current = s;
    moveZtoBackground(s.el);

    const move = (e: PointerEvent) => {
      if (source.current === null) return;
      if (containerEl.current === null) return;

      // console.log("MOVE");

      const rect = containerEl.current.getBoundingClientRect();

      setTransform(
        source.current.el,
        e.clientX - source.current.x - rect.x - source.current.offsetX,
        e.clientY - source.current.y - rect.y - source.current.offsetY
      );
    }

    const up = () => {
      // console.log("UP");

      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointermove", move);

      if (source.current === null) return;

      // no target selected -> return to original position
      if (target.current === null) {
        // console.log("NO TARGET SELECTED");

        resetTransform(source.current.el);

      // target set -> switch
      } else {
        // console.log("SWITCHING");
  
        switchArray2D(grid, source.current.row, source.current.col, target.current.row, target.current.col);
        resetTransform(source.current.el);
        const [newGrid, keyGrid] = getReportData(grid);
        reportChange(newGrid, keyGrid);
      }

      // reset
      revertZ(source.current.el);
      source.current = null;
      target.current = null;
    }

    window.addEventListener("pointerup", up);
    window.addEventListener("pointermove", move);
  }

  const setTarget = (t: T_Target) => {
    if (source.current === null) {
      target.current = null;
      return;
    } else {
      if (source.current.el === t.el) return;
    }

    // console.log("SET TARGET");

    target.current = t;
  }

  const unsetTarget = (el: HTMLDivElement) => {
    if (source.current === null) {
      target.current = null;
      return;
    } else {
      if (source.current.el === el) return;
    }

    // console.log("UNSET TARGET");

    target.current = null;
  }

  return (    
    <div
      style={{ width: calculateGridWidth(grid, elWidth, elGap), height: calculateGridHeight(grid, elHeight, elGap), ...containerStyle, ...BASE_CONTAINER_STYLE }}
      ref={ containerEl }
    >

      { grid.map((row, rowIndex) => row.map((child, colIndex) =>

        <GridElement
          key={ React.isValidElement(child)? child.key : `${rowIndex}-${colIndex}` }
          child={ child }
          style={ elStyle }
          posData={{
            x: colIndex*(elWidth+elGap),
            y: rowIndex*(elHeight+elGap),
            row: rowIndex,
            col: colIndex,
          }}
          w={ elWidth }
          h={ elHeight }
          setTarget={ setTarget }
          unsetTarget={ unsetTarget }
          setSource={ setSource }
        />

      ))}

    </div>
  );
}