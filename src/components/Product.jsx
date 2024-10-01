export default function Product({ name, price }) {
    return (
        <div className="w-80 h-96">
            <div className="w-full h-full bg-slate-400"></div>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    );
}