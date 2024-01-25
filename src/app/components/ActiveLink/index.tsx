import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface ActiveLinkProps extends LinkProps {
    children:ReactNode;
    href:string;
}

export function ActiveLink({children, href, ...rest}:ActiveLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <>
            <Link href={href} {...rest} className={`${isActive ? 'md:text-xl lg:text-xl sm:text-xl text-red-500' : 'md:text-xl lg:text-xl sm:text-xl hover:text-red-500 transition-colors'}`}>{children}</Link>
        </>
    )
}