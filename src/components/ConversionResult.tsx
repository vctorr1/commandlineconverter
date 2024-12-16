import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CommandDetails } from './CommandDetails';
import { findCommandDetails } from '../utils/commandConverter';

interface ConversionResultProps {
  originalCommand: string;
  convertedCommand: string | null;
  sourceOS: string | null;
  translations: {
    commandNotRecognized: string;
    linuxCommand: string;
    windowsCommand: string;
  };
}

export function ConversionResult({ 
  originalCommand, 
  convertedCommand, 
  sourceOS,
  translations: t
}: ConversionResultProps) {
  if (!originalCommand) return null;

  const targetOS = sourceOS === 'linux' ? 'Windows' : sourceOS === 'windows' ? 'Linux' : null;
  const commandInfo = sourceOS ? findCommandDetails(originalCommand) : null;

  return (
    <div className="mt-6">
      {convertedCommand ? (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between space-x-4">
              <div className="flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {sourceOS === 'linux' ? t.linuxCommand : t.windowsCommand}
                </p>
                <code className="mt-1 block text-sm sm:text-base font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded">
                  {originalCommand}
                </code>
              </div>
              <ArrowRight className="h-6 w-6 text-gray-400 dark:text-gray-500 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {sourceOS === 'linux' ? t.windowsCommand : t.linuxCommand}
                </p>
                <code className="mt-1 block text-sm sm:text-base font-mono bg-gray-50 dark:bg-gray-700 p-2 rounded">
                  {convertedCommand}
                </code>
              </div>
            </div>
          </div>
          
          {commandInfo && sourceOS && (
            <CommandDetails 
              command={commandInfo.details} 
              sourceOS={sourceOS}
              translations={t}
            />
          )}
        </div>
      ) : (
        <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-700 dark:text-yellow-200">
                {t.commandNotRecognized}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}