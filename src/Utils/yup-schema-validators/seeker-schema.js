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
	pw: yup.string().min(6).required("Password must be a min of 6 characters!"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("pw"), null])
		.required("Password Not a match!"),

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

	// ref for file validation: https://dev.to/olabisi09/file-validation-in-react-with-formik-and-yup-48e6
	cv: yup
		.mixed()
		.test("fileFormat", "Unsupported file format", (value) => {
			if (value) {
				const supportedFormats = ["pdf", "doc", "docx"];
				return supportedFormats.includes(value.name?.split(".").pop());
			}
			return true;
		})
		.test("fileSize", "File size must not be more than 512KB", (value) => {
			if (value) {
				return value.size <= 0.5 * 1024 * 1024;
			}
			return true;
		}),

	// Seeker Specific
	years_of_experience: yup
		.string()
		.required("Years of experirence is required"),
	highest_qualification: yup
		.string()
		.required("Highest level of qualaification is required!"),
	availability: yup.string().required("Your availability is required"),
	preferred_location: yup.string().required("Preffered location is required"),
});

export default schema;
