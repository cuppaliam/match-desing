// Lobby status type
export type LobbyStatus = "open" | "almostFull" | "full";

export interface Lobby {
	id: string;
	host: string;
	hostInitials: string;
	skill: number;
	gameType: "Competitive" | "Social" | "Casual";
	matchType: "Singles" | "Doubles";
	day: string;
	time: string;
	players: string;
	playersCount: number;
	playersMax: number;
	venue: string;
	venueAddress: string;
	description: string;
	status: LobbyStatus;
	fee: number; // AUD per player
}

export interface Player {
	id: string;
	name: string;
	initials: string;
	skill: number;
	suburb: string;
	availableDays: string[];
	preferredTime: string;
	matchType: "Singles" | "Doubles";
	bio: string;
	profileCompletion: number;
	stats: { matchesPlayed: number; winRate: number; avgRallyLength: number };
}

export interface Venue {
	id: string;
	name: string;
	address: string;
	courts: number;
	distance: string;
	open: boolean;
}

export interface MatchHistory {
	id: string;
	opponent: string;
	opponentInitials: string;
	opponentSkill: number;
	result: "win" | "loss";
	score: string;
	date: string;
	venue: string;
	gameType: "Competitive" | "Social" | "Casual";
	matchType: "Singles" | "Doubles";
}

export const mockLobbies: Lobby[] = [
	{
		id: "1",
		host: "Alex T.",
		hostInitials: "AT",
		skill: 7,
		gameType: "Competitive",
		matchType: "Singles",
		day: "Saturday",
		time: "9:00 AM",
		players: "1 / 2",
		playersCount: 1,
		playersMax: 2,
		venue: "Doncaster",
		venueAddress: "1 Civic Place, Doncaster VIC 3108",
		description:
			"Competitive singles, intermediate. Looking for a solid rally partner.",
		status: "open",
		fee: 12,
	},
	{
		id: "2",
		host: "Priya M.",
		hostInitials: "PM",
		skill: 5,
		gameType: "Social",
		matchType: "Doubles",
		day: "Sunday",
		time: "2:00 PM",
		players: "3 / 4",
		playersCount: 3,
		playersMax: 4,
		venue: "Box Hill",
		venueAddress: "8-12 Carrington Rd, Box Hill VIC 3128",
		description:
			"Social doubles, all levels welcome. Kids friendly, relaxed pace.",
		status: "almostFull",
		fee: 8,
	},
	{
		id: "3",
		host: "Sam K.",
		hostInitials: "SK",
		skill: 9,
		gameType: "Competitive",
		matchType: "Singles",
		day: "Friday",
		time: "7:00 PM",
		players: "1 / 2",
		playersCount: 1,
		playersMax: 2,
		venue: "Glen Waverley",
		venueAddress: "Glen Waverley Sports Centre, 121 Kingsway VIC 3150",
		description: "High intensity competitive singles. Advanced players only.",
		status: "open",
		fee: 15,
	},
	{
		id: "4",
		host: "Jin L.",
		hostInitials: "JL",
		skill: 3,
		gameType: "Casual",
		matchType: "Doubles",
		day: "Tuesday",
		time: "6:30 PM",
		players: "2 / 4",
		playersCount: 2,
		playersMax: 4,
		venue: "Brunswick",
		venueAddress: "Brunswick Badminton Club, VIC 3056",
		description: "Casual hit-around, beginners welcome. No pressure, just fun!",
		status: "open",
		fee: 6,
	},
	{
		id: "5",
		host: "Mei W.",
		hostInitials: "MW",
		skill: 6,
		gameType: "Social",
		matchType: "Doubles",
		day: "Wednesday",
		time: "7:30 PM",
		players: "2 / 4",
		playersCount: 2,
		playersMax: 4,
		venue: "Doncaster",
		venueAddress: "1 Civic Place, Doncaster VIC 3108",
		description:
			"Mixed doubles, social game. Bring a partner or we'll pair you up.",
		status: "almostFull",
		fee: 10,
	},
	{
		id: "6",
		host: "Tom R.",
		hostInitials: "TR",
		skill: 8,
		gameType: "Competitive",
		matchType: "Doubles",
		day: "Saturday",
		time: "3:00 PM",
		players: "4 / 4",
		playersCount: 4,
		playersMax: 4,
		venue: "Box Hill",
		venueAddress: "8-12 Carrington Rd, Box Hill VIC 3128",
		description: "Competitive doubles. Already full — check back next week.",
		status: "full",
		fee: 12,
	},
];

export const mockPlayer: Player = {
	id: "me",
	name: "Alex Chen",
	initials: "AC",
	skill: 7,
	suburb: "Doncaster, VIC",
	availableDays: ["Sat", "Sun"],
	preferredTime: "Morning (6–12)",
	matchType: "Singles",
	bio: "Competitive singles player, intermediate level. Love fast rallies and long baseline exchanges.",
	profileCompletion: 85,
	stats: {
		matchesPlayed: 24,
		winRate: 63,
		avgRallyLength: 12,
	},
};

export const mockVenues: Venue[] = [
	{
		id: "v1",
		name: "Doncaster Recreation Centre",
		address: "1 Civic Place, Doncaster VIC 3108",
		courts: 6,
		distance: "2.1 km",
		open: true,
	},
	{
		id: "v2",
		name: "Box Hill Badminton Centre",
		address: "8-12 Carrington Rd, Box Hill VIC 3128",
		courts: 8,
		distance: "5.4 km",
		open: true,
	},
	{
		id: "v3",
		name: "Glen Waverley Sports Centre",
		address: "121 Kingsway, Glen Waverley VIC 3150",
		courts: 4,
		distance: "9.2 km",
		open: false,
	},
];

export const mockMatchHistory: MatchHistory[] = [
	{
		id: "mh1",
		opponent: "Sam K.",
		opponentInitials: "SK",
		opponentSkill: 9,
		result: "loss",
		score: "15–21, 18–21",
		date: "Sat 8 Mar 2026",
		venue: "Doncaster",
		gameType: "Competitive",
		matchType: "Singles",
	},
	{
		id: "mh2",
		opponent: "Priya M.",
		opponentInitials: "PM",
		opponentSkill: 5,
		result: "win",
		score: "21–14, 21–16",
		date: "Sun 1 Mar 2026",
		venue: "Box Hill",
		gameType: "Social",
		matchType: "Singles",
	},
];
