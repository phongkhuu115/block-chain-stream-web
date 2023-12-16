"use client"

import { GoogleOAuthProvider } from "@react-oauth/google"
import { AuthProvider } from "context/auth-context"

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <GoogleOAuthProvider clientId="724204221739-d6jo3434u58p10jjpp8t0rg2lnju33vp.apps.googleusercontent.com">
            <AuthProvider>{children}</AuthProvider>
        </GoogleOAuthProvider>
    )
}