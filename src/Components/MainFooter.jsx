import { memo, useMemo } from "react";
import linkedin_icon from "../assets/images/linkedin.png";
import github_icon from "../assets/images/github.png";
import facebook_icon from "../assets/images/facebook.png";

const MainFooter = memo(() => {
	// Memoized current year to prevent unnecessary recalculations
	const currentYear = useMemo(() => new Date().getFullYear(), []);

	// Memoized social links data
	const socialLinks = useMemo(
		() => [
			{
				name: "Portfolio",
				url: "https://ahmedmaher-portfolio.vercel.app/",
				icon: "🌐",
				description: "Visit my portfolio website",
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/ahmed-maher-algohary",
				icon: linkedin_icon,
				description: "Connect with me on LinkedIn",
			},
			{
				name: "GitHub",
				url: "https://github.com/Ahmed-Maher77",
				icon: github_icon,
				description: "View my projects on GitHub",
			},
			{
				name: "Facebook",
				url: "https://web.facebook.com/profile.php?id=100012154268952",
				icon: facebook_icon,
				description: "Follow me on Facebook",
			},
		],
		[]
	);

	return (
		<footer
			className="bg-brown text-white py-4 px-3 mt-auto"
			role="contentinfo"
			aria-label="Footer with contact information"
		>
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						{/* Copyright information */}
						<p className="mb-2">
							© {currentYear} <strong>Ahmed Maher</strong>. All
							rights reserved.
						</p>

						{/* Social media links */}
						<nav
							className="social-links flex-wrap"
							aria-label="Social media links"
						>
							{socialLinks.map((link, index) => (
								<a
									key={`${link.name}-${index}`}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-white me-3 text-decoration-none"
									aria-label={link.description}
								>
									{link.icon === "🌐" ? (
										<span aria-hidden="true">
											{link.icon}
										</span>
									) : (
										<img
											src={link.icon}
											alt=""
											aria-hidden="true"
											width="20"
											height="20"
										/>
									)}
									<span>{link.name}</span>
								</a>
							))}
						</nav>
					</div>
				</div>
			</div>
		</footer>
	);
});

MainFooter.displayName = "MainFooter";

export default MainFooter;
