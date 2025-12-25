// Use native fetch (Node 18+)
// No imports needed for fetch if Node 18+
// If older node, consider using 'http' but simpler to assume modern node for this stack.

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NDI5OGRiNjRiM2E0MTViMTA2NzU3MCIsImlhdCI6MTc2NTk3MjE4NywiZXhwIjoxNzY4NTY0MTg3fQ.Umjz2V14EiUQMGhg6mUo0yPhsmIxilmX0CFA2iUOM8Y";
const API_URL = "http://localhost:5000/api/events";

const VENUES = [
    "Wankhede Stadium, Mumbai",
    "Jawaharlal Nehru Stadium, New Delhi",
    "Eden Gardens, Kolkata",
    "M. Chinnaswamy Stadium, Bangalore",
    "Rajiv Gandhi International Cricket Stadium, Hyderabad",
    "Narendra Modi Stadium, Ahmedabad",
    "Siri Fort Auditorium, New Delhi",
    "NCPA, Mumbai",
    "Science City, Kolkata",
    "HITEX Exhibition Center, Hyderabad",
    "BIEC, Bangalore",
    "Pragati Maidan, New Delhi"
];

const CATEGORIES = ["Music", "Technology", "Sports", "Art", "Business", "Comedy", "Workshop", "Conference"];

const TITLES = [
    "Tech Innovators Summit", "Global Music Fest", "Future of AI Conference", "National Art Expo",
    "Cricket Championship Finals", "Startup Growth Bootcamp", "Comedy All-Stars", "Digital Marketing Masterclass",
    "Smart City Expo", "Indie Rock Night", "Classical Dance Recital", "Blockchain World Summit"
];

const DESCRIPTIONS = [
    "Join us for an amazing experience with industry leaders and enthusiasts.",
    "A night of vibrant performances and cultural showcase.",
    "Learn from the best in the field and network with professionals.",
    "Witness the thrill of the game live at the stadium.",
    "Explore the latest trends and innovations shaping the future.",
    "An exclusive workshop designed to boost your skills and career."
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

async function createEvent(i) {
    const priceRegular = getRandomInt(500, 15000);
    const priceVIP = getRandomInt(priceRegular + 1000, 30000);

    // Ensure date is in future
    const date = new Date();
    date.setDate(date.getDate() + getRandomInt(5, 180));

    const eventData = {
        title: `${getRandomElement(TITLES)} ${2025 + (i % 2)} - Edition ${i + 1}`,
        venue: getRandomElement(VENUES),
        date: date.toISOString(),
        category: getRandomElement(CATEGORIES),
        description: getRandomElement(DESCRIPTIONS) + ` (Event #${i + 1})`,
        price: {
            Standard: priceRegular,
            VIP: priceVIP
        },
        seatMap: {
            Standard: getRandomInt(50, 500),
            VIP: getRandomInt(10, 100)
        },
        banner: "",
        status: "approved"
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            },
            body: JSON.stringify(eventData)
        });

        const data = await response.json();

        if (response.ok) {
            console.log(`[SUCCESS] Created Event ${i + 1}: ${eventData.title}`);
        } else {
            console.error(`[FAILED] Event ${i + 1}:`, data.message);
        }
    } catch (error) {
        console.error(`[ERROR] Event ${i + 1}:`, error.message);
    }
}

async function seed() {
    console.log("Starting seed process for 75 events...");
    for (let i = 0; i < 75; i++) {
        await createEvent(i);
        await new Promise(r => setTimeout(r, 50));
    }
    console.log("Seeding completed.");
}

seed();
