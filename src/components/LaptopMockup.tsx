import React from "react"

interface LaptopMockupProps {
    children: React.ReactNode
    className?: string
}

export function LaptopMockup({ children, className = "" }: LaptopMockupProps) {
    return (
        <div className={`relative mx-auto w-full max-w-4xl ${className}`}>
            {/* Laptop Lid (Screen Frame) */}
            <div className="relative rounded-t-xl bg-slate-800 p-2 ring-1 ring-slate-900/5 shadow-2xl">
                {/* Camera Dot */}
                <div className="absolute left-1/2 top-1 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-slate-600" />

                {/* Screen Content Area */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-white border border-slate-700/50">
                    {children}
                </div>
            </div>

            {/* Laptop Base (Bottom Part) */}
            <div className="relative mx-auto h-3 w-full max-w-[102%] rounded-b-md bg-slate-700 shadow-lg">
                <div className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-b-sm bg-slate-600" />
            </div>
        </div>
    )
}
