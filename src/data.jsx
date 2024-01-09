import {
  FaGraduationCap,
  FaQuestionCircle,
  FaSuitcase,
  FaVideo,
} from "react-icons/fa";
import {
  MdBookmark,
  MdCalendarMonth,
  MdChat,
  MdGroup,
  MdWifiTethering,
} from "react-icons/md";

export const SidebarList = [
  {
    icon: <MdWifiTethering />,
    title: "Feed",
  },
  {
    icon: <MdChat />,
    title: "Chat",
  },
  {
    icon: <FaVideo />,
    title: "Videos",
  },
  {
    icon: <MdGroup />,
    title: "Groups",
  },
  {
    icon: <MdBookmark />,
    title: "Bookmarks",
  },
  {
    icon: <FaQuestionCircle />,
    title: "Questions",
  },
  {
    icon: <FaSuitcase />,
    title: "Jobs",
  },
  {
    icon: <MdCalendarMonth />,
    title: "Events",
  },
  {
    icon: <FaGraduationCap />,
    title: "Courses",
  },
];

export const SidebarFriends = [
  {
    image: "/assets/2.jpg",
    name: "jane doe",
  },
  {
    image: "/assets/3.jpg",
    name: "Cyber Punk",
  },
  {
    image: "/assets/4.jpg",
    name: "Tyke Sploit",
  },
  {
    image: "/assets/5.jpg",
    name: "Hacker Verse",
  },
  {
    image: "/assets/6.png",
    name: "Elon Hub",
  },
  {
    image: "/assets/7.jpg",
    name: "Zuck Suck",
  },
];

export const RightbarFriends = [
  {
    image: "/assets/1.jpg",
    name: "Will Slap",
  },
  {
    image: "/assets/7.jpg",
    name: "Cyber Dunk",
  },
  {
    image: "/assets/5.jpg",
    name: "Musk Mars",
  },
  {
    image: "/assets/2.jpg",
    name: "hyper hack",
  },
  {
    image: "/assets/6.png",
    name: "Elon Hub",
  },
  {
    image: "/assets/4.jpg",
    name: "Lizard Code",
  },
];

export const Posts = [
  {
    id: 1,
    desc: "Love for all, Harted for none",
    image: "/assets/1.jpg",
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comments: 9,
  },
  {
    id: 2,
    desc: "Every moment is a fresh begining",
    image: "/assets/3.jpg",
    date: "15 mins ago",
    userId: 2,
    like: 32,
    comments: 12,
  },
  {
    id: 3,
    desc: "We all love Mars",
    image: "/assets/7.jpg",
    date: "3 hours ago",
    userId: 3,
    like: 112,
    comments: 60,
  },
  {
    id: 4,
    desc: "Now which team wins the league?",
    image: "/assets/2.jpg",
    date: "9 hours ago",
    userId: 4,
    like: 1500,
    comments: 2500,
  },
  {
    id: 5,
    desc: "I say another trebble is coming",
    image: "/assets/4.jpg",
    date: "2 days ago",
    userId: 5,
    like: 5900,
    comments: 3001,
  },
];

export const Users = [
  {
    id: 1,
    profilePicture: "/assets/1.jpg",
    username: "Will Slap",
  },
  {
    id: 2,
    profilePicture: "/assets/7.jpg",
    username: "Cyber Dunk",
  },
  {
    id: 3,
    profilePicture: "/assets/5.jpg",
    username: "Musk Mars",
  },
  {
    id: 4,
    profilePicture: "/assets/2.jpg",
    username: "hyper hack",
  },
  {
    id: 5,
    profilePicture: "/assets/4.jpg",
    username: "Lizard Code",
  },
];
