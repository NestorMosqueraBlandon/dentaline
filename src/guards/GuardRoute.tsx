import {Navigate, Outlet} from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '@/constant-definitions';
import { Loader } from '@/components';
import { useUser } from '@/hooks';

interface Props {
    privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />

const GuardRoute = ({privateValidation}: Props) => {
    
    const { user, isLoading } = useUser();
    
    if(isLoading) return <Loader />

    return user !== null && user?.uuid ? (
        privateValidation ? (
            PrivateValidationFragment
        ): (
            PublicValidationFragment
        )
    ) : (
        <Navigate replace to={PublicRoutes.SIGNIN} />
    )   
}

export default GuardRoute;