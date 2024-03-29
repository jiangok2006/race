import { Outlet } from "@remix-run/react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LeftPane } from "./left_pane";

export default function layout() {
	return (
		<>
			{Header()}
			<div>
				{LeftPane({})}
				<Outlet />
			</div>
			{Footer()}
		</>
	);
}
