import React, { Fragment } from 'react';
import { useFormContext } from 'react-hook-form';

import { RegisterFormValues } from '@/interfaces/registerFormInterfaces';
import { countryOptions, links, sourceOptions } from '@/constants';

import FormInput from '@/components/ui/FormInput';
import FormSelect from '@/components/ui/FormSelect';
import { Checkbox, FormControl, FormControlLabel, FormHelperText, Typography } from '@mui/material';
import Link from 'next/link';

const RegisterSecondStep = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<RegisterFormValues>();

	return (
		<Fragment>
			<FormInput
				type='text'
				name='company'
				label='Company'
				register={register}
				errorMessage={errors.company?.message}
			/>

			<FormInput
				type='text'
				name='phoneNumber'
				label='Phone'
				register={register}
				errorMessage={errors.phoneNumber?.message}
				sx={{ marginTop: '16px' }}
			/>

			<FormSelect
				name='country'
				label='Country/Region'
				register={register}
				errorMessage={errors.country?.message}
				sx={{ marginTop: '16px' }}
				options={countryOptions}
			/>

			<FormSelect
				name='source'
				label='How did you know about us?'
				register={register}
				errorMessage={errors.source?.message}
				sx={{ marginTop: '16px' }}
				options={sourceOptions}
			/>

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
				<FormHelperText>{errors.privacyPolicy?.message}</FormHelperText>
			</FormControl>
		</Fragment>
	);
};

export default RegisterSecondStep;
