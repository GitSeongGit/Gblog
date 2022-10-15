// const headerColor = {
// 	thema1: '#c85a54',
// 	thema2: '#9c64a6',
// 	thema3: '#49a7cc',
// 	thema4: '#88c399',
// };
// const mainColor = {
// 	thema1: '#b64fc8',
// 	thema2: '#ea80fc',
// 	thema3: '#80d8ff',
// 	thema4: '#b9f6ca',
// };

// const itemColor = {
// 	thema1: '#ffbcaf',
// 	thema2: '#ffb2ff',
// 	thema3: '#b5ffff',
// 	thema4: '#ecfffd',
// };
export const thema1 = {
	header: '#c85a54',
	main: '#b64fc8',
	item: '#ffbcaf',
};
export const thema2 = {
	header: '#9c64a6',
	main: '#ea80fc',
	item: '#ffb2ff',
}; //
export const thema3 = {
	header: '#49a7cc',
	main: '#80d8ff',
	item: '#b5ffff',
};
export const thema4 = {
	header: '#88c399',
	main: '#b9f6ca',
	item: '#ecfffd',
};
const deviceSizes = {
	mobile: '400px', // 1fr 1
	tablet: '768px', // 1fr 2
	laptop: '1024px', // 1fr 3
};

const device = {
	mobile: `screen and (max-width: ${deviceSizes.mobile})`,
	tablet: `screen and (min-width: ${deviceSizes.mobile}) and (max-width: ${deviceSizes.tablet})`,
	laptop: `screen and (min-width : ${deviceSizes.tablet})`,
};

const colors = {
	black: '#1e1f1d',
	yellow: '#edb83c',
	orange: '#eb7952',
	gray: '#6e6e6e',
	gray_background: '#f5f5f5',
	bakcgrond_color: '#c1a0ff',
	theme_color1: '#99FFFF',
	theme_color2: '#FF9966',
	theme_color3: '#6600FF',
	theme_color4: '#990033',
};
const theme = {
	// 후에 태마 색
	colors,
	device,
	thema1,
	thema2,
	thema3,
	thema4,
};

export default theme;
