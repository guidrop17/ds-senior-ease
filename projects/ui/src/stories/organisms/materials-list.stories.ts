import { Meta, StoryObj } from '@storybook/angular';
import { MaterialsListComponent } from 'ui';

const meta: Meta<MaterialsListComponent> = {
  title: 'Organisms/Materials List',
  component: MaterialsListComponent,
  args: {
    items: [
      {
        icon: 'book',
        title: 'Guia de alimentacao assistida',
        description: 'Boas praticas para a familia',
        meta: 'PDF atualizado',
        badgeLabel: 'Novo',
        badgeVariant: 'warning',
      },
      {
        icon: 'check',
        title: 'Checklist de seguranca domestica',
        description: 'Itens essenciais para prevencao',
        meta: 'Leitura rapida',
        badgeLabel: 'Recomendado',
        badgeVariant: 'success',
      },
    ],
  },
};

export default meta;

type Story = StoryObj<MaterialsListComponent>;

export const Default: Story = {};
