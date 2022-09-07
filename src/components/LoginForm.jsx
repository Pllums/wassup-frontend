import React, { useState } from "react";
import { motion } from "framer-motion";
import RegisterForm from "./RegisterForm";
import axios from "axios";

export default function LoginForm(props) {
	const [isUser, setIsUser] = useState({ email: "", password: "" });

	const [formState, setFormState] = useState({ email: "", password: "" });

	const handleSubmit = (event) => {
		event.preventDefault();

		axios
			.post("https://wassup-backend.herokuapp.com/api/v1/auth/login", {
				email: formState.username,
				password: formState.password,
			})
			.then((res) => console.log(res))
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<motion.div className="login-wrapper">
			<motion.div>
				<h2>Please Login</h2>
			</motion.div>
			<hr />
			<div>
				<form onSubmit={handleSubmit} method="post">
					<input
						type="text"
						placeholder="email"
						value={formState.email}
						onChange={(e) =>
							setFormState({ ...formState, email: e.target.value })
						}></input>
					<input
						name="username"
						type="password"
						placeholder="Password"
						value={formState.password}
						onChange={(e) =>
							setFormState({ ...formState, password: e.target.value })
						}></input>
					<button
						// onClick={setIsUser({ username: "test", password: "test" })}
						type="submit">
						Login
					</button>
				</form>
				<span>
					Don't have an account?
					<button onClick={props.hasAccount}>Register Here</button>
				</span>
			</div>
		</motion.div>
	);
}
