# React Draggable Grid

Simple react component to implement a grid with draggable elements

## Example Implementation

```ts
import { useState } from "react";
import { Grid, type T_Grid, type T_KeyGrid } from "react-draggable";

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
```

## Quick Description

The component in itself does not use react states and depends on the parent component to update the grid state (as shown in the example implementation)

The passed grid will be modified inside of the component

All elements passed to grid `grid={ grid }` should have a unique `key` attribute

The `reportChanges` function takes two arguments, `newGrid: T_Grid` and `keyGrid: T_KeyGrid`
 - `newGrid` is a copy of the modified grid and ca be used to update the state
 - `keyGrid` contains the keys (or `null`) of the grid which can be used to update the backend

# Dev notes

## Build code

```sh
npm run build
```

## Pack

```sh
npm pack
```