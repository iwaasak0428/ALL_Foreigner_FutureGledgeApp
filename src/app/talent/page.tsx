"use client"

import { useState } from "react"
import {
    Search,
    Filter,
    MapPin,
    Briefcase,
    GraduationCap,
    Globe,
    MoreHorizontal,
    UserCheck,
    Building,
    ArrowUpRight,
    ChevronDown,
    Users as UsersIcon,
    Calendar,
    AlertTriangle
} from "lucide-react"
import { Badge } from "@/components/ui/Badge"
import Link from "next/link"

type ViewMode = "company" | "agency" | "supervising"

export default function TalentPage() {
    const [viewMode, setViewMode] = useState<ViewMode>("company")

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-10 border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-slate-500 hover:text-brand-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                        </Link>
                        <h1 className="text-xl font-bold text-slate-900">Talent Management</h1>

                        {/* View Switcher */}
                        <div className="relative group">
                            <button className="flex items-center gap-2 rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-200">
                                {viewMode === "company" && "受入企業ビュー"}
                                {viewMode === "agency" && "送り出し機関ビュー"}
                                {viewMode === "supervising" && "監理団体ビュー"}
                                <ChevronDown className="h-4 w-4" />
                            </button>
                            <div className="absolute left-0 top-full mt-1 hidden w-48 rounded-lg border border-slate-200 bg-white p-1 shadow-lg group-hover:block">
                                <button
                                    onClick={() => setViewMode("company")}
                                    className={`w-full rounded px-3 py-2 text-left text-sm ${viewMode === "company" ? "bg-brand-50 text-brand-700" : "text-slate-700 hover:bg-slate-50"}`}
                                >
                                    受入企業ビュー
                                </button>
                                <button
                                    onClick={() => setViewMode("agency")}
                                    className={`w-full rounded px-3 py-2 text-left text-sm ${viewMode === "agency" ? "bg-brand-50 text-brand-700" : "text-slate-700 hover:bg-slate-50"}`}
                                >
                                    送り出し機関ビュー
                                </button>
                                <button
                                    onClick={() => setViewMode("supervising")}
                                    className={`w-full rounded px-3 py-2 text-left text-sm ${viewMode === "supervising" ? "bg-brand-50 text-brand-700" : "text-slate-700 hover:bg-slate-50"}`}
                                >
                                    監理団体ビュー
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
                            <UserCheck className="h-4 w-4" />
                            プロフィール管理
                        </button>
                        <div className="h-8 w-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold">
                            {viewMode === "company" ? "C" : viewMode === "agency" ? "A" : "S"}
                        </div>
                    </div>
                </div>
            </header>

            <main className="p-6">
                <div className="mx-auto max-w-7xl">
                    {/* Search & Filter Area (Common) */}
                    <div className="mb-8 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder={
                                        viewMode === "company" ? "スキル、資格、国籍などで検索..." :
                                            viewMode === "agency" ? "候補者名、IDで検索..." :
                                                "企業名、実習生名で検索..."
                                    }
                                    className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                                />
                            </div>
                            <div className="flex gap-2">
                                <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100">
                                    <Filter className="h-4 w-4" />
                                    詳細フィルタ
                                </button>
                                <button className="rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-brand-700">
                                    検索
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* View Content */}
                    {viewMode === "company" && <CompanyView />}
                    {viewMode === "agency" && <AgencyView />}
                    {viewMode === "supervising" && <SupervisingView />}

                </div>
            </main>
        </div>
    )
}

function CompanyView() {
    return (
        <div className="grid gap-6 lg:grid-cols-12">
            {/* Left Column: Job Seekers */}
            <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <UsersIcon className="h-5 w-5 text-brand-600" />
                        求職者一覧
                        <span className="ml-2 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                            124名
                        </span>
                    </h2>
                    <div className="flex gap-2 text-sm text-slate-500">
                        <span>並び替え:</span>
                        <select className="bg-transparent font-medium text-slate-900 outline-none">
                            <option>マッチ度順</option>
                            <option>新着順</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-4">
                    <JobSeekerCard
                        name="Nguyen Van A"
                        age={24}
                        nationality="ベトナム"
                        visa="特定技能1号 (飲食料品)"
                        japaneseLevel="N3"
                        skills={["食品衛生管理者", "調理経験3年"]}
                        location="東京、神奈川"
                        matchScore={95}
                        status="求職中"
                    />
                    <JobSeekerCard
                        name="Maung Maung"
                        age={27}
                        nationality="ミャンマー"
                        visa="特定技能1号 (介護)"
                        japaneseLevel="N2"
                        skills={["介護職員初任者研修", "夜勤可"]}
                        location="大阪、兵庫"
                        matchScore={88}
                        status="面接調整中"
                    />
                    <JobSeekerCard
                        name="Siti Rahayu"
                        age={22}
                        nationality="インドネシア"
                        visa="特定技能1号 (農業)"
                        japaneseLevel="N4"
                        skills={["農業技能実習修了", "運転免許"]}
                        location="茨城、千葉"
                        matchScore={82}
                        status="求職中"
                    />
                </div>
            </div>

            {/* Right Column: Jobs */}
            <div className="lg:col-span-4 space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-brand-600" />
                        募集中求人
                    </h2>
                    <Link href="#" className="text-sm font-medium text-brand-600 hover:underline">
                        すべて見る
                    </Link>
                </div>

                <div className="space-y-4">
                    <JobCard
                        company="株式会社フードテック"
                        title="食品加工工場のライン管理"
                        location="神奈川県横浜市"
                        salary="月給 22万円〜"
                        tags={["寮あり", "ビザ支援"]}
                    />
                    <JobCard
                        company="さくら介護グループ"
                        title="介護施設でのケアスタッフ"
                        location="大阪府大阪市"
                        salary="月給 24万円〜"
                        tags={["夜勤手当", "資格取得支援"]}
                    />
                </div>

                <div className="rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-5 text-white shadow-lg">
                    <div className="mb-3 flex items-center gap-2">
                        <Globe className="h-5 w-5 text-brand-300" />
                        <h3 className="font-bold">送り出し機関比較</h3>
                    </div>
                    <p className="mb-4 text-sm text-slate-300">
                        各国の提携送り出し機関の実績や教育体制を比較・検討できます。
                    </p>
                    <button className="w-full rounded-lg bg-white/10 py-2 text-sm font-medium text-white hover:bg-white/20 backdrop-blur-sm">
                        機関データを見る
                    </button>
                </div>
            </div>
        </div>
    )
}

function AgencyView() {
    return (
        <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <UsersIcon className="h-5 w-5 text-brand-600" />
                        自社候補者リスト
                        <span className="ml-2 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                            45名
                        </span>
                    </h2>
                    <button className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700">
                        + 新規登録
                    </button>
                </div>

                <div className="space-y-4">
                    <JobSeekerCard
                        name="Tran Thi B"
                        age={21}
                        nationality="ベトナム"
                        visa="技能実習2号修了予定"
                        japaneseLevel="N3"
                        skills={["惣菜加工", "真面目"]}
                        location="希望なし"
                        matchScore={0}
                        status="教育中"
                    />
                    <JobSeekerCard
                        name="Le Van C"
                        age={25}
                        nationality="ベトナム"
                        visa="特定技能試験合格"
                        japaneseLevel="N4"
                        skills={["建設機械施工", "体力自信あり"]}
                        location="関東"
                        matchScore={0}
                        status="面接待ち"
                    />
                </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-brand-600" />
                        面接スケジュール
                    </h2>
                </div>
                <div className="space-y-4">
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                        <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
                            <Calendar className="h-4 w-4" />
                            <span>2025/12/10 14:00</span>
                        </div>
                        <h4 className="font-bold text-slate-900">株式会社ビルドアップ 様</h4>
                        <p className="text-sm text-slate-600">候補者: Le Van C</p>
                        <Badge variant="outline" className="mt-2 bg-blue-50 text-blue-700 border-blue-200">
                            オンライン面接
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}

function SupervisingView() {
    return (
        <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <Building className="h-5 w-5 text-brand-600" />
                        管理受入企業一覧
                        <span className="ml-2 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                            28社
                        </span>
                    </h2>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5 hover:shadow-sm">
                        <div>
                            <h3 className="font-bold text-slate-900">株式会社フードテック</h3>
                            <p className="text-sm text-slate-500">特定技能: 12名 / 技能実習: 5名</p>
                        </div>
                        <Badge variant="success" className="bg-emerald-100 text-emerald-700">
                            監査済 (今月)
                        </Badge>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5 hover:shadow-sm">
                        <div>
                            <h3 className="font-bold text-slate-900">さくら介護グループ</h3>
                            <p className="text-sm text-slate-500">特定技能: 8名</p>
                        </div>
                        <Badge variant="warning" className="bg-amber-100 text-amber-700">
                            定期訪問予定
                        </Badge>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-brand-600" />
                        要対応アラート
                    </h2>
                </div>
                <div className="space-y-4">
                    <div className="rounded-xl border border-l-4 border-l-amber-500 border-slate-200 bg-white p-4">
                        <h4 className="font-bold text-slate-900">定期監査報告書の未提出</h4>
                        <p className="text-sm text-slate-600">株式会社メタルワークス</p>
                        <p className="mt-1 text-xs text-slate-400">期限: 2025/12/05 (2日遅れ)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function JobSeekerCard({ name, age, nationality, visa, japaneseLevel, skills, location, matchScore, status }: any) {
    return (
        <div className="group relative flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-brand-200 hover:shadow-md sm:flex-row sm:items-start">
            <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center text-2xl font-bold text-slate-400">
                    {name.charAt(0)}
                </div>
            </div>
            <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600">
                            {name} <span className="text-sm font-normal text-slate-500">({age}歳)</span>
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                            <span>{nationality}</span>
                            <span className="h-1 w-1 rounded-full bg-slate-300" />
                            <span>{visa}</span>
                        </div>
                    </div>
                    {matchScore > 0 && (
                        <div className="flex flex-col items-end gap-1">
                            <div className="flex items-center gap-1 text-brand-600 font-bold">
                                <span className="text-xs text-brand-400">マッチ度</span>
                                <span className="text-xl">{matchScore}%</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-slate-50 text-slate-600 border-slate-200">
                        日本語 {japaneseLevel}
                    </Badge>
                    {skills.map((skill: string, i: number) => (
                        <Badge key={i} variant="secondary" className="bg-brand-50 text-brand-700">
                            {skill}
                        </Badge>
                    ))}
                    {location !== "希望なし" && (
                        <div className="flex items-center gap-1 text-xs text-slate-500 ml-2">
                            <MapPin className="h-3 w-3" />
                            {location}
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${status === '求職中' || status === '教育中' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                        {status}
                    </span>
                    <button className="text-sm font-medium text-brand-600 hover:underline flex items-center gap-1">
                        詳細プロフィール <ArrowUpRight className="h-3 w-3" />
                    </button>
                </div>
            </div>
        </div>
    )
}

function JobCard({ company, title, location, salary, tags }: any) {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-brand-200 hover:shadow-sm">
            <div className="mb-2 flex items-start justify-between">
                <div>
                    <h4 className="font-bold text-slate-900 line-clamp-1">{title}</h4>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                        <Building className="h-3 w-3" /> {company}
                    </p>
                </div>
            </div>

            <div className="mb-3 space-y-1">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                    <MapPin className="h-3 w-3 text-slate-400" />
                    {location}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">{salary}</span>
                </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
                {tags.map((tag: string, i: number) => (
                    <span key={i} className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}

