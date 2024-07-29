import { aboutUs, transparentLogo, practiceProblems, teacher, boyStudying } from "../assets"
export const NAV_LINKS = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/services" },
  { title: "AP CS", path: "/ap-cs" },
  { title: "About Us", path: "/about-us" },
  { title: "Contact", path: "/contact-us" },
];

export const DRAWER_LINKS = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/services" },
  { title: "About Us", path: "/about-us" },
  { title: "AP CS", path: "/ap-cs" },
  { title: "Contact", path: "/contact-us" },
];

export const LOGIN_LINK = { title: "Login", path: "/login" };
export const ABOUT_US_DATA = {
  title: "About Us",
  description1: "At APCompTutor, we understand the journey students face as they prepare for their AP Computer Science exams. Our mission is simple: to provide a supportive and engaging learning environment that turns the challenge of mastering computer science into an opportunity for growth and success.",
  description2: "As a team of passionate educators with extensive experience in the AP curriculum, we’re here to guide your child every step of the way. We offer personalized tutoring, group workshops, and a wealth of online resources to ensure that every student can find their path to excellence.",
  description3: "With APCompTutor, you can trust that your child is not just prepared for their exams, but also empowered with critical thinking skills that pave the way for future academic and professional achievements.",
  image: aboutUs,
  logo: transparentLogo
};
const SERVICES_DATA = [
  {
    id: 1,
    title: "One-on-One Tutoring Sessions",
    description:
      "Experience personalized, private tutoring sessions from the comfort of your home, tailored to your student's learning style and pace. Our online sessions focus on specific AP Computer Science topics, problem-solving techniques, and exam preparation strategies, all via  virtual platform.",
    learnMoreLink: "/one-on-one",
  },
  {
    id: 2,
    title: "Group Tutoring and Workshops",
    description:
      "Join our online small group sessions or workshops that cover crucial topics in the AP Computer Science curriculum. These virtual sessions encourage peer-to-peer learning and provide a collaborative online environment for students to tackle challenging concepts together.",
    learnMoreLink: "/group-tutoring-and-workhops",
  },
  {
    id: 3,
    title: "Online Resources and Practice Exams",
    description:
      "Offer a suite of online resources, including practice exams, video tutorials, and interactive coding exercises. These tools can help students reinforce their learning outside of tutoring sessions and gain additional practice in exam-like conditions.",
    learnMoreLink: "/resources-and-practice-exams",
  },
];

const ONE_ON_ONE_DATA = [
  {
    id: 1,
    title: "Personalized",
    description:
      "Every online session is tailored to meet the individual needs and learning styles of each student, ensuring that they receive the attention and customized support necessary to thrive in their AP Computer Science studies.",
    learnMoreLink: "/one-on-one",
  },
  {
    id: 2,
    title: "Targeted",
    description:
      "Our online tutoring is focused on the specific areas where students need the most help, whether it's grasping complex algorithms or mastering coding principles. We aim to make every minute count by concentrating on key content that will make a real difference in exam performance.",
    learnMoreLink: "/group-tutoring-and-workhops",
  },
  {
    id: 3,
    title: "Integrative",
    description:
      "Our approach is to seamlessly integrate theory with practice, encouraging students to apply what they've learned in real-world scenarios. This holistic method not only prepares them for their exams but also for future academic and professional challenges in computer science.",
    learnMoreLink: "/resources-and-practice-exams",
  },
];

const ONLINE_RESOURCES_DATA = [
  {
    id: 1,
    title: "Accessible Anytime, Anywhere",
    description:
      "Our comprehensive suite of online resources is designed for on-demand access, allowing students to study at their own pace and on their own schedule. From detailed video tutorials to extensive coding challenges, we provide all the tools necessary for thorough AP Computer Science exam preparation.",
    learnMoreLink: "/one-on-one",
  },
  {
    id: 2,
    title: "Tailored Practice",
    description:
      "With a variety of practice exams that mimic the structure and content of the actual AP tests, students can hone their skills and identify areas for improvement. Our adaptive learning technology ensures that the more students practice, the more personalized their practice exams become.",
    learnMoreLink: "/group-tutoring-and-workhops",
  },
  {
    id: 3,
    title: "Interactive Learning Experience",
    description:
      "Our interactive exercises and coding simulations offer a hands-on approach to learning that reinforces theoretical knowledge through practical application. This dynamic method of studying not only aids in understanding complex concepts but also in retaining them long term.",
    learnMoreLink: "/resources-and-practice-exams",
  },
];
const GROUP_TUTORING_DATA = [
  {
    id: 1,
    title: "Personalized",
    description:
      "Each workshop is designed to address the collective needs of the group while also recognizing individual learning styles. In our interactive online environment, students receive both the benefits of peer discussions and the individual attention needed to master AP Computer Science concepts.",
    learnMoreLink: "/one-on-one",
  },
  {
    id: 2,
    title: "Targeted",
    description:
      "Our group workshops focus on the core topics of the AP Computer Science curriculum, addressing common challenges and frequently tested areas. We facilitate a targeted learning approach, where group activities and discussions are centered around maximizing understanding and retention of key principles.",
    learnMoreLink: "/group-tutoring-and-workhops",
  },
  {
    id: 3,
    title: "Integrative",
    description:
      "Workshops are crafted to integrate AP Computer Science theories with practical exercises. Students engage in collaborative problem-solving and coding projects that mirror real-world applications, enhancing their understanding and preparing them for both their exams and collaborative tech environments.",
    learnMoreLink: "/resources-and-practice-exams",
  },
];

const AP_CS_RESOURCES_DATA = [
  {
    id: 1,
    title: "AP Computer Science Topics",
    subtitle: "Education",
    description:
      "Every online session is tailored to meet the individual needs and learning styles of each student, ensuring that they receive the attention and customized support necessary to thrive in their AP Computer Science studies.",
    image: boyStudying,
  },
  {
    id: 2,
    title: "AP Computer Science Practice Problems",
    subtitle: "Education",
    description:
      "Sharpen your skills: Tackle a wide range of practice problems designed to test your knowledge and prepare you for exam success.",
    image: practiceProblems,
  },
  {
    id: 3,
    title: "AP Computer Science Exam Responses",
    subtitle: "Education",
    description:
      "Learn by example: Review model answers to past AP exam questions, and understand what graders look for in top-scoring responses.",
    image: teacher,
  },
];



const EXPERIENCES_DATA = [
  {
    title: "Software Engineer Intern",
    company_name: "Roadcall.co",
    icon: aboutUs,
    iconBg: "#383E56",
    date: "Jun 2023 - Sep 2023",
    points: [
      "Developed an admin to driver  note feature using Redux and JavaScript within the React framework.",
      "Created tests for the web app UI and flows, resulting in fewer bugs.",
    ],
  },
  // {
  //   title: "Full Stack Intern",
  //   company_name: "Treehouse Strategy	",
  //   icon: aboutUs,
  //   iconBg: "#E6DEDD",
  //   date: "May 2021 - Sep 2021",
  //   points: [
  //     "Created reusable React.js components, resulting in fewer bugs and improved code quality.",
  //     "Added a dynamic dashboard page for agency partnerships  using React to enhance client engagement.",
  //   ],
  // },
  {
    title: "Computer Science Tutor",
    company_name: "Varsity Tutors",
    icon: aboutUs,
    iconBg: "#383E56",
    date: "Sep 2020 - Present",
    points: [
      "Tutored over a 100 students at all levels, starting with middle school to graduate students.",
      "Delivered a series of technical Computer Science topics, such as Data Structures, Algorithms and OOP using Java .",
    ],
  },
];

const BIO_CARD_DATA = [
  {
    image: aboutUs,
    name: "Makendy Midouin",
    rating: 4.7,
    introduction: "I'm currently pursuing a Master's in Computer Science at New York University, focusing on data structures, algorithms, and web technologies. At Roadcall.co, I developed key features using Redux and JavaScript within the React framework and improved tools with C# and TypeScript. My work contributed to various projects, including a cleaning service web application and 'Fat Ear', a music enthusiast app. Before this, I completed my Bachelor's in Computer Science at St. Thomas Aquinas College, where I was recognized on the Dean’s List. My goal is to specialize in application development.",
    resume: "",
  }];

export {
  SERVICES_DATA,
  ONE_ON_ONE_DATA,
  ONLINE_RESOURCES_DATA,
  GROUP_TUTORING_DATA,
  EXPERIENCES_DATA,
  BIO_CARD_DATA,
  AP_CS_RESOURCES_DATA
};
