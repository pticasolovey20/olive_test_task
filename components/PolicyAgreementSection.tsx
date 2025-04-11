import React, { FC } from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';

import { links } from '@/constants';
import { RegisterFormValues } from '@/interfaces/authInterfaces';

import Link from 'next/link';
import { Checkbox, FormControl, FormControlLabel, FormHelperText, Typography } from '@mui/material';

interface IPolicyAgreementSectionProps {
	control: Control<RegisterFormValues>;
	errors: FieldErrors<RegisterFormValues>;
}

const PolicyAgreementSection: FC<IPolicyAgreementSectionProps> = ({ control, errors }) => {
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
			<Controller
				name='subscription'
				control={control}
				render={({ field: { value, onChange } }) => (
					<FormControlLabel
						control={<Checkbox checked={value} onChange={onChange} />}
						label={<Typography sx={{ fontSize: '0.875rem' }}>Subscribe to our newsletter</Typography>}
					/>
				)}
			/>

			<Controller
				name='privacyPolicy'
				control={control}
				render={({ field: { value, onChange } }) => (
					<FormControlLabel
						control={<Checkbox checked={value} onChange={onChange} />}
						label={
							<Typography sx={{ fontSize: '0.875rem' }}>
								By registering, I agree to Treedis{' '}
								<Link href={links.TERMS_OF_USE} target='_blank'>
									Terms of Use
								</Link>
								,{' '}
								<Link href={links.COOKIE_POLICY} target='_blank'>
									Cookie Policy
								</Link>{' '}
								and{' '}
								<Link href={links.PRIVACY_POLICY} target='_blank'>
									Privacy Policy.
								</Link>
							</Typography>
						}
					/>
				)}
			/>

			{!!errors.privacyPolicy?.message && <FormHelperText>{errors.privacyPolicy?.message}</FormHelperText>}
		</FormControl>
	);
};

export default PolicyAgreementSection;
