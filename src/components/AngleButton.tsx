// import { useEffect, useState } from "react";
interface propInterface {
	isRadian: boolean;
	onClick: () => void;
}

const AngleButton: React.FC<propInterface> = ({ isRadian, onClick }) => {
	const selected = {
		color: "#9aa0a6"
	};
	return (
		<button className="op-btn angle-btn" onClick={onClick}>
			<span style={isRadian ? selected : {}}>Rad</span>
			<span>|</span>
			<span style={!isRadian ? selected : {}}>Deg</span>
		</button>
	);
};

export default AngleButton;
