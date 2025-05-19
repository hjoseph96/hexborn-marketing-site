import merge from 'lodash.merge';

import type { MetaData } from '~/types';
import siteConfig from '../config.json';

export interface SiteConfig {
  name: string;
  site?: string;
  base?: string;
  trailingSlash?: boolean;
  googleSiteVerificationId?: string;
  launchDate: string;
}
export interface MetaDataConfig extends Omit<MetaData, 'title'> {
  title?: {
    default: string;
    template: string;
  };
}

const config = siteConfig as any;

const DEFAULT_SITE_NAME = 'Hexborn | Indie Action RPG';

const getSite = () => {
  const _default = {
    name: DEFAULT_SITE_NAME,
    site: undefined,
    base: '/',
    trailingSlash: false,

    googleSiteVerificationId: '',
    launchDate: '',
  };

  return merge({}, _default, config?.site ?? {}) as SiteConfig;
};

const getMetadata = () => {
  const siteConfig = getSite();

  const _default = {
    title: {
      default: siteConfig?.name || DEFAULT_SITE_NAME,
      template: '%s',
    },
    description: '',
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      type: 'website',
    },
  };

  return merge({}, _default, config?.metadata ?? {}) as MetaDataConfig;
};

export const SITE = getSite();
export const METADATA = getMetadata();
