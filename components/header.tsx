// import Link from 'next/link'

export default function Header({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className="hoge">
      <h1>Age Checker</h1>
    </div>
  )
}
