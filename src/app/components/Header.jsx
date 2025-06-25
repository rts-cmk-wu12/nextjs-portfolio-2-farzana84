import NavLink from "./nav-link";
import { FaLinkedinIn, FaBehance, FaTwitter } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      <nav className=" bg-foreground p-5 px-10 rounded-b-xl max-w-7xl mx-auto">
        <ul className="flex justify-between items-center max-w-5xl mx-auto">
          <div className="flex gap-6">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/contact">Contact</NavLink>
            </li>
          </div>
          <div className="flex gap-4 text-heading text-xl">
            <a
              className="text-text"
              href="https://linkedin.com"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a className="text-text" href="https://behance.net" target="_blank">
              <FaBehance />
            </a>
            <a className="text-text" href="https://twitter.com" target="_blank">
              <FaTwitter />
            </a>
          </div>
        </ul>
      </nav>
    </header>
  );
}
