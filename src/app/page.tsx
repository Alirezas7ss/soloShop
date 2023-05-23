import PageImage from '@/components/PageImage'
import { FancyBox } from '@/components/fancy-box'
import { FileInput } from '@/components/file-input'
import Avatar from '@/components/homePage/Avatar'
import Banner from '@/components/homePage/Banner'
import Describe from '@/components/homePage/Describe'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='pt-16 z-0'>
       <div className=''>
        <div dir='ltr' className=''><Banner /></div>
         <div className=''><Avatar /></div>
       </div>
       <div className='h-32 w-full bg-red-500 '>
         <Describe />
       </div>
    </main>
  )
}
