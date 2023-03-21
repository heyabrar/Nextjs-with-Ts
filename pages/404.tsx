import { useRouter } from 'next/router'
import { useEffect } from 'react';
export default function NotFoundPage() {
    const Router = useRouter();
    
    useEffect(() => {
        setTimeout(() => {
            Router.push('/')
        }, 2000);
    },[])
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1>Page not Found</h1>
            </div>
        </>
    )
}