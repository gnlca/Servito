import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconName: string
}

export const DynamicIcon: React.FC<IconProps> = ({ iconName, ...svgProps }) => {
  const ImportedIconRef = React.useRef<React.FC<React.SVGProps<SVGSVGElement>>>()
  const [loading, setLoading] = React.useState(false)

  React.useEffect((): void => {
    setLoading(true)
    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (await import(`../assets/icons/${iconName}`)).default
      } catch (err) {
        throw new Error('Servito__Error: dynamic icon import failed')
      } finally {
        setLoading(false)
      }
    }
    importIcon()
  }, [iconName])

  if (!loading && ImportedIconRef.current) {
    const ImportedIcon = ImportedIconRef.current
    return <ImportedIcon {...svgProps} />
  } else {
    return null
  }
}
