import RadiosInput from './RadiosInput';
const id = 'radiosInput';
const handleChange = (item) => {
  return { id: id | undefined, value: item };
};
let defaultVal = { label: 'Option 1', value: 'option1' };

export default {
  title: 'Components/inputs/RadiosInput',
  component: RadiosInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Input 의 Items',
      control: 'object',
      table: {
        category: 'Control',
        type: { summary: 'Array' },
        defaultValue: { summary: undefined },
        description: 'Input 의 Items 설정.',
      },
    },
    value: {
      description:
        'Input 의 Checked \n ```\nvalue = { label: "Option 1", value: "option1" } or "option1"\n```',
      control: 'text',
      table: {
        category: 'Control',
        type: { summary: 'String | Object' },
        defaultValue: { summary: undefined },
        description: 'Items의 value 값과 비교하여 Checked 설정.',
      },
    },
    id: {
      description: 'Input 의 ID',
      control: 'text',
      table: {
        category: 'Control',
        type: { summary: 'String' },
        defaultValue: { summary: undefined },
        description: 'Input 의 ID 설정.',
      },
    },
    onChange: {
      description: 'OnChange 이벤트',
      control: 'function',
      table: {
        category: 'Control',
        type: { summary: 'function' },
        defaultValue: { summary: 'onChange', detail: handleChange.toString() },
        description: 'Input 의 Change 이벤트 설정.',
      },
    },
    sortDirection: {
      description: 'Input 의 Sort Direction',
      control: 'select',
      options: ['row', 'column'],
      table: {
        category: 'Control',
        type: { summary: 'String' },
        defaultValue: { summary: 'row' },
        description: 'Input 의 Sort Direction 설정.',
      },
    },
    gap: {
      description: 'Input 의 Gap',
      control: 'number',
      table: {
        category: 'Control',
        type: { summary: 'Number' },
        defaultValue: { summary: 10 },
        description: 'Input 의 Gap 설정.',
      },
    },
    itemGap: {
      description: 'Input 의 Item Gap',
      control: 'number',
      table: {
        category: 'Control',
        type: { summary: 'Number' },
        defaultValue: { summary: 5 },
        description: 'Input 의 Item Gap 설정.',
      },
    },

    paddingY: {
      description: 'Input 의 Padding Y',
      control: 'number',
      table: {
        category: 'Control',
        type: { summary: 'Number' },
        defaultValue: { summary: 0 },
        description: 'Input 의 Padding Y 설정.',
      },
    },
    paddingX: {
      description: 'Input 의 Padding X',
      control: 'number',
      table: {
        category: 'Control',
        type: { summary: 'Number' },
        defaultValue: { summary: 0 },
        description: 'Input 의 Padding X 설정.',
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
  },
};

export const Default = {
  args: {
    items: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    value: defaultVal,
    onChange: (item) => (defaultVal = item),
  },
};
