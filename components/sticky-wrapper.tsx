type Props = {
  children: React.ReactNode
};

const StickyWrapper = ({ children }: Props) => {
  return (
    <div className="hidden lg:block w-[268px] sticky self-end bottom-6">
      <div className="min-h-[calc(100vh-84px)] sticky top-8 flex flex-col gap-y-4">
        {children}
      </div>
    </div>
  )
}

export default StickyWrapper