import "./tailwind.css";

import { useState } from "react";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

import { Text } from "../components/Text";

const links = [
  {
    text: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100069238363197/",
    icon: faFacebook,
    ariaLabel: "Andrew Vetovitz Facebook",
  },
  {
    text: "linkedin",
    href: "https://www.linkedin.com/in/andrewvetovitz/",
    icon: faLinkedin,
    ariaLabel: "Andrew Vetovitz Linkedln",
  },
  {
    text: "Instagram",
    href: "https://www.instagram.com/avgunner/",
    icon: faInstagram,
    ariaLabel: "Andrew Vetovitz Instagram",
  },
  { text: "Github", href: "https://github.com/AndrewVetovitz/", icon: faGithub, ariaLabel: "Andrew Vetovitz Github" },
  {
    text: "Mail",
    href: "mailto:andrewvetovitz@gmail.com",
    icon: faEnvelope,
    ariaLabel: "Andrew Vetovitz primary mail address",
  },
];

const DEFAULT = -1;

function Footer() {
  const [bounceIndex, setBounceIndex] = useState(DEFAULT);

  function enter(index: number) {
    return function () {
      setBounceIndex(index);
    };
  }

  function exit() {
    setBounceIndex(DEFAULT);
  }

  return (
    <div className={"flex flex-col pb-10 pt-4 max-w-5xl m-auto"}>
      <div className={"flex justify-center gap-x-5 py-[10px]"}>
        {links.map((link, index) => {
          const bounce = index == bounceIndex;

          return (
            <React.Fragment key={link.text}>
              <a
                onMouseEnter={enter(index)}
                onMouseLeave={exit}
                aria-label={link.ariaLabel}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={link.icon} size="2xl" bounce={bounce} />
              </a>
            </React.Fragment>
          );
        })}
      </div>
      <Text className="text-sm flex justify-center">Links to me on the web :)</Text>
    </div>
  );
}

export default Footer;
