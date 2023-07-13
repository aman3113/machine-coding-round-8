import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
	const { id, title, eventStartTime, eventThumbnail, eventType } = event;
	return (
		<Link to={`/event/${id}`}>
			<div className="border rounded-md overflow-hidden w-[80vw] md:w-[40vw] lg:w-[30vw] bg-white mb-3 p-1">
				<div className="w-full h-[80%] relative flex-grow">
					<img src={eventThumbnail} className="w-full h-full" alt="" />
					<p className="p-2 bg-white text-gray-500 rounded-md absolute top-1 left-1">
						{eventType}
					</p>
				</div>
				<div className=" h-[20%]">
					<p>{eventStartTime}</p>
					<p className="text-xl font-bold">{title}</p>
				</div>
			</div>
		</Link>
	);
};

export default EventCard;
