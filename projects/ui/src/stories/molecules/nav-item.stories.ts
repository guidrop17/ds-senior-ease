import { Meta, StoryObj } from '@storybook/angular';
import { NavItemComponent } from 'ui';

const meta: Meta<NavItemComponent> = {
  title: 'Molecules/Nav Item',
  component: NavItemComponent,
  args: {
    label: 'Visao geral',
    description: 'Resumo do cuidado',
    icon: 'home',
    active: true,
  },
};

export default meta;

type Story = StoryObj<NavItemComponent>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    label: 'Mensagens',
    description: 'Em breve',
    icon: 'message',
    disabled: true,
    ariaLabel: 'Mensagens indisponivel',
  },
};
