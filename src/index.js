import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./Components/Styles/GlobalStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<GlobalStyle />
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

// document.addEventListener('DOMContentLoaded', function () {
//   var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
//   var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
//     return new bootstrap.Offcanvas(offcanvasEl)
//   })

// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
