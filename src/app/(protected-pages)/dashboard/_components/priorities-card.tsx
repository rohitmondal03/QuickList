import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card"


export function PrioritiesCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Priorities</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-2">
                    <Link
                        href="#"
                        className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                        prefetch={false}
                    >
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-red-500" />
                            <span>High</span>
                        </div>
                        <Badge>4</Badge>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                        prefetch={false}
                    >
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-yellow-500" />
                            <span>Medium</span>
                        </div>
                        <Badge>12</Badge>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
                        prefetch={false}
                    >
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-500" />
                            <span>Low</span>
                        </div>
                        <Badge>8</Badge>
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}
