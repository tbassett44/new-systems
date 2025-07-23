
import * as amplitude from '@amplitude/analytics-browser';

// Initialize Amplitude
const AMPLITUDE_API_KEY = '4b5e2c605c0ff3c3bb65191faa1b5d70';

// Only track in production or when explicitly enabled
const isTrackingEnabled = import.meta.env.PROD || import.meta.env.VITE_ENABLE_ANALYTICS === 'true';

export const initializeAmplitude = () => {
  if (!isTrackingEnabled) {
    console.log('Analytics tracking disabled in development');
    return;
  }

  amplitude.init(AMPLITUDE_API_KEY, undefined, {
    defaultTracking: {
      attribution: false,
      fileDownloads: false,
      formInteractions: false,
      pageViews: false, // We'll handle page views manually
      sessions: true,
    },
  });
};

export const identifyUser = (userId: string, userProperties?: Record<string, any>) => {
  if (!isTrackingEnabled) return;
  
  amplitude.setUserId(userId);
  if (userProperties) {
    amplitude.identify(new amplitude.Identify().set(userProperties));
  }
};

export const resetUser = () => {
  if (!isTrackingEnabled) return;
  amplitude.reset();
};

// Event tracking functions
export const trackPageView = (pagePath: string, pageTitle?: string, additionalProps?: Record<string, any>) => {
  if (!isTrackingEnabled) return;
  
  amplitude.track('page_view', {
    page_path: pagePath,
    page_title: pageTitle || document.title,
    is_authenticated: !!additionalProps?.isAuthenticated,
    ...additionalProps,
  });
};

export const trackCommentModeToggle = (isActive: boolean, currentPage: string) => {
  if (!isTrackingEnabled) return;
  
  amplitude.track('comment_mode_toggled', {
    new_state: isActive ? 'on' : 'off',
    current_page: currentPage,
  });
};

export const trackCommentsViewed = (commentCount: number, currentPage: string) => {
  if (!isTrackingEnabled) return;
  
  amplitude.track('comments_viewed', {
    comment_count: commentCount,
    current_page: currentPage,
  });
};

export const trackCommentAdded = (paragraphType: string, currentPage: string) => {
  if (!isTrackingEnabled) return;
  
  amplitude.track('comment_added', {
    paragraph_type: paragraphType,
    current_page: currentPage,
  });
};

export const trackExternalLinkClick = (destinationUrl: string, sourcePage: string, linkText?: string) => {
  if (!isTrackingEnabled) return;
  
  amplitude.track('external_link_clicked', {
    destination_url: destinationUrl,
    source_page: sourcePage,
    link_text: linkText,
  });
};
