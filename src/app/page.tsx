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
    Landmark
} from "lucide-react"
import { DashboardCard } from "@/components/DashboardCard"

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 p-8 md:p-12">
            <div className="mx-auto max-w-7xl space-y-16">
                {/* Header Section */}
                <div className="space-y-4 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Global Talent Platform
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-slate-600">
                        特定技能・育成就労を中心とした、次世代の外国人材共生プラットフォーム
                    </p>
                </div>

                {/* Core Products Layer */}
                <div className="space-y-6">
                    <div className="relative flex justify-center">
                        <span className="bg-slate-50 px-3 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                            Core Products / コアプロダクト
                        </span>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <DashboardCard
                            title="Talent Management"
                            titleEn="人材管理ツール"
                            description=""
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
                            lpUrl="#"
                            icon={<Users className="h-6 w-6" />}
                        />

                        <DashboardCard
                            title="Support Management"
                            titleEn="支援管理ツール"
                            description=""
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
                            lpUrl="#"
                            icon={<HeartHandshake className="h-6 w-6" />}
                        />

                        <DashboardCard
                            title="Document Automation"
                            titleEn="帳票作成ツール"
                            description=""
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
                            lpUrl="#"
                            icon={<FileText className="h-6 w-6" />}
                        />
                    </div>
                </div>

                {/* Cross-Cutting Platform Layer (Moved Below Core Products) */}
                <div className="space-y-6">
                    <div className="relative flex justify-center">
                        <span className="bg-slate-50 px-3 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                            Platform Foundation / 統合基盤
                        </span>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-1">
                        <DashboardCard
                            title="TaskPorta"
                            titleEn="Cross-Product Task & BI Dashboard"
                            description=""
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
                            lpUrl="#"
                            isCrossCutting={true}
                            icon={<LayoutDashboard className="h-6 w-6" />}
                        />
                    </div>
                </div>

                {/* Gredge Services Layer (New) */}
                <div className="space-y-6">
                    <div className="relative flex justify-center">
                        <span className="bg-slate-50 px-3 text-sm font-semibold text-slate-500 uppercase tracking-wider">
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
