const yup = require("yup");

const schema = yup.object().shape(
	{
		what: yup.string().when("what", (value) => {
			if (value[0] !== undefined && value[0] !== "") {
				return yup.string().required("Job Title is required");
			} else {
				return yup.string().nullable().optional();
			}
		}),
		where: yup
			.array()
			.max(3, "Maximum of three locations allowed")
			.required("Job Location is required"),
		industries: yup
			.array()
			.max(3, "Maximum of three Job Sectors allowed")
			.required("Job Industry is required"),
		more_filter: yup.boolean(),
		status: yup.object(),

		startDate: yup.date().required("Start date is required"),
		endDate: yup
			.date()
			.required("End date is required")
			.min(yup.ref("startDate"), "End date cannot be before start date"),
	},
	[
		["what", "what"], //cyclic dependency
	]
);

module.exports = schema;
