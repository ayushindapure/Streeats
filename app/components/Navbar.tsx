import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import { ArrowDownToDot, BadgePlus, CirclePlusIcon, CreativeCommons, LogIn, LogOut, LogOutIcon } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import Button from "./Button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3  shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logonew.png" alt="logo" width={144} height={30} />
        </Link>

        

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/recommendations/create">
                <span className="max-sm:hidden hover:text-orange-500">Create</span>

                <CirclePlusIcon className="size-6 text-orange-500 sm:hidden" />
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >

            {/* <button type="submit" className="py-3 max-sm:hidden px-6 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-red-500 text-white">
              <LogOut className="size-6 sm:hidden text-neutral-950" />Lou
            </button> */}
                <button className="flex items-center" type="submit">
                  <span className="max-sm:hidden hover:text-orange-500">Logout</span>
                  <LogOutIcon className="sm:hidden"/>
                </button>
              </form>

                {/* <Image src="session?.user?.image" width={30} height={20} alt="logo"/> */}
                <h2 className="hidden sm:block">{session?.user?.name}</h2>
                <img src={session?.user?.image} className="rounded-full " height={40} width={40} alt="Profile pic" />
              {/* <Link href={`/user/${session?.id}`}>
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link> */}
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <button type="submit" className="sm:py-2 sm:px-4 py-1 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-orange-500 text-white">
                <LogIn /> Log In
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;