// import { toast } from "react-toastify";
// import { loginUserService, requestResetPasswordService, resetPasswordService } from "../services/authService";
// import { useMutation } from "@tanstack/react-query";
// import { useContext } from "react";

// export const useLoginUser = () => {
//     const {login} = useContext(AuthContext)

//     return useMutation(
//         {
//             mutationFn: loginUserService,
//             mutationKey: ['login-key'],
//             onSuccess: (data) => {
//                 toast.success(data?.message || "Login Success")
//             },
//             onError: (err) => {
//                 toast.error(err?.message || "Login Failed")
//             }
//         }
//     )
// }

// export const useRequestResetPassword = () => {
//     return useMutation(
//         {
//             mutationFn: requestResetPasswordService,
//             mutationKey: ['request-reset'],
//             onSuccess: (data) => {
//                 toast.success(data?.message || "Email sent")
//             }, 
//             onError: (err) => {
//                 toast.error(err?.message || "Requst failed")
//             }
//         }
//     )
// }

// export const useResetPassword = () => {
//     return mutation(
//         {
//             mutationKey: ['request-password'],
//             mutationFn: ({data, token}) => resetPasswordService(data, token),
//             onSuccess: (data) => {
//                 toast.success(data?.message || "Reset Successful")
//             },
//             onError: (err) => {
//                 toast.err(err?.message || "Reset failed")
//             }
//         }
//     )
// }