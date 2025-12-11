import Event from "../models/event_model.js";

export const getAllEvents = async (req, res) => {
  try {
    const keyword = req.query.search
      ? {
        $or: [
          { title: { $regex: req.query.search, $options: "i" } },
          { description: { $regex: req.query.search, $options: "i" } },
          { category: { $regex: req.query.search, $options: "i" } },
          { location: { $regex: req.query.search, $options: "i" } },
        ],
      }
      : {};

    const events = await Event.find({ ...keyword, status: "approved" })
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
