import { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from 'ui';

const meta: Meta<AvatarComponent> = {
  title: 'Atoms/Avatar',
  component: AvatarComponent,
  args: {
    initials: 'SE',
    size: 'md',
    tone: 'primary',
  },
};

export default meta;

type Story = StoryObj<AvatarComponent>;

export const Default: Story = {};

export const Accent: Story = {
  args: {
    initials: 'MH',
    tone: 'accent',
  },
};
