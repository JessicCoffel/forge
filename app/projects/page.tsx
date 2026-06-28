"use client";

import {useEffect, useState} from "react";
import ProjectCard from "../components/projects/ProjectCard"
export default function Projects(){
    const [project, setProject] = useState<any>(null);

    useEffect(() => {
        const savedProject = localStorage.getItem("currentProject");

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
                <h1 className="text-5xl font-bold tracking-tight">
                    Current Projects
                </h1>

                <p className="mt-4 text-xl text-slate-400">
                    Continue your story
                </p>
                <div className="mt-10 w-full max-w-md">
                    {project && <ProjectCard project={project} />}
                </div>
            </section>
        </main>
    );
}
