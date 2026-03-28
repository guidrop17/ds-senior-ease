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

export const GhostPrimary: Story = {
  args: {
    variant: 'ghost',
    context: 'primary',
    label: 'Ghost primary',
  },
};

export const GhostSecondary: Story = {
  args: {
    variant: 'ghost',
    context: 'secondary',
    label: 'Ghost secondary',
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

export const FullWidth: Story = {
  args: {
    label: 'Acao em largura total',
    fullWidth: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 320px;">
        <ui-button
          [label]="label"
          [variant]="variant"
          [context]="context"
          [size]="size"
          [fullWidth]="fullWidth"
          [disabled]="disabled"
          [ariaLabel]="ariaLabel"
          [ariaPressed]="ariaPressed"
          [ariaExpanded]="ariaExpanded"
          [ariaControls]="ariaControls"
          [ariaDescribedBy]="ariaDescribedBy"
        ></ui-button>
      </div>
    `,
  }),
};

export const FullHeight: Story = {
  args: {
    label: 'Acao em altura total',
    fullHeight: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="height: 96px;">
        <ui-button
          [label]="label"
          [variant]="variant"
          [context]="context"
          [size]="size"
          [fullWidth]="fullWidth"
          [fullHeight]="fullHeight"
          [disabled]="disabled"
          [ariaLabel]="ariaLabel"
          [ariaPressed]="ariaPressed"
          [ariaExpanded]="ariaExpanded"
          [ariaControls]="ariaControls"
          [ariaDescribedBy]="ariaDescribedBy"
        ></ui-button>
      </div>
    `,
  }),
};
