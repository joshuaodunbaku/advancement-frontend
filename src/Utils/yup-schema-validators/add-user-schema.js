import * as yup from "yup";

const schema = yup.object().shape({
	fname: yup.string().required("First name is required!"),
	lname: yup.string().required("Last name is required!"),
	email: yup
		.string()
		.email()
		.required("A correct email format johndoe@gmail.com is required"),
	phone: yup
		.string()
		.test(
			"len",
			"Phone number must be 11 characters",
			(val) => val.length === 11
		)
		.required("Phone number is required"),
	// phone: yup.number("Phone number is not valid").integer().min(11).max(14).required("Phone number is required"),
	sex: yup.string().max(1).required("Gender is required!"),

	// age: yup.string.required("Enter your phone number"),

});

export default schema;
