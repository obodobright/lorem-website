export const CustomLayout = ({ children }) => {
  return (
    <main className="mx-auto max-w-[800px]  md:max-w-[1050px] px-18 lg:max-w-[1920px]">
      {children}
    </main>
  );
};
