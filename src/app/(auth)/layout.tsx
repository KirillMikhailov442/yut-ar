import { Provider } from "@/components/ui/provider";
import { Theme } from "@chakra-ui/react";
import Link from "next/link";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Provider>
      <Theme appearance="light">
        <div className="h-[100vh] flex flex-col">
          <header className="flex">
            <Link href={"/"} className="auth-back">
              НА ГЛАВНУЮ
            </Link>
          </header>
          <div className="flex-grow flex p-8 max-lg:p-4 !mx-4">{children}</div>
        </div>
      </Theme>
    </Provider>
  );
};

export default AuthLayout;
