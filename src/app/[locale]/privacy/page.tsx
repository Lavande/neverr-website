import { getMessages, type Locale } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Shield, Database, Wifi, Lock, UserCheck, Server, Clock, Mail } from "lucide-react";

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  const validLocale: Locale = locale === 'zh' ? 'zh' : 'en';
  const messages = await getMessages(validLocale);

  const sections = [
    {
      key: 'noDataCollection',
      icon: Shield,
      color: 'bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400'
    },
    {
      key: 'localStorage',
      icon: Database,
      color: 'bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400'
    },
    {
      key: 'noInternetRequired',
      icon: Wifi,
      color: 'bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400'
    },
    {
      key: 'dataTypes',
      icon: Lock,
      color: 'bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-400'
    },
    {
      key: 'dataControl',
      icon: UserCheck,
      color: 'bg-teal-50 text-teal-600 dark:bg-teal-950 dark:text-teal-400'
    },
    {
      key: 'thirdPartyServices',
      icon: Server,
      color: 'bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400'
    },
    {
      key: 'dataRetention',
      icon: Clock,
      color: 'bg-yellow-50 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-400'
    },
    {
      key: 'updates',
      icon: Clock,
      color: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400'
    },
    {
      key: 'contact',
      icon: Mail,
      color: 'bg-pink-50 text-pink-600 dark:bg-pink-950 dark:text-pink-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-3 py-1 text-sm">
            <Shield className="w-4 h-4 mr-2" />
            {messages.privacy.title}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {messages.privacy.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
            {messages.privacy.lastUpdated}
          </p>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {messages.privacy.intro}
          </p>
        </div>

        {/* Privacy Guarantee Banner */}
        <Card className="mb-8 border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-1">
                  100% Privacy Guaranteed
                </h3>
                <p className="text-green-700 dark:text-green-300">
                  {locale === 'zh' 
                    ? "Neverr 完全离线运行，不收集任何个人数据，确保您的隐私安全。"
                    : "Neverr operates completely offline and collects no personal data, ensuring your privacy and security."
                  }
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Policy Sections */}
        <div className="space-y-6">
          {sections.map((section) => {
            const IconComponent = section.icon;
            const sectionData = messages.privacy[section.key as keyof typeof messages.privacy] as {
              title: string;
              content: string;
              items?: string[];
            };
            
            return (
              <Card key={section.key} className="border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${section.color} flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xl text-gray-900 dark:text-white">
                      {sectionData.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {sectionData.content}
                  </p>
                  
                  {sectionData.items && (
                    <ul className="space-y-2 ml-4">
                      {sectionData.items.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Separator className="my-12" />

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {locale === 'zh' 
              ? "此隐私政策确保您使用 Neverr 时的完全隐私保护。"
              : "This Privacy Policy ensures complete privacy protection when using Neverr."
            }
          </p>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: PrivacyPageProps) {
  const { locale } = await params;
  const validLocale: Locale = locale === 'zh' ? 'zh' : 'en';
  const messages = await getMessages(validLocale);
  const baseUrl = "https://neverr.app";

  return {
    title: messages.metadata.privacy.title,
    description: messages.metadata.privacy.description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${validLocale}/privacy`,
      languages: {
        en: "/en/privacy",
        zh: "/zh/privacy",
        "x-default": "/en/privacy",
      },
    },
    openGraph: {
      title: messages.metadata.privacy.title,
      description: messages.metadata.privacy.description,
      url: `${baseUrl}/${validLocale}/privacy`,
      siteName: "Neverr",
      locale: validLocale === "zh" ? "zh_CN" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: messages.metadata.privacy.title,
      description: messages.metadata.privacy.description,
    },
  };
} 