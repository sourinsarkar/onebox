import { RiArrowDownSLine, RiRefreshLine, RiSearchLine } from "@remixicon/react";

export function MailList() {
    return (
        <div className="space-y-4">
            <section className="flex justify-between">
                <div className="space-y-1">
                    <div className="flex items-center text-[#4285F4]">
                        <h1 className="font-bold text-xl">All Inbox(s)</h1>
                        <RiArrowDownSLine size={24}/>
                    </div>
                    <div>
                        <p className="text-[#343A40] font-bold text-sm">25/25 <span className="text-[#7F7F7F] font-normal">Inboxes Selected</span></p>
                    </div>
                </div>    
                
                <div>
                    <div className="w-8 h-8 flex items-center justify-center border-[1px] border-[#DFE3E8] rounded-md">
                        <RiRefreshLine size={16} />
                    </div>
                </div>
            </section>

            <section className="space-y-2.5">
                {/* Search */}
                <div className="flex items-center gap-1 bg-[#F4F6F8] border-[1px] border-[#DFE3E8] rounded-md p-py px-1.5">
                    <RiSearchLine size={18} />
                    <input type="search" placeholder="Search" className="w-full outline-none bg-[#F4F6F8] rounded-md  placeholder:text-[#ADBAC7] placeholder:text-sm" />
                </div>

                {/* Filter */}
                <div className="flex items-center justify-between text-[#172B4D] font-semibold text-sm">
                    <div className="flex items-center gap-1">
                        <p className="p-py px-1.5 rounded-full bg-[#ECECEC] text-[#5C7CFA]">26</p>
                        <p>New Replies</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p>Newest</p>
                        <RiArrowDownSLine size={16}/>
                    </div>
                </div>
            </section>
            
            <section></section>
        </div>
    );
}