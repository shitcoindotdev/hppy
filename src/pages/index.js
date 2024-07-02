import Links from "@/components/Links";
import Image from "next/image";

export default function Home() {
  return (
    <main className={`min-h-dvh text-white overflow-hidden flex flex-col`} style={{ fontFamily: 'Quicksand'}}>
      <div className="mt-[69px] flex flex-col gap-[42px]">
        <div className="flex relative z-20 flex-col items-center">
        <Image className="w-[60vw] max-w-[690px]" src="/hoppyCashtag.webp" width={2560} height={1280} srcSet="
            /hoppyCashtag-300x150.webp 300w,
            /hoppyCashtag-1024x512.webp 1024w,
            /hoppyCashtag-768x384.webp 768w,
            /hoppyCashtag-1536x768.webp 1536w,
            /hoppyCashtag-2048x1024.webp 2048w,
            /hoppyCashtag.webp 2560w
          " alt="Hoppy Cashtag"/>
        <p className="text-[20px] -mt-[25px] md:text-[36px] text-wrap">(Website under Maintenance)</p>
        </div>
        <div className="flex flex-col gap-[42px] items-center justify-center">
          <div className="text-[10px] sm:text-[16px]">
          Ca: <span>49URzr9xiZSwR7mRUuYz8BKhzbxPKjXFGJEJEEuS6VDD</span>
          </div>
          <Links />
        </div>
      </div>
      <Image className="fixed z-0 bottom-0 translate-y-[18%] translate-x-1/4 right-0 w-[70vw] max-w-[800px]" src="/hoppyMage.svg" width={0} height={0} alt="Hoppy Mage" />
    </main>
  );
}
