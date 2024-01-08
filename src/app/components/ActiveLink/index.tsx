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
            <Link href={href} {...rest} className={`${isActive ? 'lg:text-xl sm:text-xs text-red-500' : 'lg:text-xl sm:text-xs hover:text-red-500 transition-colors'}`}>{children}</Link>
        </>
    )
}