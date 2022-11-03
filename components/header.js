import styled from 'styled-components';
import Link from 'next/dist/client/link';
import ThemeChang from './themeChange';
import React from 'react';

export default function Header() {
	return (
		<Container>
			<HeadBox>
				<Link href="/">
					<ImgBox>
						<img src="/head.png" width={60} />
					</ImgBox>
				</Link>
				<ThemeChang />
			</HeadBox>
		</Container>
	);
}
const HeadBox = styled.header`
	justify-content: space-between;
	/* width: 100%; */
	top: 0;
	height: 60px;
	display: flex;
	max-width: 1024px;
	@media ${({ theme }) => theme.theme.device.mobile} {
	}
	@media ${({ theme }) => theme.theme.device.tablet} {
	}
	@media ${({ theme }) => theme.theme.device.laptop} {
		/* padding: 0 15% 0 15%; */
		margin: 0 5% 0 15%;
	}
`;
const Container = styled.div`
	background-color: ${({ theme }) => theme.notice.themes.header};
`;

const ImgBox = styled.span``;
