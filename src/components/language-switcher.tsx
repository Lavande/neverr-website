'use client';

import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from "lucide-react";
import { type Locale } from "@/lib/i18n";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: Locale) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '');
    // Navigate to the new locale path
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <Button
        variant={currentLocale === 'zh' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => switchLanguage('zh')}
        className="text-sm"
      >
        中文
      </Button>
      <Button
        variant={currentLocale === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => switchLanguage('en')}
        className="text-sm"
      >
        EN
      </Button>
    </div>
  );
} 