import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const BRAND_CARD_SIZE = { width: 1200, height: 630 };

export async function renderBrandCard() {
  const logoData = await readFile(join(process.cwd(), 'public/icons/icon-192.png'));
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '80px',
        backgroundImage:
          'linear-gradient(135deg, #041e24 0%, #0a3d47 55%, #146a82 100%)',
      }}
    >
      <img
        src={logoSrc}
        alt=""
        width={220}
        height={220}
        style={{
          borderRadius: 28,
          marginRight: 64,
          boxShadow: '0 0 0 2px rgba(255,255,255,0.15)',
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 780 }}>
        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#e8a838',
            marginBottom: 20,
          }}
        >
          Awareness &middot; Prevention &middot; Response
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 62,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: 12,
          }}
        >
          <span>A Place Called</span>
          <span>Home</span>
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: '#7fb8c4',
            marginBottom: 24,
          }}
        >
          - Ikhaya
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#a9d4de',
            lineHeight: 1.4,
          }}
        >
          Protecting children. Ending silence. Restoring hope.
        </div>
      </div>
    </div>
  );
}
