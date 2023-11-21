import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

const SocialMedia = () => {
  return (
    // <ul className='flex-col items-center fixed bottom-0 hidden md:flex left-10 lg:left-24 xl:left-48'>
    <>
      <ul className="lg:flex-col items-center lg:fixed bottom-0 hidden lg:flex lg:left-20 xl:left-16">
        <li className="pb-4 cursor-pointer">
          <a href="https://github.com/mohamed7372" target="_blank">
            <GitHubIcon className="cursor-pointer hover:opacity-50" />
          </a>
        </li>
        <li className="pb-4 cursor-pointer">
          <a href="https://www.instagram.com/benra_mohamed/" target="_blank">
            <InstagramIcon className="cursor-pointer hover:opacity-50" />
          </a>
        </li>
        <li className="pb-4  cursor-pointer">
          <a
            href="https://www.linkedin.com/in/mohamed-benrabah-522992191/"
            target="_blank"
          >
            <LinkedInIcon className="cursor-pointer hover:opacity-50" />
          </a>
        </li>
        <li className="pb-4 cursor-pointer">
          <a
            href="https://www.youtube.com/channel/UCRdRWW8Jx8Zt0jMWVLt7cMQ"
            target="_blank"
          >
            <YouTubeIcon className="cursor-pointer hover:opacity-50" />
          </a>
        </li>
        <li className="pb-4 cursor-pointer">
          <a
            href="https://www.facebook.com/profile.php?id=100009930451485"
            target="_blank"
          >
            <FacebookIcon className="cursor-pointer hover:opacity-50" />
          </a>
        </li>
        <li className="ml-1">
          <div className="h-36 w-1 border-l border-secondary-200"></div>
        </li>
      </ul>
    </>
  );
};

export default SocialMedia;
