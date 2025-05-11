import "./tailwind.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";

const links = [
  { text: "Facebook", href: "https://www.facebook.com/profile.php?id=100069238363197/", icon: faFacebook },
  { text: "linkedin", href: "https://www.linkedin.com/in/andrewvetovitz/", icon: faLinkedin },
  { text: "Instagram", href: "https://www.instagram.com/avgunner/", icon: faInstagram },
  { text: "Github", href: "https://github.com/AndrewVetovitz/", icon: faGithub },
  { text: "Mail", href: "mailto:andrewvetovitz@gmail.com", icon: faEnvelope },
];

function Footer() {
  return (
    <div className={"flex flex-col py-10 max-w-5xl m-auto"}>
      <div className={"flex justify-center gap-x-5 py-[10px]"}>
        {links.map((link) => (
          <a key={link.text} href={link.href} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={link.icon} size="2xl" />
          </a>
        ))}
      </div>
      <div className={"flex justify-center"}>Links to me on the web :)</div>
    </div>
  );
}

export default Footer;
