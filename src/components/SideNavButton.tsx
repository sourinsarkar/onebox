import { RiUserSearchFill } from "@remixicon/react";

export function SideNavButton({ SideNavIcon }: { SideNavIcon: React.ElementType }) {
    return (
        <div className="flex items-center justify-center w-7 h-7  text-[#919EAB] hover:text-[#595A5B] hover:bg-[#E9EAEB] rounded">
            <SideNavIcon
                size={20}
            />
        </div>
    );
}