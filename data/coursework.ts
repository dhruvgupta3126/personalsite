import { Course } from "@/interfaces/interfaces";

const courses2023_24: Course[] = [
  { id: "INFR10065", name: "Compiling Techniques" },
  { id: "INFR10077", name: "Computing in the Classroom" },
  { id: "INFR10074", name: "Computer Communications and Networks" },
  { id: "INFR10088", name: "Modelling of Systems for Sustainability" },
];

const courses2022_23: Course[] = [
  { id: "MUSI10067", name: "Music and Human Communication" },
  { id: "INFR10067", name: "Computer Security" },
  { id: "INFR09053", name: "Foundations of Natural Language Processing" },
  { id: "INFR11132", name: "Entrepreneurship and Innovation Project" },
  { id: "INFR09051", name: "Informatics Large Practical" },
  { id: "INFR10085", name: "Introduction to Mobile Robotics" },
  { id: "INFR10022", name: "Professional Issues" },
];

const courses2021_22: Course[] = [
  {
    id: "INFR08032",
    name: "Informatics 2 - Software Engineering and Professional Practice",
  },
  {
    id: "INFR08026",
    name: "Informatics 2 - Introduction to Algorithms and Data Structures",
  },
  {
    id: "INFR08027",
    name: "Informatics 2C - Introduction to Computer Systems",
  },
  { id: "INFR08010", name: "Informatics 2D - Reasoning and Agents" },

  { id: "INFR08030", name: "Foundations of Data Science" },
  { id: "INFR08031", name: "Discrete Mathematics and Probability" },
];

const courses2020_21: Course[] = [
  { id: "ELCH07011", name: "Foundation Spanish Language 1" },
  { id: "INFR08025", name: "Informatics 1A - Introduction to Computation" },
  { id: "INFR08029", name: "Informatics 1B - Object Oriented Programming" },
  { id: "MATH08057", name: "Introduction to Linear Algebra" },
  { id: "MATH08058", name: "Calculus and its Applications" },
  { id: "MUSI08078", name: "Topics in Popular Music" },
  
];

export const allSemesters = [
  { semesterName: "2024-25", courses: courses2023_24 },
  { semesterName: "2023-24", courses: courses2022_23 },
  { semesterName: "2022-23", courses: courses2021_22 },
  { semesterName: "2021-22", courses: courses2020_21 },
];
