import { SITE } from '~/utils/config';

/** */
export const getCanonical = (path = ''): string | URL => {
  const url = String(new URL(path, SITE.site));
  if (SITE.trailingSlash == false && path && url.endsWith('/')) {
    return url.slice(0, -1);
  } else if (SITE.trailingSlash == true && path && !url.endsWith('/')) {
    return url + '/';
  }
  return url;
};

export const calculateLaunchDate = (launchDate: Date) => {
  const miliLaunchTime = launchDate.getTime();
  const miliNow = new Date().getTime();
  if (miliNow > miliLaunchTime) {
    return { months: 0, days: 0, hours: 0 };
  }

  const remainHours = Math.ceil((miliLaunchTime - miliNow) / 1000 / 3600);

  const months = Math.floor(remainHours / 24 / 30);
  const days = Math.floor(remainHours / 24) % 30;
  const hours = remainHours % 24;

  return { months, days, hours };
};
