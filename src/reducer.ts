import actionTypes from "actionTypes";
import { Action, expressionInterface, numberInterface, operationInterface, specialInterface, stateInterface } from "interface";

export const initialState: stateInterface = {
  visible_start: "",
  visible_end: "",
  number: '0',
  eval_start: "",
  eval_end: "",
  isInverse: false,
  isRadian: true,
}

function isClickNumber(action: Action): action is numberInterface {
  return action.type === actionTypes.CLICK_NUMBER
}
function isClickExpression(action: Action): action is expressionInterface {
  return action.type === actionTypes.CLICK_EXPRESSION
}
function isClickOperation(action: Action): action is operationInterface {
  return action.type === actionTypes.CLICK_OPERATION
}
function isClickSpecial(action: Action): action is specialInterface {
  return action.type === actionTypes.CLICK_SPECIAL
}


export const reducer: React.Reducer<stateInterface, Action> = (state, action) => {
  console.log({ action });

  if (isClickNumber(action)) {
    let oldNumber = (state.number === "" || state.number === "ERROR" || state.number === "0") ? '' : state.number;
    return { ...state, number: oldNumber + action.number.toString() }
  }
  if (isClickExpression(action)) {
    return {
      ...state,
      visible_start: state.visible_start + action.visible_start + "(",
      visible_end: state.visible_end + ")",
      eval_start: state.eval_start + action.eval_start + "(",
      eval_end: state.eval_end + ")",
      number: state.number === "0" ? '' : state.number
    };
  }

  if (isClickOperation(action)) {
    return {
      ...state,
      visible_start: state.visible_start + state.number + action.visible_text,
      eval_start: state.eval_start + state.number + action.operation,
      number: ""
    };
  }

  if (isClickSpecial(action)) {
    let { number, eval_start, visible_start } = state;
    if (number === "0") number = '';
    return {
      ...state,
      visible_start: number ? `${visible_start}${number}${action.display}` : `${visible_start}${number}${action.display}`,
      eval_start: number ? `${eval_start} ${number} * ${action.value}` : `${visible_start} ${action.value}`,
      number: ""
    }
  }
  switch (action.type) {
    case actionTypes.CLEAR:
      return { ...initialState }
    case actionTypes.CLICK_DECIMAL:
      if (state.number.indexOf('.') < 0) return { ...state, number: state.number + "." }
      else return state;
    case actionTypes.EVALUATE:
      try {
        return {
          ...state,
          // eslint-disable-next-line no-eval
          number: eval(state.eval_start + state.number + state.eval_end),
          visible_start: "",
          visible_end: "",
          eval_start: "",
          eval_end: "",
        }
      } catch (error) {
        console.error(error)
        return { ...state, number: "ERROR" }
      }
    case actionTypes.CLICK_INVERSE:
      return {
        ...state,
        isInverse: !state.isInverse
      }
    case actionTypes.CLICK_RANDOM:
      return {
        ...state,
        visible_start: state.number ? `${state.visible_start}${state.number} x ` : state.visible_start,
        eval_start: state.number ? `${state.eval_start}${state.number} * ` : state.eval_start,
        number: Math.random().toFixed(6),
        isInverse: !state.isInverse,
      }
    case 'increment':
      return { ...state, number: 0 }
    default:
      return state;
  }

}