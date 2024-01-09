import { Feed, Rightbar, Sidebar, Topbar } from "../components";

const Home = () => {
  return (
    <div>
      <Topbar />
      <div className=" flex">
        <Sidebar />

        <Feed />

        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
