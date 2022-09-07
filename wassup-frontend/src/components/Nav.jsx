import React from "react";
import { motion } from "framer-motion";

export default function Nav() {
	return (
		<nav className="navbar navbar-expand-lg bg-body">
			<div className="container-fluid">
				<a className="navbar-brand" href="">
					Wassup
				</a>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<motion.a
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className="nav-link">
								My Account
							</motion.a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
