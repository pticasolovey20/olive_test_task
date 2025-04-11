'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { Box, Typography } from '@mui/material';

const ConfirmEmail = ({ emailAddress }: { emailAddress: string }) => {
	const router = useRouter();
	const { t } = useTranslation();

	useEffect(() => {
		router.replace('/admin/confirm-email');
	}, [router]);

	return (
		<Box
			sx={{
				maxWidth: '451px',
				width: '100%',

				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',

				zIndex: 1,
				textAlign: 'left',
				marginLeft: '52px',
			}}
		>
			<Box sx={{ width: '100px', color: 'rgb(39, 174, 96)' }}>
				<svg
					aria-hidden='true'
					focusable='false'
					data-prefix='far'
					data-icon='circle-check'
					role='img'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 512 512'
					fontSize='100px'
				>
					<path
						fill='currentColor'
						d='M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z'
					></path>
				</svg>
			</Box>

			<Typography
				component='h4'
				sx={{
					fontSize: '34px',
					fontWeight: 'bold',

					margin: '32px 0px',
				}}
			>
				{t('confirm.success')}
			</Typography>

			<Box>
				<Typography sx={{ display: 'inline' }}>{t('confirm.activateEmail')}</Typography>{' '}
				<Typography sx={{ display: 'inline', fontWeight: 'bold' }}>{emailAddress}</Typography>
			</Box>
		</Box>
	);
};

export default ConfirmEmail;
