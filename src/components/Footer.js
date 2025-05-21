import React from 'react';

export default function Footer() {
  return (
    <footer style={{ textAlign:'center', color:'var(--fg-2)', marginTop:'40px' }}>
      © {new Date().getFullYear()} Arnapurna. All rights reserved.
    </footer>
  );
}
