import { PrismTheme } from "prism-react-renderer";
import { DocusaurusContext, DocusaurusConfig } from "@docusaurus/types";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export type ColorModeConfig = {
  defaultMode?: "light" | "dark";
  disableSwitch?: boolean;
  switchConfig?: {
    darkIcon?: string;
    darkIconStyle?: string;
    lightIcon?: string;
    lightIconStyle?: string;
  };
};

export type MetadataConfig = {
  id?: string;
  name?: string;
  property?: string;
  content?: string;
  itemprop?: string;
};

export type LogoConfig = {
  alt?: string;
  src: string;
  srcDark?: string;
  href?: string;
  target?: string;
};

export type FooterLinkConfig = {
  title?: string;
  icon?: string;
  items?: Array<{
    to?: string;
    href?: string;
    html?: string;
    label?: string;
    icon?: string;
    prependBaseUrlToHref?: boolean;
  }>;
};

export type FooterIconLinkConfig = {
  icon: string;
  to?: string;
  href?: string;
  description?: string;
  prependBaseUrlToHref?: boolean;
};

export type FooterConfig = {
  copyright?: string;
  links?: Array<FooterLinkConfig>;
  iconLinks?: Array<FooterIconLinkConfig>;
};

export type PrismConfig = {
  theme?: PrismTheme;
  darkTheme?: PrismTheme;
  defaultLanguage?: string;
  additionalLanguages?: string[];
};

export type ThemeConfig = {
  colorMode?: ColorModeConfig;
  metadatas?: Array<MetadataConfig>;
  logo: LogoConfig;
  footer?: FooterConfig;
  prism?: PrismConfig;
  tailwindConfig?: { [key: string]: any };
  customCss?: string | string[];
};

export function useSiteConfig(): DocusaurusConfig {
  const ctx = useDocusaurusContext() as DocusaurusContext;
  return ctx.siteConfig;
}

export default function useThemeConfig(): ThemeConfig {
  return useSiteConfig().themeConfig as ThemeConfig;
}