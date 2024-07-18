    "use client";

    import Image from "next/image";
    import Link from "next/link";
    import { useEffect } from "react";
    import { useSearchParams, useRouter } from "next/navigation";
    import { useDispatch } from "react-redux";
    import { setToken } from "@/redux/features/auth/authSlice";

    export default function Signup() {
        const router = useRouter();
        const dispatch = useDispatch();

        const searchParams = useSearchParams();
        const token = searchParams.get("token");
        
        useEffect(() => {
            if (token) {
                dispatch(setToken(token));
                router.push("/dashboard");
            }
        }, [ token, dispatch]);

    const handleLogin = () => {
        window.location.href = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000';
    }

    return (
        <div className="h-screen flex items-center justify-center" style={{ height: `calc(100vh - 6rem)` }}>
            <div className="m-auto w-[460px] border-[1px] border-[#343A40] rounded-2xl pt-6 px-10 pb-10 text-center space-y-10">
                <section className="space-y-6">
                    <h1 className="text-[#FFF] font-semibold text-xl">Create a new account</h1>
                    <button onClick={handleLogin} className="w-full flex items-center justify-center gap-3 border-[1px] border-[#707172] rounded px-2 py-4 text-[#CCCCCC] leading-none">
                        <Image
                            src="/images/google_logo.png"
                            width={16}
                            height={16}
                            alt="Reachinbox Icon"
                        />
                        <span>Sign Up with Google</span>
                    </button>
                </section>
                <section className="space-y-6">
                    <button className="text-white font-semibold text-sm bg-[#4B63DD] py-3 px-8 rounded">
                        Create an account
                    </button>
                    <p className="text-[#909296]">Already have an account? <Link href="#" className="text-[#C1C2C5]">Sign In</Link></p>
                </section>
            </div>
        </div>
    );
}