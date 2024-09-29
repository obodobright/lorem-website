export const TestimonialCard = ({ isActive, data }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="w-[100px] h-[100px] rounded-full border-2 border-[darkblue]"></div>
      <h3 className="font-medium text-lg text-[darkblue]">{data.name}</h3>
      <p className="text-gray-600">{data.jobTitle}</p>
      <div className="max-w-sm text-center">
        <p className="text-sm text-gray-600">{data.testimony}</p>
      </div>
    </div>
  );
};
