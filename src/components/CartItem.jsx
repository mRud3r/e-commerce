export default function CartItem({item}) {

    return (
        <div className="flex flex-row border-stone-500 p-2">
            <div className="bg-stone-500 size-10"></div>
            <div className="flex flex-col">
                <p>{item.name}</p>
                <p>{item.price}</p>
            </div>
        </div>
    );
}