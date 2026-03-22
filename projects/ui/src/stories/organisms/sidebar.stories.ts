import { Meta, StoryObj } from '@storybook/angular';
import { SidebarComponent } from 'ui';

const meta: Meta<SidebarComponent> = {
  title: 'Organisms/Sidebar',
  component: SidebarComponent,
  args: {
    brand: 'Senior Ease',
    subtitle: 'Atomic Design System',
    userName: 'Maria Helena',
    userRole: 'Paciente acompanhada',
    userInitials: 'MH',
    navAriaLabel: 'Navegacao principal',
    mobileNavAriaLabel: 'Navegacao inferior',
    items: [
      {
        label: 'Visao geral',
        icon: 'home',
        description: 'Resumo do cuidado',
        active: true,
        ariaLabel: 'Navegar para visao geral',
      },
      {
        label: 'Agenda',
        icon: 'calendar',
        description: 'Consultas e visitas',
        ariaLabel: 'Navegar para agenda',
      },
      {
        label: 'Materiais',
        icon: 'book',
        description: 'Guias e apoio',
        ariaLabel: 'Navegar para materiais',
      },
      {
        label: 'Mensagens',
        icon: 'message',
        description: 'Em breve',
        disabled: true,
        ariaLabel: 'Mensagens indisponivel',
      },
    ],
  },
};

export default meta;

type Story = StoryObj<SidebarComponent>;

export const Default: Story = {
  render: (args: Partial<SidebarComponent>) => ({
    props: args,
    template: `
      <div style="height: 100vh; max-width: 288px;">
        <ui-sidebar
          [brand]="brand"
          [subtitle]="subtitle"
          [userName]="userName"
          [userRole]="userRole"
          [userInitials]="userInitials"
          [navAriaLabel]="navAriaLabel"
          [mobileNavAriaLabel]="mobileNavAriaLabel"
          [items]="items"
        ></ui-sidebar>
      </div>
    `,
  }),
};

export const MobileBottomNav: Story = {
  render: (args: Partial<SidebarComponent>) => ({
    props: args,
    template: `
      <style>
        .sb-mobile-demo .ui-sidebar__desktop {
          display: none !important;
        }
        .sb-mobile-demo .ui-sidebar__mobile-nav {
          display: block !important;
          position: relative !important;
          border: var(--ui-border-width) solid var(--ui-color-border);
          border-radius: var(--ui-radius-lg);
          margin-top: var(--ui-space-4);
        }
      </style>
      <div class="sb-mobile-demo" style="max-width: 390px; margin: 0 auto; padding: 24px;">
        <ui-sidebar
          [brand]="brand"
          [subtitle]="subtitle"
          [userName]="userName"
          [userRole]="userRole"
          [userInitials]="userInitials"
          [navAriaLabel]="navAriaLabel"
          [mobileNavAriaLabel]="mobileNavAriaLabel"
          [items]="items"
        ></ui-sidebar>
      </div>
    `,
  }),
};
