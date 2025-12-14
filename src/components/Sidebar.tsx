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
    <div className="group relative flex flex-col h-full gap-4 p-4 max-h-full overflow-hidden bg-background border-r border-border animate-slide-up">
      {!isCollapsed && (
        <div className="flex justify-between items-center px-2 py-1 shrink-0">
          <div className="flex gap-2 items-center">
            <h2 className="text-lg font-semibold tracking-tight">Chats</h2>
          </div>
        </div>
      )}
      <ScrollArea className="flex-1 gap-2 px-1">
        {users.map((user, idx) =>
          isCollapsed ? (
            <TooltipProvider key={idx}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <div 
                    onClick={()=>{
                      soundEnabled && playClickSound()
                      setSelectedUser(user);
                    }}
                     className="transition-medium hover:scale-105 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Avatar className={cn(
                      "my-2 flex justify-center items-center w-10 h-10 ring-2 ring-transparent transition-smooth",
                      selectedUser?.email === user.email && "ring-primary/40"
                    )}>
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
              variant={selectedUser?.email === user.email ? "default" : "ghost"}
              size="xl"
              className={cn(
                "w-full justify-start gap-3 my-1 cursor-pointer transition-medium hover:-translate-y-0.5",
                selectedUser?.email === user.email &&
                  "shadow-medium"
              )}
            >
              <Avatar className="flex justify-center items-center w-10 h-10 shrink-0 ring-2 ring-transparent group-hover:ring-primary/20 transition-smooth">
                <AvatarImage
                  src={user.image || "/user-placeholder.png"}
                  alt={"User image"}
                  className="w-full h-full object-cover"
                />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col flex-1 min-w-0">
                <span className="truncate text-sm font-medium">{user.name}</span>
              </div>
            </Button>
          )
        )}
      </ScrollArea>
     {/* logout section */}
			<div className='shrink-0 border-t border-border pt-4'>
				<div className='flex justify-between items-center gap-2 px-2 py-2'>
					{!isCollapsed && (
						<div className='flex gap-2 items-center min-w-0'>
							<Avatar className='flex justify-center items-center w-8 h-8 shrink-0'>
								<AvatarImage
									src={ user?.picture||"/user-placeholder.png"}
									alt='avatar'
									referrerPolicy='no-referrer'
									className='w-full h-full object-cover'
								/>
							</Avatar>
							<p className='font-medium text-sm truncate'>
								{user?.given_name} {user?.family_name}
							</p>
						</div>
					)}
					<div className='flex'>
						<LogoutLink>
							<Button variant="ghost" size="icon-sm" className="hover:bg-destructive/10 hover:text-destructive transition-smooth cursor-pointer">
								<LogOut size={18} />
							</Button>
              </LogoutLink>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Sidebar;
