import { Meta, StoryObj } from '@storybook/angular';
import { IconComponent } from 'ui';

const meta: Meta<IconComponent> = {
  title: 'Atoms/Icon',
  component: IconComponent,
  args: {
    name: 'home',
    decorative: true,
  },
};

export default meta;

type Story = StoryObj<IconComponent>;

export const Default: Story = {};

export const Calendar: Story = {
  args: {
    name: 'calendar',
  },
};

export const Informative: Story = {
  args: {
    name: 'bell',
    decorative: false,
    ariaLabel: 'Notificacoes',
  },
};
