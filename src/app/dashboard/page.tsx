import { MailList } from "@/components/Mail/MailList";
import { LeadInfo } from "@/components/Mail/LeadInfo"
import { MailHeader } from "@/components/Mail/MailHeader";

export default function Dashboard() {
    return (
        <div className="flex justify-between">
            <section className="w-1/5 py-3 px-5 bg-[#FAFAFA]" style={{ height: `calc(100vh - 4rem)` }}><MailList /></section>
            <section className="w-3/5 py-3 px-5" style={{ height: `calc(100vh - 4rem)` }}><MailHeader /></section>
            <section className="w-1/5 py-3 px-1.5 bg-[#FAFAFA]" style={{ height: `calc(100vh - 4rem)` }}><LeadInfo /></section>
        </div>
    );
}