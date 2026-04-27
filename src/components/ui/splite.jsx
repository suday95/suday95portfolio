import { Suspense, lazy, Component, useState } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

class SplineErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) return this.props.fallback ?? null
    return this.props.children
  }
}

function DefaultFallback() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3 opacity-30">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border border-purple-400/50 animate-ping" />
        <div className="absolute inset-2 rounded-full border border-cyan-400/50 animate-spin" />
        <div className="absolute inset-4 rounded-full bg-purple-600/40" />
      </div>
      <p className="text-gray-500 text-[10px] tracking-widest uppercase">Loading scene…</p>
    </div>
  )
}

/**
 * @param {string}      scene     – prod.spline.design/…/scene.splinecode URL
 * @param {string}      className
 * @param {ReactNode}   fallback  – shown on load error; defaults to DefaultFallback
 */
export function SplineScene({ scene, className, fallback }) {
  const [loadError, setLoadError] = useState(false)
  const errorUI = fallback ?? <DefaultFallback />

  if (loadError) return <div className={className}>{errorUI}</div>

  return (
    <SplineErrorBoundary fallback={<div className={className}>{errorUI}</div>}>
      <Suspense fallback={<div className={className}><DefaultFallback /></div>}>
        <Spline
          scene={scene}
          className={className}
          onError={() => setLoadError(true)}
        />
      </Suspense>
    </SplineErrorBoundary>
  )
}
