import React from 'react'
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';
import Image from 'next/image';


const Header = () => {
    return (
        <div className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24'>
            <h1 className='text-[#57d8cd] text-4xl font-bold tracking-tight sm:text-5xl'>Dheema Hussain</h1>
            <h2 className='mt-3 text-lg font-medium tracking-tight text-[#57d8cd] sm:text-xl'>Junior Web Developer</h2>
            <nav className='nav hidden lg:block' aria-label='In-page jump links'>
                <ul mt-16 w-max>
                    <li>
                        <a className='group flex items-center py-3' href="#about">
                            <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-noneransition-all'></span>
                            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>About</span>
                        </a>
                    </li>
                    <li>
                        <a className='group flex items-center py-3' href="#experience">
                            <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-noneransition-all'></span>
                            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Experience</span>
                        </a>
                    </li>
                    <li>
                        <a className='group flex items-center py-3' href="#projects">
                            <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-noneransition-all'></span>
                            <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>Projects</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <ul className='ml-1 mt-8 flex items-center'>
                <li className='mr-5 shrink-0 text-xs'>
                    <a className='block hover:text-slate-200' href="https://github.com/dhymaaaa" target='_blank' title='GitHub'>
                        <Icon path={mdiGithub} size={1.125} />
                    </a>
                </li>
                <li className='mr-5 shrink-0 text-xs'>
                    <a className='block hover:text-slate-200' href="https://x.com/dhymaaa" target='_blank' title='X'>
                        <Image
                            src="/images/x.png"
                            alt='X logo'
                            width={33}
                            height={33}
                        ></Image>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Header