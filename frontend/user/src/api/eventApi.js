// Mock implementation of Event API
// In a real app, this would fetch from a backend

const MOCK_EVENTS = [
  {
    id: 1,
    title: "Neon Nights Music Festival",
    organizer: "Sonic Boom Inc.",
    date: "Nov 20, 2025",
    time: "8:00 PM",
    location: "Jio World Garden, Mumbai",
    price: "₹1,200",
    category: "Concert",
    imageColor: "from-blue-500 to-indigo-600", // Placeholder gradient
    availableSeats: 450
  },
  {
    id: 2,
    title: "Global AI Tech Summit",
    organizer: "TechWorld India",
    date: "Dec 05, 2025",
    time: "9:00 AM",
    location: "Pragati Maidan, New Delhi",
    price: "₹2,500",
    category: "Conference",
    imageColor: "from-blue-600 to-cyan-500",
    availableSeats: 120
  },
  {
    id: 3,
    title: "Art & Soul Exhibition",
    organizer: "Creative Minds Gallery",
    date: "Jan 15, 2026",
    time: "10:00 AM",
    location: "Karnataka Chitrakala Parishath, Bangalore",
    price: "₹450",
    category: "Art",
    imageColor: "from-purple-500 to-pink-600",
    availableSeats: 80
  },
  {
    id: 4,
    title: "Comedy All-Stars Night",
    organizer: "Laugh Factory India",
    date: "Feb 10, 2026",
    time: "7:00 PM",
    location: "The Habitat, Mumbai",
    price: "₹600",
    category: "Comedy",
    imageColor: "from-orange-400 to-red-500",
    availableSeats: 200
  },
  {
    id: 5,
    title: "National Cricket Finals",
    organizer: "BCCI",
    date: "Mar 22, 2026",
    time: "6:30 PM",
    location: "Narendra Modi Stadium, Ahmedabad",
    price: "₹1,500",
    category: "Sports",
    imageColor: "from-green-500 to-emerald-700",
    availableSeats: 15
  },
  {
    id: 6,
    title: "Summer Food & Wine Festival",
    organizer: "Gourmet Events",
    date: "Jun 15, 2026",
    time: "12:00 PM",
    location: "UB City, Bangalore",
    price: "₹850",
    category: "Food & Drink",
    imageColor: "from-yellow-400 to-orange-500",
    availableSeats: 500
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Events' },
  { id: 'Concert', label: 'Concerts' },
  { id: 'Conference', label: 'Conferences' },
  { id: 'Sports', label: 'Sports' },
  { id: 'Art', label: 'Arts & Theater' },
  { id: 'Comedy', label: 'Comedy' }
];

export const fetchEvents = async (category = 'all') => {
  if (category === 'all') {
    return MOCK_EVENTS;
  }
  return MOCK_EVENTS.filter(event => event.category === category);
};

export const fetchCategories = async () => {
  return CATEGORIES;
};

export const searchEvents = async (query) => {
  const lowerQuery = query.toLowerCase();
  return MOCK_EVENTS.filter(event =>
    event.title.toLowerCase().includes(lowerQuery) ||
    event.organizer.toLowerCase().includes(lowerQuery) ||
    event.location.toLowerCase().includes(lowerQuery) ||
    event.category.toLowerCase().includes(lowerQuery)
  );
};

export const fetchUserTickets = async () => {
  // Try to get from localStorage first
  const stored = localStorage.getItem('user_tickets');
  if (stored) {
    return JSON.parse(stored);
  }

  // Default mock data if nothing stored
  const defaultTickets = [
    {
      ...MOCK_EVENTS[0], // Neon Nights
      ticketId: 'TIX-BLK-8821',
      seat: 'VIP-A4',
      type: 'VIP',
      status: 'confirmed',
      bookedDate: '2025-10-15'
    },
    {
      ...MOCK_EVENTS[3], // Comedy Night
      ticketId: 'TIX-STD-9932',
      seat: 'B-12',
      type: 'Standard',
      status: 'confirmed',
      bookedDate: '2025-11-01'
    },
    {
      id: 99,
      title: "Vintage Rock Concert",
      organizer: "Old School Productions",
      date: "Jan 15, 2023",
      time: "8:00 PM",
      location: "Wembley Stadium, London",
      price: "₹3,500",
      category: "Concert",
      ticketId: 'TIX-OLD-001',
      seat: 'ST-01',
      type: 'Standard',
      status: 'attended',
      bookedDate: '2022-12-01'
    }
  ];

  // Initialize storage with defaults
  localStorage.setItem('user_tickets', JSON.stringify(defaultTickets));
  return defaultTickets;
};

export const bookEvent = async (event) => {
  const currentTickets = await fetchUserTickets();

  // Check if already booked
  const isBooked = currentTickets.some(t => t.id === event.id);
  if (isBooked) return { success: false, message: 'Event already booked!' };

  // Generate unique Ticket ID
  const uniqueId = `TIX-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
  const seats = ['A-10', 'B-22', 'C-05', 'VIP-11', 'D-44'];
  const randomSeat = seats[Math.floor(Math.random() * seats.length)];

  const newTicket = {
    ...event,
    ticketId: uniqueId,
    seat: randomSeat,
    type: 'Standard',
    status: 'confirmed',
    bookedDate: new Date().toISOString().split('T')[0]
  };

  const updatedTickets = [newTicket, ...currentTickets];
  localStorage.setItem('user_tickets', JSON.stringify(updatedTickets));

  return { success: true, message: 'Ticket booked successfully!', ticket: newTicket };
};
