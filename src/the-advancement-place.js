import Image1 from "./Assets/svg/undraw_updated_resume_re_7r9j.svg";
import Image2 from "./Assets/svg/undraw_interview_re_e5jn.svg";
import Image3 from "./Assets/svg/undraw_educator_re_ju47.svg";
import Image4 from "./Assets/svg/undraw_shared_workspace_re_3gsu.svg";

import Image1Blue from "./Assets/svg/undraw_updated_resume_re_7r9j_blue.svg";
import Image2Blue from "./Assets/svg/undraw_interview_re_e5jn_blue.svg";
import Image3Blue from "./Assets/svg/undraw_educator_re_ju47_blue.svg";
import Image4Blue from "./Assets/svg/undraw_shared_workspace_re_3gsu_blue.svg";

const the_advancement_place_services = [
	{
		name: "Recruitment",
		img_src: require("./Assets/pexels-resumegenius-18848929.jpg"),
		service:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, natus sit minus reiciendis, doloribus voluptate itaque odio et, laborum nemo maiores beatae excepturi nesciunt ducimus!",
	},
	{
		name: "Training",
		img_src: require("./Assets/pexels-kampus-8171204.jpg"),
		service:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, natus sit minus reiciendis, doloribus voluptate itaque odio et, laborum nemo maiores beatae excepturi nesciunt ducimus!",
	},
	{
		name: "Facility",
		img_src: require("./Assets/pexels-heyho-7534170.jpg"),
		service:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, natus sit minus reiciendis, doloribus voluptate itaque odio et, laborum nemo maiores beatae excepturi nesciunt ducimus!",
	},
	{
		name: "Co-working Space",
		img_src: require("./Assets/pexels-heyho-7534181.jpg"),
		service:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, natus sit minus reiciendis, doloribus voluptate itaque odio et, laborum nemo maiores beatae excepturi nesciunt ducimus!",
	},
];

const quickStart = [
	{
		name: "Looking for Job?",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		img_src: Image1,
		img_src_blue: Image1Blue,
		email: "employer@gmail.com",
		link: { text: "Submit Resume", path: "/jobs" },
	},
	{
		name: "Hire a Candidate",
		text: "Looking to hire the best qualified candidate for a vacant position? ",
		img_src: Image2,
		img_src_blue: Image2Blue,
		email: "job@gmail.com",
		link: { text: "Submit Requirement", path: "/view-users" },
	},
	{
		name: "Co-operate Training",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		img_src: Image3,
		img_src_blue: Image3Blue,
		email: "space@gmail.com",
		link: { text: "Request", path: "services/apply" },
	},
	{
		name: "Co-working space",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		img_src: Image4,
		img_src_blue: Image4Blue,
		email: "space@gmail.com",
		link: { text: "Request", path: "services/apply" },
	},
];

const user_object = [
	{
		id: 1,
		fname: "Olumide",
		lname: "Ayomide",
		email: "Olu@gmail.com",
		phone: "07098778233",
		sex: "M",
		privileges: ["none"],
		status: false,
	},
	{
		id: 2,
		fname: "Olumide",
		lname: "Ayomide",
		email: "Olu@gmail.com",
		phone: "07098778233",
		sex: "M",
		privileges: ["none"],
		status: true,
	},
	{
		id: 3,
		fname: "Olumide",
		lname: "Ayomide",
		email: "Olu@gmail.com",
		phone: "07098778233",
		sex: "M",
		privileges: ["none"],
		status: true,
	},
	{
		id: 4,
		fname: "Olumide",
		lname: "Ayomide",
		email: "Olu@gmail.com",
		phone: "07098778233",
		sex: "M",
		privileges: ["none"],
		status: false,
	},
	{
		id: 5,
		fname: "Olumide",
		lname: "Ayomide",
		email: "Olu@gmail.com",
		phone: "07098778233",
		sex: "M",
		privileges: ["none"],
		status: false,
	},
	{
		id: 6,
		fname: "Olumide",
		lname: "Ayomide",
		email: "Olu@gmail.com",
		phone: "07098778233",
		sex: "M",
		privileges: ["none"],
		status: true,
	},
	{
		id: 7,
		fname: "Olumide",
		lname: "Ayomide",
		email: "Olu@gmail.com",
		phone: "07098778233",
		sex: "M",
		privileges: ["none"],
		status: true,
	},
	{
		id: 8,
		fname: "Olumide",
		lname: "Ayomide",
		email: "Olu@gmail.com",
		phone: "07098778233",
		sex: "M",
		privileges: ["none"],
		status: false,
	},
	{
		id: 9,
		fname: "Olumide",
		lname: "Ayomide",
		email: "Olu@gmail.com",
		phone: "07098778233",
		sex: "M",
		privileges: ["none"],
		status: true,
	},
	{
		id: 10,
		fname: "Olumide",
		lname: "Ayomide",
		email: "Olu@gmail.com",
		phone: "07098778233",
		sex: "M",
		privileges: ["none"],
		status: false,
	},
	{
		id: 11,
		fname: "Olumide",
		lname: "Ayomide",
		email: "Olu@gmail.com",
		phone: "07098778233",
		sex: "M",
		privileges: ["none"],
		status: true,
	},
	{
		id: 12,
		fname: "Olumide",
		lname: "Ayomide",
		email: "Olu@gmail.com",
		phone: "07098778233",
		sex: "M",
		privileges: ["none"],
		status: true,
	},
];

const industryOptions = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
	{ value: "vanilla", label: "Vanilla" },
];
const workTypeOptions = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
	{ value: "vanilla", label: "Vanilla" },
];
const experienceLevelOption = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
	{ value: "vanilla", label: "Vanilla" },
];
const minimumQualificationOption = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
	{ value: "vanilla", label: "Vanilla" },
];
const locationOptions = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
	{ value: "vanilla", label: "Vanilla" },
];
const statusOption = [
	{ value: "active", label: "Active" },
	{ value: "inactive", label: "Inactive" },
	{ value: "suspended", label: "Suspended" },
	{ value: "reported", label: "Reported" },
];

export {
	the_advancement_place_services,
	quickStart,
	user_object,
	experienceLevelOption,
	industryOptions,
	workTypeOptions,
	locationOptions,
	minimumQualificationOption,
	statusOption,
};
