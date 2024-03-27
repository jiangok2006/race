import { Outlet } from "@remix-run/react";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";

export default function layout() {
    return (
        <>
            <div>
                layout page
            </div>
            <div>
                {Header({})}
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                {Footer({})}
            </div>
        </>
    )
}