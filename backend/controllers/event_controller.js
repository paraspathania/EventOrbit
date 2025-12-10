import Event from "../models/event_model.js";

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({ status: "approved" })
      .populate("organizer", "fullName");

    res.status(200).json({
      success: true,
      count: events.length,
      events,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
