import { Header, Posts, Start, Creators, End, Idea, Tech } from "./_component";

export default function Home() {
  return (
    <main className="w-screen flex justify-center">
      <div className="w-[2560px] flex flex-col justify-center">
        <div className="flex justify-center w-full">
          <div className="max-w-[2560px] w-full fixed">
            <Header />
          </div>
        </div>
        <div className="h-fit w-full">
          <Start />
          <Idea />
        </div>
      </div>
    </main>
  );
}
