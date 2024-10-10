import { useState } from "react"

export default function ContactForm() {
    const [name, setName] = useState('');

    return (

        <form>
            <label className="flex flex-col gap-1 text-sm">
                Name
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='name' className="bg-stone-300 h-20 w-60 p-2" />
            </label>
        </form>
    );
}