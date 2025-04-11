import { createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			main: 'rgb(32, 85, 255)',
		},

		error: {
			main: 'rgb(243, 72, 72)',
		},
	},

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
				root: ({ theme }) => ({
					borderRadius: '8px',
					background: 'transparent',

					'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderColor: theme.palette.primary.main,
					},

					'&.Mui-error .MuiOutlinedInput-notchedOutline': {
						borderColor: theme.palette.error.main,
					},
				}),

				input: {
					padding: '12.5px 14px',
				},
			},
		},

		MuiInputLabel: {
			styleOverrides: {
				root: ({ theme }) => ({
					top: '-3px',
					left: '-4px',

					color: '#666',
					fontSize: '16px',
					padding: '0px 4px',

					'&.Mui-focused': {
						color: theme.palette.primary.main,
					},

					'&.Mui-error': {
						color: theme.palette.error.main,
					},

					'&.MuiInputLabel-shrink': {
						top: '1px',
					},
				}),
			},
		},

		MuiFormHelperText: {
			styleOverrides: {
				root: ({ theme }) => ({
					margin: '3px 14px -10px',

					'&.Mui-error': {
						color: theme.palette.error.main,
					},
				}),
			},
		},

		MuiRadio: {
			styleOverrides: {
				root: ({ theme }) => ({
					'&.Mui-checked': {
						color: theme.palette.primary.main,
					},
				}),
			},
		},

		MuiCheckbox: {
			styleOverrides: {
				root: ({ theme }) => ({
					padding: '9px',
					borderRadius: '4px',

					'&.Mui-checked': {
						color: theme.palette.primary.main,
					},
				}),
			},
		},
	},
});

export default theme;
