import { Mountain, Search, ShoppingCart, User } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "@/assets/wander-logo.png";

const LINKS = ["Camping", "Hiking", "Backpacks", "Gear", "Footwear", "Accessories", "Sale"];

export function Nav() {
  const { scrollYProgress } = useScroll();
  const bgOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-wander-bg/40 backdrop-blur-md"
        aria-hidden
      />
      <nav className="relative flex items-center justify-between px-8 py-8 lg:px-16">
        <a href="/" className="flex items-center gap-2 text-wander-dark">
          {/* <Mountain size={28} /> */}
          <img src={Logo} alt="Wander Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold tracking-widest uppercase">Wander</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={`text-sm transition-colors hover:text-orange-500 ${
                  link === "Sale" ? "text-wander-orange" : "text-wander-dark/90"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6 text-wander-dark">
          <button aria-label="Search" className="transition-colors hover:text-orange-500">
            <Search size={20} />
          </button>
          <button aria-label="Account" className="transition-colors hover:text-orange-500">
            <User size={20} />
          </button>
          <button aria-label="Cart" className="relative transition-colors hover:text-orange-500">
            <ShoppingCart size={20} />
            <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-wander-orange text-[10px] font-bold text-wander-bg">
              2
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
