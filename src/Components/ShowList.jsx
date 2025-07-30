import ListItem from "./ListItem";


const ShowList = ({data, removeItem, editItem, activeItem, packItem, clearList, sortBy}) => {
	// Calculate the total number of items
	const itemsNum = data.length;

	// Calculate the number of packed items
	const packedCount = data.filter((item) => item.isPacked).length;

	// Calculate the percentage of packed items
	const packedPercentage =
		itemsNum === 0 ? "0" : Math.round((packedCount / itemsNum) * 100);

	return (
		<div className="show-list">
			<main className="bg-brown">
				<div className="container d-flex flex-column gap-4 align-items-center py-4">
					{/* Display the list of items */}
                    <section className="d-flex flex-wrap row-gap-2 w-100 m-h-200">
						{data.map((obj, index) => {
							return (
								<ListItem
									key={index}
									classN="col-12 col-md-6 col-xl-4  col-xxl-3"
									obj={obj}
									removeItem={() => removeItem(index)}
									editItem={() => editItem(index)}
									activeItem={activeItem === index}
									packItem={() => packItem(index)}
								/>
							);
						})}
					</section>
                    {/* Controls for sorting and clearing the list */}
					<section className="btns d-flex gap-3 flex-wrap justify-content-center">
						<select
							className="bg-offwhite c-brown fw-bold rounded-pill p-1 text-center"
							role="button"
							onChange={(e) => sortBy(e.target.value)}
						>
							<option value="default">SORT BY INPUT ORDER</option>
							<option value="description">SORT BY INPUT DESCRIPTION</option>
							<option value="packed status">SORT BY INPUT PACKED STATUS</option>
						</select>
						<button
							onClick={clearList}
							className="btn btn-dark border-0 bg-offwhite c-brown fw-bold rounded-pill p-1 px-3"
						>
							CLEAR LIST
						</button>
					</section>
				</div>
			</main>
            {/* Footer displaying the status of the packing list */}
			<footer className="bg-blue">
				<div className="container text-center py-5 fs-4 foot-font fw-bold fst-italic c-brown">
					{itemsNum === 0
						? "Start adding some items to your packing list 🚀"
						: `💼 You have ${itemsNum} items on your list, and you already packed ${packedCount} (${packedPercentage}%)`}
				</div>
			</footer>
		</div>
	);
};

export default ShowList;
