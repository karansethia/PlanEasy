import {ReactNode} from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({children}: LayoutProps) => {
  return (
    <div className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      {children}
    </div>
  );
};

export default Layout;
