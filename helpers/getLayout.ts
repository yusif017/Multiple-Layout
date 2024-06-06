import AdminLayout from "@/layout/AdminLayout";
import AuthLayout from "@/layout/AuthLayout";
import EntrepreneurLayout from "@/layout/EntrepreneurLayout";
import UserLayout from "@/layout/UserLayout";
import { NextPageWithLayout } from "next";

export const getLayout = (Component: NextPageWithLayout) => {
    switch (Component.layout) {
        case 'auth':
            return AuthLayout;
        case 'user':
            return UserLayout;
        case 'entrepreneur':
            return EntrepreneurLayout;
        case 'admin':
            return AdminLayout;
        default:
            return UserLayout;
    }
};