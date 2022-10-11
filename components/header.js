import styled from 'styled-components';
import Link from 'next/dist/client/link';
import { Button } from '../styles/style_basic';
import ThemeChang from './themeChange';
import theme from '../styles/theme';
export default function Header() {
	return (
		<HeadBox>
			<Link href="/">
				<ImgBox>
					<img src="/head.png" width={60} />
				</ImgBox>
			</Link>
			<Button1>profile</Button1>
		</HeadBox>
	);
}
const HeadBox = styled.div`
	justify-content: space-between;
	background-color: ${theme.headerColor.thema1};
	position: sticky;
	top: 0;
	width: 100%;
	height: 60px;
	display: flex;
`;
const ImgBox = styled.span``;
const Button1 = styled.button`
	justify-content: end;

	@media ${({ theme }) => theme.device.laptop} {
		display: none;
	}
	/* @media ${({ theme }) => theme.device.tablet} {
		display: on;
	} */
`;

//% 넓이의 퍼센트
