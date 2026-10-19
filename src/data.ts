export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "mailto:hammadpvt.2@gmail.com" },
];

export const ABOUT_TEXT =
  "Self-taught since 2023, i focus on clean interfaces, interactive JavaScript, and shipping real, live projects instead of letting them sit unfinished. i truly enjoy turning a blank page into something people can actually click on. Let's build something incredible together!";

export interface Service {
  number: string;
  name: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    number: "01",
    name: "Frontend Development",
    description:
      "Building fast, responsive interfaces with clean component architecture, from first pixel to deployed product.",
  },
  {
    number: "02",
    name: "UI / UX Design",
    description:
      "Interfaces with intention -- typography, spacing and motion worked out before a single line of code ships.",
  },
  {
    number: "03",
    name: "JavaScript & React",
    description:
      "Interactive, stateful apps built with vanilla JavaScript and React, from browser games to full dashboards.",
  },
  {
    number: "04",
    name: "APIs & Backend Basics",
    description:
      "Connecting interfaces to data -- REST APIs, JSON, and the Python fundamentals that power them.",
  },
  {
    number: "05",
    name: "Deployment",
    description:
      "Shipping to the real internet -- Git, GitHub and Vercel, so every project gets its own live URL.",
  },
];

export interface Project {
  name: string;
  category: string;
  liveUrl: string;
  imgA: string;
  imgB: string;
  imgMain: string;
}

import mindgameA from "./assets/gen/mindgame_a.png";
import mindgameB from "./assets/gen/mindgame_b.png";
import mindgameMain from "./assets/gen/mindgame_main.png";
import studyA from "./assets/gen/study_a.png";
import studyB from "./assets/gen/study_b.png";
import studyMain from "./assets/gen/study_main.png";
import chessA from "./assets/gen/chess_a.png";
import chessB from "./assets/gen/chess_b.png";
import chessMain from "./assets/gen/chess_main.png";
import lettersA from "./assets/gen/letters_a.png";
import lettersB from "./assets/gen/letters_b.png";
import lettersMain from "./assets/gen/letters_main.png";
import linkhubA from "./assets/gen/linkhub_a.png";
import linkhubB from "./assets/gen/linkhub_b.png";
import linkhubMain from "./assets/gen/linkhub_main.png";
import quranA from "./assets/gen/quran_a.png";
import quranB from "./assets/gen/quran_b.png";
import quranMain from "./assets/gen/quran_main.png";

export const PROJECTS: Project[] = [
  {
    name: "Mind Game",
    category: "Personal",
    liveUrl: "https://mind-games-seven.vercel.app/",
    imgA: mindgameA,
    imgB: mindgameB,
    imgMain: mindgameMain,
  },
  {
    name: "Study Tracker",
    category: "Personal",
    liveUrl: "https://focus-sigma-ruby.vercel.app/",
    imgA: studyA,
    imgB: studyB,
    imgMain: studyMain,
  },
  {
    name: "Chess",
    category: "Personal",
    liveUrl: "https://chess-hub-rosy.vercel.app",
    imgA: chessA,
    imgB: chessB,
    imgMain: chessMain,
  },
  {
    name: "Proposal Letters",
    category: "Personal",
    liveUrl: "https://for-you-gray-two.vercel.app/",
    imgA: lettersA,
    imgB: lettersB,
    imgMain: lettersMain,
  },
  {
    name: "Link Hub",
    category: "Personal",
    liveUrl: "https://lakshya-og.vercel.app/",
    imgA: linkhubA,
    imgB: linkhubB,
    imgMain: linkhubMain,
  },
  {
    name: "Al-Qur'an",
    category: "Personal",
    liveUrl: "https://al-qur-an-three.vercel.app/",
    imgA: quranA,
    imgB: quranB,
    imgMain: quranMain,
  },
];

// Generic motion-design inspiration GIFs for the scrolling marquee band.
// Not tied to any person's identity -- purely decorative texture.
export const MARQUEE_GIFS = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

// Decorative corner renders for the About section -- generic 3D assets,
// not tied to any person's identity.
export const ABOUT_DECOR = {
  moon: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
  object3d: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
  lego: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
  group3d: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
};
