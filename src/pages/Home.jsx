import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Reviews from '../components/sections/Reviews';
import PurchaseNotice from '../components/sections/PurchaseNotice';
import HowToApply from '../components/sections/HowToApply';
import Community from '../components/sections/Community';
import MoreProjects from '../components/sections/MoreProjects';
import FAQ from '../components/sections/FAQ';
import Developer from '../components/sections/Developer';

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <Reviews />
            <PurchaseNotice />
            <HowToApply />
            <Developer />
            <MoreProjects />
            <Community />
            <FAQ />
        </>
    );
}
