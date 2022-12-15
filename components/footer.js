import styled from 'styled-components';
export default function Footer() {
	return (
		<Container>
			<p>ⓒ {new Date().getFullYear()} Gisong first Blog</p>
		</Container>
	);
}

const Container = styled.footer`
	bottom: 0;
	height: 1rem;
	text-align: center;
	max-width: 850px;
	border-top: solid 1px;
	padding-top: 15px;
	/* margin: 0 5% 0 5%; */
	@media ${({ theme }) => theme.theme.device.mobile} {
	}
	@media ${({ theme }) => theme.theme.device.tablet} {
	}
	@media ${({ theme }) => theme.theme.device.laptop} {
		/* padding: 0 15% 0 15%; */
		margin: 0 5% 0 15%;
	}
`;
