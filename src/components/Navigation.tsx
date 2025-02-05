import Link from 'next/link';

export function Navigation() {
	return (
		<div className='flex flex-row gap-6 p-2 bg-slate-400'>
			<Link href='/'>Home</Link>
			<Link href='/rcc'>RCC Only</Link>
			<Link href='/rsc'>RSC Only</Link>
			<Link href='/rsc-suspense'>RSC + Suspense</Link>
			<Link href='/rcc-rsc'>RCC + RSC</Link>
		</div>
	);
}
