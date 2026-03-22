import { Meta, StoryObj } from '@storybook/angular';
import { AgendaListComponent } from 'ui';

const meta: Meta<AgendaListComponent> = {
  title: 'Organisms/Agenda List',
  component: AgendaListComponent,
  args: {
    items: [
      {
        icon: 'calendar',
        title: 'Consulta geriatrica',
        description: 'Dr. Renato, 14:30',
        meta: 'Hoje',
        badgeLabel: 'Confirmado',
        badgeVariant: 'success',
      },
      {
        icon: 'clock',
        title: 'Medicao de pressao',
        description: 'Checklist com cuidadora',
        meta: '16:00',
        badgeLabel: 'Rotina',
        badgeVariant: 'primary',
      },
    ],
  },
};

export default meta;

type Story = StoryObj<AgendaListComponent>;

export const Default: Story = {};
