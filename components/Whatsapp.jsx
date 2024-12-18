import Image from 'next/image'
import appImg from '../app/assets/images/whatsapp.png'
import '@/styles/Whatsapp.css'

export default function Whatsapp() {
    return (
        <div className='content'>
        <a href="https://wa.me/999999999?text=urlencodedtext" target='_blank' className='whatsapp-link'>
            <Image src={appImg} alt='Whatsapp' className='whatsapp-link'/>
        </a>
        </div>
    );
}