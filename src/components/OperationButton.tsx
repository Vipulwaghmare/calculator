interface propInterface {
	operation?: string;
	onClick: () => void;
}

const OperationButton: React.FC<propInterface> = ({
	operation,
	onClick,
	children
}) => {
	return (
		<button onClick={onClick} className="op-btn">
			{children || operation}
		</button>
	);
};

export default OperationButton;
