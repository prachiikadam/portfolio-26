import Socials from "./Socials";
export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/50 py-8 text-center text-sm text-white/50 backdrop-blur-md flex justify-between align-center px-4 md:px-32">
      <p>&copy; {new Date().getFullYear()} Prachi Kadam. All rights reserved.</p>
      <Socials/>
    </footer>
  );
}