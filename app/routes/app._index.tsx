import { authenticator } from "@/lib/auth.server";
import { getDbFromContext } from "@/lib/db.service.server";
import { usersToTeams } from "@/lib/schema";
import { LoaderArgs, json, redirect } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js/auto';
import { sql } from "drizzle-orm";
import { Line } from 'react-chartjs-2';
import { ClientOnly } from 'remix-utils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export async function loader({ request, context }: LoaderArgs) {
  const db = getDbFromContext(context);
  const userSession = await authenticator.isAuthenticated(request);
  if (!userSession) {
    return redirect("/login");
  }

  const usersToTeamsFromDb = await db
    .select({ totalUsers: sql`COUNT(*)`, teamId: usersToTeams.teamId })
    .from(usersToTeams)
    .groupBy(usersToTeams.teamId)
    .all();

  return json({ usersToTeamsFromDb });
}






function Fallback() {
  return <div>Generating Chart</div>;
}

export default function AppHomepage() {
  const usersToTeams = useLoaderData<typeof loader>();

  const labels = usersToTeams.usersToTeamsFromDb.map((m) => 'team ' + m.teamId)
  const userCount = usersToTeams.usersToTeamsFromDb.map((m) => m.totalUsers);

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: userCount,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex-col items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <table className="border-collapse border border-slate-400">
            <thead>
              <tr key='head_row'>
                <th className="border border-slate-300" key='team_id'>teamId</th>
                <th className="border border-slate-300" key='user_count'>userCount</th>
              </tr>
            </thead>
            <tbody>
              {usersToTeams.usersToTeamsFromDb.map((user_team) => (
                <tr key={'body_row_' + user_team.teamId}>
                  <td className="border border-slate-300" key={'team_' + user_team.teamId}>{user_team.teamId}</td>
                  <td className="border border-slate-300" key={'team_' + user_team.teamId + '_user_count'}>{user_team.totalUsers} </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ClientOnly fallback={<Fallback />}>
            {() => <Line options={options} data={data} />}
          </ClientOnly>
        </div>
      </div>
    </>
  );
}
