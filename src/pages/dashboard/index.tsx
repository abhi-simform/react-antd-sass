import { Outlet } from 'react-router-dom'
import { MenuProps, Layout, Menu } from 'antd'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import './dashboard.scss'

const items = new Array(3).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`
}))

const items2: MenuProps['items'] = [1, 2, 3].map((icon, index) => {
  return {
    key: `${index + 1}`,
    icon,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1
      return {
        key: subKey,
        label: `option${subKey}`
      }
    })
  }
})

export default function DashboardLayout() {
  const { Content, Header, Sider } = Layout
  return (
    <Layout className="dashboard__layout">
      <Sider className="dashboard__sider" breakpoint="lg" collapsible>
        <Menu
          className="dashboard__sider__menu"
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          items={items2}
        />
      </Sider>
      <Layout>
        <Header className="dashboard__header">
          <img src="/images/logo.svg" alt="simform logo" width={122} height={22} />
          <Menu mode="horizontal" defaultSelectedKeys={['2']} items={items} />
          <ThemeSwitcher />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
