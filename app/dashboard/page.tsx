import { Metadata, NextPage } from "next";
import { Tabs } from "antd";
import { LoginForm } from "@/components/auth/LoginForm";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Dashboard",
};

const Dashboard: NextPage = () => {
  return (
    <>
      <main style={{ width: 400, margin: "50px auto" }}>
        <Tabs
          items={[
            {
              label: "Войти",
              key: "1",
              children: <LoginForm />,
            },
            {
              label: "Регистрация",
              key: "2",
              children: <RegisterForm />,
            },
          ]}
        />
      </main>
    </>
  );
};

export default Dashboard;
