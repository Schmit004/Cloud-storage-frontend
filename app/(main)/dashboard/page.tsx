import * as Api from '@/api';
import styles from '@/styles/Dashboard.module.scss';

export default async function Dashboard() {
  let items: any[] = [];

  try {
    items = await Api.files.getAll();
  } catch (err) {
    console.log(err);
  }

  return (
    <h1>Dashboard</h1>
  );
}
