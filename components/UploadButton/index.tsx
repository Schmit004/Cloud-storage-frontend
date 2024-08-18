import React from "react";
import { Button, Upload, UploadFile, notification } from "antd";
import { CloudUploadOutlined } from "@ant-design/icons";
import styles from "@/styles/Dashboard.module.scss";
import * as Api from "@/api";

export const UploadButton: React.FC = () => {
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);

  const onUploadSuccess = async (options: unknown) => {
    try {
      await Api.files.uploadFile(options);

      setFileList([]);

      window.location.reload();
    } catch (err) {
      notification.error({
        message: "Ошибка!",
        description: "Не удалось загрузить файл",
        duration: 2,
      });
    }
  };

  return (
    <Upload
      customRequest={onUploadSuccess}
      fileList={fileList}
      onChange={({ fileList }) => setFileList(fileList)}
      className={styles.upload}
    >
      <Button type="primary" icon={<CloudUploadOutlined />} size="large">
        Загрузить файл
      </Button>
    </Upload>
  );
};
