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



  return (
    <div className='flex flex-wrap gap-2 px-1 md:px-2 animate-slide-down'>
        {theme==="dark" ? (
            <Button variant={"outline"} size={'icon'} onClick={()=>{
                setTheme("light")
               soundEnabled && playMouseClick()
            }} 
            className="shadow-soft hover:shadow-medium transition-smooth hover:scale-105 active:scale-95"
            >
                <SunIcon className='size-5' />
            </Button>
        ) : (
            <Button variant={"outline"} size={'icon'} onClick={()=>{
                setTheme("dark")
                soundEnabled && playMouseClick()
            }}
            className="shadow-soft hover:shadow-medium transition-smooth hover:scale-105 active:scale-95"
            >
                <MoonIcon className='size-5' />
            </Button>
        )} 
        
         <Button variant={"outline"} size={'icon'} onClick={()=>{
            setSoundEnabled(!soundEnabled)
            soundEnabled ? playSoundOff() : playSoundOn();
         }}
         className="shadow-soft hover:shadow-medium transition-smooth hover:scale-105 active:scale-95"
         >
            {soundEnabled ? (
                <Volume2Icon className='size-5' />
            ) : (
                <VolumeX className='size-5'/>
            )}
        </Button>
    </div>
  )
}

export default PreferencesTab