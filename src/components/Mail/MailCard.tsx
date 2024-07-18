import { RiSendPlaneFill } from "@remixicon/react";
import Image from "next/image";

export function MailCard() {
    return (
        <div className="space-y-2 my-6">
            <div className="flex justify-between">
                <div>
                    <h2 className="text-[#343A40] text-sm font-medium ">william@gmail.com</h2>
                    <p className="text-[#172B4D] text-xs mt-1">Payment not going through</p>
                </div>
                <div>
                    <p className="text-[#919EAB] text-xs">Mar 7</p>
                </div>
            </div>

            <div className="flex gap-2">
                <div className="flex items-center justify-center gap-1 text-[##46C18D] bg-[#F0F0F0] rounded-full py-1 px-2 font-medium text-[10px]">
                    <Image
                        src="/images/greentag.svg"
                        width={12}
                        height={12}
                        alt="Interested"
                    />
                    <span className="text-[#46C18D]">Interested</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-[#637381] bg-[#F0F0F0] rounded-full py-1 px-2  font-medium text-[10px]">
                    <RiSendPlaneFill size={12} />
                    <span>Campaign</span>
                </div>
            </div>
        </div>
    );
}