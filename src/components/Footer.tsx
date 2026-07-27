import { profile } from "@/data/site";

const Footer = () => (
  <footer className="border-t border-line">
    <div className="shell flex flex-wrap items-center justify-between gap-4 py-7 text-[13.5px] text-subtle">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span className="font-mono text-xs">{profile.location}</span>
    </div>
  </footer>
);

export default Footer;
