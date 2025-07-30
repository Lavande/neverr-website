'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { getMessages, type Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/language-switcher";

interface HomeContentProps {
  locale: string;
}

export function HomeContent({ locale }: HomeContentProps) {
  const validLocale: Locale = locale === 'zh' ? 'zh' : 'en';
  const messages = getMessages(validLocale);
  const currentYear = new Date().getFullYear();

  // Get localized images
  const getImagePath = (imageName: string) => {
    return validLocale === 'zh' ? `/images/${imageName}` : `/images/en/${imageName}`;
  };

  const features = [
    {
      icon: "🎯",
      title: messages.features.items[0].title,
      description: messages.features.items[0].description
    },
    {
      icon: "🎙️",
      title: messages.features.items[1].title,
      description: messages.features.items[1].description
    },
    {
      icon: "🔄",
      title: messages.features.items[2].title,
      description: messages.features.items[2].description
    },
    {
      icon: "📊",
      title: messages.features.items[3].title,
      description: messages.features.items[3].description
    },
    {
      icon: "🔔",
      title: messages.features.items[4].title,
      description: messages.features.items[4].description
    },
    {
      icon: "📱",
      title: messages.features.items[5].title,
      description: messages.features.items[5].description
    }
  ];

  const steps = [
    {
      title: messages.howItWorks.steps[0].title,
      description: messages.howItWorks.steps[0].description
    },
    {
      title: messages.howItWorks.steps[1].title,
      description: messages.howItWorks.steps[1].description
    },
    {
      title: messages.howItWorks.steps[2].title,
      description: messages.howItWorks.steps[2].description
    },
    {
      title: messages.howItWorks.steps[3].title,
      description: messages.howItWorks.steps[3].description
    }
  ];

  const screenshots = [
    {
      title: messages.screenshots.items[0].title,
      description: messages.screenshots.items[0].description,
      image: validLocale === 'zh' ? '/images/setup-goal.png' : '/images/en/set-goal.png'
    },
    {
      title: messages.screenshots.items[1].title,
      description: messages.screenshots.items[1].description,
      image: getImagePath('main-screen.png')
    },
    {
      title: messages.screenshots.items[2].title,
      description: messages.screenshots.items[2].description,
      image: getImagePath('practice.png')
    },
    {
      title: messages.screenshots.items[3].title,
      description: messages.screenshots.items[3].description,
      image: getImagePath('stats.png')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <Image
                  src="/app-icon.png"
                  alt="Neverr Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-xl text-foreground">Neverr</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">{messages.nav.features}</a>
              <a href="#philosophy" className="text-muted-foreground hover:text-foreground transition-colors">{messages.nav.howItWorks}</a>
              <a href="#screenshots" className="text-muted-foreground hover:text-foreground transition-colors">{messages.nav.screenshots}</a>
              <LanguageSwitcher currentLocale={validLocale} />
              <Button asChild>
                <a href="#download">
                  {messages.nav.downloadApp}
                </a>
              </Button>
            </div>
            
            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="px-8 py-8">
                  <div className="flex flex-col space-y-8 mt-8">
                    <a href="#features" className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-accent">{messages.mobile.features}</a>
                    <a href="#philosophy" className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-accent">{messages.mobile.howItWorks}</a>
                    <a href="#screenshots" className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-accent">{messages.mobile.screenshots}</a>
                    <a href="#download" className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-accent">{messages.nav.downloadApp}</a>
                    <div className="px-2">
                      <LanguageSwitcher currentLocale={validLocale} />
                    </div>
                    <div className="space-y-6 mt-12 px-2">
                      <Button asChild className="w-full h-12 text-base">
                        <a href="https://github.com/Lavande/neverr-app/releases" target="_blank" rel="noopener noreferrer">
                          {messages.nav.downloadAndroid}
                        </a>
                      </Button>
                      <Button asChild className="w-full h-12 text-base">
                        <a href="https://apps.apple.com/app/id6749043243" target="_blank" rel="noopener noreferrer">
                          {messages.nav.downloadIOS}
                        </a>
                      </Button>
                      <Button disabled className="w-full h-12 text-base bg-muted text-muted-foreground cursor-not-allowed">
                        {messages.mobile.googlePlay}
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
              {messages.hero.badge}
            </Badge>
            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
              <a href="https://github.com/Lavande/neverr-app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                {messages.hero.openSource}
              </a>
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="neverr-text-gradient">{messages.hero.title}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-muted-foreground mb-4">
            {messages.hero.subtitle}
          </p>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            {messages.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button asChild size="lg" className="text-base">
              <a href="#download">
                {messages.nav.downloadApp}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              <a href="#philosophy">
                {messages.hero.learnMore}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section id="philosophy" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {messages.philosophy.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {messages.philosophy.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 text-lg">✗</span>
                  </div>
                  <span className="text-lg font-medium text-muted-foreground line-through">
                    &ldquo;{messages.philosophy.wrong}&rdquo;
                  </span>
                </div>
                <p className="text-muted-foreground ml-11">
                  {messages.philosophy.wrongDesc}
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <span className="text-lg font-medium text-foreground">
                    &ldquo;{messages.philosophy.right}&rdquo;
                  </span>
                </div>
                <p className="text-muted-foreground ml-11">
                  {messages.philosophy.rightDesc}
                </p>
              </div>
            </div>
            
            <Card className="neverr-card p-8">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <CardTitle className="text-xl">{messages.philosophy.cardTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>{messages.philosophy.cardDesc}</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>{messages.philosophy.cardPoints[0]}</li>
                  <li>{messages.philosophy.cardPoints[1]}</li>
                  <li>{messages.philosophy.cardPoints[2]}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {messages.features.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {messages.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="neverr-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {messages.howItWorks.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {messages.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full neverr-gradient flex items-center justify-center text-white text-xl font-bold mb-6 mx-auto">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {messages.screenshots.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {messages.screenshots.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="group hover:scale-105 transition-all duration-300">
                {/* iPhone 16 Plus Frame */}
                <div className="relative mx-auto max-w-[260px]">
                  {/* iPhone 外框 - 简洁的黑色边框 */}
                  <div className="relative bg-black rounded-[2.8rem] p-2.5 shadow-2xl">
                    {/* iPhone 内框 */}
                    <div className="relative bg-white rounded-[2.3rem] overflow-hidden" style={{ aspectRatio: '1290/2796' }}>
                      {/* 屏幕内容区域 - 完整显示截图 */}
                      <div className="relative w-full h-full">
                        <Image
                          src={screenshot.image}
                          alt={screenshot.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* 描述文字 */}
                  <div className="text-center mt-6">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{screenshot.title}</h3>
                    <p className="text-sm text-muted-foreground">{screenshot.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div id="download" className="inline-flex items-center justify-center px-6 py-3 bg-secondary/10 text-secondary rounded-full border border-secondary/20 mb-6" style={{ scrollMarginTop: '40vh' }}>
              <span className="text-sm font-medium">{messages.screenshots.comingSoonBadge}</span>
            </div>
            <p className="text-muted-foreground mb-6">
              {messages.screenshots.comingSoonDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="https://github.com/Lavande/neverr-app/releases" target="_blank" rel="noopener noreferrer">
                  {messages.nav.downloadAndroid}
                </a>
              </Button>
              <Button asChild>
                <a href="https://apps.apple.com/app/id6749043243" target="_blank" rel="noopener noreferrer">
                  {messages.nav.downloadIOS}
                </a>
              </Button>
              <Button disabled className="bg-muted text-muted-foreground cursor-not-allowed">
                {messages.screenshots.googlePlay}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {messages.cta.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {messages.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="text-base">
              {messages.cta.followUpdates}
            </Button>
            <Button size="lg" variant="outline">
              <a href="#how-it-works">
                {messages.cta.userGuide}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg overflow-hidden">
                  <Image
                    src="/app-icon.png"
                    alt="Neverr Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-bold text-xl text-foreground">Neverr</span>
              </div>
              <p className="text-muted-foreground mb-4">
                {messages.footer.subtitle}
              </p>
              <p className="text-sm text-muted-foreground">
                {messages.footer.description}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">{messages.footer.links}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="mailto:support@neverr.app" className="hover:text-foreground transition-colors">{messages.footer.linkItems[0]}</a></li>
                <li><a href={`/${validLocale}/privacy`} className="hover:text-foreground transition-colors">{messages.footer.linkItems[1]}</a></li>
                <li><a href="https://github.com/Lavande/neverr-app" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">{messages.footer.linkItems[2]}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; {currentYear} {messages.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 