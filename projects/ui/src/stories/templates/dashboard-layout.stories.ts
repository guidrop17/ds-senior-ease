import { Meta, StoryObj } from '@storybook/angular';
import { DashboardLayoutComponent } from 'ui';

const meta: Meta<DashboardLayoutComponent> = {
  title: 'Templates/Dashboard Layout',
  component: DashboardLayoutComponent,
};

export default meta;

type Story = StoryObj<DashboardLayoutComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <ui-dashboard-layout>
        <section sidebar style="padding: var(--ui-space-6); background: var(--ui-color-surface); height: 100%;">
          Sidebar slot
        </section>
        <section header style="padding: var(--ui-space-4); background: var(--ui-color-surface); border-radius: var(--ui-radius-md);">
          Header slot
        </section>
        <section style="padding: var(--ui-space-6); background: var(--ui-color-surface); border-radius: var(--ui-radius-lg);">
          Main content slot
        </section>
      </ui-dashboard-layout>
    `,
  }),
};

export const ResponsiveShell: Story = {
  render: () => ({
    template: `
      <ui-dashboard-layout>
        <section sidebar style="padding: var(--ui-space-6); background: var(--ui-color-surface); height: 100%;">
          Menu adaptativo (lateral no desktop, inferior no mobile)
        </section>
        <section header style="padding: var(--ui-space-4); background: var(--ui-color-surface); border-radius: var(--ui-radius-md);">
          Header responsivo
        </section>
        <section style="padding: var(--ui-space-6); background: var(--ui-color-surface); border-radius: var(--ui-radius-lg); min-height: 40vh;">
          Conteudo principal com espaco reservado para o menu inferior no mobile
        </section>
      </ui-dashboard-layout>
    `,
  }),
};
