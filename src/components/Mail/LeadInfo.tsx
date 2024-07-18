
interface TableData {
    row1: string;
    row2: string;
  }

export function LeadInfo() {
    // const data: TableData[] = [
    //     { row1: "Name", row2: "Orlando" },
    //     { row1: "Contact No", row2: "+54-9062827869" },
    //     { row1: "Email ID", row2: "orlando@gmail.com" },
    //     { row1: "Linnkedin", row2: "linkedin.com/in/timvadde" },
    //     { row1: "Company Name", row2: "Reachinbox" },
      ];
    return (
        <div>
            <div className="bg-[#ECEFF3] py-1.5 px-2 rounded-md">
                <h2 className="text-sm text-[#454F5B] font-semibold">Lead Deatils</h2>
            </div>
            {/* <div className="">
                <table className="">
                    <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="">
                        <td className="px-3 py-1.5 whitespace-nowrap text-xs text-[#337381] w-40">
                            {item.row1}
                        </td>
                        <td className="px-6 py1.5 whitespace-nowrap text-sm text-black text-right w-40">
                            {item.row2}
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div> */}
        </div>
    );
}