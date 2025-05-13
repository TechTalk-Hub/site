import * as React from 'react'
import Giscus from '@giscus/react'

const id = 'inject-comments'

// 获取网站的主题，通过html标签的data-theme属性设置
function getSiteTheme () {
  return document.documentElement.getAttribute("data-theme") ?? 'light';
}

// 获取系统主题
function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const Comments = () => {
  const [mounted, setMounted] = React.useState(false)
  const [theme, setTheme] = React.useState('light')

  React.useEffect(() => {
    const theme = getSiteTheme() ?? getSystemTheme()
    setTheme(theme)
    // 监听主题变化
    const observer = new MutationObserver(() => {
      const currentTheme = getSiteTheme()
      setTheme(currentTheme)
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    // 取消监听
    return () => {
      observer.disconnect()
    }
  }, [])

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div id={id} className="w-full">
      {mounted ? (
        <Giscus
          id={id}
          repo="TechTalk-Hub/site"
          repoId="R_kgDOOg1Lew"
          category="Announcements"
          categoryId="DIC_kwDOOg1Le84CqEz4"
          mapping="title"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          lang="zh-CN"
          loading="lazy"
          theme={theme}
        />
      ) : null}
    </div>
  )
}

export default Comments