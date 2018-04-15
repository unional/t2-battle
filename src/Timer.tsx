import * as React from 'react'


export default function Timer({ seconds }: { seconds: number }) {
  return (
    <div style={{ fontSize: '150px' }}>
      {Math.floor(seconds / 60)}:{seconds % 60}
    </div>
  );
}
