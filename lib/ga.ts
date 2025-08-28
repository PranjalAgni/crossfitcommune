export const GA_ID = "G-C20QEVTR8B";

type Params = Record<string, any>;

export function track(eventName: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  // @ts-ignore
  window.gtag?.("event", eventName, params);
}


export function trackAndNavigate(
  e: React.MouseEvent<HTMLElement>,
  url: string,
  eventName: string,
  params: Params = {}
) {
  // Let GA send the hit before leaving the page
  e.preventDefault();
  let navigated = false;
  const go = () => {
    if (!navigated) {
      navigated = true;
      window.open(url, "_blank", "noopener");
    }
  };
  // @ts-ignore
  window.gtag?.("event", eventName, {
    ...params,
    event_callback: go,
    event_timeout: 500,
  });
  
  // extra fallback
  setTimeout(go, 600);
}
