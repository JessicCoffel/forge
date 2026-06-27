"use client";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

export default function CreateProject(){
    const [selectedStructure, setSelectedStructure] = useState<string>("");
    const [selectedGenre, setSelectedGenre] = useState<string>("");
    const [projectName, setProjectName] = useState<string>("");
    const [description, setDescription] = useState<string>("")
    const [step, setStep] = useState<string>("structure");
    return(
        <main className="min-h-screen bg-slate-950 text-white px-6">
            <p className="mt-4 text-center text-sm uppercase tracking-[0.3em] text-emerald-400">
                The Forge Project
            </p>

            <section className="mx-auto flex min-h-[90vh] max-w-4xl flex-col items-center justify-center text-center">
                <h1 className="text-5xl font-bold tracking-tight">
                    Create Your Project
                </h1>

                <p className="mt-4 text-xl text-slate-400">
                    Choose how your story will be built.
                </p>
                {step === "structure" && (
                <>
                    <h2 className="mt-12 text-2xl font-semibold">
                        Choose your project structure
                    </h2>

                    <div className="mt-8 w-full max-w-md">

                        <ProjectCard title="Standalone" 
                        selected={selectedStructure === "Standalone"} 
                        onClick={() => setSelectedStructure("Standalone")}
                        />
                        <ProjectCard title="Duology" 
                        selected={selectedStructure === "Duology"} 
                        onClick={() => setSelectedStructure("Duology")}
                        />
                        <ProjectCard title="Trilogy" 
                        selected={selectedStructure === "Trilogy"}
                        onClick={() => setSelectedStructure("Trilogy")} 
                        />
                        <ProjectCard title="Series" 
                        selected={selectedStructure === "Series"}
                        onClick={() => setSelectedStructure("Series")} />

                        <button
                            onClick={() => setStep("genre")}
                            disabled={!selectedStructure}
                            className={`mt-6 rounded-xl px-9 py-4 text-lg font-semibold transition-all duration-200 ${
                                selectedStructure
                                    ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                                    : "cursor-not-allowed border border-slate-700 text-slate-500 opacity-50"
                                }`}
                                >
                                    Continue
                        </button>
                        
                            
                    </div>
                </>
                )}

                {step === "genre" && (
                    <>
                    <h2 className="mt-12 text-2xl font-semibold">
                        Choose your genre
                    </h2>

                    <p className="mt-3 text-slate-400">
                        Project Structure: {selectedStructure}
                    </p>

                    <div className="mt-8 w-full max-w-md">
                        <ProjectCard title="Romantasy"
                            selected={selectedGenre === "Romantasy"}
                            onClick={() => setSelectedGenre("Romantasy")}
                        />
                        <button
                            disabled
                            className="mb-4 w-full cursor-not-allowed rounded-xl border border-slate-700 bg-slate-900 p-6 text-xl text-slate-500 opacity-50"
                        >
                            Fantasy - Coming Soon
                        </button>

                        <button
                            disabled
                            className="mb-4 w-full cursor-not-allowed rounded-xl border border-slate-700 bg-slate-900 p-6 text-xl text-slate-500 opacity-50"
                        >
                            Romance - Coming Soon
                        </button>
                        
                        <button
                            disabled
                            className="mb-4 w-full cursor-not-allowed rounded-xl border border-slate-700 bg-slate-900 p-6 text-xl text-slate-500 opacity-50"
                        >
                            Thriller - Coming Soon
                        </button>

                        <div className="mt-6 flex justify-center gap-4">
                            <button
                                onClick={() => setStep("structure")}
                                className="mt-6 rounded-xl border border-slate-700 px-9 py-4 text-lg font-semibold text-slate-300 transition-all duration-200 hover:border-emerald-500 hover:text-emerald-400">
                                    Back
                            </button>

                            <button
                                onClick={() => setStep("details")}
                                disabled={!selectedGenre}
                                className={`mt-6 rounded-xl px-9 py-4 text-lg font-semibold transition-all duration-200 ${
                                    selectedGenre
                                        ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                                        : "cursor-not-allowed border border-slate-700 text-slate-500 opacity-50"
                                    }`}
                                    >
                                        Continue
                            </button>
                        </div>
                    </div>
                    
                    </>
                )}
                {step === "details" && (
                    <>
                    <h2 className="mt-12 text-2xl font-semibold">
                        Project Details
                    </h2>

                    <p className="mt-3 text-slate-400">
                        {selectedStructure} • {selectedGenre}
                    </p>
                    <div className="mt-8 w-full max-w-md">
                        <input
                        type="text"
                        placeholder="Project Name"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        className="mb-6 w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none">   
                        </input>
                        <textarea
                        placeholder="Description (Optional)"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mb-6 h-32 w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none">
                        </textarea>
                        <button
                                disabled={!projectName}
                                className={`mt-6 rounded-xl px-9 py-4 text-lg font-semibold transition-all duration-200 ${
                                    projectName
                                        ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                                        : "cursor-not-allowed border border-slate-700 text-slate-500 opacity-50"
                                    }`}
                                    >
                                        Create Project
                            </button>
                    </div>
                    </>
                )}
    
            </section>
        </main>
    );
}