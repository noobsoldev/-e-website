/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Copy, Check, ExternalLink, Twitter, TrendingUp, Zap, Info, ShoppingCart, BarChart3 } from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const contractAddress = "6wPeEd857NsTZajdQNbWrNXSMKQZHv9C1AoDjCTYpump";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const Logo = ({ className = "w-32 h-32" }) => (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
        <circle cx="50" cy="50" r="48" fill="#1E40FF" stroke="black" strokeWidth="2" />
        <path d="M25 75 L75 75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" opacity="0.5" />
        <path d="M30 25 L30 80" stroke="white" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" opacity="0.5" />
        <path 
          d="M30 75 Q45 75 55 60 T80 20" 
          fill="none" 
          stroke="#2DFF00" 
          strokeWidth="5" 
          strokeLinecap="round"
        />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#2DFF00] selection:text-black grid-bg">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-black bg-white ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Logo className="w-10 h-10" />
            <span className="font-black text-2xl tracking-tighter">e^x</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://twitter.com/i/communities/2025413413665386760" 
              target="_blank" 
              className="hidden sm:flex items-center gap-2 font-bold uppercase text-sm hover:text-[#1E40FF] transition-colors"
            >
              <Twitter size={16} />
              Community
            </a>
            <button 
              onClick={copyToClipboard}
              className="bg-[#2DFF00] border-2 border-black px-4 py-1.5 font-bold text-sm uppercase flex items-center gap-2 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none transition-all"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Copied' : 'Copy CA'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 border-b-2 border-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <div className="inline-block bg-[#1E40FF] text-white px-4 py-1 font-mono text-sm mb-6 border-2 border-black brutal-shadow">
              LAUNCHED ON PUMP.FUN
            </div>
            <h1 className="text-7xl sm:text-9xl font-black leading-[0.85] tracking-tighter mb-6">
              EXPONENTIAL<br />
              <span className="text-[#1E40FF]">GROWTH</span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium max-w-lg mb-10 leading-tight">
              The only math that matters in the trenches. e^x is the constant of the universe, and the fuel for the next leg up.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://x.com/elonmusk/status/2021846151998128464" 
                target="_blank"
                className="bg-black text-white px-8 py-4 font-bold text-lg uppercase flex items-center gap-3 hover:bg-[#1E40FF] transition-colors brutal-shadow-blue"
              >
                Elon's Vision <ExternalLink size={20} />
              </a>
              <a 
                href="https://twitter.com/i/communities/2025413413665386760" 
                target="_blank"
                className="bg-white text-black border-2 border-black px-8 py-4 font-bold text-lg uppercase flex items-center gap-3 hover:bg-[#2DFF00] transition-colors brutal-shadow-green"
              >
                Join Trench <Zap size={20} />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Logo className="w-64 h-64 sm:w-96 sm:h-96" />
              <div className="absolute -bottom-4 -left-4 bg-[#2DFF00] border-2 border-black p-4 font-mono text-xs brutal-shadow">
                f(x) = e^x
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. TOP BANNER SECTION */}
      <section className="bg-[#2DFF00] border-b-2 border-black py-6 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl sm:text-4xl font-black uppercase tracking-tighter">
            THE CONSTANT OF THE UNIVERSE IS NOW A COIN.
          </p>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-24 px-6 border-b-2 border-black bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Info className="text-[#1E40FF]" size={48} />
            <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tighter">What is e^x?</h2>
          </div>
          <div className="space-y-8 text-2xl sm:text-3xl font-bold leading-tight">
            <p>
              e^x is the only function that remains unchanged by its own derivative. In the trenches, we don't change. We only grow. Exponentially.
            </p>
            <p className="text-[#1E40FF]">
              No roadmap, just math. No promises, just the curve. You either understand the power of compounding memes or you get left at the baseline.
            </p>
            <p className="border-l-8 border-[#2DFF00] pl-6 italic">
              "The greatest shortcoming of the human race is our inability to understand the exponential function."
            </p>
          </div>
        </div>
      </section>

      {/* 3. HOW TO BUY SECTION */}
      <section className="py-24 px-6 border-b-2 border-black bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <ShoppingCart className="text-[#1E40FF]" size={48} />
            <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tighter">How to Buy</h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {[
              { step: "01", title: "Create Wallet", desc: "Download Phantom or Solflare from the app store or as a browser extension." },
              { step: "02", title: "Get SOL", desc: "Buy SOL from an exchange and send it to your wallet address." },
              { step: "03", title: "Go to pump.fun", desc: "Connect your wallet to pump.fun and search for e^x or paste the CA." },
              { step: "04", title: "Swap for $e", desc: "Enter the amount of SOL you want to swap. Confirm the transaction." },
              { step: "05", title: "Hold the Curve", desc: "Watch the exponential growth. Don't be a derivative, be the function." }
            ].map((item, i) => (
              <div key={i} className="bg-white border-2 border-black p-6 flex gap-6 items-start brutal-shadow">
                <span className="text-4xl font-black text-[#1E40FF]">{item.step}</span>
                <div>
                  <h4 className="text-2xl font-black uppercase mb-2">{item.title}</h4>
                  <p className="text-lg opacity-70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TOKENOMICS SECTION */}
      <section className="py-24 px-6 border-b-2 border-black bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <BarChart3 className="text-[#2DFF00]" size={48} />
            <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tighter">Tokenomics</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="border-2 border-black p-8 brutal-shadow-blue">
              <p className="font-mono text-xs uppercase opacity-50 mb-2">Total Supply</p>
              <p className="text-4xl font-black">1,000,000,000</p>
              <p className="text-xl font-bold text-[#1E40FF]">$e</p>
            </div>
            <div className="border-2 border-black p-8 brutal-shadow-green">
              <p className="font-mono text-xs uppercase opacity-50 mb-2">Network</p>
              <p className="text-4xl font-black">SOLANA</p>
              <p className="text-xl font-bold text-[#2DFF00]">Fast & Cheap</p>
            </div>
            <div className="border-2 border-black p-8 brutal-shadow">
              <p className="font-mono text-xs uppercase opacity-50 mb-2">Launch Type</p>
              <p className="text-4xl font-black">FAIR LAUNCH</p>
              <p className="text-xl font-bold">100% pump.fun</p>
            </div>
            <div className="border-2 border-black p-8 brutal-shadow">
              <p className="font-mono text-xs uppercase opacity-50 mb-2">Tax / LP</p>
              <p className="text-4xl font-black">0% TAX</p>
              <p className="text-xl font-bold">LP Burned on Migration</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DEXSCREENER SECTION */}
      <section className="py-24 px-6 border-b-2 border-black bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-12">
            <div className="flex items-center gap-4">
              <TrendingUp className="text-[#2DFF00]" size={48} />
              <h2 className="text-5xl sm:text-6xl font-black uppercase tracking-tighter text-white">Live Chart</h2>
            </div>
            <a 
              href="https://dexscreener.com/solana/amezj1zu9bq9raoggkzeq52xewirde5j8egcqeparpm2" 
              target="_blank"
              className="bg-[#2DFF00] border-2 border-black px-6 py-2 font-bold uppercase flex items-center gap-2 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_white] transition-all"
            >
              Open DexScreener <ExternalLink size={16} />
            </a>
          </div>
          
          <div className="w-full aspect-video border-4 border-black bg-black overflow-hidden brutal-shadow-blue">
            <iframe 
              src="https://dexscreener.com/solana/amezj1zu9bq9raoggkzeq52xewirde5j8egcqeparpm2?embed=1&theme=dark" 
              className="w-full h-full border-none"
              title="DexScreener Chart"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Graph Section (The Curve) */}
      <section className="py-24 px-6 border-b-2 border-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-7xl font-black uppercase mb-4 italic">The Curve</h2>
            <p className="text-xl font-mono uppercase tracking-widest opacity-60">Visualizing the inevitable</p>
          </div>
          
          <div className="bg-white border-4 border-black p-4 sm:p-12 brutal-shadow relative overflow-hidden">
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
            </div>
            
            <svg viewBox="0 0 400 250" className="w-full h-auto">
              <g opacity="0.1">
                {[...Array(10)].map((_, i) => (
                  <line key={`v-${i}`} x1={40 + i * 34} y1="20" x2={40 + i * 34} y2="210" stroke="black" strokeWidth="1" />
                ))}
                {[...Array(6)].map((_, i) => (
                  <line key={`h-${i}`} x1="40" y1={20 + i * 38} x2="380" y2={20 + i * 38} stroke="black" strokeWidth="1" />
                ))}
              </g>
              <path d="M40 210 L380 210" stroke="black" strokeWidth="3" strokeLinecap="round" />
              <path d="M40 20 L40 215" stroke="black" strokeWidth="3" strokeLinecap="round" />
              <text x="380" y="230" textAnchor="end" className="text-[10px] font-mono font-bold">TIME</text>
              <text x="10" y="20" transform="rotate(-90 10,20)" textAnchor="end" className="text-[10px] font-mono font-bold">MARKET CAP</text>
              <path 
                d="M40 200 C 100 200, 200 195, 300 100 S 370 0, 370 0" 
                fill="none" 
                stroke="#2DFF00" 
                strokeWidth="8" 
                strokeLinecap="round"
                className="drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
              />
              <g>
                <circle cx="120" cy="198" r="6" fill="#1E40FF" stroke="black" strokeWidth="2" />
                <text x="135" y="205" className="text-[14px] font-black italic fill-[#1E40FF]">WE ARE HERE</text>
                <path d="M120 198 L130 200" stroke="black" strokeWidth="1" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Contract Section */}
      <section className="py-24 px-6 bg-[#1E40FF] text-white border-b-2 border-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="grid-bg w-full h-full invert"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-6xl font-black uppercase mb-12 tracking-tighter">Secure the Constant</h2>
          
          <div className="bg-white text-black border-4 border-black p-2 sm:p-4 mb-8 flex flex-col sm:flex-row items-center gap-4 brutal-shadow">
            <div className="flex-1 font-mono text-sm sm:text-lg break-all px-4 py-2 bg-zinc-100 border-2 border-black w-full text-left">
              {contractAddress}
            </div>
            <button 
              onClick={copyToClipboard}
              className="w-full sm:w-auto bg-[#2DFF00] border-2 border-black px-8 py-4 font-black uppercase flex items-center justify-center gap-3 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none transition-all whitespace-nowrap"
            >
              {copied ? <Check size={24} /> : <Copy size={24} />}
              {copied ? 'Copied' : 'Copy CA'}
            </button>
          </div>
          
          <p className="font-mono text-sm opacity-80 uppercase tracking-widest">
            Verified on Solana • No Tax • Liquidity Burned
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Logo className="w-12 h-12" />
              <span className="font-black text-4xl tracking-tighter">e^x</span>
            </div>
            <p className="text-xl font-bold max-w-sm leading-tight uppercase">
              The only math that matters.<br />
              Exponential or nothing.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest opacity-50 mb-6">Socials</h4>
              <ul className="space-y-4 font-bold uppercase">
                <li><a href="https://twitter.com/i/communities/2025413413665386760" className="hover:text-[#1E40FF] transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-[#1E40FF] transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-[#1E40FF] transition-colors">DexScreener</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest opacity-50 mb-6">Legal</h4>
              <p className="text-[10px] opacity-50 max-w-[150px] uppercase leading-tight">
                $e is a meme coin with no intrinsic value. Math is law, but markets are chaos.
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t-2 border-black flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase opacity-50">
          <p>© 2024 e^x Exponential Coin. All rights reserved.</p>
          <p>Inspired by math • Fueled by memes</p>
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{ __html: `
        // Minimal JS for scroll handling if needed, but keeping it simple
      `}} />
    </div>
  );
}
