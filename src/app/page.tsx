import {
    Users,
    HeartHandshake,
    FileText,
    LayoutDashboard,
    Briefcase,
    Building2,
    Globe2,
    UserCircle
} from "lucide-react"
import { DashboardCard } from "@/components/DashboardCard"

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 p-8 md:p-12">
            <div className="mx-auto max-w-7xl space-y-12">
                {/* Header Section */}
                <div className="space-y-4 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Global Talent Platform
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-slate-600">
                        特定技能・育成就労を中心とした、次世代の外国人材共生プラットフォーム
                    </p>
                </div>

                {/* Cross-Cutting Platform Layer */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-slate-200" />
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-slate-50 px-3 text-sm font-semibold text-slate-500">
                            統合プラットフォーム基盤
                        </span>
                    </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-1">
                    <DashboardCard
                        title="TaskPorta"
                        titleEn="Cross-Product Task & BI Dashboard"
                        description="全プロダクトを横断するタスク管理とBI可視化の中枢神経。業務の抜け漏れを防ぎ、組織全体のパフォーマンスを最大化します。"
                        features={[
                            "全プロダクトのタスク集約・期限管理",
                            "経営/実務レベルの横断BIダッシュボード",
                            "アラート通知センター",
                            "チーム間コミュニケーションハブ"
                        ]}
                        players={[
                            { label: "支援機関/監理団体", type: "agency" },
                            { label: "受入企業", type: "company" },
                            { label: "全ユーザー", type: "other" }
                        ]}
                        href="#"
                        isCrossCutting={true}
                        icon={<LayoutDashboard className="h-6 w-6" />}
                    />
                </div>

                {/* Core Products Layer */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-slate-200" />
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-slate-50 px-3 text-sm font-semibold text-slate-500">
                            コアプロダクト群
                        </span>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <DashboardCard
                        title="Talent Management"
                        titleEn="人材管理ツール"
                        description="求職者と求人の最適なマッチングを実現。スキル、在留資格、希望条件を多角的に分析し、定着率の高い採用を支援します。"
                        features={[
                            "求職者/求人 統合検索・マッチング",
                            "多言語プロフィール管理",
                            "採用進捗パイプライン管理",
                            "送り出し機関連携"
                        ]}
                        players={[
                            { label: "支援機関/監理団体", type: "agency" },
                            { label: "受入企業", type: "company" },
                            { label: "外国人本人", type: "foreigner" },
                            { label: "送り出し機関", type: "other" }
                        ]}
                        href="/talent"
                        icon={<Users className="h-6 w-6" />}
                    />

                    <DashboardCard
                        title="Support Management"
                        titleEn="支援管理ツール"
                        description="入国から定着まで、外国人材一人ひとりのキャリアと生活を伴走支援。面談記録や支援実施状況をタイムラインで可視化します。"
                        features={[
                            "外国人カルテ（支援×キャリア履歴）",
                            "定期面談・生活支援ログ",
                            "受入企業共有ビュー",
                            "トラブル対応管理"
                        ]}
                        players={[
                            { label: "支援機関/監理団体", type: "agency" },
                            { label: "受入企業", type: "company" },
                            { label: "外国人本人", type: "foreigner" }
                        ]}
                        href="/support"
                        icon={<HeartHandshake className="h-6 w-6" />}
                    />

                    <DashboardCard
                        title="Document Automation"
                        titleEn="帳票作成ツール"
                        description="複雑な申請書類や雇用契約書を、蓄積されたデータから自動生成。行政手続きの工数を削減し、コンプライアンス遵守を強力にサポート。"
                        features={[
                            "雇用条件書/求人票 自動生成",
                            "ビザ申請書類作成アシスト",
                            "作成履歴・版管理",
                            "電子署名連携（予定）"
                        ]}
                        players={[
                            { label: "支援機関/監理団体", type: "agency" },
                            { label: "行政書士", type: "other" },
                            { label: "受入企業", type: "company" }
                        ]}
                        href="/document"
                        icon={<FileText className="h-6 w-6" />}
                    />
                </div>

                {/* Legacy Layer */}
                <div className="mt-16 border-t border-slate-200 pt-8 opacity-60 hover:opacity-100 transition-opacity">
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
                            description="技能実習制度に対応した既存管理システム。新規開発は凍結し、保守運用フェーズへ移行。"
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
                            isLegacy={true}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
