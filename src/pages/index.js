import Head from "next/head";
import { useSession } from "next-auth/react";

const HomePage = () => {
  const { data } = useSession();
  console.log(data)
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>Welcome To Next Auth Home Page</h1>

      <h2 style={{ textAlign: "center", }}>Logged User: {data?.user?.name}</h2>
    </div>
  );
};

export default HomePage;
