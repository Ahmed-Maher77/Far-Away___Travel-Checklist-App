import { useEffect, useRef, useState } from "react";
import ShowList from "./ShowList";

const FormInputs = () => {
	// State variables
	const [data, setData] = useState(() => {
		const storedData = localStorage.getItem("storedData");
		return storedData ? JSON.parse(storedData) : [];
	});
	const [sortedData, setSortedData] = useState([]);
	const [item, setItem] = useState("");
	const [itemCount, setItemCount] = useState(1);
	const [sortByValue, setSortByValue] = useState("default");

	// Ref to focus on the input field
	const inputRef = useRef(null);
	const [buttonContent, setButtonContent] = useState("ADD");
	const [activeItem, setActiveItem] = useState(null);

	// Save data to localStorage whenever `data` state changes
	useEffect(() => {
		localStorage.setItem("storedData", JSON.stringify(data));
		sortBy(sortByValue);
	}, [data]);

	// Add or update an item
	const addItem = () => {
		const newItem = { count: itemCount, value: item, isPacked: false };
		if (!item.trim()) return; // Avoid adding empty items
		// ADD
		if (buttonContent === "ADD") {
			if (sortedData.length) {
				setSortedData([...sortedData, newItem]);
			}
			setData([...data, newItem]);
		}
		// UPDATE
		else if (buttonContent === "UPDATE") {
			if (sortedData.length) {
				setSortedData((prevData) =>
					prevData.map((el, index) =>
						index === activeItem ? { ...newItem } : el
					)
				);
			}
			setData((prevData) =>
				prevData.map((el, index) =>
					index === activeItem ? { ...newItem } : el
				)
			);
			setButtonContent("ADD");
			setActiveItem(null);
		}
		setItem("");
		setItemCount(1);
	};

	// Prepare the form fields for editing
	const editItem = (index) => {
		const currentItem = sortedData.length ? sortedData[index] : data[index];
		setItem(currentItem.value);
		setItemCount(currentItem.count);
		inputRef.current.focus();
		setButtonContent("UPDATE");
		setActiveItem(index);
	};

	// toggle the packed status of an item
	const packItem = (index) => {
		function toggleStatus(arr) {
			return arr.map((ele, inx) =>
				inx === index ? { ...ele, isPacked: !ele.isPacked } : ele
			);
		}
		if (sortedData.length) {
			setSortedData(toggleStatus(sortedData));
			setData(toggleStatus(sortedData));
		} else {
			setData(toggleStatus(data));
		}
	};

	// remove an item
	const removeItem = (index) => {
		let filteredArr = data.filter((_, inx) => inx !== index);
		setData(filteredArr);
		sortedData.length && setSortedData(filteredArr);
	};

	// clear the entire list
	const clearList = () => {
		let wantDelete = window.confirm(
			"Are you sure you want to delete all items?"
		);
		if (wantDelete) {
			setData([]);
			setSortedData([]);
		}
	};

	// sort items based on the selected value
	const sortBy = (value) => {
		setSortByValue(value);
		let copyData = [...data];
		if (value === "description") {
			copyData.sort((a, b) => {
				a = a.value.toLowerCase();
				b = b.value.toLowerCase();
				return a > b ? 1 : a < b ? -1 : 0;
			});
		} else if (value === "packed status") {
			copyData.sort((a, b) => {
				a = a.isPacked;
				b = b.isPacked;
				return b - a;
			});
		} else {
			copyData = [...data];
		}
		setSortedData(copyData);
	};

	return (
		<div className="form-inputs">
			<div className="create bg-orange py-5">
				<div className="container text-center d-flex flex-wrap row-gap-5 gap-3 gap-xl-5 align-items-center">
					<h3 className="col-12 col-lg fwe-600 c-brown">
						What do you need for your 😍 trip?
					</h3>
					<main className="col-12 col-lg-8 d-flex gap-3 row-gap-4 flex-wrap justify-content-center">
						<select
							className="px-4 py-2 rounded-pill text-center c-brown fw-bold fs-5"
							onChange={(e) => setItemCount(e.target.value)}
							value={itemCount}
						>
							{[...Array(9).keys()].map((i) => (
								<option key={i + 1} value={i + 1}>
									{i + 1}
								</option>
							))}
						</select>
						<input
							value={item}
							onChange={(e) => setItem(e.target.value)}
							ref={inputRef}
							className="col-8 col-sm-7 col-md-8 rounded-pill border-0 px-4 p-2 c-brown fw-bold fs-5"
							type="text"
							placeholder="Item..."
						/>
						<button
							onClick={addItem}
							role="button"
							className="btn btn-light border-blue bg-blue fs-5 px-3 rounded-pill fw-bold c-brown "
						>
							{buttonContent}
						</button>
					</main>
				</div>
			</div>
			<ShowList
				data={sortedData.length ? sortedData : data}
				removeItem={removeItem}
				editItem={editItem}
				activeItem={activeItem}
				packItem={packItem}
				clearList={clearList}
				sortBy={sortBy}
			/>
		</div>
	);
};

export default FormInputs;
