import { CreateTaskForm } from "./_components/create-task-form"
import { TasksCard } from "./_components/tasks-card"
import { CategoriesCard } from "./_components/categories-card"
import { PrioritiesCard } from "./_components/priorities-card"


export default function DashboardPage() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-background">
            <div className="flex flex-1 gap-4 p-4 sm:px-6 sm:py-4">
                <div className="hidden w-64 flex-col gap-4 sm:flex">
                    <CategoriesCard />
                    <PrioritiesCard />
                </div>
                <div className="flex flex-1 flex-col gap-4">
                    <CreateTaskForm />
                    <TasksCard />
                </div>
            </div>
        </div>
    )
}