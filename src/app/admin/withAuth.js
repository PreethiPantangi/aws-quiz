
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();

        useEffect(() => {
            const accessToken = localStorage.getItem('access_token'); // or your preferred method to get the token
            if (!accessToken) {
                router.push('/admin');
            } else {
                router.push('/admin/dashboard');
            }
        }, []);

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
