export default function NewsletterForm() {
    return (
        <div className="flex flex-col gap-4">
        <p>
            Join The Club
        </p>
        <form action="">
            <input type="email" placeholder="email" className="border-stone-900 border bg-inherit w-full p-4 max-w-96" />
        </form>
        </div>
    );
}