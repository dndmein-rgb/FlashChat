'use client'

import { usePreferences } from '@/store/usePreferences'
import { Button } from './ui/button'
import { MoonIcon, SunIcon, Volume2Icon, VolumeX } from 'lucide-react'
import { useTheme } from 'next-themes'
import useSound from 'use-sound'
import { useEffect, useState } from 'react'

const PreferencesTab = () => {
    const {theme,setTheme}=useTheme();
    const{soundEnabled,setSoundEnabled}=usePreferences();
    const [playMouseClick]=useSound("/sounds/mouse-click.mp3")
    const [playSoundOn]=useSound("/sounds/sound-on.mp3",{volume:0.3})
    const [playSoundOff]=useSound("/sounds/sound-off.mp3",{volume:0.3})
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
  if (!mounted) return null

  return (
    <div className='flex flex-wrap gap-2 px-1 md:px-2'>
        {theme==="dark" ? (
            <Button variant={"outline"} size={'icon'} onClick={()=>{
                setTheme("light")
                playMouseClick()
            }} >
                <SunIcon className='size-[1.2rem] text-muted-foreground' />
            </Button>
        ) : (
            <Button variant={"outline"} size={'icon'} onClick={()=>{
                setTheme("dark")
                playMouseClick()
            }} >
                <MoonIcon className='size-[1.2rem] text-muted-foreground' />
            </Button>
        )} 
        
         <Button variant={"outline"} size={'icon'} onClick={()=>{
            setSoundEnabled(!soundEnabled)
            soundEnabled ? playSoundOff() : playSoundOn();
         }}  >
            {soundEnabled ? (
                <Volume2Icon className='size-[1.2rem] text-muted-foreground' />
            ) : (
                <VolumeX className='size-[1.2rem] text-muted-foreground'/>
            )}
        </Button>
    </div>
  )
}

export default PreferencesTab