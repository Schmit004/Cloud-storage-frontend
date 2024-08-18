"use client";

import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Spin } from "antd";
import { User } from "@/api/dto/auth.dto";
import styles from "@/styles/Profile.module.scss";
import * as Api from "@/api";

const ProfilePage: NextPage = () => {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await Api.auth.getMe();
      setUserData(data);
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Spin size="large" />
      </div>
    )
  }

  return (
    <main>
      <div className={styles.root}>
        <h1>Мой профиль</h1>
        <br />
        <p>
          ID: <b>{userData.id}</b>
        </p>
        <p>
          Полное имя: <b>{userData.fullName}</b>
        </p>
        <p>
          E-Mail: <b>{userData.email}</b>
        </p>
        <br />
      </div>
    </main>
  );
};

export default ProfilePage;
