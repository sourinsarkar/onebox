import Image from "next/image";

export function SideNav() {
    return (
        <nav className="h-screen w-14 bg-[#FAFAFA] border-r-[1px] border[#D8D8D8]">
            <section>
                <Image
                    src="/images/ribicon.svg"
                    width={16}
                    height={16}
                    alt="Reachinbox Icon"
                />
            </section>
            <section>
                <ul></ul>
            </section>
            <section>
                <Image
                    src="/images/userdp.svg"
                    width={16}
                    height={16}
                    alt="Reachinbox Icon"
                />
            </section>
        </nav>
    );
}