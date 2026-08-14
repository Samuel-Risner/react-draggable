import { useState } from "react";
import Grid from "./draggable/Grid";
import type { T_Grid } from "./draggable/types";

export default function App() {
  const [grid, setGrid] = useState<T_Grid>([
    [<div key="0">0</div>, <div key="1">1</div>],
    [null, <div key="3">3</div>],
    [null, <div key="5">5</div>],
    [null, <div key="7">7</div>],
    [null, <div key="9">9</div>],
    [null, <div key="11">11</div>],
  ]);

  const reportChanges = (newGrid: T_Grid) => {
    // updateBackend(keyGrid)
    setGrid(newGrid);
  }

  return (
    <>
      <Grid
        grid={ grid }
        reportChange={ reportChanges }

        elWidth={ 40 }
        elHeight={ 40 }
        elGap={ 10 }

        containerStyle={{
          gap: 20
        }}

        elStyle={{
          width: 60, height: 60,
          backgroundColor: "green"
        }}
      />
    </>
  );
}