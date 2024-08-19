import Link from "next/link"
import {
    AlarmClockIcon,
    CalendarIcon,
    CheckIcon,
    FolderIcon,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card"


export function CategoriesCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-2">
                    <Link
                        href="#"
                        className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                        prefetch={false}
                    >
                        <div className="flex items-center gap-2">
                            <FolderIcon className="h-4 w-4" />
                            <span>Work</span>
                        </div>
                        <Badge>12</Badge>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                        prefetch={false}
                    >
                        <div className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4" />
                            <span>Personal</span>
                        </div>
                        <Badge>8</Badge>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                        prefetch={false}
                    >
                        <div className="flex items-center gap-2">
                            <CheckIcon className="h-4 w-4" />
                            <span>Shopping</span>
                        </div>
                        <Badge>4</Badge>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                        prefetch={false}
                    >
                        <div className="flex items-center gap-2">
                            <AlarmClockIcon className="h-4 w-4" />
                            <span>Reminders</span>
                        </div>
                        <Badge>6</Badge>
                    </Link>
                </div>
            </CardContent>
        </Card>

    )
}
