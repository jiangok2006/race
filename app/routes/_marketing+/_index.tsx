import type { MetaFunction } from "@remix-run/node";
import { Button } from "src/components/ui/button"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix" },
  ];
};

export default function Index() {
  const rows = [];
  for (let i = 0; i < 40; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      rows.push(<div key={i}>hello</div>);
  }
  return (
    <>
       <Button variant="outline">Click me</Button>
      {rows}
    </>
  );
}
