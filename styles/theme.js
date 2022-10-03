const deviceSizes = {
	mobile: '320px',
	tablet: '768px',
	laptop: '1024px',
};

const device = {
	mobile: `screen and (max-width: ${deviceSizes.mobile})`,
	tablet: `screen and (max-width: ${deviceSizes.tablet})`,
	laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};
const theme = {
	// 후에 태마 색
	colors: {
		black: '#1e1f1d',
		yellow: '#edb83c',
		orange: '#eb7952',
		gray: '#6e6e6e',
		gray_background: '#f5f5f5',
	},
	device,
};

export default theme;
