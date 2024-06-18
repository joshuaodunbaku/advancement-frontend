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
	},
	[
		["what", "what"], //cyclic dependency
	]
);

module.exports = schema;
