/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { FormControl, FormHelperText, styled, SxProps } from '@mui/material';

interface IFormPhoneInputProps<T extends FieldValues> {
	name: Path<T>;
	control: Control<T>;
	sx?: SxProps;
}

const StyledPhoneInput = styled(PhoneInput)`
	.react-tel-input {
		width: 100%;
		position: relative;
	}

	.form-control {
		width: 100%;
		height: 57px;
		padding: 18.5px 14px 18.5px 58px;
		font-size: 16px;
		border-radius: 8px;
		outline: none;
		background-color: transparent;
	}

	.form-control:hover {
		border-color: ${({ theme }) => theme.palette.primary.main};
		outline: none;
	}

	.form-control:focus {
		border-width: 2px;
		border-color: ${({ theme }) => theme.palette.primary.main};
		outline: none;
	}

	.form-control.invalid-number {
		background: transparent;
		border-color: ${({ theme }) => theme.palette.error.main};
	}

	.form-control.invalid-number:focus {
		border-width: 2px;
		background: transparent;
		border-color: ${({ theme }) => theme.palette.error.main};
	}

	.special-label {
		position: absolute;
		top: -10px;
		left: 10px;
		height: 20px;
		display: flex;
		align-items: center;
		font-size: 13px;
		background: #d0d5dd;
		padding: 0px 5px;
	}

	.flag-dropdown {
		background: transparent !important;
		outline: none;
		border: none;
		border-radius: 3px 0 0 3px !important;
	}

	.selected-flag {
		width: 52px;
		padding-left: 11px;
		background: transparent !important;
	}

	.selected-flag[aria-expanded='true'] {
		background: transparent !important;
	}

	.flag {
		top: 50%;
		left: 10px;
		width: 25px;
		height: 20px;
		margin-top: -10px !important;
	}

	.arrow {
		position: relative;
		top: 50%;
		margin-top: -1px;
		left: 30px !important;
	}

	.country-list {
		z-index: 1300;
		border-radius: 6px;
	}

	.country {
		height: 50px;
		display: flex;
		align-items: center;
		padding: 12px 9px 13px 13px !important;

		.flag {
			position: static;
			width: 25px;
			height: 20px;
			margin-top: 2px !important;
		}
	}
`;

const FormPhoneInput = <T extends FieldValues>({ name, control, sx }: IFormPhoneInputProps<T>) => {
	const [phoneNumberError, setPhoneNumberError] = useState<boolean>(false);

	const validatePhoneNumber = (inputNumber: string, country: any, isDirty: boolean) => {
		const phoneLength = Math.ceil(country.format.length / 2);

		if (isDirty) {
			if (!inputNumber) {
				setPhoneNumberError(false);
				return true;
			}

			if (inputNumber.length < phoneLength) {
				setPhoneNumberError(true);
				return false;
			}
		}

		setPhoneNumberError(false);
		return true;
	};

	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { value, onChange }, formState }) => (
				<FormControl fullWidth error={phoneNumberError} sx={sx}>
					<StyledPhoneInput
						country='us'
						placeholder=''
						specialLabel='Phone'
						value={value}
						onChange={onChange}
						isValid={(value: string, country: any) => validatePhoneNumber(value, country, formState.isDirty)}
					/>

					{phoneNumberError && <FormHelperText>Phone must be valid</FormHelperText>}
				</FormControl>
			)}
		/>
	);
};

export default FormPhoneInput;
