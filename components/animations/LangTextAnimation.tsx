import langColors from '@/constans/langColors'
import { useMounted } from '@/contexts/MountContext'
import { memo, useEffect, useState } from 'react'
import TextTransition, { presets } from 'react-text-transition'

const LangTextAnimation = memo(({ items }: { items: string[] }) => {
  const mounted = useMounted()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => (index === items.length - 1 ? 0 : index + 1)), 3000)
    return () => clearTimeout(intervalId)
  }, [items])

  return (
    <>
      {mounted && (
        <div className="relative inline-block text-sm font-bold">
          <TextTransition springConfig={presets.wobbly} inline>
            {items[index]}
          </TextTransition>
          <span
            className="absolute top-1/2 -right-6 block h-[1em] w-[1em] -translate-y-1/2 rounded-full pt-px transition-colors duration-500"
            style={{ backgroundColor: langColors[items[index]] }}
          />
        </div>
      )}
    </>
  )
})

export default LangTextAnimation
