interface propInterface {
	number: number | ".";
	onClick: () => void;
}

const NumberButton: React.FC<propInterface> = ({ number, onClick }) => {
	return (
		<button onClick={onClick} className="num-btn">
			{number}
		</button>
	);
};

export default NumberButton;
