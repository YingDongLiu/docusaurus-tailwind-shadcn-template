import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { EXTERNAL_LINKS, INTERNAL_LINKS } from '@site/src/lib/constants';

interface PolicyLinksProps {
  showPrivacyPolicy?: boolean;
  showTermsOfService?: boolean;
  className?: string;
  app?: 'destinotify' | 'links-plus';
}

export function PolicyLinks({ 
  showPrivacyPolicy = true, 
  showTermsOfService = true,
  className = '',
  app = 'destinotify'
}: PolicyLinksProps) {
  const {i18n} = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;
  
  const labels = {
    en: {
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service'
    },
    zh: {
      privacyPolicy: '隐私政策',
      termsOfService: '服务条款'
    },
    ja: {
      privacyPolicy: 'プライバシーポリシー',
      termsOfService: '利用規約'
    }
  };
  
  const currentLabels = labels[currentLocale] || labels.en;
  
  const privacyPolicyLink = app === 'links-plus' 
    ? INTERNAL_LINKS.LINKS_PLUS_PRIVACY_POLICY 
    : INTERNAL_LINKS.DESTINOTIFY_PRIVACY_POLICY;
  
  return (
    <div className={`flex gap-4 ${className}`}>
      {showPrivacyPolicy && (
        <a 
          href={privacyPolicyLink}
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          {currentLabels.privacyPolicy}
        </a>
      )}
      {showTermsOfService && (
        <a 
          href={EXTERNAL_LINKS.TERMS_OF_SERVICE}
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          {currentLabels.termsOfService}
        </a>
      )}
    </div>
  );
}

export function TermsOfServiceLink({ className = '' }: { className?: string }) {
  const {i18n} = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;
  
  const labels = {
    en: 'Terms of Service',
    zh: '服务条款',
    ja: '利用規約'
  };
  
  const label = labels[currentLocale] || labels.en;
  
  return (
    <a 
      href={EXTERNAL_LINKS.TERMS_OF_SERVICE}
      className={`text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}