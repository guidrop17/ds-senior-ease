import { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from 'ui';

const meta: Meta<BadgeComponent> = {
  title: 'Atoms/Badge',
  component: BadgeComponent,
  args: {
    label: 'Status',
    variant: 'primary',
  },
};

export default meta;

type Story = StoryObj<BadgeComponent>;

export const Default: Story = {};

export const Success: Story = {
  args: {
    label: 'Confirmado',
    variant: 'success',
  },
};
