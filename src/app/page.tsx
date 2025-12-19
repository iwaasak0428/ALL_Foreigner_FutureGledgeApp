import {
    Users,
    HeartHandshake,
    FileText,
    LayoutDashboard,
    Briefcase,
    Building2,
    Globe2,
    UserCircle,
    CreditCard,
    Home as HomeIcon,
    Languages,
    ShieldCheck,
    Landmark,
    CheckCircle2,
    Search,
    Bell,
    Menu
} from "lucide-react"
import { DashboardCard } from "@/components/DashboardCard"
import { LaptopMockup } from "@/components/LaptopMockup"
import { Badge } from "@/components/ui/Badge"
import Link from "next/link"

export default function Home() {
    return (
        <main className="min-h-screen bg-brand-50/50 p-6 md:p-10">
            <div className="mx-auto max-w-5xl space-y-12">
                {/* Header Section */}
                <div className="space-y-2 text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        Global Talent Platform
                    </h1>
                    <p className="mx-auto max-w-2xl text-base text-slate-600">
                        2つの事業を推進するためのマルチプロダクト
                    </p>
                </div>

                {/* Core Products Layer - Laptop Style */}
                <div className="space-y-6">
                    <div className="relative flex justify-center">
                        <span className="bg-white/50 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider backdrop-blur-sm rounded-full">
                            Core Products / コアプロダクト
                        </span>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Talent Management */}
                        <div className="group space-y-4">
                            <div className="text-center">
                                <span className="inline-block rounded-full bg-brand-900 px-4 py-1.5 text-sm font-bold text-white shadow-md">
                                    人材管理プロダクト
                                </span>
                            </div>
                            <Link href="/talent" className="block transition-transform duration-300 hover:-translate-y-2">
                                <LaptopMockup className="bg-white">
                                    <div className="flex h-full flex-col bg-slate-50">
                                        <div className="flex items-center justify-between border-b bg-white px-3 py-2">
                                            <div className="flex items-center gap-2">
                                                <div className="h-2 w-2 rounded-full bg-brand-600" />
                                                <div className="h-2 w-16 rounded-full bg-slate-200" />
                                            </div>
                                            <div className="h-4 w-4 rounded-full bg-slate-100" />
                                        </div>
                                        <div className="p-3 space-y-2">
                                            <div className="flex gap-2">
                                                <div className="h-8 w-1/3 rounded bg-white shadow-sm border border-slate-100" />
                                                <div className="h-8 w-2/3 rounded bg-white shadow-sm border border-slate-100" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                {[1, 2, 3, 4].map((i) => (
                                                    <div key={i} className="h-16 rounded bg-white border border-slate-100 p-2 space-y-1">
                                                        <div className="flex items-center gap-2">
                                                            <div className="h-6 w-6 rounded-full bg-slate-100" />
                                                            <div className="h-2 w-12 rounded bg-slate-100" />
                                                        </div>
                                                        <div className="h-1.5 w-full rounded bg-slate-50" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </LaptopMockup>
                            </Link>
                            <div className="text-center">
                                <h3 className="text-lg font-bold text-slate-900">Talent Management</h3>
                                <p className="text-sm text-slate-500">求職者・求人・選考の一元管理</p>
                            </div>
                        </div>

                        {/* Support Management */}
                        <div className="group space-y-4">
                            <div className="text-center">
                                <span className="inline-block rounded-full bg-brand-900 px-4 py-1.5 text-sm font-bold text-white shadow-md">
                                    支援管理プロダクト
                                </span>
                            </div>
                            <Link href="/support" className="block transition-transform duration-300 hover:-translate-y-2">
                                <LaptopMockup className="bg-white">
                                    <div className="flex h-full flex-col bg-slate-50">
                                        <div className="flex items-center justify-between border-b bg-white px-3 py-2">
                                            <div className="flex items-center gap-2">
                                                <div className="h-2 w-2 rounded-full bg-brand-600" />
                                                <div className="h-2 w-16 rounded-full bg-slate-200" />
                                            </div>
                                        </div>
                                        <div className="flex h-full">
                                            <div className="w-12 border-r bg-white" />
                                            <div className="flex-1 p-3 space-y-2">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="h-8 w-8 rounded-full bg-slate-200" />
                                                    <div className="space-y-1">
                                                        <div className="h-2 w-20 rounded bg-slate-200" />
                                                        <div className="h-1.5 w-12 rounded bg-slate-100" />
                                                    </div>
                                                </div>
                                                <div className="space-y-2 border-l-2 border-slate-200 pl-3 ml-1">
                                                    {[1, 2, 3].map((i) => (
                                                        <div key={i} className="relative">
                                                            <div className="absolute -left-[17px] top-1 h-2 w-2 rounded-full bg-brand-400" />
                                                            <div className="h-10 rounded bg-white border border-slate-100 p-2">
                                                                <div className="h-2 w-3/4 rounded bg-slate-100" />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </LaptopMockup>
                            </Link>
                            <div className="text-center">
                                <h3 className="text-lg font-bold text-slate-900">Support Management</h3>
                                <p className="text-sm text-slate-500">生活支援・定期面談の記録管理</p>
                            </div>
                        </div>

                        {/* Document Automation */}
                        <div className="group space-y-4">
                            <div className="text-center">
                                <span className="inline-block rounded-full bg-brand-900 px-4 py-1.5 text-sm font-bold text-white shadow-md">
                                    書類作成プロダクト
                                </span>
                            </div>
                            <Link href="/document" className="block transition-transform duration-300 hover:-translate-y-2">
                                <LaptopMockup className="bg-white">
                                    <div className="flex h-full flex-col bg-slate-50">
                                        <div className="flex items-center justify-between border-b bg-white px-3 py-2">
                                            <div className="flex items-center gap-2">
                                                <div className="h-2 w-2 rounded-full bg-brand-600" />
                                                <div className="h-2 w-16 rounded-full bg-slate-200" />
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="grid grid-cols-2 gap-2 mb-3">
                                                <div className="h-16 rounded bg-white border border-slate-200 flex items-center justify-center">
                                                    <div className="h-6 w-4 bg-slate-100" />
                                                </div>
                                                <div className="h-16 rounded bg-white border border-slate-200 flex items-center justify-center">
                                                    <div className="h-6 w-4 bg-slate-100" />
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <div className="h-2 w-1/3 rounded bg-slate-200" />
                                                <div className="h-8 w-full rounded bg-white border border-slate-100" />
                                                <div className="h-8 w-full rounded bg-white border border-slate-100" />
                                            </div>
                                        </div>
                                    </div>
                                </LaptopMockup>
                            </Link>
                            <div className="text-center">
                                <h3 className="text-lg font-bold text-slate-900">Document Automation</h3>
                                <p className="text-sm text-slate-500">複雑な申請書類の自動作成</p>
                            </div>
                        </div>

                        {/* TaskPorta (Moved to Core Products) */}
                        <div className="group space-y-4">
                            <div className="text-center">
                                <span className="inline-block rounded-full bg-brand-600 px-4 py-1.5 text-sm font-bold text-white shadow-md">
                                    全社横断タスク管理
                                </span>
                            </div>
                            <Link href="/task-porta" className="block transition-transform duration-300 hover:-translate-y-2">
                                <LaptopMockup className="bg-white">
                                    <div className="flex h-full flex-col bg-slate-50">
                                        {/* TaskPorta Mock Header */}
                                        <div className="flex items-center justify-between border-b bg-white px-4 py-2">
                                            <div className="flex items-center gap-2">
                                                <div className="flex h-5 w-5 items-center justify-center rounded bg-brand-600 text-white">
                                                    <CheckCircle2 className="h-3 w-3" />
                                                </div>
                                                <div className="h-2 w-20 rounded-full bg-slate-800" />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="h-6 w-16 rounded border border-slate-200" />
                                                <div className="h-6 w-6 rounded-full bg-lime-500" />
                                            </div>
                                        </div>
                                        {/* TaskPorta Mock Content */}
                                        <div className="flex-1 p-4 grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <div className="h-3 w-24 rounded bg-slate-300" />
                                                <div className="rounded-lg border border-slate-200 bg-white p-3">
                                                    <div className="flex gap-2 mb-3">
                                                        <div className="h-4 w-10 rounded bg-green-100" />
                                                        <div className="h-4 w-10 rounded bg-purple-100" />
                                                    </div>
                                                    <div className="grid grid-cols-4 gap-2">
                                                        {[1, 2, 3, 4].map(i => (
                                                            <div key={i} className="space-y-1">
                                                                <div className="h-2 w-8 rounded bg-slate-200" />
                                                                <div className="h-5 w-6 rounded bg-brand-100" />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-3 w-24 rounded bg-slate-300" />
                                                <div className="rounded-lg border border-slate-200 bg-white p-2 space-y-2">
                                                    <div className="flex items-center gap-2 border-b border-slate-50 pb-2">
                                                        <div className="h-4 w-4 rounded bg-orange-100" />
                                                        <div className="flex-1 space-y-1">
                                                            <div className="h-2 w-full rounded bg-slate-200" />
                                                            <div className="h-2 w-2/3 rounded bg-slate-100" />
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="h-4 w-4 rounded bg-orange-100" />
                                                        <div className="flex-1 space-y-1">
                                                            <div className="h-2 w-full rounded bg-slate-200" />
                                                            <div className="h-2 w-2/3 rounded bg-slate-100" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </LaptopMockup>
                            </Link>
                            <div className="text-center">
                                <h3 className="text-lg font-bold text-slate-900">TaskPorta</h3>
                                <p className="text-sm text-slate-500">タスク期限・担当者・アラートの可視化</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gredge Services Layer */}
                <div className="space-y-6">
                    <div className="relative flex justify-center">
                        <span className="bg-white/50 px-3 text-sm font-semibold text-slate-500 uppercase tracking-wider backdrop-blur-sm rounded-full">
                            Gredge Life Support / 生活支援サービス
                        </span>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <DashboardCard
                            title="Insurance Support"
                            titleEn="外国人財への保険"
                            description=""
                            features={[
                                "特定技能外国人向け医療保険",
                                "生活賠償責任保険",
                                "加入手続き代行"
                            ]}
                            players={[
                                { label: "受入企業", type: "company" },
                                { label: "外国人本人", type: "foreigner" }
                            ]}
                            href="#"
                            lpUrl="#"
                            icon={<ShieldCheck className="h-6 w-6" />}
                        />

                        <DashboardCard
                            title="Japanese Education"
                            titleEn="日本語教育サービス"
                            description=""
                            features={[
                                "オンライン日本語教室",
                                "JLPT対策講座",
                                "ビジネスマナー研修"
                            ]}
                            players={[
                                { label: "外国人本人", type: "foreigner" },
                                { label: "受入企業", type: "company" }
                            ]}
                            href="#"
                            lpUrl="#"
                            icon={<Languages className="h-6 w-6" />}
                        />

                        <DashboardCard
                            title="Financial Support"
                            titleEn="金融サービス (口座/カード)"
                            description=""
                            features={[
                                "給与受取口座開設サポート",
                                "クレジットカード申込",
                                "海外送金サービス連携"
                            ]}
                            players={[
                                { label: "外国人本人", type: "foreigner" }
                            ]}
                            href="#"
                            lpUrl="#"
                            icon={<Landmark className="h-6 w-6" />}
                        />

                        <DashboardCard
                            title="Housing Support"
                            titleEn="住居手配・社宅管理"
                            description=""
                            features={[
                                "外国人可物件の紹介",
                                "社宅契約代行",
                                "入居時ライフライン手配"
                            ]}
                            players={[
                                { label: "受入企業", type: "company" },
                                { label: "外国人本人", type: "foreigner" }
                            ]}
                            href="#"
                            lpUrl="#"
                            icon={<HomeIcon className="h-6 w-6" />}
                        />

                        <DashboardCard
                            title="Interpretation"
                            titleEn="通訳・翻訳手配"
                            description=""
                            features={[
                                "オンライン通訳 (24時間)",
                                "専門文書翻訳",
                                "緊急時通訳サポート"
                            ]}
                            players={[
                                { label: "支援機関/監理団体", type: "agency" },
                                { label: "受入企業", type: "company" }
                            ]}
                            href="#"
                            lpUrl="#"
                            icon={<Globe2 className="h-6 w-6" />}
                        />
                    </div>
                </div>

                {/* Legacy Layer */}
                <div className="mt-8 border-t border-slate-200 pt-8 opacity-60 hover:opacity-100 transition-opacity">
                    <div className="mb-6 flex items-center gap-4">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                            Legacy / 保守運用
                        </h2>
                        <div className="h-px flex-1 bg-slate-200" />
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <DashboardCard
                            title="dekisugi (Legacy)"
                            titleEn="技能実習管理システム"
                            description=""
                            features={[
                                "技能実習生管理",
                                "旧制度対応帳票出力",
                                "監査対応ログ"
                            ]}
                            players={[
                                { label: "監理団体", type: "agency" },
                                { label: "実習実施者", type: "company" }
                            ]}
                            href="#"
                            lpUrl="#"
                            isLegacy={true}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
