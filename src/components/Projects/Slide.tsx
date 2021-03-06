import React from 'react';
import Image1 from '../../media/proyectos/Musify/1.png';
import Image2 from '../../media/proyectos/Eureka/2.png';
import Image3 from '../../media/proyectos/FA/3.png';
import Image4 from '../../media/proyectos/Task.io/4.png';
import Image5 from '../../media/proyectos/Preux/5.png';
import Image6 from '../../media/proyectos/Project01/6.png';
import Components from './Slider';

interface Slide{
    src: string;
    click: string;
    alt: string;
    desc: string;
}


const slidesInfo: Array<Slide> = [
    {
       src: Image1,
       click: 'https://github.com/fimbres/api-musify',
       alt: 'Personal project: Musify',
       desc: 'Digital platform of music streaming developed in MEAN Stack, just like Spotify, or Apple Music.'
    },
    {
       src: Image2,
       click: 'https://github.com/fimbres/eureka-manager',
       alt: 'Profesional project: Eureka',
       desc: 'Web system of tasks management for a mobile development local company, developed in .NET Framework.'
    },
    {
        src: Image3,
        click: 'https://github.com/fimbres/ansi-c-compiler',
        alt: 'Personal project: FA',
        desc: 'C ANSI compiler developed in .NET Framework, and works based in deterministic finite automatons.'
     },
     {
        src: Image4,
        click: 'https://github.com/fimbres/to-do-list',
        alt: 'Personal project: Task.io',
        desc: 'To-Do list developed in React, and TypeScript with a drag and drop system.'
     },
     {
        src: Image5,
        click: 'https://github.com/fimbres/preux-app',
        alt: 'Profesional project: Preux Clothing',
        desc: 'E-Commerce mobile app for a clothing brand, developed with React Native, and JavaScript.'
     },
     {
        src: Image6,
        click: 'https://play.google.com/store/apps/details?id=com.FimbresGames.Project01',
        alt: 'Profesional project: Project01',
        desc: 'Platforms mobile game for Android devices, developed in Unreal Engine with C++ OOP approach.'
     },
];

const slides : Array<JSX.Element> = slidesInfo.map(slide => {
    let cont : number = 0;
    return (
        <Components.SlideContainer key={cont++}>
            <img src={slide.src} alt={slide.alt} onClick={() => window.open(slide.click)}/>
            <Components.SlideDescription>
                <span>{slide.desc}</span>
            </Components.SlideDescription>
        </Components.SlideContainer>
    );
});

export default slides;