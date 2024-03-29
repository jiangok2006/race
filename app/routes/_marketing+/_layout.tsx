import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Outlet } from "@remix-run/react";

export default function layout() {
	return (
		<>
			<div className="flex flex-col">
				{Header()}
				<div className="grow sticky top-0 w-full ">
					<Outlet />
				</div>
				{Footer()}
			</div>
		</>
	);
}
