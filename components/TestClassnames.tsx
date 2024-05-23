'use client'
import { localStg } from '@/utils'
import { classNames } from '@/utils/classNames'
import { useEffect } from 'react'
const TestClassnames: React.FC<{ className: string }> = ({ className }) => {
  useEffect(() => {
    // 测试localStg
    console.log(window, 'window')
    const stg = localStg()
    stg.set('test', 'test')
  }, [])
  return (
    <div className={classNames('transition-all hover:underline hover:text-red-300 text-gray-80', className)}>
      TestClassnames
    </div>
  )
}
export default TestClassnames
