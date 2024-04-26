import { ClockIcon } from "@radix-ui/react-icons";

const ProfileSubHeader = () => {
  return (
    <header className='profile-sub-header mt-5 text-center flex items-center justify-between'>
      <div className='friends w-1/3 text-start leading-none'>
        <h2 className='font-bold text-[1.65rem] font-montserrat text-[#393a4f]'>3.4k </h2>
        <small className='uppercase text-xs text-gray-500 font-medium'>Friends</small>
      </div>
      <div className='user-name w-1/3 text-center leading-none'>
        <h2 className='font-bold text-[1.65rem] text-[#393a4f] dark:text-white'>
          John Doe
        </h2>
        <small className='text-[#a2a5b9]'>Media Influencer</small>
      </div>
      <div className='w-1/3 text-end text-sm font-medium'>
        <button className='inline-flex items-center gap-1 bg-white border border-gray-400 px-4 py-1.5 rounded-lg dark:bg-[#151a23] dark:text-white dark:border-[#283143] '>
          <ClockIcon />
          <span>History</span>
        </button>
      </div>
    </header>
  );
};

export default ProfileSubHeader;