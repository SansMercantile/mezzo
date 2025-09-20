import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-deep-space animate-gradient-flow bg-[length:200%_200%] bg-gradient-to-br from-deep-space via-[#100f28] to-deep-space"></div>
      <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_20%_20%,theme(colors.glow-purple),transparent_25%),radial-gradient(circle_at_80%_70%,theme(colors.glow-blue),transparent_25%)] opacity-10"></div>
    </div>
  );
};

export default Background;