import Image from "next/image";
import { RiHome5Fill, RiUserSearchFill, RiMailFill, RiSendPlaneFill, RiFileListFill, RiInbox2Fill, RiBarChartFill } from "@remixicon/react";
import { SideNavButton } from "./SideNavButton";

export function SideNav() {
    const icons = [RiHome5Fill, RiUserSearchFill, RiMailFill, RiSendPlaneFill, RiFileListFill, RiInbox2Fill, RiBarChartFill];

    return (
        <nav className="h-screen flex flex-col items-center justify-between w-14 bg-[#FAFAFA] border-r-[1px] border[#D8D8D8]">
            <section className="h-[10%] flex items-center justify-center">
                <Image
                    src="/images/ribicon.svg"
                    width={32}
                    height={32}
                    alt="Reachinbox Icon"
                />
            </section>
            <section className="h-[80%] pt-8">
                <ul className="space-y-6    ">
                    {icons.map((IconComponent, index) => (  
                        <li key={index}>
                            <SideNavButton SideNavIcon = {IconComponent} />
                        </li>
                    ))}
                </ul>
            </section>
            <section className="h-[10%] flex items-center justify-center">
                <Image
                    src="/images/userdp.svg"
                    width={32}
                    height={32}
                    alt="Reachinbox Icon"
                />
            </section>
        </nav>
    );
}