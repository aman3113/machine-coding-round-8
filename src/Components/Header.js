import React, { useState } from "react";
import logo from "../Images/Applogo.png";

import { AiOutlineSearch } from "react-icons/ai";
import { eventsData } from "../Data";

const Header = ({ setMeetupArr }) => {
	const [searchInput, setSearchInput] = useState("");

	function handleSearch(e) {
		const searchText = e.target.value.toLowerCase();
		setMeetupArr((prev) =>
			eventsData.meetups.filter(
				(meetup) =>
					meetup.title.toLowerCase().includes(searchText) ||
					meetup.eventTags.some((item) =>
						item.toLowerCase().includes(searchText)
					)
			)
		);
	}
	return (
		<header className=" flex justify-between items-center">
			<div>
				<img src={logo} className="w-[150px] mix-blend-multiply" alt="" />
			</div>
			<div className="px-2 py-1 w-[30%] flex items-center gap-1  bg-white text-gray-600 rounded">
				<AiOutlineSearch size={25} />
				<input
					type="search"
					placeholder="search by title and tags..."
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
					onKeyDown={handleSearch}
					className="focus:outline-none w-full"
				/>
			</div>
		</header>
	);
};

export default Header;
