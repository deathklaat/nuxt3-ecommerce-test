import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

export const useResolution = () => {
  const breakpoints = useBreakpoints(breakpointsTailwind);
  const isTabletOrDesktop = breakpoints.greater('sm');
  const isMobile = breakpoints.smallerOrEqual('sm');

  return { isMobile, isTabletOrDesktop };
};
