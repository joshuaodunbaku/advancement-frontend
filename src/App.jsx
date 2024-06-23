import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Navbar/Navbar";
import Home from "./Routes/Home";
import AboutUs from "./Routes/AboutUs";
import Apply from "./Routes/Apply";
import Contact from "./Routes/Apply";
import Footer from "./Components/Footer";
import Services from "./Routes/Services";
// Auth
import Login from "./Routes/Login";
import StaffLogin from "./Routes/StaffLogin";

import SignUp from "./Routes/SignUp";
// import SeekerSignUp from "./Routes/SeekerSignUp";
import EmployerRegComp from "./Components/RegistrationComp/Employer/EmployerRegComp";
// import SeekerForm from "./Components/RegistrationComp/Seeker/SeekerForm";
import SeekerRegComp from "./Components/RegistrationComp/Seeker/SeekerRegComp";
import { MyContainer } from "./Components/Styles/GlobalStyle.css";

// Staff Dashboard
import StaffDashboard from "./Routes/StaffDashboard";
import StaffEditProfilePage from "./Routes/StaffDashboardMenu/EditProfilePage";
import StaffEmployersPage from "./Routes/StaffDashboardMenu/Employers";
import StaffAddUserPage from "./Routes/StaffDashboardMenu/AddUserPage";
import StaffJobSeekersPage from "./Routes/StaffDashboardMenu/JobSeekersPage";
import StaffPostJobPage from "./Routes/StaffDashboardMenu/PostJobPage";
import StaffViewAllUsersPage from "./Routes/StaffDashboardMenu/ViewAllUsersPage";

// Client Dashboard
import ClientDashboard from "./Routes/ClientDashboard";
import ClientNotificationsPage from "./Routes/ClientDashboard/NotificationsPage";
import ClientEditProfilePage from "./Routes/ClientDashboard/EditProfilePage";
import ClientPostJobPage from "./Routes/StaffDashboardMenu/PostJobPage";
import ClientViewAllUsersPage from "./Routes/ClientDashboard/ViewAllUsersPage";



import Jobs from "./Routes/Jobs";
import JobDescription from "./Routes/JobDescription";
import NotFoundPage from "./Routes/NotFoundPage";
import ChangePassword from "./Routes/StaffDashboardMenu/ChangePassword";
import StaffJobPage from "./Routes/StaffJobPage";

function App() {
	return (
		<MyContainer
			$padding_y="0px"
			height="100vh"
			className="App animate__animated d-flex flex-column justify-content-between"
		>
			<NavBar />
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="about" element={<AboutUs />} />
				<Route path="apply" element={<Apply />} />
				<Route path="contact" element={<Contact />} />
				<Route path="services" element={<Services />} />

				<Route path="jobs" element={<Jobs />} />
				<Route path="jobs/job-description" element={<JobDescription />} />
				<Route path="staff-job-page" element={<StaffJobPage />} />

				{/* Auth */}
				<Route path="login" element={<Login />} />
				<Route path="login-as-staff" element={<StaffLogin />} />
				<Route path="signup" element={<SignUp />} />
				<Route path="signup/employer" element={<EmployerRegComp />} />
				<Route path="signup/seeker" element={<SeekerRegComp />} />

				{/* Staff Dashboard Quick Menu */}
				<Route path="staff/dashboard" element={<StaffDashboard />} />
				<Route path="staff/dashboard/add-user" element={<StaffAddUserPage />} />
				<Route path="staff/dashboard/edit-profile" element={<StaffEditProfilePage />} />
				<Route path="staff/dashboard/employers" element={<StaffEmployersPage />} />
				<Route path="staff/dashboard/job-seekers" element={<StaffJobSeekersPage />} />
				<Route path="staff/dashboard/post-a-job" element={<StaffPostJobPage />} />
				<Route path="staff/dashboard/view-users" element={<StaffViewAllUsersPage />} />
				<Route path="staff/dashboard/change-password" element={<ChangePassword />} />

				{/* Client Dashboard Quick Menu */}
				<Route path="client/dashboard" element={<ClientDashboard />} />
				<Route path="client/dashboard/edit-profile" element={<ClientEditProfilePage />} />
				<Route path="client/dashboard/post-a-job" element={<ClientPostJobPage />} />
				<Route path="client/dashboard/view-users" element={<ClientViewAllUsersPage />} />
				<Route path="client/dashboard/notifications-page" element={<ClientNotificationsPage />} />

				<Route path="*" element={<NotFoundPage />} />
			</Routes>

			<Footer />
		</MyContainer>
	);
}

export default App;
