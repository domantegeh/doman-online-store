/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9RBsq0NOTUb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import {
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";

export default function Component() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950 dark:text-gray-50">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="font-semibold">Acme Computers</span>
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuLink asChild>
                  <Link href="#">Home</Link>
                </NavigationMenuLink>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] p-2">
                      <NavigationMenuLink asChild>
                        <Link href="#">Laptops</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">Desktops</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">Monitors</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">Accessories</Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="#">About</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="relative">
              <Input
                className="h-9 w-64 rounded-md border border-gray-300 bg-white px-4 text-sm focus:border-gray-500 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50"
                placeholder="Search products..."
                type="search"
              />
              <SearchIcon className="absolute right-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            </div>
          </div>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-6">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Unleash Your Digital Potential
                </h1>
                <p className="text-gray-500 md:text-xl dark:text-gray-400">
                  Discover the latest computer technology at Acme Computers.
                  Upgrade your workspace with our top-of-the-line laptops,
                  desktops, and accessories.
                </p>
              </div>
              <div>
                <Button className="w-full sm:w-auto" size="lg">
                  Shop Now
                </Button>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
              height="600"
              src="/placeholder.svg"
              width="800"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Featured Products
              </h2>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <Card>
                <img
                  alt="Product"
                  className="aspect-[4/3] w-full rounded-t-lg object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">Acme Laptop Pro</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Intel Core i7, 16GB RAM, 512GB SSD
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold">$1,499</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Product"
                  className="aspect-[4/3] w-full rounded-t-lg object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">Acme Desktop Pro</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    AMD Ryzen 7, 32GB RAM, 1TB SSD
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold">$1,999</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Product"
                  className="aspect-[4/3] w-full rounded-t-lg object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">Acme Monitor Pro</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    27-inch, 2K resolution, 144Hz refresh rate
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold">$499</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  alt="Product"
                  className="aspect-[4/3] w-full rounded-t-lg object-cover"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">Acme Keyboard Pro</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Mechanical, RGB backlit, wireless
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold">$99</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Shop by Category
              </h2>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <Link className="group flex flex-col items-center gap-2" href="#">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700">
                  <LaptopIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Laptops
                </span>
              </Link>
              <Link className="group flex flex-col items-center gap-2" href="#">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700">
                  <ComputerIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Desktops
                </span>
              </Link>
              <Link className="group flex flex-col items-center gap-2" href="#">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700">
                  <MonitorIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Monitors
                </span>
              </Link>
              <Link className="group flex flex-col items-center gap-2" href="#">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700">
                  <MouseIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Accessories
                </span>
              </Link>
              <Link className="group flex flex-col items-center gap-2" href="#">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700">
                  <HeadphonesIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Peripherals
                </span>
              </Link>
              <Link className="group flex flex-col items-center gap-2" href="#">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700">
                  <CodeIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Software
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                  Stay Up-to-Date
                </h2>
                <p className="text-gray-500 md:text-xl dark:text-gray-400">
                  Subscribe to our newsletter and be the first to know about our
                  latest products and exclusive offers.
                </p>
              </div>
              <form className="flex w-full max-w-md items-center space-x-2">
                <Input
                  className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm focus:border-gray-500 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button size="sm" type="submit">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#">About Us</Link>
            <Link href="#">Our Team</Link>
            <Link href="#">Careers</Link>
            <Link href="#">News</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#">Laptops</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">Monitors</Link>
            <Link href="#">Accessories</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#">Blog</Link>
            <Link href="#">Support</Link>
            <Link href="#">FAQs</Link>
            <Link href="#">Guides</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#">Sales</Link>
            <Link href="#">Support</Link>
            <Link href="#">Partnerships</Link>
            <Link href="#">Press</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function ComputerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  );
}

function HeadphonesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function LaptopIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MonitorIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  );
}

function MouseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="2" width="14" height="20" rx="7" />
      <path d="M12 6v4" />
    </svg>
  );
}

function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
