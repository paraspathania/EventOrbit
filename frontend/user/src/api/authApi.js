// Basic mock implementation for authentication

// Mock users database
const MOCK_USERS = [
    {
        id: '1',
        name: 'John Doe',
        email: 'user@example.com',
        password: 'password123',
        role: 'user',
        avatar: null
    },
    {
        id: '2',
        name: 'Event Organizer Pro',
        email: 'organizer@example.com',
        password: 'password123',
        role: 'organizer',
        avatar: null
    },
    {
        id: '3',
        name: 'System Admin',
        email: 'admin@example.com',
        password: 'password123',
        role: 'admin',
        avatar: null
    }
];

export const loginUser = async (email, password, role) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const userByEmail = MOCK_USERS.find(u => u.email === email);

    if (!userByEmail) {
        throw new Error('Invalid credentials');
    }

    if (userByEmail.role !== role) {
        throw new Error(`Account exists as ${userByEmail.role}. Please switch to ${userByEmail.role} tab.`);
    }

    if (userByEmail.password !== password) {
        throw new Error('Invalid password');
    }

    // Return user without password
    const { password: _, ...userWithoutPassword } = userByEmail;
    return userWithoutPassword;
};

export const signupUser = async (name, email, password, role) => {
    await new Promise(resolve => setTimeout(resolve, 800));

    const existingUser = MOCK_USERS.find(u => u.email === email);
    if (existingUser) {
        throw new Error('Email already exists');
    }

    const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
        password, // Store password for login
        role,
        avatar: null
    };

    // Save to mock DB
    MOCK_USERS.push(newUser);

    return newUser;
};

export const logoutUser = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return true;
};
