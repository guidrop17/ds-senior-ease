declare module '*.md' {
  const content: string;
  export default content;
}

declare module '*.scss' {
  const content: string;
  export default content;
}

declare module '@storybook/angular' {
  export interface StorybookConfig {
    stories?: string[];
    addons?: string[];
    framework?: string;
  }

  export interface Preview {
    parameters?: Record<string, unknown>;
  }

  export interface Meta<TComponent = Record<string, unknown>> {
    title?: string;
    component?: unknown;
    args?: Partial<TComponent> | Record<string, unknown>;
    render?: (args: Partial<TComponent> | Record<string, unknown>) => unknown;
  }

  export type StoryObj<TComponent = Record<string, unknown>> = {
    args?: Partial<TComponent> | Record<string, unknown>;
    render?: (args: Partial<TComponent> | Record<string, unknown>) => unknown;
  };
}
