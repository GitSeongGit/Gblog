import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ProFileBox } from '../components/profile';
import { getDatabase, getBlocks, getPage } from '../lib/notion';
import ProFile from '../components/profile';
import styled, { keyframes } from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';

export const databaseId = process.env.NOTION_DATABASE_ID;
export default function Home({ posts }) {
	return (
		<>
			<Header />
			<Container>
				<Head>
					<title>Gblog</title>
					<link rel="img" href="/head.png" />
				</Head>
				<ProFile />
				<Section id="aas">
					{posts.map((post) => {
						const image = () => {
							let data = '';
							if (post.cover.type === 'file') {
								data = post.cover.file.url;
								return data;
							} else {
								data = post.cover.external.url;
								return data;
							}
						};
						const imageData = image();
						const tag = () => {
							let data = [];
							post.properties['태그'].multi_select.map((el) => {
								data.push(el.name);
							});
							return data;
						};
						return (
							<Link href={`/${post.id}`}>
								<SectionItem key={post.id}>
									<ImageBox>
										<Image
											className="img1"
											rel="img"
											src={imageData}
											layout="responsive"
											width={100}
											height={80}
										/>
									</ImageBox>
									<H2main>{post.properties['이름'].title[0].plain_text}</H2main>
									<Textbox>
										{post.properties['텍스트'].rich_text[0].plain_text}
									</Textbox>
								</SectionItem>
							</Link>
						);
					})}
				</Section>
				<Footer />
			</Container>
		</>
	);
}

export const getStaticProps = async () => {
	const database = await getDatabase(databaseId);

	return {
		props: {
			posts: database,
		},
		revalidate: 1,
	};
};

const shake = keyframes`{
0% ,100% {
	transform : translate3d(-1px ,1px ,0);
}
20% , 80% {
	transform : translate3d(0 ,2px , 0)
}

40% , 60% {
	transform: translate3d(0,0,2px);
}

}`;

const Container = styled.div`
	background-color: ${({ theme }) => theme.notice.themes.main};
	height: auto;
	width: 100%;
	@media ${({ theme }) => theme.theme.device.mobile} {
		padding: 5% 0 0 0;
	}
	@media ${({ theme }) => theme.theme.device.tablet} {
		padding: 5% 0 0 0;
	}
	@media ${({ theme }) => theme.theme.device.laptop} {
		padding: 5% 15% 5% 15%;
	}
`;
//contant BOX
const Section = styled.div`
	display: flex;

	flex-wrap: wrap;
	text-align: center;

	@media ${({ theme }) => theme.theme.device.mobile} {
		width: 100%;
	}
	@media ${({ theme }) => theme.theme.device.tablet} {
		width: 70%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	@media ${({ theme }) => theme.theme.device.laptop} {
		width: 65%;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}
`;
const SectionItem = styled.div`
	height: 200px;

	margin: 5px;
	border: 1px solid white;
	border-radius: 10px;
	display: flex;
	/* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
	flex-direction: column;
	align-items: center;
	background-color: ${({ theme }) => theme.notice.themes.item};
	&:hover {
		animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
	}
	@media ${({ theme }) => theme.theme.device.mobile} {
		width: 100%;
		margin: 10px;
		max-width: 500px;
	}
	@media ${({ theme }) => theme.theme.device.tablet} {
		flex: calc(25%);
	}
	@media ${({ theme }) => theme.theme.device.laptop} {
		max-width: 200px;
	}
`;

const ImageBox = styled.div`
	display: block;
	margin-top: 10px;
	/* border: 1px solid; */

	width: 55%;
	height: 10%;
	//next js 이미지 스펙
	> span {
		border-radius: 20px;
	}
	@media ${({ theme }) => theme.theme.device.mobile} {
		width: 25%;
		height: 10px;
	}
	@media ${({ theme }) => theme.theme.device.tablet} {
	}
	@media ${({ theme }) => theme.theme.device.laptop} {
	}
`;
const H2main = styled.h2`
	margin-top: 100px;
	@media ${({ theme }) => theme.theme.device.mobile} {
		font-size: 30px;
	}
	@media ${({ theme }) => theme.theme.device.tablet} {
		font-size: 20px;
	}
	@media ${({ theme }) => theme.theme.device.laptop} {
		font-size: 15px;
	}
`;
const Textbox = styled.span`
	@media ${({ theme }) => theme.theme.device.mobile} {
		font-size: 15px;
	}
	@media ${({ theme }) => theme.theme.device.tablet} {
		font-size: 8px;
	}
	@media ${({ theme }) => theme.theme.device.laptop} {
		font-size: 7px;
	}
`;
