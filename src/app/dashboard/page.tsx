import { MailList } from "@/components/MailList";

export default function Dashboard() {
    return (
        <div className="flex justify-between">
            <section className="w-1/5 bg-[#FAFAFA]"><MailList /></section>
            <section className="w-3/5 "></section>
            <section className="w-1/5 bg-[#FAFAFA]"></section>
        </div>
    );
}