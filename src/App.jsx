import { useState, useEffect, useCallback } from "react";
import TravelList from "./Components/TravelList";
import Loader from "./Components/Loader/Loader";

// Constants
const LOADING_DURATION = 1800; // ms

function App() {
	const [isLoading, setIsLoading] = useState(true);

	// Memoized loading completion handler
	const handleLoadingComplete = useCallback(() => {
		setIsLoading(false);
	}, []);

	// Loading effect
	useEffect(() => {
		const timer = setTimeout(handleLoadingComplete, LOADING_DURATION);
		return () => clearTimeout(timer);
	}, [handleLoadingComplete]);

	return (
		<div
			className="App"
			role="application"
			aria-label="Travel List Application"
		>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<TravelList />
					
				</>
			)}
		</div>
	);
}

export default App;
