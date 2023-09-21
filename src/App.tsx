import { Button } from "./components/ui/button"
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import rectangule from './assets/images/Rectangle 67.png';

export function App() {
  return (
    <main>
      <div className="h-screen text-black pt-8 bg-[url('../src/assets/images/rectangle.png')] bg-no-repeat bg-right bg-contain" >
        <div className="flex h-full">
          <div className="w-1/2">
            <div className="flex flex-col h-full">
              <div className="flex flex-row justify-start ps-6">
                <img className="w-10" src="../src/assets/images/logo.png" alt="" />
              </div>
              <div className="flex flex-row h-full justify-center">
                <div className="flex flex-col justify-center">
                  <p className="font-bold text-4xl">Hi, I am</p>
                  <p className="font-bold text-7xl">Lucas Silva</p>
                  <p className="font-bold text-base text-[#909090]">Fullstack Developer</p>
                  <div className="flex flex-row justify-evenly mt-14 text-black">
                    <Button className="bg-[rgba(196, 196, 196, 1)] hover:bg-slate-400 shadow-xl rounded-none"><LinkedInLogoIcon className="text-black" /></Button>
                    <Button className="bg-[rgba(196, 196, 196, 1)] hover:bg-slate-400 shadow-xl rounded-none"><GitHubLogoIcon className="text-black" /></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full">
            <div className="flex flex-col h-full justify-between">
              <div className="flex flex-row justify-evenly ps-6">
                <Button className="bg-transparent hover:bg-slate-400">About me</Button>
                <Button className="bg-transparent hover:bg-slate-400">Skills</Button>
                <Button className="bg-transparent hover:bg-slate-400">Portfolio</Button>
                <Button className="bg-white text-black hover:bg-slate-400">Contact-me</Button>
              </div>
              <div className="flex flex-row justify-center">
                <img className="w-2/4" src="../src/assets/images/photo.png" alt="" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </main >
  )
}


