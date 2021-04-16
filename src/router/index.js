import ZYDiscover from '@/pages/discover'
import ZYFriend from '@/pages/friend'
import ZYMine from '@/pages/mine'
import ZYPlayer from '@/pages/player'

const routes = [
  {
    path: '/',
    exact: true,
    component: ZYDiscover
  },
  {
    path: '/mine',
    component: ZYMine
  },
  {
    path: '/friend',
    component: ZYFriend
  },
  {
    path: '/player',
    component: ZYPlayer
  },
]

export default routes;