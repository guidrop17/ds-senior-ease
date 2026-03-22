import { Meta, StoryObj } from '@storybook/angular';
import { HeroCardComponent } from 'ui';

const meta: Meta<HeroCardComponent> = {
  title: 'Organisms/Hero Card',
  component: HeroCardComponent,
  args: {
    eyebrow: 'Senior Ease UI',
    title: 'Design System escalavel para o workspace Angular.',
    description: 'Componentes standalone organizados por Atomic Design e estilizados via tokens.',
    primaryActionLabel: 'Explorar componentes',
    secondaryActionLabel: 'Abrir Storybook',
    highlightLabel: 'Tokens ativos',
    highlightValue: '05 grupos',
  },
};

export default meta;

type Story = StoryObj<HeroCardComponent>;

export const Default: Story = {};
