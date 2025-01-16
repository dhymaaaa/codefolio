import React from 'react'
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';
import Image from 'next/image';
// @ts-expect-ignore
import Typewriter from '@/components/fancy/typewriter';


const Header = () => {
    return (
        <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24'>
            <div className='lg:flex lg:flex-col'>
                <div>
                    <h1 className='text-[#9290C3] text-4xl font-bold tracking-tight sm:text-5xl'>Dheema Hussain</h1>
                    <h2 className='mt-3 text-lg font-medium tracking-tight text-[#9290C3] sm:text-xl'>
                        <span>{"I am a "}</span>
                        <Typewriter
                            text={[
                                "Junior Web Developer",
                                "Student",
                            ]}
                            speed={70}
                            className="mt-3 text-lg font-medium tracking-tight text-[#9290C3] sm:text-xl"
                            waitTime={1500}
                            deleteSpeed={40}
                            cursorChar={"_"}
                        />
                    </h2>
                    <nav className='nav hidden lg:block' aria-label='In-page jump links'>
                        <ul className='mt-16 w-max'>
                            <li>
                                <a className='group flex items-center py-3' href="#about">
                                    <span className='nav-indicator mr-4 h-px w-8 bg-[#e9c073] transition-all group-hover:w-16 group-hover:bg-[#FFA500] group-focus-visible:w-16 group-focus-visible:bg-[#FFA500] motion-reduce:transition-noneransition-all'></span>
                                    <span className='nav-text text-xs font-bold uppercase tracking-widest text-[#e9c073] group-hover:text-[#FFA500] group-focus-visible:text-[#FFA500]'>About</span>
                                </a>
                            </li>
                            <li>
                                <a className='group flex items-center py-3' href="#experience">
                                    <span className='nav-indicator mr-4 h-px w-8 bg-[#e9c073] transition-all group-hover:w-16 group-hover:bg-[#FFA500] group-focus-visible:w-16 group-focus-visible:bg-[#FFA500] motion-reduce:transition-noneransition-all'></span>
                                    <span className='nav-text text-xs font-bold uppercase tracking-widest text-[#e9c073] group-hover:text-[#FFA500] group-focus-visible:text-[#FFA500]'>Experience</span>
                                </a>
                            </li>
                            <li>
                                <a className='group flex items-center py-3' href="#projects">
                                    <span className='nav-indicator mr-4 h-px w-8 bg-[#e9c073] transition-all group-hover:w-16 group-hover:bg-[#FFA500] group-focus-visible:w-16 group-focus-visible:bg-[#FFA500] motion-reduce:transition-noneransition-all'></span>
                                    <span className='nav-text text-xs font-bold uppercase tracking-widest text-[#e9c073] group-hover:text-[#FFA500] group-focus-visible:text-[#FFA500]'>Projects</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <ul className='ml-1 mt-8 flex items-center'>
                        <li className='mr-5 shrink-0 text-xs'>
                            <a className='block hover:text-slate-200' href="https://github.com/dhymaaaa" target='_blank' title='GitHub'>
                                <Icon path={mdiGithub} size={1.125} className='text-white' />
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
            </div>
        </header>
    )
}

export default Header