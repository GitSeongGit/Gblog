import styled from 'styled-components';
export default function Footer() {
	return (
		<Container>
			<p>ⓒ 2022 Gisong first Blog</p>
		</Container>
	);
}

const Container = styled.div`
	/* display: flex; */
	position: sticky;
	background-color: black;
	top: 100;
	left: 50%;
	transform: translate(-50%, 0%);
	bottom: 1rem;
	font-family: 'TmoneyRoundWindRegular';
	font-size: 1rem;
	color: #707070;
	justify-content: center;
	align-items: center;
	text-align: center;
	user-select: none;
`;
