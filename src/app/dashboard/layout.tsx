"use client";

import { Navbar } from "@/components/Nav/Navbar";
import { SideNav } from "@/components/Nav/SideNav";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";

export default function DashboardLayout({ children }: {children: React.ReactNode}) {
    const isOpen = useSelector((state: RootState) => state.inboxLayout.isOpen);
    
    return (
        <div className="flex">
            <section>
                <SideNav />
            </section>
            <section className="w-full">
                <Navbar />
                {isOpen ? children : <div className="p-4">This is a sample page</div>}
            </section>
        </div>
    );
}