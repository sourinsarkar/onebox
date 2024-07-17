import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative h-screen bg-rib-1000">
            {/* Auth Navbar */}
            <nav className="flex items-center justify-center h-16 border-b-[1px] border-rib-900">
                <Image
                    src="/images/ribmark.svg"
                    width={156}
                    height={24}
                    alt="Reachinbox Icon"
                />
            </nav>

            {children}
            
            {/* Auth Footer */}
            <footer className="absolute w-full flex items-center justify-center bottom-0 h-8 border-t-[1px] border-rib-900">
                <p className="text-rib-700 text-xs">&copy; 2023 Reachinbox. All rights reserved.</p>
            </footer>
        </div>
    );
}