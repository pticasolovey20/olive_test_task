import { createTheme } from '@mui/material';

const theme = createTheme({
	typography: {
		fontFamily: ['Codecpro', 'sans-serif'].join(','),
	},

	breakpoints: {
		values: {
			xs: 0,
			sm: 700,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},

	components: {
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: '8px',
					background: 'transparent',

					'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderColor: 'rgb(32, 85, 255)',
					},

					'&.Mui-error .MuiOutlinedInput-notchedOutline': {
						borderColor: 'rgb(243, 72, 72)',
					},
				},

				input: {
					padding: '12.5px 14px',
				},
			},
		},

		MuiInputLabel: {
			styleOverrides: {
				root: {
					top: '-3px',
					left: '-4px',

					color: '#666',
					fontSize: '16px',
					padding: '0px 4px',

					'&.Mui-focused': {
						color: 'rgb(32, 85, 255)',
					},

					'&.Mui-error': {
						color: 'rgb(243, 72, 72)',
					},

					'&.MuiInputLabel-shrink': {
						top: '1px',
					},
				},
			},
		},

		MuiFormHelperText: {
			styleOverrides: {
				root: {
					margin: '3px 14px -10px',

					'&.Mui-error': {
						color: 'rgb(243, 72, 72)',
					},
				},
			},
		},

		MuiRadio: {
			styleOverrides: {
				root: {
					'&.Mui-checked': {
						color: 'rgb(32, 85, 255)',
					},
				},
			},
		},

		MuiCheckbox: {
			styleOverrides: {
				root: {
					padding: '9px',
					borderRadius: '4px',

					'&.Mui-checked': {
						color: 'rgb(32, 85, 255)',
					},
				},
			},
		},
	},
});

export default theme;
