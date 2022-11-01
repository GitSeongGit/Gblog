import styled from 'styled-components';
export default function Footer() {
	return (
		<Container>
			<p>ⓒ {new Date().getFullYear()} Gisong first Blog</p>
		</Container>
	);
}

const Container = styled.footer`
	position: fixed;
	width: 100%;
	bottom: 0;
	/* left: 50%; */
	height: 1rem;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.notice.themes.item};
`;
