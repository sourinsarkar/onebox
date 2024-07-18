import { RiArrowDownSLine } from "@remixicon/react";

export function Navbar() {
    return (
        <nav className="flex items-center justify-between h-16 text-[#454F5B] border-b-[1px] border-[#DEDEDE] px-6">
            <div>
                <h1 className="font-bold">Onebox</h1>
            </div>
            <div>
                <div></div>
                <div className="flex items-center justify-center">
                    <p className="text-sm font-semibold">Tim's Workspace</p>
                    <RiArrowDownSLine size={16}/>
                </div>
            </div>
        </nav>
    );
}