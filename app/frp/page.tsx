import type { Metadata } from "next";
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  FileDown,
  FolderOpen,
  Play,
  Search,
  Settings,
  Shield,
  Smartphone,
  Store,
} from "lucide-react";

export const metadata: Metadata = {
  title: "FRP Bypass Tools — RaymonJohns",
  description:
    "Direct FRP bypass APK and app links for Android devices, recreated from the FRPFile bypass list.",
};

type FrpTool = {
  label: string;
  href: string;
  icon: typeof Download;
};

const tools: FrpTool[] = [
  {
    label: "Open Set Lock Screen",
    href: "intent://com.google.android.gms/#Intent;scheme=promote_smartlock_scheme;end",
    icon: Smartphone,
  },
  {
    label: "Open Galaxy Store",
    href: "intent://com.sec.android.app.samsungapps/#Intent;scheme=android-app;end",
    icon: Store,
  },
  {
    label: "Download Alliance Shield at Galaxy Store",
    href: "https://galaxystore.samsung.com/detail/com.rrivenllc.shieldx?session_id=W_0a719781bf2f739158262639f4c63d35",
    icon: Download,
  },
  {
    label: "Open Alliance Shield",
    href: "intent://com.rrivenllc.shieldx/#Intent;scheme=android-app;end",
    icon: Shield,
  },
  {
    label: "Open Google Quick Search Box",
    href: "intent://com.google.android.googlequicksearchbox/#Intent;scheme=android-app;end",
    icon: Search,
  },
  {
    label: "Open Setting App",
    href: "intent://com.android.settings/#Intent;scheme=android-app;end",
    icon: Settings,
  },
  {
    label: "Open Google Login Activity",
    href: "intent://com.google.android.gsf.login.LoginActivity/#Intent;scheme=android-app;end",
    icon: Search,
  },
  {
    label: "Open Galaxy Store Settings",
    href: "https://galaxy.store/setting",
    icon: Store,
  },
  {
    label: "Samsung Internet App",
    href: "https://apps.samsung.com/appquery/appDetail.as?appId=com.sec.android.app.sbrowser&cld-000005006635",
    icon: Store,
  },
  {
    label: "Open Chrome App",
    href: "intent://com.android.chrome/#Intent;scheme=android-app;end",
    icon: Search,
  },
  {
    label: "Open Youtube App",
    href: "intent://com.google.android.youtube/#Intent;scheme=android-app;end",
    icon: Play,
  },
  {
    label: "Call Support",
    href: "tel:100-000-000/#Intent;scheme=android-app;end",
    icon: Smartphone,
  },
  {
    label: "Open S9launcher App",
    href: "https://galaxystore.samsung.com/detail/com.s9launcher.dir.launcher",
    icon: FolderOpen,
  },
  {
    label: "Alliance Shield.apk",
    href: "https://frpfile.com/wp-content/uploads/apk/Alliance%20Shield%20%5BApp%20Manager%5D_0.7.54.apk",
    icon: FileDown,
  },
  {
    label: "FRPFILE SMS v2.apk",
    href: "http://www.mediafire.com/file/4ub1tavab8csp2y/FRPFILE_SMS_v2.apk/file",
    icon: FileDown,
  },
  {
    label: "Google Setting.apk",
    href: "https://raw.githubusercontent.com/vnrom/bypass/master/Google_Setting.apk",
    icon: Download,
  },
  {
    label: "BypassFRP-1.0.apk",
    href: "https://raw.githubusercontent.com/vnrom/bypass/master/FRP_Bypass.apk",
    icon: Download,
  },
  {
    label: "Google-Account-Manager-5.apk",
    href: "https://raw.githubusercontent.com/vnrom/bypass/master/Android_5_GAM.apk",
    icon: Download,
  },
  {
    label: "Google-Account-Manager-6.apk",
    href: "https://raw.githubusercontent.com/vnrom/bypass/master/Android_6_GAM.apk",
    icon: Download,
  },
  {
    label: "Google-Account-Manager-8, 9, 10.apk",
    href: "https://raw.githubusercontent.com/vnrom/bypass/master/Android_8-9-10_GAM.apk",
    icon: Download,
  },
  {
    label: "QuickShortcutMaker 2.4.0",
    href: "https://raw.githubusercontent.com/vnrom/bypass/master/QuickShortcutMaker.apk",
    icon: Download,
  },
  {
    label: "Apex_Launcher.apk",
    href: "https://raw.githubusercontent.com/vnrom/bypass/master/Apex_Launcher.apk",
    icon: Download,
  },
  {
    label: "Smart switch.apk",
    href: "https://github.com/addrom/bypass/raw/master/Smart_Switch_Mobile.apk",
    icon: Download,
  },
  {
    label: "Setting.apk",
    href: "https://raw.githubusercontent.com/vnrom/bypass/master/Setting.apk",
    icon: Download,
  },
  {
    label: "Test_DPC.apk",
    href: "https://raw.githubusercontent.com/vnrom/bypass/master/Test_DPC.apk",
    icon: Download,
  },
  {
    label: "ES_File_Explorer.apk",
    href: "https://raw.githubusercontent.com/vnrom/bypass/master/ES_File_Explorer.apk",
    icon: Download,
  },
];

export default function FrpPage() {
  return (
    <main className="min-h-screen bg-[#f3f5f7] px-4 py-6 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-[14px] border border-slate-200 bg-white/90 p-3 shadow-[0_8px_24px_rgba(15,23,42,0.04)] sm:p-5">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {tools.map(({ label, href, icon: Icon }) => (
              <div
                key={label}
                className="w-full flex-[1_1_220px] min-[560px]:w-[calc(50%-0.5rem)] lg:flex-[1_1_260px]"
              >
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  download={
                    href.startsWith("http") &&
                    !href.startsWith("https://galaxystore")
                      ? true
                      : undefined
                  }
                  className="flex h-full items-center gap-2 rounded-[10px] border border-slate-200 bg-slate-50 px-3 py-2 text-sm leading-relaxed text-slate-700 transition-colors hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 sm:text-[15px]"
                >
                  <span className="mt-0.5 inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full bg-sky-500/80" />
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-[4px] border border-slate-200 bg-white text-[11px] text-slate-600">
                    <Icon size={12} />
                  </span>
                  <span className="flex-1 break-words">{label}</span>
                  {href.startsWith("http") ? (
                    <ExternalLink
                      size={12}
                      className="shrink-0 text-slate-400"
                    />
                  ) : (
                    <ArrowUpRight
                      size={12}
                      className="shrink-0 text-slate-400"
                    />
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
