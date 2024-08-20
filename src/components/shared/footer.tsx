import Link from 'next/link'


export function MainFooter() {
    return (
        <footer className="bg-muted text-muted-foreground py-6 px-6 flex items-center justify-between">
            <p className="text-sm">
                &copy; 2024 QuickList. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
                <Link
                    href="#"
                    className="text-sm hover:underline"
                    prefetch={false}
                >
                    Privacy
                </Link>
                <Link
                    href="#"
                    className="text-sm hover:underline"
                    prefetch={false}
                >
                    Terms
                </Link>
            </div>
        </footer>
    )
}
