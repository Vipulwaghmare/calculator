import AngleButton from "components/AngleButton";
import NumberButton from "components/NumberButton";
import OperationButton from "components/OperationButton";
import { useReducer } from "react";
import { reducer, initialState } from "reducer";

const App: React.FC = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="background">
			<div className="calculator">
				<div className="screen">
					<p className="top-screen">12</p>
					<p className="bottom-screen">{state.total}</p>
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
										onClick={() => dispatch({ type: "increment" })}
										operation="Inv"
									/>
								</td>
								<td>
									<OperationButton
										onClick={() => dispatch({ type: "increment" })}
										operation="sin"
									/>
								</td>
								<td>
									<OperationButton
										onClick={() => dispatch({ type: "increment" })}
										operation="ln"
									/>
								</td>
							</tr>
							<tr>
								<td>
									<OperationButton
										onClick={() => dispatch({ type: "increment" })}
										operation="π"
									/>
								</td>
								<td>
									<OperationButton
										onClick={() => dispatch({ type: "increment" })}
										operation="cos"
									/>
								</td>
								<td>
									<OperationButton
										onClick={() => dispatch({ type: "increment" })}
										operation="log"
									/>
								</td>
							</tr>
							<tr>
								<td>
									<OperationButton
										onClick={() => dispatch({ type: "increment" })}
										operation="e"
									/>
								</td>
								<td>
									<OperationButton
										onClick={() => dispatch({ type: "increment" })}
										operation="tan"
									/>
								</td>
								<td>
									<OperationButton
										onClick={() => dispatch({ type: "increment" })}
										operation="√"
									/>
								</td>
							</tr>
							<tr>
								<td>
									<OperationButton
										onClick={() => dispatch({ type: "increment" })}
										operation="Ans"
									/>
								</td>
								<td>
									<OperationButton
										onClick={() => dispatch({ type: "increment" })}
										operation="EXP"
									/>
								</td>
								<td>
									<OperationButton
										onClick={() => dispatch({ type: "increment" })}
									>
										x<sup>y</sup>
									</OperationButton>
								</td>
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
										onClick={() => dispatch({ type: "increment" })}
										operation="AC"
									/>
								</td>
							</tr>
							<tr>
								<td>
									<NumberButton
										onClick={() => dispatch({ type: "increment" })}
										number={7}
									/>
								</td>
								<td>
									<NumberButton
										onClick={() => dispatch({ type: "increment" })}
										number={8}
									/>
								</td>
								<td>
									<NumberButton
										onClick={() => dispatch({ type: "increment" })}
										number={9}
									/>
								</td>
								<td>
									<OperationButton
										onClick={() => dispatch({ type: "increment" })}
										operation="÷"
									/>
								</td>
							</tr>
							<tr>
								<td>
									<NumberButton
										onClick={() => dispatch({ type: "increment" })}
										number={4}
									/>
								</td>
								<td>
									<NumberButton
										onClick={() => dispatch({ type: "increment" })}
										number={5}
									/>
								</td>
								<td>
									<NumberButton
										onClick={() => dispatch({ type: "increment" })}
										number={6}
									/>
								</td>
								<td>
									<OperationButton
										onClick={() => dispatch({ type: "increment" })}
										operation="×" // not x
									/>
								</td>
							</tr>
							<tr>
								<td>
									<NumberButton
										onClick={() => dispatch({ type: "increment" })}
										number={1}
									/>
								</td>
								<td>
									<NumberButton
										onClick={() => dispatch({ type: "increment" })}
										number={2}
									/>
								</td>
								<td>
									<NumberButton
										onClick={() => dispatch({ type: "increment" })}
										number={3}
									/>
								</td>
								<td>
									<OperationButton
										onClick={() => dispatch({ type: "increment" })}
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
										onClick={() => dispatch({ type: "increment" })}
										number="."
									/>
								</td>
								<td>
									<button className="total-btn">=</button>
								</td>
								<td>
									<OperationButton
										onClick={() => dispatch({ type: "increment" })}
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
