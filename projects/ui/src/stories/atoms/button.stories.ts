import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from 'ui';

const meta: Meta<ButtonComponent> = {
  title: 'Atoms/Button',
  component: ButtonComponent,
  args: {
    label: 'Primary action',
    variant: 'primary',
  },
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Default: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary action',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Ghost action',
  },
};

export const AccessibleToggle: Story = {
  args: {
    label: 'Leitura em voz alta',
    variant: 'secondary',
    ariaLabel: 'Alternar leitura em voz alta',
    ariaPressed: true,
  },
};
