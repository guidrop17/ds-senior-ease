import { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from 'ui';

const meta: Meta<HeaderComponent> = {
  title: 'Organisms/Header',
  component: HeaderComponent,
  args: {
    badgeLabel: 'Playground',
    title: 'Painel de acompanhamento',
    subtitle: 'Biblioteca ui consumida a partir da API publica.',
    actionLabel: 'Nova visita',
  },
};

export default meta;

type Story = StoryObj<HeaderComponent>;

export const Default: Story = {};
