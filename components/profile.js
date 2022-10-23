import Image from 'next/image';
import styled, { keyframes } from 'styled-components';

export default function ProFile() {
	return (
		<ProFileBox>
			<ProfileImage>
				<Image
					rel="img"
					src="/profile.JPG"
					alt="프로필"
					width={90}
					height={95}
				/>
			</ProfileImage>
			<p> web Developer</p>
			<p> 성장하는 프론트엔드 개발자</p>
			<IConBox>
				<Icon>
					<Image
						rel="img"
						src="/call.png"
						alt="메신저"
						width={20}
						height={20}
					/>
				</Icon>
				<Icon>
					<Image
						rel="img"
						src="/messenger.png"
						alt="메신저"
						width={20}
						height={20}
					/>
				</Icon>
				<Icon>
					<Image
						rel="img"
						src="/install.png"
						alt="메신저"
						width={20}
						height={20}
					/>
				</Icon>
				<Icon>
					<Image rel="img" src="/git.png" alt="메신저" width={24} height={24} />
				</Icon>
			</IConBox>
		</ProFileBox>
	);
}
const shake = keyframes`{
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}`;

const ProFileBox = styled.div`
	background-color: ${({ theme }) => theme.notice.themes.header};
	border: 0.1rem solid;
	border-color: whitesmoke;
	border-radius: 1.2rem;
	display: flex;
	flex-direction: column;
	text-align: center;

	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
		rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	@media ${({ theme }) => theme.theme.device.mobile} {
		height: 200px;
		width: 90%;
		flex-direction: column;
		margin-left: 20px;
		margin-right: 20px;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	@media ${({ theme }) => theme.theme.device.tablet} {
		position: fixed;
		top: 9rem;
		right: 0;
		width: 23%;
		margin-right: 19px;
	}
	@media ${({ theme }) => theme.theme.device.laptop} {
		position: fixed;
		top: 9rem;
		right: 0;
		width: 23%;
		margin-right: 16px;
		/* box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
			rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset; */
	}
`;

const ProfileImage = styled.span`
	width: 8rem;
	height: 9rem;
	margin: auto;
	margin-top: 1rem;

	> span {
		border-radius: 40%;
	}
`;
const IConBox = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 4fr);
`;
const Icon = styled.span`
	margin: 0.5rem 0.5rem 0.5rem 0.5rem;
	&:hover {
		animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
		transform: translate3d(0, 0, 0);
		backface-visibility: hidden;
		perspective: 1000px;
	}
`;
