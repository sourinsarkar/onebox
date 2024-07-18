import { MailList } from "@/components/Mail/MailList";
import { LeadInfo } from "@/components/Mail/LeadInfo"
import { MailHeader } from "@/components/Mail/MailHeader";
import { MailFeed } from "@/components/Mail/MailFeed";

export default function Dashboard() {
    return (
        <div className="flex justify-between">
            <section className="w-1/5 py-3 px-5 bg-[#FAFAFA]" style={{ height: `calc(100vh - 4rem)` }}><MailList /></section>
            <section className="w-3/5 bg-[#F4F6F8]" style={{ height: `calc(100vh - 4rem)` }}><MailHeader /> <MailFeed /> </section>
            <section className="w-1/5 py-3 px-1.5 bg-[#FAFAFA]" style={{ height: `calc(100vh - 4rem)` }}><LeadInfo /></section>
        </div>
    );
}