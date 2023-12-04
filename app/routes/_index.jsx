import { Link } from '@remix-run/react';

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <>
      <div className="flex w-full max-w-[1000px] mx-auto my-0 h-screen items-center justify-center flex-col gap-8 p-4 ">
        <div className='max-w-[700px] flex flex-col items-center justify-center gap-4 text-center'>
          <h1 className='font-semibold text-5xl md:text-[4rem] xl:text-[6rem] text-teal-300'>EASY NOTES</h1>
          <p className='text-md md:text-lg xl:text-xl font-semibold text-gray-400 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis necessitatibus eligendi culpa alias placeat numquam, impedit, nobis possimus ratione sint commodi beatae cum architecto adipisci! Amet quisquam magnam ad praesentium.</p>
        </div>
        <div className='flex gap-8'>
          <button className='px-8 py-2  bg-teal-300 font-semibold rounded-lg hover:bg-teal-400 transition duration-200'><Link to={'/signup'}>SIGN UP</Link></button>
          <button className='px-8 py-2 bg-slate-500 font-semibold rounded-lg'><Link to={'/login'}>LOG IN</Link></button>
        </div>
      </div>
    </>
  );
}
