import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Size : lg | md | sm | xs | fold',
      control: 'select',
      options: ['lg', 'md', 'sm', 'xs', 'fold'],
      table: {
        category: 'Control',
        type: { summary: 'String' },
        defaultValue: { summary: 'lg' },
        description: '버튼 사이즈를 설정.',
      },
    },
    label: {
      description: '버튼 라벨',
      control: 'text',
      table: {
        category: 'Control',
        type: { summary: 'String' },
        defaultValue: { summary: undefined },
        description: '버튼 라벨을 설정.',
      },
    },
    bg: {
      description: '버튼 배경색',
      control: 'color',
      table: {
        category: 'Control',
        type: { summary: 'String' },
        defaultValue: { summary: '#3b82f6' },
        description: '버튼 배경색을 설정.',
      },
    },
    disabled: {
      description: '버튼 비활성화',
      control: 'boolean',
      table: {
        category: 'Control',
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
        description: '버튼 비활성화 여부를 설정.',
      },
    },
    onClick: {
      description: 'OnClick 이벤트',
      control: 'function',
      table: {
        category: 'Control',
        type: { summary: 'function' },
        defaultValue: { summary: undefined },
        description: '버튼 클릭 이벤트를 설정.',
      },
    },
  },
};

export const PC = {
  args: {
    size: 'lg',
    label: 'Button',
  },
};

export const Tablet = {
  args: {
    size: 'md',
    label: 'Button',
  },
};

export const Mobile = {
  args: {
    size: 'sm',
    label: 'Button',
  },
};

export const Fold = {
  args: {
    size: 'xs',
    label: 'Button',
  },
};
