"use client";
import Link from "next/link";
import {useEffect, useState } from "react";

export default function Home() {
  const [hasProject, setHasProject] = useState(false);

  useEffect(() =>{
    const savedProject = localStorage.getItem("currentProject");

    if (savedProject){
      setHasProject(true);
    }
  }, []);
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <p className="mb-4 mt-4 text-sm uppercase tracking-[0.3em] text-center text-emerald-400">
          The Forge Project
      </p>
      <section className="flex min-h-[90vh] flex-col items-center text-center justify-center px-6 ">
        
        <h1 className="text-7xl font-bold">Forge
        </h1>

        <h2 className="mt-4 text-3xl text-zinc-400">
        Where stories stay connected.
        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-400">
        Create characters.<br />
        Build kingdoms.<br />
        Map timelines.<br />
        Keep every detail connected from the first idea to the final chapter.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          {hasProject ? (
            <Link
            href="/projects"
            className= "rounded-xl bg-emerald-500 px-9 py-4 text-lg font-semibold text-slate-950 transition-all duration-200 hover:bg-emerald-400">
              Continue Project
              </Link>
          ) : (
            <button
            disabled
            className="cursor-not-allowed rounded-xl border border-slate-700 px-9 py-4 text-lg font-semibold text-slate-500 opacity-50">
              Continue Project
              </button>
          )}
          

          <Link
          href="/create-project"
          className="rounded-xl bg-emerald-500 px-9 py-4 text-lg font-semibold text-slate-950 transition-all duration-200 hover:bg-emerald-400">
          Create Project
          </Link>
        </div>

       <p className="mt-10 text-sm italic text-slate-500">
        Your story. One connected workspace.
       </p>
      </section>
    </main>
  );
}