import Image from "next/image";

export function Auth({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <nav className="flex justify-center items-center">
                <Image
                    src="/images/ribmark.svg"
                    width={156}
                    height={24}
                    alt="Reachinbox Icon"
                />
            </nav>
            {children}
        </div>
    );
}