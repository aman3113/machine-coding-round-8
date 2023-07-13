import React from "react";
import { Select } from "@chakra-ui/react";
import { eventsData } from "../Data";

const NavBar = ({ setMeetupArr }) => {
	function handleSelectChange(e) {
		const selectedValue = e.target.value;
		if (selectedValue === "Both") {
			setMeetupArr(eventsData.meetups);
		} else {
			setMeetupArr((prev) =>
				eventsData.meetups.filter(
					(meetup) => meetup.eventType === selectedValue
				)
			);
		}
	}
	return (
		<nav className="flex items-center justify-between">
			<p className="text-2xl font-bold">Meetup Events</p>
			<Select
				placeholder="Select Event Type"
				className="cursor-pointer"
				width={200}
				variant="outline"
				background="white"
				textColor="gray.500"
				onChange={handleSelectChange}
			>
				<option value="Online">Online</option>
				<option value="Offline">Offline</option>
				<option value="Both">Both</option>
			</Select>
		</nav>
	);
};

export default NavBar;
