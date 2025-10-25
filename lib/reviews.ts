export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  initials: string;
}

export const REVIEWS: Review[] = [
  {
    id: "1",
    author: "Pranjal Agnihotri",
    rating: 5,
    date: "Oct 12, 2025",
    text: `I’ve been training in traditional gyms for a while, following HWPO programming and doing the WODs on my own but once I started going to Crossfit Commune, my progress went to another level.
    Coach Sandesh has been incredible he noticed small things in my movements that I never realized I was doing wrong. His cues and corrections have made a huge difference in my lifts and overall technique. Now I’m moving better, lifting heavier, and feeling more confident in my workouts. I am loving the programming here it has challenged me in the best way while unlocking new skills 🏋️
    The facility itself is clean, well-organized, and fully equipped to handle large group sessions. Highly recommend to anyone looking for not just a workout, but a community that truly cares about your fitness journey!`,
    initials: "PA",
  },
  {
    id: "2",
    author: "Jigna Shah",
    rating: 5,
    date: "Oct 6, 2025",
    text: `CrossFit Commune is hands down one of the best CrossFit boxes in Hyderabad! The vibe is great — energetic yet not overcrowded. The new workout sessions are always fresh, and Coach Sandesh really knows how to scale things based on your capacity. Whether you’re just starting out or pushing limits, you get personalized attention. It’s only been a short while since they opened, but I believe this place is going to be one of the top names in CrossFit here soon. Highly recommend if you want real training, strong community, and results 💪`,
    initials: "JS",
  },
  {
    id: "3",
    author: "Amandeep Chaman",
    rating: 5,
    date: "Oct 9, 2025",
    text: `Crossfit is very interesting and especially when you have been doing traditional gymming for long. Contrary to popular belief it has always rejuvenated me at times when I was the most mentally drained. The coach Sandesh here makes sure that if you show up for his class, that class will be one of the best hour of your day. Additionally you burn mad calories :)
    Whoever reading this and is in 2 minds to come or not should just come, take the trial.
    I am pretty sure you will sign up.`,
    initials: "AC",
  },
  {
    id: "4",
    author: "Ratnakar Reddy",
    rating: 5,
    date: "Oct 12, 2025",
    text: `Commune's vibe is great! And it's in one of the best hands ever possible - Coach Sandesh.
    Very interactive and knowledgeable. The vision is clear - to give the best crossfit experience to everyone.
    Walk in to know it for yourself!`,
    initials: "RR",
  },
  {
    id: "5",
    author: "Preeti Somani",
    rating: 5,
    date: "Oct 15, 2025",
    text: `Love this place! The workouts are very well structured. Special shoutout to the coach Sandesh - incredibly knowledgeable, encouraging, and genuinely invested in everyone’s progress`,
    initials: "PS",
  },
  {
    id: "6",
    author: "Rahul Chauhan",
    rating: 5,
    date: "Oct 13, 2025",
    text: `CrossFit Commune is one of the best places to train in Hyderabad —Sandesh the founder provides well-structured workouts, and a super supportive community. The facility is top-notch and caters to all sort of population .Perfect spot if you want to get fitter, stronger, and stay consistent`,
    initials: "RC",
  },
  {
    id: "7",
    author: "Goutham Thota",
    rating: 5,
    date: "Oct 10, 2025",
    text: `Holy Moly! My prayers were answered. Finally a CrossFit box near my place!!!
    CrossFit Commune - A place where you Learn, Sweat, Play and Celebrate.
    Let the gains begin!`,
    initials: "GT",
  },
];

