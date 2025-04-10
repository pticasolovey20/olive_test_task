import React, { FC } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { links } from '@/constants';
import { RegisterFormValues } from '@/interfaces/registerFormInterfaces';

import Link from 'next/link';
import { Checkbox, FormControl, FormControlLabel, FormHelperText, Typography } from '@mui/material';

interface IPolicyAgreementSectionProps {
	register: UseFormRegister<RegisterFormValues>;
	errors: FieldErrors<RegisterFormValues>;
}

const PolicyAgreementSection: FC<IPolicyAgreementSectionProps> = ({ register, errors }) => {
	return (
		<FormControl
			fullWidth
			error={!!errors.privacyPolicy?.message}
			sx={{
				fontSize: '0.875rem',

				display: 'flex',
				flexDirection: 'column',

				paddingLeft: '8px',
				marginTop: '16px',
			}}
		>
			<FormControlLabel
				control={<Checkbox defaultChecked id='subscription' {...register('subscription')} />}
				label={<Typography sx={{ fontSize: '0.875rem' }}>Subscribe to our newsletter</Typography>}
			/>

			<FormControlLabel
				control={<Checkbox id='privacyPolicy' {...register('privacyPolicy')} />}
				label={
					<Typography sx={{ fontSize: '0.875rem' }}>
						By registering, I agree to Treedis <Link href={links.TERMS_OF_USE}>Terms of Use</Link> ,{' '}
						<Link href={links.COOKIE_POLICY}>Cookie Policy</Link> and{' '}
						<Link href={links.PRIVACY_POLICY}>Privacy Policy.</Link>
					</Typography>
				}
			/>

			{!!errors.privacyPolicy?.message && <FormHelperText>{errors.privacyPolicy?.message}</FormHelperText>}
		</FormControl>
	);
};

export default PolicyAgreementSection;
