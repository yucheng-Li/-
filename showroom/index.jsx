import React from 'react'
import createPage from '../../components/create-page'
import xicon from './img/x.png'
import bg from './img/bg.png'
import pcIcon from './img/pc-icon.png'
import ipadIcom from './img/ipad-icon.png'
import installIcon from './img/install-icon.png'
import './index.scss'

function Page() {
  const ua = navigator.userAgent
  function getType() {
    if (ua.match(/Apple/i)) {
      if (ua.match(/iPhone OS|iPad/i)) {
        return "ios"
      } else if (ua.match(/iPad/i)) {
        return "ipad"
      }
    } else if (ua.match(/Android/)) {
      return "android"
    } if (ua.match(/Mac OS X/i)) {
      return "mac"
    } else {
      return "win"
    }
  }
  return (
    <div className='page'>
      <div className='bg-pc'>
        <img src={bg} alt="" width="100%" height="100%" />
      </div>
      <div className='info-contain'>
        <div className='title'>
          <h1>3D 云展厅</h1>
          <img src={xicon} alt="" />
        </div>
        <div className='info'>
          <span>线下没实车？不要急</span>
          <span>使用3D云展厅，带客户无忧看车</span>
        </div>
        <div className='button-contain'>
          <div className='button'>
            <img className='pc-icon' src={pcIcon} alt="" />
            <span>下载iMac版本</span>
          </div>
          <div className='button'>
            <img className='ipad-icon' src={ipadIcom} alt="" />
            <span>下载iPad版本</span>
          </div>
        </div>
        <div className='install'>
          <span>安装指引</span>
          <img src={installIcon} alt="" />
        </div>
      </div>
      <p>当前设备: {getType()} </p>
    </div>
  )
}

export default createPage(Page)
