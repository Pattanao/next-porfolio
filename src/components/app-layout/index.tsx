import { Content } from './content'
import { Header } from './header'

interface AppLayoutProps {
  children: React.ReactNode
}
export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <Header />
      <Content>{children}</Content>
    </div>
  )
}
