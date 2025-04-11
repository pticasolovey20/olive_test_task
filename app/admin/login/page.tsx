import React from 'react';
import { Metadata } from 'next';
import LoginForm from '@/components/forms/LoginForm';

export const metadata: Metadata = {
	title: 'Login',
};

const LoginPage = async () => {
	return <LoginForm />;
};

export default LoginPage;
