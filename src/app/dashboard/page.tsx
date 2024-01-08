import DashboardForm from "@/components/Form/page";
import DashboardTable from "@/components/Table/page";

export default function Dashboard(){
    return(
        <main className="flex flex-col">
            <DashboardForm/>
            <DashboardTable />
        </main>
    )
}