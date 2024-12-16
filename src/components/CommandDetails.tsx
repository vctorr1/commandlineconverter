import React from 'react';
import { Command } from '../data/commandData';
import { Info } from 'lucide-react';

interface CommandDetailsProps {
  command: Command;
  sourceOS: 'linux' | 'windows';
  translations: {
    description: string;
    commonOptions: string;
    example: string;
  };
}

export function CommandDetails({ command, sourceOS, translations: t }: CommandDetailsProps) {
  return (
    <div className="mt-4 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg">
      <div className="flex items-start space-x-2">
        <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="font-medium text-gray-900 dark:text-white">{t.description}</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {command.details.description}
          </p>
          
          <h4 className="font-medium text-gray-900 dark:text-white mt-4">
            {t.commonOptions}
          </h4>
          <ul className="mt-2 space-y-3">
            {command.details.options.map((option, index) => (
              <li key={index} className="text-sm">
                <code className="bg-white dark:bg-gray-700 px-2 py-1 rounded border border-gray-200 dark:border-gray-600">
                  {option.flag}
                </code>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  {option.description}
                </p>
                <p className="mt-1 text-gray-500 dark:text-gray-400 italic">
                  {t.example}: {option.example}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}