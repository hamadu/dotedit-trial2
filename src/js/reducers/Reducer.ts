import { GlobalState, buildInitialState } from "../models/GlobalState";
import { DotAction } from "./Action";

const initialState: GlobalState = buildInitialState(16, 16);

export function reduce(state: GlobalState = initialState, action: DotAction): GlobalState {
  switch (action.type) {
    case "down":
      return down(state, action);
    case "up":
      return up(state, action);
    case "move":
      return move(state, action);
    case "leave":
      return leave(state, action);
    default:
      return state
  }
}

function down(state: GlobalState, action: DotAction): GlobalState {
  return {
    lastY: action.y,
    lastX: action.x,
    mouse: true,
    dots: changeDot(state.dots, action.y, action.x, action.color)
  };
}

function up(state: GlobalState, action: DotAction): GlobalState {
  return {
    lastY: action.y,
    lastX: action.x,
    mouse: false,
    dots: state.dots
  };
}

function leave(state: GlobalState, action: DotAction): GlobalState {
  return {
    lastY: action.y,
    lastX: action.x,
    mouse: false,
    dots: state.dots
  };
}

function move(state: GlobalState, action: DotAction): GlobalState {
  if (!state.mouse) {
    return state;
  }
  if (state.lastY == action.y && state.lastX == action.x) {
    return state;
  }

  const dots = lineToDots(state.lastY, state.lastX, action.y, action.x);
  const newDots = dots.reduce((prevDots, newDot) => changeDot(prevDots, newDot[0], newDot[1], action.color), state.dots);

  return {
    lastY: action.y,
    lastX: action.x,
    mouse: state.mouse,
    dots: newDots
  };
}

function lineToDots(fy: number, fx: number, ty: number, tx: number): number[][] {
  let dots: number[][] = [];
  if (tx < fx) {
    return lineToDots(ty, tx, fy, fx);
  } else if (fx == tx) {
    while (fy != ty) {
      dots.push([Math.floor(fy), Math.floor(fx)]);
      fy += (ty - fy >= 1) ? 1 : -1;
    }
    dots.push([fy, fx]);
  } else if (fy == ty) {
    while (fx != tx) {
      dots.push([Math.floor(fy), Math.floor(fx)]);
      fx += 1;
    }
    dots.push([fy, fx]);
  } else {
    const diff = (ty - fy) / (tx - fx + 1);
    while (fx <= tx) {
      const tty = fy + diff;
      if (diff >= 0) {
        while (fy <= tty) {
          dots.push([Math.floor(fy), Math.round(fx)]);
          fy += 1;
        }
      } else {
        while (fy >= tty) {
          dots.push([Math.floor(fy), Math.round(fx)]);
          fy -= 1;
        }
      }
      fy = tty;
      fx += 1;
    }
  }
  return dots;
}

function changeDot(dots: number[][], y: number, x: number, color: number) {
  const newRow = dots[y].map((a, idx) => idx == x ? color : a );
  return [
    ...dots.slice(0, y),
    newRow,
    ...dots.slice(y+1, dots.length)
  ];
}
