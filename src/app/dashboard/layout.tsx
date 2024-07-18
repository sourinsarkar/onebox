import { Navbar } from "@/components/Nav/Navbar";
import { SideNav } from "@/components/Nav/SideNav";

export default function DashboardLayout({ children }: {children: React.ReactNode}) {
    return (
        <div className="flex">
            <section>
                <SideNav />
            </section>
            <section className="w-full">
                <Navbar />
                {children}
            </section>
        </div>
    );
}