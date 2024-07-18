import { RiArrowDownSLine, RiMenuFill, RiMore2Fill } from "@remixicon/react";
import Image from "next/image";

export function MailHeader() {
    return (
        <div className="flex items-center justify-between">
            <section>
                <h2 className="text-sm font-semibold">Orlando</h2>
                <p className="text-xs">orlando@gmail.com</p>
            </section>
            <section className="flex items-center space-x-6 text-xs font-semibold">
                <div className="flex items-center justify-center gap-2 border-[1px] border-[#DFE3E8] py-1 px-2 rounded">
                    <Image
                        src="/images/orangetag.svg"
                        width={20}
                        height={20}
                        alt="Meeting Completed"
                    />
                    <p>Meeting Completed</p>
                    <RiArrowDownSLine size={20} />
                </div>
                <div className="flex items-center justify-center gap-2 border-[1px] border-[#DFE3E8] py-1 px-2 rounded">
                    <p>Move</p>
                    <RiArrowDownSLine size={20} />
                </div>
                <div className="flex items-center justify-center border-[1px] border-[#DFE3E8] py-1 px-2 rounded">
                    <RiMore2Fill size={20} />
                </div>
            </section>
        </div>
    );
}