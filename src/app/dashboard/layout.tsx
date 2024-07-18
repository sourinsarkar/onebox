import { Navbar } from "@/components/Navbar";
import { SideNav } from "@/components/SideNav";

export default function DashboardLayout() {
    return (
        <div className="flex">
            <section>
                <SideNav />
            </section>
            <section className="w-full">
                <Navbar />
            </section>
        </div>
    );
}