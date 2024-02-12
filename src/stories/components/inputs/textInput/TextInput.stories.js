import TextInput from './TextInput';

export default {
  title: 'Components/inputs/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    border: {
      description: 'Input 의 Border 컬러',
      control: 'color',
      table: {
        category: 'Control',
        type: { summary: 'String' },
        defaultValue: { summary: '#ebebf0' },
        description: 'Input 의 Border 컬러 설정.',
      },
    },
    borderWidth: {
      description: 'Input 의 Border Width',
      control: 'number',
      table: {
        category: 'Control',
        type: { summary: 'Number' },
        defaultValue: { summary: '1px' },
        description: 'Input 의 Border Width 설정.',
      },
    },
    borderStyle: {
      description: 'Input 의 Border Style',
      control: 'text',
      table: {
        category: 'Control',
        type: { summary: 'String' },
        defaultValue: { summary: 'solid' },
        description: 'Input 의 Border Style 설정.',
      },
    },
    rounded: {
      description: 'Input 의 Border Radius',
      control: 'number',
      table: {
        category: 'Control',
        type: { summary: 'Number' },
        defaultValue: { summary: 5 },
        description: 'Input 의 Border Radius 설정.',
      },
    },
    placeholder: {
      description: 'Input 의 Placeholder',
      control: 'text',
      table: {
        category: 'Control',
        type: { summary: 'String' },
        defaultValue: { summary: undefined },
        description: 'Input 의 Placeholder 설정.',
      },
    },
    paddingY: {
      description: 'Input 의 상하 Padding',
      control: 'number',
      table: {
        category: 'Control',
        type: { summary: 'Number' },
        defaultValue: { summary: 10 },
        description: 'Input 의 상하 Padding 설정.',
      },
    },
    paddingX: {
      description: 'Input 의 좌우 Padding',
      control: 'number',
      table: {
        category: 'Control',
        type: { summary: 'Number' },
        defaultValue: { summary: 20 },
        description: 'Input 의 좌우 Padding 설정.',
      },
    },

    fontSize: {
      description: 'Input 의 Font Size',
      control: 'number',
      table: {
        category: 'Control',
        type: { summary: 'Number' },
        defaultValue: { summary: 16 },
        description: 'Input 의 Font Size 설정.',
      },
    },
    fontWeight: {
      description: 'Input 의 Font Weight',
      control: 'number',
      table: {
        category: 'Control',
        type: { summary: 'Number' },
        defaultValue: { summary: 500 },
        description: 'Input 의 Font Weight 설정.',
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
    onChange: {
      description: 'onChange 이벤트',
      control: 'function',
      table: {
        category: 'Control',
        type: { summary: 'function' },
        defaultValue: { summary: undefined },
        description: 'Input 변경 이벤트를 설정.',
      },
    },
  },
};

export const Default = {
  args: {
    border: '#3b82f6',
  },
};
