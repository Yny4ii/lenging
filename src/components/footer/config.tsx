import TwitterIcon from '@/components/icons/socials/TwitterIcon'
import InstagramIcon from '@/components/icons/socials/InstagramIcon'
import DiscordIcon from '@/components/icons/socials/DiscordIcon'
import RedditIcon from '@/components/icons/socials/RedditIcon'
import YoutubeIcon from '@/components/icons/socials/YoutubeIcon'
import EmailIcon from '@/components/icons/socials/EmailIcon'

export const SocialLinks = [
    {
        icon: <TwitterIcon />,
        url: '',
    },
    {
        icon: <InstagramIcon />,
        url: '',
    },
    {
        icon: <DiscordIcon />,
        url: '',
    },
    {
        icon: <RedditIcon />,
        url: '',
    },
    {
        icon: <YoutubeIcon />,
        url: '',
    },
    {
        icon: <EmailIcon />,
        url: '',
    },
]

export const navLinks = {
    about: [
        { id: 'text_1', url: '/whitepaper' },
        { id: 'text_2', url: '/roadmap' },
        { id: 'text_3', url: '/team' },
        { id: 'text_4', url: '/faq' },
        { id: 'text_5', url: '/tutorial' },
    ],
    ecosystem: [
        { id: 'text_1', url: '/wallet' },
        { id: 'text_2', url: '/farm' },
        { id: 'text_3', url: '/trade' },
    ],
    developers: [
        { id: 'text_1', url: '/api' },
        { id: 'text_2', url: '/tutorial' },
        { id: 'text_3', url: 'https://github.com' }, // Внешняя ссылка на GitHub
        { id: 'text_4', url: '/docs' },
    ],
    governance: [
        { id: 'text_1', url: '/token' },
        { id: 'text_2', url: '/dao' },
    ],
}
