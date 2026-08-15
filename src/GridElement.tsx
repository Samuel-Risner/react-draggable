import type React from "react";
import { type ReactNode } from "react";
import { BASE_EL_STYLE } from "./baseStyle";
import type { T_ElPosData, T_Source, T_Target } from "./types";

export default function GridElement(
  {
    child,
    style,
    posData,
    w, h,
    setTarget, unsetTarget, setSource,
  }:{
    child: ReactNode,
    style: React.CSSProperties,
    posData: T_ElPosData,
    w: number, h: number,
    setTarget: (t: T_Target) => void, unsetTarget: (el: HTMLDivElement) => void, setSource: (s: T_Source) => void,
  }
) {
  return (
    <div
      style={{ ...style, ...BASE_EL_STYLE, left: `${posData.x}px`, top: `${posData.y}px`, width: w, height: h }}

      onPointerOver={ (e) => { e.preventDefault(); setTarget({ ...posData, el: e.currentTarget }); } }
      onPointerLeave={ (e) => unsetTarget(e.currentTarget) }
      onPointerDown={ (e) => {
        e.preventDefault();
        if (child === null) return;

        const rect = e.currentTarget.getBoundingClientRect();

        setSource({ ...posData, el: e.currentTarget, offsetX: e.clientX - rect.left, offsetY: e.clientY - rect.top })
      } }
    >
      { child }
    </div>
  );
}