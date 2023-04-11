const Container = ({
  customStyle = "",
  children,
}: {
  customStyle: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`w-full sm:w-[600px] md:w-[700px] lg:w-[960px] xl:w-[1220px] mx-auto px-4 ${customStyle}`}
    >
      {children}
    </div>
  );
};

export default Container;
