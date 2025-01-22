import Instagram from '@mui/icons-material/Instagram'
import Linkedin from '@mui/icons-material/Linkedin'
import Facebook from '@mui/icons-material/Facebook'
import X from '@mui/icons-material/X'

function Footer() {
  return (
    <footer className='flex justify-center flex-col items-center text-white w-full'>
      <p>&copy; 2023 LetsCook. All rights reserved.</p>
      <nav className='flex flex-col text-center'>
        <a href='#' className='hover:text-red-600 hover:text-lg'>
          About Us
        </a>
        <a href='#' className='hover:text-green-600 hover:text-lg'>
          Contact Us
        </a>
        <a href='#' className='hover:text-blue-600 hover:text-lg'>
          Terms & Conditions
        </a>
      </nav>
      <nav>
        <a href='https://instagram.com'>
          <Instagram />
        </a>
        <a href='https://linkedin.com'>
          <Linkedin />
        </a>
        <a href='https://facebook.com'>
          <Facebook />
        </a>
        <a href='https://x.com'>
          <X />
        </a>
      </nav>
    </footer>
  )
}

export default Footer
