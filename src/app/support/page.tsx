import {
    ArrowLeft,
    Calendar,
    FileText,
    MessageSquare,
    Clock,
    CheckCircle2,
    AlertCircle,
    Share2,
    Eye,
    MoreVertical,
    Phone,
    Mail,
    MapPin
} from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/Badge"

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="sticky top-0 z-10 border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-slate-500 hover:text-brand-600">
                            <ArrowLeft className="h-6 w-6" />
                        </Link>
                        <div>
                            <h1 className="text-xl font-bold text-slate-900">Support Management</h1>
                            <p className="text-xs text-slate-500">外国人カルテ No.2024-0892</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 rounded-full bg-slate-100 px-1 py-1">
                            <button className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-slate-900 shadow-sm">
                                支援者ビュー
                            </button>
                            <button className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-900">
                                <Eye className="h-4 w-4" />
                                企業共有ビュー
                            </button>
                        </div>
                        <button className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700">
                            + 支援記録を追加
                        </button>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-6xl p-6">
                <div className="grid gap-6 lg:grid-cols-12">
                    {/* Left Column: Profile Summary */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="mb-6 flex flex-col items-center text-center">
                                <div className="mb-4 h-24 w-24 rounded-full bg-slate-200 flex items-center justify-center text-3xl font-bold text-slate-400">
                                    N
                                </div>
                                <h2 className="text-xl font-bold text-slate-900">Nguyen Van A</h2>
                                <p className="text-sm text-slate-500">グエン ヴァン A</p>
                                <div className="mt-2 flex gap-2">
                                    <Badge variant="brand">特定技能1号</Badge>
                                    <Badge variant="outline">飲食料品製造</Badge>
                                </div>
                            </div>

                            <div className="space-y-4 border-t border-slate-100 pt-6">
                                <div className="flex items-center gap-3 text-sm">
                                    <BuildingIcon className="h-4 w-4 text-slate-400" />
                                    <span className="text-slate-600">株式会社フードテック 横浜工場</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <MapPin className="h-4 w-4 text-slate-400" />
                                    <span className="text-slate-600">神奈川県横浜市鶴見区...</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Phone className="h-4 w-4 text-slate-400" />
                                    <span className="text-slate-600">090-1234-5678</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Mail className="h-4 w-4 text-slate-400" />
                                    <span className="text-slate-600">nguyen.a@example.com</span>
                                </div>
                            </div>

                            <div className="mt-6 rounded-lg bg-brand-50 p-4">
                                <h3 className="mb-2 text-xs font-bold uppercase text-brand-700">Next Action</h3>
                                <div className="flex items-start gap-2">
                                    <Calendar className="mt-0.5 h-4 w-4 text-brand-600" />
                                    <div>
                                        <p className="text-sm font-semibold text-brand-900">3ヶ月定期面談</p>
                                        <p className="text-xs text-brand-600">期限: 2025/12/15 まで</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Career Asset Message */}
                        <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 p-6 border border-emerald-100">
                            <div className="mb-2 flex items-center gap-2 text-emerald-700">
                                <CheckCircle2 className="h-5 w-5" />
                                <h3 className="font-bold">キャリア資産化</h3>
                            </div>
                            <p className="text-sm text-emerald-800 leading-relaxed">
                                これまでの支援履歴と日本語学習の記録は、本人のキャリア資産として蓄積されています。
                                <br />
                                <span className="text-xs opacity-80">※転職時や特定技能2号移行時に参照可能</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Support Timeline */}
                    <div className="lg:col-span-8">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-lg font-bold text-slate-900">支援・面談タイムライン</h2>
                            <div className="flex gap-2">
                                <select className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600">
                                    <option>すべて表示</option>
                                    <option>定期面談</option>
                                    <option>生活支援</option>
                                    <option>トラブル</option>
                                </select>
                            </div>
                        </div>

                        <div className="relative space-y-8 pl-8 before:absolute before:left-3.5 before:top-2 before:h-full before:w-0.5 before:bg-slate-200">
                            {/* Timeline Item 1: Interview */}
                            <TimelineItem
                                date="2025/12/01"
                                type="定期面談"
                                title="配属後1ヶ月面談"
                                author="佐藤 健太 (支援担当)"
                                content="仕事には慣れてきた様子。ライン作業のスピードについていけるか不安があるとのこと。現場リーダーに共有し、フォロー体制を確認することにした。"
                                tags={["順調", "要フォロー"]}
                                icon={<MessageSquare className="h-4 w-4 text-white" />}
                                color="bg-blue-500"
                            />

                            {/* Timeline Item 2: Support */}
                            <TimelineItem
                                date="2025/11/20"
                                type="生活支援"
                                title="銀行口座開設同行"
                                author="鈴木 花子 (生活指導員)"
                                content="ゆうちょ銀行にて口座開設完了。キャッシュカードの使い方も説明済み。給与振込先としての登録もサポート完了。"
                                tags={["完了"]}
                                icon={<CheckCircle2 className="h-4 w-4 text-white" />}
                                color="bg-emerald-500"
                            />

                            {/* Timeline Item 3: Alert */}
                            <TimelineItem
                                date="2025/11/15"
                                type="アラート"
                                title="入国時オリエンテーション実施"
                                author="システム自動記録"
                                content="法的保護講習を含む8時間のオリエンテーションを実施完了。理解度テスト90点。"
                                tags={["必須"]}
                                icon={<AlertCircle className="h-4 w-4 text-white" />}
                                color="bg-amber-500"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

function BuildingIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>
    )
}

function TimelineItem({ date, type, title, author, content, tags, icon, color }: any) {
    return (
        <div className="relative">
            <div className={`absolute -left-[2.15rem] flex h-8 w-8 items-center justify-center rounded-full border-4 border-slate-50 ${color}`}>
                {icon}
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-brand-200 hover:shadow-md">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-slate-500">{date}</span>
                        <Badge variant="outline" className="bg-slate-50 text-slate-600">
                            {type}
                        </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Clock className="h-3 w-3" />
                        <span>記録者: {author}</span>
                    </div>
                </div>
                <h3 className="mb-2 text-base font-bold text-slate-900">{title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">
                    {content}
                </p>
                <div className="flex gap-2">
                    {tags.map((tag: string, i: number) => (
                        <span key={i} className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
