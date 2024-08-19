import Link from "next/link"

import { WEBSITE_FEATURE } from "@/lib/marketing"


export default function Component() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <main className="flex-1">
                <section className="bg-muted py-24 px-6 md:px-12 lg:px-20">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                            Stay on top of your tasks with our powerful to-do app
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Organize your life, boost your productivity, and never forget a thing with our intuitive and user-friendly
                            to-do app.
                        </p>
                        <div>
                            <Link
                                href="/dashboard"
                                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                prefetch={false}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="py-16 px-6 md:px-12 lg:px-20">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {WEBSITE_FEATURE.map((feat) => (
                            <div className="space-y-4">
                                <div className="inline-block rounded-md bg-primary px-3 py-1 text-sm text-primary-foreground">
                                    {feat.badgeText}
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                                    {feat.title}
                                </h2>
                                <p className="text-muted-foreground">
                                    {feat.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}