import React from "react";

export default function MyApplication() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-3 my-0">
        <h1 className="text-2xl text-center mb-8 sm:text-3xl">
          Applied job
        </h1>
        <div className="overflow-auto">
          <table className="w-full whitespace-nowrap">
            <tr className="bg-[#e2eaf8] rounded-lg text-[#0b70ff] font-semibold">
              <td className="py-5 ps-5">Jobs</td>
              <td className="py-5 text-center">Date Applied</td>
              <td className="py-5 text-center">Status</td>
              <td className="py-5 text-center">Action</td>
            </tr>
            <tr>
              <td className="ps-4 py-5 pe-5">
                <h2 className="text-indigo-600 font-semibold text-lg">
                  Front End Developer
                </h2>
                <h3>Renesas Electronics India Pvt. Ltd.</h3>
              </td>
              <td className="ps-2 py-5 pe-5 text-center">Dec 5, 2023</td>
              <td className="ps-2 py-5 pe-5 text-center text-green-700">
                Pending
              </td>
              <td className="ps-2 py-5 pe-5 text-center text-red-700">
                Withdraw
              </td>
            </tr>
            <tr>
              <td className="ps-4 py-5 pe-5">
                <h2 className="text-indigo-600 font-semibold text-lg">
                  Front End Developer
                </h2>
                <h3>Renesas Electronics India Pvt. Ltd.</h3>
              </td>
              <td className="ps-2 py-5 pe-5 text-center">Dec 5, 2023</td>
              <td className="ps-2 py-5 pe-5 text-center text-green-700">
                Pending
              </td>
              <td className="ps-2 py-5 pe-5 text-center text-red-700">
                Withdraw
              </td>
            </tr>
            <tr>
              <td className="ps-4 py-5 pe-5">
                <h2 className="text-indigo-600 font-semibold text-lg">
                  Front End Developer
                </h2>
                <h3>Renesas Electronics India Pvt. Ltd.</h3>
              </td>
              <td className="ps-2 py-5 pe-5 text-center">Dec 5, 2023</td>
              <td className="ps-2 py-5 pe-5 text-center text-green-700">
                Pending
              </td>
              <td className="ps-2 py-5 pe-5 text-center text-red-700">
                Withdraw
              </td>
            </tr>
            <tr>
              <td className="ps-4 py-5 pe-5">
                <h2 className="text-indigo-600 font-semibold text-lg">
                  Front End Developer
                </h2>
                <h3>Renesas Electronics India Pvt. Ltd.</h3>
              </td>
              <td className="ps-2 py-5 pe-5 text-center">Dec 5, 2023</td>
              <td className="ps-2 py-5 pe-5 text-center text-green-700">
                Pending
              </td>
              <td className="ps-2 py-5 pe-5 text-center text-red-700">
                Withdraw
              </td>
            </tr>
            <tr>
              <td className="ps-4 py-5 pe-5">
                <h2 className="text-indigo-600 font-semibold text-lg">
                  Front End Developer
                </h2>
                <h3>Renesas Electronics India Pvt. Ltd.</h3>
              </td>
              <td className="ps-2 py-5 pe-5 text-center">Dec 5, 2023</td>
              <td className="ps-2 py-5 pe-5 text-center text-green-700">
                Pending
              </td>
              <td className="ps-2 py-5 pe-5 text-center text-red-700">
                Withdraw
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
