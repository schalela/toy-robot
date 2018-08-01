import chalk from 'chalk';
import figlet from 'figlet';

export const info = (text, color = 'green') => {
  console.log(chalk[color](text));
};

export const title = () => {
  console.log(
    chalk.blue(
      figlet.textSync('IRESS - Toy Robot', { horizontalLayout: 'full' })
    )
  );
};
