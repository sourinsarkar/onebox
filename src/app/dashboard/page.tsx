import { MailList } from "@/components/Mail/MailList";
import { LeadInfo } from "@/components/Mail/LeadInfo"
import { MailHeader } from "@/components/Mail/MailHeader";
import { MailFeed } from "@/components/Mail/MailFeed";
import { BlueBtn } from "@/components/Buttons/BlueBtn";
import { MailEditor } from "@/components/Mail/MailEditor";

export default function Dashboard() {
    return (
        <div className="flex justify-between">
            <section className="w-1/5 py-3 px-5 bg-[#FAFAFA]" style={{ height: `calc(100vh - 4rem)` }}><MailList /></section>
            <section className="relative w-3/5 bg-[#F4F6F8]" style={{ height: `calc(100vh - 4rem)` }}>
                <MailHeader />
                <div className="relative">
                    <hr className="my-5" />
                    <p className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-1 px-2 font-semibold text-[10px] rounded-md  bg-[#EEF1F4] ">Today</p>
                </div>
                <MailFeed />
                <div className="absolute bottom-4">
                    <BlueBtn />
                </div>
                <div className="absolute bottom-4 w-full">
                    <MailEditor />
                </div>
            </section>
            <section className="w-1/5 py-3 px-1.5 bg-[#FAFAFA]" style={{ height: `calc(100vh - 4rem)` }}><LeadInfo /></section>
        </div>
    );
}