const Container = ({
  customStyle = "",
  children,
}: {
  customStyle: string;
  children: React.ReactNode;
}) => {
  return <div className={`w-[1280px] mx-auto ${customStyle}`}>{children}</div>;
};

export default Container;
