import { Link } from '@remix-run/react';
import imageIndex from '../../public/assets/undraw_note_list_re_r4u9.svg'

export const meta = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <>
      <div className="flex w-full max-w-[1000px] mx-auto my-0 h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4 w-full md:w-1/2">
          <div className="text-center">
            <h1 className="text-indigo-500 text-5xl md:text-6xl font-semibold ">EASY NOTES</h1>
            <p className="text-xl">All your notes in one place</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-indigo-500 text-white px-4 py-1 rounded-lg hover:bg-indigo-600 transition duration-300"><Link to={'/login'}>Log In</Link> </button>
            <button className="border border-indigo-500  px-4 py-1 rounded-lg">Sign Up</button>
          </div>
        </div>
        <div className="flex-col items-center justify-center gap-4 w-full md:w-1/2 hidden md:flex">
          <img src={imageIndex} alt="" className='w-full h-full max-w-[700px]' />
        </div>
      </div>
    </>
  );
}
