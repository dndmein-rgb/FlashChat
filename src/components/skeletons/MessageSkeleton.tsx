import { Skeleton } from "../ui/skeleton";

const MessageSkeleton = () => {
	return (
		<div className='px-6 py-3 animate-fade-in'>
			<div className='flex gap-3 items-end mb-4 animate-slide-up'>
				<Skeleton className='h-10 w-10 rounded-full shrink-0' />
				<div className='flex flex-col gap-2'>
					<Skeleton className='w-48 h-12 rounded-2xl rounded-bl-sm' />
				</div>
			</div>
			<div className='flex gap-3 items-end justify-end animate-slide-up'>
				<div className='flex flex-col gap-2'>
					<Skeleton className='w-52 h-12 rounded-2xl rounded-br-sm' />
				</div>
				<Skeleton className='h-10 w-10 rounded-full shrink-0' />
			</div>
		</div>
	);
};
export default MessageSkeleton;