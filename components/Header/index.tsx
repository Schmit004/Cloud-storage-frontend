"use client";

import React from "react";
import { CloudOutlined } from "@ant-design/icons";
import { Layout, Avatar, Menu, Popover, Button } from "antd";
import { useRouter, usePathname } from "next/navigation";
import styles from "./Header.module.scss";
import * as Api from "@/api";
import Link from "next/link";

export const Header: React.FC = () => {
  const router = useRouter();
  const selectedMenu = usePathname();

  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      Api.auth.logout();
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
          <Popover
            trigger="click"
            content={
              <Button onClick={onClickLogout} type="primary" danger>
                Выйти
              </Button>
            }
          >
            <Avatar>A</Avatar>
          </Popover>
        </div>
      </div>
    </Layout.Header>
  );
};
