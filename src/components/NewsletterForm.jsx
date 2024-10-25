import { useState } from "react";

export default function NewsletterForm() {
	const [email, setEmail] = useState("");
    const [isChecked, setIsChecked] = useState(false);
	const [isSent, setIsSent] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
		setEmail("");
        setIsChecked(false);
		setIsSent(true);
	};

	return (
		<div className="flex flex-col gap-2">
			<p className="text-lg font-bold">Join The Club</p>
			<div>
				<form className="flex flex-col gap-2"
					onSubmit={handleSubmit}>
					<div className="border w-full max-w-96 flex flex-row justify-between">
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="email"
							required
							className=" bg-inherit p-4 w-full"
						/>
						<button type="submit" className="p-4 w-max bg-stone-500 text-stone-50 disabled:bg-stone-200 disabled:text-stone-950"
						disabled={isSent}>
						{isSent ? "Subscribed" : "Subscribe"}
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
