import * as yup from "yup";
import {
	experienceLevelOption,
	industryOptions,
	locationOptions,
	minimumQualificationOption,
	workTypeOptions,
} from "../../the-advancement-place";

const getArray = (option) => {
	return option.map((e) => e.value);
};

const schema = yup.object().shape({
	job_title: yup.string().required("Job title is required!"),

	industry: yup
		.string()
		.oneOf(getArray(industryOptions), "Select from the options!")
		.required("Industry is required"),

	// .min(1, "At least one option is required"),
	// .string()
	// industry: yup.array().min(2, "Pick at least 1 tags"),
	// .oneOf(getArray(industryOptions))
	// .required("Industry name is required!"),
	work_type: yup
		.string()
		.oneOf(getArray(workTypeOptions), "Select from the options!")
		.required("Select your required work type"),
	location: yup
		.string()
		.oneOf(getArray(locationOptions), "Select from the options!")
		.required("Please select a location!"),

	minimum_qualification: yup
		.string()
		.oneOf(getArray(minimumQualificationOption))
		.required("Select the minimum year of experience required"),

	years_of_experience: yup
		.string()
		.oneOf(getArray(experienceLevelOption))
		.required("Years of experirence is required"),

	confidential: yup.boolean(),
	monthly_salary_min: yup.number().when("confidential", {
		is: false,
		then: () =>
			yup
				.number()
				.typeError("Please enter an amount")
				.lessThan(
					yup.ref("monthly_salary_max"),
					"Must be less than minimun salary"
				)
				.integer("Must be an integer")
				.positive("Must be a positive number"),
		// .required("Enter min. salary"),
		otherwise: () => yup.number().notRequired(),
	}),

	monthly_salary_max: yup.number().when("confidential", {
		is: false,
		then: () =>
			yup
				.number()
				.typeError("Please enter an amount")
				.integer("Must be an integer")
				.positive("Must be a positive number"),
		// .required("Enter max. salary"),
		otherwise: () => yup.number().nullable(),
	}),
	no_of_available_openings: yup
		.number()
		.integer()
		.positive("Unsupported format")
		.required("Your availability is required"),
	// preferred_location: yup.string().required("Preffered location is required"),
});

export default schema;
