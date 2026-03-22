import { Meta, StoryObj } from '@storybook/angular';
import { ListItemComponent } from 'ui';

const meta: Meta<ListItemComponent> = {
  title: 'Molecules/List Item',
  component: ListItemComponent,
  args: {
    title: 'Consulta geriatrica',
    description: 'Dr. Renato, 14:30',
    meta: 'Hoje',
    badgeLabel: 'Confirmado',
    badgeVariant: 'success',
    icon: 'calendar',
    ariaLabel: 'Consulta geriatrica hoje as 14 e 30 confirmada',
  },
};

export default meta;

type Story = StoryObj<ListItemComponent>;

export const Default: Story = {};
