import { type HTMLAttributes } from 'react'
import { LoaderCircle } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from './button'


type TProps = HTMLAttributes<HTMLButtonElement>


export function LoadingButton(props: TProps) {
    return (
        <Button
            disabled
            variant={"default"}
            className={cn("w-fit", props.className)}
            {...props}
        >
            <LoaderCircle />
        </Button>
    )
}
