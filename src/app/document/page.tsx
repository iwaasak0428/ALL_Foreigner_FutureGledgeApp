import {
    FileText,
    ArrowLeft,
    Plus,
    History,
    Download,
    Printer,
    Search,
    FileCheck,
    Settings,
    Sparkles,
    ChevronRight,
    Clock
} from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/Badge"

export default function DocumentPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="sticky top-0 z-10 border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-slate-500 hover:text-brand-600">
                            <ArrowLeft className="h-6 w-6" />
                        </Link>
                        <h1 className="text-xl font-bold text-slate-900">Document Automation</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900">
                            <Settings className="h-4 w-4" />
                            テンプレート設定
                        </button>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-7xl p-6">
                <div className="grid gap-8 lg:grid-cols-12">
                    {/* Left Column: Generation Workspace */}
                    <div className="lg:col-span-8 space-y-8">
                        <div className="rounded-xl bg-gradient-to-r from-brand-600 to-brand-800 p-8 text-white shadow-lg">
                            <h2 className="mb-2 text-2xl font-bold">帳票生成ワークスペース</h2>
                            <p className="mb-6 text-brand-100">
                                人材管理・支援管理ツールのデータを参照して、必要な書類を自動生成します。
                            </p>

                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="作成したい書類名で検索..."
                                    className="w-full rounded-lg border-0 bg-white py-4 pl-12 pr-4 text-slate-900 shadow-sm outline-none ring-2 ring-transparent focus:ring-brand-300"
                                />
                            </div>
                        </div>

                        <div className="grid gap-6">
                            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                <Sparkles className="h-5 w-5 text-brand-600" />
                                よく使う帳票から作成
                            </h3>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {/* Document Template Card 1 */}
                                <DocumentTemplateCard
                                    title="雇用条件書 (特定技能)"
                                    description="1号・2号対応。最新の法改正に対応した様式で出力します。"
                                    category="契約関連"
                                    isPopular={true}
                                />
                                {/* Document Template Card 2 */}
                                <DocumentTemplateCard
                                    title="3号帳簿 (支援実施記録)"
                                    description="支援管理ツールのタイムラインデータから自動転記・生成。"
                                    category="定期報告"
                                    isPopular={true}
                                />
                                {/* Document Template Card 3 */}
                                <DocumentTemplateCard
                                    title="求人票 (多言語対応)"
                                    description="日本語の内容から母国語版をAI翻訳して同時生成。"
                                    category="採用関連"
                                />
                                {/* Document Template Card 4 */}
                                <DocumentTemplateCard
                                    title="ビザ申請理由書ドラフト"
                                    description="過去の許可事例をベースに、申請理由書の骨子を作成。"
                                    category="申請関連"
                                    isBeta={true}
                                />
                            </div>
                        </div>

                        {/* Data Source Connection Hint */}
                        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                            <p className="mb-4 text-sm text-slate-600">
                                人材管理ツール・支援管理ツールのデータを選択して差し込むことができます
                            </p>
                            <div className="flex justify-center gap-4">
                                <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
                                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                    人材データ参照
                                </button>
                                <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50">
                                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                                    支援ログ参照
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: History Log */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
                            <div className="border-b border-slate-100 p-4">
                                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                                    <History className="h-5 w-5 text-slate-500" />
                                    作成履歴ログ
                                </h3>
                            </div>
                            <div className="divide-y divide-slate-100">
                                <HistoryItem
                                    title="雇用条件書_NguyenVanA.pdf"
                                    user="佐藤 健太"
                                    time="10分前"
                                    status="completed"
                                />
                                <HistoryItem
                                    title="定期面談報告書_202512.xlsx"
                                    user="鈴木 花子"
                                    time="1時間前"
                                    status="completed"
                                />
                                <HistoryItem
                                    title="在留資格認定証明書交付申請書"
                                    user="田中 太郎 (行政書士)"
                                    time="3時間前"
                                    status="draft"
                                />
                                <HistoryItem
                                    title="求人票_食品加工_v2.pdf"
                                    user="佐藤 健太"
                                    time="昨日 15:30"
                                    status="completed"
                                />
                            </div>
                            <div className="p-4 border-t border-slate-100">
                                <button className="w-full text-center text-sm font-medium text-brand-600 hover:underline">
                                    すべての履歴を見る
                                </button>
                            </div>
                        </div>

                        {/* Future Expansion Hint */}
                        <div className="rounded-xl bg-slate-900 p-6 text-white">
                            <div className="mb-3 flex items-center gap-2">
                                <FileCheck className="h-5 w-5 text-brand-400" />
                                <h3 className="font-bold">オンライン申請連携</h3>
                            </div>
                            <p className="mb-4 text-sm text-slate-400">
                                作成した書類データは、将来的に出入国在留管理庁のオンライン申請システムへ直接連携可能になる予定です。
                            </p>
                            <Badge variant="outline" className="border-slate-700 text-slate-300">
                                Coming 2026
                            </Badge>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

function DocumentTemplateCard({ title, description, category, isPopular, isBeta }: any) {
    return (
        <div className="group relative flex cursor-pointer flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-brand-200 hover:shadow-md">
            <div>
                <div className="mb-3 flex items-center justify-between">
                    <Badge variant="secondary" className="bg-slate-100 text-slate-600">
                        {category}
                    </Badge>
                    {isPopular && (
                        <Badge variant="brand" className="bg-amber-100 text-amber-700 hover:bg-amber-200">
                            人気
                        </Badge>
                    )}
                    {isBeta && (
                        <Badge variant="brand" className="bg-brand-50 text-brand-700">
                            Beta AI
                        </Badge>
                    )}
                </div>
                <h4 className="mb-2 font-bold text-slate-900 group-hover:text-brand-600">
                    {title}
                </h4>
                <p className="text-sm text-slate-600">{description}</p>
            </div>
            <div className="mt-4 flex items-center justify-end text-brand-600 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-sm font-medium">作成する</span>
                <ChevronRight className="h-4 w-4" />
            </div>
        </div>
    )
}

function HistoryItem({ title, user, time, status }: any) {
    return (
        <div className="flex items-center justify-between p-4 hover:bg-slate-50">
            <div className="flex items-start gap-3">
                <div className={`mt-1 h-8 w-8 flex-shrink-0 rounded-lg flex items-center justify-center ${status === 'completed' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                    <FileText className="h-4 w-4" />
                </div>
                <div>
                    <h4 className="text-sm font-medium text-slate-900 line-clamp-1">{title}</h4>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span>{user}</span>
                        <span>•</span>
                        <span>{time}</span>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0">
                {status === 'completed' ? (
                    <button className="rounded p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-600">
                        <Download className="h-4 w-4" />
                    </button>
                ) : (
                    <Badge variant="outline" className="text-[10px]">下書き</Badge>
                )}
            </div>
        </div>
    )
}
