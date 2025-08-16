import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface AuthorInfoProps {
  className?: string;
}

export function AuthorInfo({ className = '' }: AuthorInfoProps) {
  const {i18n} = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;
  
  const labels = {
    en: {
      developer: 'Developer',
      developedBy: 'Developed by'
    },
    zh: {
      developer: '开发者',
      developedBy: '开发者'
    },
    ja: {
      developer: '開発者',
      developedBy: '開発者'
    }
  };
  
  const currentLabels = labels[currentLocale] || labels.en;
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="https://avatars.githubusercontent.com/u/143983494?v=4"
        alt="Ryu Eito"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {currentLabels.developedBy}
        </span>
        <a 
          href="/about"
          className="font-medium text-[var(--ifm-link-color)] hover:text-[var(--ifm-link-hover-color)] no-underline hover:no-underline"
        >
          Ryu Eito
        </a>
      </div>
    </div>
  );
}