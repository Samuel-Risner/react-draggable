import { useState } from "react";
import { Grid, type T_Grid, type T_KeyGrid } from "react-draggable-grid";

export default function App() {
  const [grid, setGrid] = useState<T_Grid>([
    [<div key="0">0</div>, <div key="1">1</div>],
    [null, <div key="3">3</div>],
    [null, <div key="5">5</div>],
    [null, <div key="7">7</div>],
    [null, <div key="9">9</div>],
    [null, <div key="11">11</div>],
  ]);

  const reportChanges = (newGrid: T_Grid, keyGrid: T_KeyGrid) => {
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

        containerStyle={{}}

        elStyle={{
          width: 60, height: 60,
          backgroundColor: "green"
        }}
      />
    </>
  );
}