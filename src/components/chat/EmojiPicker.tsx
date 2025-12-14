"use client";

import { SmileIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

interface EmojiPickerProps {
	onChange: (emoji: string) => void;
}

const Picker = dynamic(() => import("@emoji-mart/react").then(mod => mod.default), {
	ssr: false,
	loading: () => <div className="p-2">Loading...</div>
});

const EmojiPicker = ({ onChange }: EmojiPickerProps) => {
	const { theme } = useTheme();

	return (
		<Popover>
			<PopoverTrigger asChild>
				<button className='p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-smooth'>
					<SmileIcon className='h-5 w-5' />
				</button>
			</PopoverTrigger>
			<PopoverContent className='w-full border-border shadow-strong'>
				<Picker
					emojiSize={18}
					maxFrequentRows={1}
					theme={theme === "dark" ? "dark" : "light"}
					onEmojiSelect={(emoji: { native: string }) => onChange(emoji.native)}
				/>
			</PopoverContent>
		</Popover>
	);
};
export default EmojiPicker;