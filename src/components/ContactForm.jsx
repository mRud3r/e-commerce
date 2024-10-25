import { useState } from "react"

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSent, setIsSennt] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            message: ''
        })
        setIsSennt(true);
    }

    return (

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            
            <div>
            <label className="flex flex-col gap-1 text-sm">Name</label>
            <input type="text" onChange={handleChange} name="name" value={formData.name} placeholder='name' className="bg-stone-200 w-full p-4" />
            </div>

            <div className="flex flex-col gap-1 text-sm">
            <label>E-mail</label>
            <input type="email" onChange={handleChange} name="email" value={formData.email} placeholder='email' className="bg-stone-200 w-full p-4" />
            </div>

            <div className="flex flex-col gap-1 text-sm">
            <label>Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="your message..." className="bg-stone-200 w-full p-4"></textarea>
            </div>

            <button type="submit" disabled={isSent} className="bg-stone-700 disabled:bg-stone-400 hover:bg-stone-800 text-stone-50 py-4" >{isSent ? "Thank You" : "Send"}</button>
        </form>
    );
}