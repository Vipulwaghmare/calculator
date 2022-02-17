import AngleButton from "components/AngleButton";
import NumberButton from "components/NumberButton";
import OperationButton from "components/OperationButton";
import { useReducer, Reducer, FC } from "react";
import { reducer, initialState } from "reducer";
import actionTypes from "actionTypes";
import { Action, stateInterface } from "interface";

const App: FC = () => {
	const [state, dispatch] = useReducer<Reducer<stateInterface, Action>>(
		reducer,
		initialState
	);
	console.log({ state });

	return (
		<div className="background">
			<div className="calculator">
				<div className="screen">
					<p className="top-screen">12</p>
					<p className="bottom-screen">
						{state.visible_start}
						{state.number}
						{state.visible_end}
					</p>
				</div>
				<div className="btns-cont">
					<table>
						<tbody>
							<tr>
								<td colSpan={2}>
									<AngleButton />
								</td>
								<td>
									<OperationButton
										onClick={() => dispatch({ type: "increment" })}
										operation="x!"
									/>
								</td>
							</tr>
							<tr>
								<td>
									<OperationButton
										onClick={() =>
											dispatch({ type: actionTypes.CLICK_INVERSE })
										}
										operation="Inv"
									/>
								</td>
								{state.isInverse ? (
									<>
										<td>
											<OperationButton
												onClick={() =>
													dispatch({
														type: actionTypes.CLICK_EXPRESSION,
														visible_start: "asin",
														eval_start: "Math.asin"
													})
												}
											>
												sin<sup>-1</sup>
											</OperationButton>
										</td>
										<OperationButton
											onClick={() =>
												dispatch({
													type: actionTypes.CLICK_EXPRESSION,
													visible_start: "e^",
													eval_start: "Math.exp"
												})
											}
										>
											e<sup>x</sup>
										</OperationButton>
									</>
								) : (
									<>
										<td>
											<OperationButton
												onClick={() =>
													dispatch({
														type: actionTypes.CLICK_EXPRESSION,
														visible_start: "sin",
														eval_start: "Math.sin"
													})
												}
												operation="sin"
											/>
										</td>
										<td>
											<OperationButton
												onClick={() =>
													dispatch({
														type: actionTypes.CLICK_EXPRESSION,
														visible_start: "ln",
														eval_start: "Math.log"
													})
												}
												operation="ln"
											/>
										</td>
									</>
								)}
							</tr>
							<tr>
								<td>
									<OperationButton
										onClick={() =>
											dispatch({
												type: actionTypes.CLICK_SPECIAL,
												value: "Math.PI",
												display: "π"
											})
										}
										operation="π"
									/>
								</td>
								{state.isInverse ? (
									<>
										<td>
											<OperationButton
												onClick={() =>
													dispatch({
														type: actionTypes.CLICK_EXPRESSION,
														visible_start: "acos",
														eval_start: "Math.acos"
													})
												}
											>
												cos<sup>-1</sup>
											</OperationButton>
										</td>
									</>
								) : (
									<>
										<td>
											<OperationButton
												onClick={() =>
													dispatch({
														type: actionTypes.CLICK_EXPRESSION,
														visible_start: "cos",
														eval_start: "Math.cos"
													})
												}
												operation="cos"
											/>
										</td>
										<td>
											<OperationButton
												onClick={() =>
													dispatch({
														type: actionTypes.CLICK_EXPRESSION,
														visible_start: "log",
														eval_start: "Math.log10"
													})
												}
												operation="log"
											/>
										</td>
									</>
								)}
							</tr>
							<tr>
								<td>
									<OperationButton
										onClick={() =>
											dispatch({
												type: actionTypes.CLICK_SPECIAL,
												value: "Math.E",
												display: "e"
											})
										}
										operation="e"
									/>
								</td>
								{state.isInverse ? (
									<>
										<td>
											<OperationButton
												onClick={() =>
													dispatch({
														type: actionTypes.CLICK_EXPRESSION,
														visible_start: "atan",
														eval_start: "Math.atan"
													})
												}
											>
												tan<sup>-1</sup>
											</OperationButton>
										</td>
									</>
								) : (
									<>
										<td>
											<OperationButton
												onClick={() =>
													dispatch({
														type: actionTypes.CLICK_EXPRESSION,
														visible_start: "tan",
														eval_start: "Math.tan"
													})
												}
												operation="tan"
											/>
										</td>
										<td>
											<OperationButton
												onClick={() =>
													dispatch({
														type: actionTypes.CLICK_EXPRESSION,
														visible_start: "√",
														eval_start: "Math.sqrt"
													})
												}
												operation="√"
											/>
										</td>
									</>
								)}
							</tr>
							<tr>
								{state.isInverse ? (
									<td>
										<OperationButton
											onClick={() =>
												dispatch({ type: actionTypes.CLICK_RANDOM })
											}
											operation="Rnd"
										/>
									</td>
								) : (
									<td>
										<OperationButton
											onClick={() => dispatch({ type: "increment" })}
											operation="Ans"
										/>
									</td>
								)}
								<td>
									<OperationButton
										onClick={() => dispatch({ type: "increment" })}
										operation="EXP"
									/>
								</td>
								{state.isInverse ? (
									<></>
								) : (
									<td>
										<OperationButton
											onClick={() => dispatch({ type: "increment" })}
										>
											x<sup>y</sup>
										</OperationButton>
									</td>
								)}
							</tr>
						</tbody>
					</table>
					<table>
						<tbody>
							<tr>
								<td>
									<OperationButton
										onClick={() => dispatch({ type: "increment" })}
										operation="("
									/>
								</td>
								<td>
									<OperationButton
										onClick={() => dispatch({ type: "increment" })}
										operation=")"
									/>
								</td>
								<td>
									<OperationButton
										onClick={() => dispatch({ type: "increment" })}
										operation="%"
									/>
								</td>
								<td>
									<OperationButton
										onClick={() => dispatch({ type: actionTypes.CLEAR })}
										operation="AC"
									/>
								</td>
							</tr>
							<tr>
								<td>
									<NumberButton
										onClick={() =>
											dispatch({ type: actionTypes.CLICK_NUMBER, number: 7 })
										}
										number={7}
									/>
								</td>
								<td>
									<NumberButton
										onClick={() =>
											dispatch({ type: actionTypes.CLICK_NUMBER, number: 8 })
										}
										number={8}
									/>
								</td>
								<td>
									<NumberButton
										onClick={() =>
											dispatch({ type: actionTypes.CLICK_NUMBER, number: 9 })
										}
										number={9}
									/>
								</td>
								<td>
									<OperationButton
										onClick={() =>
											dispatch({
												type: actionTypes.CLICK_OPERATION,
												operation: "/",
												visible_text: "÷"
											})
										}
										operation="÷"
									/>
								</td>
							</tr>
							<tr>
								<td>
									<NumberButton
										onClick={() =>
											dispatch({ type: actionTypes.CLICK_NUMBER, number: 4 })
										}
										number={4}
									/>
								</td>
								<td>
									<NumberButton
										onClick={() =>
											dispatch({ type: actionTypes.CLICK_NUMBER, number: 5 })
										}
										number={5}
									/>
								</td>
								<td>
									<NumberButton
										onClick={() =>
											dispatch({ type: actionTypes.CLICK_NUMBER, number: 6 })
										}
										number={6}
									/>
								</td>
								<td>
									<OperationButton
										onClick={() =>
											dispatch({
												type: actionTypes.CLICK_OPERATION,
												operation: "*",
												visible_text: "×"
											})
										}
										operation="×" // not x
									/>
								</td>
							</tr>
							<tr>
								<td>
									<NumberButton
										onClick={() =>
											dispatch({ type: actionTypes.CLICK_NUMBER, number: 1 })
										}
										number={1}
									/>
								</td>
								<td>
									<NumberButton
										onClick={() =>
											dispatch({ type: actionTypes.CLICK_NUMBER, number: 2 })
										}
										number={2}
									/>
								</td>
								<td>
									<NumberButton
										onClick={() =>
											dispatch({ type: actionTypes.CLICK_NUMBER, number: 3 })
										}
										number={3}
									/>
								</td>
								<td>
									<OperationButton
										onClick={() =>
											dispatch({
												type: actionTypes.CLICK_OPERATION,
												operation: "-",
												visible_text: "-"
											})
										}
										operation="-"
									/>
								</td>
							</tr>
							<tr>
								<td>
									<NumberButton
										onClick={() => dispatch({ type: "increment" })}
										number={0}
									/>
								</td>
								<td>
									<NumberButton
										onClick={() =>
											dispatch({ type: actionTypes.CLICK_DECIMAL })
										}
										number="."
									/>
								</td>
								<td>
									<button
										className="total-btn"
										onClick={() =>
											dispatch({
												type: actionTypes.EVALUATE
											})
										}
									>
										=
									</button>
								</td>
								<td>
									<OperationButton
										onClick={() =>
											dispatch({
												type: actionTypes.CLICK_OPERATION,
												operation: "+",
												visible_text: "+"
											})
										}
										operation="+"
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default App;
