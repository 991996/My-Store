import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function SocialMedia() {
  return (
    <>
      <div className="flex gap-3 justify-center items-center">
        <a href="https://www.facebook.com/">
          <FaFacebook />
        </a>
        <a href="https://x.com/">
          <FaXTwitter />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram />
        </a>
      </div>
    </>
  );
}

export default SocialMedia;
