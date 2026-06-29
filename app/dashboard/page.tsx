"use client";
import { useEffect, useState } from "react";
import AddCard from "../components/dashboard/AddCard";
import AddCardModal from "../components/dashboard/AddCardModal";
import DashboardCard from "../components/dashboard/DashboardCard";


export default function Dashboard(){

    const [project, setProject]= useState<any>(null);
    const [showAddCardModal, setShowAddCardModal] = useState(false);
    const [dashboardCards, setDashboardCards] = useState<any[]>([]);

    useEffect(() => {
        const savedProject = localStorage.getItem("currentProject")

        if (savedProject){
            const parsedProject = JSON.parse(savedProject);
            
            setProject(parsedProject);
            setDashboardCards(parsedProject.dashboardCards || []);
        }
    }, []);

    function handleAddCard(card: any) {
        setDashboardCards((current) => [...current, card]);
        setShowAddCardModal(false);
    }
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

                
                <h3 className="mt-4 italic text-slate-400">
                    {project?.description}
                </h3>

                <h4 className="mt-4 text-lg uppercase font-bold text-emerald-400">
                    Welcome to your project dashboard
                </h4>

                <div className="mt-10 grid w-full max-w-2xl gap-4 sm:grid-cols-2">
                    {dashboardCards.map((card) => (
                        <DashboardCard 
                            key={card.id}
                            card={card}
                            />
                       
                    ))}
                </div>

                <AddCard onClick={() => setShowAddCardModal(true)}
                />

                {showAddCardModal && (
                    <AddCardModal 
                    onClose={() => setShowAddCardModal(false)}
                    onAddCard={handleAddCard}
                    />
                )}
            </section>
        </main>
    )
}
