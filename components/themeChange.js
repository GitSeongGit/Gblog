import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { thema1, thema2, thema3, thema4 } from '../styles/theme';
import { useNotice } from '../lib/ThemeContext';
import { localSetItem, loclaGetItem } from '../lib/storageDAata';
export default function ThemeChang() {
	const [isOpen, setIsOpen] = useState(true);

	const openModalHandler = () => {
		setIsOpen(!isOpen);
	};

	const { themes, setThema } = useNotice();
	const onClick = (e) => {
		const { value } = e.target;
		if (value === 'thema1') {
			setThema(thema1);
		} else if (value === 'thema2') {
			setThema(thema2);
		} else if (value === 'thema3') {
			setThema(thema3);
		} else if (value === 'thema4') {
			setThema(thema4);
		}
	};
	useEffect(() => {
		localSetItem('theme', themes);
	}, [themes]);

	return (
		<>
			<div>
				<Button onClick={openModalHandler}>{!isOpen ? 'x' : 'x'}</Button>
				{!isOpen ? (
					<div>
						<Thema1Button
							thema1
							onClick={onClick}
							value="thema1"
						></Thema1Button>
						<Thema2Button
							thema2
							onClick={onClick}
							value="thema2"
						></Thema2Button>
						<Thema3Button
							thema3
							onClick={onClick}
							value="thema3"
						></Thema3Button>
						<Thema4Button
							thema4
							onClick={onClick}
							value="thema4"
						></Thema4Button>
					</div>
				) : null}
			</div>
		</>
	);
}

// const BackGround = styled.div`
// 	background: #00000082;
// 	width: 100%;
// `;

// const Container = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	position: fixed;
// 	top: 50%;
// 	left: 50%;
// 	transform: translate(-50%, -50%);
// 	width: 30rem;
// 	height: 30rem;
// 	background: whitesmoke;
// 	border-top: none;
// 	border-left: none;
// 	border-right: none;
// 	border-bottom: 0.1rem, #494949b6, solid;
// 	border-radius: 3rem;
// 	justify-content: center;
// 	align-items: center;
// 	z-index: 999;
// `;

const Button = styled.button`
	border: 0.5px solid;
	border-radius: 45%;
	color: white;
	background-color: unset;
	width: 1.5rem;
	height: 1.5rem;
`;
const Thema1Button = styled(Button)`
	width: 1rem;
	height: 1rem;
	background-color: ${thema1.header};
`;
const Thema2Button = styled(Button)`
	width: 1rem;
	height: 1rem;
	background-color: ${thema2.header};
`;
const Thema3Button = styled(Button)`
	width: 1rem;
	height: 1rem;
	background-color: ${thema3.header};
`;
const Thema4Button = styled(Button)`
	width: 1rem;
	height: 1rem;
	background-color: ${thema4.header};
`;
