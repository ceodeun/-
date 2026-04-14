'use client'
import Link from 'next/link'
import Navigation from './components/Navigation'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <div style={{ padding: '60px 24px', maxWidth: 1200, margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <h1 style={{
            fontSize: 48,
            fontWeight: 800,
            marginBottom: 16,
            color: '#1B2A52',
            lineHeight: 1.2,
          }}>
            나에게 맞는 과외 선생님을<br />쉽게 찾아보세요
          </h1>
          <p style={{
            fontSize: 18,
            color: '#6B7280',
            marginBottom: 32,
            lineHeight: 1.6,
          }}>
            학생, 학부모, 선생님을 연결하는 신뢰할 수 있는 과외 매칭 플랫폼
          </p>
          
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/signup">
              <button style={{
                padding: '16px 40px',
                borderRadius: 12,
                background: '#F43F75',
                color: '#FFFFFF',
                fontSize: 16,
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
              }}>
                지금 시작하기 →
              </button>
            </Link>
            <Link href="/teachers">
              <button style={{
                padding: '16px 40px',
                borderRadius: 12,
                background: '#F5F0E8',
                color: '#1B2A52',
                fontSize: 16,
                fontWeight: 700,
                cursor: 'pointer',
                border: 'none',
              }}>
                선생님 둘러보기
              </button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 32,
          marginTop: 80,
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: 48,
              marginBottom: 16,
            }}>
              🎓
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
              검증된 선생님
            </h3>
            <p style={{ color: '#6B7280', lineHeight: 1.6 }}>
              엄격한 심사를 거친 전문 선생님들만 등록
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: 48,
              marginBottom: 16,
            }}>
              ⚡
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
              빠른 매칭
            </h3>
            <p style={{ color: '#6B7280', lineHeight: 1.6 }}>
              AI 기반 매칭으로 최적의 선생님을 빠르게 찾기
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: 48,
              marginBottom: 16,
            }}>
              💯
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
              신뢰할 수 있는 플랫폼
            </h3>
            <p style={{ color: '#6B7280', lineHeight: 1.6 }}>
              투명한 가격 정책과 안전한 거래 보장
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'linear-gradient(135deg, #F43F75 0%, #F43F75 100%)',
          borderRadius: 20,
          padding: 60,
          textAlign: 'center',
          color: '#FFFFFF',
          marginTop: 80,
        }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 16 }}>
            과외 선생님을 찾고 있나요?
          </h2>
          <p style={{ fontSize: 16, marginBottom: 32, opacity: 0.9 }}>
            지금 바로 시작해보세요. 무료로 등록하고 맞는 선생님을 찾아보세요.
          </p>
          <Link href="/signup">
            <button style={{
              padding: '16px 40px',
              borderRadius: 12,
              background: '#FFFFFF',
              color: '#F43F75',
              fontSize: 16,
              fontWeight: 700,
              cursor: 'pointer',
              border: 'none',
            }}>
              회원가입 →
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}