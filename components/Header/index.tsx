"use client";

import React, { useEffect, useState } from "react";
import { CloudOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Avatar, Menu, Popover, Button } from "antd";
import { useRouter, usePathname } from "next/navigation";
import { parseCookies } from "nookies";
import styles from "./Header.module.scss";
import Link from "next/link";
import * as Api from "@/api";

export const Header: React.FC = () => {
  const router = useRouter();
  const selectedMenu = usePathname();

  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const cookies = parseCookies();
    setToken(cookies._token || null);
  }, []);

  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      Api.auth.logout();
      setToken(null);
      router.push("/");
    }
  };

  return (
    <Layout.Header className={styles.root}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <Link href='/' className={styles.headerLogo}>
            <CloudOutlined />
            <h2>Cloud Storage</h2>
          </Link>

          <Menu
            className={styles.topMenu}
            theme="dark"
            mode="horizontal"
            selectedKeys={[selectedMenu]}
            onSelect={({ key }) => router.push(key)}
            items={[
              { key: "/dashboard", label: "Dashboard" },
              { key: "/profile", label: "Profile" },
            ]}
          />
        </div>

        <div className={styles.headerRight}>
          {token ? (
            <Popover
              trigger="click"
              content={
                <Button onClick={onClickLogout} type="primary" danger>
                  Выйти
                </Button>
              }
            >
              <Avatar><UserOutlined /></Avatar>
            </Popover>
          ) : (
            <Link href="/auth">
              <Button type="primary">Вход</Button>
            </Link>
          )}
        </div>
      </div>
    </Layout.Header>
  );
};
