import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useSelectedUser } from "@/store/useSelectedUser";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useQuery } from "@tanstack/react-query";
import { getMessages } from "@/actions/message.action";
import { useEffect, useRef } from "react";
import MessageSkeleton from "../skeletons/MessageSkeleton";

const MessageList = () => {
	const { selectedUser } = useSelectedUser();
	const { user: currentUser, isLoading: isUserLoading } = useKindeBrowserClient();
	const messageContainerRef = useRef<HTMLDivElement>(null);

	const { data: messages, isLoading: isMessagesLoading } = useQuery({
		queryKey: ["messages", selectedUser?.id],
		queryFn: async () => {
			if (selectedUser && currentUser) {
				return await getMessages(selectedUser?.id, currentUser?.id);
			}
		},
		enabled: !!selectedUser && !!currentUser && !isUserLoading,
	});

	// Scroll to the bottom of the message container when new messages are added
	useEffect(() => {
		if (messageContainerRef.current) {
			messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
		}
	}, [messages]);

	return (
		<div ref={messageContainerRef} className='w-full overflow-y-auto overflow-x-hidden h-full flex flex-col bg-background'>
			{/* This component ensure that an animation is applied when items are added to or removed from the list */}
			<AnimatePresence>
				{!isMessagesLoading &&
					messages?.map((message, index) => (
						<motion.div
							key={index}
							layout
							initial={{ opacity: 0, scale: 0.97, y: 20, x: 0 }}
							animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
							exit={{ opacity: 0, scale: 0.97, y: -10, x: 0 }}
							transition={{
								opacity: { duration: 0.2 },
								scale: { duration: 0.2 },
								y: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
								layout: {
									type: "spring",
									bounce: 0.15,
									duration: 0.3,
								},
							}}
							style={{
								originX: 0.5,
								originY: 0.5,
							}}
							className={cn(
								"flex flex-col gap-2 px-6 py-4 whitespace-pre-wrap",
								message.senderId === currentUser?.id ? "items-end" : "items-start"
							)}
						>
							<div className='flex gap-3 items-end max-w-[75%]'>
								{message.senderId === selectedUser?.id && (
									<Avatar className='flex justify-center items-center shrink-0 mb-1'>
										<AvatarImage
											src={selectedUser?.image}
											alt='User Image'
											className='rounded-full'
										/>
									</Avatar>
								)}
								{message.messageType === "text" ? (
									<div className={cn(
										"px-4 py-2.5 rounded-2xl shadow-soft transition-smooth",
										message.senderId === currentUser?.id 
											? "bg-primary text-primary-foreground rounded-br-sm" 
											: "bg-muted text-foreground rounded-bl-sm"
									)}>
										<span className='text-sm leading-relaxed'>{message.content}</span>
									</div>
								) : (
									<img
										src={message.content}
										alt='Message Image'
										className='rounded-2xl shadow-medium h-40 md:h-52 object-cover transition-smooth hover:shadow-strong'
									/>
								)}

								{message.senderId === currentUser?.id && (
									<Avatar className='flex justify-center items-center shrink-0 mb-1'>
										<AvatarImage
											src={currentUser?.picture || "/user-placeholder.png"}
											alt='User Image'
											className='rounded-full'
										/>
									</Avatar>
								)}
							</div>
						</motion.div>
					))}

				{isMessagesLoading && (
					<>
						<MessageSkeleton />
						<MessageSkeleton />
						<MessageSkeleton />
					</>
				)}
			</AnimatePresence>
		</div>
	);
};
export default MessageList;