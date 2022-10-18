export const thema1 = {
	header: '#373d7b',
	main: '#9695dd',
	item: '#6667ab',
};
export const thema2 = {
	header: '#656769',
	main: '#c3c6c8',
	item: '#939597',
};
export const thema3 = {
	header: '#ac9c8e',
	main: '#fffff1',
	item: '#decdbe',
};
export const thema4 = {
	header: '#a31545',
	main: '#ff819e',
	item: '#d94f70',
};

const deviceSizes = {
	s: '580px',
	m: '768px',
	l: '1024px',
};

const device = {
	mobile: `screen and (max-width: ${deviceSizes.s})`,
	tablet: `screen and (min-width: ${deviceSizes.s}) and (max-width: ${deviceSizes.l})`,
	laptop: `screen and (min-width : ${deviceSizes.l})`,
};

const theme = {
	device,
	thema1,
	thema2,
	thema3,
	thema4,
};

export default theme;
