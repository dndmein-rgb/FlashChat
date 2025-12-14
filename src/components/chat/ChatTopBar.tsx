import { Avatar, AvatarImage } from "../ui/avatar";
import { Info, X } from "lucide-react";
import { useSelectedUser } from "@/store/useSelectedUser";

const ChatTopBar = () => {
	const { selectedUser, setSelectedUser } = useSelectedUser();
	return (
		<div className='w-full h-20 flex px-6 py-4 justify-between items-center border-b border-border bg-background animate-slide-down'>
			<div className='flex items-center gap-3'>
				<Avatar className="ring-2 ring-primary/15 transition-smooth">
					<AvatarImage
						src={selectedUser?.image || "/user-placeholder.png"}
						alt='User Image'
					/>
				</Avatar>
				<div className="flex flex-col">
					<span className='font-semibold text-base'>{selectedUser?.name}</span>
					<span className='text-xs text-muted-foreground'>Active now</span>
				</div>
			</div>

			<div className='flex gap-1'>
				<button className='p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-smooth hover:scale-105 active:scale-95'>
					<Info size={20} />
				</button>
				<button
					className='p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-smooth hover:scale-105 active:scale-95'
					onClick={() => setSelectedUser(null)}
				>
					<X size={20} />
				</button>
			</div>
		</div>
	);
};
export default ChatTopBar;