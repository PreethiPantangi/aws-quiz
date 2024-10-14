'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent) => {

    const WithAuthComponent = (props) => {

        const router = useRouter();
        
        useEffect(() => {
            const accessToken = localStorage.getItem('access_token'); // or your preferred method to get the token
            if (!accessToken) {
                router.push('/admin');
            } else {
                router.push('/admin/dashboard');
            }
        }, [router]);

        return <WrappedComponent {...props} />;
    }
    
    WithAuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    return WithAuthComponent;
};

export default withAuth;
