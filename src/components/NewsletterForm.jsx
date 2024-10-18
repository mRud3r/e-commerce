import { useState } from "react";

export default function NewsletterForm() {
	const [email, setEmail] = useState("");
    const [isChecked, setIsChecked] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
		setEmail("");
        setIsChecked(false);
	};

	return (
		<div className="flex flex-col gap-4">
			<p>Join The Club</p>
			<div>
				<form
					onSubmit={handleSubmit}>
					<div className="border w-96 flex flex-row justify-between">
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="email"
							required
							className=" bg-inherit p-4 w-full"
						/>
						<button type="submit" className="p-4 w-max">
							Subscribe
						</button>
					</div>
                    <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                                className="mr-2"
                                required
                            />
                            <span className="text-sm">I agree to the terms and conditions</span>
                        </label>
				</form>
			</div>
		</div>
	);
}
