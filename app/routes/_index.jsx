export const meta = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <>
      <div className="flex w-full h-screen items-center justify-center flex-col gap-4">
        <div className="text-center">
          <h1 className="text-indigo-500 text-5xl md:text-6xl font-semibold ">EASY NOTES</h1>
          <p className="text-xl">All your notes in one place</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-indigo-500 text-white px-4 py-1 rounded-lg hover:bg-indigo-600 transition duration-300">Log In</button>
          <button className="border border-indigo-500  px-4 py-1 rounded-lg">Sign Up</button>
        </div>
      </div>
    </>
  );
}
