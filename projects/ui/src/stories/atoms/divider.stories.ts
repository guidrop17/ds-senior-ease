import { Meta, StoryObj } from '@storybook/angular';
import { DividerComponent } from 'ui';

const meta: Meta<DividerComponent> = {
  title: 'Atoms/Divider',
  component: DividerComponent,
};

export default meta;

type Story = StoryObj<DividerComponent>;

export const Horizontal: Story = {};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args: Partial<DividerComponent>) => ({
    props: args,
    template: `
      <div style="height: 96px; display: flex; align-items: stretch;">
        <ui-divider [orientation]="orientation"></ui-divider>
      </div>
    `,
  }),
};
