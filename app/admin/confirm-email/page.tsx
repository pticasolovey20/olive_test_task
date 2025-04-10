import React, { FC } from 'react';
import ConfirmEmail from '@/components/forms/ConfirmEmail';

interface IConfirmEmailPageProps {
	searchParams: { email?: string };
}

const ConfirmEmailPage: FC<IConfirmEmailPageProps> = async ({ searchParams }) => {
	const emailAddress = searchParams.email;

	return <ConfirmEmail emailAddress={emailAddress || 'example@gmail.com'} />;
};

export default ConfirmEmailPage;
