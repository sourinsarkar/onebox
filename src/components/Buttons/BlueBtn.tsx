import { RiReplyFill } from "@remixicon/react";

export function BlueBtn() {
    return (
        <button className="flex items-center justify-center gap-2 text-white font-semibold text-sm bg-[#4B63DD] py-3 px-4 rounded mx-5">
            <RiReplyFill size={24} />
            Reply
        </button>
    );
}