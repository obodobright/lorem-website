import { MdOutlineEmail } from "react-icons/md";
export const ContactSection = () => {
  return (
    <div className="bg-[#d5d5ea] rounded  relative -top-16 p-5  max-w-xl mx-auto">
      <h3 className="text-3xl font-medium font-[cursive] text-center text-[darkblue]">
        Reach out to us
      </h3>
      <section className="max-w-xs mt-4 mx-auto">
        <section className="my-2">
          <label htmlFor="name" className="text-sm font-[cursive] font-medium ">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-8 placeholder:text-sm placeholder: placeholder:text-gray-500 px-2 outline-[darkblue] rounded border border-[darkblue] bg-transparent"
          />
        </section>
        <section className="my-2">
          <label htmlFor="name" className="text-sm font-[cursive] font-medium ">
            Message
          </label>
          <textarea
            type="email"
            placeholder="Enter your email"
            className="w-full h-14 placeholder:text-sm placeholder: placeholder:text-gray-500 px-2 py-1 outline-[darkblue] rounded border border-[darkblue] bg-transparent"
          />
        </section>
        <div className="flex items-center justify-center">
          <button
            className={`border-0 outline-none h-8 px-5 bg-[darkblue] text-sm text-[#BFBFE2] font-bold rounded-md`}
          >
            Send
          </button>
        </div>
      </section>
    </div>
  );
};
