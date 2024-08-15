import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import * as pkg from '~/../package.json'

const socialList = [
  {
    type: 'github',
    color: 'inherit',
    icon: 'i-mdi-github',
    label: 'GitHub: YunYouJun',
    href: 'https://github.com/YunYouJun',
  },
  {
    type: 'telegram',
    color: '#1da1f2',
    icon: 'i-mdi-telegram',
    label: 'Telegram Channel',
    href: 'https://t.me/elpsycn',
  },
  {
    type: 'weibo',
    color: '#DB2828',
    icon: 'i-mdi-sina-weibo',
    label: '微博：机智的云游君',
    href: 'http://weibo.com/jizhideyunyoujun',
  },
  {
    type: 'twitter',
    color: '#1da1f2',
    icon: 'i-mdi-twitter',
    label: 'Twitter: YunYouJun',
    href: 'https://twitter.com/YunYouJun',
  },
  {
    type: 'wechat',
    color: '#1AAD19',
    icon: 'i-mdi-wechat',
    label: '微信公众号：云游君',
    href: 'https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg',
  },
  {
    type: 'blog',
    color: '#6435C9',
    icon: 'i-mdi-earth',
    label: '博客：yunyoujun.cn',
    href: 'http://www.yunyoujun.cn',
  },
]

const Copyright: React.FC = () => {
  return (
    <div className="opacity-80 text-xs text-center mt-8">
      <div className="ac-text flex justify-center items-center m-2">
        {'© '}
        <a href={pkg.repository.url} target="_blank" rel="noreferrer">
          PaiDaXing
        </a>
        <a
          className="inline-flex"
          href="https://space.bilibili.com/296465852"
          target="_blank"
          rel="noreferrer"
          style={{ color: '#0078e7' }}
        >
          <div className="i-mdi-cloud text-sm mx-1" />
        </a>
        <a href={pkg.author.url} target="_blank" rel="noreferrer">
          我爱吃派大星 @
          {pkg.author.name}
        </a>
      </div>
      <p>
        {`2023 - ${new Date().getFullYear()}`}
      </p>
    </div>
  )
}

export default Copyright
