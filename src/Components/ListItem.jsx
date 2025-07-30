
const ListItem = ({ obj, classN, removeItem, editItem, activeItem, packItem }) => {
	return (
		<div className={`list-item d-flex align-items-center gap-3 h-40 p-3 rounded ${classN} ${activeItem && 'active'}`}>
            {/* Checkbox to mark item as packed */}
            <input type="checkbox" className="dimension-20" role="button" checked={obj.isPacked} onChange={packItem}/>
			{/* Display the item count and value, with a strikethrough if packed */}
            <p className={`fs-3 c-offwhite m-0 ${obj.isPacked && 'text-decoration-line-through'}`}>{obj.count} {obj.value}</p>
			{/* Controls for editing and removing the item */}
            <div className="control ms-3">
            <button className="btn btn-outline-danger border-0 p-1 mt-1 text-white" onClick={editItem}>&#128394;</button>
            <button className="btn btn-outline-danger border-0 p-1 mt-1" onClick={removeItem}>&#10060;</button>
            </div>
		</div>
	);
};

export default ListItem;
