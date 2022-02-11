interface stateInterface {
  total: number;
}
interface actionInterface {
  type: string;
}
export const initialState: stateInterface = {
  total: 0
}

export const reducer = (state: stateInterface, action: actionInterface): stateInterface => {
  switch (action.type) {
    case 'increment':
      return { total: state.total + 1 };
    case 'decrement':
      return { total: state.total - 1 };
    default:
      return state;
  }

}