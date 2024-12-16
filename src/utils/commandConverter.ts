import { commandData } from '../data/commandData';

export const detectOS = (command: string): 'linux' | 'windows' | null => {
  for (const value of Object.values(commandData)) {
    if (command.startsWith(value.linux)) return 'linux';
    if (command.startsWith(value.windows)) return 'windows';
  }
  return null;
};

export const convertCommand = (command: string): string | null => {
  const os = detectOS(command);
  if (!os) return null;

  const targetOS = os === 'linux' ? 'windows' : 'linux';
  
  for (const value of Object.values(commandData)) {
    if (command.startsWith(value[os])) {
      return command.replace(value[os], value[targetOS]);
    }
  }
  
  return null;
};

export const findCommandDetails = (command: string): { command: string, details: any } | null => {
  const os = detectOS(command);
  if (!os) return null;

  for (const [key, value] of Object.entries(commandData)) {
    if (command.startsWith(value[os])) {
      return { command: key, details: value };
    }
  }
  
  return null;
};