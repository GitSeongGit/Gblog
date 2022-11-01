import styled from 'styled-components';
import Link from 'next/dist/client/link';
import ThemeChang from './themeChange';
import React from 'react';

export default function Header() {
	return (
		<HeadBox>
			<Link href="/">
				<ImgBox>
					<img src="/head.png" width={60} />
				</ImgBox>
			</Link>
			<ThemeChang />
		</HeadBox>
	);
}
const HeadBox = styled.header`
	justify-content: space-between;
	background-color: ${({ theme }) => theme.notice.themes.header};

	top: 0;
	width: 100%;
	height: 60px;
	display: flex;
	@media ${({ theme }) => theme.theme.device.mobile} {
	}
	@media ${({ theme }) => theme.theme.device.tablet} {
	}
	@media ${({ theme }) => theme.theme.device.laptop} {
		padding: 0 15% 0 15%;
	}
`;
const ImgBox = styled.span``;
