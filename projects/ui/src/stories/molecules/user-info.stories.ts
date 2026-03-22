import { Meta, StoryObj } from '@storybook/angular';
import { UserInfoComponent } from 'ui';

const meta: Meta<UserInfoComponent> = {
  title: 'Molecules/User Info',
  component: UserInfoComponent,
  args: {
    name: 'Maria Helena',
    role: 'Paciente acompanhada',
    initials: 'MH',
    ariaLabel: 'Informacoes de usuario de Maria Helena',
  },
};

export default meta;

type Story = StoryObj<UserInfoComponent>;

export const Default: Story = {};
