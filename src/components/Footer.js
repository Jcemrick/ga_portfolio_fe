import { SocialIcon } from 'react-social-icons'

function Footer(props) {
    return <>
    <footer className='footer'>
    <div className='contacts'>
    <SocialIcon url="https://linkedin.com/in/joe-emrick" />
    <SocialIcon url="https://github.com/Jcemrick"/>
    <SocialIcon url="mailto:jcemrick@gmail.com"/>
    </div>
    </footer>
    </>
}

export default Footer