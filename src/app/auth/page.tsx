import Image from "next/image";
import AuthButtons from "./AuthButtons";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
	const { isAuthenticated } = getKindeServerSession();
	if (await isAuthenticated()) return redirect("/");

	return (
		<div className='flex h-screen w-full'>
			<div
				className='flex-1 flex overflow-hidden relative 
      justify-center items-center bg-gradient-to-br from-primary/90 via-primary to-primary/80'
			>
				<img
					src='/redis-logo.svg'
					alt='Redis Logo'
					className='absolute -left-1/4 opacity-10 -bottom-52 lg:scale-125 xl:scale-100 scale-[2]
        pointer-events-none select-none'
				/>

				<div className='flex flex-col gap-3 px-4 xl:ml-40 text-center md:text-start relative z-10 animate-slide-up'>
					<Image
						src={"/logo.png"}
						alt='RediStash Logo'
						width={763}
						height={173}
						className='mt-20 w-[420px] pointer-events-none select-none drop-shadow-2xl animate-fade-in'
					/>

					<p className='text-2xl md:text-3xl text-balance text-white/95 font-semibold'>
						The <span className='bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg font-bold text-white shadow-medium'>ULTIMATE</span> chat app
					</p>

					<p className='text-2xl md:text-3xl mb-32 text-balance text-white/95 font-semibold'>
						You <span className='bg-white/20 backdrop-blur-sm font-bold px-3 py-1 rounded-lg text-white shadow-medium'>NEED TO</span> build
					</p>
					<AuthButtons />
				</div>
			</div>
			<div className='flex-1 relative overflow-hidden justify-center items-center hidden md:flex bg-gradient-to-bl from-background via-background/95 to-background/90'>
				<div className="absolute inset-0 bg-noise opacity-30"></div>
				<Image
					src={"/hero-right.png"}
					alt='Hero Image'
					fill={true}
          sizes="100vw"
					className='object-cover dark:opacity-50 opacity-80 pointer-events-none select-none h-full'
				/>
			</div>
		</div>
	);
};
export default page;