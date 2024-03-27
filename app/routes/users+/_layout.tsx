import { Outlet } from "@remix-run/react";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { LeftPane } from "./left_pane";

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
                <div>
                    {LeftPane({})}
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
            <div>
                {Footer({})}
            </div>
        </>
    )
}