import Button from "@/src/components/base/button";
import { pageRoutes } from "@/src/routes";
import Link from "next/link";

const menuPages = [
  { title: "Home", icon: "", link: pageRoutes.home },
  { title: "Dashboard", icon: "", link: pageRoutes.dashboard },
  { title: "Contact us", icon: "", link: pageRoutes.contactUs },
  { title: "About", icon: "", link: pageRoutes.about },
];
const Menu = () => {
  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <h2 className="text-2xl font-bold">
          <span className="text-blue-400">Smart/</span>Sheet
        </h2>
        {menuPages.map((page, index: number) => (
          <Button
            as={Link}
            key={index}
            className="font-semibold"
            variant="primary"
            href={page.link}
          >
            {page.title}
          </Button>
        ))}
      </div>
      <div className="flex gap-4">
        <Button as={Link} href={pageRoutes.login} variant="secondary">
          Login
        </Button>
        <Button as={Link} href={pageRoutes.login} variant="secondary">
          Signup
        </Button>
      </div>
    </nav>
  );
};

export default Menu;
