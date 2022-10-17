export const thema1 = {
	header: '#373d7b', //헤더 프로필 블록
	main: '#9695dd', //bakcgrond_color
	item: '#6667ab', //미정
};
export const thema2 = {
	header: '#656769',
	main: '#c3c6c8',
	item: '#939597',
}; //
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
	s: '500px',
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
