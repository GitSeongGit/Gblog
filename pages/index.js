import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
// import Button from '../components/button';
import Tag from '../components/tag';
import { getDatabase, getBlocks, getPage } from '../lib/notion';
import { Text } from './[id].js';
import ProFile from '../components/profile';
import styled from 'styled-components';
import Header from '../components/header';
import { H2tag, Ptag } from '../styles/style_basic';
import theme from '../styles/theme';
export const databaseId = process.env.NOTION_DATABASE_ID;
export default function Home({ posts }) {
	const tagData = [];
	const data = posts.map((post) => {
		post.properties['태그'].multi_select.map((el) => {
			const found = tagData.find((data) => data === el.name);
			if (found === undefined) {
				tagData.push(el.name);
			}
		});
	});

	return (
		<>
			<Header />
			<ProFile />
			{/* <TagBox>
				{tagData.map((tag, idx) => {
					return <Tag posts={tag} />;
				})}
			</TagBox> */}

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
					const tagData = tag();

					return (
						<Link href={`/${post.id}`}>
							<SectionItem key={post.id}>
								<H2main>{post.properties['이름'].title[0].plain_text}</H2main>
								<Image rel="img" src={imageData} width={100} height={100} />
								{tagData.map((tag) => {
									// console.log(tag);
									return <li>{tag}</li>;
								})}
							</SectionItem>
						</Link>
					);
				})}
			</Section>
		</>
	);
}

export const getStaticProps = async () => {
	const database = await getDatabase(databaseId);

	return {
		props: {
			posts: database,
			// pages: page,
		},
		revalidate: 1,
	};
};

const Section = styled.div`
	display: flex;
	width: 75%;
	flex-wrap: wrap;
	text-align: center;
`;
const SectionItem = styled.div`
	height: 200px;
	width: 0.5rem;
	margin: 5px;
	border: 1px solid;

	@media ${({ theme }) => theme.device.tablet} {
		flex: calc(50%);
		background-color: blue;
	}
	@media ${({ theme }) => theme.device.laptop} {
		flex: calc(25%);
		background-color: red;
	}
`;
const TagBox = styled.div``;

const H2main = styled(H2tag)``;

const Pmain = styled(Ptag)``;
