// Setup
import { computed } from 'vue'
import propsFactory from '@/util/propsFactory'
import { convertToUnit } from '@/util'

const predefinedSizes = ['x-small', 'small', 'default', 'large', 'x-large']

export interface SizeProps {
  size: string | number
}

// Props
export const makeSizeProps = propsFactory({
  size: {
    type: [String, Number],
    default: 'default',
  },
}, 'size')

// Effect
export function useSize (props: SizeProps, name: string) {
  const sizeClasses = computed(() => {
    return predefinedSizes.includes(props.size as string)
      ? `${name}--size-${props.size}`
      : null
  })

  const sizeStyles = computed(() => {
    return !predefinedSizes.includes(props.size as string)
      ? ({
        width: convertToUnit(props.size),
        height: convertToUnit(props.size),
      }) : null
  })

  return { sizeClasses, sizeStyles }
}
