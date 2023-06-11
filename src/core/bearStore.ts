import { create } from 'zustand';

interface BearState {
  colors: Array<object>;
  updateColors: (updatedColors: Array<object>) => void
}

export const useBearStore = create<BearState>()((set) => ({
  colors: [
    {
      id: 'primary',
      title: 'Primary color',
      color: '#3A4F39',
    },
    {
      id: 'accent',
      title: 'Accent color',
      color: '',
    },
    {
      id: 'button',
      title: 'Button text color',
      color: '#FDFFFC',
    },
    {
      id: 'text',
      title: 'Text color',
      color: '#011627',
    },
    {
      id: 'primary_background',
      title: 'Primary background',
      color: '#FDFFFC',
    },
    {
      id: 'accent_background',
      title: 'Accent background',
      color: '#E1E5E1',
    },
  ],
  updateColors: (updatedColors) => set(() => ({ colors: updatedColors })),
}));

export function getColor(id: string) {
    const colors = useBearStore((state) => state.colors);
    const obj = colors.filter((color) => color.id === id)[0];
    return obj.color;
}
