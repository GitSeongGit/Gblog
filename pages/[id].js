
import { Fragment } from 'react';
import Head from 'next/head';
import { getDatabase, getPage, getBlocks } from '../lib/notion';
import Link from 'next/link';
import { databaseId } from './index.js';
import ProFile from '../components/profile';
import Header from '../components/header';
import styled from 'styled-components';
export const Text = ({ text, type }) => {
	if (!text) {
		return null;
	}
	return text.map((value) => {
		const { text } = value;
		return (
			<Span className={type}>
				{text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
			</Span>
		);
	});

};

const renderNestedList = (block) => {
	const { type } = block;
	const value = block[type];
	if (!value) return null;

	const isNumberedList = value.children[0].type === 'numbered_list_item';

	if (isNumberedList) {
		return <ol>{value.children.map((block) => renderBlock(block))}</ol>;
	}
	return <ul>{value.children.map((block) => renderBlock(block))}</ul>;
};

const renderBlock = (block) => {
	const { type, id } = block;
	const value = block[type];
	console.log(block.type);
	switch (type) {
		case 'paragraph':
			return (
				<p>
					<Text text={value.text} type={type} />
				</p>
			);
		case 'heading_1':
			return (
				<h1>
					<Text text={value.text} type={type} />
				</h1>
			);
		case 'heading_2':
			return (
				<h2>
					<Text text={value.text} type={type} />
				</h2>
			);
		case 'heading_3':
			return (
				<h3>
					<Text text={value.text} type={type} />
				</h3>
			);
		case 'bulleted_list_item':
		case 'numbered_list_item':
			return (
				<li>
					<Text text={value.text} type={type} />
					{!!value.children && renderNestedList(block)}
				</li>
			);
		case 'to_do':
			return (
				<div>
					<label htmlFor={id}>
						<input type="checkbox" id={id} defaultChecked={value.checked} />{' '}
						<Text text={value.text} type={type} />
					</label>
				</div>
			);
		case 'toggle':
			return (
				<details>
					<summary>
						<Text text={value.text} type={type} />
					</summary>
					{value.children?.map((block) => (
						<Fragment key={block.id}>{renderBlock(block)}</Fragment>
					))}
				</details>
			);
		case 'child_page':
			return <p>{value.title}</p>;
		case 'image':
			const src =
				value.type === 'external' ? value.external.url : value.file.url;
			const caption = value.caption ? value.caption[0]?.plain_text : '';
			return (
				<figure>
					<Img src={src} alt={caption} />
					{caption && <figcaption>{caption}</figcaption>}
				</figure>
			);
		case 'divider':
			return <hr key={id} />;
		case 'quote':
			return (
				<Quote className={type} key={id}>
					{value.text[0].plain_text}
				</Quote>
			);
		case 'code':
			return (
				<pre>
					<Code key={id} type={type}>
						{value.text[0].plain_text}
					</Code>
				</pre>
			);
		case 'file':
			const src_file =
				value.type === 'external' ? value.external.url : value.file.url;
			const splitSourceArray = src_file.split('/');
			const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
			const caption_file = value.caption ? value.caption[0]?.plain_text : '';
			return (
				<figure>
					<div>
						📎{' '}
						<Link href={src_file} passHref>
							{lastElementInArray.split('?')[0]}
						</Link>
					</div>
					{caption_file && <figcaption>{caption_file}</figcaption>}
				</figure>
			);
		case 'bookmark':
			const href = value.url;
			return (
				<a href={href} target="_brank" className={styles.bookmark}>
					{href}
				</a>
			);
		default:
			return `❌ Unsupported block (${
				type === 'unsupported' ? 'unsupported by Notion API' : type
			})`;
	}
};

export default function Post({ page, blocks }) {
	if (!page || !blocks) {
		return <div />;
	}
	return (
		<>
			<Header />
			<Container>
				<ProFile />
				<Head>
					<title>{page.properties['이름'].title[0].plain_text}</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<article>
					<h1>
						<Text text={page.properties['이름'].title} />
					</h1>
					<section>
						{blocks.map((block) => (
							<Fragment key={block.id}>{renderBlock(block)}</Fragment>
						))}
						<Link href="/">
							<a>← Go home</a>
						</Link>
					</section>
				</article>
			</Container>
		</>
	);
}

export const getStaticPaths = async () => {
	const database = await getDatabase(databaseId);
	return {
		paths: database.map((page) => ({ params: { id: page.id } })),
		fallback: true,
	};
};

export const getStaticProps = async (context) => {
	const { id } = context.params;
	const page = await getPage(id);
	const blocks = await getBlocks(id);


	const childBlocks = await Promise.all(
		blocks
			.filter((block) => block.has_children)
			.map(async (block) => {
				return {
					id: block.id,
					children: await getBlocks(block.id),
				};
			}),
	);
	const blocksWithChildren = blocks.map((block) => {
		console.log(block);
		// Add child blocks if the block should contain children but none exists
		if (block.has_children && !block[block.type].children) {
			block[block.type]['children'] = childBlocks.find(
				(x) => x.id === block.id,
			)?.children;
		}
		return block;
	});


	return {
		props: {
			page,
			blocks: blocksWithChildren,
		},
		revalidate: 1,
	};
};
const Container = styled.div`
	width: 75%;
`;

const Quote = styled.blockquote`
	display: block;
	margin-top: 1em;
	margin-bottom: 1em;
	margin-left: 40px;
	margin-right: 40px;
`;
const Code = styled.code`
	display: inline-block;
	border: 0.5px solid;
	background-color: #eee;
	border-radius: 3px;
	font-family: MyFancyCustomFont, monospace;
	font-size: inherit;
	padding: 0 3px;
	word-wrap: break-word;
`;
const Img = styled.img`
	width: 75%;
`;
const Span = styled.span.attrs(() => ({ tabIndex: 0 }))`
	color: blue;
	font-size: 3vw;
	font-weight: bold;
	width: 74%;
	&.heading_2 {
		background: orange;
	}
	&.heading_3 {
		background: blue;
	}
	&.numbered_list_item {
		background: red;
	}
	&.toggle {
		background: gray;
	}
	&.child_page {
		background: whitesmoke;
	}
	&.code {
		background: yellow;
	}
`;
