import { deleteItem } from '../api';

export default function ItemList({ items, onRefresh }) {
    const handleDelete = async (id) => {
        await deleteItem(id);
        onRefresh();
    };

    return (
        <div className="item-list">
            <h2>Items</h2>
            {items.map(item => (
                <div key={item._id} className="item-card">
                    <div className="item-info">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p className="price-tag">Price: ${item.price}</p>
                    </div>
                    <button 
                        className="delete-btn" 
                        onClick={() => handleDelete(item._id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}