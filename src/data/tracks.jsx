import { RiMentalHealthFill } from "react-icons/ri";
import { BsBookFill } from "react-icons/bs";
import { AiFillBug } from "react-icons/ai";
import { GrMoney } from "react-icons/gr";
import { GiTechnoHeart, GiMoneyStack } from "react-icons/gi";
import { SiHiveBlockchain } from "react-icons/si";
import { BiBrain } from "react-icons/bi";
import { DiOpensource, DiTechcrunch } from "react-icons/di";
import { GiIndiaGate } from "react-icons/gi";
import { FaVrCardboard } from "react-icons/fa6";
const Tracks = [
  {
    id: 1,
    featured: "IEEE JMI Featured Problem Statement",
    title: "Viksit Bharat@2047",
    description:
      "Development towards various aspects of progress for the country, including economic growth, social progress, environmental sustainability, and good governance etc.",
    icon: GiIndiaGate,
  },
  {
    id: 2,
    title: "Cyber-Security",
    description:
      "Securing the internet. Development of protection of internet-connected systems such as hardware, software and data from cyber-threats.",
    icon: AiFillBug,
  },
  {
    id: 3,
    title: "Education",
    description:
      "Upgrading the current educational system in India. Develop adaptive learning tools to support various learning styles including e-learning platforms, tools for student engagement, and systems for remote learning etc.",
    icon: BsBookFill,
  },
  {
    id: 4,
    title: "Fintech",
    description:
      "Designing a technology that works towards enhancing and automating the delivery and use of financial services.",
    icon: GiMoneyStack,
  },
  {
    id: 5,
    title: "Blockchain",
    description:
      "Making the internet more decentralized!. Development towards blockchain innovation including smart contracts, decentralized applications (DApps) etc.",
    icon: SiHiveBlockchain,
  },
  // {
  //   id: 5,
  //   title: "FOSS",
  //   description:
  //     "Contributing to the development of a new open-source app, tool, or library, creating alternatives to existing popular apps or services, enhancing and extending existing projects or libraries, engaging in design projects by redesigning FOSS applications, and collaborating on open hardware initiatives.",
  //   icon: DiOpensource,
  // },
  {
    id: 6,
    title: "IoT",
    description:
      "Solutions design to use Internet of things(IoT) to solve real-world industrial problems.",
    icon: DiTechcrunch,
  },
  {
    id: 7,
    title: "AR/VR",
    description:
      "Enhancing Reality Experiences. Development of Augmented Reality (AR) and Virtual Reality (VR) applications.",
    icon: FaVrCardboard,
  },
  {
    id: 8,
    title: "Healthcare",
    description:
      "Transforming healthcare through innovation. Develop an innovative solution that addresses critical challenges in Healthcare and Well-Being.",
    icon: GiTechnoHeart,
  },
  {
    id: 9,
    title: "Open Innovation",
    description:
      "Open to your creativity. Solution based on Agri-tech, Digitalization, Metaverse, Smart City, Automation, etc.",
    icon: BiBrain,
  },
];

export default Tracks;
