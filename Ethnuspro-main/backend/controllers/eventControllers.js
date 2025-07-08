import Event from "../models/eventModel.js";

export const createEvent = async (req, res) => {
  const event = await Event.create(req.body);
  res.status(201).json(event);
};

export const getEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};

export const getEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);
  res.json(event);
};

export const updateEvent = async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(event);
};

export const deleteEvent = async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ message: "Event deleted" });
};

export const buyTicket = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event.capacity > event.ticketsSold) {
    event.ticketsSold += 1;
    await event.save();
    res.json({ message: "Ticket purchased successfully" });
  } else {
    res.status(400).json({ message: "Sold out" });
  }
};
