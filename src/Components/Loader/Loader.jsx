import React, { memo } from "react";
import "./Loader.css";

const Loader = memo(() => {
	return (
		<div
			className="loader-container"
			role="status"
			aria-label="Loading travel application"
			aria-live="polite"
		>
			<div className="loader-content">
				<div className="loader-icon" aria-hidden="true">
					🧳
				</div>
				<h2 className="loader-title">Far Away</h2>
				<div className="loader-spinner" aria-hidden="true">
					<div className="spinner"></div>
				</div>
				<p className="loader-text">Loading your travel adventure...</p>
				{/* Screen reader only text */}
				<span className="sr-only">
					Please wait while the application loads
				</span>
			</div>
		</div>
	);
});

Loader.displayName = "Loader";

export default Loader;
