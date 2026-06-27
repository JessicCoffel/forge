"use client";
import { useEffect, useState } from "react";


export default function Dashboard(){

    const [project, setProject]= useState<any>(null);

    useEffect(() => {
        const savedProject = localStorage.getItem("currentProject")

        if (savedProject){
            setProject(JSON.parse(savedProject));
        }
    }, []);
    return(
        <main className="min-h-screen bg-slate-950 text-white px-6">
            <p className="mt-4 text-center text-sm uppercase tracking-[0.3em] text-emerald-400">
                The Forge Project
            </p>
            <section className="mx-auto flex min-h-[90vh] max-w-4xl flex-col items-center justify-center text-center">
                <h1 className="text-6xl font-bold tracking-tight">
                    {project?.name}
                </h1>

                <h2 className="mt-4 text-3xl text-slate-400">
                    {project?.structure} • {project?.genre}
                </h2>

                <h3 className="mt-4 text-md text-slate-400">
                    Welcome to your project dashboard.
                </h3>
            </section>
        </main>
    )
}
