import Image from 'next/image';
import Logo from '../../public/images/logo_black.png'
export const Footer = () => (

    <footer className='bg-[url(/images/foother_bck.png)] bg-no-repeat bg-contain h-[200px] w-full text-gray-600 body-font   pt-8'>
      <div className='flex'>
      <Image src={Logo} width={235} height={40} alt="logo" className="ml-20"></Image>

        <Image src='/images/twitter.svg' width={39} height={39} alt="twitter" className='ml-10 mr-5'></Image>
        <Image src='/images/tik_tok.svg' width={39} height={39} alt="twitter" className=' mr-5'></Image>
        <Image src='/images/twitch.svg' width={39} height={39} alt="twitter" className=' mr-5'></Image>
        <Image src='/images/instagram.svg' width={39} height={39} alt="twitter" className=' mr-5'></Image>
        <Image src='/images/twitter.svg' width={39} height={39} alt="twitter" className=' mr-5'></Image>
      </div>
      <div className='flex mt-10 ml-20 text-white'>
        <p className='mr-5 font-comfortaa_bold text-base'>Help Center</p>
        <p className='mr-5 font-comfortaa_bold text-base' >Contact Us</p>
        <p className='mr-5 font-comfortaa_bold text-base'>Invester Relations</p>
        <p className='mr-5 font-comfortaa_bold text-base'>Terms of Services</p>
        <p className='mr-5 font-comfortaa_bold text-base'>Return Policy</p>
        <p className='mr-5 font-comfortaa_bold text-base'>Prohibited Items</p>
      </div>

    </footer>

);