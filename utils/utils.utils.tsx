const falsyValue = (value: any): boolean => {
	return [undefined, null, ""].includes(value);
};

export { falsyValue };
