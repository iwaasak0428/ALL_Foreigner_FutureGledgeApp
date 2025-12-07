import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/Badge"

interface DashboardCardProps {
    title: string
    titleEn: string
    description: string
    features: string[]
    players: { label: string; type: "admin" | "company" | "foreigner" | "agency" | "other" }[]
    href: string
    isCrossCutting?: boolean
    isLegacy?: boolean
    icon?: React.ReactNode
}

export function DashboardCard({
    title,
    titleEn,
    description,
    features,
    players,
    href,
    isCrossCutting = false,
    isLegacy = false,
    icon,
}: DashboardCardProps) {
    return (
        <div
            className={`group relative flex flex-col rounded-xl border p-6 transition-all duration-300 hover:shadow-lg ${isCrossCutting
                    ? "border-brand-200 bg-gradient-to-br from-brand-50 to-white ring-1 ring-brand-100"
                    : "border-slate-200 bg-white hover:border-brand-200"
                } ${isLegacy ? "opacity-75 grayscale-[0.3]" : ""}`}
        >
            {isCrossCutting && (
                <div className="absolute -top-3 left-6">
                    <Badge variant="brand" className="shadow-sm">
                        横断ダッシュボード
                    </Badge>
                </div>
            )}

            {isLegacy && (
                <div className="absolute -top-3 right-6">
                    <Badge variant="outline" className="bg-slate-100 text-slate-500">
                        Legacy / 保守
                    </Badge>
                </div>
            )}

            <div className="mb-4 flex items-start justify-between">
                <div>
                    <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                        {title}
                        {icon && <span className="text-brand-600">{icon}</span>}
                    </h3>
                    <p className="text-sm font-medium text-slate-500">{titleEn}</p>
                </div>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-slate-600">
                {description}
            </p>

            <div className="mb-6 flex-1">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    主要機能
                </h4>
                <ul className="space-y-2">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-brand-400" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                    {players.map((player, i) => (
                        <Badge
                            key={i}
                            variant="secondary"
                            className="bg-slate-100 text-slate-600 hover:bg-slate-200"
                        >
                            {player.label}
                        </Badge>
                    ))}
                </div>
            </div>

            <div className="mt-auto pt-4 border-t border-slate-100">
                <Link
                    href={href}
                    className={`group/btn flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-all ${isCrossCutting
                            ? "bg-brand-600 text-white shadow-md shadow-brand-200 hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-300"
                            : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 hover:text-brand-700 hover:ring-brand-200"
                        }`}
                >
                    {isLegacy ? "詳細を見る" : "プロダクトを開く"}
                    {isLegacy ? (
                        <ExternalLink className="h-4 w-4" />
                    ) : (
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    )}
                </Link>
            </div>
        </div>
    )
}
