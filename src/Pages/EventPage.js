import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import { BiArrowBack } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { eventsData } from "../Data";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
} from "@chakra-ui/react";

const EventPage = () => {
	const { eventId } = useParams();
	const [openRsvpModal, setOpenRsvpModal] = useState(false);
	const [rsvpAdded, setRsvpAdded] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
	});
	const event = eventsData.meetups.find((meetup) => meetup.id === eventId);
	const {
		title,
		eventStartTime,
		eventEndTime,
		location,
		address,
		eventThumbnail,
		eventDescription,
		hostedBy,
		eventType,
		isPaid,
		eventTags,
		speakers,
		price,
		additionalInformation,
	} = event;

	function handleFormChange(e) {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	function handleFormSubmit() {
		if (formData.name.trim() !== "" && formData.email.trim() !== "") {
			setRsvpAdded(true);
			setOpenRsvpModal(false);
		} else {
			alert("Fill required Details");
		}
	}

	function handleModalClose() {
		setOpenRsvpModal(false);
	}
	return (
		<div className="p-4">
			<Link to="/">
				<BiArrowBack size={30} />
			</Link>
			<div className="flex flex-col md:flex-row gap-4 p-4 px-6">
				<div className=" md:w-[50%] flex flex-col gap-3">
					<div className="w-full">
						<p className="text-3xl font-bold">Marketing Seminar</p>
						<p className="text-xl font-bold">Hosted By:</p>
						<p>{hostedBy}</p>
						<img src={eventThumbnail} alt="" className="w-[80%] m-auto my-4" />
					</div>
					<div>
						<p className="text-2xl font-bold">Details:</p>
						<p>{eventDescription}</p>
					</div>
					<div>
						<p className="text-2xl font-bold">Additional Information:</p>
						<p>
							<span className="font-semibold mr-2">Dress Code:</span>{" "}
							{additionalInformation.dressCode}
						</p>
						<p>
							<span className="font-semibold mr-2">Age Restrictions:</span>{" "}
							{additionalInformation.ageRestrictions}
						</p>
					</div>
					<div>
						<p className="text-2xl font-bold">Event Tags:</p>
						<div className="flex gap-3 items-center mt-2">
							{eventTags?.map((tag, idx) => (
								<p
									className="px-2 py-1 bg-red-600 text-white rounded-md"
									key={idx}
								>
									{tag}
								</p>
							))}
						</div>
					</div>
				</div>
				<div className="md:w-[50%] flex flex-col gap-4 p-6">
					<div className="bg-white p-3  ">
						<div className="flex items-center gap-2">
							<BiTimeFive size={20} />
							<div>
								<p>{eventStartTime} To </p>
								<p>{eventEndTime}</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<MdOutlineLocationOn size={20} />
							<div>
								<p>{location}</p>
								<p>{address}</p>
							</div>
						</div>
						<div> ₹ {price}</div>
					</div>
					<div>
						<p className="text-2xl font-bold mb-3">
							Speakers: ({speakers.length})
						</p>
						<div className="flex flex-wrap gap-4">
							{speakers?.map((speaker, idx) => (
								<div
									key={idx}
									className="flex flex-col items-center gap-2 bg-white shadow-md shadow-gray-600 rounded-lg p-2 min-w-[150px]"
								>
									<img
										src={speaker.image}
										className="w-[50px] h-[50px] rounded-[50%]"
										alt=""
									/>
									<p className="font-semibold">{speaker.name}</p>
									<p>{speaker.designation}</p>
								</div>
							))}
						</div>
						<div className="flex justify-center mt-4">
							{rsvpAdded ? (
								<button
									disabled
									className="bg-red-600 text-white rounded-md p-1 px-8 "
								>
									Already RSVPed
								</button>
							) : (
								<button
									onClick={() => setOpenRsvpModal(true)}
									className="bg-red-600 text-white rounded-md p-1 px-8 "
								>
									RSVP
								</button>
							)}
						</div>
					</div>
				</div>
				<Modal isOpen={openRsvpModal} onClose={handleModalClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Complete your RSVP</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<p className="text-gray-700 mb-4">
								Fill in Your Personal Information.
							</p>
							<form>
								<label htmlFor="nameInput" className="font-semibold">
									Name:
								</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleFormChange}
									id="nameInput"
									className="w-full border rounded-md bg-white p-1 mb-3"
								/>

								<label htmlFor="emailInput" className="font-semibold">
									Email:
								</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleFormChange}
									id="emailInput"
									className="w-full border rounded-md bg-white p-1"
								/>
							</form>
							{isPaid && <p>* You have to make the payment at venue.</p>}
						</ModalBody>

						<ModalFooter>
							<Button
								colorScheme="red"
								textColor={"white"}
								width={"100%"}
								onClick={handleFormSubmit}
							>
								RSVP
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</div>
		</div>
	);
};

export default EventPage;
