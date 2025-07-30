import { memo } from "react";
import "./TravelList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormInputs from "./FormInputs";

const TravelList = memo(() => {
	return (
		<main
			className="travel-list bg-orange d-flex flex-column h-100v justify-content-between"
			role="main"
			aria-label="Travel list application"
		>
			{/* Application header */}
			<header>
				<h1 className="text-center bg-yellow p-3 py-5 mb-0">
					<span role="img" aria-label="Island">
						🏝️
					</span>
					Far Away
					<span role="img" aria-label="Luggage">
						🧳
					</span>
				</h1>
			</header>

			{/* Main content area */}
			<FormInputs />
		</main>
	);
});

TravelList.displayName = "TravelList";

export default TravelList;
