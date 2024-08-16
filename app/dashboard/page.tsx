import { GetServerSidePropsContext, NextPage } from "next";
import { checkAuth } from "@/utils/checkAuth";
import * as Api from "@/api";


export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }

  try {
    const items = await Api.files.getAll();

    return {
      props: {
        items,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: { items: [] },
    };
  }
};

const Dashboard: NextPage = () => {
  return (
      <main style={{ width: 400, margin: "50px auto" }}>
        <h1>Dashboard</h1>
      </main>
  );
};

export default Dashboard;
