import { Meta, StoryObj } from '@storybook/angular';
import { TextComponent } from 'ui';

const meta: Meta<TextComponent> = {
  title: 'Atoms/Text',
  component: TextComponent,
  render: (args: Partial<TextComponent>) => ({
    props: args,
    template: `
      <ui-text [element]="element" [tone]="tone" [weight]="weight" [size]="size">
        Escala tipografica do design system.
      </ui-text>
    `,
  }),
  args: {
    element: 'p',
    tone: 'default',
    weight: 'regular',
    size: 'md',
  },
};

export default meta;

type Story = StoryObj<TextComponent>;

export const Default: Story = {};

export const Heading: Story = {
  args: {
    element: 'h2',
    weight: 'semibold',
    size: 'xl',
  },
};
