"use client";

import * as Api from '@/api';
import { FileItem } from '@/api/dto/files.dto';
import { Files } from '@/module/Files';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [files, setFiles] = useState<FileItem[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const files = await Api.files.getAll();
      setFiles(files);
    };

    fetchFiles();
  }, []);

  return (
    <Files items={files} withActions />
  );
}
