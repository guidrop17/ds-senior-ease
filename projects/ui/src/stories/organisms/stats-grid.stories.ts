import { Meta, StoryObj } from '@storybook/angular';
import { StatsGridComponent } from 'ui';

const meta: Meta<StatsGridComponent> = {
  title: 'Organisms/Stats Grid',
  component: StatsGridComponent,
  args: {
    items: [
      { label: 'Consultas confirmadas', value: '12', description: 'Semana atual', tone: 'primary' },
      { label: 'Planos revisados', value: '08', description: 'Ultimos 7 dias', tone: 'success' },
      { label: 'Alertas ativos', value: '03', description: 'Acompanhamento diario', tone: 'warning' },
    ],
  },
};

export default meta;

type Story = StoryObj<StatsGridComponent>;

export const Default: Story = {};
