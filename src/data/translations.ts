interface Translations {
  [key: string]: {
    title: string;
    subtitle: string;
    enterCommand: string;
    commandNotRecognized: string;
    description: string;
    commonOptions: string;
    example: string;
    linuxCommand: string;
    windowsCommand: string;
    footer: string;
  };
}

export const translations: Translations = {
  en: {
    title: 'Command Line Converter',
    subtitle: 'Convert commands between Linux and Windows Command Prompt with detailed explanations',
    enterCommand: 'Enter your command...',
    commandNotRecognized: 'Command not recognized or no conversion available.',
    description: 'Description',
    commonOptions: 'Common Options',
    example: 'Example',
    linuxCommand: 'Linux Command:',
    windowsCommand: 'Windows Command:',
    footer: 'Created by Víctor Ríos'
  },
  es: {
    title: 'Conversor de Comandos',
    subtitle: 'Convierte comandos entre Linux y Windows Command Prompt con explicaciones detalladas',
    enterCommand: 'Ingresa tu comando...',
    commandNotRecognized: 'Comando no reconocido o conversión no disponible.',
    description: 'Descripción',
    commonOptions: 'Opciones Comunes',
    example: 'Ejemplo',
    linuxCommand: 'Comando Linux:',
    windowsCommand: 'Comando Windows:',
    footer: 'Creado por Víctor Ríos'
  }
};