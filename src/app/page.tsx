import Image from "next/image";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div
      className=" text-white h-screen bg-blue-900 snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden
     scrollbar scrollbar-track-slate-500/20 scrollbar-thumb-violet-500"
    >
      <Header></Header>
    </div>
  );
}
