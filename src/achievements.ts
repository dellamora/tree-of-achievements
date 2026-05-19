export type Achievement = {
  id: number;
  title: string;
  date: string;
  description: string;
  x: number;
  y: number;
  size: "sm" | "md" | "lg";
  tone: "gold" | "rose" | "blue";
};

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Got Your Licenses",
    date: "Jan 2026",
    description: "Got your driver's license for both cars and motorcycles, passing both tests on the first try.",
    x: 33,
    y: 36,
    size: "md",
    tone: "gold",
  },
  {
    id: 2,
    title: "Bought a Countryside House",
    date: "Feb 2026",
    description: "Bought a house in the countryside and opened a new chapter with more space, calm, and future.",
    x: 18,
    y: 50,
    size: "sm",
    tone: "rose",
  },
  {
    id: 3,
    title: "Bought a Brand New Car",
    date: "Mar 2026",
    description: "Bought a brand new car, the kind of milestone that makes everyday life feel different.",
    x: 69,
    y: 39,
    size: "lg",
    tone: "blue",
  },
  {
    id: 4,
    title: "Italian Citizenship Hearing",
    date: "Apr 2026",
    description: "Scheduled the hearing for your Italian citizenship process and moved a dream closer to reality.",
    x: 21,
    y: 29,
    size: "md",
    tone: "gold",
  },
  {
    id: 5,
    title: "Renovated Your Mom's House",
    date: "May 2026",
    description: "Renovated your mom's house, turning care into something real, useful, and lasting.",
    x: 62,
    y: 28,
    size: "lg",
    tone: "gold",
  },
  {
    id: 6,
    title: "First English Tech Talk",
    date: "May 2026",
    description: "Gave your first tech talk in English and proved you could take up space in another language.",
    x: 83,
    y: 31,
    size: "sm",
    tone: "rose",
  },
  {
    id: 7,
    title: "Got Promoted",
    date: "Jun 2026",
    description: "Got promoted multiple times at work, with your effort becoming visible in a way people could not ignore.",
    x: 44,
    y: 86,
    size: "sm",
    tone: "blue",
  },
  {
    id: 8,
    title: "Got Married",
    date: "Jul 2026",
    description: "Got married and chose love as one of the biggest milestones of the year.",
    x: 49,
    y: 21,
    size: "md",
    tone: "rose",
  },
];
