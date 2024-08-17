import { Header } from '@/components/Header';
import * as Api from '@/api';

export default async function Dashboard() {
  let items: any[] = [];

  try {
    items = await Api.files.getAll();
  } catch (err) {
    console.log(err);
  }

  return (
    <main>
      <Header />
      <h1>Dashboard</h1>
    </main>
  );
}
