import React from 'react';
import { Metadata } from 'next';
import RegisterForm from '@/components/forms/RegisterForm';

export const metadata: Metadata = {
	title: 'Register',
};

const RegisterPage = async () => {
	return <RegisterForm />;
};

export default RegisterPage;
