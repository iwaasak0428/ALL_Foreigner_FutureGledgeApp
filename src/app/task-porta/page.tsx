import { Badge } from "@/components/ui/Badge"
import {
    RefreshCw,
    AlertTriangle,
    ChevronLeft,
    Clock,
    CheckCircle2,
    User
} from "lucide-react"
import Link from "next/link"

export default function TaskPortaPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="sticky top-0 z-10 border-b border-slate-200 bg-white px-6 py-3 shadow-sm">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-slate-700">
                            <ChevronLeft className="h-5 w-5" />
                            <span className="text-sm font-medium">Back to Dashboard</span>
                        </Link>
                        <div className="h-6 w-px bg-slate-200" />
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
                                <CheckCircle2 className="h-5 w-5" />
                            </div>
                            <span className="text-xl font-bold text-slate-800">TaskPorta</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
                            <RefreshCw className="h-4 w-4" />
                            同期
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="text-right">
                                <p className="text-sm font-bold text-slate-900">岩浅</p>
                                <p className="text-xs text-slate-500">テスト_社内_商談用</p>
                            </div>
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-500 text-white font-bold">
                                岩
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="p-6 md:p-8 max-w-7xl mx-auto space-y-8">
                {/* Task Deadlines Section */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">タスク期限</h2>

                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="mb-6 flex gap-2">
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-200">申請</Badge>
                            <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">受領</Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                            <div className="space-y-1">
                                <p className="text-sm font-bold text-slate-900">超過</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-brand-600">6</span>
                                    <span className="text-sm font-bold text-slate-900">件</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-bold text-slate-900">1週間以内</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-brand-600">1</span>
                                    <span className="text-sm font-bold text-slate-900">件</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-bold text-slate-900">1ヶ月以内</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-brand-600">1</span>
                                    <span className="text-sm font-bold text-slate-900">件</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-bold text-slate-900">未割り当て</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-brand-600">8</span>
                                    <span className="text-sm font-bold text-slate-900">件</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Person in Charge Section */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900">担当者</h2>
                        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-slate-50 text-slate-500">
                                    <tr>
                                        <th className="px-6 py-3 font-medium">名前</th>
                                        <th className="px-6 py-3 font-medium text-center">タスク総数</th>
                                        <th className="px-6 py-3 font-medium text-center">1ヶ月以内</th>
                                        <th className="px-6 py-3 font-medium text-center">超過</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { name: "山崎 岳也", total: 1, month: 0, overdue: 1, color: "bg-purple-600" },
                                        { name: "鈴木 隆誓", total: 1, month: 0, overdue: 0, color: "bg-yellow-400" },
                                        { name: "土田 真輝", total: 4, month: 1, overdue: 0, color: "bg-yellow-700" },
                                        { name: "波田野 達", total: 8, month: 0, overdue: 3, color: "bg-blue-600" },
                                    ].map((user, i) => (
                                        <tr key={i} className="hover:bg-slate-50">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={`flex h-8 w-8 items-center justify-center rounded-full text-white text-xs font-bold ${user.color}`}>
                                                        {user.name.charAt(0)}
                                                    </div>
                                                    <span className="font-bold text-slate-900">{user.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-center font-bold text-brand-600">{user.total}件</td>
                                            <td className="px-6 py-4 text-center font-bold text-brand-600">{user.month}件</td>
                                            <td className="px-6 py-4 text-center font-bold text-brand-600">{user.overdue}件</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Alerts Section */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900">アラート</h2>
                        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
                            {[
                                {
                                    title: "期限が過ぎています",
                                    assignee: "波田野 達",
                                    company: "タナカ事業協同組合",
                                    task: "技能実習1号在留資格認定証明書交付申請",
                                    progress: "1/3",
                                    status: "期限が過ぎています"
                                },
                                {
                                    title: "期限が過ぎています",
                                    assignee: "波田野 達",
                                    company: "テスト (C)",
                                    task: "2号技能実習計画認定申請",
                                    progress: "0/3",
                                    status: "期限が過ぎています"
                                }
                            ].map((alert, i) => (
                                <div key={i} className="flex gap-4 pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                                    <div className="mt-1">
                                        <AlertTriangle className="h-5 w-5 text-orange-500" />
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <h3 className="font-bold text-slate-900 underline decoration-slate-300 underline-offset-4">
                                            {alert.title}
                                        </h3>
                                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                                            <div>
                                                <span className="text-slate-500 text-xs block mb-0.5">担当者</span>
                                                <span className="font-medium text-slate-900">{alert.assignee}</span>
                                            </div>
                                            <div>
                                                <span className="text-slate-500 text-xs block mb-0.5">受入企業</span>
                                                <span className="font-medium text-slate-900">{alert.company}</span>
                                            </div>
                                            <div className="col-span-2">
                                                <span className="text-slate-500 text-xs block mb-0.5">タスク</span>
                                                <Link href="#" className="font-medium text-brand-600 hover:underline">
                                                    {alert.task}
                                                </Link>
                                            </div>
                                            <div>
                                                <span className="text-slate-500 text-xs block mb-0.5">進捗</span>
                                                <span className="font-medium text-slate-900">{alert.progress}</span>
                                            </div>
                                            <div>
                                                <span className="text-slate-500 text-xs block mb-0.5">残り期間</span>
                                                <span className="font-medium text-slate-900">{alert.status}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}
