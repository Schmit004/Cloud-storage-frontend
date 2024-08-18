"use client";

import { NextPage } from "next";
import { Tabs } from "antd";
import { LoginForm } from "@/components/auth/LoginForm";
import { RegisterForm } from "@/components/auth/RegisterForm";

const Auth: NextPage = () => {
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

export default Auth;
