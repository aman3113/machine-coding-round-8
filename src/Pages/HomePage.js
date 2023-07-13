import React, { useState } from "react";
import { eventsData } from "../Data";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import EventCard from "../Components/EventCard";

const HomePage = () => {
	const [meetupArr, setMeetupArr] = useState(eventsData.meetups);
	return (
		<div className="p-2">
			<Header setMeetupArr={setMeetupArr} />
			<div className="p-2 border-t-2 border-gray-400 mt-5">
				<NavBar setMeetupArr={setMeetupArr} />
				<div className="flex gap-4 flex-wrap p-4">
					{meetupArr?.map((meetup) => (
						<EventCard event={meetup} key={meetup.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
