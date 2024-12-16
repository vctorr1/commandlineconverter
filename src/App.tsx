import React from 'react';
import { CommandInput } from './components/CommandInput';
import { ConversionResult } from './components/ConversionResult';
import { LanguageSwitch } from './components/LanguageSwitch';
import { ThemeSwitch } from './components/ThemeSwitch';
import { Footer } from './components/Footer';
import { Terminal } from 'lucide-react';
import { convertCommand, detectOS } from './utils/commandConverter';
import { commandData } from './data/commandData';
import { translations } from './data/translations';
import { ThemeProvider } from './contexts/ThemeContext';

function AppContent() {
  const [command, setCommand] = React.useState('');
  const [convertedCommand, setConvertedCommand] = React.useState<string | null>(null);
  const [sourceOS, setSourceOS] = React.useState<string | null>(null);
  const [language, setLanguage] = React.useState('en');

  const t = translations[language];

  React.useEffect(() => {
    if (command) {
      const detectedOS = detectOS(command);
      setSourceOS(detectedOS);
      setConvertedCommand(convertCommand(command));
    } else {
      setConvertedCommand(null);
      setSourceOS(null);
    }
  }, [command]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <LanguageSwitch
        currentLanguage={language}
        onLanguageChange={setLanguage}
      />
      <ThemeSwitch />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Terminal className="h-12 w-12 text-blue-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {t.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {t.subtitle}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
          <CommandInput 
            command={command} 
            setCommand={setCommand}
            placeholder={t.enterCommand}
          />
          <ConversionResult
            originalCommand={command}
            convertedCommand={convertedCommand}
            sourceOS={sourceOS}
            translations={t}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(commandData).map(([key, value]) => (
            <div key={key} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                {value.details.description}
              </h3>
              <div className="flex space-x-4 text-sm mb-2">
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Linux:</span>{' '}
                  <code className="bg-gray-50 dark:bg-gray-700 px-2 py-1 rounded">
                    {value.linux}
                  </code>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Windows:</span>{' '}
                  <code className="bg-gray-50 dark:bg-gray-700 px-2 py-1 rounded">
                    {value.windows}
                  </code>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t.example}: <code className="bg-gray-50 dark:bg-gray-700 px-2 py-1 rounded">
                  {value.details.options[0].example}
                </code>
              </p>
            </div>
          ))}
        </div>

        <Footer text={t.footer} />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;