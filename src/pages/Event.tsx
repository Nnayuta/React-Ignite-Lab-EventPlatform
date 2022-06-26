import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';

export const Event: React.FC = () => {

    const { slug } = useParams<{ slug: string }>()

    const [mobileMenu, setMobileMenu] = useState(true)

    const handleMenuMobile = () => {
        setMobileMenu(!mobileMenu);
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header MenuOnClick={handleMenuMobile} mobileMenu={mobileMenu} />
            <main className='flex flex-1'>
                {slug
                    ? <Video lessonSlug={slug} mobileMenu={mobileMenu} />
                    : <div className='flex-1' />}
                <Sidebar mobileMenu={mobileMenu}/>
            </main>
        </div>
    )
}
