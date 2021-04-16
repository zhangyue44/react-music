import React, { memo } from 'react'
import routes from '@/router'
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'

import ZYAppHeader from '@/components/app-header'
import ZYAppFooter from '@/components/app-footer'

export default memo(function App() {
  return (
    <HashRouter>
      <ZYAppHeader />
      { renderRoutes(routes) }
      <ZYAppFooter />
    </HashRouter>
  )
})
