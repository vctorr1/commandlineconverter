# Command Line Converter

A modern web application that helps users convert commands between Linux and Windows Command Prompt, providing detailed explanations and examples for each command.

![Command Line Converter](https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1000)

## Features

- 🔄 Bi-directional command conversion between Linux and Windows
- 📝 Detailed command descriptions and usage examples
- 🌍 Multilingual support (English and Spanish)
- 🌓 Dark/Light theme support
- 💻 Responsive design for all devices
- ⚡ Real-time command conversion
- 📚 Comprehensive command documentation

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Lucide React Icons
- Vite

## Project Structure

```
src/
├── components/           # React components
│   ├── CommandInput.tsx    # Command input field component
│   ├── CommandDetails.tsx  # Command details display
│   ├── ConversionResult.tsx# Conversion result display
│   ├── Footer.tsx         # Footer component
│   ├── LanguageSwitch.tsx # Language switcher
│   └── ThemeSwitch.tsx    # Theme switcher
├── contexts/            # React contexts
│   └── ThemeContext.tsx   # Theme management context
├── data/               # Static data
│   ├── commandData.ts    # Command definitions and details
│   └── translations.ts   # Language translations
├── utils/              # Utility functions
│   └── commandConverter.ts # Command conversion logic
└── App.tsx             # Main application component
```

## Supported Commands

The application currently supports the following commands:

1. **List Directory Contents**
   - Linux: `ls`
   - Windows: `dir`

2. **Copy Files**
   - Linux: `cp`
   - Windows: `copy`

3. **Move/Rename Files**
   - Linux: `mv`
   - Windows: `move`

4. **Delete Files**
   - Linux: `rm`
   - Windows: `del`

5. **Create Directory**
   - Linux: `mkdir`
   - Windows: `md`

Each command includes:
- Detailed description
- Common options and flags
- Usage examples

## Features in Detail

### Command Conversion
- Real-time command detection and conversion
- Support for basic command syntax
- Detailed explanation of command equivalents

### Multilingual Support
- English and Spanish language support
- Real-time language switching
- Translated UI elements and command descriptions

### Theme Support
- Light and dark theme options
- System-wide theme persistence
- Smooth theme transitions

### Responsive Design
- Mobile-first approach
- Adaptive layout for all screen sizes
- Optimized command display for small screens

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Start development server
npm run dev
```

### Project Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Code Organization

### Components
Each component follows these principles:
- Single responsibility
- Strong typing with TypeScript
- Proper prop validation
- Clear separation of concerns

### Context Management
- Theme context for application-wide theme management
- Proper context initialization and error handling
- Type-safe context usage

### Utilities
- Pure functions for command conversion
- Centralized command data management
- Type-safe command handling

### Styling
- Tailwind CSS for utility-first styling
- Dark mode support via classes
- Responsive design utilities

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Created by Víctor Ríos Recio 

## Acknowledgments

- Lucide React for the beautiful icons
- Tailwind CSS for the utility-first CSS framework
- React team for the amazing framework