export const PrimaryButton = ({ children }) => {
  return (
    <button
      className={`border-0 outline-none h-10 px-5 bg-[#F5A623] text-[#333333] font-medium rounded-md`}
    >
      {children}
    </button>
  );
};

export const OutlineButton = ({ children }) => {
  return (
    <button
      className={`border outline-none h-10 px-5 bg-[white] text-[#F5A623] border-[#F5A623]  font-medium rounded-md`}
    >
      {children}
    </button>
  );
};
