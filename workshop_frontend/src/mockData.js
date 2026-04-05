export const workshops = [
  { id: 1, title: 'Intro to Python', date: '2024-05-10', state: 'Maharashtra', type: 'Self-driven', instructor: 'Alice Smith', status: 'Upcoming' },
  { id: 2, title: 'Advanced Django', date: '2024-05-15', state: 'Karnataka', type: 'Instructor-led', instructor: 'Bob Johnson', status: 'Completed' },
  { id: 3, title: 'React for Beginners', date: '2024-06-01', state: 'Delhi', type: 'Instructor-led', instructor: 'Charlie Lee', status: 'Upcoming' },
  { id: 4, title: 'Tailwind CSS Mastery', date: '2024-06-12', state: 'Maharashtra', type: 'Self-driven', instructor: 'Alice Smith', status: 'Pending' },
  { id: 5, title: 'Data Science with Pandas', date: '2024-04-20', state: 'Tamil Nadu', type: 'Instructor-led', instructor: 'Diana Prince', status: 'Completed' }
];

export const instructors = [
  { id: 1, name: 'Alice Smith', workshopsTaken: 12, rating: 4.8 },
  { id: 2, name: 'Bob Johnson', workshopsTaken: 8, rating: 4.5 },
  { id: 3, name: 'Charlie Lee', workshopsTaken: 5, rating: 4.2 },
  { id: 4, name: 'Diana Prince', workshopsTaken: 15, rating: 4.9 }
];

export const coordinators = [
  { id: 1, name: 'Mumbai Tech Hub', acceptedProposals: 4, pendingProposals: 1 },
  { id: 2, name: 'Bangalore Devs', acceptedProposals: 7, pendingProposals: 0 },
  { id: 3, name: 'Delhi Coders', acceptedProposals: 2, pendingProposals: 2 }
];

export const chartData = {
  types: {
    labels: ['Self-driven', 'Instructor-led'],
    counts: [2, 3]
  },
  states: {
    labels: ['Maharashtra', 'Karnataka', 'Delhi', 'Tamil Nadu'],
    counts: [2, 1, 1, 1]
  }
};
