"use client";
import LeftSideBarTemplate from "@modules/left-sidebar/left-sidebar-template";
import GroupMainTemplate from "@modules/stream-view/group-main/group-main-template";

const Home = () => {
  return (
    <main className="flex items-center justify-center flex-row w-full h-full p-5">
      <div className="flex items-center justify-center  w-full h-full p-2.5">
        <LeftSideBarTemplate />
      </div>
      <div className="flex w-full h-full justify-between items-center">
        <div className="flex w-full h-full justify-center items-center text-center">
          <GroupMainTemplate />
        </div>
        <div className="flex w-full h-full justify-center items-center text-center">
          Poppolar
        </div>
      </div>
    </main>
  );
};

export default Home;
