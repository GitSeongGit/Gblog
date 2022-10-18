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
const HeadBox = styled.div`
	justify-content: space-between;
	background-color: ${({ theme }) => theme.notice.themes.header};
	position: sticky;
	top: 0;
	width: 100%;
	height: 60px;
	display: flex;
`;
const ImgBox = styled.span``;
