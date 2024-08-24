import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { DialogTitle, DialogSubtitle, } from '@/components/ui/dialog';


export function TaskDialogContent(props: TDocuments) {
    return (
        <ScrollArea
            className='max-h-[50vh] w-[500px]'
            type='scroll'
        >
            <div className="space-y-4">
                <DialogTitle className="text-2xl font-semibold">
                    {props.title}
                </DialogTitle>
                <DialogSubtitle className="text-sm text-white/80">
                    {new Date(props.createdAt).toDateString()}
                </DialogSubtitle>
                <div className="flex items-center gap-4">
                    <Badge variant={"secondary"}>
                        {props.category}
                    </Badge>
                    <Badge
                        variant="outline"
                        className={props.priority === "Medium"
                            ? "bg-yellow-500/20 text-yellow-500"
                            : props.priority === "Low"
                                ? "bg-green-500/20 text-green-500"
                                : "bg-red-500/20 text-red-500"
                        }
                    >
                        {props.priority}
                    </Badge>
                </div>
                <p>
                    {props.description}
                </p>
            </div>
        </ScrollArea>
    )
}
