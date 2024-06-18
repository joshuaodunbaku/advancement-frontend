import * as yup from "yup";

const schema = yup.object().shape({
	fname: yup.string().required("First Name is required!"),
	lname: yup.string().required("Last Name is required!"),
	email: yup
		.string()
		.email()
		.required("A correct personal email format email@mail.com is required"),
	phone: yup
		.string()
		.test(
			"len",
			"Phone number must be 11 characters",
			(val) => val.length === 11
		)
		.required("Phone number is required"),
	// sex: yup.string().max(1).required("Gender is required!"),

	// age: yup.string.required("Enter your phone number"),
	pw: yup.string().min(6).required("Password must be a min of 6 characters!"),

	industry: yup
		.array()
		.min(1, "Select at least one option")
		.of(
			yup.object().shape({
				value: yup.string().required(),
				label: yup.string().required(),
			})
		)
		// .array()
		// .oneOf(getArray(industryOptions), "Select from the options!")
		.required("Industry is required"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("pw"), null])
		.required("Password Not a match!"),

	// Employer Specific
	company_name: yup.string().required("Enter your Company name!"),
	address: yup.string().required("Enter address of company"),
	company_email: yup
		.string()
		.email()
		.required("A correct company email format email@mail.com is required"),
});

export default schema;
