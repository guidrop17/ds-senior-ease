import { Meta, StoryObj } from '@storybook/angular';
import { faBookOpen, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { CardButtonComponent } from 'ui';

const meta: Meta<CardButtonComponent> = {
  title: 'Atoms/Card Button',
  component: CardButtonComponent,
  args: {
    title: 'Meu Caderno',
    description: 'Suas licoes salvas aqui.',
    leadingIcon: faBookOpen,
    trailingIcon: faChevronRight,
    ariaLabel: 'Meu Caderno. Suas licoes salvas aqui.',
  },
};

export default meta;

type Story = StoryObj<CardButtonComponent>;

export const Default: Story = {};

export const WithoutDescription: Story = {
  args: {
    title: 'Agenda do Dia',
    description: '',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const HighContrastIconStyle: Story = {
  args: {
    iconContainerClass: 'bg-primary-light text-black',
  },
};
