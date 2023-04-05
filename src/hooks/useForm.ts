import { useState } from 'react';

export const useForm = (initialValues: any = {}, onSubmit: (a: {}) => void) => {
	const [formData, setFormData] = useState(initialValues);

	const handleInputChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
			| React.ChangeEvent<HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (
		e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLDivElement>
	) => {
		e.preventDefault();
		onSubmit?.(formData);
	};

	return { formData, handleInputChange, handleSubmit };
};
