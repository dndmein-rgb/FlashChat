import { User } from "@/db/dummy";
import { ScrollArea } from "./ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { useSound } from "use-sound";
import { usePreferences } from "@/store/usePreferences";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useSelectedUser } from "@/store/useSelectedUser";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
interface sidebarProps {
  isCollapsed: boolean;
  users:User[]
}
const Sidebar = ({ isCollapsed ,users}: sidebarProps) => {
  const {selectedUser,setSelectedUser}=useSelectedUser();
  const [playClickSound]=useSound("/sounds/mouse-click.mp3")
  const {soundEnabled}=usePreferences();

  const {user}=useKindeBrowserClient();
  return (
    <div className="group relative flex flex-col h-full gap-4 p-2 max-h-full overflow-hidden bg-background">
      {!isCollapsed && (
        <div className="flex justify-between items-center p-2 shrink-0">
          <div className="flex gap-2 items-center text-2xl">
            <p className="font-medium">Chats</p>
          </div>
        </div>
      )}
      <ScrollArea className="flex-1 gap-2 px-2">
        {users.map((user, idx) =>
          isCollapsed ? (
            <TooltipProvider key={idx}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <div onClick={()=>{
                    soundEnabled && playClickSound()
                    setSelectedUser(user);
                  }} >
                    <Avatar className="my-1 flex cursor-pointer justify-center items-center w-10 h-10">
                      <AvatarImage
                        src={user.image || "/user-placeholder.png"}
                        alt="user image"
                        className="w-full h-full object-cover"
                      />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="sr-only">{user.name}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="flex items-center gap-4"
                >
                  {user.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <Button
            onClick={()=>{
                    soundEnabled && playClickSound();
                    setSelectedUser(user);
                  }}
              key={idx}
              variant={"grey"}
              size="xl"
              className={cn(
                "w-full justify-start gap-4 my-1",
                selectedUser?.email === user.email &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white shrink",
                  " cursor-pointer"
                 
              )}
            >
              <Avatar className="flex justify-center items-center w-10 h-10 shrink-0">
                <AvatarImage
                  src={user.image || "/user-placeholder.png"}
                  alt={"User image"}
                  className="w-full h-full object-cover"
                />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col flex-1 min-w-0">
                <span className="truncate">{user.name}</span>
              </div>
            </Button>
          )
        )}
      </ScrollArea>
     {/* logout section */}
			<div className='shrink-0'>
				<div className='flex justify-between items-center gap-2 px-2 py-2'>
					{!isCollapsed && (
						<div className='flex gap-2 items-center'>
							<Avatar className='flex justify-center items-center w-8 h-8 shrink-0'>
								<AvatarImage
									src={ user?.picture||"/user-placeholder.png"}
									alt='avatar'
									referrerPolicy='no-referrer'
									className='w-full h-full object-cover'
								/>
							</Avatar>
							<p className='font-bold'>
								{user?.given_name} {user?.family_name}
							</p>
						</div>
					)}
					<div className='flex'>
						<LogoutLink>
							<LogOut size={22} cursor={"pointer"} />
              </LogoutLink>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Sidebar;
