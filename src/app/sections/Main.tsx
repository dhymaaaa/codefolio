import React from 'react'
import Icon from '@mdi/react';
import { mdiArrowTopRight } from '@mdi/js';
import Image from 'next/image';

const Main = () => {
    return (
        <main id='content' className='pt-20 lg:w-[52%]'>
            <section id='about' className='mb-8 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' aria-label='About me'>
                <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#1b1947] px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                    <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>About</h2>
                </div>
                <div>
                    <p className='mb-4 text-white'>
                        I&apos;m a third-year Computer Science student at Maldives National University, pursuing a Bachelor&apos;s degree in Computer Science. I&apos;m interested in creating dynamic, and user-friendly web applications.
                    </p>
                    <p className='mb-4 text-white'>
                        Currently, I&apos;m an intern at
                        <a className='font-medium text-[#e9c073] hover:text-[#FFA500] focus-visible:text-[#FFA500] ml-1 mr-1' href="https://corporate.visitmaldives.com/" target='_blank' rel='noreferrer noopener'>
                            Maldives Marketing & PR Corporation,
                        </a>
                        contributing in the UI design and implementation of one of their websites.
                    </p>
                    <p className='text-white'>
                        I&apos;ve worked on projects like HRMS systems and dynamic web apps using technologies like Vue, Laravel, React, and Python. I&apos;m currently exploring AI and it&apos;s applications in language learning for Dhivehi language learners.
                    </p>
                </div>
            </section>
            <section id='experience' className='mb-8 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' aria-label='Work experience'>
                <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#1b1947] px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                    <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>Experience</h2>
                </div>
                <ol className='group/list'>
                    <li className='mb-12'>
                        <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                            <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                            <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2' aria-label='2024 to present'> 27 October 2024 to Present</header>
                            <div className='z-10 sm:col-span-6'>
                                <h3 className='font-medium leading-snug text-slate-200'>
                                    <a className='inline-flex items-center font-medium leading-tight text-[#e9c073] hover:text-[#FFA500] focus-visible:text-[#FFA500]  group/link text-base' href="https://corporate.visitmaldives.com/" target='_blank' rel='noreferrer noopener' aria-label='Intern, MMPRC'>
                                        Intern -
                                        <span className="ml-1">Maldives Marketing & PR Corporation</span>
                                        <Icon path={mdiArrowTopRight} size={0.75} className='ml-1' />
                                    </a>
                                </h3>
                                <p className='mt-2 text-sm leading-normal text-white'>
                                    Design the user interface, make small components for projects, and aid teams with some tasks.
                                </p>
                                <ul className='mt-2 flex flex-wrap' aria-label='Technologies used'>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-[#535C91] px-3 py-1 text-xs font-medium leading-5 text-[#FFA500] '>
                                            Next.js
                                        </div>
                                    </li>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-[#535C91] px-3 py-1 text-xs font-medium leading-5 text-[#FFA500] '>
                                            Nuxt.js
                                        </div>
                                    </li>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-[#535C91] px-3 py-1 text-xs font-medium leading-5 text-[#FFA500] '>
                                            Figma
                                        </div>
                                    </li>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-[#535C91] px-3 py-1 text-xs font-medium leading-5 text-[#FFA500] '>
                                            Firebase
                                        </div>
                                    </li>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-[#535C91] px-3 py-1 text-xs font-medium leading-5 text-[#FFA500] '>
                                            HTML & CSS
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='mb-12'>
                        <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                            <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                            <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2' aria-label='2024 to present'> 26 October 2023 to 25 April 2024</header>
                            <div className='z-10 sm:col-span-6'>
                                <h3 className='font-medium leading-snug text-slate-200'>
                                    <a className='inline-flex items-center font-medium leading-tight text-[#e9c073] hover:text-[#FFA500] focus-visible:text-[#FFA500]  group/link text-base' href="https://pgoffice.gov.mv/" target='_blank' rel='noreferrer noopener' aria-label='Intern, Prosecutor Generals Office'>
                                        Intern -
                                        <span className="ml-1">Prosecutor General&apos;s Office</span>
                                        <Icon path={mdiArrowTopRight} size={0.75} className='ml-1' />
                                    </a>
                                </h3>
                                <p className='mt-2 text-sm leading-normal text-white'>
                                    Develop modules for staff portal and contribute to creating flowcharts and designing the database structure.
                                </p>
                                <ul className='mt-2 flex flex-wrap' aria-label='Technologies used'>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-[#535C91] px-3 py-1 text-xs font-medium leading-5 text-[#FFA500] '>
                                            Laravel
                                        </div>
                                    </li>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-[#535C91] px-3 py-1 text-xs font-medium leading-5 text-[#FFA500] '>
                                            Vue.js
                                        </div>
                                    </li>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-[#535C91] px-3 py-1 text-xs font-medium leading-5 text-[#FFA500] '>
                                            MySQL
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    {/* <li className='mb-12'>
                        <a className='inline-flex items-center font-medium leading-tight text-slate-200 hover:text-[#FFA500] focus-visible:text-[#FFA500] group/link text-base' href="/files/Resume.pdf" target='_blank'>
                            View Full -
                            <span className="ml-1">CV</span>
                            <Icon path={mdiArrowTopRight} size={0.75} className='ml-1' />
                        </a>
                    </li> */}
                </ol>
            </section>
            <section id='projects' className='mb-8 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24' aria-label='Selected projects'>
                <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#1b1947] px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                    <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>Projects</h2>
                </div>
                <ul className='group/list'>
                    <li className='mb-12'>
                        <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                            <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                            <div className='z-10 sm:order-2 sm:col-span-6'>
                                <h3>
                                    <a className='inline-flex items-center font-medium leading-tight text-[#e9c073] hover:text-[#FFA500] focus-visible:text-[#FFA500]  group/link text-base' href="https://github.com/dhymaaaa/Discover-Maldives" target='_blank' rel='noreferrer noopener' aria-label='Discover Maldives website'>
                                        <span className="ml-1">Discover Maldives website (GitHub repository)</span>
                                        <Icon path={mdiArrowTopRight} size={0.75} className='ml-1' />
                                    </a>
                                </h3>
                                <p className='mt-2 text-sm leading-normal text-white'>
                                    Small website that showcase the Maldivian culture made with vanilla PHP, JS, HTML, and CSS that incorporates some dynamic components.
                                </p>
                                <ul className='mt-2 flex flex-wrap' aria-label='Languages used'>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-[#535C91] px-3 py-1 text-xs font-medium leading-5 text-[#FFA500] '>
                                            PHP
                                        </div>
                                    </li>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-[#535C91] px-3 py-1 text-xs font-medium leading-5 text-[#FFA500] '>
                                            JavaScript
                                        </div>
                                    </li>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-[#535C91] px-3 py-1 text-xs font-medium leading-5 text-[#FFA500] '>
                                            HTML & CSS
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <Image src="/images/discover-maldives.png" alt="part of index page" className='aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1' width={200} height={48} loading='lazy' />
                        </div>
                    </li>
                </ul>
                <ul className='group/list'>
                    <li className='mb-12'>
                        <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                            <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                            <div className='z-10 sm:order-2 sm:col-span-6'>
                                <h3>
                                    <a className='inline-flex items-center font-medium leading-tight text-[#e9c073] hover:text-[#FFA500] focus-visible:text-[#FFA500]  group/link text-base' href="https://github.com/dhymaaaa/codefolio" target='_blank' rel='noreferrer noopener' aria-label='Discover Maldives website'>
                                        <span className="ml-1">My coding portfolio - Codefolio (GitHub repository)</span>
                                        <Icon path={mdiArrowTopRight} size={0.75} className='ml-1' />
                                    </a>
                                </h3>
                                <p className='mt-2 text-sm leading-normal text-white'>
                                    Small website that showcase the a little bit about me, my experience, and the projects I made with next.js and tailwind CSS.
                                </p>
                                <ul className='mt-2 flex flex-wrap' aria-label='Languages used'>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-[#535C91] px-3 py-1 text-xs font-medium leading-5 text-[#FFA500] '>
                                            Next.js
                                        </div>
                                    </li>
                                    <li className='mr-1.5 mt-2'>
                                        <div className='flex items-center rounded-full bg-[#535C91] px-3 py-1 text-xs font-medium leading-5 text-[#FFA500] '>
                                            Tailwind CSS
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <Image src="/images/portfolio.png" alt="part of index page" className='aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1' width={200} height={48} loading='lazy' />
                        </div>
                    </li>
                </ul>
            </section>
            <footer className='max-w-md pb-16 mb-25 text-sm text-slate-500 sm:pb-0'>
                <p>Code done by me in Visual Studio Code using
                    <a className='font-light text-[#e9c073] hover:text-[#FFA500] focus-visible:text-[#FFA500] ml-1 mr-1' href="https://brittanychiang.com/" target='_blank' rel='noreferrer noopener'>
                        Brittany Chiang&apos;s portfolio UI
                    </a>
                    as a reference.
                </p>
            </footer>
        </main>
    )
}

export default Main