export default function Product({ name, price }) {
    return (
        <div className="size-full">
            <div className="w-full h-96 bg-stone-400"></div>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    );
}