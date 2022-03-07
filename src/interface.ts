import actionTypes from "actionTypes";

export interface stateInterface {
  visible_start: string;
  visible_end: string;
  number: string;
  eval_start: string;
  eval_end: string;
  isInverse: boolean;
  isRadian: boolean;
  answer: string;
}

export interface numberInterface {
  type: actionTypes.CLICK_NUMBER;
  number: number;
}

export interface expressionInterface {
  type: actionTypes.CLICK_EXPRESSION,
  visible_start: string,
  eval_start: string
}

export interface operationInterface {
  type: actionTypes.CLICK_OPERATION,
  operation: string,
  visible_text: string
}


export interface operationInterface {
  type: actionTypes.CLICK_OPERATION,
  operation: string,
  visible_text: string
}

export interface specialInterface {
  type: actionTypes.CLICK_SPECIAL,
  value: string,
  display: string
}

interface otherInterface {
  type: string;
}

export type Action = numberInterface | otherInterface | expressionInterface | operationInterface | specialInterface
