// import githubIcon from '../svg/brand-github.svg';

export default function Footer() {
	const githubIcon = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='icon icon-tabler icon-tabler-brand-github'
			width={24}
			height={24}
			viewBox='0 0 24 24'
			strokeWidth='2'
			stroke='currentColor'
			fill='none'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
			<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
		</svg>
	);
	return (
		<footer className=' xl:container xl:mx-auto mx-5 my-8 md:px-7 xl:px-12 h-35 absolute bottom-0 left-0 right-0'>
			<div className='flex justify-between content-center border-t pt-2'>
				<a
					className='inline-block'
					href='https://github.com/qntek/country-flag-api'
					target='_blank'
					rel='noreferrer'>
					{githubIcon}
				</a>
				<a
					href='https://github.com/qntek'
					className='inline-block'
					target='_blank'
					rel='noreferrer'>
					Tomasz Kuncio
				</a>
			</div>
		</footer>
	);
}
