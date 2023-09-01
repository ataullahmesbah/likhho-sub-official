import { FaEdit, FaFacebook, FaHandsHelping, FaHockeyPuck, FaPenSquare, FaTwitter } from "react-icons/fa"

export const links = [
  {
    name: "LikhoEditor  7.1",
    submenu: true,
    sublinks: [
      {
        Head: "LikhoEditor 7.1 Overview",
        sublink: [
          { icon: <FaHockeyPuck />, name: "Products Tour", link: "/" },
          { icon: <FaEdit />, name: "Features", link: "/" },
          { name: "Demo Pages", link: "/" },
          { name: "Online Builder", link: "/" },
          { name: "Documentation", link: "/" },
          { name: "Download", link: "/" },
        ],
      },
      {
        Head: "Ultra Features",
        sublink: [
          { name: "Collaboration", link: "/" },
          { name: "Export to PDF/Word", link: "/" },
          { name: "Import from Word", link: "/" },
          { name: "File Management", link: "/" },
          { name: "Spell and Grammar Check", link: "/" },
        ],
      },
      {
        Head: "Demo",
        sublink: [
          { img: "https://i.ibb.co/8rbKVY1/image.png", link: "/" },

          { name: "...", link: "/" },
        ],
      },



    ],
  },
  {
    name: "Likho Special",
    submenu: true,
    sublinks: [
      {
        Head: "Likho Special Overview",
        sublink: [
          { name: "Product tour", link: "/" },
          { name: "Live Demo", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "Pricing", link: "/" },
          { name: "Documentation", link: "/" },
        ],
      },
      {
        Head: "Demo",
        sublink: [
          { name: "img", link: "/" },
          { name: "btn", link: "/" },

        ],
      },

    ],
  },
  {
    name: "Resources",
    submenu: true,
    sublinks: [
      {
        Head: "Resources Overview",
        sublink: [
          { icon: <FaPenSquare />, name: "Blog", link: "/blog" },
          { name: "Likho studies", link: "/" },
          { name: "Solutions", link: "/" },
          { name: "Documentation", link: "/" },
          { name: "Insights", link: "/" },
        ],
      },
      {
        Head: "How LikhoEditor saves Blooksy’s writers 120+ hours a year by making writing more collaborative",
        sublink: [
          { name: "Learn More", link: "/" },

        ],
      },

    ],
  },

  {
    name: "Support",
    submenu: true,
    sublinks: [
      {
        Head: "Support Center 7.1",
        sublink: [
          { name: "Documentation", link: "/" },
          { icon: <FaHandsHelping />, name: "Help", link: "/" },
          { name: "Contact Us", link: "/" },

        ],
      },
      {
        Head: "Get started ",
        sublink: [
          { name: "Learn More", link: "/" },

        ],
      },

    ],
  },
];
