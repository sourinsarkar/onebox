import { RiArrowDownSFill, RiBold, RiItalic } from "@remixicon/react";

export function MailEditor() {
    return (
        <div className="w-full mx-5 bg-white">
            <section>
                <h2>Reply</h2>
            </section>
            <section>
                <div>
                    <p>To:</p>
                    <input type="text" className="w-full" />
                </div>
                <div>
                    <p>From:</p>
                    <input type="text" className="w-full" />
                </div>
                <div>
                    <p>Subject:</p>
                    <input type="text" className="w-full" />
                </div>
            </section>
            <section>
                <textarea className="w-full h-64 p-4" placeholder="Write your email here..."></textarea>
            </section>
            <section>
                <button className="flex items-center justify-center gap-2 text-white font-semibold text-sm bg-[#4B63DD] py-3 px-4 rounded mx-5">
                    Send
                    <RiArrowDownSFill size={24} />
                </button>
                <button>
                    <RiBold size={24}/>
                </button>
                <button>
                    <RiItalic size={24}/>
                </button>
            </section>
        </div>
    );
}