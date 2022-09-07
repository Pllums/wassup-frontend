import React, { useState } from "react";
import { motion } from "framer-motion";
import LoginForm from "./LoginForm";
import axios from "axios";

export default function RegisterForm(props) {
	const [isUser, setIsUser] = useState({ username: "", password: "" });

	const [formState, setFormState] = useState({
		username: "",
		name: "",
		password: "",
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post("https://wassup-backend.herokuapp.com/api/v1/auth/signup", {
				email: formState.username,
				name: formState.name,
				password: formState.password,
			})
			.then((res) => console.log(res))
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<motion.div className="register-wrapper">
			<motion.div>
				<h2>Please Register</h2>
			</motion.div>
			<hr />
			<div>
				<form onSubmit={handleSubmit} method="post">
					<input
						type="text"
						placeholder="Name"
						value={formState.name}
						onChange={(e) =>
							setFormState({ ...formState, name: e.target.value })
						}></input>
					<input
						type="text"
						placeholder="email"
						value={formState.email}
						onChange={(e) =>
							setFormState({ ...formState, email: e.target.value })
						}></input>
					<input
						type="password"
						placeholder="Password"
						value={formState.password}
						onChange={(e) =>
							setFormState({ ...formState, password: e.target.value })
						}></input>
					<button
						// onClick={setIsUser({ username: "test", password: "test" })}
						type="submit">
						Register
					</button>
				</form>
				<span>
					Already have an account?
					<button onClick={props.hasAccount}>Login Here</button>
				</span>
			</div>
		</motion.div>
	);
}
