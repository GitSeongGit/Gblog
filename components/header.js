import styled from 'styled-components';
import ThemeChang from './themeChange';
export default function Header() {
	return (
		<>
			<HeadBox>
				<img src="/head.png" width={60} />
				<img src="/blog2.png" width={60} />
				{/* <ThemeChang /> */}
			</HeadBox>
		</>
	);
}

const HeadBox = styled.div`
	position: fixed;
	top: 0;
`;
// <header>
// 	<div>
// <img src="/head.png" width={80} />
// <span>+</span>
// <img src="/blog2.png" width={80} />
// 	</div>
// </header>;
