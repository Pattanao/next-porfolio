export const Content: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen pt-16 -mt-16">
      {children}
    </div>
  )
}
