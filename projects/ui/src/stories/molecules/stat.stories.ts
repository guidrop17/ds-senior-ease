import { Meta, StoryObj } from '@storybook/angular';
import { StatComponent } from 'ui';

const meta: Meta<StatComponent> = {
  title: 'Molecules/Stat',
  component: StatComponent,
  args: {
    label: 'Consultas confirmadas',
    value: '12',
    description: 'Semana atual',
    tone: 'primary',
  },
};

export default meta;

type Story = StoryObj<StatComponent>;

export const Default: Story = {};
