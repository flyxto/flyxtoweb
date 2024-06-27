import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import Link from "next/link"
import Logo from '@/assets/logo.png'
import Image from "next/image";


const Navbar = () => {
  return (
    <header className="w-full  shadow-sm ">
      <div className="container mx-auto flex h-16 max-w-7xl items-center  justify-center px-4 md:px-6">
        <div className="flex items-center py-2 px-8 bg-gray-800 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 shadow-slate-400 shadow-inner mt-8">
          <Link href="#" className="text-lg font-bold pr-16" prefetch={false}>
            <Image
              src={Logo}
              width={80}
              height={500}
              alt="Picture of the author"
            />
          </Link>
          <nav className="hidden items-center space-x-4 md:flex">

            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#"
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground"
              prefetch={false}
            >
              Contact
            </Link>


          </nav><Link href="#" className="pl-16 py-2" prefetch={false}>
            <Button className="bg-transparent backdrop-blur-md bg-opacity-20 text-white px-4 rounded-full  border-white/20 hover:bg-white/10 transition duration-300 h-8"> Quick Chat</Button>
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
            <div className="flex flex-col items-center space-y-4">
              <Link
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground"
                prefetch={false}
              >
                Services
              </Link>
              <Link
                href="#"
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground"
                prefetch={false}
              >
                Contact
              </Link>

            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
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

export default Navbar;