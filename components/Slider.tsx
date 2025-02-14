"use client"

import * as RadixSlider from "@radix-ui/react-slider"

interface SliderProps {
  value?: number
  onChange?: (value: number) => void
}

const Slider: React.FC<SliderProps> = ({ value = 1, onChange }) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0])
  }

  return (
    <RadixSlider.Root
      className="relative flex h-10 w-full touch-none select-none items-center"
      defaultValue={[1]}
      value={[value]}
      onValueChange={handleChange}
      max={1}
      step={0.1}
      aria-label="Volume"
    >
      <RadixSlider.Track className="relative h-[3px] grow rounded-full bg-neutral-600">
        <RadixSlider.Range className="rounded-fulll absolute h-full bg-white" />
      </RadixSlider.Track>
    </RadixSlider.Root>
  )
}

export default Slider
