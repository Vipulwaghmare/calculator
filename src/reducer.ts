import actionTypes from "actionTypes";
import { Action, expressionInterface, numberInterface, operationInterface, stateInterface } from "interface";

export const initialState: stateInterface = {
  visible_start: "",
  visible_end: "",
  number: '0',
  eval_start: "",
  eval_end: ""
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
      visible_end: ")",
      eval_start: state.eval_start + action.eval_start + "(",
      eval_end: ")"
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
  switch (action.type) {
    case actionTypes.CLEAR:
      return { ...state, number: '0' }
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
    case 'increment':
      return { ...state, number: 0 }
    default:
      return state;
  }

}