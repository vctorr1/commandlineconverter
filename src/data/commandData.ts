interface CommandOption {
  flag: string;
  description: string;
  example: string;
}

interface CommandDetails {
  description: string;
  options: CommandOption[];
}

export interface Command {
  linux: string;
  windows: string;
  details: CommandDetails;
}

export const commandData: Record<string, Command> = {
  'list': {
    linux: 'ls',
    windows: 'dir',
    details: {
      description: 'Lists files and directories in the current directory',
      options: [
        {
          flag: 'ls -l',
          description: 'Show detailed list view with permissions and sizes',
          example: 'ls -l /home/user'
        },
        {
          flag: 'ls -a',
          description: 'Show hidden files',
          example: 'ls -a'
        },
        {
          flag: 'dir /w',
          description: 'Wide list format (Windows)',
          example: 'dir /w Documents'
        }
      ]
    }
  },
  'copy': {
    linux: 'cp',
    windows: 'copy',
    details: {
      description: 'Copy files or directories from one location to another',
      options: [
        {
          flag: 'cp -r',
          description: 'Copy directories recursively',
          example: 'cp -r folder1 folder2'
        },
        {
          flag: 'copy /v',
          description: 'Verify that files are copied correctly (Windows)',
          example: 'copy /v file.txt backup.txt'
        }
      ]
    }
  },
  'move': {
    linux: 'mv',
    windows: 'move',
    details: {
      description: 'Move or rename files and directories',
      options: [
        {
          flag: 'mv -i',
          description: 'Interactive mode, ask before overwrite',
          example: 'mv -i file.txt newname.txt'
        },
        {
          flag: 'move /y',
          description: 'Suppress confirmation prompt (Windows)',
          example: 'move /y file.txt C:\\Destination'
        }
      ]
    }
  },
  'delete': {
    linux: 'rm',
    windows: 'del',
    details: {
      description: 'Remove files or directories',
      options: [
        {
          flag: 'rm -rf',
          description: 'Recursively force remove directories',
          example: 'rm -rf oldfiles/'
        },
        {
          flag: 'del /s',
          description: 'Delete from subdirectories (Windows)',
          example: 'del /s *.tmp'
        }
      ]
    }
  },
  'make-dir': {
    linux: 'mkdir',
    windows: 'md',
    details: {
      description: 'Create new directories',
      options: [
        {
          flag: 'mkdir -p',
          description: 'Create parent directories if needed',
          example: 'mkdir -p path/to/new/dir'
        },
        {
          flag: 'md /s',
          description: 'Create all intermediate directories (Windows)',
          example: 'md "path\\to\\new\\dir"'
        }
      ]
    }
  }
};