import ndrt from '../assets/icons/ndrt.svg'
import code from '../assets/icons/code.svg'

const svgs = {
  ndrt: ndrt,
  code: code,
}

export type IconKey = keyof typeof svgs

export interface IconProps extends React.ComponentPropsWithRef<'svg'> {
  iconName?: IconKey
  secondaryColor?: string
}

export const Icon = ({ iconName, ...props }: IconProps) => {
  if (iconName) {
    const Icon = svgs[iconName]
    if (Icon) return <Icon {...props} />
  }
  return null
}

Icon.displayName = 'IconProps'

export default Icon
