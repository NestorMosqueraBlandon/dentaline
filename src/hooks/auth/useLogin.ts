import { useNavigate } from "react-router-dom";
import { useMutation } from '@tanstack/react-query';
import { PrivateRoutes } from "@/constant-definitions";
import { loginApi } from "@/services";

export const useLogin = () => {
    const navigate = useNavigate();

    const { mutate: login, isPending: isLoading } = useMutation({
        mutationFn: loginApi,
        onSuccess: () => {
            navigate(PrivateRoutes.DASHBOARD);
        },
    });

    return { isLoading, login };
}