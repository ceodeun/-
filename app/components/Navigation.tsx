'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  
  const isActive = (path: string) => pathname === path
  
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 24px',
      borderBottom: '1px solid #E5E7EB',
      background: '#FFFFFF',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <Link href="/" style={{
        fontSize: 20,
        fontWeight: 800,
        color: '#F43F75',
        textDecoration: 'none',
      }}>
        과외하자
      </Link>
      
      <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        <Link href="/teachers" style={{
          fontSize: 14,
          color: isActive('/teachers') ? '#F43F75' : '#6B7280',
          textDecoration: 'none',
          fontWeight: isActive('/teachers') ? 600 : 400,
        }}>
          선생님 찾기
        </Link>
        <Link href="/signup" style={{
          fontSize: 14,
          padding: '8px 16px',
          borderRadius: 8,
          background: '#F43F75',
          color: '#FFFFFF',
          textDecoration: 'none',
          fontWeight: 600,
        }}>
          시작하기
        </Link>
      </div>
    </nav>
  )
}