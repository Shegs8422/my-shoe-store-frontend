import Link from "next/link";
import { Search, ShoppingCart, Menu } from "lucide-react";

interface NavItem {
  label: string;
  href: string | null;
  icon?: string;
}

interface NavLink {
  name: string;
  badge?: string | null;
  isNew?: boolean;
}

const Header = () => {
  const navLinks: NavLink[] = [
    { name: "Shop", badge: null, isNew: false },
    { name: "Exclusive", badge: "Online Exclusive", isNew: false },
    { name: "Community", badge: null, isNew: true },
    { name: "Spring Summer 2025", badge: "Coming Soon", isNew: false },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 w-full z-50">
      {/* Announcement Bar */}
      <div className="bg-[#D8E6D5] text-black overflow-hidden whitespace-nowrap relative">
        <div className="animate-marquee inline-block">
          <div className="flex space-x-6 py-2">
            <span>
              GET 15% OFF ON ALL PATTA ITEMS - ADD CODE 'GOTLOVE15' AT CHECKOUT
            </span>
            <span>FREE SHIPPING ON EU ORDERS ABOVE €250</span>
            <span>
              GET 15% OFF ON ALL PATTA ITEMS - ADD CODE 'GOTLOVE15' AT CHECKOUT
            </span>
            <span>FREE SHIPPING ON EU ORDERS ABOVE €250</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className="h-20 lg:h-24 flex items-center bg-transparent mix-blend-difference transition-transform duration-300 ease-out-cubic translate-y-0"
        aria-label="Main Navigation"
      >
        <div className="container mx-auto px-4 lg:px-6 w-full">
          <nav className="flex justify-between items-center w-full h-full">
            {/* Logo */}
            <div className="flex-shrink-0 z-10">
              <Link href="/" aria-label="Go to homepage">
                <img
                  src="/patta-logo-white.svg"
                  alt="Patta Logo"
                  className="w-auto h-12 lg:h-16"
                  width={90}
                  height={50}
                />
              </Link>
            </div>

            {/* Center Navigation */}
            <ul className="group/mainnav hidden lg:flex flex-row items-center justify-center gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {navLinks.map((item) => (
                <li key={item.name} className="group/dropdown-menu relative">
                  <Link
                    href={`/${item.name.toLowerCase().replace(" ", "-")}`}
                    className="
                      relative z-10 block py-1
                      text-white text-xs font-medium uppercase tracking-wider
                      transition-all duration-200 ease-out
                      group-hover/mainnav:opacity-40 hover:!opacity-100
                      hover:text-primary
                      after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300
                      hover:after:w-full
                      font-helvetica-condensed
                    "
                  >
                    <div className="flex flex-col items-start">
                      <div className="absolute -top-2 left-0 flex flex-row gap-1.5">
                        {item.badge && (
                          <span className="text-[10px] lg:text-xs leading-none font-medium px-1.5 py-0.5 rounded-sm bg-green-500 text-white">
                            {item.badge}
                          </span>
                        )}
                        {item.isNew && (
                          <span className="text-[10px] lg:text-xs leading-none font-medium px-1.5 py-0.5 rounded-sm bg-black text-white">
                            New
                          </span>
                        )}
                      </div>
                      <span>{item.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right Side Items */}
            <div className="hidden lg:flex items-center justify-end gap-4 lg:gap-6">
              {(
                [
                  { label: "NL/EN", href: null, icon: "●" },
                  { label: "Search", href: null },
                  { label: "Account", href: "/account" },
                  { label: "Favorites", href: "/favorites" },
                  { label: "Cart", href: "/cart" },
                ] as NavItem[]
              ).map((item) =>
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="
                      text-white text-xs font-medium uppercase tracking-wider
                      hover:opacity-80 transition-opacity duration-150
                      flex items-center gap-1.5
                      font-helvetica-condensed
                    "
                  >
                    {item.icon && <span className="w-3 h-3">{item.icon}</span>}
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    type="button"
                    className="
                      text-white text-xs font-medium uppercase tracking-wider
                      hover:opacity-80 transition-opacity duration-150
                      flex items-center gap-1.5
                      font-helvetica-condensed
                    "
                  >
                    {item.icon && <span className="w-3 h-3">{item.icon}</span>}
                    {item.label}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="
                text-white text-xs font-medium uppercase tracking-wider
                hover:opacity-80 transition-opacity duration-150
                flex items-center gap-1.5
                font-helvetica-condensed
                lg:hidden z-10
              "
              aria-label="Open menu"
              aria-expanded="false"
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
