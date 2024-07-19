import { RiUserSearchFill } from "@remixicon/react";

export function SideNavButton({ SideNavIcon }: { SideNavIcon: React.ElementType }) {
    return (
        <div className="flex items-center justify-center w-7 h-7  text-[#919EAB] dark:text-[#AEAEAE] hover:text-[#595A5B] hover:dark:text-white hover:bg-[#E9EAEB] hover:dark:bg-[#2F3030] rounded">
            <SideNavIcon
                size={20}
            />
        </div>
    );
}