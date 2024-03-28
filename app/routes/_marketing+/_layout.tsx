import { Outlet } from "@remix-run/react";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";

export default function layout() {
    return (
        <>
            <div className="flex flex-col">
                <div className="h-12 bg-green-300 sticky">
                    {Header({})}
                </div>
                <div className="grow sticky top-0 w-full ">
                    <Outlet />
                </div>
                <div className="h-16 bg-green-100">
                    {Footer({})}
                </div>
            </div>
        </>
    )
}