import React, { FC } from 'react';
import { Metadata } from 'next';
import ConfirmEmail from '@/components/forms/ConfirmEmail';

export const metadata: Metadata = {
	title: 'Confirm email',
};

interface IConfirmEmailPageProps {
	searchParams: { email?: string };
}

const ConfirmEmailPage: FC<IConfirmEmailPageProps> = async ({ searchParams }) => {
	const emailAddress = searchParams.email;

	return <ConfirmEmail emailAddress={emailAddress || 'example@gmail.com'} />;
};

export default ConfirmEmailPage;
