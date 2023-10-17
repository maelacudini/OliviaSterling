import style from "../css/works.module.scss";
import Work from "./Work";

const works = [
  {
    title: "E-Commerce Redesign",
    desc: "Revamped the user interface of an e-commerce platform to enhance the overall shopping experience. Utilized a modern and responsive design, resulting in increased user engagement and improved conversion rates.",
    role: "Creative Director & Design Lead",
    date: "2019",
    url: ["./img.jpg", "./img2.jpg", "./img3.jpg"],
  },
  {
    title: "Mobile Banking App Overhaul",
    desc: "Led a complete redesign of a mobile banking application, focusing on improving usability and security. Incorporated a user-centric approach, resulting in a seamless and intuitive interface that garnered high user satisfaction and trust.",
    role: "Creative Director & Design Lead",
    date: "2020",
    url: ["./img.jpg", "./img2.jpg", "./img3.jpg"],
  },
  {
    title: "Health & Fitness Dashboard",
    desc: "Designed a comprehensive health and fitness dashboard, offering users a one-stop solution for tracking workouts, nutrition, and health metrics. The user-friendly layout and interactive charts make it easy for users to monitor their progress.",
    role: "Creative Director & Design Lead",
    date: "2022",
    url: ["./img.jpg", "./img2.jpg", "./img3.jpg"],
  },
  {
    title: "Social Media Feed Enhancement",
    desc: "Enhanced the user experience of a popular social media platform by reimagining the feed design. Employed infinite scroll, dynamic content loading, and improved content categorization, resulting in a more engaging and personalized social media experience.",
    role: "Creative Director & Design Lead",
    date: "2023",
    url: ["./img.jpg", "./img2.jpg", "./img3.jpg"],
  },
];

export default function Works() {
  return (
    <div id="works" className={style.works}>
      {works.map((work, index) => (
        <Work key={index} work={work} />
      ))}
    </div>
  );
}
