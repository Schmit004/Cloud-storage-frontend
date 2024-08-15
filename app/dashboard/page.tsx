"use client";

import Head from "next/head";
import { NextPage } from "next";
import { Tabs } from "antd";
import { LoginForm } from "@/components/auth/LoginForm";
import { RegisterForm } from "@/components/auth/RegisterForm";

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Админ-панель</title>
      </Head>
      <main style={{ width: 400, margin: "50px auto" }}>
        <h1>Админ-панель</h1>
      </main>
    </>
  );
};

export default Dashboard;
