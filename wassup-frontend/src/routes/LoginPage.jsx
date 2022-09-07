import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import Nav from "../components/Nav";
import RegisterForm from "../components/RegisterForm";

export default function LoginPage() {
	const [hasAccount, setHasAccount] = useState(true);

	return (
		<>
			<Nav />
			<section className="form-wrapper">
				{hasAccount && (
					<LoginForm
						hasAccount={() => {
							setHasAccount(false);
						}}
					/>
				)}
				{hasAccount === false && (
					<RegisterForm
						hasAccount={() => {
							setHasAccount(true);
						}}
					/>
				)}
			</section>
		</>
	);
}
