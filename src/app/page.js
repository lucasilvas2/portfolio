import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between">
      <div className="fixed w-full">
        <Navbar></Navbar>
      </div>
      <div
        id="about_me"
        className="min-h-screen w-full bg-[url('/img/back.png')] background-home"
      >
        {/* <div className="w-full h-full bg-[#D7D7D7] transform rotate-[120deg] absolute">
          <p>Aqui</p>
        </div> */}
      </div>
      <div id="skills" className="min-h-screen w-full bg-white">
        <p>Teste</p>
      </div>
    </main>
  );
}
